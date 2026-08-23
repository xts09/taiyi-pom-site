export type PartExampleRelation = {
  applicationSlug: string;
  componentSlug: string;
  relationType: "part-example";
  partIds: readonly [string, ...string[]];
};

export type IndustryContextRelation = {
  applicationSlug: string;
  componentSlug: string;
  relationType: "industry-context";
  partIds?: never;
};

export type ApplicationComponentRelation =
  PartExampleRelation | IndustryContextRelation;

export const applicationComponentRelations = [
  {
    applicationSlug: "motion-components",
    componentSlug: "precision-plastic-gears",
    relationType: "part-example",
    partIds: ["precision-gear", "worm-gear"],
  },
  {
    applicationSlug: "washing-machine-components",
    componentSlug: "precision-plastic-gears",
    relationType: "part-example",
    partIds: ["drum-drive-gear", "reduction-gear-assembly"],
  },
  {
    applicationSlug: "automotive",
    componentSlug: "precision-plastic-gears",
    relationType: "part-example",
    partIds: ["wiper-motor-gear"],
  },
  {
    applicationSlug: "electronics",
    componentSlug: "precision-plastic-gears",
    relationType: "part-example",
    partIds: ["copier-drive-gear"],
  },
  {
    applicationSlug: "outdoor-equipment",
    componentSlug: "precision-plastic-gears",
    relationType: "part-example",
    partIds: ["lawn-mower-gear"],
  },
  {
    applicationSlug: "motion-components",
    componentSlug: "bushings-and-sleeves",
    relationType: "part-example",
    partIds: ["bushing", "sleeve", "guide-ring", "sliding-block"],
  },
  {
    applicationSlug: "automotive",
    componentSlug: "bushings-and-sleeves",
    relationType: "part-example",
    partIds: ["seat-guide-ring"],
  },
  {
    applicationSlug: "conveyor-automation",
    componentSlug: "conveyor-chain-components",
    relationType: "part-example",
    partIds: [
      "mini-conveyor-chain-plate",
      "high-load-conveyor-chain",
      "conveyor-segment",
      "antistatic-anti-slip-conveyor-chain-plate",
      "conveyor-roller",
      "conveyor-chain-plate-bracket",
      "conductive-conveyor-chain-plate",
    ],
  },
  {
    applicationSlug: "electronics",
    componentSlug: "conveyor-chain-components",
    relationType: "industry-context",
  },
  {
    applicationSlug: "water-control",
    componentSlug: "valve-spools-and-cartridges",
    relationType: "part-example",
    partIds: [
      "valve-spool-assembly",
      "valve-cartridge",
      "valve-internal-parts",
      "guide-wheel",
    ],
  },
  {
    applicationSlug: "washing-machine-components",
    componentSlug: "valve-spools-and-cartridges",
    relationType: "industry-context",
  },
  {
    applicationSlug: "textile-machinery",
    componentSlug: "textile-guide-components",
    relationType: "part-example",
    partIds: [
      "yarn-guide",
      "heddle-lifter",
      "air-spinning-guide",
      "textile-guide-wheel",
      "textile-spindle-support",
    ],
  },
  {
    applicationSlug: "motion-components",
    componentSlug: "textile-guide-components",
    relationType: "industry-context",
  },
  {
    applicationSlug: "electronics",
    componentSlug: "ic-handling-trays",
    relationType: "part-example",
    partIds: ["ic-handling-tray"],
  },
  {
    applicationSlug: "conveyor-automation",
    componentSlug: "ic-handling-trays",
    relationType: "industry-context",
  },
] as const satisfies readonly ApplicationComponentRelation[];

type ApplicationRecord = {
  slug: string;
  title?: string;
  parts: readonly {
    id: string;
    label?: string;
  }[];
};

export type ComponentApplicationReference = {
  applicationSlug: string;
  applicationTitle: string;
  href: string;
  relationType: ApplicationComponentRelation["relationType"];
  partExamples: readonly {
    id: string;
    label: string;
  }[];
};

export type ApplicationComponentOwnerReference = {
  componentSlug: string;
  href: string;
  partExamples: readonly {
    id: string;
    label: string;
  }[];
};

type ComponentRecord = {
  slug: string;
  relatedApplications: readonly {
    href: string;
  }[];
};

const getRelationKey = (applicationSlug: string, componentSlug: string) =>
  `${applicationSlug}::${componentSlug}`;

const getApplicationSlugFromHref = (href: string) =>
  href.split("/applications/").at(-1) ?? "";

export const validateApplicationComponentRelations = (
  applications: readonly ApplicationRecord[],
  components: readonly ComponentRecord[],
) => {
  const applicationBySlug = new Map(
    applications.map((application) => [application.slug, application]),
  );
  const componentSlugs = new Set(components.map((component) => component.slug));
  const allPartIds = applications.flatMap((application) =>
    application.parts.map((part) => part.id),
  );
  const duplicatePartIds = Array.from(
    new Set(
      allPartIds.filter(
        (partId, index) => allPartIds.indexOf(partId) !== index,
      ),
    ),
  );
  const relationKeys = applicationComponentRelations.map((relation) =>
    getRelationKey(relation.applicationSlug, relation.componentSlug),
  );
  const duplicateRelationKeys = Array.from(
    new Set(
      relationKeys.filter(
        (relationKey, index) => relationKeys.indexOf(relationKey) !== index,
      ),
    ),
  );
  const brokenApplicationSlugs = applicationComponentRelations
    .filter((relation) => !applicationBySlug.has(relation.applicationSlug))
    .map((relation) => relation.applicationSlug);
  const brokenComponentSlugs = applicationComponentRelations
    .filter((relation) => !componentSlugs.has(relation.componentSlug))
    .map((relation) => relation.componentSlug);
  const brokenPartReferences = applicationComponentRelations.flatMap(
    (relation) => {
      if (relation.relationType !== "part-example") {
        return [];
      }

      const application = applicationBySlug.get(relation.applicationSlug);
      const applicationPartIds = new Set(
        application?.parts.map((part) => part.id) ?? [],
      );

      return relation.partIds
        .filter((partId) => !applicationPartIds.has(partId))
        .map((partId) => `${relation.applicationSlug}::${partId}`);
    },
  );
  const invalidRelationShapes = applicationComponentRelations
    .filter(
      (relation) =>
        (relation.relationType === "part-example" &&
          (relation.partIds as readonly string[]).length === 0) ||
        (relation.relationType === "industry-context" &&
          "partIds" in relation &&
          Array.isArray(relation.partIds) &&
          relation.partIds.length > 0),
    )
    .map((relation) =>
      getRelationKey(relation.applicationSlug, relation.componentSlug),
    );
  const orphanRelationKeys = applicationComponentRelations
    .filter((relation) => {
      const application = applicationBySlug.get(relation.applicationSlug);
      const hasBrokenPart =
        relation.relationType === "part-example" &&
        relation.partIds.some(
          (partId) => !application?.parts.some((part) => part.id === partId),
        );

      return (
        !application ||
        !componentSlugs.has(relation.componentSlug) ||
        hasBrokenPart
      );
    })
    .map((relation) =>
      getRelationKey(relation.applicationSlug, relation.componentSlug),
    );
  const registryPairKeys = new Set(relationKeys);
  const exactOwnerPairKeys = new Set(
    applicationComponentRelations
      .filter((relation) => relation.relationType === "part-example")
      .map((relation) =>
        getRelationKey(relation.applicationSlug, relation.componentSlug),
      ),
  );
  const legacyPairKeys = new Set(
    components.flatMap((component) =>
      component.relatedApplications.map((application) =>
        getRelationKey(
          getApplicationSlugFromHref(application.href),
          component.slug,
        ),
      ),
    ),
  );
  const missingLegacyPairKeys = Array.from(legacyPairKeys).filter(
    (relationKey) => !registryPairKeys.has(relationKey),
  );
  const registryPairsMissingFromLegacy = Array.from(registryPairKeys).filter(
    (relationKey) => !legacyPairKeys.has(relationKey),
  );

  return {
    applicationPartsTotal: allPartIds.length,
    stablePartIds: allPartIds.filter(Boolean).length,
    duplicatePartIds,
    registryRecords: applicationComponentRelations.length,
    partExampleRecords: applicationComponentRelations.filter(
      (relation) => relation.relationType === "part-example",
    ).length,
    industryContextRecords: applicationComponentRelations.filter(
      (relation) => relation.relationType === "industry-context",
    ).length,
    exactPartCoverage: applicationComponentRelations.reduce(
      (total, relation) =>
        total +
        (relation.relationType === "part-example"
          ? relation.partIds.length
          : 0),
      0,
    ),
    uniqueExactOwnerPairs: exactOwnerPairKeys.size,
    combinedSemanticPairs: registryPairKeys.size,
    duplicateRelationKeys,
    brokenApplicationSlugs,
    brokenComponentSlugs,
    brokenPartReferences,
    invalidRelationShapes,
    orphanRelationKeys,
    missingLegacyPairKeys,
    registryPairsMissingFromLegacy,
  };
};

export const getApplicationComponentRelations = (applicationSlug: string) =>
  applicationComponentRelations.filter(
    (relation) => relation.applicationSlug === applicationSlug,
  );

export const getComponentApplicationRelations = (componentSlug: string) =>
  applicationComponentRelations.filter(
    (relation) => relation.componentSlug === componentSlug,
  );

export const resolveApplicationComponentOwnerReferences = (
  application: ApplicationRecord,
): readonly ApplicationComponentOwnerReference[] =>
  getApplicationComponentRelations(application.slug).flatMap((relation) => {
    if (relation.relationType !== "part-example") {
      return [];
    }

    const partExamples = relation.partIds.map((partId) => {
      const part = application.parts.find(
        (candidate) => candidate.id === partId,
      );

      if (!part?.label) {
        throw new Error(
          `Missing part content for application relation: ${application.slug}::${partId}`,
        );
      }

      return {
        id: part.id,
        label: part.label,
      };
    });

    return [
      {
        componentSlug: relation.componentSlug,
        href: `/components/${relation.componentSlug}`,
        partExamples,
      },
    ];
  });

export const resolveComponentApplicationReferences = (
  componentSlug: string,
  applications: readonly ApplicationRecord[],
): readonly ComponentApplicationReference[] => {
  const applicationBySlug = new Map(
    applications.map((application) => [application.slug, application]),
  );

  return getComponentApplicationRelations(componentSlug).map((relation) => {
    const application = applicationBySlug.get(relation.applicationSlug);

    if (!application?.title) {
      throw new Error(
        `Missing application content for component relation: ${relation.applicationSlug}::${componentSlug}`,
      );
    }

    const partExamples =
      relation.relationType === "part-example"
        ? relation.partIds.map((partId) => {
            const part = application.parts.find(
              (candidate) => candidate.id === partId,
            );

            if (!part?.label) {
              throw new Error(
                `Missing part content for component relation: ${relation.applicationSlug}::${partId}`,
              );
            }

            return {
              id: part.id,
              label: part.label,
            };
          })
        : [];

    return {
      applicationSlug: application.slug,
      applicationTitle: application.title,
      href: `/applications/${application.slug}`,
      relationType: relation.relationType,
      partExamples,
    };
  });
};
