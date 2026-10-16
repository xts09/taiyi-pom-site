import { expect, test } from "@playwright/test";

const partId = "ev-brake-component";

for (const scenario of [
  {
    name: "English desktop",
    path: `/applications/automotive#automotive-part-${partId}`,
    viewport: { width: 1920, height: 1080 },
  },
  {
    name: "Chinese mobile",
    path: `/zh/applications/automotive#automotive-part-${partId}`,
    viewport: { width: 390, height: 844 },
  },
] as const) {
  test(`opens and reveals an automotive part deep link on ${scenario.name}`, async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    await page.setViewportSize(scenario.viewport);
    await page.goto(scenario.path);

    const target = page.locator(`#automotive-part-${partId}`);
    const targetSystem = page.locator("#application-system-automotive-control-actuation");

    await expect(targetSystem).toBeVisible();
    await expect(page.locator("#automotive-tab-automotive-control-actuation")).toHaveAttribute(
      "aria-selected",
      "true",
    );
    const partLabel = await target.locator("h4").innerText();
    await expect(page.getByRole("button", { name: partLabel, exact: true })).toHaveAttribute("aria-pressed", "true");
    await expect(target).toBeVisible();
    await expect(target).toBeInViewport();
    await expect(
      page.locator("#application-system-automotive-visibility-window"),
    ).toBeHidden();
    expect(consoleErrors).toEqual([]);
  });
}

test("keeps gear candidates separate from structural candidates when changing the pictured part", async ({ page }) => {
  await page.goto("/zh/applications/automotive#material-match");
  const candidates = page.getByRole("region", { name: /所选部件的材料方向/ });
  await expect(candidates.getByRole("link", { name: "查看材料与牌号" })).toHaveAttribute(
    "href", "/zh/products/categories/wear-resistant-low-friction-pom-compound",
  );
  await expect(candidates.getByText("玻璃纤维增强 POM", { exact: true })).toHaveCount(0);

  await page.getByRole("button", { name: "内后视镜底座", exact: true }).click();
  await expect(candidates).toHaveAttribute("aria-label", /内后视镜底座/);
  await expect(candidates.getByRole("link")).toHaveCount(2);
  await expect(candidates.getByText("玻璃纤维增强 POM", { exact: true })).toBeVisible();
  await expect(candidates.getByText("耐磨与低摩擦 POM", { exact: true })).toHaveCount(0);

  await page.getByRole("tab", { name: /燃油管理/ }).click();
  await expect(candidates.getByRole("link")).toHaveCount(0);
  const fuelInquiry = page.locator("#application-system-automotive-fuel-management").getByRole("link", { name: /讨论这个部件/ });
  await expect(fuelInquiry).not.toHaveAttribute("href", /[?&]material=/);
});
