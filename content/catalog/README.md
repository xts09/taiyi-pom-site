# Catalog Content

Product content belongs under `products/<source>/`, one JSON file per grade.
Do not edit files under `src/generated/`; run `npm run catalog:generate` instead.

TDS PDFs use this path and filename pattern:

`public/documents/tds/<polymer>/taiyi-<grade>-tds-en-r<revision>.pdf`

Grade pages are indexable by default. Set `seo.indexable` to `false` only for a
real grade record that should remain available to users but stay out of search
results and the sitemap. Aliases redirect permanently to the canonical `slug`.
