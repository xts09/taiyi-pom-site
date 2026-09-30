import { expect, test } from "@playwright/test";

const directories = [
  { path: "/products/categories/pom", locale: "en" },
  { path: "/zh/products/categories/pom", locale: "zh" },
  { path: "/products/categories/pa6-compound", locale: "en" },
  { path: "/zh/products/categories/pa6-compound", locale: "zh" },
] as const;

for (const { path, locale } of directories) {
  test(`${path} keeps grade rows and page selection aligned`, async ({ page }) => {
    await page.goto(path);

    const rows = page.locator(".product-directory-row");
    await expect(rows).toHaveCount(10);
    await expect(rows.first().locator(".product-directory-index")).toHaveText("01");
    await expect(rows.first().locator("dl > div")).toHaveCount(4);
    await expect(rows.first()).toHaveAttribute(
      "href",
      new RegExp(`^${locale === "zh" ? "/zh" : ""}/products/`),
    );

    await page.getByRole("button", {
      name: locale === "zh" ? "第 2 页" : "Page 2",
    }).click();

    await expect(page).toHaveURL(new RegExp(`${path}\\?page=2#pom-grades$`));
    await expect(rows).toHaveCount(10);
    await expect(rows.first().locator(".product-directory-index")).toHaveText("11");
    await expect(page.locator("#pom-grades h2")).toBeFocused();
  });
}
