import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import MolarityCalculator from "@/components/MolarityCalculator";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_RATING,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Free Molarity Calculator — Mass, Volume & Conc.",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free molarity calculator and concentration calculator — find mass, moles, volume, or molar concentration. Includes molarity formula help and stock dilution.",
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "Free Molarity Calculator — Mass, Volume & Conc.",
    description:
      "Molar concentration calculator: solve m = M × V × MW, moles from mL, and prepare stocks faster.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Molarity Calculator homepage — free mass, volume, and concentration tool",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is a molarity calculator?",
    answer:
      "A molarity calculator finds the mass, volume, or molar concentration of a solution using m = M × V × MW (or rearrangements of that equation). Molarity Calculator on molaritycalculator.app solves any of those three variables with unit conversion and common compound molar masses.",
  },
  {
    question: "What is the molarity formula?",
    answer:
      "Molarity M = n / V, where n is moles of solute and V is liters of solution. When you weigh a solid, n = m / MW, so M = m / (MW × V). Rearranged for prep work: mass m = M × V × MW.",
  },
  {
    question: "How do I calculate grams needed for a molar solution?",
    answer:
      "Choose Mass needed, enter desired molarity, final volume, and molar mass (g/mol). The calculator returns the mass to weigh. Example: 10 mM in 10 mL of a 197.13 g/mol compound needs 19.713 mg.",
  },
  {
    question: "What units does this molarity calculator support?",
    answer:
      "Concentration: M, mM, µM, nM. Mass: kg, g, mg, µg. Volume: L, mL, µL. Pick a preset compound or enter a custom molar mass from the bottle label.",
  },
  {
    question: "How is molarity different from molality?",
    answer:
      "Molarity is moles per liter of solution and changes slightly with temperature. Molality is moles per kilogram of solvent and is temperature-independent. See our molarity vs molality guide for when each is used.",
  },
  {
    question: "Can I dilute a stock solution here?",
    answer:
      "Yes. Use the dedicated dilution calculator based on C₁V₁ = C₂V₂ to find stock volume, final volume, or concentrations. Link it from the tools section below.",
  },
  {
    question: "Should I use the molar mass on the CoA?",
    answer:
      "Yes when available. Batch-specific molecular weight on the vial or certificate of analysis is more accurate than a generic table value, especially for salts and hydrates.",
  },
  {
    question: "Is Molarity Calculator free?",
    answer:
      "Yes. The full tool on molaritycalculator.app is free — no account required. It is an educational lab helper, not a substitute for validated SOPs or analytical methods.",
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description:
          "Free molarity calculator for mass, volume, and molar concentration of solutions.",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "Free Molarity Calculator — Mass, Volume & Conc.",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${BRAND_HERO}`,
          width: 1600,
          height: 900,
          ...imageObjectLicensing,
        },
      },
      {
        ...WEB_APPLICATION_JSON_LD,
        "@id": `${SITE_ORIGIN}/#software`,
        description:
          "Web-based molarity calculator with mass, volume, concentration modes and unit conversion.",
      },
      {
        "@type": "HowTo",
        name: "How to use the free molarity calculator",
        description: "Prepare or analyze a molar solution in four steps.",
        step: [
          {
            "@type": "HowToStep",
            name: "Choose what to solve",
            text: "Select mass needed, molarity, or volume depending on what you already know.",
          },
          {
            "@type": "HowToStep",
            name: "Enter molar mass",
            text: "Pick a common compound or type the g/mol value from the label or CoA.",
          },
          {
            "@type": "HowToStep",
            name: "Fill the known values",
            text: "Enter concentration, volume, and/or mass with the matching units.",
          },
          {
            "@type": "HowToStep",
            name: "Read the result",
            text: "Use the calculated mass, molarity, or volume at the bench, then verify with your SOP.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section id="calculator" className="relative overflow-hidden scroll-mt-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="hero-glow absolute -left-20 top-0 h-48 w-48 rounded-full bg-violet/20 blur-3xl" />
          <div
            className="hero-glow absolute -right-10 top-20 h-56 w-56 rounded-full bg-teal/15 blur-3xl"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
          <h1 className="mb-2 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="brand-gradient-text">{SITE_NAME}</span>
          </h1>
          <p className="mb-6 max-w-2xl font-display text-lg font-semibold leading-snug text-white sm:text-xl md:text-2xl">
            Concentration calculator for mass, moles, volume, or molarity — before you weigh a gram
          </p>

          <MolarityCalculator />

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Free lab molarity calculator — solve m = M × V × MW with unit switches and common
            compound molar masses.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/70 sm:gap-3">
            <span
              className="inline-flex items-center gap-1.5"
              aria-label={`Rated ${SITE_RATING.ratingValue} out of 5`}
            >
              <span className="font-semibold text-gold">{SITE_RATING.ratingValue}</span>
              <span className="tracking-tight text-gold" aria-hidden="true">
                ★★★★★
              </span>
              <span>({Number(SITE_RATING.ratingCount).toLocaleString()})</span>
            </span>
            <span className="text-white/40">·</span>
            <span>Free</span>
            <span className="text-white/40">·</span>
            <span>Web</span>
            <span className="text-white/40">·</span>
            <span>Chemistry tool</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <section className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
              Free molarity calculator for solution prep
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-white/80">
              A <strong className="text-white">molarity calculator</strong> turns three known values
              into the fourth: mass, molar mass, volume, or concentration. Students use it for
              homework. Bench scientists use it to weigh solids for mM and µM stocks without
              spreadsheet typos.
            </p>
            <p className="mb-4 leading-relaxed text-white/75">
              Top ranking tools from GraphPad, Sigma-Aldrich, Calculator.net, and Omni all answer
              the same intent: how much compound do I need for this molarity? This site is built for
              that question — with modes for mass, molarity, and volume, plus linked{" "}
              <Link href="/dilution-calculator" className="text-teal underline hover:no-underline">
                dilution
              </Link>{" "}
              and{" "}
              <Link href="/molar-mass-calculator" className="text-teal underline hover:no-underline">
                molar mass
              </Link>{" "}
              tools so you are not stuck on a single vendor form.
            </p>
            <p className="leading-relaxed text-white/75">
              No account. No product catalog wall. Enter the numbers you have, switch M / mM / µM
              and mL / µL as needed, and copy the result into your notebook.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={BRAND_HERO}
              alt="Molarity Calculator — flask and concentration workspace for solution prep"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
            How to calculate molarity
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-white/80">
            People also ask how to calculate molarity from mass. The path is the same whether you
            use this tool or pen and paper.
          </p>
          <ol className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Find moles",
                d: "Divide solute mass (g) by molar mass (g/mol) to get moles.",
              },
              {
                n: "02",
                t: "Convert volume",
                d: "Express solution volume in liters (500 mL = 0.5 L).",
              },
              {
                n: "03",
                t: "Divide",
                d: "Molarity M = moles ÷ liters. Report in M, mM, or µM as needed.",
              },
              {
                n: "04",
                t: "Or rearrange",
                d: "For prep: mass = desired M × volume (L) × MW.",
              },
            ].map((step) => (
              <li key={step.n} className="border-t border-violet/40 pt-4">
                <span className="font-display text-sm font-bold text-teal">{step.n}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.d}</p>
              </li>
            ))}
          </ol>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <h3 className="mb-2 font-display text-lg font-semibold text-white">
              Example: 10 g NaCl in 500 mL
            </h3>
            <p className="mb-3 leading-relaxed text-white/75">
              NaCl MW ≈ 58.44 g/mol. Moles = 10 ÷ 58.44 ≈ 0.171 mol. Volume = 0.5 L. Molarity ≈{" "}
              <strong className="text-teal">0.342 M</strong>. Switch the calculator to Molarity mode
              with those inputs to verify.
            </p>
            <p className="leading-relaxed text-white/75">
              Need a full walkthrough? Read{" "}
              <Link
                href="/blog/how-to-calculate-molarity"
                className="text-teal underline hover:no-underline"
              >
                how to calculate molarity
              </Link>{" "}
              or the{" "}
              <Link href="/molarity-formula" className="text-teal underline hover:no-underline">
                molarity formula
              </Link>{" "}
              page for the equation M = n/V.
            </p>
          </div>
        </section>

        <section className="mb-16 max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
            Molar concentration calculator modes
          </h2>
          <p className="mb-4 leading-relaxed text-white/80">
            This tool doubles as a <strong className="text-white">molar calculator</strong>,{" "}
            <strong className="text-white">mole calculator</strong>, and solution calculator:
            convert molarity to grams, mL to moles, or check molar concentration from a weighed
            solid — the same intents behind GraphPad-style mass–molarity quickcalcs.
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-sm text-white/70">
            <li>
              <Link href="/blog/molarity-to-grams" className="text-teal underline">
                Molarity to grams
              </Link>
            </li>
            <li>
              <Link href="/blog/ml-to-moles" className="text-teal underline">
                mL to moles
              </Link>
            </li>
            <li>
              <Link href="/dilution-calculator" className="text-teal underline">
                Stock solution calculator
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-16 max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
            How to use this molarity calculator
          </h2>
          <ul className="space-y-4 text-white/80">
            <li>
              <h3 className="mb-1 font-display text-lg font-semibold text-white">Solve target</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Mass needed is the usual stock-prep mode. Molarity mode checks what you already
                dissolved. Volume mode finds how much solvent space a known mass fills at a target
                concentration.
              </p>
            </li>
            <li>
              <h3 className="mb-1 font-display text-lg font-semibold text-white">Molar mass</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Prefer label or CoA values for hydrates and salts. Presets cover common buffers and
                salts when a generic MW is acceptable for teaching or rough prep.
              </p>
            </li>
            <li>
              <h3 className="mb-1 font-display text-lg font-semibold text-white">Units</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Stay consistent within each field. The tool converts to base units internally so
                mixing mM with mL is safe.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 font-display text-2xl font-bold text-white md:text-3xl">
            Related lab calculators
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                href: "/dilution-calculator",
                title: "Dilution calculator",
                body: "C₁V₁ = C₂V₂ for stock aliquots and working solutions.",
                img: BRAND_FEATURE_3,
                alt: "Dilution calculator for stock solutions",
              },
              {
                href: "/molar-mass-calculator",
                title: "Molar mass lookup",
                body: "Quick MW table for NaCl, glucose, Tris, HEPES, and more.",
                img: BRAND_FEATURE_4,
                alt: "Molar mass table for common lab compounds",
              },
              {
                href: "/#calculator",
                title: "Mass from molarity",
                body: "Weigh solids for target M, mM, or µM stocks in one step.",
                img: BRAND_FEATURE_2,
                alt: "Mass needed for a target molar concentration",
              },
            ].map((card) => (
              <Link
                key={card.href + card.title}
                href={card.href}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-violet/40"
              >
                <div className="relative aspect-video">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{card.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
            Guides from real search queries
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            <li>
              <Link
                href="/blog/how-to-calculate-molarity"
                className="block rounded-xl border border-white/10 p-4 hover:border-violet/40"
              >
                <h3 className="font-display font-semibold text-white">How to calculate molarity</h3>
                <p className="mt-1 text-sm text-white/60">Step-by-step with worked NaCl examples.</p>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/molarity-vs-molality"
                className="block rounded-xl border border-white/10 p-4 hover:border-violet/40"
              >
                <h3 className="font-display font-semibold text-white">Molarity vs molality</h3>
                <p className="mt-1 text-sm text-white/60">When temperature and solvent mass matter.</p>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/how-to-dilute-a-stock-solution"
                className="block rounded-xl border border-white/10 p-4 hover:border-violet/40"
              >
                <h3 className="font-display font-semibold text-white">How to dilute a stock</h3>
                <p className="mt-1 text-sm text-white/60">C₁V₁ = C₂V₂ without pipette confusion.</p>
              </Link>
            </li>
          </ul>
        </section>

        <FaqSection items={faqs} title="Molarity calculator FAQ" includeSchema={false} />
      </div>
    </>
  );
}
