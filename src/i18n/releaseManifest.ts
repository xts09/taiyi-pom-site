import type { LocalizedUrlSegment } from "@/i18n/config";

export type LocalizedReleaseStatus = "public" | "preview" | "disabled";

export type LocalizedReleaseEntry = {
  sourcePath: string;
  status: LocalizedReleaseStatus;
  indexable: boolean;
  publicNavigation: boolean;
  includeInSitemap: boolean;
  includeInAlternates: boolean;
  localizedSegments?: readonly LocalizedUrlSegment[];
};

export type LocalizedReleaseSurface =
  "indexable" | "publicNavigation" | "includeInSitemap" | "includeInAlternates";

const publicRelease = {
  status: "public",
  indexable: true,
  publicNavigation: true,
  includeInSitemap: true,
  includeInAlternates: true,
} as const;

const chineseOnlyPublicRelease = {
  ...publicRelease,
  localizedSegments: ["zh"],
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
  basePomCategory: {
    sourcePath: "/products/categories/base-pom-resin",
    ...publicRelease,
  },
  glassBeadPomCategory: {
    sourcePath: "/products/categories/glass-bead-filled-pom-compound",
    ...publicRelease,
  },
  glassFiberPomCategory: {
    sourcePath: "/products/categories/glass-fiber-reinforced-pom-compound",
    ...publicRelease,
  },
  highImpactPomCategory: {
    sourcePath: "/products/categories/high-impact-pom-compound",
    ...publicRelease,
  },
  etm450Grade: {
    sourcePath: "/products/etm450-base-pom-resin",
    ...publicRelease,
  },
  etm750Grade: {
    sourcePath: "/products/etm750-base-pom-resin",
    ...publicRelease,
  },
  xt100Grade: {
    sourcePath: "/products/xt-100-base-pom-resin",
    ...publicRelease,
  },
  egb25Grade: {
    sourcePath: "/products/egb25-glass-bead-pom",
    ...publicRelease,
  },
  egh502hGrade: {
    sourcePath: "/products/egh502h-glass-fiber-pom",
    ...publicRelease,
  },
  ehi402tGrade: {
    sourcePath: "/products/ehi402t-high-impact-pom",
    ...publicRelease,
  },
  edr180Grade: {
    sourcePath: "/products/edr180-high-impact-pom",
    ...publicRelease,
  },
  technicalDataSheets: {
    sourcePath: "/technical-data-sheets",
    ...publicRelease,
  },
  contact: {
    sourcePath: "/contact",
    ...publicRelease,
  },
  applications: {
    sourcePath: "/applications",
    ...chineseOnlyPublicRelease,
  },
  automotiveApplication: {
    sourcePath: "/applications/automotive",
    ...chineseOnlyPublicRelease,
  },
  electronicsApplication: {
    sourcePath: "/applications/electronics",
    ...chineseOnlyPublicRelease,
  },
  conveyorAutomationApplication: {
    sourcePath: "/applications/conveyor-automation",
    ...chineseOnlyPublicRelease,
  },
  motionComponentsApplication: {
    sourcePath: "/applications/motion-components",
    ...chineseOnlyPublicRelease,
  },
  waterControlApplication: {
    sourcePath: "/applications/water-control",
    ...chineseOnlyPublicRelease,
  },
  washingMachineComponentsApplication: {
    sourcePath: "/applications/washing-machine-components",
    ...chineseOnlyPublicRelease,
  },
  outdoorEquipmentApplication: {
    sourcePath: "/applications/outdoor-equipment",
    ...chineseOnlyPublicRelease,
  },
  textileMachineryApplication: {
    sourcePath: "/applications/textile-machinery",
    ...chineseOnlyPublicRelease,
  },
  resources: {
    sourcePath: "/resources",
    ...chineseOnlyPublicRelease,
  },
  materialSelectionResources: {
    sourcePath: "/resources/material-selection",
    ...chineseOnlyPublicRelease,
  },
  processingTroubleshootingResources: {
    sourcePath: "/resources/processing-troubleshooting",
    ...chineseOnlyPublicRelease,
  },
  dataValidationResources: {
    sourcePath: "/resources/data-validation",
    ...chineseOnlyPublicRelease,
  },
  materialSelectionGuideResource: {
    sourcePath: "/resources/material-selection-guide",
    ...chineseOnlyPublicRelease,
  },
  alternativePomGradeValidationResource: {
    sourcePath: "/resources/alternative-pom-grade-validation",
    ...chineseOnlyPublicRelease,
  },
  wearResistantLowFrictionPomSelectionGuideResource: {
    sourcePath:
      "/resources/wear-resistant-low-friction-pom-selection-guide",
    ...chineseOnlyPublicRelease,
  },
  pomGearMaterialSelectionResource: {
    sourcePath: "/resources/pom-gear-material-selection",
    ...chineseOnlyPublicRelease,
  },
  processingGuideResource: {
    sourcePath: "/resources/processing-guide",
    ...chineseOnlyPublicRelease,
  },
  pomWarpageTroubleshootingResource: {
    sourcePath: "/resources/pom-warpage-troubleshooting",
    ...chineseOnlyPublicRelease,
  },
  applicationNotesResource: {
    sourcePath: "/resources/application-notes",
    ...chineseOnlyPublicRelease,
  },
  faqResource: {
    sourcePath: "/resources/faq",
    ...chineseOnlyPublicRelease,
  },
  reinforcementMaterialsOverviewResource: {
    sourcePath: "/resources/reinforcement-materials-overview",
    ...chineseOnlyPublicRelease,
  },
  pa6VsPa66ReinforcedPartsResource: {
    sourcePath: "/resources/pa6-vs-pa66-reinforced-parts",
    ...chineseOnlyPublicRelease,
  },
  glassFiberReinforcedPa6Pa66SelectionGuideResource: {
    sourcePath:
      "/resources/glass-fiber-reinforced-pa6-pa66-selection-guide",
    ...chineseOnlyPublicRelease,
  },
  ppaVsPa66MaterialSelectionResource: {
    sourcePath: "/resources/ppa-vs-pa66-material-selection",
    ...chineseOnlyPublicRelease,
  },
  pa6Pa66MoistureDryingConditioningGuideResource: {
    sourcePath:
      "/resources/pa6-pa66-moisture-drying-conditioning-guide",
    ...chineseOnlyPublicRelease,
  },
  conductiveAntistaticPa6Pa66PpaSelectionGuideResource: {
    sourcePath:
      "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
    ...chineseOnlyPublicRelease,
  },
} as const satisfies Record<string, LocalizedReleaseEntry>;

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
  {
    localeKey: "zh",
    hreflang: "zh-CN",
    urlSegment: "zh",
    shortLabel: "ZH",
    nativeLabel: "简体中文",
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

const releaseEntries = Object.values(localizedReleaseManifest);

export const isReleasedSourcePath = (
  sourcePath: string,
): sourcePath is ReleasedSourcePath =>
  releasedSourcePaths.includes(sourcePath as ReleasedSourcePath);

const getReleaseEntry = (sourcePath: string) =>
  releaseEntries.find((entry) => entry.sourcePath === sourcePath);

export const isReleaseSurfaceEnabled = (
  release: LocalizedReleaseEntry | undefined,
  surface: LocalizedReleaseSurface,
) => {
  if (release?.status !== "public" || !release[surface]) {
    return false;
  }

  if (surface === "includeInSitemap" || surface === "includeInAlternates") {
    return release.indexable;
  }

  return true;
};

export const isReleaseLocaleEnabled = (
  release: LocalizedReleaseEntry | undefined,
  localeSegment: LocalizedUrlSegment,
) =>
  release?.status === "public" &&
  (release.localizedSegments === undefined ||
    release.localizedSegments.includes(localeSegment));

export const isLocalizedReleaseIndexable = (
  sourcePath: string,
  localeSegment?: LocalizedUrlSegment,
) => {
  const release = getReleaseEntry(sourcePath);

  return (
    isReleaseSurfaceEnabled(release, "indexable") &&
    (!localeSegment || isReleaseLocaleEnabled(release, localeSegment))
  );
};

const createLocalizedPath = (
  sourcePath: ReleasedSourcePath,
  localeSegment: LocalizedUrlSegment,
) =>
  sourcePath === "/" ? `/${localeSegment}` : `/${localeSegment}${sourcePath}`;

const getLanguageOptionsForSurface = (
  sourcePath: string,
  surface: LocalizedReleaseSurface,
) => {
  if (!isReleasedSourcePath(sourcePath)) {
    return [];
  }

  if (!isReleaseSurfaceEnabled(getReleaseEntry(sourcePath), surface)) {
    return [];
  }

  const release = getReleaseEntry(sourcePath);

  return languageDefinitions
    .filter(
      (definition) =>
        !definition.urlSegment ||
        isReleaseLocaleEnabled(release, definition.urlSegment),
    )
    .map((definition) => ({
      localeKey: definition.localeKey,
      hreflang: definition.hreflang,
      href: definition.urlSegment
        ? createLocalizedPath(sourcePath, definition.urlSegment)
        : sourcePath,
      shortLabel: definition.shortLabel,
      nativeLabel: definition.nativeLabel,
    }));
};

export const getLanguageOptions = (sourcePath: string) =>
  getLanguageOptionsForSurface(sourcePath, "publicNavigation");

export const getSitemapLanguageOptions = (sourcePath: string) =>
  getLanguageOptionsForSurface(sourcePath, "includeInSitemap");

export type LanguageOption = ReturnType<typeof getLanguageOptions>[number];
export type ProductsLanguageOption = LanguageOption;

export const getLanguageAlternates = (
  sourcePath: ReleasedSourcePath,
): Record<string, string> => {
  const options = getLanguageOptionsForSurface(
    sourcePath,
    "includeInAlternates",
  );

  if (options.length === 0) {
    return {} satisfies Record<string, string>;
  }

  return {
    ...Object.fromEntries(
      options.map(({ hreflang, href }) => [hreflang, href]),
    ),
    "x-default": sourcePath,
  } satisfies Record<string, string>;
};

export const getLanguageAlternatesForPath = (
  sourcePath: string,
): Record<string, string> =>
  isReleasedSourcePath(sourcePath) ? getLanguageAlternates(sourcePath) : {};

export const homeLanguageOptions = getLanguageOptions("/");
export const productsLanguageOptions = getLanguageOptions("/products");
export const contactLanguageOptions = getLanguageOptions("/contact");

export const homeSitemapLanguageOptions = getSitemapLanguageOptions("/");
export const productsSitemapLanguageOptions =
  getSitemapLanguageOptions("/products");
export const contactSitemapLanguageOptions =
  getSitemapLanguageOptions("/contact");

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
  const release = getReleaseEntry(sourcePath);

  if (
    !isReleasedSourcePath(sourcePath) ||
    !isReleaseLocaleEnabled(release, localeSegment)
  ) {
    return href;
  }

  return `${createLocalizedPath(sourcePath, localeSegment)}${suffix}`;
};

export const isEnglishFallbackHref = (
  href: string,
  localeSegment?: LocalizedUrlSegment,
) => Boolean(localeSegment) && getLocalizedHref(href, localeSegment) === href;

export const getLocalizedHomePath = (localeSegment: LocalizedUrlSegment) =>
  getLocalizedHref("/", localeSegment);

export const getLocalizedProductsPath = (localeSegment: LocalizedUrlSegment) =>
  getLocalizedHref("/products", localeSegment);

export const getLocalizedContactPath = (localeSegment: LocalizedUrlSegment) =>
  getLocalizedHref("/contact", localeSegment);

export const getProductsLanguageOptions = getLanguageOptions;
