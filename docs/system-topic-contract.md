# System Topic Contract

## Status

**D2g — relationship-presentation reuse preview.**

D2f-a established the route-free editorial contract. D2f-c adds one explicit
English preview release for Valve Flow Control. D2g lets the English Water
Control page reference that preview in development and Vercel Preview by
reusing the existing Related Component Solutions presentation pattern. It
creates no production route, public link, canonical, hreflang, sitemap entry,
structured data, navigation item, or indexable entity.

## Architecture Invariant

`Part` remains the join evidence for two independent axes:

```text
Application -> Application System -> Part / Assembly
                                      <- Component Family
```

- `PartClassification.systemId` records the System/use-context axis.
- `primaryComponentId` or `proposedComponentId` records the Component axis.
- Neither axis may be derived from the other.
- A valid System Topic cannot write or repair canonical classification data.

## Three Separate Gates

1. **Canonical relationship gate** — `ApplicationSystem` and
   `PartClassification.systemId` determine which Part-to-System statements are
   valid.
2. **Editorial gate** — `SystemTopic.editorialStatus` is only `draft` or
   `reviewed`. It determines content readiness, not visibility.
3. **Route release gate** — `systemTopicReleases` explicitly owns route,
   locale, release status, and potential SEO surfaces. Canonical Systems and
   editorial Topics cannot create routes by enumeration.

Application-page promotion is a fourth, independent capability in
`applicationSystemTopicPromotions`. A resolvable Topic is not automatically
linked from its owning Application. A `preview` promotion may resolve only in
the same non-production environments as its matching preview release; a
production Application page must fail closed and emit no reference.

Inline Application-page grouping remains a separate capability in
`applicationSystemPresentation.ts`. The existing
`ApplicationSystem.publicationStatus` field currently carries legacy
taxonomy/inline-presentation meaning; it is not read as a System Topic
publishing switch. A later bounded migration may split that field, but D2f-c
does not change Washing Machine behavior.

## Preview Runtime Contract

The Valve Flow Control locale release remains `preview`.

- Local development and `VERCEL_ENV=preview` may resolve the route.
- `VERCEL_ENV=production`, local production builds, and unknown hosting
  environments fail closed.
- Production static params exclude preview Topics.
- A preview Topic in production must resolve through `notFound()`, not through
  a reachable `noindex` page.
- Preview metadata is `noindex, nofollow` and intentionally omits canonical,
  hreflang, Open Graph URL, and structured data.
- Preview releases cannot enter the sitemap or become production-visible
  Application promotions.

## Relationship Presentation Reuse

The Water Control Application keeps its complete eight-Part inventory as a flat
list. Two independent content relationships may follow it:

- Related Component Solutions continues to resolve from the production
  Application-to-Component compatibility view.
- The preview System Topic relation resolves from its explicit release and
  promotion records.

Both relationship types reuse the same existing card layout, spacing,
interaction, and responsive behavior. They remain separately labelled sibling
blocks and neither is nested inside the other. D2g creates no new “Explore by”
navigation, no parallel card system, and no requirement that either relation
set cover all Application Parts.

The Home Component Solutions section already links the six mature Component
Solution pages and the Component directory. D2g does not change its content,
layout, or selection policy.

## Editorial Relationship Rule

For every Topic:

```text
representativePartIds ⊆ canonical members of SystemTopic.systemId
```

The subset may be strict and does not need to enumerate every canonical member.
There is no remainder, coverage percentage, or exactly-once Application layout
contract. A non-member Part fails Topic validation and must go through canonical
evidence review; the editorial layer must not assign `systemId` automatically.

## Valve Flow Control Draft

The first draft uses three representative Parts from six canonical members:

- `valve-spool-assembly`
- `thermostatic-valve-body`
- `valve-housing-component`

`guide-wheel` is deliberately excluded because it has no canonical Valve Flow
Control membership. The draft treats metering, shutoff, actuation, leakage,
assembly, material screening, and validation as a whole-system topic. It does
not replace the cross-Application Valve Spools & Cartridges Component Family.

The first preview is grade-neutral. It may lead from operating condition to
requirement allocation, then to Base POM, Wear-Resistant & Low-Friction POM, or
Glass Fiber Reinforced POM screening directions, technical data search, and an
application discussion. It must not recommend an exact Taiyi grade. Exact-grade
references require a later, separate engineering evidence gate.

## D2g Freeze

- Washing Machine grouping remains 8 Parts / 3 sections / 2-3-3.
- Canonical mapped Component coverage remains 36.
- Production exact Component coverage remains 29.
- Consumer semantic Application–Component relations remain 15.
- Component Candidates remain 8.
- No System Topic is published.
- Water Control remains an eight-Part flat Application page.
- Only the English development/Preview Water Control page may show the preview
  System Topic relationship; production and other locales show none.
- Existing Related Component Solutions and the Home Component Solutions section
  remain connected to the six production Component Families.
- The preview selects three representative canonical members; it does not
  enumerate all six or render `guide-wheel`.
