import { expect, test } from "@playwright/test";

test.beforeEach(async ({ context }) => {
  await context.route(
    /https:\/\/(?:[^/]+\.)?(?:googletagmanager\.com|google-analytics\.com|googleadservices\.com|doubleclick\.net)\//,
    (route) => route.abort(),
  );
  await context.addInitScript(() => {
    const browserWindow = window as typeof window & {
      __inquiryEvents: unknown[][];
      gtag: (...args: unknown[]) => void;
    };
    browserWindow.__inquiryEvents = [];
    browserWindow.gtag = (...args: unknown[]) => {
      browserWindow.__inquiryEvents.push(args);
    };
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
    expectedEvents: ["generate_lead"],
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
    expectedEvents: ["contact_fallback"],
  },
] as const;

for (const path of ["/contact", "/zh/contact"]) {
  for (const scenario of scenarios) {
    test(`inquiry conversion: ${scenario.name} on ${path}`, async ({ page }) => {
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
      expect(events.filter((event) => event !== "conversion")).toEqual(
        scenario.expectedEvents,
      );
      if (scenario.name !== "delivered") {
        expect(events).not.toContain("conversion");
      }
    });
  }
}
