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

test("rebuilds a localized contact handoff from sanitized context", () => {
  const context = parseContactContext({
    intent: "sample",
    requirement: "private free text",
    source: "  Resource\narticle  ",
    unsupported: "must not propagate",
  });

  assert.equal(
    createContactHref(context, "/fr/contact"),
    "/fr/contact?source=Resource+article&intent=sample",
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

test("keeps workspace free text out of the contact URL", () => {
  const href = createContactHref({
    application: "Precision gear",
    candidates: "XT-100, EGH502H",
    intent: "grade-evaluation",
    material: "POM",
    reference: "DURACON® M90-44",
    requirement: "Stable dimensions in an existing tool",
    source: "POM grade cross-reference workspace",
  });

  const query = href.slice(href.indexOf("?") + 1);
  const context = parseContactContext(
    Object.fromEntries(new URLSearchParams(query)),
  );

  assert.deepEqual(context, {
    application: "Precision gear",
    candidates: "XT-100, EGH502H",
    intent: "grade-evaluation",
    material: "POM",
    reference: "DURACON® M90-44",
    source: "POM grade cross-reference workspace",
  });
  assert.equal(href.includes("requirement="), false);
  assert.equal(
    getContactContextMessage({
      ...context,
      requirement: "Stable dimensions in an existing tool",
    }),
    [
      "Reference grade: DURACON® M90-44",
      "Candidate shortlist: XT-100, EGH502H",
      "Priority requirement: Stable dimensions in an existing tool",
      "Inquiry intent: Grade evaluation",
    ].join("\n"),
  );
});
