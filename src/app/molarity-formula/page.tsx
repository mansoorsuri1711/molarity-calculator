import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { BRAND_HERO, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Molarity Formula & Equation — M = n/V",
  description:
    "Molarity formula explained: M = n/V and M = m/(MW×V). Learn the molarity equation, molar concentration formula, and work examples.",
  alternates: { canonical: `${SITE_ORIGIN}/molarity-formula` },
  openGraph: {
    title: "Molarity Formula & Equation — M = n/V",
    description: "The molarity equation and molar concentration formula with clear examples.",
    url: `${SITE_ORIGIN}/molarity-formula`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Molarity formula M = n/V" }],
  },
};

const faqs = [
  {
    question: "What is the molarity formula?",
    answer:
      "Molarity M = n / V, where n is moles of solute and V is liters of solution. With mass: M = m / (MW × V).",
  },
  {
    question: "Is the molarity equation the same as molar concentration formula?",
    answer:
      "Yes. Molar concentration is another name for molarity. The formula is identical: moles per liter of solution.",
  },
  {
    question: "How do I rearrange the formula for grams?",
    answer:
      "m = M × V × MW. That converts molarity to grams for a chosen volume — use Mass mode on the calculator.",
  },
];

export default function MolarityFormulaPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Molarity Formula", href: "/molarity-formula" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
          Molarity formula and equation
        </h1>
        <p className="mb-8 text-lg text-white/80">
          The <strong className="text-white">molarity formula</strong> is the backbone of every
          concentration calculator. Here is the equation, the mass form, and how it maps to the free
          tool on this site.
        </p>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_HERO}
            alt="Molarity formula illustrated for solution concentration"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 leading-relaxed text-white/80">
          <h2 className="font-display text-2xl font-semibold text-white">What is molarity?</h2>
          <p>
            <strong className="text-white">Molarity</strong> (also called{" "}
            <strong className="text-white">molar concentration</strong>) is the number of moles of
            solute dissolved in one liter of solution. A 2 M solution holds two moles of solute in
            each liter of the finished mixture — not two moles per liter of solvent alone.
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">
            The molarity equation
          </h2>
          <p className="rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-lg text-teal">
            M = n / V
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-white">M</strong> — molarity (mol/L), often written M, mM, µM
            </li>
            <li>
              <strong className="text-white">n</strong> — moles of solute (mol)
            </li>
            <li>
              <strong className="text-white">V</strong> — volume of solution (L)
            </li>
          </ul>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">
            Molar concentration formula with mass
          </h2>
          <p>
            In the lab you usually weigh grams, not moles. Convert mass with molar mass (MW in
            g/mol): n = m / MW. Substitute into the molarity equation:
          </p>
          <p className="rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-lg text-teal">
            M = m / (MW × V)
          </p>
          <p>
            Rearranged for prep work (molarity to grams):{" "}
            <strong className="text-white">m = M × V × MW</strong>. That is the same relation used by
            GraphPad QuickCalcs, Sigma, and Selleckchem mass–molarity tools — without needing their
            product pages.
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">Quick example</h2>
          <p>
            10 g NaCl (MW 58.44 g/mol) in 0.500 L → M = 10 / (58.44 × 0.500) ≈{" "}
            <strong className="text-teal">0.342 M</strong>. Verify in the{" "}
            <Link href="/#calculator" className="text-teal underline">
              molarity calculator
            </Link>{" "}
            or follow{" "}
            <Link href="/blog/how-to-calculate-molarity" className="text-teal underline">
              how to calculate molarity
            </Link>
            .
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">
            Related conversions
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link href="/blog/molarity-to-grams" className="text-teal underline">
                Molarity to grams
              </Link>{" "}
              — weigh solids for a target M
            </li>
            <li>
              <Link href="/blog/ml-to-moles" className="text-teal underline">
                mL to moles
              </Link>{" "}
              — moles from concentration × volume
            </li>
            <li>
              <Link href="/dilution-calculator" className="text-teal underline">
                Stock solution calculator
              </Link>{" "}
              — C₁V₁ = C₂V₂ dilutions
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <CtaButton href="/#calculator" ariaLabel="Open molarity calculator">
            OPEN CALCULATOR
          </CtaButton>
        </div>

        <div className="mt-12">
          <FaqSection items={faqs} title="Molarity formula FAQ" />
        </div>
      </div>
    </>
  );
}
