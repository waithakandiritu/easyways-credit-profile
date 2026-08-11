/**
 * schema.org structured data, derived from the same content the pages render.
 *
 * Injected into the prerendered HTML by scripts/prerender.ts. Crawlers always
 * receive the prerendered document, so this is never run in the browser.
 */

import { SITE, BUSINESS, absoluteUrl, seoFor } from "./seo";
import { faqGroups } from "./faq";
import { products } from "./products";

type JsonLd = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

const postalAddress: JsonLd = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.locality,
  addressCountry: BUSINESS.address.country,
};

/** The lender itself — referenced by @id from the other graphs. */
function organization(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.ogImage),
    description: seoFor("/").description,
    email: BUSINESS.email,
    telephone: BUSINESS.phones,
    address: postalAddress,
    areaServed: { "@type": "Country", name: "Kenya" },
    currenciesAccepted: "KES",
    priceRange: "$$",
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Digital Credit Provider licence",
      recognizedBy: { "@type": "Organization", name: "Central Bank of Kenya" },
    },
  };
}

function website(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-KE",
  };
}

/**
 * Every FAQ answer is present in the DOM (the accordion collapses with max-height,
 * it does not conditionally render), so this markup matches visible content.
 */
function faqPage(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
  };
}

function productList(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "EasyWays Credit loan products",
    itemListElement: products.map((product, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LoanOrCredit",
        "@id": `${absoluteUrl("/products")}#${product.id}`,
        name: product.title,
        description: product.tagline,
        image: absoluteUrl(product.img),
        url: `${absoluteUrl("/products")}#${product.id}`,
        provider: { "@id": ORGANIZATION_ID },
        loanType: product.title,
        currency: "KES",
        amount: { "@type": "MonetaryAmount", currency: "KES", maxValue: parseAmount(product.max) },
        loanTerm: { "@type": "QuantitativeValue", description: product.tenure },
        interestRate: { "@type": "QuantitativeValue", description: `${product.rate} interest` },
        feesAndCommissionsSpecification: `Processing fee: ${product.processing}`,
        areaServed: { "@type": "Country", name: "Kenya" },
      },
    })),
  };
}

/** "KSh 3,000,000" -> 3000000. Returns undefined if the string has no digits. */
function parseAmount(display: string): number | undefined {
  const digits = display.replace(/[^\d]/g, "");
  return digits ? Number(digits) : undefined;
}

function breadcrumbs(path: string): JsonLd | null {
  if (path === "/") return null;
  const { title } = seoFor(path);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: title.split(" — ")[0], item: absoluteUrl(path) },
    ],
  };
}

/** All JSON-LD blocks that belong on a given route. */
export function jsonLdFor(path: string): JsonLd[] {
  const blocks: JsonLd[] = [];

  if (path === "/") blocks.push(organization(), website());
  if (path === "/contact" || path === "/about") blocks.push(organization());
  if (path === "/faq") blocks.push(faqPage());
  if (path === "/products") blocks.push(productList());

  const crumbs = breadcrumbs(path);
  if (crumbs) blocks.push(crumbs);

  return blocks;
}
