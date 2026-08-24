import {
  applicationComponentContextRelations,
  componentFamilyIdentityRegistry,
  getApplicationIdentityById,
  getComponentIdentityById,
  productionCompatibilityPartClassifications,
  type ApplicationComponentContextRelation,
  type PartClassification,
} from "./partTaxonomy.ts";

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

const compatibilityRelationKey = (
  applicationSlug: string,
  componentSlug: string,
) => `${applicationSlug}::${componentSlug}`;

export const deriveApplicationComponentRelations = (
  classifications: readonly PartClassification[],
  contextRelations: readonly ApplicationComponentContextRelation[],
): readonly ApplicationComponentRelation[] => {
  const exactRelationByKey = new Map<
    string,
    Omit<PartExampleRelation, "partIds"> & { partIds: string[] }
  >();

  for (const classification of classifications) {
    if (classification.classificationStatus !== "mapped") {
      continue;
    }

    const application = getApplicationIdentityById(
      classification.applicationId,
    );
    const component = getComponentIdentityById(
      classification.primaryComponentId,
    );

    if (!application || !component) {
      throw new Error(
        `Broken exact taxonomy relation: ${classification.applicationId}::${classification.primaryComponentId}`,
      );
    }

    const key = compatibilityRelationKey(application.slug, component.slug);
    const existing = exactRelationByKey.get(key);

    if (existing) {
      existing.partIds.push(classification.partId);
      continue;
    }

    exactRelationByKey.set(key, {
      applicationSlug: application.slug,
      componentSlug: component.slug,
      relationType: "part-example",
      partIds: [classification.partId],
    });
  }

  const exactRelations = Array.from(exactRelationByKey.values()).map(
    (relation): PartExampleRelation => ({
      ...relation,
      partIds: relation.partIds as [string, ...string[]],
    }),
  );
  const exactRelationKeys = new Set(
    exactRelations.map((relation) =>
      compatibilityRelationKey(
        relation.applicationSlug,
        relation.componentSlug,
      ),
    ),
  );
  const derivedContextRelations = contextRelations.flatMap(
    (relation): IndustryContextRelation[] => {
      const application = getApplicationIdentityById(relation.applicationId);
      const component = getComponentIdentityById(relation.componentId);

      if (!application || !component) {
        throw new Error(
          `Broken context taxonomy relation: ${relation.applicationId}::${relation.componentId}`,
        );
      }

      const key = compatibilityRelationKey(application.slug, component.slug);

      return exactRelationKeys.has(key)
        ? []
        : [
            {
              applicationSlug: application.slug,
              componentSlug: component.slug,
              relationType: "industry-context",
            },
          ];
    },
  );

  return componentFamilyIdentityRegistry.flatMap((component) => [
    ...exactRelations.filter(
      (relation) => relation.componentSlug === component.slug,
    ),
    ...derivedContextRelations.filter(
      (relation) => relation.componentSlug === component.slug,
    ),
  ]);
};

// Read-only compatibility view for existing page consumers. Exact ownership
// takes precedence over a context-only record for the same semantic pair.
export const applicationComponentRelations =
  deriveApplicationComponentRelations(
    productionCompatibilityPartClassifications,
    applicationComponentContextRelations,
  );

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
        relation.relationType === "part-example" && relation.partIds.length === 0,
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
