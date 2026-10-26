import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import { BRAND_HERO, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "How to Calculate Molarity (Find Molarity Step-by-Step)";
const description =
  "Learn how to calculate molarity and how to find molarity from mass and volume. Use the molarity equation m = M × V × MW with worked examples.";
const slug = "how-to-calculate-molarity";
const published = "2026-10-26";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${slug}` },
  openGraph: {
    title,
    description,
    url: `${SITE_ORIGIN}/blog/${slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
  },
};

const faqs = [
  {
    question: "What is the molarity formula?",
    answer:
      "M = n / V, where n is moles of solute and V is liters of solution. With mass, use M = m / (MW × V).",
  },
  {
    question: "How do I find moles from grams?",
    answer:
      "Divide mass in grams by molar mass in g/mol. Example: 10 g NaCl ÷ 58.44 g/mol ≈ 0.171 mol.",
  },
  {
    question: "Can I calculate mass needed instead?",
    answer:
      "Yes. Rearrange to m = M × V × MW. That is the usual stock-prep calculation on GraphPad and Sigma tools.",
  },
];

export default function HowToCalculateMolarityPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={published}
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Calculate Molarity", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-white/50">Updated October 26, 2026 · 9 min read</p>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_HERO}
            alt="Student calculating molarity for a laboratory solution"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 text-white/80 leading-relaxed">
          <p>
            Knowing <strong className="text-white">how to calculate molarity</strong> — also searched
            as <strong className="text-white">how to find molarity</strong> — is the core skill
            behind every stock bottle and titration curve. Molarity tells you how many moles of
            solute sit in each liter of solution. Once you can move between grams, moles, and liters,
            prep sheets and homework problems stop feeling like separate languages.
          </p>
          <p>
            Live search results for this query mix Khan Academy lessons, LibreTexts chapters, and
            calculator pages from GraphPad and Sigma. The calculators are fast; the lessons explain
            why. This guide connects both: the formula, a worked example, then a link to the{" "}
            <Link href="/#calculator" className="text-teal underline">
              free molarity calculator
            </Link>{" "}
            so you can check arithmetic before you weigh.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            What molarity means
          </h2>
          <p>
            Molarity (M) is moles of solute per liter of solution — not per liter of solvent alone.
            A 1 M NaCl solution contains one mole of NaCl dissolved in enough water (or solvent) to
            make one liter of final solution. Units scale as millimolar (mM = 10⁻³ M), micromolar (µM
            = 10⁻⁶ M), and nanomolar (nM = 10⁻⁹ M).
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            The molarity formula
          </h2>
          <p>
            Start with <strong className="text-white">M = n / V</strong>. If you weighed a solid,
            convert mass to moles with <strong className="text-white">n = m / MW</strong>, where MW
            is molar mass in g/mol. Combine them:
          </p>
          <p className="rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-teal">
            M = m / (MW × V)
          </p>
          <p>
            For preparation work, rearrange to the mass equation used across competitor tools:{" "}
            <strong className="text-white">m = M × V × MW</strong>. Keep V in liters when M is in
            mol/L; convert 250 mL to 0.250 L before multiplying.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Worked example: NaCl
          </h2>
          <p>
            Suppose you dissolve <strong className="text-white">10.00 g</strong> of NaCl (MW 58.44
            g/mol) and bring the solution to <strong className="text-white">500.0 mL</strong> (0.500
            L).
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Moles = 10.00 / 58.44 ≈ 0.1711 mol</li>
            <li>Molarity = 0.1711 / 0.500 ≈ 0.342 M</li>
          </ol>
          <p>
            That matches the classic Calculator.net-style example. Flip the problem for prep: to make
            0.342 M NaCl in 0.500 L you need about 10 g. Enter the same numbers in mass or molarity
            mode on molaritycalculator.app to confirm.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Stock prep example (mass needed)
          </h2>
          <p>
            You need <strong className="text-white">10 mM</strong> of a compound with MW{" "}
            <strong className="text-white">197.13 g/mol</strong> in{" "}
            <strong className="text-white">10 mL</strong> (0.010 L). Convert 10 mM to 0.010 mol/L,
            then m = 0.010 × 0.010 × 197.13 = 0.019713 g ≈{" "}
            <strong className="text-teal">19.7 mg</strong>. Bio-Techne and Selleckchem publish the
            same pattern for inhibitor stocks — the arithmetic does not change with the brand.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">Common mistakes</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Using mL as if they were liters (off by 1000×).</li>
            <li>Using anhydrous MW while weighing a hydrate salt.</li>
            <li>Confusing molarity (per liter solution) with molality (per kg solvent).</li>
            <li>Forgetting that “make up to volume” means final solution volume, not solvent poured
              first.</li>
          </ul>
          <p>
            For temperature-sensitive or colligative work, read{" "}
            <Link href="/blog/molarity-vs-molality" className="text-teal underline">
              molarity vs molality
            </Link>
            . For C₁V₁ dilutions, see{" "}
            <Link href="/blog/how-to-dilute-a-stock-solution" className="text-teal underline">
              how to dilute a stock solution
            </Link>
            .
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Check your work with the calculator
          </h2>
          <p>
            Manual steps build intuition. The{" "}
            <Link href="/#calculator" className="text-teal underline">
              molarity calculator
            </Link>{" "}
            catches unit slips when you are mid-protocol. Pair it with the{" "}
            <Link href="/molar-mass-calculator" className="text-teal underline">
              molar mass lookup
            </Link>{" "}
            when you need a quick g/mol for common reagents.
          </p>
        </div>

        <div className="mt-12">
          <FaqSection items={faqs} title="Molarity calculation FAQ" />
        </div>
      </article>
    </>
  );
}
