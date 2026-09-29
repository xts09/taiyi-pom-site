import assert from "node:assert/strict";
import test from "node:test";
import { getWearTestCounts, wearTestEvidence } from "../src/data/wearTestEvidence.ts";

test("adding a repeat changes the record count without adding another grade", () => {
  const before = getWearTestCounts();
  const after = getWearTestCounts([...wearTestEvidence.records, wearTestEvidence.records[0]]);
  assert.equal(after.records, before.records + 1);
  assert.equal(after.grades, before.grades);
  assert.deepEqual(after.groups, before.groups);
});

test("withheld mass values and unconfirmed report methods remain distinct from zero", () => {
  const withheld = wearTestEvidence.records.find(record => record.id === "etm100-nm");
  assert.equal(withheld.loss, null);
  assert.equal(withheld.before, null);
  assert.equal(withheld.after, null);
  for (const record of wearTestEvidence.records) {
    assert.equal(record.source.repeatCount, null);
    assert.equal(record.source.reportNumber, null);
  }
});
