import assert from "node:assert/strict";
import test from "node:test";
import {
  componentMaterialDirectionRelations,
  getComponentMaterialDirectionRelations,
  resolveMaterialDirectionOwners,
  validateComponentMaterialDirections,
} from "../src/data/componentMaterialDirections.ts";
import { componentSolutionDetails } from "../src/data/componentSolutionDetails.ts";
import { translateExpandedContent } from "../src/i18n/expandedLocaleContent.ts";
import { chineseBushingsAndSleevesDetail } from "../src/i18n/messages/zh-CN-component-details-a.ts";
import {
  chineseConveyorChainComponentsDetail,
  chineseValveSpoolsAndCartridgesDetail,
} from "../src/i18n/messages/zh-CN-component-details-b.ts";
import {
  chineseIcHandlingTraysDetail,
  chineseTextileGuideComponentsDetail,
} from "../src/i18n/messages/zh-CN-component-details-c.ts";
import { chinesePrecisionPlasticGearsDetail } from "../src/i18n/messages/zh-CN-components.ts";

const chineseDetails = [
  chinesePrecisionPlasticGearsDetail,
  chineseBushingsAndSleevesDetail,
  chineseConveyorChainComponentsDetail,
  chineseValveSpoolsAndCartridgesDetail,
  chineseTextileGuideComponentsDetail,
  chineseIcHandlingTraysDetail,
];

test("validates the normalized B1 component material directions", () => {
  const validation = validateComponentMaterialDirections(
    componentSolutionDetails,
  );

  // Review snapshot only. The counts are computed by the Registry and should
  // change only after a deliberate material-direction review.
  assert.equal(validation.existingMaterialDirections, 22);
  assert.equal(validation.stableDirectionIds, 22);
  assert.equal(validation.targetRelations, 22);
  assert.deepEqual(validation.duplicateDirectionIds, []);
  assert.deepEqual(validation.duplicateRelationIds, []);
  assert.deepEqual(validation.missingTargetDirectionIds, []);
  assert.deepEqual(validation.orphanTargetDirectionIds, []);
  assert.deepEqual(validation.brokenComponentSlugs, []);
  assert.deepEqual(validation.brokenFamilySlugs, []);
  assert.deepEqual(validation.brokenDirectoryIds, []);
  assert.deepEqual(validation.invalidDirectoryGroupIds, []);
  assert.deepEqual(validation.rawHardcodedHrefTargets, []);
  assert.deepEqual(validation.catalogValueCopies, []);
});

test("keeps the target registry in the same reviewed order as the page copy", () => {
  for (const component of componentSolutionDetails) {
    assert.deepEqual(
      getComponentMaterialDirectionRelations(component.slug).map(
        (relation) => relation.id,
      ),
      component.materialDirections.map((direction) => direction.id),
      component.slug,
    );
  }
});

test("keeps stable material-direction IDs identical across English and Chinese", () => {
  const chineseBySlug = new Map(
    chineseDetails.map((component) => [component.slug, component]),
  );

  for (const component of componentSolutionDetails) {
    assert.deepEqual(
      chineseBySlug
        .get(component.slug)
        ?.materialDirections.map((direction) => direction.id),
      component.materialDirections.map((direction) => direction.id),
      component.slug,
    );
  }
});

test("preserves stable material-direction IDs in generated locales", () => {
  for (const locale of ["de", "fr", "pt-br"]) {
    for (const component of chineseDetails) {
      const localized = translateExpandedContent(component, locale);

      assert.deepEqual(
        localized.materialDirections.map((direction) => direction.id),
        component.materialDirections.map((direction) => direction.id),
        `${locale}:${component.slug}`,
      );
    }
  }
});

test("resolves every B1 target to existing family or directory owners", () => {
  const resolved = Object.fromEntries(
    componentSolutionDetails.map((component) => [
      component.slug,
      getComponentMaterialDirectionRelations(component.slug).map(
        (relation) => ({
          id: relation.id,
          owners: resolveMaterialDirectionOwners(relation.target).map(
            (owner) => owner.id,
          ),
        }),
      ),
    ]),
  );

  assert.equal(
    componentMaterialDirectionRelations.every(
      (relation) => resolveMaterialDirectionOwners(relation.target).length > 0,
    ),
    true,
  );

  assert.deepEqual(resolved["precision-plastic-gears"], [
    {
      id: "precision-plastic-gears-balanced-unfilled-pom",
      owners: ["base-pom-resin"],
    },
    {
      id: "precision-plastic-gears-wear-low-friction-pom",
      owners: ["wear-resistant-low-friction-pom-compound"],
    },
    {
      id: "precision-plastic-gears-reinforced-pom",
      owners: ["glass-fiber-reinforced-pom-compound"],
    },
  ]);

  assert.deepEqual(resolved["valve-spools-and-cartridges"].at(-1), {
    id: "valve-spools-and-cartridges-pa-ppa-structural-option",
    owners: ["pa6-compound", "pa66-compound", "ppa-compound"],
  });

  assert.deepEqual(resolved["ic-handling-trays"], [
    {
      id: "ic-handling-trays-static-control-pom",
      owners: ["conductive-antistatic-pom-compound"],
    },
    {
      id: "ic-handling-trays-dimensionally-controlled-reinforced-pom",
      owners: [
        "glass-fiber-reinforced-pom-compound",
        "glass-bead-filled-pom-compound",
      ],
    },
    {
      id: "ic-handling-trays-unfilled-pom-non-esds-fixtures",
      owners: ["base-pom-resin"],
    },
    {
      id: "ic-handling-trays-ppa-high-temperature-option",
      owners: ["ppa-compound"],
    },
  ]);
});
