# Site Maintenance

## Products

Edit one JSON file under `content/catalog/products/<source>/`. Keep `id`, `slug`,
and `grade` stable after publishing. Run `npm run catalog:generate`; never edit
`src/generated/catalog.json` directly.

The three record kinds are:

- `product`: POM product page data.
- `engineering-tds`: PA6, PA66, and PPA grade data shown as web TDS pages.
- `conductive-entry`: cross-material conductive and antistatic directory rows.

For POM glass-fiber records, maintain `glassFiberContent` as the numeric percentage
supported by the grade's reviewed formulation description. The comparison module
reads this field, not translated copy. Keep the percentage consistent with the
record's existing descriptions; do not infer it from a grade suffix. New POM
comparison property labels also need a Chinese label in
`src/lib/pomGlassFiberComparison.ts` before inclusion in the pilot.

## TDS PDFs

Store PDFs at:

`public/documents/tds/<polymer>/taiyi-<grade>-tds-en-r<revision>.pdf`

Example: `public/documents/tds/pom/taiyi-etm100pu-tds-en-r01.pdf`.
Set `tds.status` to `pdf`, then add `revision`, `pdfPath`, and `updatedAt` to the
product JSON. Until a PDF exists, keep `tds.status` as `data-only`.

## SEO

Titles, descriptions, canonical URLs, social metadata, structured data, and the
sitemap are generated from catalog data. Only add a product-level `seo` object
when the default wording needs an intentional override:

```json
{
  "seo": {
    "title": "Custom title | Taiyi Nano",
    "description": "Custom search description.",
    "image": "/custom-og-image.jpg",
    "indexable": true
  }
}
```

Grade pages are indexable by default. Use `"indexable": false` only when a
real grade must remain accessible but should stay out of search results and the
sitemap. Product aliases redirect permanently to the canonical `slug`.

## Customer case studies

The English `/case-studies` and Chinese `/zh/case-studies` pages are the permanent case overviews. Add verified case records in `src/data/caseStudies.ts`; the overview, Resources preview (first three cases), and overview structured data consume that collection. Keep existing detail URLs stable. Each new detail page also needs its own route, metadata, release-manifest entry and sitemap entry, with only completed languages released. Confirm customer facts and permission for identities, images and test excerpts before publishing. Do not add placeholders or filters merely to fill the overview.

## Before Publishing

Run `npm run prepublish:check`. It regenerates and validates the catalog, runs
the catalog SEO quality gate, checks route collisions and TDS files, runs lint,
type checking and tests, and creates a production build. Resolve failures
before deployment.

For visual changes, follow `docs/site-visual-rules.md` and the rendered-check
requirements in `AGENTS.md`. Data-only edits should not include CSS changes.
