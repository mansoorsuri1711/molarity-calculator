"use client";

import { useId, useMemo, useState } from "react";
import {
  COMMON_COMPOUNDS,
  ConcUnit,
  MassUnit,
  SolveTarget,
  VolumeUnit,
  formatSig,
  fromDisplayConc,
  fromDisplayMass,
  fromDisplayVol,
  solveMolarity,
  toDisplayConc,
  toDisplayMass,
  toDisplayVol,
} from "@/lib/molarityMath";

const MASS_UNITS: MassUnit[] = ["g", "mg", "ug", "kg"];
const VOL_UNITS: VolumeUnit[] = ["L", "mL", "uL"];
const CONC_UNITS: ConcUnit[] = ["M", "mM", "uM", "nM"];

const UNIT_LABEL: Record<string, string> = {
  ug: "µg",
  uL: "µL",
  uM: "µM",
};

function labelUnit(u: string) {
  return UNIT_LABEL[u] ?? u;
}

type Props = {
  defaultTarget?: SolveTarget;
};

export default function MolarityCalculator({ defaultTarget = "mass" }: Props) {
  const formId = useId();
  const [target, setTarget] = useState<SolveTarget>(defaultTarget);
  const [compoundId, setCompoundId] = useState("nacl");
  const [customMw, setCustomMw] = useState("");
  const [mass, setMass] = useState("10");
  const [massUnit, setMassUnit] = useState<MassUnit>("g");
  const [volume, setVolume] = useState("500");
  const [volUnit, setVolUnit] = useState<VolumeUnit>("mL");
  const [conc, setConc] = useState("1");
  const [concUnit, setConcUnit] = useState<ConcUnit>("M");

  const mw = useMemo(() => {
    if (compoundId === "custom") {
      const n = Number(customMw);
      return Number.isFinite(n) && n > 0 ? n : null;
    }
    return COMMON_COMPOUNDS.find((c) => c.id === compoundId)?.mw ?? null;
  }, [compoundId, customMw]);

  const result = useMemo(() => {
    if (mw == null) return null;
    const massG = fromDisplayMass(Number(mass), massUnit);
    const volumeL = fromDisplayVol(Number(volume), volUnit);
    const molarityM = fromDisplayConc(Number(conc), concUnit);

    if (target === "mass") {
      if (![Number(volume), Number(conc)].every(Number.isFinite)) return null;
      return solveMolarity("mass", { volumeL, molarityM, mw });
    }
    if (target === "molarity") {
      if (![Number(mass), Number(volume)].every(Number.isFinite)) return null;
      return solveMolarity("molarity", { massG, volumeL, mw });
    }
    if (target === "moles") {
      return solveMolarity("moles", { massG, volumeL, molarityM, mw });
    }
    if (![Number(mass), Number(conc)].every(Number.isFinite)) return null;
    return solveMolarity("volume", { massG, molarityM, mw });
  }, [mw, mass, massUnit, volume, volUnit, conc, concUnit, target]);

  const fieldClass =
    "w-full rounded-xl border border-white/15 bg-[#14122a] px-3 py-2.5 text-white outline-none transition placeholder:text-white/35 focus:border-violet/60 focus:bg-[#1a1733] focus:ring-2 focus:ring-violet/30";
  const labelClass = "mb-1.5 block text-sm font-medium text-white/80";
  const selectClass = `${fieldClass} calc-select`;

  const modes: { id: SolveTarget; label: string; hint: string }[] = [
    { id: "mass", label: "Mass / grams", hint: "m = M × V × MW" },
    { id: "molarity", label: "Molarity", hint: "M = m ÷ (V × MW)" },
    { id: "volume", label: "Volume", hint: "V = m ÷ (M × MW)" },
    { id: "moles", label: "Moles", hint: "n = M × V or m ÷ MW" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_-28px_rgba(123,92,255,0.45)]">
      <div className="flex flex-wrap gap-2 border-b border-white/10 bg-brand-soft/80 p-3 sm:p-4">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setTarget(m.id)}
            className={`rounded-xl px-3 py-2 text-left text-sm transition ${
              target === m.id
                ? "bg-gradient-to-r from-violet to-teal font-semibold text-brand-deep"
                : "bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <span className="block">{m.label}</span>
            <span className={`block text-xs ${target === m.id ? "text-brand-deep/80" : "text-white/45"}`}>
              {m.hint}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-5 lg:gap-8">
        <form className="space-y-4 lg:col-span-2" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor={`${formId}-compound`} className={labelClass}>
              Compound / molar mass
            </label>
            <select
              id={`${formId}-compound`}
              value={compoundId}
              onChange={(e) => setCompoundId(e.target.value)}
              className={selectClass}
            >
              {COMMON_COMPOUNDS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.formula}) — {c.mw}
                </option>
              ))}
              <option value="custom">Custom molar mass…</option>
            </select>
          </div>

          {compoundId === "custom" ? (
            <div>
              <label htmlFor={`${formId}-mw`} className={labelClass}>
                Molar mass (g/mol)
              </label>
              <input
                id={`${formId}-mw`}
                type="number"
                min={0}
                step="any"
                value={customMw}
                onChange={(e) => setCustomMw(e.target.value)}
                placeholder="e.g. 197.13"
                className={fieldClass}
              />
            </div>
          ) : (
            <p className="text-xs text-white/50">
              Using MW = <span className="font-semibold text-teal">{mw}</span> g/mol. Prefer the
              batch-specific value from the bottle label when available.
            </p>
          )}

          {target === "moles" && (
            <p className="text-xs text-white/55">
              Mole calculator: enter concentration + volume (e.g. mL → moles), or mass alone for
              moles from grams.
            </p>
          )}

          {target !== "mass" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${formId}-mass`} className={labelClass}>
                  Mass {target === "moles" ? "(optional if using M × V)" : ""}
                </label>
                <input
                  id={`${formId}-mass`}
                  type="number"
                  min={0}
                  step="any"
                  value={mass}
                  onChange={(e) => setMass(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-mass-u`} className={labelClass}>
                  Unit
                </label>
                <select
                  id={`${formId}-mass-u`}
                  value={massUnit}
                  onChange={(e) => setMassUnit(e.target.value as MassUnit)}
                  className={selectClass}
                >
                  {MASS_UNITS.map((u) => (
                    <option key={u} value={u}>
                      {labelUnit(u)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {target !== "volume" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${formId}-vol`} className={labelClass}>
                  Volume
                </label>
                <input
                  id={`${formId}-vol`}
                  type="number"
                  min={0}
                  step="any"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-vol-u`} className={labelClass}>
                  Unit
                </label>
                <select
                  id={`${formId}-vol-u`}
                  value={volUnit}
                  onChange={(e) => setVolUnit(e.target.value as VolumeUnit)}
                  className={selectClass}
                >
                  {VOL_UNITS.map((u) => (
                    <option key={u} value={u}>
                      {labelUnit(u)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {target !== "molarity" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${formId}-conc`} className={labelClass}>
                  Concentration
                </label>
                <input
                  id={`${formId}-conc`}
                  type="number"
                  min={0}
                  step="any"
                  value={conc}
                  onChange={(e) => setConc(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-conc-u`} className={labelClass}>
                  Unit
                </label>
                <select
                  id={`${formId}-conc-u`}
                  value={concUnit}
                  onChange={(e) => setConcUnit(e.target.value as ConcUnit)}
                  className={selectClass}
                >
                  {CONC_UNITS.map((u) => (
                    <option key={u} value={u}>
                      {labelUnit(u)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </form>

        <div className="flex flex-col justify-center rounded-2xl border border-violet/25 bg-gradient-to-br from-violet/15 via-transparent to-teal/10 p-5 lg:col-span-3 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-soft">Result</p>
          {result ? (
            <>
              <p className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                {target === "mass" && (
                  <>
                    {formatSig(toDisplayMass(result.massG, massUnit))}{" "}
                    <span className="text-2xl text-teal">{labelUnit(massUnit)}</span>
                  </>
                )}
                {target === "molarity" && (
                  <>
                    {formatSig(toDisplayConc(result.molarityM, concUnit))}{" "}
                    <span className="text-2xl text-teal">{labelUnit(concUnit)}</span>
                  </>
                )}
                {target === "volume" && (
                  <>
                    {formatSig(toDisplayVol(result.volumeL, volUnit))}{" "}
                    <span className="text-2xl text-teal">{labelUnit(volUnit)}</span>
                  </>
                )}
                {target === "moles" && (
                  <>
                    {formatSig(result.moles)} <span className="text-2xl text-teal">mol</span>
                  </>
                )}
              </p>
              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-black/20 p-3">
                  <dt className="text-xs text-white/50">Mass</dt>
                  <dd className="font-semibold text-white">
                    {formatSig(toDisplayMass(result.massG, "g"))} g
                  </dd>
                </div>
                <div className="rounded-xl bg-black/20 p-3">
                  <dt className="text-xs text-white/50">Volume</dt>
                  <dd className="font-semibold text-white">
                    {formatSig(toDisplayVol(result.volumeL, "mL"))} mL
                  </dd>
                </div>
                <div className="rounded-xl bg-black/20 p-3">
                  <dt className="text-xs text-white/50">Molarity</dt>
                  <dd className="font-semibold text-white">
                    {formatSig(toDisplayConc(result.molarityM, "M"))} M
                  </dd>
                </div>
              </dl>
              {target !== "moles" && (
                <p className="mt-4 text-sm text-white/65">
                  Moles of solute:{" "}
                  <span className="font-semibold text-white">{formatSig(result.moles)} mol</span>
                </p>
              )}
            </>
          ) : (
            <p className="mt-3 text-white/70">Enter valid positive values to calculate.</p>
          )}
        </div>
      </div>
    </div>
  );
}
