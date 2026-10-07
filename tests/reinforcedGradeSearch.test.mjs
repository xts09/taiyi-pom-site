import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { getReinforcementLabel, matchesReinforcedGradeQuery } from "../src/lib/reinforcedGradeSearch.ts";

const catalog = JSON.parse(
  readFileSync(new URL("../src/generated/catalog.json", import.meta.url), "utf8"),
);
const engineering = catalog.filter((record) => record.kind === "engineering-tds");
const target = (record) => ({
  family: record.family,
  category: record.category,
  filler: record.filler,
  fields: [record.grade, record.family, record.category],
});

test("labels verified reinforcement without presenting combined filler as glass-fiber content", () => {
  const record = engineering.find((item) => item.grade === "EAG150U");
  assert.ok(record);
  assert.equal(getReinforcementLabel(record), "50% GF");
  assert.equal(getReinforcementLabel({ category: "GF Mineral Reinforced", filler: "50" }), "");
  assert.equal(getReinforcementLabel({ category: "Glass Fiber Reinforced", filler: "50?" }), "");
});

test("finds actual PA6 GF50 records from common material and percentage expressions", () => {
  for (const query of [
    "PA6 GF50",
    "PA6-GF50",
    "PA6GF50",
    "pa6 gf 50%",
    "PA6 50% glass fiber",
    "PA6 glass fibre 50",
  ]) {
    const results = engineering.filter((record) =>
      matchesReinforcedGradeQuery(query, target(record)),
    );
    assert.ok(results.some((record) => record.grade === "EAG150U"), query);
    assert.ok(results.every((record) => record.family === "PA6"), query);
    assert.ok(results.every((record) => Number(record.filler) === 50), query);
    assert.ok(results.every((record) => record.category === "Glass Fiber Reinforced"), query);
  }
});

test("selects exact reinforcement percentages without mixing PA6, PA66 or PPA", () => {
  for (const query of ["PA66 GF50", "PPA GF45"]) {
    const family = query.split(" ")[0];
    const percentage = Number(query.match(/\d+$/)[0]);
    const results = engineering.filter((record) =>
      matchesReinforcedGradeQuery(query, target(record)),
    );
    assert.ok(results.length > 0, query);
    assert.ok(results.every((record) => record.family === family), query);
    assert.ok(results.every((record) => Number(record.filler) === percentage), query);
  }
  assert.equal(
    engineering.some((record) => matchesReinforcedGradeQuery("PA6 GF5", target(record))),
    false,
  );
});

test("keeps unverified filler values and mixed glass/mineral grades out of exact GF matches", () => {
  const base = { family: "PA6", category: "Glass Fiber Reinforced", fields: ["PA6"] };
  for (const filler of [undefined, "-", "50?", "50/50", "GF50"]) {
    assert.equal(matchesReinforcedGradeQuery("PA6 GF50", { ...base, filler }), false);
  }
  assert.equal(matchesReinforcedGradeQuery("PA6 GF50", {
    ...base, filler: "50", category: "GF Mineral Reinforced",
  }), false);
  assert.equal(matchesReinforcedGradeQuery("PA6 CF50", { ...base, filler: "50" }), false);
});

test("uses the reviewed POM glass-fiber field and preserves grade and MFI searches", () => {
  const record = catalog.find((item) => item.kind === "product" && item.grade === "EGH402H");
  assert.ok(record);
  const pomTarget = {
    family: "POM", category: record.category, filler: record.glassFiberContent,
    fields: [record.grade, record.category], mfi: "12 g/10 min",
  };
  assert.equal(matchesReinforcedGradeQuery("POM GF20", pomTarget), true);
  assert.equal(matchesReinforcedGradeQuery("POM GF25", pomTarget), false);
  assert.equal(matchesReinforcedGradeQuery("EGH402H", pomTarget), true);
  assert.equal(matchesReinforcedGradeQuery("MFI >= 10", pomTarget), true);
  assert.equal(matchesReinforcedGradeQuery("MFI >= 20", pomTarget), false);
});
