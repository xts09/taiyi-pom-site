import { expect, test } from "@playwright/test";

for (const locale of ["zh", "en"] as const) {
  test(`${locale}: contextual inquiry opens at the form and handles a new hash`, async ({ page, baseURL }) => {
    const origin = new URL(baseURL ?? "http://127.0.0.1:3000").origin;
    await page.route("**/*", (route) =>
      new URL(route.request().url()).origin === origin &&
      ["GET", "HEAD", "OPTIONS"].includes(route.request().method())
        ? route.continue()
        : route.abort(),
    );
    await page.setViewportSize({ width: 390, height: 844 });
    const prefix = locale === "zh" ? "/zh" : "";

    await page.goto(`${prefix}/contact`);
    await expect(page.locator("h1")).toBeInViewport();
    expect(await page.evaluate(() => window.scrollY)).toBe(0);

    await page.goto(`${prefix}/products/etm270h-wear-resistant-pom`);
    await page.locator('a[href*="#inquiry?"][href*="intent=sample"]').first().click();
    await expect(page).toHaveURL((url) => url.pathname === `${prefix}/contact`);
    await expect(page.locator('input[name="grade"]')).toHaveValue("ETM270H");
    await expect(page.locator('select[name="intent"]')).toHaveValue("sample");
    const panel = page.locator("#inquiry");
    await expect(panel).toBeFocused();
    await expect(page.locator('input[name="company"]')).toBeInViewport();
    const panelBox = await panel.boundingBox();
    const headerBox = await page.locator("header").first().boundingBox();
    expect(panelBox!.y).toBeGreaterThanOrEqual(headerBox!.y + headerBox!.height);
    expect(panelBox!.y).toBeLessThan(160);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href", `https://www.taiyipolymer.com${prefix}/contact`,
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "index, follow");

    await page.locator('input[name="company"]').fill("Browser verification only");
    await page.evaluate(() => {
      window.location.hash = "inquiry?grade=EHI202T&intent=tds&source=grade-detail";
    });
    await expect(page.locator('input[name="grade"]')).toHaveValue("EHI202T");
    await expect(page.locator('select[name="intent"]')).toHaveValue("tds");
    await expect(panel).toBeFocused();
    await expect(page.locator('input[name="company"]')).toHaveValue("Browser verification only");
    await page.goBack();
    await expect(page.locator('input[name="grade"]')).toHaveValue("ETM270H");
    await expect(page.locator('input[name="company"]')).toHaveValue("Browser verification only");
  });
}
