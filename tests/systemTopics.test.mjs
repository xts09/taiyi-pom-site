import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { applicationComponentRelations } from "../src/data/applicationComponentRelations.ts";
import {
  applicationSystemSectionPresentations,
  resolveApplicationSystemPartGroups,
} from "../src/data/applicationSystemPresentation.ts";
import { getApplicationBySlug } from "../src/data/applications.ts";
import {
  applicationIds,
  applicationSystemIds,
  applicationSystems,
  componentCandidates,
  partClassifications,
  productionCompatibilityPartClassifications,
} from "../src/data/partTaxonomy.ts";
import {
  systemTopics,
  validateSystemTopics,
} from "../src/data/systemTopics.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");
const valveTopic = systemTopics[0];
const valveSystemId = applicationSystemIds.waterControlValveFlowControl;

test("keeps one editorial Valve Flow Control draft behind an explicit release gate", () => {
  const validation = validateSystemTopics();

  assert.equal(systemTopics.length, 1);
  assert.equal(valveTopic.systemId, valveSystemId);
  assert.equal(valveTopic.applicationId, applicationIds.waterControl);
  assert.equal(valveTopic.editorialStatus, "draft");
  assert.equal(validation.topicCount, 1);
  assert.equal(validation.draftTopics, 1);
  assert.equal(validation.reviewedTopics, 0);
  assert.deepEqual(validation.duplicateTopicSystemIds, []);
  assert.deepEqual(validation.brokenTopicSystemIds, []);
  assert.deepEqual(validation.crossApplicationTopicKeys, []);
  assert.deepEqual(validation.duplicateRepresentativePartKeys, []);
  assert.deepEqual(validation.duplicateRepresentativeContextKeys, []);
  assert.deepEqual(validation.missingRepresentativeContextKeys, []);
  assert.deepEqual(validation.nonRepresentativeContextKeys, []);
  assert.deepEqual(validation.unknownRepresentativePartKeys, []);
  assert.deepEqual(validation.nonCanonicalRepresentativePartKeys, []);
  assert.deepEqual(validation.emptyEditorialContentKeys, []);
  assert.deepEqual(validation.brokenMaterialDirectionKeys, []);
});

test("adds complete System-level boundary and requirement-allocation content", () => {
  assert.equal(valveTopic.systemBoundaryRoles.length, 4);
  assert.equal(valveTopic.representativePartContexts.length, 3);
  assert.deepEqual(
    valveTopic.representativePartContexts.map((context) => context.partId),
    valveTopic.representativePartIds,
  );
  assert.equal(valveTopic.requirementAllocations.length, 4);
  assert.equal(
    valveTopic.requirementAllocations.every(
      (allocation) =>
        allocation.affectedRoles.length > 0 &&
        allocation.validationFocus.length > 0,
    ),
    true,
  );
});

test("accepts a strict representative subset without requiring full enumeration", () => {
  const canonicalMemberIds = partClassifications
    .filter((classification) => classification.systemId === valveSystemId)
    .map((classification) => classification.partId);

  assert.equal(canonicalMemberIds.length, 6);
  assert.deepEqual(valveTopic.representativePartIds, [
    "valve-spool-assembly",
    "thermostatic-valve-body",
    "valve-housing-component",
  ]);
  assert.equal(valveTopic.representativePartIds.length, 3);
  assert.ok(
    valveTopic.representativePartIds.every((partId) =>
      canonicalMemberIds.includes(partId),
    ),
  );
  assert.ok(valveTopic.representativePartIds.length < canonicalMemberIds.length);

  const fullEnumeration = {
    ...valveTopic,
    representativePartIds: canonicalMemberIds,
  };
  assert.deepEqual(
    validateSystemTopics([fullEnumeration]).nonCanonicalRepresentativePartKeys,
    [],
  );
});

test("fails closed for duplicate, unknown, or non-member representative Parts", () => {
  const withGuideWheel = {
    ...valveTopic,
    representativePartIds: [...valveTopic.representativePartIds, "guide-wheel"],
  };
  const withUnknownPart = {
    ...valveTopic,
    representativePartIds: ["not-a-known-part"],
  };
  const withDuplicate = {
    ...valveTopic,
    representativePartIds: [
      valveTopic.representativePartIds[0],
      valveTopic.representativePartIds[0],
    ],
  };

  assert.deepEqual(
    validateSystemTopics([withGuideWheel]).nonCanonicalRepresentativePartKeys,
    [`${valveSystemId}::guide-wheel`],
  );
  assert.deepEqual(
    validateSystemTopics([withUnknownPart]).unknownRepresentativePartKeys,
    [`${valveSystemId}::not-a-known-part`],
  );
  assert.deepEqual(
    validateSystemTopics([withUnknownPart]).nonCanonicalRepresentativePartKeys,
    [`${valveSystemId}::not-a-known-part`],
  );
  assert.deepEqual(
    validateSystemTopics([withDuplicate]).duplicateRepresentativePartKeys,
    [`${valveSystemId}::${valveTopic.representativePartIds[0]}`],
  );
});

test("rejects a missing canonical System or the wrong owning Application", () => {
  const missingSystem = {
    ...valveTopic,
    systemId: "water-control-not-a-canonical-system",
  };
  const wrongApplication = {
    ...valveTopic,
    applicationId: applicationIds.automotive,
  };

  assert.deepEqual(validateSystemTopics([missingSystem]).brokenTopicSystemIds, [
    "water-control-not-a-canonical-system",
  ]);
  assert.deepEqual(
    validateSystemTopics([wrongApplication]).crossApplicationTopicKeys,
    [`${valveSystemId}::${applicationIds.automotive}`],
  );
  assert.deepEqual(
    validateSystemTopics([wrongApplication]).nonCanonicalRepresentativePartKeys,
    valveTopic.representativePartIds.map(
      (partId) => `${valveSystemId}::${partId}`,
    ),
  );
});

test("keeps editorial validation independent from Component ownership", () => {
  const componentChangedClassifications = partClassifications.map(
    (classification) =>
      classification.partId === "valve-spool-assembly"
        ? {
            ...classification,
            classificationStatus: "review",
            primaryComponentId: undefined,
          }
        : classification,
  );
  const baseline = validateSystemTopics();
  const afterComponentChange = validateSystemTopics(systemTopics, {
    classifications: componentChangedClassifications,
  });

  assert.deepEqual(
    afterComponentChange.nonCanonicalRepresentativePartKeys,
    baseline.nonCanonicalRepresentativePartKeys,
  );
  assert.deepEqual(
    afterComponentChange.unknownRepresentativePartKeys,
    baseline.unknownRepresentativePartKeys,
  );

  const fuelPumpAssembly = partClassifications.find(
    (classification) => classification.partId === "fuel-pump-assembly",
  );
  const guideWheel = partClassifications.find(
    (classification) => classification.partId === "guide-wheel",
  );
  assert.equal(fuelPumpAssembly?.systemId !== undefined, true);
  assert.equal(fuelPumpAssembly?.classificationStatus, "review");
  assert.equal(guideWheel?.systemId, undefined);
  assert.equal(guideWheel?.classificationStatus, "mapped");
});

test("does not reuse ApplicationSystem publicationStatus as the Topic release gate", () => {
  const topicSource = readProjectFile("src/data/systemTopics.ts");
  const releaseSource = readProjectFile("src/data/systemTopicReleases.ts");
  const contractSource = readProjectFile("docs/system-topic-contract.md");

  assert.doesNotMatch(topicSource, /\.publicationStatus/);
  assert.doesNotMatch(topicSource, /editorialStatus:\s*"published"/);
  assert.match(releaseSource, /export const systemTopicReleases/);
  assert.match(releaseSource, /export const applicationSystemTopicPromotions/);
  assert.match(contractSource, /`systemTopicReleases` explicitly owns route/);
  assert.match(contractSource, /promotion is a fourth, independent capability/);
  assert.match(contractSource, /is not read as a System Topic\s+publishing switch/);

  const publishedCanonicalSystemFixture = applicationSystems.map((system) =>
    system.id === valveSystemId
      ? { ...system, publicationStatus: "published" }
      : system,
  );
  assert.deepEqual(
    validateSystemTopics(systemTopics, {
      systems: publishedCanonicalSystemFixture,
    }),
    validateSystemTopics(),
  );
});

test("keeps Washing Machine and Component production consumers frozen", () => {
  const washingMachine = getApplicationBySlug("washing-machine-components");
  assert.ok(washingMachine);

  const groups = resolveApplicationSystemPartGroups(washingMachine, "en");
  assert.deepEqual(
    groups?.map((group) => group.partIds.length),
    [2, 3, 3],
  );
  assert.equal(groups?.flatMap((group) => group.partIds).length, 8);
  assert.equal(applicationSystemSectionPresentations.length, 1);

  assert.equal(
    partClassifications.filter(
      (classification) => classification.classificationStatus === "mapped",
    ).length,
    36,
  );
  assert.equal(productionCompatibilityPartClassifications.length, 29);
  assert.equal(applicationComponentRelations.length, 15);
  assert.equal(componentCandidates.length, 8);
});

test("keeps preview release absent from production navigation and sitemap", () => {
  const publicSurfaceSources = [
    "src/app/sitemap.ts",
    "src/components/Header.tsx",
    "src/components/Footer.tsx",
    "src/data/applicationSystemPresentation.ts",
  ].map(readProjectFile);

  for (const source of publicSurfaceSources) {
    assert.doesNotMatch(source, /systemTopicReleases|Valve Flow Control/);
  }

  const applicationPageSource = readProjectFile(
    "src/components/localized/LocalizedApplicationDetailPage.tsx",
  );
  assert.match(
    applicationPageSource,
    /resolveApplicationSystemTopicReferences/,
  );

  const serializedTopic = JSON.stringify(systemTopics);
  assert.doesNotMatch(
    serializedTopic,
    /"(?:href|path|slug|canonical|metadata|sitemap|structuredData|jsonLd|breadcrumb|navigation)"/,
  );
});
