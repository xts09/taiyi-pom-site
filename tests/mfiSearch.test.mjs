import assert from "node:assert/strict";
import test from "node:test";

import {
  matchesMfiSearch,
  parseMfiSearch,
  removeMfiSearch,
} from "../src/lib/mfiSearch.ts";

test("parses MFI operators without losing their meaning", () => {
  assert.deepEqual(parseMfiSearch("MFI > 100"), {
    operator: "gt",
    target: 100,
  });
  assert.deepEqual(parseMfiSearch("MFI = 100"), {
    operator: "eq",
    target: 100,
  });
  assert.deepEqual(parseMfiSearch("MFI >= 100"), {
    operator: "gte",
    target: 100,
  });
  assert.deepEqual(parseMfiSearch("MFI 100"), {
    operator: "gte",
    target: 100,
  });
});

test("applies strict, exact, and inclusive comparisons", () => {
  assert.equal(matchesMfiSearch("100", parseMfiSearch("MFI > 100")), false);
  assert.equal(matchesMfiSearch("120", parseMfiSearch("MFI > 100")), true);
  assert.equal(matchesMfiSearch("100", parseMfiSearch("MFI = 100")), true);
  assert.equal(matchesMfiSearch("120", parseMfiSearch("MFI = 100")), false);
  assert.equal(matchesMfiSearch("100", parseMfiSearch("MFI >= 100")), true);
});

test("removes only the MFI expression from mixed searches", () => {
  assert.equal(removeMfiSearch("automotive MFI > 100 UV").trim(), "automotive   UV");
});
