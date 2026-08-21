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
import zhCNApplications from "../src/i18n/messages/zh-CN-applications.ts";
import zhCNApplicationDetailsA from "../src/i18n/messages/zh-CN-application-details-a.ts";
import zhCNApplicationDetailsB from "../src/i18n/messages/zh-CN-application-details-b.ts";
import zhCNResources from "../src/i18n/messages/zh-CN-resources.ts";
import zhCNResourceArticlesA1 from "../src/i18n/messages/zh-CN-resource-articles-a1.ts";
import zhCNResourceArticlesA2 from "../src/i18n/messages/zh-CN-resource-articles-a2.ts";
import zhCNResourceArticlesB1 from "../src/i18n/messages/zh-CN-resource-articles-b1.ts";
import zhCNResourceArticlesB2 from "../src/i18n/messages/zh-CN-resource-articles-b2.ts";
import zhCNResourceArticlesC1 from "../src/i18n/messages/zh-CN-resource-articles-c1.ts";
import zhCNResourceArticlesC2 from "../src/i18n/messages/zh-CN-resource-articles-c2.ts";
import {
  applicationIndexComponentSlugs,
  localizedApplicationDetailSliceASlugs,
  localizedApplicationDetailSliceBSlugs,
  localizedApplicationSlugs,
} from "../src/i18n/applicationTypes.ts";
import {
  localizedResourceArticleSlugs,
  localizedResourceArticleSliceA1Slugs,
  localizedResourceArticleSliceA2Slugs,
  localizedResourceArticleSliceB1Slugs,
  localizedResourceArticleSliceB2Slugs,
  localizedResourceArticleSliceC1Slugs,
  localizedResourceArticleSliceC2Slugs,
  localizedResourceGroupIds,
  localizedResourceLinkPaths,
} from "../src/i18n/resourceTypes.ts";
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
  isReleaseLocaleEnabled,
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

test("the release manifest publishes only the approved localized page groups", () => {
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

  const chineseApplicationReleases = {
    applications: "/applications",
    automotiveApplication: "/applications/automotive",
    electronicsApplication: "/applications/electronics",
    conveyorAutomationApplication: "/applications/conveyor-automation",
    motionComponentsApplication: "/applications/motion-components",
    waterControlApplication: "/applications/water-control",
    washingMachineComponentsApplication:
      "/applications/washing-machine-components",
    outdoorEquipmentApplication: "/applications/outdoor-equipment",
    textileMachineryApplication: "/applications/textile-machinery",
  };

  const chineseAboutAndComponentReleases = {
    about: "/about",
    components: "/components",
    precisionPlasticGearsComponent:
      "/components/precision-plastic-gears",
    bushingsAndSleevesComponent: "/components/bushings-and-sleeves",
    conveyorChainComponentsComponent:
      "/components/conveyor-chain-components",
    valveSpoolsAndCartridgesComponent:
      "/components/valve-spools-and-cartridges",
    textileGuideComponentsComponent:
      "/components/textile-guide-components",
    icHandlingTraysComponent: "/components/ic-handling-trays",
  };
  const localizedComponentSlugs = Object.values(
    chineseAboutAndComponentReleases,
  )
    .filter((sourcePath) => sourcePath.startsWith("/components/"))
    .map((sourcePath) => sourcePath.replace("/components/", ""));

  for (const [key, sourcePath] of Object.entries({
    ...chineseApplicationReleases,
    ...chineseAboutAndComponentReleases,
  })) {
    assert.deepEqual(localizedReleaseManifest[key], {
      sourcePath,
      status: "public",
      indexable: true,
      publicNavigation: true,
      includeInSitemap: true,
      includeInAlternates: true,
      localizedSegments: ["zh"],
    });
  }

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
    const applicationHref =
      locale.urlSegment === "zh" ? "/zh/applications" : "/applications";
    assert.equal(
      getLocalizedHref("/applications", locale.urlSegment),
      applicationHref,
    );
    assert.equal(
      isEnglishFallbackHref("/applications", locale.urlSegment),
      locale.urlSegment !== "zh",
    );
    for (const slug of localizedApplicationSlugs) {
      assert.equal(
        getLocalizedHref(`/applications/${slug}`, locale.urlSegment),
        locale.urlSegment === "zh"
          ? `/zh/applications/${slug}`
          : `/applications/${slug}`,
      );
    }
    for (const slug of localizedComponentSlugs) {
      assert.equal(
        getLocalizedHref(`/components/${slug}`, locale.urlSegment),
        locale.urlSegment === "zh"
          ? `/zh/components/${slug}`
          : `/components/${slug}`,
      );
    }
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

  assert.deepEqual(
    getLanguageOptions("/about").map(({ localeKey, href }) => ({
      localeKey,
      href,
    })),
    [
      { localeKey: "en", href: "/about" },
      { localeKey: "zh", href: "/zh/about" },
    ],
  );
  assert.deepEqual(
    getSitemapLanguageOptions("/components").map(
      ({ localeKey, href }) => ({ localeKey, href }),
    ),
    [
      { localeKey: "en", href: "/components" },
      { localeKey: "zh", href: "/zh/components" },
    ],
  );
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
  assert.equal(isLocalizedReleaseIndexable("/applications", "zh"), true);
  assert.equal(isLocalizedReleaseIndexable("/applications", "de"), false);
  assert.equal(isLocalizedReleaseIndexable("/about", "zh"), true);
  assert.equal(isLocalizedReleaseIndexable("/about", "de"), false);
  assert.equal(isLocalizedReleaseIndexable("/components", "zh"), true);
  assert.equal(isLocalizedReleaseIndexable("/components", "de"), false);

  assert.deepEqual(getLanguageAlternates("/applications"), {
    en: "/applications",
    "zh-CN": "/zh/applications",
    "x-default": "/applications",
  });
  for (const slug of localizedApplicationSlugs) {
    assert.deepEqual(getLanguageAlternates(`/applications/${slug}`), {
      en: `/applications/${slug}`,
      "zh-CN": `/zh/applications/${slug}`,
      "x-default": `/applications/${slug}`,
    });
  }
  for (const slug of localizedComponentSlugs) {
    assert.deepEqual(getLanguageAlternates(`/components/${slug}`), {
      en: `/components/${slug}`,
      "zh-CN": `/zh/components/${slug}`,
      "x-default": `/components/${slug}`,
    });
  }

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

test("the Simplified Chinese application directory copy is complete and cautious", () => {
  assert.deepEqual(
    Object.keys(zhCNApplications.cards).sort(),
    [...localizedApplicationSlugs].sort(),
  );
  assert.deepEqual(
    Object.keys(zhCNApplications.componentSolutions.labels).sort(),
    [...applicationIndexComponentSlugs].sort(),
  );
  assert.equal(zhCNApplications.selection.items.length, 4);

  const visibleCopy = JSON.stringify(zhCNApplications);
  assert.match(visibleCopy, /[\u3400-\u9fff]/);
  assert.doesNotMatch(
    visibleCopy,
    /Application Engineering|Browse by Industry|View application|Need Help Shortlisting/,
  );
  assert.doesNotMatch(visibleCopy, /保证适用|直接替代|完全等同/);

  for (const card of Object.values(zhCNApplications.cards)) {
    assert.match(card.title, /[\u3400-\u9fff]/);
    assert.match(card.description, /[\u3400-\u9fff]/);
    assert.match(card.imageAlt, /[\u3400-\u9fff]/);
  }
});

test("the first Simplified Chinese application detail slice matches source content", () => {
  const source = readProjectFile("src/data/applications.ts");
  const expectedCounts = {
    automotive: { directions: 4, images: 3, parts: 12, groupItems: [4, 4, 4] },
    electronics: { directions: 5, images: 3, parts: 8, groupItems: [4, 4, 4] },
    "conveyor-automation": {
      directions: 4,
      images: 3,
      parts: 8,
      groupItems: [4, 4, 4],
    },
    "motion-components": {
      directions: 4,
      images: 3,
      parts: 8,
      groupItems: [4, 4, 4],
    },
  };

  assert.deepEqual(
    Object.keys(zhCNApplicationDetailsA).sort(),
    [...localizedApplicationDetailSliceASlugs].sort(),
  );

  for (const slug of localizedApplicationDetailSliceASlugs) {
    const localized = zhCNApplicationDetailsA[slug];
    const counts = expectedCounts[slug];

    assert.match(source, new RegExp(`slug: "${slug}"`));
    assert.equal(localized.materialDirections.length, counts.directions);
    assert.equal(localized.images.length, counts.images);
    assert.equal(localized.parts.length, counts.parts);
    assert.equal(localized.engineeringFit.length, counts.groupItems.length);

    localized.engineeringFit.forEach((group, index) => {
      assert.equal(group.items.length, counts.groupItems[index]);
    });
    assert.equal(
      localized.parts.every((part) => Boolean(part.imageAlt)),
      true,
    );

    const visibleCopy = JSON.stringify(localized);
    assert.match(visibleCopy, /[\u3400-\u9fff]/);
    assert.doesNotMatch(
      visibleCopy,
      /Typical Parts|Performance Needs|Material Direction|Review dimensional|Screen low-friction/,
    );
    assert.doesNotMatch(visibleCopy, /保证适用|直接替代|完全等同/);
  }
});

test("the second Simplified Chinese application detail slice matches source content", () => {
  const source = readProjectFile("src/data/applications.ts");
  const expectedCounts = {
    "water-control": {
      directions: 3,
      images: 4,
      parts: 8,
      groupItems: [4, 4, 4],
    },
    "washing-machine-components": {
      directions: 5,
      images: 4,
      parts: 8,
      groupItems: [4, 4, 4],
    },
    "outdoor-equipment": {
      directions: 4,
      images: 3,
      parts: 8,
      groupItems: [4, 4, 4],
    },
    "textile-machinery": {
      directions: 4,
      images: 3,
      parts: 8,
      groupItems: [4, 4, 4],
    },
  };

  assert.deepEqual(
    Object.keys(zhCNApplicationDetailsB).sort(),
    [...localizedApplicationDetailSliceBSlugs].sort(),
  );
  assert.deepEqual(
    [
      ...localizedApplicationDetailSliceASlugs,
      ...localizedApplicationDetailSliceBSlugs,
    ].sort(),
    [...localizedApplicationSlugs].sort(),
  );

  for (const slug of localizedApplicationDetailSliceBSlugs) {
    const localized = zhCNApplicationDetailsB[slug];
    const counts = expectedCounts[slug];

    assert.match(source, new RegExp(`slug: "${slug}"`));
    assert.equal(localized.materialDirections.length, counts.directions);
    assert.equal(localized.images.length, counts.images);
    assert.equal(localized.parts.length, counts.parts);
    assert.equal(localized.engineeringFit.length, counts.groupItems.length);

    localized.engineeringFit.forEach((group, index) => {
      assert.equal(group.items.length, counts.groupItems[index]);
    });
    assert.equal(
      localized.parts.every((part) => Boolean(part.imageAlt)),
      true,
    );

    const visibleCopy = JSON.stringify(localized);
    assert.match(visibleCopy, /[\u3400-\u9fff]/);
    assert.doesNotMatch(
      visibleCopy,
      /Typical Parts|Performance Needs|Material Direction|Review sliding|Screen assembly/,
    );
    assert.doesNotMatch(visibleCopy, /保证适用|直接替代|完全等同/);
  }
});

test("the Simplified Chinese resource directory copy matches the source taxonomy", () => {
  const navigationSource = readProjectFile("src/data/resourceNavigation.ts");
  const resourcesSource = readProjectFile("src/data/resources.ts");

  assert.deepEqual(
    Object.keys(zhCNResources.groups).sort(),
    [...localizedResourceGroupIds].sort(),
  );
  assert.deepEqual(
    Object.keys(zhCNResources.entries).sort(),
    [...localizedResourceLinkPaths].sort(),
  );

  const groupedPaths = localizedResourceGroupIds.flatMap(
    (groupId) => zhCNResources.groups[groupId].entryPaths,
  );
  assert.equal(groupedPaths.length, 16);
  assert.equal(new Set(groupedPaths).size, groupedPaths.length);
  assert.deepEqual(
    [...groupedPaths].sort(),
    [...localizedResourceLinkPaths].sort(),
  );

  for (const groupId of localizedResourceGroupIds) {
    assert.match(navigationSource, new RegExp(`id: "${groupId}"`));
  }
  for (const path of localizedResourceLinkPaths) {
    assert.match(navigationSource, new RegExp(`href: "${path}"`));
  }
  for (const slug of localizedResourceArticleSlugs) {
    assert.match(resourcesSource, new RegExp(`slug: "${slug}"`));
  }

  assert.equal(localizedResourceArticleSlugs.length, 14);
  assert.equal(
    localizedResourceLinkPaths.filter((path) => path.startsWith("/resources/"))
      .length,
    14,
  );

  const visibleCopy = JSON.stringify(zhCNResources);
  assert.match(visibleCopy, /[\u3400-\u9fff]/);
  assert.doesNotMatch(
    visibleCopy,
    /Browse Technical Resources|Material Selection, Processing|Resources in this section|Search Technical FAQ/,
  );
  assert.doesNotMatch(
    visibleCopy,
    /保证适用|直接替代|完全等同|自动批准|无需验证/,
  );

  for (const entry of Object.values(zhCNResources.entries)) {
    assert.match(entry.label, /[\u3400-\u9fff]/);
    assert.match(entry.description, /[\u3400-\u9fff]/);
  }
});

test("the first Simplified Chinese resource article slice matches source structure", () => {
  const resourcesSource = readProjectFile("src/data/resources.ts");
  const expectedCounts = {
    "material-selection-guide": {
      sections: 8,
      features: 4,
      modules: 5,
      relatedLinks: 4,
    },
    "alternative-pom-grade-validation": {
      sections: 6,
      features: 2,
      modules: 3,
      relatedLinks: 4,
    },
  };

  assert.deepEqual(
    Object.keys(zhCNResourceArticlesA1).sort(),
    [...localizedResourceArticleSliceA1Slugs].sort(),
  );

  for (const slug of localizedResourceArticleSliceA1Slugs) {
    const localized = zhCNResourceArticlesA1[slug];
    const counts = expectedCounts[slug];

    assert.equal(localized.slug, slug);
    assert.match(resourcesSource, new RegExp(`slug: "${slug}"`));
    assert.equal(localized.articleSections?.length, counts.sections);
    assert.equal(localized.articleFeatures?.length, counts.features);
    assert.equal(localized.modules.length, counts.modules);
    assert.equal(localized.relatedLinks.length, counts.relatedLinks);

    const sectionTitles = new Set(
      localized.articleSections?.map((section) => section.title),
    );
    for (const feature of localized.articleFeatures ?? []) {
      if (feature.position === "after-section") {
        assert.equal(sectionTitles.has(feature.sectionTitle), true);
      }
    }

    const visibleCopy = JSON.stringify(localized);
    assert.match(visibleCopy, /[\u3400-\u9fff]/);
    assert.doesNotMatch(
      visibleCopy,
      /Start with the Molded Part|Define What Equivalent Means|Controlled Baseline|Quick Selection Logic/,
    );
    assert.doesNotMatch(
      visibleCopy,
      /保证适用|直接替代|完全等同|自动批准|无需验证/,
    );
  }
});

test("the second Simplified Chinese resource article slice matches source structure", () => {
  const resourcesSource = readProjectFile("src/data/resources.ts");
  const expectedCounts = {
    "wear-resistant-low-friction-pom-selection-guide": {
      sections: 8,
      features: 4,
      modules: 0,
      relatedLinks: 4,
    },
    "pom-gear-material-selection": {
      sections: 6,
      features: 3,
      modules: 3,
      relatedLinks: 5,
    },
  };

  assert.deepEqual(
    Object.keys(zhCNResourceArticlesA2).sort(),
    [...localizedResourceArticleSliceA2Slugs].sort(),
  );

  for (const slug of localizedResourceArticleSliceA2Slugs) {
    const localized = zhCNResourceArticlesA2[slug];
    const counts = expectedCounts[slug];

    assert.equal(localized.slug, slug);
    assert.match(resourcesSource, new RegExp(`slug: "${slug}"`));
    assert.equal(localized.articleSections?.length, counts.sections);
    assert.equal(localized.articleFeatures?.length, counts.features);
    assert.equal(localized.modules.length, counts.modules);
    assert.equal(localized.relatedLinks.length, counts.relatedLinks);

    const sectionTitles = new Set(
      localized.articleSections?.map((section) => section.title),
    );
    for (const feature of localized.articleFeatures ?? []) {
      if (feature.position === "after-section") {
        assert.equal(sectionTitles.has(feature.sectionTitle), true);
      }
    }

    const visibleCopy = JSON.stringify(localized);
    assert.match(visibleCopy, /[\u3400-\u9fff]/);
    assert.doesNotMatch(
      visibleCopy,
      /Wear Resistance and Low Friction|Define the Gear Duty|Identify the Governing Failure Mode|Validate the Gear Train/,
    );
    assert.doesNotMatch(
      visibleCopy,
      /保证适用|直接替代|完全等同|自动批准|无需验证/,
    );
  }
});

test("the third Simplified Chinese resource article slice matches source structure", () => {
  const resourcesSource = readProjectFile("src/data/resources.ts");
  const expectedCounts = {
    "processing-guide": {
      sections: 0,
      features: 0,
      modules: 5,
      relatedLinks: 2,
    },
    "pom-warpage-troubleshooting": {
      sections: 6,
      features: 2,
      modules: 3,
      relatedLinks: 5,
    },
  };

  assert.deepEqual(
    Object.keys(zhCNResourceArticlesB1).sort(),
    [...localizedResourceArticleSliceB1Slugs].sort(),
  );

  for (const slug of localizedResourceArticleSliceB1Slugs) {
    const localized = zhCNResourceArticlesB1[slug];
    const counts = expectedCounts[slug];

    assert.equal(localized.slug, slug);
    assert.match(resourcesSource, new RegExp(`slug: "${slug}"`));
    assert.equal(localized.articleSections?.length ?? 0, counts.sections);
    assert.equal(localized.articleFeatures?.length ?? 0, counts.features);
    assert.equal(localized.modules.length, counts.modules);
    assert.equal(localized.relatedLinks.length, counts.relatedLinks);

    const sectionTitles = new Set(
      localized.articleSections?.map((section) => section.title),
    );
    for (const feature of localized.articleFeatures ?? []) {
      if (feature.position === "after-section") {
        assert.equal(sectionTitles.has(feature.sectionTitle), true);
      }
    }

    const visibleCopy = JSON.stringify(localized);
    assert.match(visibleCopy, /[\u3400-\u9fff]/);
    assert.doesNotMatch(
      visibleCopy,
      /Before Molding Trial|Injection Molding Review|Measure the Warpage|Treat Fiber-Reinforced POM/,
    );
    assert.doesNotMatch(
      visibleCopy,
      /保证适用|直接替代|完全等同|自动批准|无需验证|固定通用温度/,
    );
  }
});

test("the fourth Simplified Chinese resource article slice matches source structure", () => {
  const resourcesSource = readProjectFile("src/data/resources.ts");
  const expectedCounts = {
    "application-notes": {
      sections: 0,
      features: 0,
      modules: 6,
      faqItems: 0,
      relatedLinks: 2,
    },
    faq: {
      sections: 0,
      features: 0,
      modules: 4,
      faqItems: 18,
      relatedLinks: 2,
    },
    "reinforcement-materials-overview": {
      sections: 4,
      features: 2,
      modules: 3,
      faqItems: 0,
      relatedLinks: 4,
    },
  };

  assert.deepEqual(
    Object.keys(zhCNResourceArticlesB2).sort(),
    [...localizedResourceArticleSliceB2Slugs].sort(),
  );

  for (const slug of localizedResourceArticleSliceB2Slugs) {
    const localized = zhCNResourceArticlesB2[slug];
    const counts = expectedCounts[slug];

    assert.equal(localized.slug, slug);
    assert.match(resourcesSource, new RegExp(`slug: "${slug}"`));
    assert.equal(localized.articleSections?.length ?? 0, counts.sections);
    assert.equal(localized.articleFeatures?.length ?? 0, counts.features);
    assert.equal(localized.modules.length, counts.modules);
    assert.equal(
      localized.modules.reduce(
        (total, module) => total + (module.faqItems?.length ?? 0),
        0,
      ),
      counts.faqItems,
    );
    assert.equal(localized.relatedLinks.length, counts.relatedLinks);

    const sectionTitles = new Set(
      localized.articleSections?.map((section) => section.title),
    );
    for (const feature of localized.articleFeatures ?? []) {
      if (feature.position === "after-section") {
        assert.equal(sectionTitles.has(feature.sectionTitle), true);
      }
    }

    const visibleCopy = JSON.stringify(localized);
    assert.match(visibleCopy, /[\u3400-\u9fff]/);
    assert.doesNotMatch(
      visibleCopy,
      /Moving Contact: Gears|What is modified POM|Reading POM TDS|Define the Performance Gap|Release the Molded Part/,
    );
    assert.doesNotMatch(
      visibleCopy,
      /保证适用|直接替代|完全等同|自动批准|无需验证|普遍适用/,
    );
  }
});

test("the fifth Simplified Chinese resource article slice matches source structure", () => {
  const resourcesSource = readProjectFile("src/data/resources.ts");
  const expectedCounts = {
    "pa6-vs-pa66-reinforced-parts": {
      sections: 6,
      features: 2,
      modules: 3,
      relatedLinks: 5,
    },
    "glass-fiber-reinforced-pa6-pa66-selection-guide": {
      sections: 7,
      features: 2,
      modules: 3,
      relatedLinks: 5,
    },
  };

  assert.deepEqual(
    Object.keys(zhCNResourceArticlesC1).sort(),
    [...localizedResourceArticleSliceC1Slugs].sort(),
  );

  for (const slug of localizedResourceArticleSliceC1Slugs) {
    const localized = zhCNResourceArticlesC1[slug];
    const counts = expectedCounts[slug];

    assert.equal(localized.slug, slug);
    assert.match(resourcesSource, new RegExp(`slug: "${slug}"`));
    assert.equal(localized.articleSections?.length, counts.sections);
    assert.equal(localized.articleFeatures?.length, counts.features);
    assert.equal(localized.modules.length, counts.modules);
    assert.equal(localized.relatedLinks.length, counts.relatedLinks);

    const sectionTitles = new Set(
      localized.articleSections?.map((section) => section.title),
    );
    for (const feature of localized.articleFeatures ?? []) {
      if (feature.position === "after-section") {
        assert.equal(sectionTitles.has(feature.sectionTitle), true);
      }
    }

    const visibleCopy = JSON.stringify(localized);
    assert.match(visibleCopy, /[\u3400-\u9fff]/);
    assert.doesNotMatch(
      visibleCopy,
      /Start With the Finished-Part|Specify Dry, Conditioned|Define the Load Case|Use the Catalogue Ladder/,
    );
    assert.doesNotMatch(
      visibleCopy,
      /保证适用|直接替代|完全等同|自动批准|无需验证/,
    );
  }
});

test("the final Simplified Chinese resource article slice matches source structure", () => {
  const resourcesSource = readProjectFile("src/data/resources.ts");
  const expectedCounts = {
    "ppa-vs-pa66-material-selection": {
      sections: 6,
      features: 3,
      modules: 3,
      relatedLinks: 5,
    },
    "pa6-pa66-moisture-drying-conditioning-guide": {
      sections: 6,
      features: 2,
      modules: 3,
      relatedLinks: 5,
    },
    "conductive-antistatic-pa6-pa66-ppa-selection-guide": {
      sections: 7,
      features: 3,
      modules: 3,
      relatedLinks: 5,
    },
  };

  assert.deepEqual(
    Object.keys(zhCNResourceArticlesC2).sort(),
    [...localizedResourceArticleSliceC2Slugs].sort(),
  );

  for (const slug of localizedResourceArticleSliceC2Slugs) {
    const localized = zhCNResourceArticlesC2[slug];
    const counts = expectedCounts[slug];

    assert.equal(localized.slug, slug);
    assert.match(resourcesSource, new RegExp(`slug: "${slug}"`));
    assert.equal(localized.articleSections?.length, counts.sections);
    assert.equal(localized.articleFeatures?.length, counts.features);
    assert.equal(localized.modules.length, counts.modules);
    assert.equal(localized.relatedLinks.length, counts.relatedLinks);

    const sectionTitles = new Set(
      localized.articleSections?.map((section) => section.title),
    );
    for (const feature of localized.articleFeatures ?? []) {
      if (feature.position === "after-section") {
        assert.equal(sectionTitles.has(feature.sectionTitle), true);
      }
    }

    const visibleCopy = JSON.stringify(localized);
    assert.match(visibleCopy, /[\u3400-\u9fff]/);
    assert.doesNotMatch(
      visibleCopy,
      /Prove the Performance Gap|Separate Four Moisture States|Define the Electrical Function|Treat Catalogue Bands/,
    );
    assert.doesNotMatch(
      visibleCopy,
      /保证适用|直接替代|完全等同|自动批准|无需验证|推断合规性/,
    );
  }

  const translatedSlugs = [
    ...localizedResourceArticleSliceA1Slugs,
    ...localizedResourceArticleSliceA2Slugs,
    ...localizedResourceArticleSliceB1Slugs,
    ...localizedResourceArticleSliceB2Slugs,
    ...localizedResourceArticleSliceC1Slugs,
    ...localizedResourceArticleSliceC2Slugs,
  ];
  assert.equal(translatedSlugs.length, 14);
  assert.equal(new Set(translatedSlugs).size, translatedSlugs.length);
  assert.deepEqual(
    [...translatedSlugs].sort(),
    [...localizedResourceArticleSlugs].sort(),
  );
});

test("publishes the complete Simplified Chinese resource route family atomically", () => {
  const resourceSourcePaths = [
    "/resources",
    ...localizedResourceGroupIds.map((id) => `/resources/${id}`),
    ...localizedResourceArticleSlugs.map((slug) => `/resources/${slug}`),
  ];
  const releaseEntries = Object.values(localizedReleaseManifest);

  assert.equal(resourceSourcePaths.length, 18);
  assert.equal(new Set(resourceSourcePaths).size, resourceSourcePaths.length);

  for (const sourcePath of resourceSourcePaths) {
    const release = releaseEntries.find(
      (entry) => entry.sourcePath === sourcePath,
    );

    assert.deepEqual(release, {
      sourcePath,
      status: "public",
      indexable: true,
      publicNavigation: true,
      includeInSitemap: true,
      includeInAlternates: true,
      localizedSegments: ["zh"],
    });
    assert.equal(getLocalizedHref(sourcePath, "zh"), `/zh${sourcePath}`);
    assert.equal(getLocalizedHref(sourcePath, "de"), sourcePath);
    assert.equal(isEnglishFallbackHref(sourcePath, "zh"), false);
    assert.equal(isEnglishFallbackHref(sourcePath, "de"), true);
    assert.equal(isLocalizedReleaseIndexable(sourcePath, "zh"), true);
    assert.equal(isLocalizedReleaseIndexable(sourcePath, "de"), false);
    assert.deepEqual(getLanguageAlternates(sourcePath), {
      en: sourcePath,
      "zh-CN": `/zh${sourcePath}`,
      "x-default": sourcePath,
    });
  }

  const localizedIndex = readProjectFile(
    "src/app/[locale]/resources/page.tsx",
  );
  const localizedDetail = readProjectFile(
    "src/app/[locale]/resources/[slug]/page.tsx",
  );
  const englishIndex = readProjectFile("src/app/(en)/resources/page.tsx");
  const englishDetail = readProjectFile(
    "src/app/(en)/resources/[slug]/page.tsx",
  );
  const sitemap = readProjectFile("src/app/sitemap.ts");
  const header = readProjectFile("src/components/Header.tsx");
  const sectionIdHelper = readProjectFile("src/lib/resource-page.ts");

  assert.match(localizedIndex, /localeConfig\.locale !== "zh-CN"/);
  assert.match(localizedIndex, /getLanguageAlternates\(sourcePath\)/);
  assert.match(localizedIndex, /chineseResourceNavigationGroups/);
  assert.match(localizedDetail, /localeConfig\.locale !== "zh-CN"/);
  assert.match(localizedDetail, /localizedResourceArticleSlugs/);
  assert.match(localizedDetail, /localizedResourceGroupIds/);
  assert.match(localizedDetail, /locale:\s*"zh",\s*slug/);
  assert.match(localizedDetail, /getLanguageAlternates\(route\.sourcePath\)/);
  assert.match(localizedDetail, /messages=\{messages\.articleUi\}/);
  assert.doesNotMatch(
    `${localizedIndex}\n${localizedDetail}`,
    />\s*(Technical Resources|Related Next Steps|On this page)\s*</,
  );
  assert.match(englishIndex, /getLanguageAlternates\("\/resources"\)/);
  assert.match(englishDetail, /getLanguageAlternates\(sourcePath\)/);
  assert.match(sitemap, /sourcePath:\s*"\/resources"/);
  assert.match(sitemap, /\.\.\.resourceNavigationGroups\.map/);
  assert.match(sitemap, /\.\.\.resourcePages\.map/);
  assert.match(
    header,
    /href=\{localizedHref\("\/resources"\)\}/,
  );
  assert.doesNotMatch(header, /href="\/resources"/);
  assert.match(sectionIdHelper, /\\p\{Letter\}/);
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

  const chineseOnlyRelease = {
    ...release,
    localizedSegments: ["zh"],
  };
  assert.equal(isReleaseLocaleEnabled(chineseOnlyRelease, "zh"), true);
  assert.equal(isReleaseLocaleEnabled(chineseOnlyRelease, "de"), false);
  assert.equal(
    isReleaseLocaleEnabled({ ...chineseOnlyRelease, status: "preview" }, "zh"),
    false,
  );
  assert.equal(isReleaseLocaleEnabled(release, "pt-br"), true);
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
  const localizedApplications = readProjectFile(
    "src/app/[locale]/applications/page.tsx",
  );
  const localizedApplicationDetail = readProjectFile(
    "src/app/[locale]/applications/[slug]/page.tsx",
  );
  const englishHome = readProjectFile("src/app/(en)/page.tsx");
  const englishProducts = readProjectFile("src/app/(en)/products/page.tsx");
  const englishContact = readProjectFile("src/app/(en)/contact/page.tsx");
  const englishApplications = readProjectFile(
    "src/app/(en)/applications/page.tsx",
  );
  const englishApplicationDetail = readProjectFile(
    "src/app/(en)/applications/[slug]/page.tsx",
  );
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
  assert.doesNotMatch(localizedApplications, /indexable:\s*false/);
  assert.doesNotMatch(localizedApplicationDetail, /indexable:\s*false/);
  assert.match(localizedHome, /getLocalizedHomePath/);
  assert.match(localizedProducts, /getLocalizedProductsPath/);
  assert.match(localizedContact, /getLocalizedContactPath/);
  assert.match(localizedHome, /homeLanguageAlternates/);
  assert.match(localizedProducts, /productsLanguageAlternates/);
  assert.match(localizedContact, /contactLanguageAlternates/);
  assert.match(localizedCategory, /getLanguageAlternates\(sourcePath\)/);
  assert.match(localizedGrade, /getLanguageAlternates\(sourcePath\)/);
  assert.match(localizedTechnicalData, /getLanguageAlternates\(sourcePath\)/);
  assert.match(localizedApplications, /getLanguageAlternates\(sourcePath\)/);
  assert.match(
    localizedApplicationDetail,
    /getLanguageAlternates\(sourcePath\)/,
  );
  assert.match(localizedApplications, /localeConfig\.locale !== "zh-CN"/);
  assert.match(localizedApplicationDetail, /localeConfig\.locale !== "zh-CN"/);
  assert.match(localizedTechnicalData, /!hasSearchIntent/);
  assert.match(localizedHome, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(localizedProducts, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(localizedContact, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(englishHome, /homeLanguageAlternates/);
  assert.match(englishHome, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(englishProducts, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(englishContact, /contactLanguageAlternates/);
  assert.match(englishContact, /indexable:\s*isLocalizedReleaseIndexable/);
  assert.match(
    englishApplications,
    /getLanguageAlternates\("\/applications"\)/,
  );
  assert.match(
    englishApplicationDetail,
    /getLanguageAlternates\([\s\S]*`\/applications\/\$\{application\.slug\}`/,
  );
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
  assert.match(sitemap, /sourcePath:\s*"\/applications"/);
  assert.match(sitemap, /sourcePath:\s*"\/applications\/automotive"/);
  assert.match(sitemap, /sourcePath:\s*"\/applications\/textile-machinery"/);
  assert.match(sitemap, /getSitemapLanguageOptions\(sourcePath\)/);
  assert.match(sitemap, /isReleasedSourcePath\(entry\.path\)/);
  assert.match(
    sitemap,
    /isReleasedSourcePath\(`\/products\/\$\{product\.slug\}`\)/,
  );
  assert.match(sitemap, /alternates:\s*\{[\s\S]*languages:/);
  assert.match(header, /getLanguageOptions/);
  assert.match(header, /href=\{localizedHref\("\/applications"\)\}/);
  assert.match(header, /href=\{localizedHref\(item\.href\)\}/);
  assert.match(header, /language-switcher--/);
  assert.doesNotMatch(header, /i18n-preview/);
  assert.doesNotMatch(footer, /i18n-preview/);
});
