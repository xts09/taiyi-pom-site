import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const source = ts.transpileModule(readFileSync("src/lib/googleConsent.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;

function fixture({ legacy, raw, blocked = false } = {}) {
  const storage = new Map();
  if (legacy) storage.set("taiyi_google_analytics_consent", legacy);
  if (raw) storage.set("taiyi_google_consent_v2", raw);
  const listeners = new Map(), commands = [], deletedCookies = [];
  let attributionCleared = 0;
  const window = {
    location: { hostname: "www.taiyipolymer.com" },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => { if (blocked) throw new Error("Storage blocked"); storage.set(key, value); },
    },
    addEventListener: (name, callback) => {
      const handlers = listeners.get(name) ?? new Set(); handlers.add(callback); listeners.set(name, handlers);
    },
    removeEventListener: (name, callback) => listeners.get(name)?.delete(callback),
    dispatchEvent: event => { for (const handler of listeners.get(event.type) ?? []) handler(event); },
    gtag: (...args) => commands.push(JSON.parse(JSON.stringify(args))),
  };
  const document = {};
  Object.defineProperty(document, "cookie", {
    get: () => "_ga=analytics; _ga_TEST=session; _gcl_au=ads; required=session",
    set: value => deletedCookies.push(value),
  });
  const api = {};
  vm.runInNewContext(source, {
    exports: api, window, document,
    CustomEvent: class { constructor(type) { this.type = type; } },
    require: name => {
      if (name === "react") return { useSyncExternalStore: (subscribe, read) => { subscribe(() => {}); return read(); } };
      if (name === "@/lib/analyticsAttribution") return { clearMarketingAttribution: () => { attributionCleared++; } };
      throw new Error(`Unexpected import ${name}`);
    },
  });
  return { api, storage, commands, window, deletedCookies, attributionCleared: () => attributionCleared };
}

test("legacy analytics permission never grants advertising and still requires the new choice", () => {
  const { api } = fixture({ legacy: "granted" });
  assert.equal(api.readGoogleAnalyticsConsent(), "granted");
  assert.equal(api.readGoogleAdvertisingConsent(), "denied");
  assert.equal(api.readGoogleConsentPreferences(), null);
});

for (const analytics of ["granted", "denied"]) for (const advertising of ["granted", "denied"]) {
  test(`independent persisted choices ${analytics}/${advertising} produce matching Google signals`, () => {
    const { api, storage, commands } = fixture();
    const preferences = { analytics, advertising };
    api.storeGoogleConsentPreferences(preferences);
    api.updateGoogleConsentPreferences(preferences);
    assert.equal(api.readGoogleAnalyticsConsent(), analytics);
    assert.equal(api.readGoogleAdvertisingConsent(), advertising);
    assert.deepEqual(JSON.parse(storage.get(api.GOOGLE_CONSENT_PREFERENCES_KEY)), { version: 2, ...preferences });
    assert.equal(api.readGoogleConsentPreferences(), api.readGoogleConsentPreferences());
    assert.deepEqual(commands, [["consent", "update", {
      analytics_storage: analytics, ad_storage: advertising, ad_user_data: advertising, ad_personalization: "denied",
    }]]);
  });
}

test("a blocked storage write cannot restore stale granted preferences after withdrawal", () => {
  const { api } = fixture({ blocked: true, raw: JSON.stringify({ version: 2, analytics: "granted", advertising: "granted" }) });
  api.storeGoogleConsentPreferences({ analytics: "denied", advertising: "denied" });
  assert.equal(api.readGoogleAnalyticsConsent(), "denied");
  assert.equal(api.readGoogleAdvertisingConsent(), "denied");
});

test("cross-tab withdrawal refreshes in-memory choices", () => {
  const { api, window, storage } = fixture();
  api.useGoogleConsentPreferences();
  api.storeGoogleConsentPreferences({ analytics: "granted", advertising: "granted" });
  storage.set(api.GOOGLE_CONSENT_PREFERENCES_KEY, JSON.stringify({ version: 2, analytics: "denied", advertising: "denied" }));
  window.dispatchEvent({ type: "storage", key: api.GOOGLE_CONSENT_PREFERENCES_KEY });
  assert.equal(api.readGoogleAnalyticsConsent(), "denied");
  assert.equal(api.readGoogleAdvertisingConsent(), "denied");
});

for (const raw of ["{", "null", '{"version":1,"analytics":"granted","advertising":"granted"}', '{"version":2,"analytics":"granted"}', '{"version":2,"analytics":"yes","advertising":"granted"}']) {
  test(`invalid or obsolete preferences do not grant advertising: ${raw}`, () => {
    const { api } = fixture({ raw });
    assert.equal(api.readGoogleConsentPreferences(), null);
    assert.equal(api.readGoogleAdvertisingConsent(), "denied");
  });
}

test("withdrawing each category clears only its optional cookies", () => {
  const { api, deletedCookies, attributionCleared } = fixture();
  api.clearGoogleAdvertisingCookies();
  assert.ok(deletedCookies.every(value => value.startsWith("_gcl_au=")));
  assert.equal(attributionCleared(), 0);
  deletedCookies.length = 0;
  api.clearGoogleAnalyticsCookies();
  assert.ok(deletedCookies.every(value => value.startsWith("_ga=" ) || value.startsWith("_ga_TEST=")));
  assert.equal(attributionCleared(), 1);
  assert.ok(!deletedCookies.some(value => value.startsWith("required=")));
});
