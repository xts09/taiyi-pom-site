import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { getComponentSolutionDetailBySlug } from "../src/data/componentSolutionDetails.ts";
import { translateExpandedContent } from "../src/i18n/expandedLocaleContent.ts";
import { chineseBushingsAndSleevesDetail } from "../src/i18n/messages/zh-CN-component-details-a.ts";
import {
  chineseConveyorChainComponentsDetail,
  chineseValveSpoolsAndCartridgesDetail,
} from "../src/i18n/messages/zh-CN-component-details-b.ts";
import {
  chineseIcHandlingTraysDetail,
  chineseTextileGuideComponentsDetail,
} from "../src/i18n/messages/zh-CN-component-details-c.ts";
import { chinesePrecisionPlasticGearsDetail } from "../src/i18n/messages/zh-CN-components.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");

test("gates independent Component density capabilities to the exact reviewed family", () => {
  const pageSource = readProjectFile(
    "src/app/(en)/components/[slug]/DetailedComponentSolution.tsx",
  );
  const styleSource = readProjectFile(
    "src/app/(en)/components/ComponentSolutions.module.css",
  );

  const registryBody = pageSource.match(
    /const componentDensityCapabilities = \{([\s\S]*?)\n\} as const satisfies/,
  );
  assert.ok(registryBody);
  assert.deepEqual(
    [...registryBody[1].matchAll(/^  "([^"]+)": \{$/gm)].map(
      (match) => match[1],
    ),
    [
      "valve-spools-and-cartridges",
      "precision-plastic-gears",
      "bushings-and-sleeves",
      "conveyor-chain-components",
      "textile-guide-components",
      "ic-handling-trays",
    ],
  );

  const icCapability = registryBody[1].match(
    /"ic-handling-trays": \{([\s\S]*?)\n  \},/,
  );
  assert.ok(icCapability);
  assert.doesNotMatch(icCapability[1], /validationBoundaryDirectionId/);
  assert.doesNotMatch(icCapability[1], /inlineProcessOutcome/);
  assert.match(pageSource, /compactApplicationRelations\?: boolean/);
  assert.match(pageSource, /sharedDecisionHeader\?: boolean/);
  assert.match(pageSource, /validationBoundaryDirectionId\?: string/);
  assert.match(pageSource, /inlineProcessOutcome\?: boolean/);
  assert.match(pageSource, /decisionMatrixHeader/);
  assert.match(pageSource, /styles\.pilotDecisionLabel/);
  assert.match(pageSource, /reference\.partExamples[\s\S]*?\.join\(", "\)/);
  assert.match(pageSource, /densityCapability\?\.inlineProcessOutcome \? null : \(\s*<section[\s\S]*?styles\.processSection/);
  assert.match(pageSource, /densityCapability\?\.inlineProcessOutcome \? \(\s*<div className=\{styles\.processOutcome\}/);
  assert.match(pageSource, /detail\.copy\.processBoundary/);
  assert.match(styleSource, /@media \(min-width: 64\.001rem\)[\s\S]*?\.pilotDecisionLabel/);
  assert.match(styleSource, /\.processOutcome \.processBoundary/);
});

test("preserves Valve engineering data while consolidating visible framing", () => {
  const englishValve = getComponentSolutionDetailBySlug(
    "valve-spools-and-cartridges",
  );

  assert.ok(englishValve);
  assert.equal(englishValve.decisionRows.length, 4);
  assert.equal(englishValve.materialDirections.length, 4);
  assert.equal(englishValve.inquiryGroups.length, 6);
  assert.equal(englishValve.processSteps.length, 3);
  assert.equal(englishValve.technicalDetails.length, 4);
  assert.equal(englishValve.related.length, 3);
  assert.match(englishValve.materialDirections[0].caution, /pressure/);
  assert.match(englishValve.materialNote, /High-pressure hydraulic spools/);
  assert.equal(
    englishValve.finalCta.title,
    "Shortlist valve material candidates.",
  );
  assert.equal(
    englishValve.finalCta.body,
    "Use the project brief above to compare material directions, available grade data, and a valve-level validation plan.",
  );

  assert.equal(chineseValveSpoolsAndCartridgesDetail.decisionRows.length, 4);
  assert.equal(chineseValveSpoolsAndCartridgesDetail.inquiryGroups.length, 6);
  assert.equal(chineseValveSpoolsAndCartridgesDetail.processSteps.length, 3);
  assert.equal(chineseValveSpoolsAndCartridgesDetail.technicalDetails.length, 4);
  assert.equal(
    chineseValveSpoolsAndCartridgesDetail.finalCta.title,
    "缩小阀门材料候选范围",
  );
});

test("keeps the Valve pilot structure aligned across expanded locales", () => {
  for (const locale of ["fr", "pt-br"]) {
    const detail = translateExpandedContent(
      chineseValveSpoolsAndCartridgesDetail,
      locale,
    );

    assert.equal(detail.decisionRows.length, 4);
    assert.equal(detail.materialDirections.length, 4);
    assert.equal(detail.inquiryGroups.length, 6);
    assert.equal(detail.processSteps.length, 3);
    assert.equal(detail.technicalDetails.length, 4);
    assert.doesNotMatch(JSON.stringify(detail), /[\u3400-\u9fff]/);
  }
});

test("preserves Gear engineering data while classifying its distinct boundaries", () => {
  const englishGear = getComponentSolutionDetailBySlug(
    "precision-plastic-gears",
  );

  assert.ok(englishGear);
  assert.equal(englishGear.decisionRows.length, 4);
  assert.equal(englishGear.materialDirections.length, 3);
  assert.equal(englishGear.inquiryGroups.length, 6);
  assert.equal(englishGear.processSteps.length, 3);
  assert.equal(englishGear.technicalDetails.length, 4);
  assert.equal(englishGear.related.length, 3);
  assert.match(englishGear.materialDirections[0].caution, /actual torque/);
  assert.match(englishGear.materialDirections[1].caution, /mating gear and lubricant/);
  assert.match(englishGear.materialDirections[2].caution, /Fiber orientation/);
  assert.equal(
    englishGear.copy.processBoundary,
    "Production approval still depends on representative validation in the complete transmission.",
  );
  assert.equal(
    englishGear.finalCta.body,
    "Use the project brief above to compare material directions, available grade data, and a molded-gear validation plan.",
  );

  assert.equal(chinesePrecisionPlasticGearsDetail.decisionRows.length, 4);
  assert.equal(chinesePrecisionPlasticGearsDetail.materialDirections.length, 3);
  assert.equal(chinesePrecisionPlasticGearsDetail.inquiryGroups.length, 6);
  assert.equal(chinesePrecisionPlasticGearsDetail.processSteps.length, 3);
  assert.equal(chinesePrecisionPlasticGearsDetail.technicalDetails.length, 4);
  assert.equal(
    chinesePrecisionPlasticGearsDetail.copy.processBoundary,
    "生产批准仍取决于完整传动系统中的代表性验证。",
  );
});

test("keeps the Gear pilot structure and new boundary aligned across locales", () => {
  for (const locale of ["fr", "pt-br"]) {
    const detail = translateExpandedContent(
      chinesePrecisionPlasticGearsDetail,
      locale,
    );

    assert.equal(detail.decisionRows.length, 4);
    assert.equal(detail.materialDirections.length, 3);
    assert.equal(detail.inquiryGroups.length, 6);
    assert.equal(detail.processSteps.length, 3);
    assert.equal(detail.technicalDetails.length, 4);
    assert.ok(detail.copy.processBoundary);
    assert.doesNotMatch(JSON.stringify(detail), /[\u3400-\u9fff]/);
  }
});

test("preserves the four rollout Components while applying reviewed boundaries", () => {
  const cases = [
    {
      slug: "bushings-and-sleeves",
      materials: 3,
      boundaryId: "bushings-and-sleeves-balanced-unfilled-pom",
      processBoundary: "complete sliding assembly",
    },
    {
      slug: "conveyor-chain-components",
      materials: 4,
      boundaryId: "conveyor-chain-components-balanced-unfilled-pom",
      processBoundary: "complete conveyor",
    },
    {
      slug: "textile-guide-components",
      materials: 4,
      boundaryId: "textile-guide-components-balanced-unfilled-pom",
      processBoundary: "actual yarn and machine",
    },
    {
      slug: "ic-handling-trays",
      materials: 4,
      boundaryId: null,
      processBoundary: null,
    },
  ];

  for (const expected of cases) {
    const detail = getComponentSolutionDetailBySlug(expected.slug);

    assert.ok(detail);
    assert.equal(detail.decisionRows.length, 4);
    assert.equal(detail.materialDirections.length, expected.materials);
    assert.equal(detail.inquiryGroups.length, 6);
    assert.equal(detail.processSteps.length, 3);
    assert.equal(detail.technicalDetails.length, 4);
    assert.equal(detail.related.length, 3);

    if (expected.boundaryId) {
      assert.ok(
        detail.materialDirections.some(
          (direction) => direction.id === expected.boundaryId,
        ),
      );
      assert.match(detail.copy.processBoundary, new RegExp(expected.processBoundary));
    } else {
      assert.equal(detail.copy.processBoundary, undefined);
    }
  }

  const icTrays = getComponentSolutionDetailBySlug("ic-handling-trays");
  assert.ok(icTrays);
  assert.match(icTrays.materialDirections[0].caution, /Resistance/);
  assert.match(icTrays.materialDirections[1].caution, /Flow orientation/);
  assert.match(icTrays.materialDirections[2].caution, /not a default ESD-tray/);
  assert.match(icTrays.materialDirections[3].caution, /Higher thermal capability/);
});

test("keeps the four rollout Components complete across expanded locales", () => {
  const chineseDetails = [
    chineseBushingsAndSleevesDetail,
    chineseConveyorChainComponentsDetail,
    chineseTextileGuideComponentsDetail,
    chineseIcHandlingTraysDetail,
  ];

  for (const source of chineseDetails) {
    for (const locale of ["de", "fr", "pt-br"]) {
      const detail = translateExpandedContent(source, locale);

      assert.equal(detail.decisionRows.length, 4);
      assert.equal(detail.inquiryGroups.length, 6);
      assert.equal(detail.processSteps.length, 3);
      assert.equal(detail.technicalDetails.length, 4);
      assert.doesNotMatch(JSON.stringify(detail), /[\u3400-\u9fff]/);
    }
  }
});
