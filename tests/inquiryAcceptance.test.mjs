import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

// Exercise the real compiled form handler without mail, Google traffic, or a browser.
const root = process.cwd();
const componentPath = resolve(root, 'src/components/ContactInquiryForm.tsx');
function fixture({ consent = 'granted', response, fetchError, clipboardPending, pathname = '/contact', formMailError = false } = {}) {
  const events = [], posts = [], clipboard = [], states = [], effects = [], observers = [];
  const storage = new Map(consent ? [['taiyi_google_analytics_consent', consent]] : []);
  let resets = 0, hook = 0;
  const location = { pathname, hostname: 'www.taiyipolymer.com', href: 'https://www.taiyipolymer.com' + pathname };
  const window = {
    location, localStorage: { getItem: k => storage.get(k) ?? null, setItem: (k,v) => storage.set(k,v), removeItem: k => storage.delete(k) },
    gtag: (...args) => { if (formMailError && args[1] === 'form_mail') throw new Error('Ads fixture failure'); events.push(args); }, setTimeout: () => 1, clearTimeout: () => {},
  };
  const react = {
    useEffect: effect => effects.push(effect),
    useState: initial => { const i = hook++; if (!(i in states)) states[i] = initial; return [states[i], v => { states[i] = typeof v === 'function' ? v(states[i]) : v; }]; },
    useRef: initial => { const i = hook++; if (!(i in states)) states[i] = { current: initial }; return states[i]; },
    useSyncExternalStore: (_subscribe, read) => read(),
  };
  const jsx = (type, props) => ({ type, props });
  const mocks = {
    react,
    'react/jsx-runtime': { jsx, jsxs: jsx, Fragment: 'fragment' },
    '@/lib/analyticsAttribution': { readMarketingAttribution: () => undefined, buildAnalyticsPageLocation: v => v, clearMarketingAttribution: () => {} },
    '@/lib/contactDetails': { contactEmail: 'qa@example.invalid' },
    '@/lib/productCategories': { productCategoryOrder: [], pomSubcategoryLabels: {} },
    '@/lib/contactRequirementStorage': { clearContactRequirement: () => {}, selectionWorkspaceContactSource: 'selection' },
    '@/lib/contactContext': {},
    '@/lib/inquiryLimits': { clampInquiryMessage: v => v, inquiryMessageMaxLength: 5000, inquiryClientTimeoutMs: 10000 },
  };
  const context = vm.createContext({
    window, document: { cookie: '' }, navigator: { clipboard: { writeText: async body => { clipboard.push(body); if (clipboardPending) await clipboardPending; } } },
    AbortController, URL, Set, Map, queueMicrotask, process: { env: { NODE_ENV: 'production' } },
    IntersectionObserver: class {
      constructor(callback) { this.callback = callback; this.disconnected = false; observers.push(this); }
      observe() {}
      disconnect() { this.disconnected = true; }
    },
    FormData: class { constructor(form) { this.fields = form.fields; } get(k) { return this.fields[k] ?? null; } },
    fetch: async (url, options) => {
      posts.push({ url, body: JSON.parse(options.body) });
      if (fetchError) throw fetchError;
      const result = typeof response === 'function' ? await response() : response ?? { ok: true, json: async () => ({ delivered: true, fallback: false }) };
      return { status: result.ok ? 200 : 502, ...result };
    },
  });
  const cache = new Map();
  function load(file) {
    if (cache.has(file)) return cache.get(file);
    const fixtureModule = { exports: {} }; cache.set(file, fixtureModule.exports);
    const require = name => {
      if (name in mocks) return mocks[name];
      if (name.startsWith('@/components/ui/')) return new Proxy({}, { get: (_t,k) => String(k) });
      if (name.endsWith('.css')) return { default: {} };
      if (name.startsWith('@/')) return load(resolve(root, 'src', name.slice(2) + '.ts'));
      throw new Error('Unexpected test import: ' + name);
    };
    const code = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 } }).outputText;
    vm.runInContext('(function(require,module,exports){' + code + '\n})', context, { filename: file })(require,fixtureModule,fixtureModule.exports);
    cache.set(file, fixtureModule.exports); return fixtureModule.exports;
  }
  const { ContactInquiryForm } = load(componentPath);
  const render = () => { hook = 0; return ContactInquiryForm({ contextMessageLabels: {}, messages: { inquiryTypeOptions: {}, materialOptionLabels: {}, emailDraft: { subjectPrefix: 'Internal acceptance' } } }); };
  const form = { fields: { company: 'Internal acceptance', email: 'qa@example.invalid', application: 'Fixture', message: 'Not a customer lead' }, reset: () => { resets++; } };
  const event = { preventDefault: () => {}, currentTarget: form };
  const submit = () => render().props.onSubmit(event);
  return { events, posts, clipboard, storage, location, submit, render, effects, observers, resets: () => resets, consentModule: () => load(resolve(root, 'src/lib/googleConsent.ts')) };
}
const names = f => f.events.filter(e => e[0] === 'event').map(e => e[1]);

test('a visible form records one diagnostic view even with repeated observer notifications', () => {
  const f = fixture();
  f.render().props.ref.current = {};
  f.effects[0]();
  assert.equal(f.observers.length, 1);
  f.observers[0].callback([{ isIntersecting: false }]);
  assert.deepEqual(names(f), []);
  f.observers[0].callback([{ isIntersecting: true }]);
  f.observers[0].callback([{ isIntersecting: true }]);
  assert.deepEqual(names(f), ['inquiry_view']);
  assert.equal(f.observers[0].disconnected, true);
});

test('a form without analytics consent does not observe or record visibility', () => {
  for (const consent of [null, 'denied']) {
    const f = fixture({ consent });
    f.render().props.ref.current = {};
    f.effects[0]();
    assert.equal(f.observers.length, 0);
    assert.deepEqual(names(f), []);
  }
});
test('successful delivery creates one lead and clears the form', async () => {
  const f = fixture(); await f.submit();
  assert.equal(f.posts.length, 1); assert.deepEqual(names(f), ['inquiry_attempt', 'form_mail', 'generate_lead', 'conversion']); assert.equal(f.resets(), 1); assert.equal(f.clipboard.length, 0);
  assert.deepEqual(JSON.parse(JSON.stringify(f.events.find(e => e[1] === 'form_mail')[2])), { send_to: 'AW-18381447688' });
  assert.deepEqual(JSON.parse(JSON.stringify(f.events.find(e => e[1] === 'conversion')[2])), { send_to: 'AW-18381447688/VBrBCNWr3qEdEIjE-rxE' });
  assert.ok(!JSON.stringify(f.events).includes('qa@example.invalid'));
});
for (const scenario of [
  { name: 'provider error', response: { ok: false, json: async () => ({ delivered: false, fallback: true }) }, reason: 'delivery_unavailable' },
  { name: '200 fallback', response: { ok: true, json: async () => ({ delivered: false, fallback: true }) }, reason: 'delivery_unavailable' },
  { name: 'delivered flag with fallback', response: { ok: true, json: async () => ({ delivered: true, fallback: true }) }, reason: 'delivery_unavailable' },
  { name: 'rate limiting', response: { ok: false, status: 429, json: async () => ({ error: 'private server detail' }) }, reason: 'rate_limited' },
  { name: 'unavailable service', response: { ok: false, status: 503, json: async () => ({ error: 'private server detail' }) }, reason: 'delivery_unavailable' },
  { name: 'malformed JSON', response: { ok: true, json: async () => { throw new SyntaxError('fixture'); } }, reason: 'invalid_response' },
  { name: 'network error', fetchError: new TypeError('fixture'), reason: 'network' },
]) test(scenario.name + ' opens only a draft, never a success event', async () => {
  const f = fixture(scenario); await f.submit();
  assert.deepEqual(names(f), ['inquiry_attempt', 'form_mail', 'inquiry_error', 'contact_fallback']);
  const diagnostic = f.events.find(e => e[1] === 'inquiry_error');
  assert.equal(diagnostic[2].error_reason, scenario.reason);
  assert.ok(!JSON.stringify(diagnostic).includes('private server detail'));
  assert.ok(!JSON.stringify(diagnostic).includes('qa@example.invalid'));
  assert.equal(f.resets(), 0); assert.equal(f.clipboard.length, 1); assert.match(f.location.href, /^mailto:/);
});
test('spam filtering does not generate a lead', async () => {
  const f = fixture({ response: { ok: true, json: async () => ({ delivered: true, spamFiltered: true }) } }); await f.submit(); assert.deepEqual(names(f), ['inquiry_attempt', 'form_mail']);
});
test('one in-flight submission ignores immediate repeated submit events', async () => {
  let finish; const pending = new Promise(r => finish = r);
  const f = fixture({ response: () => pending }); const first = f.submit(); const second = f.submit();
  const countWhilePending = f.posts.length; finish({ ok: true, json: async () => ({ delivered: true, fallback: false }) }); await Promise.all([first,second]);
  assert.equal(countWhilePending, 1); assert.deepEqual(names(f), ['inquiry_attempt', 'form_mail', 'generate_lead', 'conversion']);
});
test('no choice never sends success events even when consent bootstrap defines gtag', async () => {
  const f = fixture({ consent: null }); await f.submit(); assert.deepEqual(names(f), []); assert.equal(f.resets(), 1);
});
test('declined consent still permits delivery but never a Google success event', async () => {
  const f = fixture({ consent: 'denied' }); await f.submit(); assert.deepEqual(names(f), []); assert.equal(f.resets(), 1);
});
test('same-page withdrawal stops subsequent inquiry events', async () => {
  const f = fixture(); const consent = f.consentModule(); consent.storeGoogleAnalyticsConsent('denied'); consent.updateGoogleAnalyticsConsent('denied'); await f.submit(); assert.deepEqual(names(f), []);
});
test('the submission lock also covers the pending mail-draft fallback', async () => {
  let finish; const pending = new Promise(r => finish = r);
  const f = fixture({ response: { ok: false, json: async () => ({ fallback: true }) }, clipboardPending: pending });
  const first = f.submit(); await new Promise(r => setImmediate(r));
  const second = f.submit(); const count = f.posts.length; finish(); await Promise.all([first, second]);
  assert.equal(count, 1); assert.deepEqual(names(f), ['inquiry_attempt', 'form_mail', 'inquiry_error', 'contact_fallback']);
});
test('accepting again permits a subsequent new delivery event', async () => {
  const f = fixture({ consent: 'denied' }); await f.submit();
  const consent = f.consentModule(); consent.storeGoogleAnalyticsConsent('granted'); consent.updateGoogleAnalyticsConsent('granted'); await f.submit();
  assert.equal(f.posts.length, 2); assert.deepEqual(names(f), ['inquiry_attempt', 'form_mail', 'generate_lead', 'conversion']);
});

for (const pathname of ['/contact', '/de/contact', '/fr/contact', '/pt-br/contact', '/zh/contact']) {
  test('Ads conversion uses delivery status on ' + pathname, async () => {
    const f = fixture({ pathname }); await f.submit();
    assert.deepEqual(names(f), ['inquiry_attempt', 'form_mail', 'generate_lead', 'conversion']);
    assert.equal(f.events.filter(e => e[1] === 'conversion').length, 1);
  });
}

test('a later successful submission records its own conversion', async () => {
  const f = fixture(); await f.submit(); await f.submit();
  assert.equal(f.posts.length, 2);
  assert.equal(f.events.filter(e => e[1] === 'form_mail').length, 2);
  assert.equal(f.events.filter(e => e[1] === 'conversion').length, 2);
});

test('an Ads attempt tracking failure does not prevent delivery', async () => {
  const f = fixture({ formMailError: true }); await f.submit();
  assert.equal(f.posts.length, 1);
  assert.equal(f.resets(), 1);
  assert.deepEqual(names(f), ['inquiry_attempt', 'generate_lead', 'conversion']);
});
