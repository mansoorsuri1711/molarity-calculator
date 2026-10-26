import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_4,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Molarity Calculator Features — Units & Modes",
  description:
    "See what Molarity Calculator includes: mass, molarity, and volume modes, unit conversion, common molar masses, dilution, and FAQs.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Molarity Calculator Features — Units & Modes",
    description: "Everything you need to prep and check molar solutions online.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Molarity Calculator features" }],
  },
};

const faqs = [
  {
    question: "What can the main calculator solve?",
    answer:
      "Mass needed for a target molarity, molarity from mass and volume, or volume required for a known mass and concentration — with M/mM/µM/nM and lab volume units.",
  },
  {
    question: "Is there a dilution mode?",
    answer:
      "Yes. The dilution calculator uses C₁V₁ = C₂V₂ and can solve for stock volume, final volume, or either concentration.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. All tools on molaritycalculator.app are free to use in the browser without signup.",
  },
];

const features = [
  {
    title: "Three solve modes",
    body: "Switch between mass, molarity, and volume so the unknown matches what you are actually preparing or checking.",
  },
  {
    title: "Lab-ready units",
    body: "Move between M, mM, µM, nM and L, mL, µL without converting by hand mid-prep.",
  },
  {
    title: "Common molar masses",
    body: "Presets for NaCl, glucose, Tris, HEPES, and other frequent reagents, plus custom g/mol entry.",
  },
  {
    title: "Dilution companion",
    body: "Dedicated C₁V₁ = C₂V₂ tool for stock-to-working dilutions with diluent volume hints.",
  },
  {
    title: "Worked education",
    body: "Homepage examples and SERP-backed guides explain the formula behind every result.",
  },
  {
    title: "Fast, private by default",
    body: "Calculations run in your browser. No account wall and no product catalog interrupting the tool.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features", href: "/features" }]} />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
          Features built for real solution prep
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-white/80">
          Vendor calculators often hide behind catalogs. Molarity Calculator keeps the math in front:
          clear modes, units, and related tools.
        </p>

        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="font-display text-xl font-semibold text-white">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mb-14 grid gap-8 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={BRAND_FEATURE_2}
              alt="Mass needed mode for preparing a molar stock solution"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={BRAND_FEATURE_4}
              alt="Molar mass presets used with the molarity calculator"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-4">
          <CtaButton href="/#calculator" ariaLabel="Open molarity calculator">
            OPEN CALCULATOR
          </CtaButton>
          <CtaButton href="/dilution-calculator" ariaLabel="Open dilution calculator">
            DILUTION TOOL
          </CtaButton>
        </div>

        <FaqSection items={faqs} title="Features FAQ" />
      </div>
    </>
  );
}
