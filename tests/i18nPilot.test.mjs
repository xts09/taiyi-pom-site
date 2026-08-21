import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { getLocalizedLocale, localizedLocales } from "../src/i18n/config.ts";
import de from "../src/i18n/messages/de.ts";
import en from "../src/i18n/messages/en.ts";
import fr from "../src/i18n/messages/fr.ts";
import ptBR from "../src/i18n/messages/pt-BR.ts";
import zhCN from "../src/i18n/messages/zh-CN.ts";
import deProductFunnel from "../src/i18n/messages/de-product-funnel.ts";
import frProductFunnel from "../src/i18n/messages/fr-product-funnel.ts";
import ptBRProductFunnel from "../src/i18n/messages/pt-BR-product-funnel.ts";
import zhCNProductFunnel from "../src/i18n/messages/zh-CN-product-funnel.ts";
import {
  basePomGradeSlugs,
  getLocalizedCategoryLabel,
  getLocalizedCategoryMessages,
  getLocalizedGradeCategoryLabel,
  getLocalizedGradeCategorySourcePath,
  getLocalizedGradeMessages,
  localizedCategoryProfileSlugs,
  localizedGradeProfileSlugs,
  localizedProductCategorySlugs,
  localizedProductGradeSlugs,
  xt100FeaturedPropertyLabels,
} from "../src/i18n/productFunnelTypes.ts";
import {
  getLanguageAlternates,
  getLocalizedHref,
  getLocalizedContactPath,
  getLocalizedHomePath,
  getLocalizedProductsPath,
  getLanguageOptions,
  getSitemapLanguageOptions,
  contactLanguageAlternates,
  contactSitemapLanguageOptions,
  homeLanguageAlternates,
  homeSitemapLanguageOptions,
  isEnglishFallbackHref,
  isLocalizedReleaseIndexable,
  isReleaseSurfaceEnabled,
  localizedReleaseManifest,
  productsLanguageAlternates,
  productsLanguageOptions,
  productsSitemapLanguageOptions,
} from "../src/i18n/releaseManifest.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");

const shapeOf = (value) => {
  if (Array.isArray(value)) {
    return value.map(shapeOf);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, shapeOf(child)]),
    );
  }

  return typeof value;
};

test("defines only the approved localized routes", () => {
  assert.deepEqual(
    localizedLocales.map(
      ({ locale, urlSegment, htmlLang, openGraphLocale }) => ({
        locale,
        urlSegment,
        htmlLang,
        openGraphLocale,
      }),
    ),
    [
      {
        locale: "de",
        urlSegment: "de",
        htmlLang: "de",
        openGraphLocale: "de_DE",
      },
      {
        locale: "fr",
        urlSegment: "fr",
        htmlLang: "fr",
        openGraphLocale: "fr_FR",
      },
      {
        locale: "pt-BR",
        urlSegment: "pt-br",
        htmlLang: "pt-BR",
        openGraphLocale: "pt_BR",
      },
      {
        locale: "zh-CN",
        urlSegment: "zh",
        htmlLang: "zh-CN",
        openGraphLocale: "zh_CN",
      },
    ],
  );
  assert.equal(getLocalizedLocale("es"), undefined);
});

test("all localized dictionaries match the complete English message shape", () => {
  const expectedShape = shapeOf(en);

  for (const messages of [de, fr, ptBR, zhCN]) {
    assert.deepEqual(shapeOf(messages), expectedShape);
    assert.equal(messages.Home.materials.items.length, 5);
    assert.equal(messages.Home.qualification.steps.length, 4);
    assert.equal(messages.Home.quality.certifications.length, 4);
    assert.equal(messages.Home.exportNetwork.routes.length, 4);
    assert.equal(
      messages.Contact.form.materialOptionLabels["Base POM Resin"].length > 0,
      true,
    );
    assert.equal(messages.Products.selection.paths.length, 4);
    assert.equal(messages.Products.families.items.length, 6);
  }

  assert.notEqual(de.Home.hero.title, en.Home.hero.title);
  assert.notEqual(fr.Contact.hero.title, en.Contact.hero.title);
  assert.notEqual(ptBR.Contact.form.submit, en.Contact.form.submit);
  assert.notEqual(de.Products.hero.title, en.Products.hero.title);
  assert.notEqual(fr.Products.hero.title, en.Products.hero.title);
  assert.notEqual(ptBR.Products.hero.title, en.Products.hero.title);
  assert.notEqual(zhCN.Home.hero.title, en.Home.hero.title);
  assert.notEqual(zhCN.Products.hero.title, en.Products.hero.title);
  assert.notEqual(zhCN.Contact.form.submit, en.Contact.form.submit);
});

test("the release manifest publishes only the approved conversion funnel pages", () => {
  assert.deepEqual(localizedReleaseManifest.home, {
    sourcePath: "/",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.products, {
    sourcePath: "/products",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.basePomCategory, {
    sourcePath: "/products/categories/base-pom-resin",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.glassBeadPomCategory, {
    sourcePath: "/products/categories/glass-bead-filled-pom-compound",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.glassFiberPomCategory, {
    sourcePath: "/products/categories/glass-fiber-reinforced-pom-compound",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.highImpactPomCategory, {
    sourcePath: "/products/categories/high-impact-pom-compound",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.etm450Grade, {
    sourcePath: "/products/etm450-base-pom-resin",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.etm750Grade, {
    sourcePath: "/products/etm750-base-pom-resin",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.xt100Grade, {
    sourcePath: "/products/xt-100-base-pom-resin",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.egb25Grade, {
    sourcePath: "/products/egb25-glass-bead-pom",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.egh502hGrade, {
    sourcePath: "/products/egh502h-glass-fiber-pom",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.ehi402tGrade, {
    sourcePath: "/products/ehi402t-high-impact-pom",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.edr180Grade, {
    sourcePath: "/products/edr180-high-impact-pom",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.technicalDataSheets, {
    sourcePath: "/technical-data-sheets",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });
  assert.deepEqual(localizedReleaseManifest.contact, {
    sourcePath: "/contact",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  });

  assert.deepEqual(homeLanguageAlternates, {
    en: "/",
    de: "/de",
    fr: "/fr",
    "pt-BR": "/pt-br",
    "zh-CN": "/zh",
    "x-default": "/",
  });
  assert.deepEqual(productsLanguageAlternates, {
    en: "/products",
    de: "/de/products",
    fr: "/fr/products",
    "pt-BR": "/pt-br/products",
    "zh-CN": "/zh/products",
    "x-default": "/products",
  });
  assert.deepEqual(contactLanguageAlternates, {
    en: "/contact",
    de: "/de/contact",
    fr: "/fr/contact",
    "pt-BR": "/pt-br/contact",
    "zh-CN": "/zh/contact",
    "x-default": "/contact",
  });
  assert.deepEqual(
    productsLanguageOptions.map(({ localeKey, hreflang, href }) => ({
      localeKey,
      hreflang,
      href,
    })),
    [
      { localeKey: "en", hreflang: "en", href: "/products" },
      { localeKey: "de", hreflang: "de", href: "/de/products" },
      { localeKey: "fr", hreflang: "fr", href: "/fr/products" },
      {
        localeKey: "pt-br",
        hreflang: "pt-BR",
        href: "/pt-br/products",
      },
      {
        localeKey: "zh",
        hreflang: "zh-CN",
        href: "/zh/products",
      },
    ],
  );

  for (const locale of localizedLocales) {
    assert.equal(
      getLocalizedHomePath(locale.urlSegment),
      `/${locale.urlSegment}`,
    );
    assert.equal(
      getLocalizedProductsPath(locale.urlSegment),
      `/${locale.urlSegment}/products`,
    );
    assert.equal(
      getLocalizedHref("/products#product-families", locale.urlSegment),
      `/${locale.urlSegment}/products#product-families`,
    );
    assert.equal(
      getLocalizedContactPath(locale.urlSegment),
      `/${locale.urlSegment}/contact`,
    );
    assert.equal(
      getLocalizedHref("/contact?source=home", locale.urlSegment),
      `/${locale.urlSegment}/contact?source=home`,
    );
    for (const categorySlug of localizedProductCategorySlugs) {
      assert.equal(
        getLocalizedHref(
          `/products/categories/${categorySlug}`,
          locale.urlSegment,
        ),
        `/${locale.urlSegment}/products/categories/${categorySlug}`,
      );
    }
    for (const slug of localizedProductGradeSlugs) {
      assert.equal(
        getLocalizedHref(`/products/${slug}`, locale.urlSegment),
        `/${locale.urlSegment}/products/${slug}`,
      );
    }
    assert.equal(
      getLocalizedHref("/technical-data-sheets", locale.urlSegment),
      `/${locale.urlSegment}/technical-data-sheets`,
    );
    assert.equal(
      isEnglishFallbackHref("/technical-data-sheets", locale.urlSegment),
      false,
    );
    assert.equal(
      getLocalizedHref("/applications", locale.urlSegment),
      "/applications",
    );
    assert.equal(
      isEnglishFallbackHref("/applications", locale.urlSegment),
      true,
    );
    assert.equal(
      getLocalizedHref("/products/xt-100", locale.urlSegment),
      "/products/xt-100",
    );
    assert.equal(
      getLocalizedHref(
        getLocalizedGradeCategorySourcePath("egb25-glass-bead-pom"),
        locale.urlSegment,
      ),
      `/${locale.urlSegment}/products/categories/glass-bead-filled-pom-compound`,
    );
    assert.equal(
      getLocalizedHref(
        getLocalizedGradeCategorySourcePath("egh502h-glass-fiber-pom"),
        locale.urlSegment,
      ),
      `/${locale.urlSegment}/products/categories/glass-fiber-reinforced-pom-compound`,
    );
    for (const slug of ["ehi402t-high-impact-pom", "edr180-high-impact-pom"]) {
      assert.equal(
        getLocalizedHref(
          getLocalizedGradeCategorySourcePath(slug),
          locale.urlSegment,
        ),
        `/${locale.urlSegment}/products/categories/high-impact-pom-compound`,
      );
    }
  }

  assert.deepEqual(getLanguageOptions("/about"), []);
  assert.deepEqual(getSitemapLanguageOptions("/about"), []);
  assert.deepEqual(homeSitemapLanguageOptions, getLanguageOptions("/"));
  assert.deepEqual(productsSitemapLanguageOptions, productsLanguageOptions);
  assert.deepEqual(
    contactSitemapLanguageOptions,
    getLanguageOptions("/contact"),
  );
  assert.equal(isLocalizedReleaseIndexable("/"), true);
  assert.equal(isLocalizedReleaseIndexable("/products"), true);
  assert.equal(
    isLocalizedReleaseIndexable("/products/categories/base-pom-resin"),
    true,
  );
  assert.equal(
    isLocalizedReleaseIndexable(
      "/products/categories/glass-bead-filled-pom-compound",
    ),
    true,
  );
  assert.equal(
    isLocalizedReleaseIndexable(
      "/products/categories/glass-fiber-reinforced-pom-compound",
    ),
    true,
  );
  assert.equal(
    isLocalizedReleaseIndexable(
      "/products/categories/high-impact-pom-compound",
    ),
    true,
  );
  assert.equal(
    isLocalizedReleaseIndexable("/products/xt-100-base-pom-resin"),
    true,
  );
  assert.equal(
    isLocalizedReleaseIndexable("/products/etm450-base-pom-resin"),
    true,
  );
  assert.equal(
    isLocalizedReleaseIndexable("/products/etm750-base-pom-resin"),
    true,
  );
  assert.equal(
    isLocalizedReleaseIndexable("/products/ehi402t-high-impact-pom"),
    true,
  );
  assert.equal(
    isLocalizedReleaseIndexable("/products/edr180-high-impact-pom"),
    true,
  );
  assert.equal(isLocalizedReleaseIndexable("/technical-data-sheets"), true);
  assert.equal(isLocalizedReleaseIndexable("/contact"), true);
  assert.equal(isLocalizedReleaseIndexable("/about"), false);

  assert.deepEqual(getLanguageAlternates("/products/xt-100-base-pom-resin"), {
    en: "/products/xt-100-base-pom-resin",
    de: "/de/products/xt-100-base-pom-resin",
    fr: "/fr/products/xt-100-base-pom-resin",
    "pt-BR": "/pt-br/products/xt-100-base-pom-resin",
    "zh-CN": "/zh/products/xt-100-base-pom-resin",
    "x-default": "/products/xt-100-base-pom-resin",
  });

  for (const slug of localizedGradeProfileSlugs) {
    assert.deepEqual(getLanguageAlternates(`/products/${slug}`), {
      en: `/products/${slug}`,
      de: `/de/products/${slug}`,
      fr: `/fr/products/${slug}`,
      "pt-BR": `/pt-br/products/${slug}`,
      "zh-CN": `/zh/products/${slug}`,
      "x-default": `/products/${slug}`,
    });
  }

  for (const slug of localizedProductCategorySlugs) {
    assert.deepEqual(getLanguageAlternates(`/products/categories/${slug}`), {
      en: `/products/categories/${slug}`,
      de: `/de/products/categories/${slug}`,
      fr: `/fr/products/categories/${slug}`,
      "pt-BR": `/pt-br/products/categories/${slug}`,
      "zh-CN": `/zh/products/categories/${slug}`,
      "x-default": `/products/categories/${slug}`,
    });
  }

  assert.equal(isEnglishFallbackHref("/applications"), false);
});

test("deep product funnel dictionaries are complete and language-specific", () => {
  const expectedShape = shapeOf(deProductFunnel);

  for (const messages of [
    deProductFunnel,
    frProductFunnel,
    ptBRProductFunnel,
    zhCNProductFunnel,
  ]) {
    assert.deepEqual(shapeOf(messages), expectedShape);
    assert.deepEqual(
      Object.keys(messages.category.directory.summaries).sort(),
      [...basePomGradeSlugs].sort(),
    );
    assert.deepEqual(
      Object.keys(messages.grade.properties.labels).sort(),
      [...xt100FeaturedPropertyLabels].sort(),
    );
    assert.deepEqual(
      Object.keys(messages.gradeProfiles).sort(),
      [...localizedGradeProfileSlugs].sort(),
    );
    assert.deepEqual(
      Object.keys(messages.categoryProfiles).sort(),
      [...localizedCategoryProfileSlugs].sort(),
    );
    assert.equal(messages.grade.features.length, 4);
    assert.equal(messages.grade.applications.length, 4);
    assert.equal(messages.grade.evaluation.steps.length, 3);
    assert.equal(messages.technicalData.scopeItems.length, 3);

    for (const slug of localizedProductGradeSlugs) {
      const grade = getLocalizedGradeMessages(messages, slug);
      assert.equal(grade.features.length, 4);
      assert.equal(grade.applications.length, 4);
      assert.equal(grade.evaluation.steps.length, 3);
      assert.match(
        grade.breadcrumb,
        /^(ETM450|ETM750|XT-100|EGB25|EGH502H|EHI402T|EDR180)$/,
      );
    }

    for (const slug of localizedProductCategorySlugs) {
      const category = getLocalizedCategoryMessages(messages, slug);
      assert.equal(category.faq.items.length, 3);
      assert.equal(category.inquiry.steps.length, 3);
      assert.equal(getLocalizedCategoryLabel(messages, slug).length > 0, true);
    }

    assert.deepEqual(
      Object.keys(
        getLocalizedCategoryMessages(messages, "glass-bead-filled-pom-compound")
          .directory.summaries,
      ),
      ["egb25-glass-bead-pom"],
    );
    assert.deepEqual(
      Object.keys(
        getLocalizedCategoryMessages(
          messages,
          "glass-fiber-reinforced-pom-compound",
        ).directory.summaries,
      ).sort(),
      [
        "egh202h-glass-fiber-pom",
        "egh302h-glass-fiber-pom",
        "egh402h-glass-fiber-pom",
        "egh402t-glass-fiber-pom",
        "egh502h-glass-fiber-pom",
        "egh502t-glass-fiber-pom",
        "egh580h-glass-fiber-pom",
        "egh580t-glass-fiber-pom",
        "egh602h-glass-fiber-pom",
        "egh602t-glass-fiber-pom",
      ],
    );
    assert.deepEqual(
      Object.keys(
        getLocalizedCategoryMessages(messages, "high-impact-pom-compound")
          .directory.summaries,
      ).sort(),
      [
        "edr100-high-impact-pom",
        "edr180-high-impact-pom",
        "ehi100st-high-impact-pom",
        "ehi202t-high-impact-pom",
        "ehi402t-high-impact-pom",
        "ehi602t-high-impact-pom",
      ],
    );

    assert.notEqual(
      getLocalizedGradeCategoryLabel(messages, "egb25-glass-bead-pom"),
      messages.common.category,
    );
    assert.notEqual(
      getLocalizedGradeCategoryLabel(messages, "egh502h-glass-fiber-pom"),
      messages.common.category,
    );
    assert.notEqual(
      getLocalizedGradeCategoryLabel(messages, "ehi402t-high-impact-pom"),
      messages.common.category,
    );
    assert.notEqual(
      getLocalizedGradeCategoryLabel(messages, "edr180-high-impact-pom"),
      messages.common.category,
    );
  }

  assert.notEqual(
    deProductFunnel.category.hero.title,
    frProductFunnel.category.hero.title,
  );
  assert.notEqual(
    frProductFunnel.grade.summary,
    ptBRProductFunnel.grade.summary,
  );
  assert.match(deProductFunnel.grade.properties.labels.Density, /Dichte/);
  assert.match(frProductFunnel.grade.properties.labels.Density, /volumique/);
  assert.match(ptBRProductFunnel.grade.properties.labels.Density, /Densidade/);
  assert.match(zhCNProductFunnel.grade.properties.labels.Density, /密度/);
});

test("release surfaces fail closed when status or indexability changes", () => {
  const release = { ...localizedReleaseManifest.home };
  const surfaces = [
    "indexable",
    "publicNavigation",
    "includeInSitemap",
    "includeInAlternates",
  ];

  for (const surface of surfaces) {
    assert.equal(
      isReleaseSurfaceEnabled({ ...release, [surface]: false }, surface),
      false,
    );
    assert.equal(
      isReleaseSurfaceEnabled({ ...release, status: "preview" }, surface),
      false,
    );
  }

  const noindexRelease = { ...release, indexable: false };
  assert.equal(
    isReleaseSurfaceEnabled(noindexRelease, "includeInSitemap"),
    false,
  );
  assert.equal(
    isReleaseSurfaceEnabled(noindexRelease, "includeInAlternates"),
    false,
  );
  assert.equal(
    isReleaseSurfaceEnabled(noindexRelease, "publicNavigation"),
    true,
  );
});

test("localized funnel pages are public with reciprocal SEO signals", () => {
  const localizedLayout = readProjectFile("src/app/[locale]/layout.tsx");
  const localizedHome = readProjectFile("src/app/[locale]/page.tsx");
  const localizedProducts = readProjectFile(
    "src/app/[locale]/products/page.tsx",
  );
  const localizedContact = readProjectFile("src/app/[locale]/contact/page.tsx");
  const localizedCategory = readProjectFile(
    "src/app/[locale]/products/categories/[category]/page.tsx",
  );
  const localizedGrade = readProjectFile(
    "src/app/[locale]/products/[slug]/page.tsx",
  );
  const localizedTechnicalData = readProjectFile(
    "src/app/[locale]/technical-data-sheets/page.tsx",
  );
  const englishHome = readProjectFile("src/app/(en)/page.tsx");
  const englishProducts = readProjectFile("src/app/(en)/products/page.tsx");
  const englishContact = readProjectFile("src/app/(en)/contact/page.tsx");
  const englishLayout = readProjectFile("src/app/(en)/layout.tsx");
  const sitemap = readProjectFile("src/app/sitemap.ts");
  const header = readProjectFile("src/components/Header.tsx");
  const footer = readProjectFile("src/components/Footer.tsx");
  const nextConfig = readProjectFile("next.config.ts");

  assert.match(englishLayout, /htmlLang="en"/);
  assert.match(localizedLayout, /htmlLang=\{localeConfig\.htmlLang\}/);
  assert.match(localizedLayout, /index:\s*true/);
  assert.doesNotMatch(localizedHome, /indexable:\s*false/);
  assert.doesNotMatch(localizedProducts, /indexable:\s*false/);
  assert.doesNotMatch(localizedContact, /indexable:\s*false/);
  assert.doesNotMatch(localizedCategory, /indexable:\s*false/);
  assert.doesNotMatch(localizedGrade, /indexable:\s*false/);
  assert.doesNotMatch(localizedTechnicalData, /indexable:\s*false/);
  assert.match(localizedHome, /getLocalizedHomePath/);
  assert.match(localizedProducts, /getLocalizedProductsPath/);
  assert.match(localizedContact, /getLocalizedContactPath/);
  assert.match(localizedHome, /homeLanguageAlternates/);
  assert.match(localizedProducts, /productsLanguageAlternates/);
  assert.match(localizedContact, /contactLanguageAlternates/);
  assert.match(localizedCategory, /getLanguageAlternates\(sourcePath\)/);
  assert.match(localizedGrade, /getLanguageAlternates\(sourcePath\)/);
  assert.match(localizedTechnicalData, /getLanguageAlternates\(sourcePath\)/);
  assert.match(localizedTechnicalData, /!hasSearchIntent/);
  assert.match(localizedHome, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(localizedProducts, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(localizedContact, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(englishHome, /homeLanguageAlternates/);
  assert.match(englishHome, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(englishProducts, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(englishContact, /contactLanguageAlternates/);
  assert.match(englishContact, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.doesNotMatch(nextConfig, /X-Robots-Tag/);
  assert.match(
    sitemap,
    /sourcePath:\s*"\/products\/categories\/base-pom-resin"/,
  );
  assert.match(
    sitemap,
    /sourcePath:\s*"\/products\/categories\/glass-bead-filled-pom-compound"/,
  );
  assert.match(
    sitemap,
    /sourcePath:\s*"\/products\/categories\/glass-fiber-reinforced-pom-compound"/,
  );
  assert.match(
    sitemap,
    /sourcePath:\s*"\/products\/categories\/high-impact-pom-compound"/,
  );
  assert.match(sitemap, /sourcePath:\s*"\/products\/etm450-base-pom-resin"/);
  assert.match(sitemap, /sourcePath:\s*"\/products\/etm750-base-pom-resin"/);
  assert.match(sitemap, /sourcePath:\s*"\/products\/xt-100-base-pom-resin"/);
  assert.match(sitemap, /sourcePath:\s*"\/products\/egb25-glass-bead-pom"/);
  assert.match(sitemap, /sourcePath:\s*"\/products\/egh502h-glass-fiber-pom"/);
  assert.match(sitemap, /sourcePath:\s*"\/products\/ehi402t-high-impact-pom"/);
  assert.match(sitemap, /sourcePath:\s*"\/products\/edr180-high-impact-pom"/);
  assert.match(sitemap, /sourcePath:\s*"\/technical-data-sheets"/);
  assert.match(sitemap, /getSitemapLanguageOptions\(sourcePath\)/);
  assert.match(sitemap, /isReleasedSourcePath\(entry\.path\)/);
  assert.match(
    sitemap,
    /isReleasedSourcePath\(`\/products\/\$\{product\.slug\}`\)/,
  );
  assert.match(sitemap, /alternates:\s*\{[\s\S]*languages:/);
  assert.match(header, /getLanguageOptions/);
  assert.match(header, /language-switcher--/);
  assert.doesNotMatch(header, /i18n-preview/);
  assert.doesNotMatch(footer, /i18n-preview/);
});
