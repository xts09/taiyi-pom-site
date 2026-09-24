import { expect, test, type Page } from "@playwright/test";
import pa66 from "../../content/catalog/products/engineering/spun-9200-pa66-glass-fiber-reinforced.json";
import ppa from "../../content/catalog/products/engineering/spun-4500-ppa-glass-fiber-reinforced.json";

async function noOverflow(page: Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
}

test.beforeEach(async ({ context, baseURL }) => {
  const origin = new URL(baseURL!).origin;
  // A release smoke check never sends inquiries or external analytics.
  await context.route("**/*", route =>
    new URL(route.request().url()).origin === origin && route.request().method() === "GET"
      ? route.continue() : route.abort());
});

test.afterEach(async ({ page }, info) => {
  await info.attach("viewport", { body: await page.screenshot(), contentType: "image/png" });
});

for (const prefix of ["", "/zh"]) {
  test(`${prefix || "en"}: wear records, gallery keyboard and method disclosure`, async ({ page }) => {
    if (prefix) await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${prefix}/resources/pom-wear-benchmark`);
    await expect(page.locator("main table")).toHaveCount(2);
    await expect(page.locator('details[id^="record-"]')).toHaveCount(6);
    await expect(page.locator("#wear-missing-value")).toContainText(prefix ? "未列出的数值" : "not listed");
    await expect(page.locator("main tr").filter({ hasText: "ETM100-NM" })).toContainText("—");
    await page.locator('main table a[href="#record-eps055"]').first().click();
    await expect(page.locator("#record-eps055")).toHaveAttribute("open", "");
    await page.locator("#record-eps055 > summary").click();
    await page.locator('main table a[href="#record-eps055"]').first().click();
    await expect(page.locator("#record-eps055")).toHaveAttribute("open", "");
    await page.goto(`${prefix}/resources/pom-wear-benchmark#record-enm1040`);
    const record = page.locator("#record-enm1040");
    await expect(record).toHaveAttribute("open", "");
    const trigger = record.locator('button[aria-haspopup="dialog"]').nth(1);
    await trigger.click();
    const dialog = page.locator("dialog[open]");
    await expect(dialog).toBeVisible();
    await page.keyboard.press("ArrowRight");
    await expect(dialog.locator("h2")).toContainText(prefix ? "试验后" : "After test");
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(trigger).toBeFocused();
    await record.locator("summary").filter({ hasText: prefix ? "记录来源与方法" : "Record source & method" }).click();
    await expect(record).toContainText(prefix ? "公开摘要未提供" : "Not provided in the public summary");
    await noOverflow(page);
  });
}

for (const prefix of ["", "/zh"]) {
  test(`${prefix || "en"}: SPUN grades use catalog values and request TDS`, async ({ page }) => {
    for (const product of [pa66, ppa]) {
      await page.goto(`${prefix}/products/${product.slug}`);
      await expect(page.locator("h1")).toContainText(product.grade);
      const density = page.locator("main tr").filter({ hasText: "ISO 1183" });
      await expect(density).toContainText(product.density);
      await expect(density).toContainText(/g\/cm[³3]/);
      const tensile = page.locator("main tr").filter({ hasText: "ISO 527" }).filter({ hasText: "MPa" });
      await expect(tensile).toContainText(product.tensile);
      await expect(page.locator(".product-detail-core-property-table tbody tr")).toHaveCount(5);
      if (prefix) {
        await expect(page.locator(".product-detail-summary")).toContainText(`${product.family}`);
        await expect(page.locator(".product-detail-summary")).toContainText("GF45");
      }
      await expect(page.locator('main a[href$=".pdf"]')).toHaveCount(0);
      const tds = page.locator('main a[href*="#inquiry?"][href*="intent=tds"]').first();
      await expect(tds).toHaveAttribute("href", new RegExp(`grade=${product.grade}`));
      await noOverflow(page);
    }
  });
}

for (const prefix of ["/de", "/fr", "/pt-br"]) {
  test(`${prefix}: SPUN details are not released and comparison links open English`, async ({ page }) => {
    for (const [product, polymer] of [[pa66, "pa66"], [ppa, "ppa"]] as const) {
      const response = await page.goto(`${prefix}/products/${product.slug}`);
      expect(response?.status()).toBe(404);
      await page.goto(`${prefix}/products/categories/glass-fiber-reinforced-${polymer}-compound`);
      const card = page.locator(`[data-grade="${product.grade}"]`);
      await expect(card).toHaveAttribute("href", `/products/${product.slug}`);
      await expect(card).toContainText("English content");
      await noOverflow(page);
    }
  });
}

for (const prefix of ["", "/zh"]) {
  test(`${prefix || "en"}: home support and manufacturing proof stay readable`, async ({ page }) => {
    await page.setViewportSize(prefix ? { width: 390, height: 844 } : { width: 1440, height: 900 });
    await page.goto(prefix || "/");
    await page.mouse.wheel(0, 1100);
    await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(0);
    const support = page.locator(".home-collaboration");
    await expect(support.locator(".home-collaboration-principles > li")).toHaveCount(4);
    await support.scrollIntoViewIfNeeded();
    await expect(support.locator("h2")).toBeVisible();
    const proof = page.locator(".home-proof");
    await proof.locator(".home-proof-detail").scrollIntoViewIfNeeded();
    await expect(proof.locator(".home-proof-body > p")).toHaveCount(2);
    await expect(proof.locator(".home-proof-documents > li")).toHaveCount(5);
    await expect(proof.locator(".home-proof-certificate-card")).toHaveCount(4);
    await expect(proof.locator(`a[href="${prefix}/resources/pom-wear-benchmark"]`)).toBeVisible();
    await expect.poll(() => proof.locator(".home-proof-detail").evaluate(
      element => Number(getComputedStyle(element).opacity),
    )).toBe(1);
    await noOverflow(page);
  });
}

test("home anchor, keyboard focus and reduced motion reveal their content", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("/zh#home-collaboration-title");
  const support = page.locator(".home-collaboration");
  await expect(support.locator("h2")).toBeVisible();
  await support.locator(".home-collaboration-action").focus();
  await expect(support.locator(".home-collaboration-action")).toBeFocused();
  await expect.poll(() => support.locator(".home-collaboration-action-wrap").evaluate(
    element => Number(getComputedStyle(element).opacity),
  )).toBe(1);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator(".home-proof-detail").scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator(".home-proof-detail").evaluate(
    element => Number(getComputedStyle(element).opacity),
  )).toBe(1);
  await noOverflow(page);
});

for (const route of ["/", "/zh/resources/pom-wear-benchmark"]) {
  test(`${route}: desktop header states and appropriately sized logos`, async ({ page }, info) => {
    await page.goto(route);
    const header = page.locator("header.site-header");
    if (route === "/") await expect(header).toHaveClass(/site-header--over-hero/);
    else await expect(header).not.toHaveClass(/site-header--over-hero/);
    await info.attach("closed", { body: await page.screenshot(), contentType: "image/png" });
    await page.locator("header .nav-trigger").first().focus();
    await expect(page.locator(".product-menu")).toBeVisible();
    await info.attach("expanded", { body: await page.screenshot(), contentType: "image/png" });
    await page.keyboard.press("Escape");
    await expect(page.locator(".product-menu")).toBeHidden();
    await page.locator(".site-footer-logo").scrollIntoViewIfNeeded();
    await expect.poll(() => page.locator(".site-footer-logo img").evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
    for (const selector of [".brand-logo img", ".site-footer-logo img"]) {
      const logo = page.locator(selector);
      await expect(logo).toHaveAttribute("sizes", /px/);
      await expect.poll(() => logo.evaluate((el: HTMLImageElement) => Boolean(el.currentSrc) && el.complete && el.naturalWidth > 0)).toBe(true);
      const width = await logo.evaluate((el: HTMLImageElement) => new URL(el.currentSrc).searchParams.get("w"));
      expect(Number(width)).toBeLessThanOrEqual(384);
    }
    await noOverflow(page);
  });
}

test("mobile navigation and inquiry context survive language switching", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/zh/resources/pom-wear-benchmark#record-enm1040");
  const menu = page.locator("details.mobile-menu");
  const language = page.locator(".language-switcher--mobile");
  await menu.locator(":scope > summary").click();
  await expect(menu).toHaveAttribute("open", "");
  await language.locator("summary").click();
  await expect(language).toHaveAttribute("open", "");
  await expect(menu).not.toHaveAttribute("open");
  await menu.locator(":scope > summary").click();
  await expect(language).not.toHaveAttribute("open");
  await menu.locator(":scope > summary").click();
  await page.locator('#record-enm1040 a[href*="#inquiry?"]').click();
  await expect(page.locator('input[name="grade"]')).toHaveValue("ENM1040");
  await expect(page.locator('select[name="intent"]')).toHaveValue("grade-evaluation");
  await page.evaluate(() => scrollTo(0, 0));
  await language.locator("summary").click();
  await language.locator('a[hreflang="en"]').click();
  await expect(page).toHaveURL(url => url.pathname === "/contact");
  await expect(page.locator('input[name="grade"]')).toHaveValue("ENM1040");
  await expect(page.locator('select[name="intent"]')).toHaveValue("grade-evaluation");
  const context = new URLSearchParams(new URL(page.url()).hash.slice("#inquiry?".length));
  expect(context.get("source")).toBe("/resources/pom-wear-benchmark#record-enm1040");
  expect(context.get("material")).toBe("POM");
  await noOverflow(page);
});

test("mobile home, resource and wear material layouts", async ({ page }, info) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/", "/zh/resources", "/zh/wear-resistant-low-friction-pom"]) {
    await page.goto(route);
    await expect(page.locator("main h1")).toBeVisible();
    await noOverflow(page);
    await info.attach(route, { body: await page.screenshot(), contentType: "image/png" });
  }
});
