import assert from "node:assert/strict";
import test from "node:test";
import { componentSolutions } from "../src/data/componentSolutions.ts";
import {
  getProductFamilyComponentRelations,
  productFamilyComponentRelations,
  validateProductFamilyComponentRelations,
} from "../src/data/productFamilyComponentRelations.ts";
import { productCategoryEntries } from "../src/lib/productCategories.ts";

test("keeps the B3.5a Product Family to Component registry empty", () => {
  const validation = validateProductFamilyComponentRelations(
    productCategoryEntries,
    componentSolutions,
  );

  assert.equal(validation.semanticEdges, 0);
  assert.deepEqual(validation.duplicateRelationKeys, []);
  assert.deepEqual(validation.brokenProductFamilySlugs, []);
  assert.deepEqual(validation.brokenComponentSlugs, []);
  assert.deepEqual(validation.rawHardcodedHrefTargets, []);
  assert.deepEqual(productFamilyComponentRelations, []);
});

test("exposes empty conditional relations for every current Product Family", () => {
  for (const family of productCategoryEntries) {
    assert.deepEqual(getProductFamilyComponentRelations(family.slug), []);
  }
});
