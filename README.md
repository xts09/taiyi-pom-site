# Taiyi Nano Product Site

Next.js product, application, resource, and technical-data site for Taiyi Nano.

## Common Commands

```bash
npm run dev
npm run catalog:generate
npm run check
npm run prepublish:check
```

- Product content: `content/catalog/products/`
- Generated catalog: `src/generated/catalog.json` (do not edit)
- Maintenance guide: `docs/maintenance.md`
- Launch checklist: `docs/launch-checklist.md`
- Stable visual rules: `docs/site-visual-rules.md`

`npm run prepublish:check` regenerates the catalog, validates data, runs lint,
type checking and tests, and then creates a production build.
