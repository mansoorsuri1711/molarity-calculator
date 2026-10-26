/** Unit factors relative to base SI-ish units: g, L, mol/L, g/mol */

export type MassUnit = "kg" | "g" | "mg" | "ug";
export type VolumeUnit = "L" | "mL" | "uL";
export type ConcUnit = "M" | "mM" | "uM" | "nM";

export const MASS_TO_G: Record<MassUnit, number> = {
  kg: 1000,
  g: 1,
  mg: 1e-3,
  ug: 1e-6,
};

export const VOL_TO_L: Record<VolumeUnit, number> = {
  L: 1,
  mL: 1e-3,
  uL: 1e-6,
};

export const CONC_TO_M: Record<ConcUnit, number> = {
  M: 1,
  mM: 1e-3,
  uM: 1e-6,
  nM: 1e-9,
};

export type Compound = {
  id: string;
  name: string;
  formula: string;
  mw: number;
};

/** Common lab compounds (anhydrous unless noted). MW in g/mol. */
export const COMMON_COMPOUNDS: Compound[] = [
  { id: "nacl", name: "Sodium chloride", formula: "NaCl", mw: 58.44 },
  { id: "glucose", name: "D-Glucose", formula: "C6H12O6", mw: 180.16 },
  { id: "sucrose", name: "Sucrose", formula: "C12H22O11", mw: 342.3 },
  { id: "kcl", name: "Potassium chloride", formula: "KCl", mw: 74.55 },
  { id: "nahco3", name: "Sodium bicarbonate", formula: "NaHCO3", mw: 84.01 },
  { id: "na2co3", name: "Sodium carbonate", formula: "Na2CO3", mw: 105.99 },
  { id: "cacl2", name: "Calcium chloride", formula: "CaCl2", mw: 110.98 },
  { id: "cacl2-2h2o", name: "Calcium chloride dihydrate", formula: "CaCl2·2H2O", mw: 147.01 },
  { id: "mgso4", name: "Magnesium sulfate", formula: "MgSO4", mw: 120.37 },
  { id: "mgso4-7h2o", name: "Magnesium sulfate heptahydrate", formula: "MgSO4·7H2O", mw: 246.47 },
  { id: "tris", name: "Tris base", formula: "C4H11NO3", mw: 121.14 },
  { id: "edta", name: "EDTA (free acid)", formula: "C10H16N2O8", mw: 292.24 },
  { id: "hepes", name: "HEPES", formula: "C8H18N2O4S", mw: 238.3 },
  { id: "atp", name: "ATP (disodium)", formula: "C10H14N5Na2O13P3", mw: 551.14 },
  { id: "urea", name: "Urea", formula: "CH4N2O", mw: 60.06 },
  { id: "ethanol", name: "Ethanol", formula: "C2H5OH", mw: 46.07 },
  { id: "acetic", name: "Acetic acid", formula: "CH3COOH", mw: 60.05 },
  { id: "hcl", name: "Hydrochloric acid", formula: "HCl", mw: 36.46 },
  { id: "naoh", name: "Sodium hydroxide", formula: "NaOH", mw: 40.0 },
  { id: "kno3", name: "Potassium nitrate", formula: "KNO3", mw: 101.1 },
];

export type SolveTarget = "mass" | "molarity" | "volume" | "moles";

export type MolarityInputs = {
  massG: number;
  volumeL: number;
  molarityM: number;
  mw: number;
  moles?: number;
};

export function solveMolarity(
  target: SolveTarget,
  values: Partial<MolarityInputs>
): { massG: number; volumeL: number; molarityM: number; moles: number } | null {
  const mw = values.mw;
  if (mw == null || !(mw > 0)) return null;

  if (target === "mass") {
    const { volumeL, molarityM } = values;
    if (volumeL == null || molarityM == null || !(volumeL > 0) || molarityM < 0) return null;
    const moles = molarityM * volumeL;
    return { massG: moles * mw, volumeL, molarityM, moles };
  }

  if (target === "molarity") {
    const { massG, volumeL } = values;
    if (massG == null || volumeL == null || !(volumeL > 0) || massG < 0) return null;
    const moles = massG / mw;
    return { massG, volumeL, molarityM: moles / volumeL, moles };
  }

  if (target === "moles") {
    // Prefer M × V when concentration + volume given; else m / MW
    const { volumeL, molarityM, massG } = values;
    if (
      volumeL != null &&
      molarityM != null &&
      Number.isFinite(volumeL) &&
      Number.isFinite(molarityM) &&
      volumeL > 0 &&
      molarityM >= 0
    ) {
      const moles = molarityM * volumeL;
      return { massG: moles * mw, volumeL, molarityM, moles };
    }
    if (massG != null && Number.isFinite(massG) && massG >= 0) {
      const moles = massG / mw;
      const vol = volumeL != null && volumeL > 0 ? volumeL : 0;
      const molM = vol > 0 ? moles / vol : 0;
      return { massG, volumeL: vol, molarityM: molM, moles };
    }
    return null;
  }

  // volume
  const { massG, molarityM } = values;
  if (massG == null || molarityM == null || !(molarityM > 0) || massG < 0) return null;
  const moles = massG / mw;
  return { massG, volumeL: moles / molarityM, molarityM, moles };
}

export type DilutionSolve = "v1" | "c1" | "v2" | "c2";

export function solveDilution(
  target: DilutionSolve,
  c1: number,
  v1: number,
  c2: number,
  v2: number
): number | null {
  // C1 V1 = C2 V2 (all concentrations in same base unit M)
  if (target === "v1") {
    if (!(c1 > 0) || !(c2 >= 0) || !(v2 > 0)) return null;
    return (c2 * v2) / c1;
  }
  if (target === "c1") {
    if (!(v1 > 0) || !(c2 >= 0) || !(v2 > 0)) return null;
    return (c2 * v2) / v1;
  }
  if (target === "v2") {
    if (!(c1 > 0) || !(v1 > 0) || !(c2 > 0)) return null;
    return (c1 * v1) / c2;
  }
  // c2
  if (!(c1 > 0) || !(v1 > 0) || !(v2 > 0)) return null;
  return (c1 * v1) / v2;
}

export function formatSig(n: number, digits = 6): string {
  if (!Number.isFinite(n)) return "—";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  if (abs >= 1e6 || abs < 1e-4) return n.toExponential(4);
  const rounded = Number(n.toPrecision(digits));
  return String(rounded);
}

export function toDisplayMass(g: number, unit: MassUnit): number {
  return g / MASS_TO_G[unit];
}

export function toDisplayVol(L: number, unit: VolumeUnit): number {
  return L / VOL_TO_L[unit];
}

export function toDisplayConc(M: number, unit: ConcUnit): number {
  return M / CONC_TO_M[unit];
}

export function fromDisplayMass(value: number, unit: MassUnit): number {
  return value * MASS_TO_G[unit];
}

export function fromDisplayVol(value: number, unit: VolumeUnit): number {
  return value * VOL_TO_L[unit];
}

export function fromDisplayConc(value: number, unit: ConcUnit): number {
  return value * CONC_TO_M[unit];
}
