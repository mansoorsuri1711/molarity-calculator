import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_FEATURE_2, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "How the Molarity Calculator Works",
  description:
    "Learn how Molarity Calculator converts mass, volume, and concentration using m = M × V × MW, with unit conversion and dilution steps.",
  alternates: { canonical: `${SITE_ORIGIN}/how-it-works` },
  openGraph: {
    title: "How the Molarity Calculator Works",
    description: "The equation and workflow behind every result on molaritycalculator.app.",
    url: `${SITE_ORIGIN}/how-it-works`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "How Molarity Calculator works" }],
  },
};

const steps = [
  {
    title: "Pick the unknown",
    body: "Mass mode for weighing solids, molarity mode for checking a prepared solution, volume mode when concentration and mass are fixed.",
  },
  {
    title: "Set molar mass",
    body: "Choose a preset or enter g/mol from the label. Hydrates and salt forms must match what you place on the balance.",
  },
  {
    title: "Enter known values",
    body: "Fill concentration and volume (or mass). Units convert internally to mol/L, liters, and grams.",
  },
  {
    title: "Apply the equation",
    body: "Core relation: m (g) = M (mol/L) × V (L) × MW (g/mol). The UI rearranges for the selected unknown.",
  },
  {
    title: "Optional dilution",
    body: "If you already have a stock, open the dilution calculator and solve C₁V₁ = C₂V₂ for the missing volume or concentration.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "How It Works", href: "/how-it-works" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
          How Molarity Calculator works
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-white/80">
          Transparent math — the same relations taught in general chemistry and used on GraphPad and
          Bio-Techne tools — with a cleaner multi-mode UI.
        </p>

        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-center">
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="border-l-2 border-violet/50 pl-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Step {i + 1}
                </span>
                <h2 className="mt-1 font-display text-xl font-semibold text-white">{s.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={BRAND_FEATURE_2}
              alt="Workflow for calculating mass from molarity and volume"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-2 font-display text-xl font-semibold text-white">Core formulas</h2>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <strong className="text-white">Molarity:</strong> M = n / V
            </li>
            <li>
              <strong className="text-white">From mass:</strong> M = m / (MW × V)
            </li>
            <li>
              <strong className="text-white">Mass to weigh:</strong> m = M × V × MW
            </li>
            <li>
              <strong className="text-white">Dilution:</strong> C₁V₁ = C₂V₂
            </li>
          </ul>
          <p className="mt-4 text-sm text-white/65">
            Need a longer walkthrough? Read{" "}
            <Link href="/blog/how-to-calculate-molarity" className="text-teal underline">
              how to calculate molarity
            </Link>
            .
          </p>
        </div>

        <CtaButton href="/#calculator" ariaLabel="Try the molarity calculator">
          TRY IT NOW
        </CtaButton>
      </div>
    </>
  );
}
