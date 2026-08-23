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
  resolveApplicationComponentOwnerReferences,
  resolveComponentApplicationReferences,
  validateApplicationComponentRelations,
} from "../src/data/applicationComponentRelations.ts";
import { componentSolutions } from "../src/data/componentSolutions.ts";

test("validates the reviewed A3 application-component relationships", () => {
  const validation = validateApplicationComponentRelations(
    applications,
    componentSolutions,
  );

  // Review snapshot only: every metric is computed from the Registry.
  // A legitimate relationship change should update this snapshot deliberately.
  assert.equal(validation.applicationPartsTotal, 68);
  assert.equal(validation.stablePartIds, 68);
  assert.deepEqual(validation.duplicatePartIds, []);
  assert.equal(validation.registryRecords, 15);
  assert.equal(validation.partExampleRecords, 11);
  assert.equal(validation.industryContextRecords, 4);
  assert.equal(validation.exactPartCoverage, 29);
  assert.equal(validation.uniqueExactOwnerPairs, 11);
  assert.equal(validation.combinedSemanticPairs, 15);
  assert.deepEqual(validation.duplicateRelationKeys, []);
  assert.deepEqual(validation.brokenApplicationSlugs, []);
  assert.deepEqual(validation.brokenComponentSlugs, []);
  assert.deepEqual(validation.brokenPartReferences, []);
  assert.deepEqual(validation.invalidRelationShapes, []);
  assert.deepEqual(validation.orphanRelationKeys, []);
  assert.deepEqual(validation.missingLegacyPairKeys, []);
  assert.deepEqual(validation.registryPairsMissingFromLegacy, [
    "automotive::precision-plastic-gears",
    "electronics::precision-plastic-gears",
    "outdoor-equipment::precision-plastic-gears",
  ]);

  assert.equal(
    new Set(
      applicationComponentRelations.map(
        (relation) => `${relation.applicationSlug}::${relation.componentSlug}`,
      ),
    ).size,
    applicationComponentRelations.length,
  );
});

test("resolves the reviewed A3 component-to-application lists", () => {
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
        parts: ["Precision Gear", "Worm Gear"],
      },
      {
        application: "Washing Machine Components",
        href: "/applications/washing-machine-components",
        parts: ["Drum Drive Gear", "Reduction Gear Assembly"],
      },
      {
        application: "Automotive",
        href: "/applications/automotive",
        parts: ["Wiper Motor Gear"],
      },
      {
        application: "Electronics",
        href: "/applications/electronics",
        parts: ["Copier Drive Gear"],
      },
      {
        application: "Outdoor Equipment",
        href: "/applications/outdoor-equipment",
        parts: ["Lawn Mower Gear"],
      },
    ],
    "bushings-and-sleeves": [
      {
        application: "Motion Components",
        href: "/applications/motion-components",
        parts: ["Bushing", "Sleeve", "Guide Ring", "Sliding Block"],
      },
      {
        application: "Automotive",
        href: "/applications/automotive",
        parts: ["Seat Guide Ring"],
      },
    ],
    "conveyor-chain-components": [
      {
        application: "Conveyor Automation",
        href: "/applications/conveyor-automation",
        parts: [
          "Mini Conveyor Chain Plate",
          "High-Load Conveyor Chain",
          "Conveyor Segment",
          "Antistatic Anti-Slip Conveyor Chain Plate",
          "Conveyor Roller",
          "Conveyor Chain Plate Bracket",
          "Conductive Conveyor Chain Plate",
        ],
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
        parts: [
          "Valve Spool Assembly",
          "Valve Cartridge",
          "Valve Internal Parts",
          "Guide Wheel",
        ],
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
        parts: [
          "Yarn Guide",
          "Heddle Lifter",
          "Air-Spinning Guide",
          "Textile Guide Wheel",
          "Textile Spindle Support",
        ],
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

test("aggregates the reviewed A3 application-to-component owner lists", () => {
  const componentTitleBySlug = new Map(
    componentSolutions.map((component) => [component.slug, component.title]),
  );
  const resolved = Object.fromEntries(
    applications.map((application) => [
      application.slug,
      resolveApplicationComponentOwnerReferences(application).map(
        (reference) => ({
          owner: componentTitleBySlug.get(reference.componentSlug),
          parts: reference.partExamples.map((part) => part.label),
        }),
      ),
    ]),
  );

  assert.deepEqual(resolved, {
    automotive: [
      {
        owner: "Precision Plastic Gears",
        parts: ["Wiper Motor Gear"],
      },
      {
        owner: "Bushings and Sleeves",
        parts: ["Seat Guide Ring"],
      },
    ],
    electronics: [
      {
        owner: "Precision Plastic Gears",
        parts: ["Copier Drive Gear"],
      },
      {
        owner: "IC Handling Trays",
        parts: ["IC Handling Tray"],
      },
    ],
    "conveyor-automation": [
      {
        owner: "Conveyor Chain Components",
        parts: [
          "Mini Conveyor Chain Plate",
          "High-Load Conveyor Chain",
          "Conveyor Segment",
          "Antistatic Anti-Slip Conveyor Chain Plate",
          "Conveyor Roller",
          "Conveyor Chain Plate Bracket",
          "Conductive Conveyor Chain Plate",
        ],
      },
    ],
    "motion-components": [
      {
        owner: "Precision Plastic Gears",
        parts: ["Precision Gear", "Worm Gear"],
      },
      {
        owner: "Bushings and Sleeves",
        parts: ["Bushing", "Sleeve", "Guide Ring", "Sliding Block"],
      },
    ],
    "water-control": [
      {
        owner: "Valve Spools and Cartridges",
        parts: [
          "Valve Spool Assembly",
          "Valve Cartridge",
          "Valve Internal Parts",
          "Guide Wheel",
        ],
      },
    ],
    "washing-machine-components": [
      {
        owner: "Precision Plastic Gears",
        parts: ["Drum Drive Gear", "Reduction Gear Assembly"],
      },
    ],
    "outdoor-equipment": [
      {
        owner: "Precision Plastic Gears",
        parts: ["Lawn Mower Gear"],
      },
    ],
    "textile-machinery": [
      {
        owner: "Textile Guide Components",
        parts: [
          "Yarn Guide",
          "Heddle Lifter",
          "Air-Spinning Guide",
          "Textile Guide Wheel",
          "Textile Spindle Support",
        ],
      },
    ],
  });
});

test("keeps the legacy part lookup derived from all exact A3 mappings", () => {
  assert.equal(applicationComponentLinks.length, 29);
  assert.equal(
    new Set(
      applicationComponentLinks.map(
        (guide) => `${guide.applicationSlug}::${guide.partLabel}`,
      ),
    ).size,
    applicationComponentLinks.length,
  );
  assert.equal(
    getApplicationComponentLink("motion-components", "Precision Gear")?.href,
    "/components/precision-plastic-gears",
  );
  assert.equal(
    getApplicationComponentLink("motion-components", "Worm Gear")?.href,
    "/components/precision-plastic-gears",
  );
  assert.equal(getApplicationComponentLinks("motion-components").length, 6);
  assert.equal(
    new Set(
      getApplicationComponentLinks("motion-components").map(
        (guide) => guide.href,
      ),
    ).size,
    2,
  );
  assert.equal(
    getApplicationComponentLink(
      "conveyor-automation",
      "Mini Conveyor Chain Plate",
    )?.href,
    "/components/conveyor-chain-components",
  );
  assert.equal(
    getApplicationComponentLink("water-control", "Valve Spool Assembly")?.href,
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
  assert.deepEqual(
    getApplicationComponentLinks("automotive").map((guide) => guide.partLabel),
    ["Wiper Motor Gear", "Seat Guide Ring"],
  );
});
