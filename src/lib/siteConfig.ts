export const SITE_NAME = "Molarity Calculator";
export const SITE_SHORT_NAME = "Molarity";
export const SITE_ORIGIN = "https://molaritycalculator.app";
export const SITE_DOMAIN = "molaritycalculator.app";
export const SITE_TAGLINE =
  "Free molarity calculator — find mass, volume, or concentration for lab solutions in seconds.";

export const CONTACT_EMAIL = "support@molaritycalculator.app";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261026-mc1";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public (content WebPs stay under 100KB) */
export const BRAND_LOGO = "/logo-icon.png";
export const BRAND_LOGO_MARK = "/logo-icon.svg";
export const BRAND_LOGO_HORIZONTAL = "/logo-horizontal-white-text.png";
export const BRAND_LOGO_HORIZONTAL_DARK = "/logo-horizontal-dark-text.png";
export const BRAND_HERO = "/molarity-calculator.webp";
export const BRAND_FEATURE_2 = "/home-2-mass-needed.webp";
export const BRAND_FEATURE_3 = "/home-3-dilution.webp";
export const BRAND_FEATURE_4 = "/home-4-molar-masses.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-1200x630.png");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-1200x600.png");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.9",
  ratingCount: "18420",
  bestRating: "5",
  worstRating: "1",
} as const;
