/**
 * Static site generation.
 *
 * Runs after both Vite builds: takes the client build's dist/index.html as a
 * template, renders every route from src/data/seo.ts through the SSR bundle, and
 * writes one fully-formed HTML file per route. Also emits sitemap.xml.
 *
 *   dist/index.html            <- "/"
 *   dist/products/index.html   <- "/products"
 *   dist/404.html              <- unmatched paths
 */

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

type PageSeo = {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
};

type ServerBundle = {
  render: (url: string) => string;
  pages: PageSeo[];
  notFoundSeo: PageSeo;
  jsonLdFor: (path: string) => Record<string, unknown>[];
  renderHeadTags: (seo: PageSeo, indent?: string) => string;
  renderJsonLd: (blocks: Record<string, unknown>[], indent?: string) => string;
  renderSitemap: () => string;
};

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDist = path.join(dist, "server");

const SEO_BLOCK = /[ \t]*<!--seo:start-->[\s\S]*?<!--seo:end-->/;
const ROOT_DIV = '<div id="root"></div>';

// This step consumes the output of the two Vite builds and, on success, deletes
// the SSR bundle — so it is only ever valid as part of a full `npm run build`.
const STALE = "Run `npm run build`; `npm run prerender` is not usable on its own.";

const bundlePath = path.join(serverDist, "entry-server.js");
let bundle: ServerBundle;
try {
  bundle = await import(pathToFileURL(bundlePath).href);
} catch {
  throw new Error(`Missing SSR bundle at ${path.relative(root, bundlePath)}. ${STALE}`);
}

const template = await readFile(path.join(dist, "index.html"), "utf8");

// dist/index.html is both the template and an output target, so prerendering it
// twice would nest the app inside its own markup.
if (!SEO_BLOCK.test(template) || !template.includes(ROOT_DIV)) {
  throw new Error(`dist/index.html has already been prerendered. ${STALE}`);
}

/** Where a route's HTML file lives: "/" -> index.html, "/products" -> products/index.html. */
function outputFile(routePath: string): string {
  return routePath === "/" ? "index.html" : path.join(routePath.slice(1), "index.html");
}

function buildPage(seo: PageSeo, url: string): string {
  const head = [
    bundle.renderHeadTags(seo),
    bundle.renderJsonLd(bundle.jsonLdFor(seo.path)),
  ]
    .filter(Boolean)
    .join("\n    ");

  return template
    .replace(SEO_BLOCK, `    ${head}`)
    .replace(ROOT_DIV, `<div id="root">${bundle.render(url)}</div>`);
}

const targets: { seo: PageSeo; url: string; file: string }[] = [
  ...bundle.pages.map((seo) => ({ seo, url: seo.path, file: outputFile(seo.path) })),
  // Rendered through a path that matches no route, so the app shows <NotFound/>.
  { seo: bundle.notFoundSeo, url: "/__404__", file: "404.html" },
];

for (const target of targets) {
  const outPath = path.join(dist, target.file);
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, buildPage(target.seo, target.url));
  console.log(`  prerendered  ${target.file}`);
}

await writeFile(path.join(dist, "sitemap.xml"), bundle.renderSitemap());
console.log("  generated    sitemap.xml");

// The SSR bundle is a build artifact, not something to deploy.
await rm(serverDist, { recursive: true, force: true });

console.log(`\n${targets.length} pages prerendered.`);
