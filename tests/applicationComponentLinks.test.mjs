import assert from "node:assert/strict";
import test from "node:test";
import {
  applicationComponentLinks,
  getApplicationComponentLink,
  getApplicationComponentLinks,
} from "../src/data/applicationComponentLinks.ts";

test("publishes only the first two reviewed Motion Component guides", () => {
  assert.deepEqual(applicationComponentLinks, [
    {
      applicationSlug: "motion-components",
      partLabel: "Precision Gear",
      href: "/components/precision-plastic-gears",
      label: "Precision Plastic Gear Guide",
    },
    {
      applicationSlug: "motion-components",
      partLabel: "Bushing",
      href: "/components/bushings-and-sleeves",
      label: "Bushings & Sleeves Guide",
    },
  ]);
  assert.equal(
    new Set(applicationComponentLinks.map((guide) => guide.href)).size,
    applicationComponentLinks.length,
  );
  assert.equal(
    getApplicationComponentLink("motion-components", "Precision Gear")?.href,
    "/components/precision-plastic-gears",
  );
  assert.equal(
    getApplicationComponentLink("motion-components", "Worm Gear"),
    undefined,
  );
  assert.deepEqual(
    getApplicationComponentLinks("motion-components"),
    applicationComponentLinks,
  );
  assert.deepEqual(getApplicationComponentLinks("automotive"), []);
});
