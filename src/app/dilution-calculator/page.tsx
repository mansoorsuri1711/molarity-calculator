import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import DilutionCalculator from "@/components/DilutionCalculator";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_3, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Stock Solution Calculator — Dilution C₁V₁ = C₂V₂",
  description:
    "Free stock solution calculator and dilution calculator. Solve stock volume, final volume, or concentration with C₁V₁ = C₂V₂.",
  alternates: { canonical: `${SITE_ORIGIN}/dilution-calculator` },
  openGraph: {
    title: "Stock Solution Calculator — Dilution C₁V₁ = C₂V₂",
    description: "Dilute molar stocks to working concentrations without spreadsheet errors.",
    url: `${SITE_ORIGIN}/dilution-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Stock solution dilution calculator" }],
  },
};

const faqs = [
  {
    question: "What is the dilution formula?",
    answer:
      "C₁V₁ = C₂V₂. Stock concentration times stock volume equals final concentration times final volume. Solve for any one variable when the other three are known.",
  },
  {
    question: "How much diluent do I add?",
    answer:
      "When you solve for stock volume V₁, diluent volume ≈ V₂ − V₁. Add the stock aliquot to a vessel and bring to the final volume with solvent or buffer.",
  },
  {
    question: "Can I dilute percent solutions too?",
    answer:
      "Yes if C₁ and C₂ use the same concentration type (both molar, or both % w/v). This tool is tuned for molar units (M, mM, µM, nM).",
  },
];

export default function DilutionCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dilution Calculator", href: "/dilution-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-white md:text-4xl">
          Stock solution &amp; dilution calculator
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/80">
          Free <strong className="text-white">stock solution calculator</strong> for diluting a
          molar stock to a working concentration with C₁V₁ = C₂V₂ — the same equation used in
          Sigma, R&D Systems, and GraphPad-style dilution tools.
        </p>

        <DilutionCalculator />

        <section className="mt-14 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-3 font-display text-2xl font-bold text-white">
              How solution dilution works
            </h2>
            <p className="mb-3 leading-relaxed text-white/75">
              Moles of solute stay constant when you dilute with solvent. That is why concentration
              × volume before dilution equals concentration × volume after dilution.
            </p>
            <p className="leading-relaxed text-white/75">
              Example: dilute 100 mM stock to 10 mM in 100 mL final volume. V₁ = (10 × 100) / 100 =
              10 mL stock. Add 90 mL diluent. Verify with the calculator above, then continue with
              the{" "}
              <Link href="/#calculator" className="text-teal underline hover:no-underline">
                molarity calculator
              </Link>{" "}
              if you still need to weigh a new solid stock.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={BRAND_FEATURE_3}
              alt="Dilution calculator showing stock and working solution volumes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <div className="mt-12">
          <FaqSection items={faqs} title="Dilution calculator FAQ" />
        </div>
      </div>
    </>
  );
}
