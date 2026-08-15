import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  getLocalizedLocale,
  localizedLocales,
} from "../src/i18n/config.ts";
import de from "../src/i18n/messages/de.ts";
import en from "../src/i18n/messages/en.ts";
import fr from "../src/i18n/messages/fr.ts";
import ptBR from "../src/i18n/messages/pt-BR.ts";
import {
  getLocalizedHref,
  getLocalizedContactPath,
  getLocalizedHomePath,
  getLocalizedProductsPath,
  getLanguageOptions,
  contactLanguageAlternates,
  homeLanguageAlternates,
  localizedReleaseManifest,
  productsLanguageAlternates,
  productsLanguageOptions,
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
    ],
  );
  assert.equal(getLocalizedLocale("es"), undefined);
});

test("all localized dictionaries match the complete English message shape", () => {
  const expectedShape = shapeOf(en);

  for (const messages of [de, fr, ptBR]) {
    assert.deepEqual(shapeOf(messages), expectedShape);
    assert.equal(messages.Home.materials.items.length, 5);
    assert.equal(messages.Home.qualification.steps.length, 4);
    assert.equal(messages.Home.quality.certifications.length, 4);
    assert.equal(messages.Home.exportNetwork.routes.length, 4);
    assert.equal(messages.Contact.form.materialOptionLabels["Base POM Resin"].length > 0, true);
    assert.equal(messages.Products.selection.paths.length, 4);
    assert.equal(messages.Products.families.items.length, 6);
  }

  assert.notEqual(de.Home.hero.title, en.Home.hero.title);
  assert.notEqual(fr.Contact.hero.title, en.Contact.hero.title);
  assert.notEqual(ptBR.Contact.form.submit, en.Contact.form.submit);
  assert.notEqual(de.Products.hero.title, en.Products.hero.title);
  assert.notEqual(fr.Products.hero.title, en.Products.hero.title);
  assert.notEqual(ptBR.Products.hero.title, en.Products.hero.title);
});

test("the release manifest publishes only the approved core funnel pages", () => {
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
    "x-default": "/",
  });
  assert.deepEqual(productsLanguageAlternates, {
    en: "/products",
    de: "/de/products",
    fr: "/fr/products",
    "pt-BR": "/pt-br/products",
    "x-default": "/products",
  });
  assert.deepEqual(contactLanguageAlternates, {
    en: "/contact",
    de: "/de/contact",
    fr: "/fr/contact",
    "pt-BR": "/pt-br/contact",
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
    assert.equal(
      getLocalizedHref("/applications", locale.urlSegment),
      "/applications",
    );
  }

  assert.deepEqual(getLanguageOptions("/about"), []);
});

test("localized Home, Products, and Contact are public with reciprocal SEO signals", () => {
  const localizedLayout = readProjectFile("src/app/[locale]/layout.tsx");
  const localizedHome = readProjectFile("src/app/[locale]/page.tsx");
  const localizedProducts = readProjectFile("src/app/[locale]/products/page.tsx");
  const localizedContact = readProjectFile("src/app/[locale]/contact/page.tsx");
  const englishHome = readProjectFile("src/app/(en)/page.tsx");
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
  assert.match(localizedHome, /getLocalizedHomePath/);
  assert.match(localizedProducts, /getLocalizedProductsPath/);
  assert.match(localizedContact, /getLocalizedContactPath/);
  assert.match(localizedHome, /homeLanguageAlternates/);
  assert.match(localizedProducts, /productsLanguageAlternates/);
  assert.match(localizedContact, /contactLanguageAlternates/);
  assert.match(englishHome, /homeLanguageAlternates/);
  assert.match(englishContact, /contactLanguageAlternates/);
  assert.doesNotMatch(nextConfig, /X-Robots-Tag/);
  assert.match(sitemap, /homeLanguageOptions/);
  assert.match(sitemap, /productsLanguageOptions/);
  assert.match(sitemap, /contactLanguageOptions/);
  assert.match(sitemap, /alternates:\s*\{[\s\S]*languages:/);
  assert.match(header, /getLanguageOptions/);
  assert.match(header, /language-switcher--/);
  assert.doesNotMatch(header, /i18n-preview/);
  assert.doesNotMatch(footer, /i18n-preview/);
});
