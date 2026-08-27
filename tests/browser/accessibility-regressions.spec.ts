import { expect, test } from "@playwright/test";

const readFocusStyle = (element: HTMLElement) => {
  const style = window.getComputedStyle(element);

  return {
    boxShadow: style.boxShadow,
    outlineColor: style.outlineColor,
    outlineStyle: style.outlineStyle,
    outlineWidth: Number.parseFloat(style.outlineWidth),
  };
};

test("shared controls expose visible focus in normal and forced-colors modes", async ({
  page,
}) => {
  await page.goto("/contact");

  const company = page.getByLabel("Company");
  await company.focus();
  const fieldFocus = await company.evaluate(readFocusStyle);

  expect(fieldFocus.outlineStyle).not.toBe("none");
  expect(fieldFocus.outlineWidth).toBeGreaterThanOrEqual(2);
  expect(fieldFocus.boxShadow).not.toBe("none");

  await page.emulateMedia({ forcedColors: "active" });
  const submit = page.getByRole("button", {
    name: "Submit Project Requirements",
  });
  await submit.focus();
  const forcedFocus = await submit.evaluate(readFocusStyle);

  expect(forcedFocus.outlineStyle).not.toBe("none");
  expect(forcedFocus.outlineWidth).toBeGreaterThanOrEqual(2);
  expect(forcedFocus.outlineColor).not.toBe("rgba(0, 0, 0, 0)");
});

test("secondary section navigation preserves fragment and focus semantics", async ({
  page,
}) => {
  await page.goto("/products/categories/pom");

  const gradesTab = page
    .locator('[data-slot="secondary-section-tab"]')
    .filter({ hasText: "Grades" })
    .first();
  await gradesTab.focus();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#pom-grades$/);
  await expect(page.locator("#pom-grades")).toBeFocused();
  await expect(gradesTab).toHaveAttribute("aria-current", "location");
});

test("mobile show-more controls a real region and retains keyboard focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/zh/applications/automotive");

  const toggle = page.locator(".application-expandable-toggle").first();
  const controlledId = await toggle.getAttribute("aria-controls");

  expect(controlledId).toBeTruthy();
  expect(controlledId).not.toBe("application-material-directions");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  const region = page.locator(`#${controlledId}`);
  const firstAdditionalItem = region.locator(":scope > *").first();
  await expect(firstAdditionalItem).toBeHidden();
  expect(
    await toggle.evaluate((button, id) => {
      const controlled = document.getElementById(String(id));
      return controlled?.parentElement === button.parentElement;
    }, controlledId),
  ).toBe(true);

  await toggle.focus();
  await page.keyboard.press("Enter");

  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(toggle).toContainText("收起材料方向");
  await expect(firstAdditionalItem).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);

  await page.keyboard.press("Enter");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(firstAdditionalItem).toBeHidden();
});

test("Header application navigation is stable on dark and light surfaces", async ({
  page,
}) => {
  for (const [path, overHero] of [
    ["/", true],
    ["/products", false],
  ] as const) {
    await page.goto(path);

    const header = page.locator("header.site-header");
    if (overHero) {
      await expect(header).toHaveClass(/site-header--over-hero/);
    } else {
      await expect(header).not.toHaveClass(/site-header--over-hero/);
    }

    await page.getByRole("button", { name: "Applications" }).focus();
    const applicationMenu = page.locator(".application-menu");
    await expect(applicationMenu).toBeVisible();
    await expect(
      applicationMenu.locator(".mega-simple-grid-applications a"),
    ).toHaveCount(9);
  }
});

test("runtime sitemap stays at 173 unique source paths across 5 languages", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml");
  expect(response.ok()).toBe(true);

  const xml = await response.text();
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, location]) => location,
  );
  const sourcePaths = new Set(
    locations.map((location) => {
      const pathname = new URL(location).pathname.replace(
        /^\/(?:de|fr|pt-br|zh)(?=\/|$)/,
        "",
      );
      return pathname || "/";
    }),
  );

  expect(locations).toHaveLength(865);
  expect(new Set(locations).size).toBe(865);
  expect(sourcePaths.size).toBe(173);
});
