import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { glassFiberCaseStudies, getGlassFiberCasePath, getGlassFiberCaseStudy } from "../src/data/glassFiberCaseStudies.ts";
import { getLanguageAlternates, getSitemapLanguageOptions } from "../src/i18n/releaseManifest.ts";

test("all ten customer accounts have unique routes and complete bilingual stories", () => {
  assert.equal(glassFiberCaseStudies.length, 10);
  assert.equal(new Set(glassFiberCaseStudies.map(getGlassFiberCasePath)).size, 10);
  for (const study of glassFiberCaseStudies) {
    assert.equal(getGlassFiberCaseStudy(study.slug), study);
    for (const locale of ["zh", "en"]) {
      const copy = study.copy[locale];
      for (const field of ["title", "industry", "summary", "customer", "challenge", "result", "stage"]) assert.ok(copy[field]?.trim(), `${study.id}: ${locale}.${field}`);
      assert.equal(copy.solution.length, 2);
      if (locale === "en") assert.doesNotMatch(JSON.stringify(copy), /[\u3400-\u9fff]/);
    }
  }
  assert.equal(getGlassFiberCaseStudy("unpublished-case"), undefined);
});

test("case grades and glass-fiber percentages match canonical product records", () => {
  for (const study of glassFiberCaseStudies) {
    const record = JSON.parse(readFileSync(new URL(`../content/catalog/products/pom/${study.grade.toLowerCase()}-glass-fiber-pom.json`, import.meta.url), "utf8"));
    assert.equal(study.grade, record.grade);
    assert.equal(study.glassFiber, record.glassFiberContent);
  }
  assert.equal(glassFiberCaseStudies[6].grade, "EGH402T");
  assert.equal(glassFiberCaseStudies[7].grade, "EGH502T");
});

test("new case routes publish only English and Chinese with reciprocal alternates", () => {
  for (const study of glassFiberCaseStudies) {
    const path = getGlassFiberCasePath(study);
    assert.deepEqual(getSitemapLanguageOptions(path).map(({ href }) => href), [path, `/zh${path}`]);
    const alternates = getLanguageAlternates(path);
    assert.equal(alternates.en, path);
    assert.equal(alternates["zh-CN"], `/zh${path}`);
    assert.ok(!alternates.de && !alternates.fr && !alternates["pt-BR"]);
  }
});

test("customer validation stages and the seat-plate MFI condition remain explicit", () => {
  const seat = glassFiberCaseStudies[3];
  assert.match(seat.copy.zh.stage, /阶段/);
  assert.match(seat.copy.en.result, /next stage/);
  assert.match(seat.copy.en.solution[0], /8\.5 g\/10 min.*195 °C\/2\.16 kg/);
  assert.match(glassFiberCaseStudies[2].copy.zh.stage, /候选/);
  assert.match(glassFiberCaseStudies[6].copy.zh.stage, /耐久测试/);
  assert.match(glassFiberCaseStudies[9].copy.zh.stage, /小批量/);
  assert.doesNotMatch(JSON.stringify(glassFiberCaseStudies), /EGH20T|EGH25T|已获认证|已通过认证|FDA|NSF|WRAS/);
});
