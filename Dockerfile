# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Build: typecheck, bundle, and prerender every route to static HTML.
# Node 22.18+ is required — scripts/prerender.ts is run directly by node, which
# strips its TypeScript types without a separate compile step.
# ---------------------------------------------------------------------------
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies from the lockfile first so this layer is cached until the
# lockfile itself changes. Dev dependencies are needed: vite and tsc do the build.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------------------------------------------------------------------------
# Serve: nginx with the prerendered output. No Node in the final image.
# ---------------------------------------------------------------------------
FROM nginx:1.29-alpine AS runtime

# Replace the stock server block rather than adding alongside it.
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf            /etc/nginx/conf.d/easyways.conf
COPY security-headers.inc  /etc/nginx/conf.d/security-headers.inc

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
