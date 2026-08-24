# Part Taxonomy Contract

## Status

- Phase: D1a — Taxonomy Contract
- Review state: **CLOSED — approved with contract amendments**
- Runtime authority: none until D1b is approved and implemented
- Production frontend impact: none

This document defines the semantic entities, relationship boundaries, and
integrity rules for the next component-classification phase. It does not
authorize routes, navigation changes, sitemap entries, page grouping, new
component pages, or rendering changes.

## IA Thesis

Taiyi Polymer organizes application content on two independent axes that meet
at a stable part entity:

```text
Application -> Application System -> Part / Assembly
                                      <- Component Family
                                             |
                                      Material Direction
                                             |
                                    Material Family / Grade
```

The application axis explains where an entity is used. The component axis
explains what engineering-function family owns it. Neither axis may be used as
a substitute for the other.

## Organizing Principle

The model is object-first and relationship-driven:

- `Part` and `Assembly` are the join entities.
- `Application` owns its `ApplicationSystem` taxonomy.
- `ComponentFamily` owns exact engineering classification across applications.
- `EngineeringContext` adds controlled engineering characteristics without
  creating another ownership hierarchy.
- `MaterialDirection` remains a separate downstream material-selection model.

## Stable Identity Contract

Semantic relationships must use stable IDs. Slugs and localized labels are
presentation and routing attributes resolved from their owning registries.

Changing a title, translation, or route slug must not change an entity ID.
Changing an ID is a semantic migration and requires an explicit old-to-new
mapping and integrity review.

The D1b implementation should use nominal or otherwise constrained ID types:

```ts
type ApplicationId = string;
type ApplicationSystemId = string;
type PartId = string;
type ComponentId = string;
type ComponentCandidateId = string;
type EngineeringContextId = string;
```

The concrete TypeScript representation may use branded strings or registry-key
unions. Plain unrelated strings must not be freely interchangeable at relation
boundaries.

## Canonical Entities

### Application

An industry or use-domain entry point, such as Automotive or Water Control.
Application IDs are stable semantic identifiers. Existing application slugs
may initially be adopted as IDs only when D1b explicitly records that decision.

### Application System

An application-scoped system or subsystem taxonomy entity.

```ts
type ApplicationSystem = {
  id: ApplicationSystemId;
  applicationId: ApplicationId;
  slug: string;
  title: string;
  summary?: string;
  publicationStatus: "taxonomy-only" | "section-only" | "candidate" | "published";
};
```

Contract:

- One Application owns zero or more Application Systems.
- One Application System belongs to exactly one Application.
- Similar titles under different Applications are different entities.
- A System ID must be globally unambiguous and application-scoped in meaning,
  for example `automotive-fuel-delivery-control`.
- D1 creates taxonomy entities only. `taxonomy-only` must not produce UI, URLs,
  metadata, sitemap entries, or internal navigation.

### Part Entity

The existing stable application part ID identifies a concrete named entity.
Every known Part ID must receive exactly one classification decision.

```ts
type PartEntityKind = "part" | "assembly";
```

- `part`: a non-container by default.
- `assembly`: container-capable, but D1 does not model child membership.

The distinction prevents an assembly such as a fuel-pump assembly from being
treated as equivalent to an impeller, gear, housing, or valve that it may later
contain. D1 must not add `parentAssemblyId` or child relations.

### Component Family

A stable, cross-application engineering-function owner, such as Precision
Plastic Gears. Component IDs express semantic identity; slugs express routing.

```ts
type ComponentFamily = {
  id: ComponentId;
  slug: string;
  title: string;
};
```

Application-to-Component relationships are many-to-many. A Component Family
may own Parts from several Applications, and an Application may contain Parts
owned by several Component Families.

### Component Candidate

A governed audit entity representing a proposed future Component Family.
Candidates cluster `new-owner` decisions without prematurely creating a
canonical Component Family or route.

```ts
type ComponentCandidate = {
  id: ComponentCandidateId;
  proposedTitle: string;
  rationale: string;
  status: "proposed" | "approved" | "rejected" | "merged";
};
```

Candidate IDs and Component IDs occupy separate semantic domains. Approval in
D3 requires an explicit candidate-to-component migration; it must not happen
implicitly because two strings happen to match.

### Engineering Context

A controlled vocabulary of engineering characteristics. Initial candidates may
include `sliding`, `rotating`, `sealing`, `load-bearing`, `fluid-contact`,
`static-control`, `precision-guiding`, `impact-loaded`, and `snap-fit`.

Engineering Context must not contain:

- Applications or industries;
- Systems or subsystems;
- Component ownership labels;
- material directions such as wear-resistant or reinforced;
- material families, grades, or product names.

Terms must be added, merged, renamed, or deprecated through review. Free-form
tags are not permitted in `PartClassification`.

## Canonical Part Classification

`PartClassification` is the future source of truth only for exact Part or
Assembly classification decisions and exact Part-to-Component ownership.

```ts
type PartClassification = {
  partId: PartId;
  applicationId: ApplicationId;
  entityKind: "part" | "assembly";

  systemId?: ApplicationSystemId;

  primaryComponentId?: ComponentId;
  proposedComponentId?: ComponentCandidateId;

  relatedContextIds?: readonly EngineeringContextId[];

  classificationStatus: "mapped" | "new-owner" | "review";
};
```

`applicationId` remains explicit even if Part IDs are globally unique. It is
the ownership boundary used to validate the Part source and any System
membership.

### Classification State Contract

| Status | `primaryComponentId` | `proposedComponentId` | Meaning |
| --- | --- | --- | --- |
| `mapped` | exactly one, required | forbidden | The exact Part has an approved existing Component owner. |
| `new-owner` | forbidden | exactly one valid candidate, required | The exact Part requires a proposed new Component owner. |
| `review` | forbidden | optional | Engineering ownership remains unresolved; a candidate may record the leading hypothesis. |

A `review` decision is still a classification decision for coverage purposes,
but it is not ownership evidence.

## Context-Only Application–Component Relations

Pure industry context cannot be represented by `PartClassification` because it
does not assert evidence about a specific Part.

```ts
type ApplicationComponentContextRelation = {
  applicationId: ApplicationId;
  componentId: ComponentId;
  relationType: "industry-context";
};
```

This registry remains semantically independent:

- `PartClassification` owns exact Part-to-Component facts.
- `ApplicationComponentContextRelation` owns context-only
  Application-to-Component facts.
- A context-only relation must not be counted as exact Part coverage.
- A context-only relation must not manufacture a Part ID or primary owner.
- Duplicate Application–Component context pairs are forbidden.

During D1b, a compatibility selector may merge exact ownership views and
context-only relations into the shape required by current page consumers. The
merged view is derived data and must not become another writable source of
truth.

If the same Application–Component pair is supported by exact Part ownership
and by a context-only record, the derived compatibility view must emit one
exact-ownership pair. Exact ownership takes precedence over context-only
representation in rendered, counted, and consumer-facing derived views. The
context-only record may remain as source history, but it must not create a
second relation. Gaining exact Part evidence therefore promotes the derived
pair from context-only to exact; it does not produce `exact + context`
duplicates.

## Relationship Cardinality

```text
Application 1 ---- 0..N ApplicationSystem
Application 1 ---- 0..N PartClassification
Application M ---- N ComponentFamily (derived exact view + context-only facts)

PartClassification ---- exactly 1 Application
PartClassification ---- 0..1 ApplicationSystem
PartClassification ---- 0..1 primary ComponentFamily
PartClassification ---- 0..1 proposed ComponentCandidate
PartClassification ---- 0..N EngineeringContext
```

The model does not define strict parentage from Application to Component.
Component Solutions remain part of the Applications content family in the UI,
while their semantic relationship stays many-to-many.

## Integrity Contract

D1 must ultimately enforce the following invariants:

### Coverage and uniqueness

- At D1c closure, every known Part ID has exactly one `PartClassification`
  record.
- No unknown Part ID has a classification record.
- Duplicate classification decisions are zero.
- Orphan known Parts are zero.
- D1 target: 68 of 68 known Parts have a classification decision.

### Phased coverage

D1b has an explicit transitional coverage contract:

- `migratedExactParts = 29`;
- `intentionallyUnclassifiedParts = 39`;
- migrated plus intentionally unclassified Parts equals all 68 known Parts;
- no Part may appear in both sets;
- no classification may be invented for any of the remaining 39 Parts;
- absence from `PartClassification` during D1b means not yet audited, not
  `review`.

At D1c closure:

- `classifiedParts = 68`;
- `intentionallyUnclassifiedParts = 0`;
- `review` may be assigned only after an actual classification audit concludes
  that ownership remains unresolved.

### Reference integrity

- `applicationId` resolves to a real Application.
- `partId` resolves to a real Part owned by `applicationId`.
- `systemId`, when present, resolves to a real Application System.
- The resolved System's `applicationId` equals the classification's
  `applicationId`.
- `primaryComponentId`, when present, resolves to a real Component Family.
- `proposedComponentId`, when present, resolves to a real Component Candidate.
- Every Engineering Context ID resolves to the controlled vocabulary.
- Repeated Engineering Context IDs within one record are forbidden.

### State integrity

- `mapped` requires exactly one `primaryComponentId` and forbids
  `proposedComponentId`.
- `new-owner` forbids `primaryComponentId` and requires exactly one valid
  `proposedComponentId`.
- `review` forbids `primaryComponentId`; `proposedComponentId` is optional.
- Context-only relations do not affect any classification status.

### Entity-kind integrity

- Every classification explicitly declares `part` or `assembly`.
- `part` is non-container by default.
- `assembly` is container-capable only; no child relation is inferred.
- Labels containing words such as assembly, unit, module, or system do not
  automatically determine `entityKind`; classification requires review.

## D1b Migration Boundary

D1b may implement only the registry skeleton and compatibility layer needed to
represent this contract:

1. Assign stable IDs to the six existing Component Families.
2. Add the Application System taxonomy registry with taxonomy-only records.
3. Add the controlled Engineering Context registry.
4. Add the Component Candidate registry.
5. Add `PartClassification` and migrate the 29 currently exact-mapped Parts.
6. Move or adapt the existing four `industry-context` records into the
   independent context-only registry.
7. Provide a read-only compatibility view for existing consumers.
8. Replace the fixed `exactPartCoverage === 29` baseline with contract-focused
   validation appropriate to the migration state.

D1b must not classify the remaining 39 Parts beyond decisions explicitly
approved for that batch. D1c owns completion of the 68-Part audit.

D1c may add or refine `ApplicationSystem` records when required by the 68-Part
audit. The D1b System skeleton is not a frozen list. Every System created or
refined during D1 must remain `publicationStatus = "taxonomy-only"`; System
discovery is allowed, but System publication is not.

## D1 Production Freeze

For all D1 phases, Production frontend diff must equal zero:

- no new or removed URL;
- no navigation or Footer change;
- no sitemap or indexing change;
- no Application page grouping or copy change;
- no new Component page;
- no rendering, styling, imagery, metadata, or localized-content change.

Registry compatibility must preserve current consumer output. Passing a build
or typecheck alone does not authorize a visible change.

## Governance

- Stable ID changes require an explicit migration map.
- New Application Systems must name their owning Application.
- New Engineering Context terms require taxonomy review and overlap checking.
- New Component Candidates require a rationale and at least one audited Part.
- Candidate approval, rejection, or merge requires a recorded decision before
  D3 changes canonical Component ownership.
- A new Component Family does not automatically qualify for a public page. Page
  publication remains governed by the existing content, imagery, internal-link,
  SEO, and indexing gates in `PRODUCT.md`.
- Generated compatibility views must never be edited directly.

## D1a Closure Checklist

- [x] Stable ID and slug responsibilities are unambiguous.
- [x] Application-owned Systems and cross-application Components are distinct.
- [x] Part and Assembly semantics are sufficient without child modeling.
- [x] Exact ownership and context-only relations remain independent, with exact
      ownership taking precedence in derived views.
- [x] `mapped`, `new-owner`, and `review` states are mutually valid and complete.
- [x] Proposed Component clustering survives the D1c audit.
- [x] Engineering Context cannot absorb application, system, component, or
      material semantics.
- [x] D1b can implement the model without changing Production frontend output.
- [x] D1b distinguishes not-yet-audited Parts from audited `review` decisions.
- [x] D1c can discover Systems and reach 68/68 decisions without publishing
      pages.

This checklist is approved and D1a is closed. D1b remains a separate bounded
implementation batch and must stop for review before D1c begins.
