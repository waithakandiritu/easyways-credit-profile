/**
 * Single source of truth for routes and their SEO metadata.
 *
 * Consumed by three places:
 *  - `useSeo` (src/lib/useSeo.ts) — keeps the head correct across client-side navigation
 *  - scripts/prerender.ts — bakes the head into each prerendered HTML file
 *  - scripts/prerender.ts — generates dist/sitemap.xml
 *
 * Adding a route means adding it here *and* to the <Routes> tree in src/App.tsx.
 */

export const SITE = {
  url: "https://easywayscredit.com",
  name: "EasyWays Credit",
  legalName: "EasyWays Credit Limited",
  locale: "en_KE",
  /** 1200×630 social card — the size `summary_large_image` previews expect. */
  ogImage: "/assets/og-cover.jpg",
  logo: "/assets/logo.png",
};

/** Business facts mirrored from the Contact page and Footer, in schema.org-friendly form. */
export const BUSINESS = {
  email: "support@easywayscredit.com",
  /** E.164 for structured data; the display forms live in the components. */
  phones: ["+254734641449", "+254786189755", "+254100974188"],
  address: {
    street: "Trio Complex, Thika Road (behind Garden City Mall)",
    locality: "Nairobi",
    country: "KE",
  },
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    { days: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
};

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  /** Omit to inherit SITE.ogImage. */
  image?: string;
  /** Excluded from the sitemap and served with `robots: noindex`. */
  noindex?: boolean;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
};

export const pages: PageSeo[] = [
  {
    path: "/",
    title: "EasyWays Credit — Fast Credit. Your Way, Anytime.",
    description:
      "Licensed digital credit provider in Kenya. Logbook loans, emergency loans, virtual asset loans and phone financing — disbursed straight to M-Pesa.",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/products",
    title: "Products — EasyWays Credit",
    description:
      "Logbook, emergency, virtual asset and phone financing — fully regulated by CBK.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/how-it-works",
    title: "How it works — EasyWays Credit",
    description:
      "From application to disbursement in three steps. Here's exactly how EasyWays Credit works.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/about",
    title: "About — EasyWays Credit",
    description:
      "A licensed Kenyan lender headquartered at Trio Complex, Thika Road, behind Garden City Mall, Nairobi.",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/opportunities",
    title: "Opportunities — EasyWays Credit",
    description:
      "We are an equal opportunity provider where the right teams matter. Upcoming opportunities at EasyWays Credit will be communicated here.",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/faq",
    title: "FAQ — EasyWays Credit",
    description:
      "Answers to common questions about loans, eligibility, repayment and regulation.",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact — EasyWays Credit",
    description:
      "Reach the EasyWays Credit team in Nairobi by phone, email, WhatsApp or in person at Trio Complex, Thika Road, behind Garden City Mall.",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/privacy",
    title: "Privacy Policy — EasyWays Credit",
    description:
      "How EasyWays Credit collects, uses, stores and protects your personal data under the Data Protection Act 2019.",
    changefreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/terms",
    title: "Terms & Conditions — EasyWays Credit",
    description:
      "The legal terms governing your relationship with EasyWays Credit Limited.",
    changefreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/apply",
    title: "Apply — EasyWays Credit",
    description:
      "Continue your EasyWays Credit application on our secure system.",
    noindex: true,
  },
];

/** Rendered for any unmatched path, and prerendered to dist/404.html. */
export const notFoundSeo: PageSeo = {
  path: "/404",
  title: "Page not found — EasyWays Credit",
  description: "The page you're looking for has moved or no longer exists.",
  noindex: true,
};

/** Every page that belongs in the sitemap. */
export const indexablePages = pages.filter((p) => !p.noindex);

const byPath = new Map(pages.map((p) => [p.path, p]));

/** Resolves a pathname to its SEO entry, falling back to the 404 entry. */
export function seoFor(pathname: string): PageSeo {
  const normalized =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return byPath.get(normalized || "/") ?? notFoundSeo;
}

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).href;
}
