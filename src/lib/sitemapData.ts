import { SITE_ORIGIN } from "@/lib/siteConfig";

function imageLoc(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const LASTMOD = "2026-10-26";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "Molarity Calculator logo",
        caption: "Brand mark for Molarity Calculator on molaritycalculator.app",
      },
      {
        loc: imageLoc("/molarity-calculator.webp"),
        title: "Molarity Calculator tool",
        caption: "Free molarity calculator for mass, volume, and concentration",
      },
    ],
  },
  {
    path: "/features",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/home-2-mass-needed.webp"),
        title: "Molarity Calculator features",
        caption: "Mass, molarity, and volume calculation modes",
      },
    ],
  },
  {
    path: "/how-it-works",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/home-2-mass-needed.webp"),
        title: "How Molarity Calculator works",
        caption: "Steps to calculate mass from molarity using m = M × V × MW",
      },
    ],
  },
  {
    path: "/dilution-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/home-3-dilution.webp"),
        title: "Dilution Calculator",
        caption: "C1V1 = C2V2 dilution calculator for molar stock solutions",
      },
    ],
  },
  {
    path: "/molar-mass-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/home-4-molar-masses.webp"),
        title: "Molar Mass Calculator",
        caption: "Look up molar mass for common lab compounds",
      },
    ],
  },
  {
    path: "/molarity-formula",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/molarity-calculator.webp"),
        title: "Molarity formula",
        caption: "Molarity equation M = n/V and molar concentration formula",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "About Molarity Calculator",
        caption: "Brand logo used on the About page",
      },
    ],
  },
  {
    path: "/blog",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/blog/how-to-calculate-molarity",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/molarity-calculator.webp"),
        title: "How to calculate molarity",
        caption: "Step-by-step guide to calculating molar concentration",
      },
    ],
  },
  {
    path: "/blog/molarity-to-grams",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/home-2-mass-needed.webp"),
        title: "Molarity to grams",
        caption: "Convert molarity to grams for solution prep",
      },
    ],
  },
  {
    path: "/blog/ml-to-moles",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/home-4-molar-masses.webp"),
        title: "mL to moles",
        caption: "Convert milliliters and molarity into moles of solute",
      },
    ],
  },
  {
    path: "/blog/molarity-vs-molality",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/home-2-mass-needed.webp"),
        title: "Molarity vs molality",
        caption: "Comparison of molarity and molality concentration units",
      },
    ],
  },
  {
    path: "/blog/how-to-dilute-a-stock-solution",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/home-3-dilution.webp"),
        title: "How to dilute a stock solution",
        caption: "Guide to diluting molar stocks with C1V1 = C2V2",
      },
    ],
  },
  {
    path: "/contact-us",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}
