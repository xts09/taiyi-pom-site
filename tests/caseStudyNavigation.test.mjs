import assert from "node:assert/strict";
import test from "node:test";
import { getCaseStudyNavigation, isCaseStudyPath } from "../src/data/caseStudyNavigation.ts";
import { getLocalizedHref, getLanguageAlternates, getSitemapReleasedSourcePaths } from "../src/i18n/releaseManifest.ts";

test("English and Chinese case entry points lead to the standalone overview", () => {
  assert.equal(getLocalizedHref(getCaseStudyNavigation().href), "/case-studies");
  assert.equal(getLocalizedHref(getCaseStudyNavigation("zh").href, "zh"), "/zh/case-studies");
  assert.equal(getCaseStudyNavigation("zh").label, "客户案例");
});

test("unreleased case languages do not expose a localized case collection", () => {
  for (const locale of ["de", "fr", "pt-br"]) assert.equal(getCaseStudyNavigation(locale), null);
});

test("the overview is discoverable with only published language alternates", () => {
  const alternates = getLanguageAlternates("/case-studies");
  assert.ok(Object.values(alternates).some((path) => path.endsWith("/zh/case-studies")));
  assert.ok(!Object.values(alternates).some((path) => /\/(de|fr|pt-br)\/case-studies/.test(path)));
  assert.ok(getSitemapReleasedSourcePaths().includes("/case-studies"));
});

test("case navigation ownership includes case detail paths but not similarly named routes", () => {
  assert.equal(isCaseStudyPath("/case-studies/etm-100p-armrest-gear-endurance"), true);
  assert.equal(isCaseStudyPath("/case-studies"), true);
  for (const path of ["/case-studies-preview", "/components/precision-plastic-gears", "/news/case-studies"]) {
    assert.equal(isCaseStudyPath(path), false);
  }
});
