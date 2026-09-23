import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { resourcePages } from "../src/data/resources.ts";
import zhArticles from "../src/i18n/messages/zh-CN-resource-articles-a1.ts";

test("selection guides lead with technical sections and retain contextual media and matrices", () => {
  const english = resourcePages.find(page => page.slug === "material-selection-guide");
  const chinese = zhArticles["material-selection-guide"];
  for (const page of [english, chinese]) {
    assert.equal(page.articleSections.length, 8);
    assert.equal(page.articleFeatures.some(feature => feature.position === "after-intro"), false);
    const media = page.articleFeatures.find(feature => feature.type === "media");
    assert.equal(media.position, "after-section");
    assert.equal(media.sectionTitle, page.articleSections[0].title);
    assert.equal(media.labels.length, 0);
    assert.equal(page.articleFeatures.filter(feature => feature.type === "matrix").length, 1);
    assert.equal(page.articleFeatures.filter(feature => feature.type === "comparison").length, 1);
  }
});

test("engineering GF comparison precedes its compact grade directory", () => {
  const source = readFileSync(new URL("../src/components/EngineeringGfGradeComparison.tsx", import.meta.url), "utf8");
  const comparisonIndex = source.indexOf("<details");
  const directoryIndex = source.indexOf("<GlassFiberGradeCards");
  assert.ok(comparisonIndex >= 0, "full comparison disclosure must exist");
  assert.ok(directoryIndex >= 0, "grade directory must exist");
  assert.ok(comparisonIndex < directoryIndex);
  assert.match(source, /<GlassFiberGradeCards compact/);
  assert.match(source, /grades\.map/);
  assert.match(source, /href=\{grade\.tdsHref\}/);
  const pom = readFileSync(new URL("../src/components/PomGlassFiberComparison.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(pom, /<GlassFiberGradeCards\s+compact/);
});
