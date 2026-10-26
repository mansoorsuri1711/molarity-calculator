import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Molarity Blog — Guides People Actually Search",
  description:
    "SERP-backed molarity guides: calculate molarity, formula help, molarity to grams, mL to moles, molality, and stock dilution.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Molarity Blog — Guides People Actually Search",
    description: "Practical molarity articles from Molarity Calculator.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const posts = [
  {
    href: "/blog/how-to-calculate-molarity",
    title: "How to Calculate Molarity (Find Molarity Step-by-Step)",
    excerpt:
      "Convert mass and volume into mol/L with worked NaCl examples — then verify in the calculator.",
    date: "October 2026",
    read: "9 min read",
    image: BRAND_HERO,
    alt: "How to calculate molarity illustrated with solution prep",
  },
  {
    href: "/blog/molarity-to-grams",
    title: "Molarity to Grams: How to Calculate Mass from M",
    excerpt: "Weigh solids for a target molarity with m = M × V × MW and mass-mode examples.",
    date: "October 2026",
    read: "7 min read",
    image: BRAND_FEATURE_2,
    alt: "Converting molarity to grams for stock prep",
  },
  {
    href: "/blog/ml-to-moles",
    title: "mL to Moles: Convert Volume and Molarity to Moles",
    excerpt: "Use n = M × V to turn milliliters of a molar solution into moles of solute.",
    date: "October 2026",
    read: "6 min read",
    image: BRAND_FEATURE_4,
    alt: "Converting mL of solution to moles",
  },
  {
    href: "/blog/molarity-vs-molality",
    title: "Molarity vs Molality: Formulas and When to Use Each",
    excerpt:
      "Moles per liter versus moles per kilogram of solvent — temperature, colligative properties, and lab habits.",
    date: "October 2026",
    read: "8 min read",
    image: BRAND_FEATURE_2,
    alt: "Comparison of molarity and molality concentration units",
  },
  {
    href: "/blog/how-to-dilute-a-stock-solution",
    title: "How to Dilute a Stock Solution with C₁V₁ = C₂V₂",
    excerpt:
      "Find stock volume, diluent volume, and working concentration without pipette confusion.",
    date: "October 2026",
    read: "8 min read",
    image: BRAND_FEATURE_3,
    alt: "Diluting a molar stock solution to a working concentration",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
          Molarity calculator blog
        </h1>
        <p className="mb-10 text-lg text-white/80">
          Topics people search with a molarity calculator — formulas, conversions, molality, and
          stock dilution. Also see the{" "}
          <Link href="/molarity-formula" className="text-teal underline">
            molarity formula
          </Link>{" "}
          page.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block overflow-hidden border border-white/10 bg-white/5 transition-colors hover:border-violet/50 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              <article>
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-2 text-xs text-white/50">
                    {post.date} · {post.read}
                  </p>
                  <h2 className="font-display text-xl font-semibold text-white group-hover:text-violet-soft">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
