import { expect, test, type Page } from "@playwright/test";

const siteOrigin = "https://www.taiyipolymer.com";
const viewports = [
  { name: "desktop", width: 1920, height: 1080 },
  { name: "mobile", width: 390, height: 844 },
] as const;

const englishRoutes = [
  {
    path: "/components/precision-plastic-gears",
    title: "POM Materials for Precision Plastic Gears | Taiyi Polymer",
    h1: "Precision plastic gears",
    description:
      "Compare load, speed, tooth geometry, wear, tolerance, molding, and validation requirements for precision plastic gears using modified POM.",
  },
  {
    path: "/resources/material-selection",
    title: "Material Selection Resources | Taiyi Polymer",
    h1: "Material Selection Resources",
    description:
      "Start with the part function, failure risk, operating conditions, and required evidence before narrowing a material or grade direction.",
  },
  {
    path: "/resources/material-selection-guide",
    title: "POM Material Selection for Molded Parts | Taiyi Polymer",
    h1: "POM Material Selection for Molded Parts",
    description:
      "A practical POM material selection guide for comparing wear-resistant, low-friction, reinforced, conductive, antistatic, UV, and high-impact compounds.",
  },
  {
    path: "/products/categories/pom",
    title: "Modified POM Compounds & Grades | Taiyi Polymer",
    h1: "Modified POM Compounds by Material Family",
    description:
      "Compare PLATFORM modified POM compounds for wear, impact, reinforcement and electrical control. Explore grade data and request documents for your project.",
  },
  {
    path: "/products/categories/conductive-antistatic-pom-compound",
    title: "Conductive / Antistatic POM | Taiyi Polymer",
    h1: "Conductive / Antistatic POM",
    description:
      "Black PLATFORM® POM provides different surface- and volume-resistivity ranges for conductive or antistatic electrical, conveying, and automation components.",
  },
] as const;

const localizedRoutes = [
  ["/de/components/precision-plastic-gears", "Präzisions-Kunststoffzahnräder | Leitfaden zur Auswahl des POM-Materials", "Präzisionszahnräder aus Kunststoff"],
  ["/fr/components/precision-plastic-gears", "Engrenages de précision en plastique | Guide de sélection des matériaux POM", "Engrenages de précision en plastique"],
  ["/pt-br/components/precision-plastic-gears", "Engrenagens plásticas de precisão | Guia de seleção de materiais POM", "Engrenagens plásticas de precisão"],
  ["/zh/components/precision-plastic-gears", "精密塑料齿轮 | POM 材料选型指南", "精密塑料齿轮"],
  ["/de/resources/material-selection", "MaterialauswahlTechnische Informationen | Taiyi Polymer", "Materialauswahl"],
  ["/fr/resources/material-selection", "Sélection des matériauxInformations techniques | Taiyi Polymer", "Sélection des matériaux"],
  ["/pt-br/resources/material-selection", "Seleção de materiaisInformações técnicas | Taiyi Polymer", "Seleção de materiais"],
  ["/zh/resources/material-selection", "材料选型技术资料 | 台益", "材料选型"],
  ["/de/resources/material-selection-guide", "POM-Materialauswahl für Spritzgussteile | Taiyi Polymer", "Materialauswahl für POM-Spritzgussteile"],
  ["/fr/resources/material-selection-guide", "Sélection du matériau POM pour les pièces moulées par injection | Taiyi Polymer", "Sélection des matériaux des pièces moulées par injection POM"],
  ["/pt-br/resources/material-selection-guide", "Seleção de material POM para peças de moldagem por injeção | Taiyi Polymer", "Seleção de material de peças moldadas por injeção POM"],
  ["/zh/resources/material-selection-guide", "注塑零部件用 POM 材料选型 | 台益", "POM 注塑零部件材料选型"],
  ["/de/products/categories/pom", "POM-Typenkatalog und modifizierte Werkstofffamilien | Taiyi Polymer", "POM-Werkstofffamilien und Typenkatalog"],
  ["/fr/products/categories/pom", "Catalogue de grades POM et famille de matériaux modifiés | Taiyi Polymer", "Famille de matériaux POM et catalogue de grades"],
  ["/pt-br/products/categories/pom", "Catálogo de graus POM e família de materiais modificados | Taiyi Polymer", "Família de materiais POM e catálogo de graus"],
  ["/zh/products/categories/pom", "POM 牌号目录与改性材料家族 | 台益", "POM 材料家族与牌号目录"],
  ["/de/products/categories/conductive-antistatic-pom-compound", "Leitfähiger und antistatischer POM-Werkstofftypenkatalog | Taiyi Polymer", "Leitfähiges und antistatisches POM"],
  ["/fr/products/categories/conductive-antistatic-pom-compound", "Catalogue de grades POM conductrices et antistatiques | Taiyi Polymer", "POM conducteur et antistatique"],
  ["/pt-br/products/categories/conductive-antistatic-pom-compound", "Catálogo de graus POM condutivos e antiestáticos | Taiyi Polymer", "POM condutivo e antiestático"],
  ["/zh/products/categories/conductive-antistatic-pom-compound", "导电与抗静电 POM 牌号目录 | 台益", "导电与抗静电 POM"],
] as const;

const blockExternalRequests = async (page: Page, baseURL?: string) => {
  const origin = new URL(baseURL ?? "http://127.0.0.1:3001").origin;
  await page.route("**/*", (route) =>
    new URL(route.request().url()).origin === origin
      ? route.continue()
      : route.abort(),
  );
};

const expectStableSeoShell = async (
  page: Page,
  path: string,
  title: string,
  h1: string,
) => {
  const response = await page.goto(path, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  expect(response?.status()).toBe(200);
  expect(response?.request().redirectedFrom()).toBeNull();
  await expect(page).toHaveTitle(title);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText(h1);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "index, follow",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${siteOrigin}${path}`,
  );
  await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(6);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    ),
  ).toBe(false);
  expect(
    await page.locator("h1").evaluate((heading) => {
      const box = heading.getBoundingClientRect();
      return box.left >= -1 && box.right <= document.documentElement.clientWidth + 1;
    }),
  ).toBe(true);
};

for (const viewport of viewports) {
  test(`${viewport.name}: English target routes keep the approved metadata and layout`, async ({ page, baseURL }) => {
    await blockExternalRequests(page, baseURL);
    await page.setViewportSize(viewport);

    for (const route of englishRoutes) {
      await expectStableSeoShell(page, route.path, route.title, route.h1);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        route.description,
      );
      expect((await page.title()).match(/Taiyi Polymer/g)?.length ?? 0).toBeLessThanOrEqual(1);
    }
  });

  test(`${viewport.name}: released localized targets retain their exact title and H1`, async ({ page, baseURL }) => {
    test.slow();
    await blockExternalRequests(page, baseURL);
    await page.setViewportSize(viewport);

    for (const [path, title, h1] of localizedRoutes) {
      await expectStableSeoShell(page, path, title, h1);
    }
  });
}

test("Material Selection consumers and structured data use the allowlisted names", async ({ page, baseURL }) => {
  await blockExternalRequests(page, baseURL);

  await page.goto("/resources/material-selection");
  await expect(
    page.locator('[data-slot="directory-row"][href="/resources/material-selection-guide"] strong'),
  ).toHaveText("POM Material Selection for Molded Parts");
  const hubJsonLd = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((scripts) =>
      scripts.flatMap((script) => {
        const parsed = JSON.parse(script.textContent ?? "null");
        return Array.isArray(parsed) ? parsed : [parsed];
      }),
    );
  const collection = hubJsonLd.find((entry) => entry["@type"] === "CollectionPage");
  const breadcrumb = hubJsonLd.find((entry) => entry["@type"] === "BreadcrumbList");
  expect(collection?.name).toBe("Material Selection Resources | Taiyi Polymer");
  expect(collection?.mainEntity?.itemListElement?.[0]?.name).toBe(
    "POM Material Selection for Molded Parts",
  );
  expect(breadcrumb?.itemListElement?.at(-1)?.name).toBe(
    "Material Selection Resources",
  );

  await page.goto("/resources/material-selection-guide");
  const guideJsonLd = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((scripts) =>
      scripts.flatMap((script) => {
        const parsed = JSON.parse(script.textContent ?? "null");
        return Array.isArray(parsed) ? parsed : [parsed];
      }),
    );
  expect(
    guideJsonLd.find((entry) => entry["@type"] === "TechArticle")?.headline,
  ).toBe("POM Material Selection for Molded Parts");

  await page.goto("/resources");
  await expect(
    page.locator('a[href="/resources/material-selection"] strong').filter({
      hasText: "Material Selection Resources",
    }),
  ).toBeVisible();

  await page.goto("/technical-data-sheets?q=material%20selection");
  await expect(
    page.locator('a[href="/resources/material-selection-guide"]'),
  ).toHaveText("POM Material Selection for Molded Parts");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${siteOrigin}/technical-data-sheets`,
  );
});

test("all resource group metadata titles remain stable", async ({ page, baseURL }) => {
  await blockExternalRequests(page, baseURL);
  const groups = [
    [
      "/resources/material-selection",
      "Material Selection Resources | Taiyi Polymer",
      "Start with the part function, failure risk, operating conditions, and required evidence before narrowing a material or grade direction.",
    ],
    [
      "/resources/processing-troubleshooting",
      "Processing & Troubleshooting Resources | Taiyi Polymer",
      "Prepare molding trials, control material condition, and diagnose dimensional or processing problems from traceable evidence.",
    ],
    [
      "/resources/data-validation",
      "Data & Validation Resources | Taiyi Polymer",
      "Compare grade evidence, find technical data, prepare replacement trials, and confirm the documents needed for production release.",
    ],
  ] as const;

  for (const [path, title, description] of groups) {
    await page.goto(path);
    await expect(page).toHaveTitle(title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      description,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `${siteOrigin}${path}`,
    );
  }
});

test("approved links keep their exact destinations", async ({ page, baseURL }) => {
  const origin = new URL(baseURL ?? "http://127.0.0.1:3001").origin;
  await blockExternalRequests(page, baseURL);

  await page.goto("/resources/material-selection");
  await page
    .locator('[data-slot="directory-row"][href="/resources/material-selection-guide"]')
    .click();
  await expect(page).toHaveURL(`${origin}/resources/material-selection-guide`);

  await page.goto("/components/precision-plastic-gears");
  await page.locator('a[href="/resources/pom-gear-material-selection"]').first().click();
  await expect(page).toHaveURL(`${origin}/resources/pom-gear-material-selection`);

  await page.goto("/products/categories/pom");
  const conductiveCard = page.locator(
    'a.product-family-direction[href="/products/categories/conductive-antistatic-pom-compound"]',
  );
  await expect(conductiveCard.locator(".product-family-direction-title")).toHaveText(
    "Conductive / Antistatic POM Grades",
  );
  await conductiveCard.click();
  await expect(page).toHaveURL(
    `${origin}/products/categories/conductive-antistatic-pom-compound`,
  );
});
