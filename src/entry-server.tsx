// oxlint-disable react/only-export-components -- server-only entry, never hot-reloaded
/**
 * SSR entry, built by `npm run build:server` into dist/server/entry-server.js.
 *
 * scripts/prerender.ts consumes only this module, so everything the prerenderer
 * needs — markup, head tags, structured data, sitemap — is re-exported here and
 * goes through Vite's module resolution rather than Node's.
 */

import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./App";

export { pages, notFoundSeo, type PageSeo } from "./data/seo";
export { jsonLdFor } from "./data/jsonLd";
export { renderHeadTags, renderJsonLd, renderSitemap } from "./lib/seoTags";

/** Renders the app for a path and returns the markup for #root. */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
