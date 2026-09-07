import assert from "node:assert/strict";
import test from "node:test";
import { getLanguageAlternates, getSitemapLanguageOptions } from "../src/i18n/releaseManifest.ts";
import {
  gearEnduranceTest,
  getGearEnduranceEvidence,
} from "../src/data/gearEnduranceEvidence.ts";

test("the independent case is released only in English and Chinese", () => {
  assert.deepEqual(getSitemapLanguageOptions(gearEnduranceTest.casePath).map(({ href }) => href), [gearEnduranceTest.casePath, `/zh${gearEnduranceTest.casePath}`]);
  assert.deepEqual(Object.keys(getLanguageAlternates(gearEnduranceTest.casePath)).sort(), ["en", "x-default", "zh-CN"].sort());
});

test("preserves the approved grade, assembly conditions and project requirement", () => {
  assert.equal(gearEnduranceTest.grade, "ETM 100P");
  assert.equal(gearEnduranceTest.loadPerSideKg, 20);
  assert.equal(gearEnduranceTest.sampleQuantity, 1);
  assert.equal(gearEnduranceTest.temperatureC, 25);
  assert.equal(gearEnduranceTest.temperatureToleranceC, 5);
  assert.equal(gearEnduranceTest.relativeHumidityPercent, 45);
  assert.equal(gearEnduranceTest.projectRequirementCycles, 27_500);
});

test("retains failure observations and sample scope beside the pass result", () => {
  const english = getGearEnduranceEvidence();
  const chinese = getGearEnduranceEvidence("zh");
  assert.match(english.procedure, /pass against the project requirement/);
  assert.match(english.observations, /wear-induced slipping/);
  assert.match(english.scope, /historical sample and test conditions/);
  assert.match(chinese.procedure, /该样件满足项目规定/);
  assert.match(chinese.observations, /磨损打滑/);
  assert.match(chinese.scope, /该次历史样件和试验条件/);
  for (const copy of [english, chinese]) {
    assert.ok(copy.facts.some(({ value }) => value === "1 pc"));
    assert.ok(copy.facts.some(({ value }) => value.startsWith("27,500")));
  }
});

test("keeps report identifiers, private file paths and unsupported lifetime figures out of public content", () => {
  const publicContent = JSON.stringify([
    gearEnduranceTest,
    getGearEnduranceEvidence(),
    getGearEnduranceEvidence("zh"),
  ]);
  assert.doesNotMatch(publicContent, /MTBF\d{6,}|RT\d{4,}|JS\d{3}|wxid_|\.pdf|ETM100PA|ETM100PU/i);
  assert.doesNotMatch(publicContent, /69[,.]?981|34[,.]?729|34[,.]?792|70[,.]?000/);
});

test("does not expose English or Chinese pilot content on other locales", () => {
  for (const locale of ["de", "fr", "pt-br", "unknown"]) {
    assert.equal(getGearEnduranceEvidence(locale), undefined);
  }
});
