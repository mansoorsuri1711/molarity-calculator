import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_2, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "Molarity vs Molality: Formulas and When to Use Each";
const description =
  "Compare molarity vs molality — definitions, formulas, temperature effects, and when labs prefer each concentration unit.";
const slug = "molarity-vs-molality";
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
    question: "Is molarity or molality more common?",
    answer:
      "Molarity is more common for routine aqueous prep and most biology protocols. Molality appears in physical chemistry, colligative property problems, and high-temperature work.",
  },
  {
    question: "Does molarity change with temperature?",
    answer:
      "Yes slightly, because solution volume expands or contracts. Molality uses solvent mass, so it is temperature-independent.",
  },
  {
    question: "What about normality?",
    answer:
      "Normality (equivalents per liter) depends on the reaction. It is related to molarity by the number of reactive units, but most modern protocols specify molarity instead.",
  },
];

export default function MolarityVsMolalityPage() {
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
          { label: "Molarity vs Molality", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-white/50">Updated October 26, 2026 · 8 min read</p>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_FEATURE_2}
            alt="Visual comparison of molarity and molality concentration measures"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 text-white/80 leading-relaxed">
          <p>
            <strong className="text-white">Molarity vs molality</strong> is one of the most searched
            concentration comparisons — Khan Academy, Technology Networks, and Carolina Knowledge
            Center all rank for it. The words look alike; the denominators do not.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">Definitions</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-white">Molarity (M):</strong> moles of solute ÷ liters of{" "}
              <em>solution</em>.
            </li>
            <li>
              <strong className="text-white">Molality (m):</strong> moles of solute ÷ kilograms of{" "}
              <em>solvent</em>.
            </li>
          </ul>
          <p>
            Molarity cares about how much space the finished mixture occupies. Molality cares about
            how much solvent mass you started with. That single difference drives every practical
            trade-off below.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">Formulas side by side</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.06] text-white/70">
                <tr>
                  <th className="px-4 py-3">Measure</th>
                  <th className="px-4 py-3">Symbol</th>
                  <th className="px-4 py-3">Formula</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3 text-white">Molarity</td>
                  <td className="px-4 py-3">M</td>
                  <td className="px-4 py-3 font-mono text-teal">n / V_solution</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3 text-white">Molality</td>
                  <td className="px-4 py-3">m</td>
                  <td className="px-4 py-3 font-mono text-teal">n / kg_solvent</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Temperature and volume
          </h2>
          <p>
            Solution volume changes with temperature. A flask labeled 1.000 M at 20 °C is not
            exactly 1.000 M at 40 °C even if no solute was added or removed. Solvent mass does not
            expand the same way, so molality stays put when thermometers swing. Physical chemistry
            problems that involve boiling-point elevation or freezing-point depression therefore
            prefer molality.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Why labs still use molarity
          </h2>
          <p>
            Pipettes, volumetric flasks, and protocol sheets speak in liters and milliliters. Making
            a 50 mM HEPES buffer is a volume workflow: weigh, dissolve, bring to mark. Converting
            every recipe to kg of water would slow routine biology without improving most assays.
            That is why Reddit threads asking “why isn’t molality more common?” land on convenience —
            not because molarity is theoretically superior.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Quick normality note
          </h2>
          <p>
            Searchers often ask about normality in the same session. Normality counts reactive
            equivalents per liter. For H₂SO₄ in acid–base reactions, one mole can supply two
            equivalents of H⁺, so normality can be twice molarity. Modern SOPs usually avoid
            normality and specify molarity or mass percent instead. When in doubt, follow the unit
            printed in the method.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Which one should you calculate?
          </h2>
          <p>
            For weighing a solid into a volumetric flask, use{" "}
            <Link href="/blog/how-to-calculate-molarity" className="text-teal underline">
              how to calculate molarity
            </Link>{" "}
            and the{" "}
            <Link href="/#calculator" className="text-teal underline">
              molarity calculator
            </Link>
            . For homework on colligative properties, convert to molality using solvent kilograms.
            For stock-to-working dilutions that stay in molar units, open the{" "}
            <Link href="/dilution-calculator" className="text-teal underline">
              dilution calculator
            </Link>
            .
          </p>
        </div>

        <div className="mt-12">
          <FaqSection items={faqs} title="Molarity vs molality FAQ" />
        </div>
      </article>
    </>
  );
}
