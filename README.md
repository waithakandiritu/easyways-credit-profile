# EasyWays Credit — website

React 19 + Vite + Tailwind 4, statically generated at build time.

```bash
npm run dev        # dev server (client-rendered shell)
npm run build      # typecheck, build, prerender every route
npm run preview    # serve dist/ as it will be served in production
npm run lint
```

## Static generation

`npm run build` runs four steps: `tsc -b`, a client build, an SSR build, then
[`scripts/prerender.ts`](scripts/prerender.ts). The prerender step takes
`dist/index.html` as a template, renders each route through the SSR bundle, and
writes a complete HTML document per route:

```
dist/index.html            /
dist/products/index.html   /products
dist/404.html              anything unmatched
```

The client bundle hydrates that markup ([`src/entry-client.tsx`](src/entry-client.tsx)
picks `hydrateRoot` when `#root` already has content, `createRoot` otherwise — which
is what keeps `npm run dev` working against the empty shell).

## SEO

[`src/data/seo.ts`](src/data/seo.ts) is the single source of truth for routes and
their metadata. It feeds three consumers, so titles, canonicals and the sitemap
cannot drift apart:

| Consumer | Role |
| --- | --- |
| [`scripts/prerender.ts`](scripts/prerender.ts) | bakes `<title>`, description, canonical, OG/Twitter and JSON-LD into each static file |
| [`src/lib/useSeo.ts`](src/lib/useSeo.ts) | re-applies the same tags during client-side navigation |
| [`src/lib/seoTags.ts`](src/lib/seoTags.ts) | generates `dist/sitemap.xml` from the indexable routes |

**Adding a route** means adding it to the `<Routes>` tree in
[`src/App.tsx`](src/App.tsx) *and* to `pages` in `src/data/seo.ts`. Miss the second
and the route ships without metadata and never gets prerendered.

Structured data lives in [`src/data/jsonLd.ts`](src/data/jsonLd.ts), derived from the
same content the pages render: `FinancialService` + `WebSite` on the home page,
`FAQPage` built from `src/data/faq.ts`, an `ItemList` of `LoanOrCredit` offers built
from `src/data/products.ts`, and breadcrumbs elsewhere. It is injected at prerender
time only — crawlers always receive the static document.

Link previews use `/assets/og-cover.jpg` — a 1200×630 card (the size
`summary_large_image` expects) carrying the logo, headline and domain. Replacing it
means dropping in a new file at that size and path; nothing else needs to change.

## Deploying

```bash
docker compose up -d --build      # build + run, listening on 127.0.0.1:8080
curl -I http://127.0.0.1:8080/healthz
```

[`Dockerfile`](Dockerfile) is a two-stage build: `node:22-alpine` runs
`npm ci && npm run build`, then the prerendered `dist/` is copied into
`nginx:1.29-alpine`. No Node in the final image — it's ~63 MB, static files only.
Node 22.18+ is required in the build stage because `scripts/prerender.ts` is run
directly by `node`, relying on native type stripping.

### The nginx rules that matter

[`nginx.conf`](nginx.conf) is baked into the image. Two rules are load-bearing, and
both are easy to get wrong:

```nginx
location / {
    try_files $uri $uri/index.html =404;
}
```

- **No `$uri/`.** Including it makes nginx `301` to the trailing-slash form, costing a
  round trip and landing on a URL that disagrees with the page's own `rel=canonical`.
- **`=404`, not `/404.html`.** Naming the file serves the error page with a `200`,
  which tells crawlers a dead URL is a real page.
- **Never** the SPA fallback (`try_files $uri /index.html`) — that serves the home
  page's `<head>` on every route and undoes the prerendering entirely.

Caching splits three ways: hashed `/assets/` are `immutable` for a year, route
documents are `no-cache` so a deploy is visible immediately, and `sitemap.xml` /
`robots.txt` get an hour. Security headers, including a CSP allowlisting only Google
Fonts and the OpenStreetMap iframe, live in
[`security-headers.inc`](security-headers.inc).

> nginx's `add_header` **replaces** rather than merges: a location that sets any
> `add_header` drops every one inherited from the server block. That's why several
> locations restate the shared include.

### TLS

The container serves plain HTTP on `:80` and expects TLS to be terminated in front
of it. On the host:

```nginx
server {
    listen 443 ssl;
    server_name easywayscredit.com;
    # ssl_certificate ... (certbot)

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

The container's `real_ip` config trusts private ranges for `X-Forwarded-For`, so
access logs record real client addresses rather than the Docker gateway.

### Without Docker

Deploy the contents of `dist/` to a static host and reproduce the rules above.
Files in `public/` (`favicon.png`, `robots.txt`, `assets/`) are copied verbatim;
`sitemap.xml` is **generated** into `dist/` — don't add one to `public/`.

## Notes

- The React Compiler is enabled ([docs](https://react.dev/learn/react-compiler)); it
  slows dev and build somewhat.
- Type-aware lint rules can be turned on by installing `oxlint-tsgolint` and setting
  `options.typeAware` in `.oxlintrc.json`.
