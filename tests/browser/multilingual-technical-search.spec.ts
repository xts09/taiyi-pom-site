import { expect, test } from "@playwright/test";

const languages = [
  { locale: "de", wear: "VERSCHLEISS", search: "Suchen" },
  { locale: "fr", wear: "USURE", search: "Rechercher" },
  { locale: "pt-br", wear: "DESGASTE", search: "Buscar" },
] as const;

for (const { locale, wear, search: searchLabel } of languages) {
  test(`${locale}: mobile filter labels stay inside their own options`, async ({ page, baseURL }) => {
    const origin = new URL(baseURL ?? "http://127.0.0.1:3000").origin;
    await page.route("**/*", (route) =>
      new URL(route.request().url()).origin === origin ? route.continue() : route.abort(),
    );
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/${locale}/technical-data-sheets?family=POM&direction=carbon-fiber`);
    await page.evaluate(() => document.fonts.ready);
    const geometry = await page.locator(".resource-site-filter-options a").evaluateAll((links) => links.map((link) => {
      const box = link.getBoundingClientRect();
      const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
      const escaped: string[] = [];
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.textContent?.trim()) continue;
        const range = document.createRange();
        range.selectNodeContents(node);
        for (const rect of range.getClientRects()) {
          if (rect.right > box.right + 1 || rect.left < box.left - 1) escaped.push(node.textContent);
        }
      }
      return { label: link.textContent, height: box.height, escaped };
    }));
    expect(geometry.length).toBeGreaterThan(10);
    for (const option of geometry) {
      expect(option.escaped, option.label ?? "filter").toEqual([]);
      expect(option.height).toBeGreaterThanOrEqual(44);
    }
  });

  test(`${locale}: localized search, filters, empty state and grade inquiry`, async ({ page, baseURL }) => {
    const origin = new URL(baseURL ?? "http://127.0.0.1:3000").origin;
    await page.route("**/*", (route) =>
      new URL(route.request().url()).origin === origin &&
      ["GET", "HEAD", "OPTIONS"].includes(route.request().method())
        ? route.continue() : route.abort(),
    );
    const path = `/${locale}/technical-data-sheets`;
    await page.goto(path);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
    await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(6);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.taiyipolymer.com${path}`);
    await expect(page.locator(".resource-grade-browse-list a")).toHaveCount(115);
    await expect(page.getByRole("button", { name: searchLabel, exact: true })).toBeVisible();
    expect(await page.locator("main").innerText()).not.toMatch(/[\u3400-\u9fff]/u);

    const search = page.locator('input[type="search"]');
    await search.fill(wear);
    await search.press("Enter");
    await expect(page.locator(`main a[href="/${locale}/products/etm270h-wear-resistant-pom"]`)).toBeVisible();
    expect(await page.locator("main").innerText()).not.toMatch(/[\u3400-\u9fff]/u);

    await page.goto(`${path}?resource=grade-data&family=POM&direction=wear-low-friction`);
    await search.fill("ETM270H");
    await search.press("Enter");
    await expect(search).toHaveValue("ETM270H");
    await expect(page).toHaveURL((url) => ["q", "resource", "family", "direction"].every((key) => url.searchParams.has(key)));
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.taiyipolymer.com${path}`);
    await page.locator(`main a[href="/${locale}/products/etm270h-wear-resistant-pom"]`).click();
    await page.locator('a[href*="#inquiry?"][href*="intent=sample"]').first().click();
    await expect(page).toHaveURL((url) => url.pathname === `/${locale}/contact`);
    await expect(page.locator('input[name="grade"]')).toHaveValue("ETM270H");
    await expect(page.locator('select[name="intent"]')).toHaveValue("sample");

    await page.goto(`${path}?q=no-such-grade-987654321`);
    await expect(page.locator(".resource-search-empty")).toBeVisible();
    expect(await page.locator("main").innerText()).not.toMatch(/[\u3400-\u9fff]/u);
    await page.locator(".resource-search-empty a").click();
    await expect(page).toHaveURL(`${origin}${path}`);
    await expect(search).toHaveValue("");
  });
}
