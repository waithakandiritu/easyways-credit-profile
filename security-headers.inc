# Response headers applied to documents. Included from nginx.conf.
#
# The CSP allowlist is derived from what the site actually loads:
#   fonts.googleapis.com  the stylesheet in index.html
#   fonts.gstatic.com     the font files that stylesheet references
#   www.openstreetmap.org the office-location iframe on /contact
#   'unsafe-inline' style is required by Tailwind's inline styles, React's style
#   attributes, and the <noscript> block in index.html.

add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; frame-src https://www.openstreetmap.org; connect-src 'self'; form-action 'self'; base-uri 'self'; frame-ancestors 'none'; object-src 'none'" always;

add_header X-Content-Type-Options   "nosniff" always;
add_header Referrer-Policy          "strict-origin-when-cross-origin" always;
add_header X-Frame-Options          "DENY" always;
add_header Permissions-Policy       "geolocation=(), microphone=(), camera=(), interest-cohort=()" always;
