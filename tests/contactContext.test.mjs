import assert from "node:assert/strict";
import test from "node:test";

import {
  createContactHref,
  getContactContextLabel,
  getContactContextMessage,
  parseContactContext,
} from "../src/lib/contactContext.ts";

test("builds an encoded contact handoff and preserves useful context", () => {
  const href = createContactHref({
    application: "Automotive / Gear",
    material: "Modified POM Compounds",
    source: "Application detail",
  });

  assert.equal(
    href,
    "/contact?source=Application+detail&material=Modified+POM+Compounds&application=Automotive+%2F+Gear"
  );
});

test("normalizes inbound values and ignores unsupported intents", () => {
  const context = parseContactContext({
    application: ["  Automotive\nparts  ", "ignored"],
    grade: " EGH502H ",
    intent: "unknown",
    material: "Modified POM Compounds",
  });

  assert.deepEqual(context, {
    application: "Automotive parts",
    grade: "EGH502H",
    material: "Modified POM Compounds",
  });
  assert.equal(
    getContactContextLabel(context),
    "Automotive parts / Modified POM Compounds / EGH502H"
  );
});

test("creates an editable message for grade-specific intents", () => {
  assert.equal(
    getContactContextMessage({
      grade: "ETM750",
      intent: "sample",
    }),
    "Grade of interest: ETM750\nInquiry intent: Sample request"
  );
});
