# Component Solution Pages — Lightweight Handoff

## Objective

Build a component-led Applications content family for overseas buyers and engineers. Use the Precision Plastic Gears route as the first verified sample, then apply the approved content model to the remaining five component families.

## Current Decision

- Plan the content and customer decision path before changing the page again.
- The page must be organized around the customer's job, not around displaying every engineering note at once.
- Technical depth should remain available through progressive disclosure, but it must not block the inquiry path.
- Do not implement a new structure until the section-by-section content plan has been reviewed.

## Customer Jobs To Support

1. Recognize whether the page matches the customer's part and current problem.
2. Understand which material directions may be relevant without treating them as guarantees.
3. Know the minimum information required for a useful first review.
4. Understand what Taiyi Polymer can provide next: candidate material directions, available grade data, document paths, and possible sample-evaluation steps.
5. Continue into deeper tooling, molding, and validation guidance only when needed.

## Content Planning Order For The Sample Page

This is a planning hypothesis, not an approved implementation:

1. **Hero — identify the part and outcome**
   - State that the page is for molded precision plastic gears.
   - Name the customer outcome: screen a practical POM material direction.
   - Keep one primary inquiry action and one secondary material-browsing action.
2. **Start with the customer problem**
   - Wear or debris.
   - Noise, heat, stick-slip, or binding.
   - Root cracking or broken teeth.
   - Bore, hub, or dimensional variation.
   - For each problem, separate system/tooling checks from possible material directions.
3. **Minimum information to send**
   - Load, motion, counterface/lubrication, accuracy, environment, and acceptance target.
   - Make it explicit that incomplete information is acceptable for the first contact.
4. **What happens after contact**
   - Screen the requirement.
   - Compare candidate material directions and available supporting data.
   - Validate the final choice on molded parts and in the complete assembly.
5. **Technical detail on demand**
   - Full material-review criteria.
   - Tooling and molding considerations.
   - Molded-part and assembly validation.
   - Full inquiry checklist and related technical guidance.
6. **Final inquiry path**
   - Repeat the expected outcome rather than using a generic sales message.

## Required Planning Deliverable Before The Next Edit

Create a concise table with these columns:

- Page section
- Customer question answered
- Exact content to include
- Content to omit or move into technical detail
- Source material used
- CTA or next action
- Priority: essential, supporting, or technical depth

Only after this table is approved should the page structure and CSS be changed.

## Preserved Source Files

1. [Precision Plastic Gears](content-sources/component-solutions/01-precision-plastic-gears-source.txt)
2. [Bushings and Sleeves](content-sources/component-solutions/02-bushings-and-sleeves-source.txt)
3. [Conveyor Chain Components](content-sources/component-solutions/03-conveyor-chain-components-source.txt)
4. [Valve Spools and Cartridges](content-sources/component-solutions/04-valve-spools-and-cartridges-source.txt)
5. [Textile Guide Components](content-sources/component-solutions/05-textile-guide-components-source.txt)
6. [IC Handling Trays](content-sources/component-solutions/06-ic-handling-trays-source.txt)

The source documents are reference material. Do not publish all of their content automatically; select only what supports the customer's decision and can be stated responsibly.

## Current Code State

- Sample route: `/components/precision-plastic-gears`
- Page component: `src/app/components/[slug]/DetailedComponentSolution.tsx`
- Page styles: `src/app/components/ComponentSolutions.module.css`
- Detail content data: `src/data/componentSolutionDetails.ts`
- The incomplete customer-path restructuring was reverted.
- The previously approved dark-panel top-padding correction remains:
  - Desktop: `64px` at the 1920px verification viewport.
  - Mobile: `24px` at the 390px verification viewport.
- No commit, push, or deployment was performed for this handoff.

## Next Lightweight Task Opening

Read this handoff, `AGENTS.md`, the relevant `DESIGN.md` / `PRODUCT.md` sections, and only the Precision Plastic Gears source document first. Produce the required content-planning table without editing the page. After approval, implement one section family at a time and verify at `1920x1080` and `390x844`.
