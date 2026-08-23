import { localizedReleaseManifest } from "../i18n/releaseManifest.ts";
import { productCategoryEntries } from "../lib/productCategories.ts";

export type MaterialDirectionTarget =
  | {
      type: "family";
      familySlugs: readonly [string, ...string[]];
    }
  | {
      type: "directory";
      directoryId: string;
      groupId?: string;
    };

export type ComponentMaterialDirectionRelation = {
  id: string;
  componentSlug: string;
  target: MaterialDirectionTarget;
};

export type MaterialDirectionOwner = {
  id: string;
  label: string;
  path: string;
  type: MaterialDirectionTarget["type"];
};

type ComponentDirectionSource = {
  slug: string;
  materialDirections: readonly {
    id: string;
  }[];
};

const materialDirectionDirectories = [
  {
    id: "conductive-antistatic-compounds",
    label: "Cross-material conductive and antistatic compounds",
    path: localizedReleaseManifest.conductiveAntistaticCompounds.sourcePath,
    groupIds: ["pom", "pa6", "pa66", "ppa"],
  },
] as const;

export const componentMaterialDirectionRelations = [
  {
    id: "precision-plastic-gears-balanced-unfilled-pom",
    componentSlug: "precision-plastic-gears",
    target: { type: "family", familySlugs: ["base-pom-resin"] },
  },
  {
    id: "precision-plastic-gears-wear-low-friction-pom",
    componentSlug: "precision-plastic-gears",
    target: {
      type: "family",
      familySlugs: ["wear-resistant-low-friction-pom-compound"],
    },
  },
  {
    id: "precision-plastic-gears-reinforced-pom",
    componentSlug: "precision-plastic-gears",
    target: {
      type: "family",
      familySlugs: ["glass-fiber-reinforced-pom-compound"],
    },
  },
  {
    id: "bushings-and-sleeves-balanced-unfilled-pom",
    componentSlug: "bushings-and-sleeves",
    target: { type: "family", familySlugs: ["base-pom-resin"] },
  },
  {
    id: "bushings-and-sleeves-wear-low-friction-pom",
    componentSlug: "bushings-and-sleeves",
    target: {
      type: "family",
      familySlugs: ["wear-resistant-low-friction-pom-compound"],
    },
  },
  {
    id: "bushings-and-sleeves-reinforced-pom",
    componentSlug: "bushings-and-sleeves",
    target: {
      type: "family",
      familySlugs: ["glass-fiber-reinforced-pom-compound"],
    },
  },
  {
    id: "conveyor-chain-components-balanced-unfilled-pom",
    componentSlug: "conveyor-chain-components",
    target: { type: "family", familySlugs: ["base-pom-resin"] },
  },
  {
    id: "conveyor-chain-components-wear-low-friction-pom",
    componentSlug: "conveyor-chain-components",
    target: {
      type: "family",
      familySlugs: ["wear-resistant-low-friction-pom-compound"],
    },
  },
  {
    id: "conveyor-chain-components-reinforced-pom",
    componentSlug: "conveyor-chain-components",
    target: {
      type: "family",
      familySlugs: ["glass-fiber-reinforced-pom-compound"],
    },
  },
  {
    id: "conveyor-chain-components-static-control-compounds",
    componentSlug: "conveyor-chain-components",
    target: {
      type: "directory",
      directoryId: "conductive-antistatic-compounds",
    },
  },
  {
    id: "valve-spools-and-cartridges-balanced-unfilled-pom",
    componentSlug: "valve-spools-and-cartridges",
    target: { type: "family", familySlugs: ["base-pom-resin"] },
  },
  {
    id: "valve-spools-and-cartridges-wear-low-friction-pom",
    componentSlug: "valve-spools-and-cartridges",
    target: {
      type: "family",
      familySlugs: ["wear-resistant-low-friction-pom-compound"],
    },
  },
  {
    id: "valve-spools-and-cartridges-reinforced-pom",
    componentSlug: "valve-spools-and-cartridges",
    target: {
      type: "family",
      familySlugs: ["glass-fiber-reinforced-pom-compound"],
    },
  },
  {
    id: "valve-spools-and-cartridges-pa-ppa-structural-option",
    componentSlug: "valve-spools-and-cartridges",
    target: {
      type: "family",
      familySlugs: ["pa6-compound", "pa66-compound", "ppa-compound"],
    },
  },
  {
    id: "textile-guide-components-balanced-unfilled-pom",
    componentSlug: "textile-guide-components",
    target: { type: "family", familySlugs: ["base-pom-resin"] },
  },
  {
    id: "textile-guide-components-wear-low-friction-pom",
    componentSlug: "textile-guide-components",
    target: {
      type: "family",
      familySlugs: ["wear-resistant-low-friction-pom-compound"],
    },
  },
  {
    id: "textile-guide-components-reinforced-pom-carriers",
    componentSlug: "textile-guide-components",
    target: {
      type: "family",
      familySlugs: ["glass-fiber-reinforced-pom-compound"],
    },
  },
  {
    id: "textile-guide-components-static-control-compounds",
    componentSlug: "textile-guide-components",
    target: {
      type: "directory",
      directoryId: "conductive-antistatic-compounds",
    },
  },
  {
    id: "ic-handling-trays-static-control-pom",
    componentSlug: "ic-handling-trays",
    target: {
      type: "family",
      familySlugs: ["conductive-antistatic-pom-compound"],
    },
  },
  {
    id: "ic-handling-trays-dimensionally-controlled-reinforced-pom",
    componentSlug: "ic-handling-trays",
    target: {
      type: "family",
      familySlugs: [
        "glass-fiber-reinforced-pom-compound",
        "glass-bead-filled-pom-compound",
      ],
    },
  },
  {
    id: "ic-handling-trays-unfilled-pom-non-esds-fixtures",
    componentSlug: "ic-handling-trays",
    target: { type: "family", familySlugs: ["base-pom-resin"] },
  },
  {
    id: "ic-handling-trays-ppa-high-temperature-option",
    componentSlug: "ic-handling-trays",
    target: { type: "family", familySlugs: ["ppa-compound"] },
  },
] as const satisfies readonly ComponentMaterialDirectionRelation[];

const familyBySlug = new Map(
  productCategoryEntries.map((entry) => [entry.slug, entry]),
);

const directoryById = new Map<
  string,
  (typeof materialDirectionDirectories)[number]
>(
  materialDirectionDirectories.map((entry) => [entry.id, entry]),
);

export const resolveMaterialDirectionOwners = (
  target: MaterialDirectionTarget,
): readonly MaterialDirectionOwner[] => {
  if (target.type === "family") {
    return target.familySlugs.flatMap((slug) => {
      const entry = familyBySlug.get(slug);

      return entry
        ? [{ id: entry.slug, label: entry.label, path: entry.path, type: "family" }]
        : [];
    });
  }

  const entry = directoryById.get(target.directoryId);

  return entry
    ? [{ id: entry.id, label: entry.label, path: entry.path, type: "directory" }]
    : [];
};

export const getComponentMaterialDirectionRelations = (componentSlug: string) =>
  componentMaterialDirectionRelations.filter(
    (relation) => relation.componentSlug === componentSlug,
  );

const duplicateValues = (values: readonly string[]) =>
  Array.from(
    new Set(values.filter((value, index) => values.indexOf(value) !== index)),
  );

const copiedCatalogValueKeys = new Set([
  "mfi",
  "tensile",
  "hdt",
  "density",
  "shrinkage",
  "property",
  "properties",
  "value",
  "unit",
  "method",
]);

export const validateComponentMaterialDirections = (
  components: readonly ComponentDirectionSource[],
) => {
  const componentSlugs = new Set(components.map((component) => component.slug));
  const sourceDirectionIds = components.flatMap((component) =>
    component.materialDirections.map((direction) => direction.id),
  );
  const relationIds = componentMaterialDirectionRelations.map(
    (relation) => relation.id,
  );
  const relationById = new Map<string, ComponentMaterialDirectionRelation>(
    componentMaterialDirectionRelations.map((relation) => [relation.id, relation]),
  );
  const missingTargetDirectionIds = sourceDirectionIds.filter(
    (id) => !relationById.has(id),
  );
  const orphanTargetDirectionIds = componentMaterialDirectionRelations
    .filter(
      (relation) =>
        !components.some(
          (component) =>
            component.slug === relation.componentSlug &&
            component.materialDirections.some(
              (direction) => direction.id === relation.id,
            ),
        ),
    )
    .map((relation) => relation.id);
  const brokenComponentSlugs = componentMaterialDirectionRelations
    .filter((relation) => !componentSlugs.has(relation.componentSlug))
    .map((relation) => relation.componentSlug);
  const brokenFamilySlugs = componentMaterialDirectionRelations.flatMap(
    (relation) =>
      relation.target.type === "family"
        ? relation.target.familySlugs.filter((slug) => !familyBySlug.has(slug))
        : [],
  );
  const brokenDirectoryIds = componentMaterialDirectionRelations.flatMap(
    (relation) =>
      relation.target.type === "directory" &&
      !directoryById.has(relation.target.directoryId)
        ? [relation.target.directoryId]
        : [],
  );
  const invalidDirectoryGroupIds = componentMaterialDirectionRelations.flatMap(
    (relation) => {
      const target: MaterialDirectionTarget = relation.target;

      if (target.type !== "directory" || !target.groupId) {
        return [];
      }

      const directory = directoryById.get(target.directoryId);
      const groupIds = new Set<string>(directory?.groupIds ?? []);

      return groupIds.has(target.groupId)
        ? []
        : [`${target.directoryId}::${target.groupId}`];
    },
  );
  const rawHardcodedHrefTargets = componentMaterialDirectionRelations
    .filter((relation) => "href" in relation.target)
    .map((relation) => relation.id);
  const catalogValueCopies = componentMaterialDirectionRelations.flatMap(
    (relation) =>
      Object.keys(relation.target)
        .filter((key) => copiedCatalogValueKeys.has(key.toLowerCase()))
        .map((key) => `${relation.id}::${key}`),
  );

  return {
    existingMaterialDirections: sourceDirectionIds.length,
    stableDirectionIds: sourceDirectionIds.filter(Boolean).length,
    targetRelations: relationIds.length,
    duplicateDirectionIds: duplicateValues(sourceDirectionIds),
    duplicateRelationIds: duplicateValues(relationIds),
    missingTargetDirectionIds,
    orphanTargetDirectionIds,
    brokenComponentSlugs: Array.from(new Set(brokenComponentSlugs)),
    brokenFamilySlugs: Array.from(new Set(brokenFamilySlugs)),
    brokenDirectoryIds: Array.from(new Set(brokenDirectoryIds)),
    invalidDirectoryGroupIds,
    rawHardcodedHrefTargets,
    catalogValueCopies,
  };
};
