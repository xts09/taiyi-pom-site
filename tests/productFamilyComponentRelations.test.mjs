import assert from "node:assert/strict";
import test from "node:test";
import { componentSolutions } from "../src/data/componentSolutions.ts";
import {
  getProductFamilyComponentRelations,
  productFamilyComponentRelations,
  validateProductFamilyComponentRelations,
} from "../src/data/productFamilyComponentRelations.ts";
import { translateExpandedText } from "../src/i18n/expandedLocaleContent.ts";
import { productCategoryEntries } from "../src/lib/productCategories.ts";

test("keeps the reviewed B3.5b Product Family to Component relationship set", () => {
  const validation = validateProductFamilyComponentRelations(
    productCategoryEntries,
    componentSolutions,
  );

  assert.equal(validation.semanticEdges, 4);
  assert.equal(validation.participatingProductFamilySlugs.length, 3);
  assert.equal(validation.receivingComponentSlugs.length, 3);
  assert.deepEqual(validation.duplicateRelationKeys, []);
  assert.deepEqual(validation.brokenProductFamilySlugs, []);
  assert.deepEqual(validation.brokenComponentSlugs, []);
  assert.deepEqual(validation.rawHardcodedHrefTargets, []);
  assert.deepEqual(productFamilyComponentRelations, [
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
  ]);
});

test("exposes only the approved relationships for each participating family", () => {
  assert.deepEqual(
    getProductFamilyComponentRelations(
      "wear-resistant-low-friction-pom-compound",
    ).map((relation) => relation.componentSlug),
    ["bushings-and-sleeves", "precision-plastic-gears"],
  );
  assert.deepEqual(
    getProductFamilyComponentRelations(
      "conductive-antistatic-pom-compound",
    ).map((relation) => relation.componentSlug),
    ["ic-handling-trays"],
  );
  assert.deepEqual(
    getProductFamilyComponentRelations("glass-bead-filled-pom-compound").map(
      (relation) => relation.componentSlug,
    ),
    ["ic-handling-trays"],
  );
  assert.deepEqual(getProductFamilyComponentRelations("base-pom-resin"), []);
});

test("uses the reviewed localized IC Handling Trays owner labels", () => {
  assert.equal(translateExpandedText("IC 周转托盘", "de"), "IC-Handling-Trays");
  assert.equal(
    translateExpandedText("IC 周转托盘", "fr"),
    "Plateaux de manutention pour circuits intégrés",
  );
  assert.equal(
    translateExpandedText("IC 周转托盘", "pt-br"),
    "Bandejas para manuseio de CIs",
  );

  assert.equal(
    productFamilyComponentRelations.filter(
      (relation) => relation.componentSlug === "ic-handling-trays",
    ).length,
    2,
  );
});
