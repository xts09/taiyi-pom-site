type Brand<Value, Name extends string> = Value & {
  readonly __brand: Name;
};

export type ApplicationId = Brand<string, "ApplicationId">;
export type ApplicationSystemId = Brand<string, "ApplicationSystemId">;
export type PartId = Brand<string, "PartId">;
export type ComponentId = Brand<string, "ComponentId">;
export type ComponentCandidateId = Brand<string, "ComponentCandidateId">;
export type EngineeringContextId = Brand<string, "EngineeringContextId">;

const applicationId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "ApplicationId">;
const partId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "PartId">;
const componentId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "ComponentId">;
const engineeringContextId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "EngineeringContextId">;

// D1b explicitly adopts the current application slugs as stable semantic IDs.
// Future slug changes must update only `slug`, not these IDs.
export const applicationIds = {
  automotive: applicationId("automotive"),
  electronics: applicationId("electronics"),
  conveyorAutomation: applicationId("conveyor-automation"),
  motionComponents: applicationId("motion-components"),
  waterControl: applicationId("water-control"),
  washingMachineComponents: applicationId("washing-machine-components"),
  outdoorEquipment: applicationId("outdoor-equipment"),
  textileMachinery: applicationId("textile-machinery"),
} as const;

export const applicationIdentityRegistry = [
  { id: applicationIds.automotive, slug: "automotive" },
  { id: applicationIds.electronics, slug: "electronics" },
  {
    id: applicationIds.conveyorAutomation,
    slug: "conveyor-automation",
  },
  { id: applicationIds.motionComponents, slug: "motion-components" },
  { id: applicationIds.waterControl, slug: "water-control" },
  {
    id: applicationIds.washingMachineComponents,
    slug: "washing-machine-components",
  },
  { id: applicationIds.outdoorEquipment, slug: "outdoor-equipment" },
  { id: applicationIds.textileMachinery, slug: "textile-machinery" },
] as const;

// D1b also adopts the six current component slugs as stable semantic IDs.
export const componentIds = {
  precisionPlasticGears: componentId("precision-plastic-gears"),
  bushingsAndSleeves: componentId("bushings-and-sleeves"),
  conveyorChainComponents: componentId("conveyor-chain-components"),
  valveSpoolsAndCartridges: componentId("valve-spools-and-cartridges"),
  textileGuideComponents: componentId("textile-guide-components"),
  icHandlingTrays: componentId("ic-handling-trays"),
} as const;

export const componentFamilyIdentityRegistry = [
  {
    id: componentIds.precisionPlasticGears,
    slug: "precision-plastic-gears",
  },
  {
    id: componentIds.bushingsAndSleeves,
    slug: "bushings-and-sleeves",
  },
  {
    id: componentIds.conveyorChainComponents,
    slug: "conveyor-chain-components",
  },
  {
    id: componentIds.valveSpoolsAndCartridges,
    slug: "valve-spools-and-cartridges",
  },
  {
    id: componentIds.textileGuideComponents,
    slug: "textile-guide-components",
  },
  { id: componentIds.icHandlingTrays, slug: "ic-handling-trays" },
] as const;

export type ApplicationSystem = {
  id: ApplicationSystemId;
  applicationId: ApplicationId;
  slug: string;
  title: string;
  summary?: string;
  publicationStatus:
    | "taxonomy-only"
    | "section-only"
    | "candidate"
    | "published";
};

// Systems are discovered by the D1c audit. D1b must not invent them.
export const applicationSystems: readonly ApplicationSystem[] = [];

export const engineeringContextIds = {
  sliding: engineeringContextId("sliding"),
  rotating: engineeringContextId("rotating"),
  sealing: engineeringContextId("sealing"),
  loadBearing: engineeringContextId("load-bearing"),
  fluidContact: engineeringContextId("fluid-contact"),
  staticControl: engineeringContextId("static-control"),
  precisionGuiding: engineeringContextId("precision-guiding"),
  impactLoaded: engineeringContextId("impact-loaded"),
  snapFit: engineeringContextId("snap-fit"),
} as const;

export const engineeringContexts = [
  { id: engineeringContextIds.sliding, title: "Sliding" },
  { id: engineeringContextIds.rotating, title: "Rotating" },
  { id: engineeringContextIds.sealing, title: "Sealing" },
  { id: engineeringContextIds.loadBearing, title: "Load-bearing" },
  { id: engineeringContextIds.fluidContact, title: "Fluid contact" },
  { id: engineeringContextIds.staticControl, title: "Static control" },
  { id: engineeringContextIds.precisionGuiding, title: "Precision guiding" },
  { id: engineeringContextIds.impactLoaded, title: "Impact-loaded" },
  { id: engineeringContextIds.snapFit, title: "Snap-fit" },
] as const satisfies readonly {
  id: EngineeringContextId;
  title: string;
}[];

export type ComponentCandidate = {
  id: ComponentCandidateId;
  proposedTitle: string;
  rationale: string;
  status: "proposed" | "approved" | "rejected" | "merged";
};

// Candidates are created only by reviewed D1c classification decisions.
export const componentCandidates: readonly ComponentCandidate[] = [];

type PartClassificationBase = {
  partId: PartId;
  applicationId: ApplicationId;
  entityKind: "part" | "assembly";
  systemId?: ApplicationSystemId;
  relatedContextIds?: readonly EngineeringContextId[];
};

export type PartClassification =
  | (PartClassificationBase & {
      classificationStatus: "mapped";
      primaryComponentId: ComponentId;
      proposedComponentId?: never;
    })
  | (PartClassificationBase & {
      classificationStatus: "new-owner";
      primaryComponentId?: never;
      proposedComponentId: ComponentCandidateId;
    })
  | (PartClassificationBase & {
      classificationStatus: "review";
      primaryComponentId?: never;
      proposedComponentId?: ComponentCandidateId;
    });

const mappedPart = (
  applicationIdValue: ApplicationId,
  partIdValue: string,
  primaryComponentId: ComponentId,
  entityKind: PartClassificationBase["entityKind"] = "part",
): PartClassification => ({
  applicationId: applicationIdValue,
  partId: partId(partIdValue),
  entityKind,
  primaryComponentId,
  classificationStatus: "mapped",
});

// D1b migrates only the 29 exact mappings already reviewed in the legacy
// registry. The other 39 known Parts are intentionally absent until D1c.
export const partClassifications: readonly PartClassification[] = [
  mappedPart(
    applicationIds.motionComponents,
    "precision-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "worm-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.washingMachineComponents,
    "drum-drive-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.washingMachineComponents,
    "reduction-gear-assembly",
    componentIds.precisionPlasticGears,
    "assembly",
  ),
  mappedPart(
    applicationIds.automotive,
    "wiper-motor-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.electronics,
    "copier-drive-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.outdoorEquipment,
    "lawn-mower-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "bushing",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "sleeve",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "guide-ring",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "sliding-block",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.automotive,
    "seat-guide-ring",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "mini-conveyor-chain-plate",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "high-load-conveyor-chain",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "conveyor-segment",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "antistatic-anti-slip-conveyor-chain-plate",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "conveyor-roller",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "conveyor-chain-plate-bracket",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "conductive-conveyor-chain-plate",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.waterControl,
    "valve-spool-assembly",
    componentIds.valveSpoolsAndCartridges,
    "assembly",
  ),
  mappedPart(
    applicationIds.waterControl,
    "valve-cartridge",
    componentIds.valveSpoolsAndCartridges,
  ),
  mappedPart(
    applicationIds.waterControl,
    "valve-internal-parts",
    componentIds.valveSpoolsAndCartridges,
  ),
  mappedPart(
    applicationIds.waterControl,
    "guide-wheel",
    componentIds.valveSpoolsAndCartridges,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "yarn-guide",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "heddle-lifter",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "air-spinning-guide",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "textile-guide-wheel",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "textile-spindle-support",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.electronics,
    "ic-handling-tray",
    componentIds.icHandlingTrays,
  ),
];

export type ApplicationComponentContextRelation = {
  applicationId: ApplicationId;
  componentId: ComponentId;
  relationType: "industry-context";
};

// Context-only facts remain independent from exact Part ownership.
export const applicationComponentContextRelations = [
  {
    applicationId: applicationIds.electronics,
    componentId: componentIds.conveyorChainComponents,
    relationType: "industry-context",
  },
  {
    applicationId: applicationIds.washingMachineComponents,
    componentId: componentIds.valveSpoolsAndCartridges,
    relationType: "industry-context",
  },
  {
    applicationId: applicationIds.motionComponents,
    componentId: componentIds.textileGuideComponents,
    relationType: "industry-context",
  },
  {
    applicationId: applicationIds.conveyorAutomation,
    componentId: componentIds.icHandlingTrays,
    relationType: "industry-context",
  },
] as const satisfies readonly ApplicationComponentContextRelation[];

export const getApplicationIdentityById = (id: ApplicationId) =>
  applicationIdentityRegistry.find((identity) => identity.id === id);

export const getComponentIdentityById = (id: ComponentId) =>
  componentFamilyIdentityRegistry.find((identity) => identity.id === id);

type ApplicationRecord = {
  slug: string;
  parts: readonly { id: string }[];
};

type ComponentRecord = {
  slug: string;
};

const relationKey = (applicationIdValue: string, partIdValue: string) =>
  `${applicationIdValue}::${partIdValue}`;

export const validatePartTaxonomy = (
  applications: readonly ApplicationRecord[],
  components: readonly ComponentRecord[],
) => {
  const knownPartKeys = applications.flatMap((application) =>
    application.parts.map((part) => relationKey(application.slug, part.id)),
  );
  const classifiedPartKeys = partClassifications.map((classification) =>
    relationKey(classification.applicationId, classification.partId),
  );
  const classifiedPartKeySet = new Set(classifiedPartKeys);
  const knownPartKeySet = new Set(knownPartKeys);
  const duplicateClassificationKeys = Array.from(
    new Set(
      classifiedPartKeys.filter(
        (key, index) => classifiedPartKeys.indexOf(key) !== index,
      ),
    ),
  );
  const intentionallyUnclassifiedPartKeys = knownPartKeys.filter(
    (key) => !classifiedPartKeySet.has(key),
  );
  const unknownClassificationKeys = classifiedPartKeys.filter(
    (key) => !knownPartKeySet.has(key),
  );
  const applicationSlugSet = new Set(
    applications.map((application) => application.slug),
  );
  const componentSlugSet = new Set(
    components.map((component) => component.slug),
  );
  const applicationIdentityIdSet = new Set<ApplicationId>(
    applicationIdentityRegistry.map((identity) => identity.id),
  );
  const componentIdentityIdSet = new Set<ComponentId>(
    componentFamilyIdentityRegistry.map((identity) => identity.id),
  );
  const systemById = new Map(
    applicationSystems.map((system) => [system.id, system]),
  );
  const contextIdSet = new Set<EngineeringContextId>(
    engineeringContexts.map((context) => context.id),
  );
  const candidateIdSet = new Set(
    componentCandidates.map((candidate) => candidate.id),
  );
  const contextRelationKeys = applicationComponentContextRelations.map(
    (relation) => `${relation.applicationId}::${relation.componentId}`,
  );

  return {
    knownParts: knownPartKeys.length,
    migratedExactParts: classifiedPartKeys.length,
    intentionallyUnclassifiedParts: intentionallyUnclassifiedPartKeys.length,
    intentionallyUnclassifiedPartKeys,
    duplicateClassificationKeys,
    unknownClassificationKeys,
    classificationCoverageTotal:
      classifiedPartKeys.length + intentionallyUnclassifiedPartKeys.length,
    invalidApplicationIdentitySlugs: applicationIdentityRegistry
      .filter((identity) => !applicationSlugSet.has(identity.slug))
      .map((identity) => identity.slug),
    missingApplicationIdentitySlugs: applications
      .filter(
        (application) =>
          !applicationIdentityRegistry.some(
            (identity) => identity.slug === application.slug,
          ),
      )
      .map((application) => application.slug),
    invalidComponentIdentitySlugs: componentFamilyIdentityRegistry
      .filter((identity) => !componentSlugSet.has(identity.slug))
      .map((identity) => identity.slug),
    missingComponentIdentitySlugs: components
      .filter(
        (component) =>
          !componentFamilyIdentityRegistry.some(
            (identity) => identity.slug === component.slug,
          ),
      )
      .map((component) => component.slug),
    brokenClassificationApplicationIds: partClassifications
      .filter(
        (classification) =>
          !applicationIdentityIdSet.has(classification.applicationId),
      )
      .map((classification) => classification.applicationId),
    brokenClassificationComponentIds: partClassifications.flatMap(
      (classification) =>
        classification.classificationStatus === "mapped" &&
        !componentIdentityIdSet.has(classification.primaryComponentId)
          ? [classification.primaryComponentId]
          : [],
    ),
    brokenClassificationSystemIds: partClassifications.flatMap(
      (classification) =>
        classification.systemId && !systemById.has(classification.systemId)
          ? [classification.systemId]
          : [],
    ),
    crossApplicationSystemKeys: partClassifications.flatMap((classification) => {
      const system = classification.systemId
        ? systemById.get(classification.systemId)
        : undefined;

      return system && system.applicationId !== classification.applicationId
        ? [relationKey(classification.applicationId, classification.partId)]
        : [];
    }),
    brokenProposedComponentIds: partClassifications.flatMap(
      (classification) =>
        classification.proposedComponentId &&
        !candidateIdSet.has(classification.proposedComponentId)
          ? [classification.proposedComponentId]
          : [],
    ),
    brokenEngineeringContextIds: partClassifications.flatMap(
      (classification) =>
        (classification.relatedContextIds ?? []).filter(
          (id) => !contextIdSet.has(id),
        ),
    ),
    duplicateEngineeringContextPartKeys: partClassifications.flatMap(
      (classification) => {
        const ids = classification.relatedContextIds ?? [];
        return ids.length === new Set(ids).size
          ? []
          : [relationKey(classification.applicationId, classification.partId)];
      },
    ),
    nonTaxonomyOnlySystemIds: applicationSystems
      .filter((system) => system.publicationStatus !== "taxonomy-only")
      .map((system) => system.id),
    contextOnlyRecords: applicationComponentContextRelations.length,
    duplicateContextRelationKeys: Array.from(
      new Set(
        contextRelationKeys.filter(
          (key, index) => contextRelationKeys.indexOf(key) !== index,
        ),
      ),
    ),
    brokenContextApplicationIds: applicationComponentContextRelations
      .filter(
        (relation) => !applicationIdentityIdSet.has(relation.applicationId),
      )
      .map((relation) => relation.applicationId),
    brokenContextComponentIds: applicationComponentContextRelations
      .filter((relation) => !componentIdentityIdSet.has(relation.componentId))
      .map((relation) => relation.componentId),
  };
};
