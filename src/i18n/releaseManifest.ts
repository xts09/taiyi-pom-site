import type { LocalizedUrlSegment } from "@/i18n/config";

const publicRelease = {
  status: "public",
  indexable: true,
  publicNavigation: true,
  includeInSitemap: true,
  includeInAlternates: true,
} as const;

export const localizedReleaseManifest = {
  home: {
    sourcePath: "/",
    ...publicRelease,
  },
  products: {
    sourcePath: "/products",
    ...publicRelease,
  },
  contact: {
    sourcePath: "/contact",
    ...publicRelease,
  },
} as const;

export type ReleasedSourcePath =
  (typeof localizedReleaseManifest)[keyof typeof localizedReleaseManifest]["sourcePath"];

const languageDefinitions = [
  {
    localeKey: "en",
    hreflang: "en",
    urlSegment: undefined,
    shortLabel: "EN",
    nativeLabel: "English",
  },
  {
    localeKey: "de",
    hreflang: "de",
    urlSegment: "de",
    shortLabel: "DE",
    nativeLabel: "Deutsch",
  },
  {
    localeKey: "fr",
    hreflang: "fr",
    urlSegment: "fr",
    shortLabel: "FR",
    nativeLabel: "Français",
  },
  {
    localeKey: "pt-br",
    hreflang: "pt-BR",
    urlSegment: "pt-br",
    shortLabel: "PT",
    nativeLabel: "Português",
  },
] as const satisfies ReadonlyArray<{
  localeKey: "en" | LocalizedUrlSegment;
  hreflang: string;
  urlSegment?: LocalizedUrlSegment;
  shortLabel: string;
  nativeLabel: string;
}>;

const releasedSourcePaths = Object.values(localizedReleaseManifest).map(
  ({ sourcePath }) => sourcePath,
);

const isReleasedSourcePath = (sourcePath: string): sourcePath is ReleasedSourcePath =>
  releasedSourcePaths.includes(sourcePath as ReleasedSourcePath);

const createLocalizedPath = (
  sourcePath: ReleasedSourcePath,
  localeSegment: LocalizedUrlSegment,
) => (sourcePath === "/" ? `/${localeSegment}` : `/${localeSegment}${sourcePath}`);

export const getLanguageOptions = (sourcePath: string) => {
  if (!isReleasedSourcePath(sourcePath)) {
    return [];
  }

  const release = Object.values(localizedReleaseManifest).find(
    (entry) => entry.sourcePath === sourcePath,
  );

  if (!release?.publicNavigation) {
    return [];
  }

  return languageDefinitions.map((definition) => ({
    localeKey: definition.localeKey,
    hreflang: definition.hreflang,
    href: definition.urlSegment
      ? createLocalizedPath(sourcePath, definition.urlSegment)
      : sourcePath,
    shortLabel: definition.shortLabel,
    nativeLabel: definition.nativeLabel,
  }));
};

export type LanguageOption = ReturnType<typeof getLanguageOptions>[number];
export type ProductsLanguageOption = LanguageOption;

export const getLanguageAlternates = (sourcePath: ReleasedSourcePath) => {
  const options = getLanguageOptions(sourcePath);

  return {
    ...Object.fromEntries(
      options.map(({ hreflang, href }) => [hreflang, href]),
    ),
    "x-default": sourcePath,
  } satisfies Record<string, string>;
};

export const homeLanguageOptions = getLanguageOptions("/");
export const productsLanguageOptions = getLanguageOptions("/products");
export const contactLanguageOptions = getLanguageOptions("/contact");

export const homeLanguageAlternates = getLanguageAlternates("/");
export const productsLanguageAlternates = getLanguageAlternates("/products");
export const contactLanguageAlternates = getLanguageAlternates("/contact");

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

  if (!isReleasedSourcePath(sourcePath)) {
    return href;
  }

  return `${createLocalizedPath(sourcePath, localeSegment)}${suffix}`;
};

export const getLocalizedHomePath = (localeSegment: LocalizedUrlSegment) =>
  getLocalizedHref("/", localeSegment);

export const getLocalizedProductsPath = (
  localeSegment: LocalizedUrlSegment,
) => getLocalizedHref("/products", localeSegment);

export const getLocalizedContactPath = (
  localeSegment: LocalizedUrlSegment,
) => getLocalizedHref("/contact", localeSegment);

export const getProductsLanguageOptions = getLanguageOptions;
