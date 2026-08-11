import { useEffect } from "react";
import { useLocation } from "react-router";
import { seoFor, type PageSeo } from "../data/seo";
import { SEO_ATTR, headTagsFor } from "./seoTags";

/**
 * Keeps <head> in sync during client-side navigation.
 *
 * The first paint of every route already carries the correct tags — they are baked
 * in by scripts/prerender.ts — so this only matters once the router takes over.
 *
 * Pass an explicit entry for routes that are not in the `pages` table (the 404).
 */
export function useSeo(override?: PageSeo) {
  const { pathname } = useLocation();
  const seo = override ?? seoFor(pathname);

  useEffect(() => {
    document.title = seo.title;

    // Drop the previous route's tags, prerendered ones included, then re-add.
    document.head.querySelectorAll(`[${SEO_ATTR}]`).forEach((el) => el.remove());

    for (const tag of headTagsFor(seo)) {
      const el = document.createElement(tag.kind);
      el.setAttribute(SEO_ATTR, "");
      if (tag.kind === "meta") {
        el.setAttribute(tag.attr, tag.key);
        el.setAttribute("content", tag.content);
      } else {
        el.setAttribute("rel", tag.rel);
        el.setAttribute("href", tag.href);
      }
      document.head.appendChild(el);
    }
  }, [seo]);
}
