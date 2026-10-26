import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_4, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "mL to Moles: Convert Volume and Molarity to Moles";
const description =
  "Convert mL to moles with n = M × V. Use the mole calculator mode for concentration × volume, with worked examples.";
const slug = "ml-to-moles";
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
    question: "How do I convert mL to moles?",
    answer:
      "You need molarity as well as volume. n = M × V with V in liters (mL ÷ 1000). Example: 2 M × 0.025 L = 0.05 mol.",
  },
  {
    question: "Can I go from mL to moles without concentration?",
    answer:
      "Not for a solution. Pure liquids need density and molar mass instead. For aqueous reagents, protocols give molarity or %.",
  },
  {
    question: "Where is the mole calculator?",
    answer:
      "Use Moles mode on the free molarity calculator — enter M and volume (or mass ÷ MW).",
  },
];

export default function MlToMolesPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={published}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_4}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "mL to Moles", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-white/50">Updated October 26, 2026 · 6 min read</p>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_FEATURE_4}
            alt="Converting milliliters of a molar solution into moles of solute"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 leading-relaxed text-white/80">
          <p>
            <strong className="text-white">mL to moles</strong> is a volume × concentration problem,
            not a volume-only conversion. Milliliters measure space; moles measure amount of
            substance. You need the{" "}
            <Link href="/molarity-formula" className="text-teal underline">
              molarity equation
            </Link>{" "}
            to connect them.
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">Formula</h2>
          <p className="rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-teal">
            n (mol) = M (mol/L) × V (L)
          </p>
          <p>
            Convert mL → L by dividing by 1000. Then multiply by molarity. That is exactly what{" "}
            <strong className="text-white">Moles</strong> mode does in the{" "}
            <Link href="/#calculator" className="text-teal underline">
              mole calculator
            </Link>
            .
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">Example</h2>
          <p>
            How many moles are in <strong className="text-white">25 mL</strong> of{" "}
            <strong className="text-white">2.0 M</strong> HCl?
          </p>
          <p>
            V = 0.025 L → n = 2.0 × 0.025 = <strong className="text-teal">0.050 mol</strong>.
          </p>

          <h2 className="pt-2 font-display text-2xl font-semibold text-white">
            From moles back to grams
          </h2>
          <p>
            Multiply moles by MW if you need mass: m = n × MW. Or start from concentration and use{" "}
            <Link href="/blog/molarity-to-grams" className="text-teal underline">
              molarity to grams
            </Link>
            .
          </p>
        </div>

        <div className="mt-12">
          <FaqSection items={faqs} title="mL to moles FAQ" />
        </div>
      </article>
    </>
  );
}
