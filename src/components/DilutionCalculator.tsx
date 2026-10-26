"use client";

import { useId, useMemo, useState } from "react";
import {
  ConcUnit,
  DilutionSolve,
  VolumeUnit,
  formatSig,
  fromDisplayConc,
  fromDisplayVol,
  solveDilution,
  toDisplayConc,
  toDisplayVol,
} from "@/lib/molarityMath";

const VOL_UNITS: VolumeUnit[] = ["L", "mL", "uL"];
const CONC_UNITS: ConcUnit[] = ["M", "mM", "uM", "nM"];

const UNIT_LABEL: Record<string, string> = {
  uL: "µL",
  uM: "µM",
};

function labelUnit(u: string) {
  return UNIT_LABEL[u] ?? u;
}

export default function DilutionCalculator() {
  const formId = useId();
  const [target, setTarget] = useState<DilutionSolve>("v1");
  const [c1, setC1] = useState("100");
  const [c1Unit, setC1Unit] = useState<ConcUnit>("mM");
  const [v1, setV1] = useState("10");
  const [v1Unit, setV1Unit] = useState<VolumeUnit>("mL");
  const [c2, setC2] = useState("10");
  const [c2Unit, setC2Unit] = useState<ConcUnit>("mM");
  const [v2, setV2] = useState("100");
  const [v2Unit, setV2Unit] = useState<VolumeUnit>("mL");

  const result = useMemo(() => {
    const C1 = fromDisplayConc(Number(c1), c1Unit);
    const V1 = fromDisplayVol(Number(v1), v1Unit);
    const C2 = fromDisplayConc(Number(c2), c2Unit);
    const V2 = fromDisplayVol(Number(v2), v2Unit);

    if (target === "v1") {
      const n = solveDilution("v1", C1, 0, C2, V2);
      return n == null ? null : { kind: "vol" as const, valueL: n };
    }
    if (target === "c1") {
      const n = solveDilution("c1", 0, V1, C2, V2);
      return n == null ? null : { kind: "conc" as const, valueM: n };
    }
    if (target === "v2") {
      const n = solveDilution("v2", C1, V1, C2, 0);
      return n == null ? null : { kind: "vol" as const, valueL: n };
    }
    const n = solveDilution("c2", C1, V1, 0, V2);
    return n == null ? null : { kind: "conc" as const, valueM: n };
  }, [target, c1, c1Unit, v1, v1Unit, c2, c2Unit, v2, v2Unit]);

  const fieldClass =
    "w-full rounded-xl border border-white/15 bg-[#14122a] px-3 py-2.5 text-white outline-none transition focus:border-violet/60 focus:ring-2 focus:ring-violet/30";
  const selectClass = `${fieldClass} calc-select`;
  const labelClass = "mb-1.5 block text-sm font-medium text-white/80";

  const modes: { id: DilutionSolve; label: string }[] = [
    { id: "v1", label: "Stock volume (V₁)" },
    { id: "c1", label: "Stock conc. (C₁)" },
    { id: "v2", label: "Final volume (V₂)" },
    { id: "c2", label: "Final conc. (C₂)" },
  ];

  const diluentL =
    result?.kind === "vol" && target === "v1"
      ? fromDisplayVol(Number(v2), v2Unit) - result.valueL
      : result?.kind === "vol" && target === "v2"
        ? result.valueL - fromDisplayVol(Number(v1), v1Unit)
        : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_-28px_rgba(20,184,201,0.35)]">
      <div className="border-b border-white/10 bg-brand-soft/80 p-3 sm:p-4">
        <p className="mb-2 text-sm text-white/70">
          Dilution equation: <span className="font-semibold text-teal">C₁V₁ = C₂V₂</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setTarget(m.id)}
              className={`rounded-xl px-3 py-2 text-sm transition ${
                target === m.id
                  ? "bg-gradient-to-r from-teal to-violet font-semibold text-brand-deep"
                  : "bg-white/5 text-white/80 hover:bg-white/10"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-5">
        <form className="space-y-4 lg:col-span-2" onSubmit={(e) => e.preventDefault()}>
          {target !== "c1" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${formId}-c1`} className={labelClass}>
                  Stock C₁
                </label>
                <input
                  id={`${formId}-c1`}
                  type="number"
                  min={0}
                  step="any"
                  value={c1}
                  onChange={(e) => setC1(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-c1u`} className={labelClass}>
                  Unit
                </label>
                <select
                  id={`${formId}-c1u`}
                  value={c1Unit}
                  onChange={(e) => setC1Unit(e.target.value as ConcUnit)}
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

          {target !== "v1" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${formId}-v1`} className={labelClass}>
                  Stock V₁
                </label>
                <input
                  id={`${formId}-v1`}
                  type="number"
                  min={0}
                  step="any"
                  value={v1}
                  onChange={(e) => setV1(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-v1u`} className={labelClass}>
                  Unit
                </label>
                <select
                  id={`${formId}-v1u`}
                  value={v1Unit}
                  onChange={(e) => setV1Unit(e.target.value as VolumeUnit)}
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

          {target !== "c2" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${formId}-c2`} className={labelClass}>
                  Final C₂
                </label>
                <input
                  id={`${formId}-c2`}
                  type="number"
                  min={0}
                  step="any"
                  value={c2}
                  onChange={(e) => setC2(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-c2u`} className={labelClass}>
                  Unit
                </label>
                <select
                  id={`${formId}-c2u`}
                  value={c2Unit}
                  onChange={(e) => setC2Unit(e.target.value as ConcUnit)}
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

          {target !== "v2" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${formId}-v2`} className={labelClass}>
                  Final V₂
                </label>
                <input
                  id={`${formId}-v2`}
                  type="number"
                  min={0}
                  step="any"
                  value={v2}
                  onChange={(e) => setV2(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-v2u`} className={labelClass}>
                  Unit
                </label>
                <select
                  id={`${formId}-v2u`}
                  value={v2Unit}
                  onChange={(e) => setV2Unit(e.target.value as VolumeUnit)}
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
        </form>

        <div className="flex flex-col justify-center rounded-2xl border border-teal/25 bg-gradient-to-br from-teal/15 via-transparent to-violet/10 p-5 lg:col-span-3 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky">Result</p>
          {result ? (
            <>
              <p className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                {result.kind === "vol" && target === "v1" && (
                  <>
                    {formatSig(toDisplayVol(result.valueL, v1Unit))}{" "}
                    <span className="text-2xl text-teal">{labelUnit(v1Unit)}</span>
                  </>
                )}
                {result.kind === "vol" && target === "v2" && (
                  <>
                    {formatSig(toDisplayVol(result.valueL, v2Unit))}{" "}
                    <span className="text-2xl text-teal">{labelUnit(v2Unit)}</span>
                  </>
                )}
                {result.kind === "conc" && target === "c1" && (
                  <>
                    {formatSig(toDisplayConc(result.valueM, c1Unit))}{" "}
                    <span className="text-2xl text-teal">{labelUnit(c1Unit)}</span>
                  </>
                )}
                {result.kind === "conc" && target === "c2" && (
                  <>
                    {formatSig(toDisplayConc(result.valueM, c2Unit))}{" "}
                    <span className="text-2xl text-teal">{labelUnit(c2Unit)}</span>
                  </>
                )}
              </p>
              {diluentL != null && diluentL >= 0 && (
                <p className="mt-4 text-sm text-white/70">
                  Diluent to add:{" "}
                  <span className="font-semibold text-white">
                    {formatSig(toDisplayVol(diluentL, "mL"))} mL
                  </span>{" "}
                  (bring stock aliquot to final volume)
                </p>
              )}
              <p className="mt-3 text-sm text-white/60">
                Keep C₁ and C₂ in matching concentration units; volumes convert automatically.
              </p>
            </>
          ) : (
            <p className="mt-3 text-white/70">
              Enter valid values. Stock must be more concentrated than the final solution when
              solving for V₁.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
