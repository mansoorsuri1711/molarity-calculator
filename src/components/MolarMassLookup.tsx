"use client";

import { useMemo, useState } from "react";
import { COMMON_COMPOUNDS } from "@/lib/molarityMath";
import Link from "next/link";

export default function MolarMassLookup() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMON_COMPOUNDS;
    return COMMON_COMPOUNDS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.formula.toLowerCase().includes(q) ||
        c.id.includes(q)
    );
  }, [query]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
      <div className="border-b border-white/10 p-4 sm:p-5">
        <label htmlFor="mw-search" className="mb-1.5 block text-sm font-medium text-white/80">
          Search compounds
        </label>
        <input
          id="mw-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try NaCl, glucose, Tris…"
          className="w-full rounded-xl border border-white/15 bg-[#14122a] px-3 py-2.5 text-white outline-none focus:border-violet/60 focus:ring-2 focus:ring-violet/30"
        />
        <p className="mt-2 text-xs text-white/50">
          Values are typical anhydrous formula weights in g/mol. Use hydrate MW when weighing a
          hydrate salt. For solution prep, open the{" "}
          <Link href="/#calculator" className="text-teal underline hover:no-underline">
            molarity calculator
          </Link>
          .
        </p>
      </div>

      <div className="max-h-[28rem] overflow-auto">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 bg-brand-soft text-white/70">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Formula</th>
              <th className="px-4 py-3 font-medium text-right">MW (g/mol)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t border-white/8 hover:bg-white/[0.04]">
                <td className="px-4 py-2.5 text-white">{c.name}</td>
                <td className="px-4 py-2.5 font-mono text-teal">{c.formula}</td>
                <td className="px-4 py-2.5 text-right font-semibold text-white">{c.mw}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-white/60">
                  No matches. Enter a custom MW on the{" "}
                  <Link href="/#calculator" className="text-violet-soft underline">
                    main calculator
                  </Link>
                  .
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
