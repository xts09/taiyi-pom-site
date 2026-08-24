import assert from "node:assert/strict";
import test from "node:test";
import { applications } from "../src/data/applications.ts";
import {
  deriveApplicationComponentRelations,
} from "../src/data/applicationComponentRelations.ts";
import { componentSolutions } from "../src/data/componentSolutions.ts";
import {
  applicationComponentContextRelations,
  applicationIdentityRegistry,
  applicationIds,
  applicationSystems,
  componentCandidates,
  componentFamilyIdentityRegistry,
  componentIds,
  engineeringContexts,
  partClassifications,
  validatePartTaxonomy,
} from "../src/data/partTaxonomy.ts";

test("enforces the D1b transitional coverage contract", () => {
  const validation = validatePartTaxonomy(applications, componentSolutions);

  assert.equal(validation.knownParts, 68);
  assert.equal(validation.migratedExactParts, 29);
  assert.equal(validation.intentionallyUnclassifiedParts, 39);
  assert.equal(validation.classificationCoverageTotal, 68);
  assert.equal(
    validation.migratedExactParts +
      validation.intentionallyUnclassifiedParts,
    validation.knownParts,
  );
  assert.deepEqual(validation.duplicateClassificationKeys, []);
  assert.deepEqual(validation.unknownClassificationKeys, []);

  const classifiedKeys = new Set(
    partClassifications.map(
      (classification) =>
        `${classification.applicationId}::${classification.partId}`,
    ),
  );
  assert.equal(
    validation.intentionallyUnclassifiedPartKeys.some((key) =>
      classifiedKeys.has(key),
    ),
    false,
  );
  assert.equal(
    partClassifications.every(
      (classification) => classification.classificationStatus === "mapped",
    ),
    true,
  );
  assert.equal(
    partClassifications.some(
      (classification) => "proposedComponentId" in classification,
    ),
    false,
  );
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

test("keeps D1b systems and candidates as non-publishing skeletons", () => {
  const validation = validatePartTaxonomy(applications, componentSolutions);

  assert.deepEqual(applicationSystems, []);
  assert.deepEqual(componentCandidates, []);
  assert.deepEqual(validation.brokenClassificationSystemIds, []);
  assert.deepEqual(validation.crossApplicationSystemKeys, []);
  assert.deepEqual(validation.nonTaxonomyOnlySystemIds, []);
  assert.deepEqual(validation.brokenProposedComponentIds, []);
  assert.equal(
    partClassifications.every(
      (classification) => classification.systemId === undefined,
    ),
    true,
  );
});

test("migrates entity kinds without introducing child relationships", () => {
  const assemblies = partClassifications
    .filter((classification) => classification.entityKind === "assembly")
    .map((classification) => classification.partId)
    .sort();

  assert.deepEqual(assemblies, [
    "reduction-gear-assembly",
    "valve-spool-assembly",
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

test("keeps controlled engineering contexts separate from D1b ownership", () => {
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
    partClassifications.every(
      (classification) => classification.relatedContextIds === undefined,
    ),
    true,
  );
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
