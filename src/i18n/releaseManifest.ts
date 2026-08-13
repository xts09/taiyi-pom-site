import type { LocalizedUrlSegment } from "@/i18n/config";

export const localizedReleaseManifest = {
  products: {
    sourcePath: "/products",
    status: "public",
    indexable: true,
    publicNavigation: true,
    includeInSitemap: true,
    includeInAlternates: true,
  },
} as const;

const localizedLanguageLabels = {
  de: {
    shortLabel: "DE",
    nativeLabel: "Deutsch",
  },
  fr: {
    shortLabel: "FR",
    nativeLabel: "Français",
  },
  "pt-br": {
    shortLabel: "PT",
    nativeLabel: "Português",
  },
} satisfies Record<
  LocalizedUrlSegment,
  { shortLabel: string; nativeLabel: string }
>;

export const productsLanguageOptions = [
  {
    localeKey: "en",
    hreflang: "en",
    href: "/products",
    shortLabel: "EN",
    nativeLabel: "English",
  },
  {
    localeKey: "de",
    hreflang: "de",
    href: "/de/products",
    ...localizedLanguageLabels.de,
  },
  {
    localeKey: "fr",
    hreflang: "fr",
    href: "/fr/products",
    ...localizedLanguageLabels.fr,
  },
  {
    localeKey: "pt-br",
    hreflang: "pt-BR",
    href: "/pt-br/products",
    ...localizedLanguageLabels["pt-br"],
  },
] as const;

export type ProductsLanguageOption =
  (typeof productsLanguageOptions)[number];

export const productsLanguageAlternates = {
  en: "/products",
  de: "/de/products",
  fr: "/fr/products",
  "pt-BR": "/pt-br/products",
  "x-default": "/products",
} satisfies Record<string, string>;

const releasedSourcePaths = Object.values(localizedReleaseManifest).map(
  ({ sourcePath }) => sourcePath,
);

export const getLocalizedHref = (
  href: string,
  localeSegment?: LocalizedUrlSegment,
) => {
  if (!localeSegment) {
    return href;
  }

  const suffixIndex = href.search(/[?#]/);
  const sourcePath = suffixIndex === -1 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : href.slice(suffixIndex);

  if (!releasedSourcePaths.includes(sourcePath as "/products")) {
    return href;
  }

  return `/${localeSegment}${sourcePath}${suffix}`;
};

export const getLocalizedProductsPath = (
  localeSegment: LocalizedUrlSegment,
) => getLocalizedHref("/products", localeSegment);

export const getProductsLanguageOptions = (sourcePath: string) =>
  sourcePath === localizedReleaseManifest.products.sourcePath &&
  localizedReleaseManifest.products.publicNavigation
    ? productsLanguageOptions
    : [];
