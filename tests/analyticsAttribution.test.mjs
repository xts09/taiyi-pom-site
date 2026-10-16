import assert from "node:assert/strict";
import test from "node:test";

import {
  buildAnalyticsPageLocation,
  captureMarketingAttribution,
  clearMarketingAttribution,
  marketingAttributionStorageKey,
  parseMarketingAttribution,
  readMarketingAttribution,
  sanitizeMarketingAttribution,
} from "../src/lib/analyticsAttribution.ts";

const createStorage = () => {
  const values = new Map();

  return {
    getItem(key) {
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      values.set(key, value);
    },
    removeItem(key) {
      values.delete(key);
    },
  };
};

const installBrowserGlobals = (t, browserWindow) => {
  for (const [key, value] of [
    ["window", browserWindow],
    ["document", { referrer: "" }],
  ]) {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, value });
    t.after(() => {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    });
  }
};

test("parses only approved marketing parameters and keeps a safe landing path", () => {
  const attribution = parseMarketingAttribution(
    "https://www.taiyipolymer.com/contact?utm_source=google&utm_medium=cpc&utm_campaign=pom-global&utm_term=pom+gf25&gclid=test-click-id&email=private%40example.com#form",
    "https://www.google.com/search?q=pom",
    "2026-09-02T08:00:00.000Z",
  );

  assert.deepEqual(attribution, {
    capturedAt: "2026-09-02T08:00:00.000Z",
    landingPage: "/contact",
    referrerHost: "www.google.com",
    source: "google",
    medium: "cpc",
    campaign: "pom-global",
    campaignId: undefined,
    term: "pom gf25",
    content: undefined,
    clickId: "test-click-id",
    clickIdType: "gclid",
  });
  assert.equal(JSON.stringify(attribution).includes("private@example.com"), false);
});

test("returns no attribution when a URL has no marketing signal", () => {
  assert.equal(
    parseMarketingAttribution(
      "https://www.taiyipolymer.com/contact?material=POM",
    ),
    null,
  );
});

test("sanitizes page_location to campaign parameters only", () => {
  assert.equal(
    buildAnalyticsPageLocation(
      "https://www.taiyipolymer.com/contact?utm_source=google&utm_term=pom+supplier&email=private%40example.com#form",
    ),
    "https://www.taiyipolymer.com/contact?utm_source=google&utm_term=pom+supplier",
  );
});

test("preserves first touch and updates last touch", () => {
  const storage = createStorage();

  captureMarketingAttribution(
    "https://www.taiyipolymer.com/?utm_source=google&utm_medium=cpc&utm_campaign=first",
    "",
    storage,
  );
  captureMarketingAttribution(
    "https://www.taiyipolymer.com/contact?utm_source=linkedin&utm_medium=paid&utm_campaign=second",
    "",
    storage,
  );

  const stored = sanitizeMarketingAttribution(
    JSON.parse(storage.getItem(marketingAttributionStorageKey)),
  );

  assert.equal(stored.firstTouch.campaign, "first");
  assert.equal(stored.lastTouch.campaign, "second");
  assert.equal(stored.lastTouch.landingPage, "/contact");
});

test("removes expired attribution", () => {
  const storage = createStorage();
  const capturedAt = "2026-01-01T00:00:00.000Z";

  storage.setItem(
    marketingAttributionStorageKey,
    JSON.stringify({
      firstTouch: { capturedAt, landingPage: "/" },
      lastTouch: { capturedAt, landingPage: "/contact" },
    }),
  );

  assert.equal(
    readMarketingAttribution(storage, Date.parse("2026-04-15T00:00:00.000Z")),
    null,
  );
  assert.equal(storage.getItem(marketingAttributionStorageKey), null);
});

test("default attribution helpers are safe without browser globals", () => {
  assert.equal(readMarketingAttribution(), null);
  assert.equal(captureMarketingAttribution(), null);
  assert.equal(clearMarketingAttribution(), undefined);
});

for (const [name, run] of [
  ["read", () => assert.equal(readMarketingAttribution(), null)],
  ["capture", () => {
    const attribution = captureMarketingAttribution();
    assert.equal(attribution.firstTouch.source, "google");
    assert.equal(attribution.lastTouch.source, "google");
  }],
  ["clear", () => assert.equal(clearMarketingAttribution(), undefined)],
]) {
  test(`${name} tolerates a denied localStorage getter`, (t) => {
    installBrowserGlobals(t, {
      location: { href: "https://www.taiyipolymer.com/?utm_source=google" },
      get localStorage() {
        throw new DOMException("Storage is denied", "SecurityError");
      },
    });
    assert.doesNotThrow(run);
  });
}

test("storage operation failures keep attribution optional", () => {
  const storage = {
    getItem() { throw new DOMException("Storage is denied", "SecurityError"); },
    setItem() { throw new DOMException("Storage is full", "QuotaExceededError"); },
    removeItem() { throw new DOMException("Storage is denied", "SecurityError"); },
  };

  assert.equal(readMarketingAttribution(storage), null);
  assert.equal(captureMarketingAttribution("https://www.taiyipolymer.com/", "", storage), null);
  const attribution = captureMarketingAttribution(
    "https://www.taiyipolymer.com/?utm_source=google",
    "",
    storage,
  );
  assert.equal(attribution.firstTouch.source, "google");
  assert.equal(attribution.lastTouch.source, "google");
  assert.equal(clearMarketingAttribution(storage), undefined);
});

test("expired attribution stays unavailable when removal is denied", () => {
  const capturedAt = "2026-01-01T00:00:00.000Z";
  const storage = {
    getItem: () => JSON.stringify({
      firstTouch: { capturedAt, landingPage: "/" },
      lastTouch: { capturedAt, landingPage: "/contact" },
    }),
    removeItem() { throw new DOMException("Storage is denied", "SecurityError"); },
  };

  assert.equal(
    readMarketingAttribution(storage, Date.parse("2026-04-15T00:00:00.000Z")),
    null,
  );
});

test("injected storage bypasses browser storage and clears saved attribution", (t) => {
  let browserStorageReads = 0;
  installBrowserGlobals(t, {
    get localStorage() {
      browserStorageReads += 1;
      throw new DOMException("Storage is denied", "SecurityError");
    },
  });
  const storage = createStorage();
  const attribution = captureMarketingAttribution(
    "https://www.taiyipolymer.com/?utm_campaign=first",
    "",
    storage,
  );

  assert.deepEqual(readMarketingAttribution(storage), attribution);
  assert.deepEqual(
    captureMarketingAttribution("https://www.taiyipolymer.com/contact", "", storage),
    attribution,
  );
  clearMarketingAttribution(storage);
  assert.equal(readMarketingAttribution(storage), null);
  assert.equal(browserStorageReads, 0);
});
