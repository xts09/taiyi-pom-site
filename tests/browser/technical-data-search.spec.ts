import { expect, test } from "@playwright/test";

for (const locale of ["zh", "en"] as const) {
  test(`${locale}: filter links preserve their destination in a new tab`, async ({ page, context, baseURL }) => {
    const origin = new URL(baseURL ?? "http://127.0.0.1:3000").origin;
    await context.route("**/*", (route) =>
      new URL(route.request().url()).origin === origin
        ? route.continue()
        : route.abort(),
    );
    const path = `${locale === "zh" ? "/zh" : ""}/technical-data-sheets`;
    await page.goto(`${path}?q=ETM270H&resource=grade-data`);
    const link = page.locator(".resource-site-filter-options a").filter({ hasText: /^POM$/ });
    const href = await link.getAttribute("href");
    const destination = new URL(href!, origin);
    expect(destination.searchParams.get("q")).toBe("ETM270H");
    expect(destination.searchParams.get("resource")).toBe("grade-data");
    expect(destination.searchParams.get("family")).toBe("POM");
    await expect(link).toHaveAttribute("rel", /\bnofollow\b/);
    const popupPromise = context.waitForEvent("page");
    await link.click({ button: "middle" });
    const popup = await popupPromise;
    await expect(popup).toHaveURL(destination.href);
    await expect(popup.locator('input[type="search"]')).toHaveValue("ETM270H");
    await expect(popup.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
    await expect(popup.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.taiyipolymer.com${path}`);
    await popup.close();
    await link.click();
    await expect(page).toHaveURL(destination.href);
    await page.goBack();
    await expect(page).toHaveURL(`${origin}${path}?q=ETM270H&resource=grade-data`);
  });

  test(`${locale}: changing the search keeps selected filters and reset clears them`, async ({
    page,
    baseURL,
  }) => {
    const origin = new URL(baseURL ?? "http://127.0.0.1:3000").origin;
    await page.route("**/*", (route) =>
      new URL(route.request().url()).origin === origin
        ? route.continue()
        : route.abort(),
    );

    const path = `${locale === "zh" ? "/zh" : ""}/technical-data-sheets`;
    const filters = new URLSearchParams({
      resource: "grade-data",
      family: "POM",
      direction: "wear-low-friction",
    });
    await page.goto(`${path}?${filters}`);
    const search = page.locator('input[type="search"]');
    await search.fill("ETM270H");
    await search.press("Enter");

    await expect(page).toHaveURL((url) =>
      url.searchParams.get("q") === "ETM270H",
    );
    const resultUrl = new URL(page.url());
    for (const [key, value] of filters) {
      expect(resultUrl.searchParams.get(key)).toBe(value);
    }
    await expect(
      page.locator(`main a[href="${locale === "zh" ? "/zh" : ""}/products/etm270h-wear-resistant-pom"]`),
    ).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, follow",
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://www.taiyipolymer.com${path}`,
    );

    await search.fill("");
    await search.press("Enter");
    await expect(page).toHaveURL((url) => !url.searchParams.get("q"));
    for (const [key, value] of filters) {
      expect(new URL(page.url()).searchParams.get(key)).toBe(value);
    }

    await page.goBack();
    await expect(search).toHaveValue("ETM270H");
    await page.locator(".resource-site-filter-head a").click();
    await expect(page).toHaveURL(`${origin}${path}`);
    await expect(search).toHaveValue("");
  });
}
