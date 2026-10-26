import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_2, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "Molarity to Grams: How to Calculate Mass from M";
const description =
  "Convert molarity to grams with m = M × V × MW. Worked examples for stock prep and a free molarity calculator mass mode.";
const slug = "molarity-to-grams";
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
    question: "What is the molarity to grams formula?",
    answer: "Mass (g) = molarity (mol/L) × volume (L) × molar mass (g/mol).",
  },
  {
    question: "Do I use mL or L in the formula?",
    answer:
      "Use liters for V when M is in mol/L. Convert 25 mL to 0.025 L, or let the calculator convert units for you.",
  },
  {
    question: "Is this the same as a mass molarity calculator?",
    answer:
      "Yes. Mass mode on our molarity calculator is built for molarity-to-grams stock prep.",
  },
];

export default function MolarityToGramsPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={published}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_2}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Molarity to Grams", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-white/50">Updated October 26, 2026 · 7 min read</p>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_FEATURE_2}
            alt="Converting molarity to grams for weighing a solid stock"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 leading-relaxed text-white/80">
          <p>
            Searching <strong className="text-white">molarity to grams</strong> usually means one
            job: how many grams do I weigh for this molar stock? That is the mass form of the{" "}
            <Link href="/molarity-formula" className="text-teal underline">
              molarity formula
            </Link>
            .
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">Formula</h2>
          <p className="rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-teal">
            m (g) = M (mol/L) × V (L) × MW (g/mol)
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">Example</h2>
          <p>
            Make <strong className="text-white">50 mL</strong> of{" "}
            <strong className="text-white">100 mM</strong> Tris (MW 121.14 g/mol).
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>100 mM = 0.100 mol/L</li>
            <li>50 mL = 0.050 L</li>
            <li>m = 0.100 × 0.050 × 121.14 = 0.6057 g ≈ 606 mg</li>
          </ol>
          <p>
            Open{" "}
            <Link href="/#calculator" className="text-teal underline">
              Mass / grams mode
            </Link>{" "}
            on the molarity calculator, pick Tris or enter 121.14, set 100 mM and 50 mL, and match
            the result.
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">Tips</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Match hydrate MW to the bottle form.</li>
            <li>Use CoA MW for critical assays.</li>
            <li>
              After making a concentrated stock, dilute with the{" "}
              <Link href="/dilution-calculator" className="text-teal underline">
                stock solution calculator
              </Link>
              .
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <FaqSection items={faqs} title="Molarity to grams FAQ" />
        </div>
      </article>
    </>
  );
}
