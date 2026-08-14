import assert from "node:assert/strict";
import test from "node:test";

import { selectRelatedGrades } from "../src/lib/relatedGrades.ts";

const getId = (item) => item.id;
const sameCategory = (item, current) =>
  item.family === current.family && item.category === current.category;
const sameFamily = (item, current) => item.family === current.family;

const select = (items, currentId) => {
  const current = items.find((item) => item.id === currentId);
  assert.ok(current);

  return selectRelatedGrades({
    items,
    current,
    getId,
    isPrimaryPeer: sameCategory,
    isFallbackPeer: sameFamily,
  });
};

test("keeps both grades in a two-grade group connected", () => {
  const items = [
    { id: "A", family: "POM", category: "Conductive" },
    { id: "B", family: "POM", category: "Conductive" },
  ];

  assert.deepEqual(select(items, "A").map(getId), ["B"]);
  assert.deepEqual(select(items, "B").map(getId), ["A"]);
});

test("preserves the complete three-grade CF-POM cluster", () => {
  const items = [
    { id: "ECF200", family: "POM", category: "Carbon Fiber" },
    { id: "ECF300", family: "POM", category: "Carbon Fiber" },
    { id: "ECF400", family: "POM", category: "Carbon Fiber" },
  ];

  for (const current of items) {
    assert.deepEqual(
      new Set(select(items, current.id).map(getId)),
      new Set(items.filter((item) => item.id !== current.id).map(getId)),
    );
  }
});

test("distributes three links evenly across a large stable peer group", () => {
  const items = ["A", "B", "C", "D", "E", "F"].map((id) => ({
    id,
    family: "POM",
    category: "Base",
  }));
  const inbound = new Map(items.map((item) => [item.id, 0]));

  for (const current of items) {
    const related = select(items, current.id);

    assert.equal(related.length, 3);
    assert.equal(new Set(related.map(getId)).size, 3);
    assert.ok(related.every((item) => item.id !== current.id));

    for (const target of related) {
      inbound.set(target.id, inbound.get(target.id) + 1);
    }
  }

  assert.deepEqual(select(items, "C").map(getId), ["D", "B", "E"]);
  assert.deepEqual([...inbound.values()], [3, 3, 3, 3, 3, 3]);
});

test("keeps engineering recommendations inside the same family and category", () => {
  const items = [
    { id: "PA6-GF15", family: "PA6", category: "Glass Fiber" },
    { id: "PA6-GF30", family: "PA6", category: "Glass Fiber" },
    { id: "PA6-GF50", family: "PA6", category: "Glass Fiber" },
    { id: "PA6-IM", family: "PA6", category: "Impact" },
    { id: "PA66-GF30", family: "PA66", category: "Glass Fiber" },
  ];

  assert.deepEqual(select(items, "PA6-GF30").map(getId), [
    "PA6-GF50",
    "PA6-GF15",
  ]);
});

test("uses a deterministic same-family fallback for a one-grade category", () => {
  const items = [
    { id: "POM-BASE-1", family: "POM", category: "Base" },
    { id: "POM-BASE-2", family: "POM", category: "Base" },
    { id: "POM-BEAD", family: "POM", category: "Glass Bead" },
    { id: "POM-WEAR", family: "POM", category: "Wear" },
    { id: "PA6-GF", family: "PA6", category: "Glass Fiber" },
  ];

  assert.deepEqual(select(items, "POM-BEAD").map(getId), [
    "POM-WEAR",
    "POM-BASE-2",
    "POM-BASE-1",
  ]);
});
