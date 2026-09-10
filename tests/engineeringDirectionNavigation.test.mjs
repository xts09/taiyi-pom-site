import assert from "node:assert/strict";
import test from "node:test";
import { getEngineeringDirectionHref } from "../src/data/engineeringDirectionNavigation.ts";
import {
  ENGINEERING_GF_DIRECTION,
  engineeringGfPolymers,
  getEngineeringGfLandingRegistration,
} from "../src/data/engineeringGfLandingRegistry.ts";
import { getLocalizedHref, isEnglishFallbackHref } from "../src/i18n/releaseManifest.ts";

test("engineering glass-fiber cards open their corresponding landing pages", () => {
  for (const family of engineeringGfPolymers) {
    const href = getEngineeringDirectionHref(family, ENGINEERING_GF_DIRECTION);
    assert.equal(href, getEngineeringGfLandingRegistration(family).path);
    for (const locale of ["zh", "de", "fr", "pt-br"]) {
      assert.equal(getLocalizedHref(href, locale), `/${locale}${href}`);
      assert.equal(isEnglishFallbackHref(href, locale), false);
    }
  }
});

test("directions without a dedicated landing retain the grade-directory anchor", () => {
  for (const [family, direction] of [["PPA", "GF Mineral Reinforced"], ["PA6", "Mineral Filled"], ["PA66", "Impact Modified"]]) {
    const href = getEngineeringDirectionHref(family, direction);
    assert.equal(href, "#pom-grades");
    assert.equal(getLocalizedHref(href, "zh"), href);
    assert.equal(href.startsWith("/") && isEnglishFallbackHref(href, "zh"), false);
  }
});
