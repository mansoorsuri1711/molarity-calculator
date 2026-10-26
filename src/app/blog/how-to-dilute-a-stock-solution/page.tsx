import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_3, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "How to Dilute a Stock Solution with C₁V₁ = C₂V₂";
const description =
  "Learn how to dilute a stock solution using C₁V₁ = C₂V₂ — find stock volume, diluent volume, and working concentration with examples.";
const slug = "how-to-dilute-a-stock-solution";
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
    question: "What does C₁V₁ = C₂V₂ mean?",
    answer:
      "Stock concentration times stock volume equals final concentration times final volume. Solute moles are conserved when you add solvent.",
  },
  {
    question: "How do I calculate diluent volume?",
    answer:
      "After solving for V₁, diluent ≈ V₂ − V₁. Add the stock aliquot first, then bring to the final volume mark.",
  },
  {
    question: "Can I dilute from 100× to 1×?",
    answer:
      "Yes. That is a 100-fold dilution: V₁ = V₂ / 100. Example: 10 µL of 100× stock into 990 µL diluent for 1 mL final.",
  },
];

export default function HowToDiluteStockPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={published}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_3}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Dilute a Stock", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-white/50">Updated October 26, 2026 · 8 min read</p>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_FEATURE_3}
            alt="Pipetting a stock aliquot to dilute to a working molar concentration"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 text-white/80 leading-relaxed">
          <p>
            Learning <strong className="text-white">how to dilute a stock solution</strong> saves
            reagents and time. Concentrated stocks travel well; working concentrations go into
            assays. Sigma, R&D Systems, and PhysiologyWeb all ship dilution calculators for that
            reason — and they all rest on one equation.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            The dilution equation
          </h2>
          <p className="rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-teal">
            C₁V₁ = C₂V₂
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>C₁ — stock concentration</li>
            <li>V₁ — volume of stock you take</li>
            <li>C₂ — desired final concentration</li>
            <li>V₂ — final volume after dilution</li>
          </ul>
          <p>
            Keep C₁ and C₂ in the same unit family (both mM, or both µM). Volumes can be mL or µL as
            long as V₁ and V₂ match each other.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Step-by-step bench method
          </h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Write down C₁, C₂, and the final volume V₂ you need.</li>
            <li>
              Solve for stock volume: <strong className="text-white">V₁ = (C₂ × V₂) / C₁</strong>.
            </li>
            <li>Pipette V₁ of stock into a clean vessel.</li>
            <li>
              Add diluent to reach V₂ (diluent volume ≈ V₂ − V₁). Mix thoroughly.
            </li>
            <li>Label with concentration, solvent, date, and initials.</li>
          </ol>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Example: 100 mM → 10 mM
          </h2>
          <p>
            You need <strong className="text-white">100 mL</strong> of{" "}
            <strong className="text-white">10 mM</strong> working buffer from a{" "}
            <strong className="text-white">100 mM</strong> stock.
          </p>
          <p>
            V₁ = (10 mM × 100 mL) / 100 mM = <strong className="text-teal">10 mL</strong> stock. Add{" "}
            <strong className="text-teal">90 mL</strong> diluent. Confirm with the{" "}
            <Link href="/dilution-calculator" className="text-teal underline">
              dilution calculator
            </Link>
            .
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Serial dilutions
          </h2>
          <p>
            Very large fold-changes (for example 10,000×) are safer as serial steps: dilute 100×,
            then 100× again. Each step uses the same C₁V₁ = C₂V₂ logic on the intermediate
            concentration. LibreTexts and Quansys dilution explainers emphasize mixing between
            steps so the next C₁ is accurate.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            When you need a new solid stock
          </h2>
          <p>
            Dilution only helps if the stock already exists. To weigh a fresh solid for a target
            molarity, use{" "}
            <Link href="/blog/how-to-calculate-molarity" className="text-teal underline">
              how to calculate molarity
            </Link>{" "}
            and the{" "}
            <Link href="/#calculator" className="text-teal underline">
              molarity calculator
            </Link>{" "}
            mass mode. Pull MW from the{" "}
            <Link href="/molar-mass-calculator" className="text-teal underline">
              molar mass table
            </Link>{" "}
            or the bottle CoA.
          </p>
        </div>

        <div className="mt-12">
          <FaqSection items={faqs} title="Stock dilution FAQ" />
        </div>
      </article>
    </>
  );
}
