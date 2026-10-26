import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import MolarMassLookup from "@/components/MolarMassLookup";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_4, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Molar Mass Calculator — Common Lab Compounds",
  description:
    "Look up molar mass (g/mol) for common lab compounds — NaCl, glucose, Tris, HEPES, and more — then open the molarity calculator to prep solutions.",
  alternates: { canonical: `${SITE_ORIGIN}/molar-mass-calculator` },
  openGraph: {
    title: "Molar Mass Calculator — Common Lab Compounds",
    description: "Quick MW table for solution prep, linked to the free molarity calculator.",
    url: `${SITE_ORIGIN}/molar-mass-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Molar mass calculator for lab compounds" }],
  },
};

const faqs = [
  {
    question: "What is molar mass?",
    answer:
      "Molar mass is the mass of one mole of a substance, usually in grams per mole (g/mol). It is the value you multiply by moles to get grams, or divide into grams to get moles.",
  },
  {
    question: "Is molar mass the same as molecular weight?",
    answer:
      "In lab practice people often use the terms interchangeably when the unit is g/mol. Strictly, molecular weight is dimensionless relative to 1/12 of carbon-12; molar mass is the SI quantity in g/mol.",
  },
  {
    question: "Why does my hydrate have a higher MW?",
    answer:
      "Water of crystallization adds mass. CaCl₂ anhydrous is about 110.98 g/mol; CaCl₂·2H₂O is about 147.01 g/mol. Always match the form you weigh.",
  },
];

export default function MolarMassCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Molar Mass Calculator", href: "/molar-mass-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-white md:text-4xl">
          Molar mass calculator
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/80">
          Find formula weights for common reagents, then plug them into the{" "}
          <Link href="/#calculator" className="text-teal underline hover:no-underline">
            molarity calculator
          </Link>{" "}
          to weigh stocks accurately.
        </p>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <MolarMassLookup />
          </div>
          <div className="lg:col-span-2">
            <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={BRAND_FEATURE_4}
                alt="Molar mass reference for common chemistry compounds"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <h2 className="mb-3 font-display text-xl font-bold text-white">Using MW at the bench</h2>
            <p className="mb-3 text-sm leading-relaxed text-white/75">
              Vendor pages (Cayman, Lenntech, WebQC) emphasize elemental composition. For solution
              prep you usually need one number: g/mol of the exact form on the bottle.
            </p>
            <p className="text-sm leading-relaxed text-white/75">
              Prefer CoA or label MW for critical assays. Use this table for teaching problems and
              first-pass buffer recipes, then confirm hydrates and salt forms.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <FaqSection items={faqs} title="Molar mass FAQ" />
        </div>
      </div>
    </>
  );
}
