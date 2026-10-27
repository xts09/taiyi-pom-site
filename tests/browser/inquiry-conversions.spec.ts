import { expect, test } from "@playwright/test";

test.beforeEach(async ({ context }) => {
  await context.route(
    /https:\/\/(?:[^/]+\.)?(?:googletagmanager\.com|google-analytics\.com|googleadservices\.com|doubleclick\.net)\//,
    (route) => route.abort(),
  );
  await context.addInitScript(() => {
    window.localStorage.setItem("taiyi_google_analytics_consent", "granted");
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async () => {} },
    });
  });
});

const scenarios = [
  {
    name: "delivered",
    status: 200,
    body: { delivered: true, fallback: false },
    filtered: false,
    sent: true,
    expectedEvents: [],
  },
  {
    name: "spam-filtered",
    status: 200,
    body: { delivered: true, spamFiltered: true },
    filtered: true,
    sent: true,
    expectedEvents: [],
  },
  {
    name: "delivery-failed",
    status: 502,
    body: { delivered: false, fallback: true },
    filtered: false,
    sent: false,
    expectedEvents: [],
  },
] as const;

for (const path of ["/contact", "/zh/contact"]) {
  for (const scenario of scenarios) {
    test(`local inquiry: ${scenario.name} on ${path} without Google events`, async ({ page }) => {
      let requestCount = 0;
      await page.route("**/api/inquiry", async (route) => {
        requestCount += 1;
        expect(route.request().method()).toBe("POST");
        expect(route.request().postDataJSON()).toMatchObject({
          company: "Regression sample",
          email: "inquiry-test@example.invalid",
          application: "Test part",
          website: scenario.filtered ? "bot-filled" : "",
        });
        await route.fulfill({ status: scenario.status, json: scenario.body });
      });

      await page.goto(path);
      // Production's consent bootstrap defines gtag during navigation.
      // Install the event spy afterwards so it is not overwritten by that script.
      await page.evaluate(() => {
        const browserWindow = window as typeof window & {
          __inquiryEvents: unknown[][];
          gtag: (...args: unknown[]) => void;
        };
        browserWindow.__inquiryEvents = [];
        browserWindow.gtag = (...args: unknown[]) => {
          browserWindow.__inquiryEvents.push(args);
        };
      });
      const form = page.locator("form.contact-form");
      await form.locator('[name="company"]').fill("Regression sample");
      await form.locator('[name="email"]').fill("inquiry-test@example.invalid");
      await form.locator('[name="application"]').fill("Test part");
      await form.locator('[name="message"]').fill("Keep these requirements.");
      if (scenario.filtered) {
        await form.locator('[name="website"]').evaluate((input) => {
          (input as HTMLInputElement).value = "bot-filled";
        });
      }
      await form.locator('button[type="submit"]').click();

      await expect(form.locator('[role="status"]')).toHaveClass(
        scenario.sent ? /contact-submit-status-sent/ : /contact-submit-status-fallback/,
      );
      await expect(form.locator('button[type="submit"]')).toBeEnabled();
      await expect(form.locator('[name="company"]')).toHaveValue(
        scenario.sent ? "" : "Regression sample",
      );
      await expect(form.locator('[name="message"]')).toHaveValue(
        scenario.sent ? "" : "Keep these requirements.",
      );
      expect(requestCount).toBe(1);

      const events = await page.evaluate(() => {
        const browserWindow = window as typeof window & {
          __inquiryEvents: unknown[][];
        };
        return browserWindow.__inquiryEvents
          .filter(
            (event) =>
              event[0] === "event" &&
              ["generate_lead", "contact_fallback", "conversion"].includes(
                String(event[1]),
              ),
          )
          .map((event) => event[1]);
      });
      const diagnostics = await page.evaluate(() => {
        const browserWindow = window as typeof window & {
          __inquiryEvents: unknown[][];
        };
        return browserWindow.__inquiryEvents.filter(
          (event) => event[0] === "event" &&
            ["inquiry_attempt", "inquiry_error"].includes(String(event[1])),
        );
      });
      expect(diagnostics).toHaveLength(0);
      expect(JSON.stringify(diagnostics)).not.toContain("inquiry-test@example.invalid");
      expect(JSON.stringify(diagnostics)).not.toContain("Keep these requirements.");
      expect(events.filter((event) => event !== "conversion")).toEqual(
        scenario.expectedEvents,
      );
      if (scenario.name !== "delivered") {
        expect(events).not.toContain("conversion");
      }
    });
  }

  test(`inquiry submission tolerates unavailable localStorage on ${path}`, async ({ page }) => {
    let requestCount = 0;
    await page.route("**/api/inquiry", async (route) => {
      requestCount += 1;
      expect(route.request().method()).toBe("POST");
      expect(route.request().postDataJSON()).toMatchObject({
        company: "Regression sample",
        email: "inquiry-test@example.invalid",
        application: "Test part",
        attribution: null,
      });
      await route.fulfill({ status: 200, json: { delivered: true, fallback: false } });
    });

    await page.goto(path);
    await page.evaluate(() => {
      Object.defineProperty(window, "localStorage", {
        configurable: true,
        get() {
          throw new DOMException("Storage is denied", "SecurityError");
        },
      });
    });
    const form = page.locator("form.contact-form");
    await form.locator('[name="company"]').fill("Regression sample");
    await form.locator('[name="email"]').fill("inquiry-test@example.invalid");
    await form.locator('[name="application"]').fill("Test part");
    await form.locator('[name="message"]').fill("Keep these requirements.");
    await form.locator('button[type="submit"]').click();

    await expect(form.locator('[role="status"]')).toHaveClass(/contact-submit-status-sent/);
    await expect(form.locator('button[type="submit"]')).toBeEnabled();
    await expect(form.locator('[name="company"]')).toHaveValue("");
    await expect(form.locator('[name="message"]')).toHaveValue("");
    expect(requestCount).toBe(1);
  });
}

test("production hostname records a confirmed inquiry only after consent", async ({ page, context, baseURL }) => {
  await context.route("https://www.taiyipolymer.com/**", async (route) => {
    const requested = new URL(route.request().url());
    if (requested.pathname === "/api/inquiry") {
      await route.fulfill({ status: 200, json: { delivered: true, fallback: false } });
      return;
    }
    const local = new URL(`${requested.pathname}${requested.search}`, baseURL);
    await route.fulfill({ response: await route.fetch({ url: local.toString() }) });
  });
  await page.goto("https://www.taiyipolymer.com/contact");
  await page.evaluate(() => {
    localStorage.removeItem("taiyi_google_analytics_consent");
    localStorage.removeItem("taiyi_google_consent_v2");
  });
  await page.reload();
  await page.getByRole("button", { name: "Accept All" }).click();
  await expect.poll(() => page.evaluate(() => (window as unknown as Record<string, unknown>)["ga-disable-AW-18381447688"])).toBe(false);
  const form = page.locator("form.contact-form");
  await form.locator('[name="company"]').fill("Regression sample");
  await form.locator('[name="email"]').fill("inquiry-test@example.invalid");
  await form.locator('[name="application"]').fill("Test part");
  await form.locator('[name="message"]').fill("Local test only");
  await form.locator('button[type="submit"]').click();
  await expect(form.locator('[role="status"]')).toHaveClass(/contact-submit-status-sent/);
  const events = await page.evaluate(() => {
    const dataLayer = (window as unknown as { dataLayer: IArguments[] }).dataLayer ?? [];
    return dataLayer.map((command) => Array.from(command)).filter((command) => command[0] === "event");
  });
  expect(events.map((event) => event[1])).toContain("generate_lead");
  expect(events.filter((event) => event[1] === "conversion")).toEqual([
    ["event", "conversion", { send_to: "AW-18381447688/VBrBCNWr3qEdEIjE-rxE" }],
  ]);
  expect(JSON.stringify(events)).not.toContain("inquiry-test@example.invalid");
});
