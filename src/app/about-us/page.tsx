import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_LOGO, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Molarity Calculator",
  description:
    "About Molarity Calculator on molaritycalculator.app — a free chemistry tool for mass, volume, molarity, dilution, and lab guides.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Molarity Calculator",
    description: `Independent molarity calculator and chemistry guides on ${SITE_DOMAIN}.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us" }]} />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-brand-soft">
            <Image
              src={BRAND_LOGO}
              alt="Molarity Calculator logo"
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              About {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              {SITE_NAME} is an independent educational site on {SITE_DOMAIN}. We help students and
              lab workers calculate molar concentrations, weigh solids for stocks, and dilute working
              solutions — without login walls or product catalogs.
            </p>
          </div>
        </div>

        <section className="mb-10 space-y-4 text-white/80 leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-white">Why we built this</h2>
          <p>
            Search for “molarity calculator” and you mostly land on vendor resource pages or giant
            calculator portals. Those tools work, but they often bury the math behind promotions or
            thin one-field forms. We wanted a brand-first chemistry helper: clear modes, units,
            related dilution and molar-mass tools, and guides that match what people actually search.
          </p>
          <p>
            Content covers how to calculate molarity, molarity vs molality, and stock dilution —
            topics that appear alongside the primary calculator query in live SERPs — not unrelated
            filler posts.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-white/80 leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-white">What we are not</h2>
          <p>
            We are not a chemical supplier, accredited laboratory, or substitute for validated SOPs.
            Always confirm critical preparations with batch-specific molar masses and your lab’s
            procedures. See our{" "}
            <Link href="/disclaimer" className="text-teal underline">
              disclaimer
            </Link>
            .
          </p>
        </section>

        <p className="mb-8 text-white/75">
          Questions? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-soft underline">
            {CONTACT_EMAIL}
          </a>{" "}
          or use the{" "}
          <Link href="/contact-us" className="text-teal underline">
            contact form
          </Link>
          .
        </p>

        <CtaButton href="/#calculator" ariaLabel="Open molarity calculator">
          OPEN CALCULATOR
        </CtaButton>
      </div>
    </>
  );
}
