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
- Product, brand, copy, and route intent: `PRODUCT.md`
- Canonical visual and layout system: `DESIGN.md`
- Shared component ownership and variants: `COMPONENTS.md`
- Runtime design tokens: `tokens.css`
- Maintenance guide: `docs/maintenance.md`
- Launch checklist: `docs/launch-checklist.md`
- Visual review quick reference: `docs/site-visual-rules.md`

`npm run prepublish:check` regenerates the catalog, validates data, runs lint,
type checking and tests, and then creates a production build.
