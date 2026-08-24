import assert from "node:assert/strict";
import test from "node:test";
import { applications } from "../src/data/applications.ts";
import {
  applicationComponentRelations,
  deriveApplicationComponentRelations,
} from "../src/data/applicationComponentRelations.ts";
import { componentSolutions } from "../src/data/componentSolutions.ts";
import {
  applicationComponentContextRelations,
  applicationIdentityRegistry,
  applicationIds,
  applicationSystemIds,
  applicationSystems,
  componentCandidateIds,
  componentCandidates,
  componentFamilyIdentityRegistry,
  componentIds,
  engineeringContexts,
  partClassifications,
  productionCompatibilityPartClassifications,
  validatePartTaxonomy,
} from "../src/data/partTaxonomy.ts";

test("enforces the D1c closed-state coverage contract", () => {
  const validation = validatePartTaxonomy(applications, componentSolutions);

  assert.equal(validation.knownParts, 68);
  assert.equal(validation.classifiedParts, 68);
  assert.equal(validation.intentionallyUnclassifiedParts, 0);
  assert.equal(validation.classificationCoverageTotal, 68);
  assert.equal(validation.mappedParts, 36);
  assert.equal(validation.newOwnerParts, 24);
  assert.equal(validation.reviewParts, 8);
  assert.deepEqual(validation.duplicateClassificationKeys, []);
  assert.deepEqual(validation.unknownClassificationKeys, []);
  assert.deepEqual(validation.intentionallyUnclassifiedPartKeys, []);
  assert.equal(partClassifications.length, 68);
  assert.equal(
    partClassifications
      .filter(
        (classification) => classification.classificationStatus === "mapped",
      )
      .every(
        (classification) =>
          classification.primaryComponentId !== undefined &&
          classification.proposedComponentId === undefined,
      ),
    true,
  );
  assert.equal(
    partClassifications
      .filter(
        (classification) =>
          classification.classificationStatus === "new-owner",
      )
      .every(
        (classification) =>
          classification.primaryComponentId === undefined &&
          classification.proposedComponentId !== undefined,
      ),
    true,
  );
  assert.equal(
    partClassifications
      .filter(
        (classification) => classification.classificationStatus === "review",
      )
      .every(
        (classification) =>
          classification.primaryComponentId === undefined &&
          classification.proposedComponentId === undefined,
      ),
    true,
  );
});

test("preserves the reviewer-approved D1c ownership decisions", () => {
  const approvedReviewParts = partClassifications
    .filter(
      (classification) => classification.classificationStatus === "review",
    )
    .map((classification) => classification.partId)
    .sort();
  const newMappedOwnership = partClassifications
    .filter(
      (classification) =>
        classification.classificationStatus === "mapped" &&
        !productionCompatibilityPartClassifications.includes(classification),
    )
    .map((classification) => [
      classification.partId,
      classification.primaryComponentId,
    ])
    .sort(([left], [right]) => left.localeCompare(right));
  const newOwnerCounts = Object.fromEntries(
    Object.values(componentCandidateIds)
      .map((candidateId) => [
        candidateId,
        partClassifications.filter(
          (classification) =>
            classification.classificationStatus === "new-owner" &&
            classification.proposedComponentId === candidateId,
        ).length,
      ])
      .sort(([left], [right]) => left.localeCompare(right)),
  );

  assert.deepEqual(approvedReviewParts, [
    "antistatic-precision-component",
    "fuel-filter-element",
    "fuel-pump-assembly",
    "interior-rearview-mirror-base",
    "recoil-starter-assembly",
    "toner-cartridge-drive-components",
    "trimmer-drive-head",
    "window-regulator",
  ]);
  assert.deepEqual(newMappedOwnership, [
    ["conveyor-panel", "conveyor-chain-components"],
    ["ev-brake-component", "precision-plastic-gears"],
    ["gear-shift-seat", "bushings-and-sleeves"],
    ["heddle-wire-bundle", "textile-guide-components"],
    ["robotic-joint-gearbox", "precision-plastic-gears"],
    ["textile-sliding-block", "bushings-and-sleeves"],
    ["valve-component", "valve-spools-and-cartridges"],
  ]);
  assert.deepEqual(newOwnerCounts, {
    "clips-fasteners-retention-components": 3,
    "closure-latching-components": 2,
    "connector-interface-components": 3,
    "fluid-routing-housing-components": 4,
    "profiled-actuation-components": 1,
    "rotating-drive-support-components": 4,
    "rotating-fluid-components": 3,
    "valve-bodies-actuation-components": 4,
  });
});

test("keeps stable identity registries aligned with current source entities", () => {
  const validation = validatePartTaxonomy(applications, componentSolutions);

  assert.equal(applicationIdentityRegistry.length, applications.length);
  assert.equal(componentFamilyIdentityRegistry.length, componentSolutions.length);
  assert.deepEqual(validation.invalidApplicationIdentitySlugs, []);
  assert.deepEqual(validation.missingApplicationIdentitySlugs, []);
  assert.deepEqual(validation.invalidComponentIdentitySlugs, []);
  assert.deepEqual(validation.missingComponentIdentitySlugs, []);
  assert.deepEqual(validation.brokenClassificationApplicationIds, []);
  assert.deepEqual(validation.brokenClassificationComponentIds, []);
});

test("keeps approved D1c systems and candidates canonical but non-publishing", () => {
  const validation = validatePartTaxonomy(applications, componentSolutions);

  assert.equal(applicationSystems.length, 17);
  assert.equal(componentCandidates.length, 8);
  assert.deepEqual(
    applicationSystems.map((system) => system.id),
    Object.values(applicationSystemIds),
  );
  assert.deepEqual(
    componentCandidates.map((candidate) => candidate.id),
    Object.values(componentCandidateIds),
  );
  assert.equal(
    applicationSystems.every(
      (system) => system.publicationStatus === "taxonomy-only",
    ),
    true,
  );
  assert.equal(
    componentCandidates.every((candidate) => candidate.status === "approved"),
    true,
  );
  assert.equal(
    applicationSystems.some(
      (system) =>
        system.id === "textile-machinery-yarn-and-motion-guidance" ||
        system.id === "textile-machinery-yarn-package-support",
    ),
    false,
  );
  assert.equal(
    partClassifications
      .filter((classification) =>
        [
          "heddle-wire-bundle",
          "bobbin-holder",
          "textile-sliding-block",
        ].includes(classification.partId),
      )
      .every((classification) => classification.systemId === undefined),
    true,
  );
  assert.deepEqual(validation.brokenClassificationSystemIds, []);
  assert.deepEqual(validation.crossApplicationSystemKeys, []);
  assert.deepEqual(validation.nonTaxonomyOnlySystemIds, []);
  assert.deepEqual(validation.duplicateApplicationSystemIds, []);
  assert.deepEqual(validation.duplicateApplicationSystemSlugKeys, []);
  assert.deepEqual(validation.brokenSystemApplicationIds, []);
  assert.deepEqual(validation.unreferencedApplicationSystemIds, []);
  assert.deepEqual(validation.brokenProposedComponentIds, []);
  assert.deepEqual(validation.duplicateComponentCandidateIds, []);
  assert.deepEqual(validation.nonApprovedComponentCandidateIds, []);
  assert.deepEqual(validation.unreferencedComponentCandidateIds, []);
});

test("migrates entity kinds without introducing child relationships", () => {
  const assemblies = partClassifications
    .filter((classification) => classification.entityKind === "assembly")
    .map((classification) => classification.partId)
    .sort();

  assert.deepEqual(assemblies, [
    "drain-control-valve",
    "drain-valve-assembly",
    "fuel-cap-assembly",
    "fuel-filter-element",
    "fuel-pump-assembly",
    "heddle-wire-bundle",
    "panel-mount-signal-connector",
    "recoil-starter-assembly",
    "reduction-gear-assembly",
    "robotic-joint-gearbox",
    "toner-cartridge-drive-components",
    "trimmer-drive-head",
    "valve-spool-assembly",
    "window-regulator",
  ]);
  assert.equal(
    partClassifications.every(
      (classification) =>
        classification.entityKind === "part" ||
        classification.entityKind === "assembly",
    ),
    true,
  );
  assert.equal(
    partClassifications.some(
      (classification) => "parentAssemblyId" in classification,
    ),
    false,
  );
});

test("keeps D1c engineering contexts controlled and evidence-scoped", () => {
  const validation = validatePartTaxonomy(applications, componentSolutions);

  assert.deepEqual(
    engineeringContexts.map((context) => context.id),
    [
      "sliding",
      "rotating",
      "sealing",
      "load-bearing",
      "fluid-contact",
      "static-control",
      "precision-guiding",
      "impact-loaded",
      "snap-fit",
    ],
  );
  assert.deepEqual(validation.brokenEngineeringContextIds, []);
  assert.deepEqual(validation.duplicateEngineeringContextPartKeys, []);
  assert.equal(
    partClassifications.filter(
      (classification) => classification.relatedContextIds !== undefined,
    ).length,
    39,
  );
  assert.equal(
    partClassifications.filter((classification) =>
      classification.relatedContextIds?.includes("precision-guiding"),
    ).length,
    13,
  );
});

test("keeps the D1 production compatibility view on the 29-record baseline", () => {
  assert.equal(productionCompatibilityPartClassifications.length, 29);
  assert.equal(
    productionCompatibilityPartClassifications.every((classification) =>
      partClassifications.includes(classification),
    ),
    true,
  );

  const frozenRelations = deriveApplicationComponentRelations(
    productionCompatibilityPartClassifications,
    applicationComponentContextRelations,
  );
  const fullCanonicalRelations = deriveApplicationComponentRelations(
    partClassifications,
    applicationComponentContextRelations,
  );
  const exactPartCoverage = (relations) =>
    relations.reduce(
      (total, relation) =>
        total +
        (relation.relationType === "part-example" ? relation.partIds.length : 0),
      0,
    );

  assert.deepEqual(applicationComponentRelations, frozenRelations);
  assert.equal(exactPartCoverage(applicationComponentRelations), 29);
  assert.equal(exactPartCoverage(fullCanonicalRelations), 36);
});

test("preserves four independent context-only source records", () => {
  const validation = validatePartTaxonomy(applications, componentSolutions);

  assert.equal(applicationComponentContextRelations.length, 4);
  assert.equal(validation.contextOnlyRecords, 4);
  assert.deepEqual(validation.duplicateContextRelationKeys, []);
  assert.deepEqual(validation.brokenContextApplicationIds, []);
  assert.deepEqual(validation.brokenContextComponentIds, []);
});

test("exact ownership takes precedence in the derived compatibility view", () => {
  const duplicateContext = {
    applicationId: applicationIds.motionComponents,
    componentId: componentIds.precisionPlasticGears,
    relationType: "industry-context",
  };
  const relations = deriveApplicationComponentRelations(partClassifications, [
    ...applicationComponentContextRelations,
    duplicateContext,
  ]);
  const matchingRelations = relations.filter(
    (relation) =>
      relation.applicationSlug === "motion-components" &&
      relation.componentSlug === "precision-plastic-gears",
  );

  assert.equal(matchingRelations.length, 1);
  assert.equal(matchingRelations[0]?.relationType, "part-example");
  assert.deepEqual(matchingRelations[0]?.partIds, ["precision-gear", "worm-gear"]);
});
