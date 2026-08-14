import assert from "node:assert/strict";
import test from "node:test";
import {
  applicationComponentLinks,
  getApplicationComponentLink,
  getApplicationComponentLinks,
} from "../src/data/applicationComponentLinks.ts";

test("publishes the reviewed Batch D1 and D2 component guides", () => {
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
    {
      applicationSlug: "conveyor-automation",
      partLabel: "Mini Conveyor Chain Plate",
      href: "/components/conveyor-chain-components",
      label: "Conveyor Chain Components Guide",
    },
    {
      applicationSlug: "water-control",
      partLabel: "Valve Spool Assembly",
      href: "/components/valve-spools-and-cartridges",
      label: "Valve Spools & Cartridges Guide",
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
    applicationComponentLinks.slice(0, 2),
  );
  assert.equal(
    getApplicationComponentLink(
      "conveyor-automation",
      "Mini Conveyor Chain Plate",
    )?.href,
    "/components/conveyor-chain-components",
  );
  assert.equal(
    getApplicationComponentLink("water-control", "Valve Spool Assembly")
      ?.href,
    "/components/valve-spools-and-cartridges",
  );
  assert.deepEqual(getApplicationComponentLinks("automotive"), []);
});
