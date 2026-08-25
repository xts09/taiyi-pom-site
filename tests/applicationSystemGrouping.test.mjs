import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { applications, getApplicationBySlug } from "../src/data/applications.ts";
import {
  applicationSystemSectionPresentations,
  resolveApplicationSystemPartGroups,
} from "../src/data/applicationSystemPresentation.ts";
import {
  applicationSystemIds,
  applicationSystems,
} from "../src/data/partTaxonomy.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");
const washingMachine = getApplicationBySlug("washing-machine-components");
const expectedSectionOnlySystemIds = [
  applicationSystemIds.washingMachineFillAndDistribution,
  applicationSystemIds.washingMachineDrumDrive,
  applicationSystemIds.washingMachineDrainage,
];

assert.ok(washingMachine);

test("derives the Washing Machine pilot groups from canonical System membership", () => {
  const groups = resolveApplicationSystemPartGroups(washingMachine, "en");

  assert.ok(groups);
  assert.deepEqual(
    groups.map((group) => [group.id, group.label, group.partIds]),
    [
      [
        applicationSystemIds.washingMachineFillAndDistribution,
        "Fill & Distribution",
        ["water-guide-pipe", "inlet-valve-connecting-pipe"],
      ],
      [
        applicationSystemIds.washingMachineDrumDrive,
        "Drum Drive",
        [
          "drum-drive-gear",
          "transmission-wheel",
          "reduction-gear-assembly",
        ],
      ],
      [
        applicationSystemIds.washingMachineDrainage,
        "Drainage",
        [
          "drain-pump-housing",
          "drain-control-valve",
          "drain-valve-assembly",
        ],
      ],
    ],
  );

  const groupedPartIds = groups.flatMap((group) => group.partIds);
  assert.equal(groupedPartIds.length, 8);
  assert.equal(new Set(groupedPartIds).size, 8);
  assert.deepEqual(
    [...groupedPartIds].sort(),
    washingMachine.parts.map((part) => part.id).sort(),
  );
});

test("localizes only the three presentation labels across all five languages", () => {
  const expectedLabels = {
    en: ["Fill & Distribution", "Drum Drive", "Drainage"],
    de: ["Wasserzulauf und -verteilung", "Trommelantrieb", "Wasserablauf"],
    fr: ["Remplissage et distribution", "Entraînement du tambour", "Vidange"],
    "pt-BR": [
      "Entrada e distribuição de água",
      "Acionamento do tambor",
      "Drenagem",
    ],
    "zh-CN": ["进水与分配", "滚筒驱动", "排水"],
  };

  for (const [locale, expected] of Object.entries(expectedLabels)) {
    const groups = resolveApplicationSystemPartGroups(washingMachine, locale);
    assert.deepEqual(
      groups?.map((group) => group.label),
      expected,
    );
  }

  const englishLabels = expectedLabels.en;
  for (const locale of ["de", "fr", "pt-BR", "zh-CN"]) {
    assert.equal(
      expectedLabels[locale].some((label) => englishLabels.includes(label)),
      false,
    );
  }
});

test("keeps the pilot declaration-only and fails closed outside full coverage", () => {
  assert.equal(applicationSystemSectionPresentations.length, 1);
  assert.doesNotMatch(
    JSON.stringify(applicationSystemSectionPresentations),
    /partIds|water-guide-pipe|drum-drive-gear|drain-pump-housing/,
  );

  for (const application of applications) {
    if (application.slug === washingMachine.slug) {
      continue;
    }

    assert.equal(
      resolveApplicationSystemPartGroups(application, "en"),
      undefined,
    );
  }

  assert.equal(
    resolveApplicationSystemPartGroups(
      {
        ...washingMachine,
        parts: [
          ...washingMachine.parts,
          {
            id: "unclassified-pilot-part",
            label: "Unclassified Pilot Part",
            description: "Test-only coverage gap.",
          },
        ],
      },
      "en",
    ),
    undefined,
  );
});

test("gates visible grouping to the three section-only System records", () => {
  assert.deepEqual(
    applicationSystems
      .filter((system) => system.publicationStatus === "section-only")
      .map((system) => system.id),
    expectedSectionOnlySystemIds,
  );
  assert.equal(
    applicationSystems.filter(
      (system) => system.publicationStatus === "taxonomy-only",
    ).length,
    14,
  );
  assert.equal(
    applicationSystems.filter(
      (system) => system.publicationStatus === "published",
    ).length,
    0,
  );
  assert.deepEqual(
    applicationSystemSectionPresentations[0].systems.map(
      (system) => system.systemId,
    ),
    expectedSectionOnlySystemIds,
  );

  const selectorSource = readProjectFile(
    "src/data/applicationSystemPresentation.ts",
  );
  assert.match(
    selectorSource,
    /canonicalSystem\.publicationStatus\s*!==\s*"section-only"/,
  );
});

test("renders System headings as hierarchy, not links or pseudo pages", () => {
  const pageSource = readProjectFile(
    "src/components/localized/LocalizedApplicationDetailPage.tsx",
  );

  assert.match(pageSource, /resolveApplicationInlinePartGroups/);
  assert.match(pageSource, /application-system-group-title/);
  assert.match(pageSource, /headingLevel=\{4\}/);
  assert.doesNotMatch(pageSource, /View System|System Page|systemHref/);
  assert.doesNotMatch(
    pageSource,
    /if\s*\([^)]*washing-machine-components|application\.slug\s*===\s*["']washing-machine-components/,
  );
});
