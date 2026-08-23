import type { LocalizedProductCategoryRouteSlug } from "../i18n/productFunnelTypes.ts";
import { componentSolutions } from "./componentSolutions.ts";

export type ProductFamilyComponentRelation = {
  productFamilySlug: LocalizedProductCategoryRouteSlug;
  componentSlug: (typeof componentSolutions)[number]["slug"];
};

// Shared semantic relationships only. Labels and locale-aware URLs are
// resolved from the existing Product Family and Component owners at render time.
export const productFamilyComponentRelations: readonly ProductFamilyComponentRelation[] =
  [
    {
      productFamilySlug: "conductive-antistatic-pom-compound",
      componentSlug: "ic-handling-trays",
    },
    {
      productFamilySlug: "wear-resistant-low-friction-pom-compound",
      componentSlug: "bushings-and-sleeves",
    },
    {
      productFamilySlug: "wear-resistant-low-friction-pom-compound",
      componentSlug: "precision-plastic-gears",
    },
    {
      productFamilySlug: "glass-bead-filled-pom-compound",
      componentSlug: "ic-handling-trays",
    },
  ];

export const getProductFamilyComponentRelations = (productFamilySlug: string) =>
  productFamilyComponentRelations.filter(
    (relation) => relation.productFamilySlug === productFamilySlug,
  );

type SlugRecord = {
  slug: string;
};

export const validateProductFamilyComponentRelations = (
  productFamilies: readonly SlugRecord[],
  components: readonly SlugRecord[],
) => {
  const productFamilySlugs = new Set(productFamilies.map((item) => item.slug));
  const componentSlugs = new Set(components.map((item) => item.slug));
  const relationKeys = productFamilyComponentRelations.map(
    (relation) =>
      `${relation.productFamilySlug}::${relation.componentSlug}`,
  );

  return {
    semanticEdges: productFamilyComponentRelations.length,
    participatingProductFamilySlugs: [
      ...new Set(
        productFamilyComponentRelations.map(
          (relation) => relation.productFamilySlug,
        ),
      ),
    ],
    receivingComponentSlugs: [
      ...new Set(
        productFamilyComponentRelations.map(
          (relation) => relation.componentSlug,
        ),
      ),
    ],
    duplicateRelationKeys: relationKeys.filter(
      (key, index) => relationKeys.indexOf(key) !== index,
    ),
    brokenProductFamilySlugs: productFamilyComponentRelations
      .filter((relation) => !productFamilySlugs.has(relation.productFamilySlug))
      .map((relation) => relation.productFamilySlug),
    brokenComponentSlugs: productFamilyComponentRelations
      .filter((relation) => !componentSlugs.has(relation.componentSlug))
      .map((relation) => relation.componentSlug),
    rawHardcodedHrefTargets: productFamilyComponentRelations.filter(
      (relation) => "href" in relation,
    ),
  };
};
