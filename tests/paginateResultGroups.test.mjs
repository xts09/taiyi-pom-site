import assert from "node:assert/strict";
import test from "node:test";
import { createResultPage } from "../src/lib/paginateResultGroups.ts";

test("keeps the combined result order when a page crosses groups", () => {
  const paging = createResultPage(12, "2", 5);
  const firstGroup = paging.take(["a", "b", "c"]);
  const secondGroup = paging.take(["d", "e", "f", "g"]);
  const thirdGroup = paging.take(["h", "i", "j", "k", "l"]);

  assert.deepEqual([firstGroup, secondGroup, thirdGroup], [[], ["f", "g"], ["h", "i", "j"]]);
  assert.deepEqual([paging.page, paging.first, paging.last, paging.totalPages], [2, 6, 10, 3]);
});

test("clamps invalid and out-of-range page requests", () => {
  assert.equal(createResultPage(12, "999", 5).page, 3);
  assert.equal(createResultPage(12, "-1", 5).page, 1);
  assert.equal(createResultPage(0, "2", 5).first, 0);
});
