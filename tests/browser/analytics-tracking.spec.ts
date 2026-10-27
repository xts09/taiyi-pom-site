import { expect, test } from "@playwright/test";

const consentKey = "taiyi_google_analytics_consent";
const attributionKey = "taiyi_marketing_attribution_v1";

test.beforeEach(async ({ context }) => {
  await context.addInitScript(({ consentKey }) => {
    if (!window.localStorage.getItem(consentKey)) {
      window.localStorage.setItem(consentKey, "granted");
    }

    const browserWindow = window as typeof window & {
      __taiyiGtagEvents: unknown[][];
      gtag: (...args: unknown[]) => void;
    };
    browserWindow.__taiyiGtagEvents = [];
    browserWindow.gtag = (...args: unknown[]) => {
      browserWindow.__taiyiGtagEvents.push(args);
    };

    document.addEventListener(
      "click",
      (event) => {
        if (!(event.target instanceof Element)) return;

        const href = event.target
          .closest<HTMLAnchorElement>("a[href]")
          ?.getAttribute("href");
        if (
          href?.startsWith("mailto:") ||
          href?.startsWith("tel:") ||
          href?.includes("wa.me/") ||
          href?.includes("/technical-data-sheets")
        ) {
          event.preventDefault();
        }
      },
      true,
    );
  }, { consentKey });
});

test("captures safe campaign attribution without sending local contact events", async ({
  page,
}) => {
  await page.goto(
    "/contact?utm_source=google&utm_medium=cpc&utm_campaign=pom-global&utm_term=pom+gf25&utm_id=campaign-42&gclid=test-click-id&email=private%40example.com",
  );

  await expect
    .poll(() => page.evaluate((key) => window.localStorage.getItem(key), attributionKey))
    .not.toBeNull();
  await expect
    .poll(() => new URL(page.url()).searchParams.has("email"))
    .toBe(false);

  const attribution = await page.evaluate((key) => {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : null;
  }, attributionKey);

  expect(attribution.firstTouch).toMatchObject({
    landingPage: "/contact",
    source: "google",
    medium: "cpc",
    campaign: "pom-global",
    campaignId: "campaign-42",
    term: "pom gf25",
    clickId: "test-click-id",
    clickIdType: "gclid",
  });
  expect(JSON.stringify(attribution)).not.toContain("private@example.com");

  await page.locator('a[href^="mailto:"]').first().click();
  await page.locator('footer a[href^="tel:"]').click();
  await page.locator('footer a[href*="wa.me/"]').click();

  const contactEvents = await page.evaluate(() => {
    const browserWindow = window as typeof window & {
      __taiyiGtagEvents: unknown[][];
    };
    return browserWindow.__taiyiGtagEvents.filter(
      (event) => event[0] === "event" && event[1] === "contact_click",
    );
  });

  expect(contactEvents).toHaveLength(0);
});

test("keeps technical-data events local and clears attribution when consent is denied", async ({
  page,
}) => {
  await page.goto("/resources?utm_source=google&utm_medium=cpc&utm_term=pom+cf20");

  await expect
    .poll(() => page.evaluate((key) => window.localStorage.getItem(key), attributionKey))
    .not.toBeNull();

  await page.locator('a[href="/technical-data-sheets"]').first().click();
  const technicalDataEvent = await page.evaluate(() => {
    const browserWindow = window as typeof window & {
      __taiyiGtagEvents: unknown[][];
    };
    return browserWindow.__taiyiGtagEvents.find(
      (event) => event[0] === "event" && event[1] === "technical_data_click",
    );
  });
  expect(technicalDataEvent).toBeUndefined();

  await page.evaluate(({ consentKey }) => {
    window.localStorage.setItem(consentKey, "denied");
  }, { consentKey });
  await page.reload();

  await expect
    .poll(() => page.evaluate((key) => window.localStorage.getItem(key), attributionKey))
    .toBeNull();
});
