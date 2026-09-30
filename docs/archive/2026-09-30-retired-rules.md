# Retired Project Rules — Archived 2026-09-30

This file preserves historical implementation records. It is not an active
execution or release specification. Use AGENTS.md, DESIGN.md, COMPONENTS.md,
and PRODUCT.md for current requirements.

## Pre-React-Bits Checkpoint

The historical tag `checkpoint-before-react-bits` points to commit `6a64732`
(2026-07-01). The former instruction to return to this checkpoint after motion
experiments was retired on 2026-09-30; subsequent product and component work
has superseded it as a working baseline.

## Early Localization Rollout

The following two milestones describe their original release batches. Their
restricted language-switcher groups and English-only downstream destinations
were superseded by later releases. Current coverage and localization quality
requirements are recorded in PRODUCT.md under Current Language Release Policy.

### Multilingual Products Release (2026-08-13)

- Phase A is limited to isolated, non-indexable routing previews at `/de/i18n-preview`, `/fr/i18n-preview`, and `/pt-br/i18n-preview`.
- Phase B publishes complete, human-reviewed React pages at `/de/products`, `/fr/products`, and `/pt-br/products`, backed by typed dictionaries and `next-intl`. The English `/products` page and these three localized pages form one public language group.
- The four Products pages emit the correct HTML language, a self-canonical, reciprocal `hreflang` entries for `en`, `de`, `fr`, `pt-BR`, and `x-default`, and are indexable sitemap entries. The Header exposes the same four destinations on desktop and in the mobile menu only while visiting this released page group.
- Existing unprefixed English routes outside this released group remain unchanged. Do not publish a localized URL, language switcher destination, sitemap entry, or `hreflang` for an incomplete page.
- Every Phase A preview route remains `noindex` in metadata and HTTP policy and stays absent from sitemap, public language navigation, and `hreflang`.
- The localized release manifest maps only reviewed page pairs. Unreleased destinations keep their existing English URL instead of creating a localized URL with English fallback or a false 404.
- Codex owns linguistic, technical, factual, SEO, and rendered review. User confirmation is required only when the approved English source does not establish an underlying business fact.
- Future localized pages require the same reviewed release gate. A locale URL must not expose English fallback content or become indexable before its full translated page passes review.

### Multilingual Core Funnel Release (2026-08-14)

- ML1 extends the reviewed public language group to Home and Contact at `/de`, `/fr`, `/pt-br`, `/de/contact`, `/fr/contact`, and `/pt-br/contact` while preserving the existing English routes.
- Home, Products, and Contact now share reciprocal `en`, `de`, `fr`, `pt-BR`, and `x-default` alternates, self-canonicals, language-switcher destinations, and sitemap inclusion.
- Localized Home and Contact use typed, complete page dictionaries. Contact field labels, material options, prefilled context, progress, success, fallback, and email-draft copy must not fall back to English.
- Within these released pages, Home, Products, and Contact links remain in the current locale. Applications, Resources, About, product categories, grade pages, technical-data search, previews, dynamic search parameters, and legal pages continue to use their existing English routes until separately reviewed.
- Publishing a locale shell is still not sufficient: each future route requires complete translated copy, factual and linguistic review, responsive rendered acceptance, reciprocal SEO signals, and explicit release-manifest inclusion.

## Completed Component Migrations

1. **Completed:** the shared POM landing-page hero actions now use `Button`,
   and its technical summary rails use `MetricGroup` without replacing the
   page-specific product narrative or the plain/image hero distinction.
2. **Completed:** the TDS technical search uses the shared `Input` and
   `Button` primitives while retaining its compound search-control anatomy.
   The FAQ explorer now uses the same `Input` primitive and a standard Lucide
   search icon. Guide explorers share that same input/icon anatomy, and the
   conductive grade directory now uses the shared `Select` and `Input`
   primitives for its controlled filters.
3. **Completed:** product/application `SecondarySectionNav` variants share the
   same internal slots and motion queries while preserving route-specific
   labels, responsive tab layouts, and pinned behavior.
4. **Completed:** visible Breadcrumb consumers share the canonical component
   anatomy, and the unused `.subpage-breadcrumb` rules have been removed.
5. **Completed:** all Material Recommendation CTA consumers now use
   `ActionPanel` directly, and the compatibility wrapper has been removed.
6. **Completed:** the `recommendation` variant owns the former
   `.material-cta*` visual family through component tokens and slots; the
   compatibility selectors have been removed after full CTA route-matrix
   verification.
7. **Completed:** recommendation actions use the shared `Button` inverse
   variant, and recommendation titles wrap only when the actual layout width
   requires it.
8. **Completed:** the Applications index Hero uses shared primary/secondary
   Button variants with its original desktop/mobile geometry and a verified
   keyboard focus outline; its legacy CTA classes have been removed.
9. **Completed:** product-category Heroes use the shared product-Hero Button
   variants and size with their original desktop/mobile geometry, the
   glass-fiber mobile full-width exception, and the shared keyboard focus
   outline verified.
10. **Completed:** the product index Hero uses the shared product-Hero Button
    variants and size with exact desktop/mobile screenshot parity and a
    verified keyboard focus outline; its legacy CTA classes have been removed.
11. **Completed:** both product-detail Hero render branches use the shared
    product-detail Button variants and size. Standard, document-supported, and
    longer campaign-label samples preserve their desktop/mobile geometry; the
    obsolete `.product-hero-primary-action` and `.product-hero-tds-link` CSS
    families have been removed.
12. **Completed:** application-detail Hero actions use the shared application
    Button variants and size. Automotive and long-title Conveyor Automation
    samples preserve their desktop/mobile geometry and keyboard focus outline;
    the former descendant-link styling is removed from the layout container.
13. **Completed:** long resource-article closing actions use the shared
    `resourceArticleInverse` variant and `resourceArticleAction` size. Standard
    and long-title article samples preserve their desktop/mobile geometry, and
    the local white-link class stack has been removed.
14. **Completed:** the Resources index Hero uses shared resource-index Button
    variants and size. Desktop and mobile screenshots retain exact pixel
    parity, including mobile full-width behavior; the three legacy action
    classes have been removed.
