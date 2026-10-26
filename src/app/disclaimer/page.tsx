import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Legal disclaimer for ${SITE_NAME} — educational chemistry calculator, not laboratory advice.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer", href: "/disclaimer" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Disclaimer</h1>
        <div className="space-y-5 text-white/80 leading-relaxed">
          <p>Last updated: October 26, 2026</p>
          <p>
            {SITE_NAME} on {SITE_DOMAIN} provides educational chemistry calculators and articles. We
            are not a chemical manufacturer, accredited testing laboratory, or clinical service. We
            do not sell reagents or certify analytical methods.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">No guarantees</h2>
          <p>
            Calculator results use standard stoichiometric relationships. Actual preparations depend
            on purity, hydration state, temperature, volumetric glassware, and procedure. Figures are
            illustrative. Always verify critical work against your SOP and batch-specific molar
            masses.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">Not professional advice</h2>
          <p>
            Nothing on this site is personalized chemical, medical, safety, or regulatory advice.
            Handling chemicals involves risk. Follow institutional safety rules and consult qualified
            professionals when needed. You are responsible for complying with applicable laws.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">Accuracy</h2>
          <p>
            We strive for accurate formulas and clear guides, but content may contain errors or become
            outdated. Use the site at your own risk. For questions, contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-soft underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
