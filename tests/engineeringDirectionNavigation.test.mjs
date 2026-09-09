import assert from "node:assert/strict";
import test from "node:test";
import { getEngineeringDirectionHref } from "../src/data/engineeringDirectionNavigation.ts";
import { getLocalizedHref, isEnglishFallbackHref } from "../src/i18n/releaseManifest.ts";

test("PA glass fiber cards open their corresponding existing landing pages", () => {
  for (const family of ["PA6", "PA66"]) {
    const href = getEngineeringDirectionHref(family, "Glass Fiber Reinforced");
    assert.equal(href, `/products/categories/glass-fiber-reinforced-${family.toLowerCase()}-compound`);
    for (const locale of ["zh", "de", "fr", "pt-br"]) {
      assert.equal(getLocalizedHref(href, locale), href);
      assert.equal(isEnglishFallbackHref(href, locale), true);
    }
  }
});

test("directions without a dedicated landing retain the grade-directory anchor", () => {
  for (const [family, direction] of [["PPA", "Glass Fiber Reinforced"], ["PA6", "Mineral Filled"], ["PA66", "Impact Modified"]]) {
    const href = getEngineeringDirectionHref(family, direction);
    assert.equal(href, "#pom-grades");
    assert.equal(getLocalizedHref(href, "zh"), href);
    assert.equal(href.startsWith("/") && isEnglishFallbackHref(href, "zh"), false);
  }
});
