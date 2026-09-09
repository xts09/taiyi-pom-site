import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { applications } from "../src/data/applications.ts";
import { automotivePartMaterials, automotiveSelectionLabels, automotiveWindowCases } from "../src/data/automotiveSelection.ts";
import { getGlassFiberCaseStudy } from "../src/data/glassFiberCaseStudies.ts";
import { automotivePageDesign } from "../src/data/automotivePageDesign.ts";

const automotive = applications.find(item => item.slug === "automotive");

test("automotive selection covers every canonical part with valid linked families", () => {
  assert.deepEqual(Object.keys(automotivePartMaterials).sort(), automotive.parts.map(part => part.id).sort());
  for (const indices of Object.values(automotivePartMaterials)) {
    assert.equal(new Set(indices).size, indices.length);
    for (const index of indices) {
      assert.ok(Number.isInteger(index));
      assert.ok(automotive.materialDirections[index]?.href);
    }
  }
});

test("fuel compatibility and structural cases do not create unsupported part recommendations", () => {
  for (const id of ["fuel-pump-assembly", "fuel-filter-element", "fuel-cap-assembly"]) {
    assert.deepEqual(automotivePartMaterials[id], []);
  }
  for (const id of ["window-regulator", "wiper-motor-gear"]) {
    for (const index of automotivePartMaterials[id]) {
      assert.doesNotMatch(automotive.materialDirections[index].href, /glass-fiber/);
    }
  }
});

test("automotive project references resolve to existing stories and grade records", () => {
  assert.equal(new Set(automotiveWindowCases).size, automotiveWindowCases.length);
  for (const slug of automotiveWindowCases) {
    const study = getGlassFiberCaseStudy(slug);
    assert.ok(study, slug);
    assert.ok(study.copy.zh.stage);
    assert.ok(study.copy.en.stage);
    assert.ok(existsSync(new URL(`../content/catalog/products/pom/${study.grade.toLowerCase()}-glass-fiber-pom.json`, import.meta.url)));
  }
});

test("new automotive interface copy is complete for every released language", () => {
  const keys = Object.keys(automotiveSelectionLabels.en).sort();
  for (const [locale, labels] of Object.entries(automotiveSelectionLabels)) {
    assert.deepEqual(Object.keys(labels).sort(), keys);
    for (const value of Object.values(labels)) {
      assert.ok(value.trim());
      if (locale !== "zh-CN") assert.doesNotMatch(value, /[\u3400-\u9fff]/);
    }
  }
});

test("automotive comparison and part tabs have complete localized content", () => {
  assert.deepEqual(Object.keys(automotivePageDesign).sort(), Object.keys(automotiveSelectionLabels).sort());
  const fields = Object.keys(automotivePageDesign.en).sort();
  for (const [locale, copy] of Object.entries(automotivePageDesign)) {
    assert.deepEqual(Object.keys(copy).sort(), fields);
    assert.equal(copy.uses.length, automotive.materialDirections.length);
    assert.equal(copy.priorities.length, automotive.materialDirections.length);
    for (const field of ["partTitles", "motionLabels", "motionTitles", "caseTitles"]) assert.equal(copy[field].length, automotiveWindowCases.length);
    for (const value of Object.values(copy).flat()) {
      assert.ok(value.trim());
      if (locale !== "zh-CN") assert.doesNotMatch(value, /[\u3400-\u9fff]/);
    }
  }
});
