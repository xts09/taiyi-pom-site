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
    const targetSystem = page
      .locator('details[name="automotive-systems"]')
      .filter({ has: target });

    await expect(targetSystem).toHaveAttribute("open", "");
    await expect(page.locator(`#automotive-tab-${partId}`)).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await expect(page.locator(`#automotive-panel-${partId}`)).toBeVisible();
    await expect(target).toBeVisible();
    await expect(target).toBeInViewport();
    await expect(
      page.locator('details[name="automotive-systems"]').first(),
    ).not.toHaveAttribute("open", "");
    expect(consoleErrors).toEqual([]);
  });
}
