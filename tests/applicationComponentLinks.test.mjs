import assert from "node:assert/strict";
import test from "node:test";
import { applications } from "../src/data/applications.ts";
import {
  applicationComponentLinks,
  getApplicationComponentLink,
  getApplicationComponentLinks,
} from "../src/data/applicationComponentLinks.ts";
import {
  applicationComponentRelations,
  resolveComponentApplicationReferences,
  validateApplicationComponentRelations,
} from "../src/data/applicationComponentRelations.ts";
import { componentSolutions } from "../src/data/componentSolutions.ts";

test("normalizes the A1 application-component relationship foundation", () => {
  const validation = validateApplicationComponentRelations(
    applications,
    componentSolutions,
  );

  // Review snapshot only: every metric is computed from the Registry.
  // A legitimate relationship change should update this snapshot deliberately.
  assert.equal(validation.applicationPartsTotal, 68);
  assert.equal(validation.stablePartIds, 68);
  assert.deepEqual(validation.duplicatePartIds, []);
  assert.equal(validation.registryRecords, 12);
  assert.equal(validation.partExampleRecords, 6);
  assert.equal(validation.industryContextRecords, 6);
  assert.equal(validation.exactPartCoverage, 6);
  assert.deepEqual(validation.duplicateRelationKeys, []);
  assert.deepEqual(validation.brokenApplicationSlugs, []);
  assert.deepEqual(validation.brokenComponentSlugs, []);
  assert.deepEqual(validation.brokenPartReferences, []);
  assert.deepEqual(validation.invalidRelationShapes, []);
  assert.deepEqual(validation.orphanRelationKeys, []);
  assert.deepEqual(validation.missingLegacyPairKeys, []);
  assert.deepEqual(validation.registryPairsMissingFromLegacy, []);

  assert.equal(
    new Set(
      applicationComponentRelations.map(
        (relation) =>
          `${relation.applicationSlug}::${relation.componentSlug}`,
      ),
    ).size,
    applicationComponentRelations.length,
  );
});

test("resolves the reviewed A2 component-to-application lists", () => {
  const resolved = Object.fromEntries(
    componentSolutions.map((component) => [
      component.slug,
      resolveComponentApplicationReferences(component.slug, applications).map(
        (reference) => ({
          application: reference.applicationTitle,
          href: reference.href,
          parts: reference.partExamples.map((part) => part.label),
        }),
      ),
    ]),
  );

  assert.deepEqual(resolved, {
    "precision-plastic-gears": [
      {
        application: "Motion Components",
        href: "/applications/motion-components",
        parts: ["Precision Gear"],
      },
      {
        application: "Washing Machine Components",
        href: "/applications/washing-machine-components",
        parts: [],
      },
    ],
    "bushings-and-sleeves": [
      {
        application: "Motion Components",
        href: "/applications/motion-components",
        parts: ["Bushing"],
      },
      {
        application: "Automotive",
        href: "/applications/automotive",
        parts: [],
      },
    ],
    "conveyor-chain-components": [
      {
        application: "Conveyor Automation",
        href: "/applications/conveyor-automation",
        parts: ["Mini Conveyor Chain Plate"],
      },
      {
        application: "Electronics",
        href: "/applications/electronics",
        parts: [],
      },
    ],
    "valve-spools-and-cartridges": [
      {
        application: "Water Control",
        href: "/applications/water-control",
        parts: ["Valve Spool Assembly"],
      },
      {
        application: "Washing Machine Components",
        href: "/applications/washing-machine-components",
        parts: [],
      },
    ],
    "textile-guide-components": [
      {
        application: "Textile Machinery",
        href: "/applications/textile-machinery",
        parts: ["Yarn Guide"],
      },
      {
        application: "Motion Components",
        href: "/applications/motion-components",
        parts: [],
      },
    ],
    "ic-handling-trays": [
      {
        application: "Electronics",
        href: "/applications/electronics",
        parts: ["IC Handling Tray"],
      },
      {
        application: "Conveyor Automation",
        href: "/applications/conveyor-automation",
        parts: [],
      },
    ],
  });
});

test("publishes the reviewed Batch D1 through D3 component guides", () => {
  assert.deepEqual(applicationComponentLinks, [
    {
      applicationSlug: "motion-components",
      partLabel: "Precision Gear",
      href: "/components/precision-plastic-gears",
      label: "Precision Plastic Gear Guide",
    },
    {
      applicationSlug: "motion-components",
      partLabel: "Bushing",
      href: "/components/bushings-and-sleeves",
      label: "Bushings & Sleeves Guide",
    },
    {
      applicationSlug: "conveyor-automation",
      partLabel: "Mini Conveyor Chain Plate",
      href: "/components/conveyor-chain-components",
      label: "Conveyor Chain Components Guide",
    },
    {
      applicationSlug: "water-control",
      partLabel: "Valve Spool Assembly",
      href: "/components/valve-spools-and-cartridges",
      label: "Valve Spools & Cartridges Guide",
    },
    {
      applicationSlug: "textile-machinery",
      partLabel: "Yarn Guide",
      href: "/components/textile-guide-components",
      label: "Textile Guide Components Guide",
    },
    {
      applicationSlug: "electronics",
      partLabel: "IC Handling Tray",
      href: "/components/ic-handling-trays",
      label: "IC Handling Trays Guide",
    },
  ]);
  assert.equal(
    new Set(applicationComponentLinks.map((guide) => guide.href)).size,
    applicationComponentLinks.length,
  );
  assert.equal(
    getApplicationComponentLink("motion-components", "Precision Gear")?.href,
    "/components/precision-plastic-gears",
  );
  assert.equal(
    getApplicationComponentLink("motion-components", "Worm Gear"),
    undefined,
  );
  assert.deepEqual(
    getApplicationComponentLinks("motion-components"),
    applicationComponentLinks.slice(0, 2),
  );
  assert.equal(
    getApplicationComponentLink(
      "conveyor-automation",
      "Mini Conveyor Chain Plate",
    )?.href,
    "/components/conveyor-chain-components",
  );
  assert.equal(
    getApplicationComponentLink("water-control", "Valve Spool Assembly")
      ?.href,
    "/components/valve-spools-and-cartridges",
  );
  assert.equal(
    getApplicationComponentLink("textile-machinery", "Yarn Guide")?.href,
    "/components/textile-guide-components",
  );
  assert.equal(
    getApplicationComponentLink("electronics", "IC Handling Tray")?.href,
    "/components/ic-handling-trays",
  );
  assert.deepEqual(getApplicationComponentLinks("automotive"), []);
});
