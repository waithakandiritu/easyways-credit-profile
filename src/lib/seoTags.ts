/**
 * Describes the head tags a route needs, once, in a form both renderers can use:
 * `useSeo` applies them to the live document, and the prerender script serialises
 * them into each static HTML file.
 *
 * Every managed tag carries `data-seo` so a client-side navigation can clear the
 * previous route's tags — including the ones baked in at prerender time — instead
 * of accumulating duplicates.
 */

import { SITE, absoluteUrl, indexablePages, type PageSeo } from "../data/seo";

export const SEO_ATTR = "data-seo";

export type HeadTag =
  | { kind: "meta"; attr: "name" | "property"; key: string; content: string }
  | { kind: "link"; rel: string; href: string };

export function headTagsFor(seo: PageSeo): HeadTag[] {
  const url = absoluteUrl(seo.path);
  const image = absoluteUrl(seo.image ?? SITE.ogImage);

  const tags: HeadTag[] = [
    { kind: "meta", attr: "name", key: "description", content: seo.description },

    { kind: "meta", attr: "property", key: "og:title", content: seo.title },
    { kind: "meta", attr: "property", key: "og:description", content: seo.description },
    { kind: "meta", attr: "property", key: "og:url", content: url },
    { kind: "meta", attr: "property", key: "og:image", content: image },
    { kind: "meta", attr: "property", key: "og:type", content: "website" },
    { kind: "meta", attr: "property", key: "og:site_name", content: SITE.name },
    { kind: "meta", attr: "property", key: "og:locale", content: SITE.locale },

    { kind: "meta", attr: "name", key: "twitter:card", content: "summary_large_image" },
    { kind: "meta", attr: "name", key: "twitter:title", content: seo.title },
    { kind: "meta", attr: "name", key: "twitter:description", content: seo.description },
    { kind: "meta", attr: "name", key: "twitter:image", content: image },
  ];

  // A canonical is an indexing directive, so it says nothing useful on a page we
  // are asking crawlers not to index — and on /404 it would point at a dead URL.
  if (seo.noindex) {
    tags.push({ kind: "meta", attr: "name", key: "robots", content: "noindex, follow" });
  } else {
    tags.push({ kind: "link", rel: "canonical", href: url });
  }

  return tags;
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Serialises the full <head> block — title included — for a prerendered page. */
export function renderHeadTags(seo: PageSeo, indent = "    "): string {
  const lines = [`<title>${escapeAttr(seo.title)}</title>`];

  for (const tag of headTagsFor(seo)) {
    lines.push(
      tag.kind === "meta"
        ? `<meta ${SEO_ATTR} ${tag.attr}="${tag.key}" content="${escapeAttr(tag.content)}" />`
        : `<link ${SEO_ATTR} rel="${tag.rel}" href="${escapeAttr(tag.href)}" />`,
    );
  }

  return lines.join(`\n${indent}`);
}

/** Serialises JSON-LD blocks as <script> tags, safe to embed in HTML. */
export function renderJsonLd(blocks: Record<string, unknown>[], indent = "    "): string {
  if (blocks.length === 0) return "";
  return blocks
    .map(
      (block) =>
        `<script type="application/ld+json">${JSON.stringify(block).replace(/</g, "\\u003c")}</script>`,
    )
    .join(`\n${indent}`);
}

/** Builds sitemap.xml from the indexable routes in src/data/seo.ts. */
export function renderSitemap(): string {
  const urls = indexablePages
    .map((page) => {
      const parts = [`    <loc>${absoluteUrl(page.path)}</loc>`];
      if (page.changefreq) parts.push(`    <changefreq>${page.changefreq}</changefreq>`);
      if (page.priority !== undefined) parts.push(`    <priority>${page.priority.toFixed(1)}</priority>`);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
