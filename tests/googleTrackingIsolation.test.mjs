import assert from "node:assert/strict";
import test from "node:test";

import {
  GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE,
  resolveGoogleInternalTrafficDisabled,
} from "../src/lib/googleInternalTraffic.ts";
import { isGoogleTagHostnameAllowed } from "../src/lib/googleTracking.ts";

test("Google tags are restricted to the canonical production hostname", () => {
  assert.equal(isGoogleTagHostnameAllowed("www.taiyipolymer.com"), true);
  assert.equal(isGoogleTagHostnameAllowed("WWW.TAIYIPOLYMER.COM"), true);
  assert.equal(isGoogleTagHostnameAllowed("taiyipolymer.com"), false);
  assert.equal(isGoogleTagHostnameAllowed("localhost"), false);
  assert.equal(isGoogleTagHostnameAllowed("preview.example.com"), false);
});

test("the internal traffic URL command overrides the stored browser preference", () => {
  assert.equal(resolveGoogleInternalTrafficDisabled("1", null), true);
  assert.equal(
    resolveGoogleInternalTrafficDisabled(
      "0",
      GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE,
    ),
    false,
  );
  assert.equal(
    resolveGoogleInternalTrafficDisabled(
      null,
      GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE,
    ),
    true,
  );
  assert.equal(resolveGoogleInternalTrafficDisabled(null, null), false);
});
