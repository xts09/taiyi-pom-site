import type { LocalizedUrlSegment } from "@/i18n/config";
import generatedCatalog from "../generated/catalog.json" with { type: "json" };
import type { CatalogEngineeringTdsRecord } from "../data/catalog/types.ts";

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
  localizedSegments: ["de", "fr", "pt-br", "zh"],
} as const;

export const chineseEngineeringGradeReleaseEntries: readonly LocalizedReleaseEntry[] =
  (generatedCatalog as CatalogEngineeringTdsRecord[])
    .filter(
      (record): record is CatalogEngineeringTdsRecord =>
        record.kind === "engineering-tds" && record.seo?.indexable !== false,
    )
    .map((document) => ({
      sourcePath: `/products/${document.slug}`,
      ...chineseOnlyPublicRelease,
    }));

export const localizedReleaseManifest = {
  home: {
    sourcePath: "/",
    ...publicRelease,
  },
  products: {
    sourcePath: "/products",
    ...publicRelease,
  },
  privacy: {
    sourcePath: "/privacy",
    ...chineseOnlyPublicRelease,
  },
  conductiveAntistaticCompounds: {
    sourcePath: "/products/conductive-antistatic-compounds",
    ...chineseOnlyPublicRelease,
  },
  pomDirectory: {
    sourcePath: "/products/categories/pom",
    ...chineseOnlyPublicRelease,
  },
  wearResistantLowFrictionPomCategory: {
    sourcePath:
      "/products/categories/wear-resistant-low-friction-pom-compound",
    ...chineseOnlyPublicRelease,
  },
  uvResistantPomCategory: {
    sourcePath: "/products/categories/uv-resistant-pom-compound",
    ...chineseOnlyPublicRelease,
  },
  carbonFiberReinforcedPomCategory: {
    sourcePath: "/products/categories/carbon-fiber-reinforced-pom-compound",
    ...chineseOnlyPublicRelease,
  },
  conductiveAntistaticPomCategory: {
    sourcePath: "/products/categories/conductive-antistatic-pom-compound",
    ...chineseOnlyPublicRelease,
  },
  ultraHighFlowPomCategory: {
    sourcePath: "/products/categories/ultra-high-flow-pom",
    ...chineseOnlyPublicRelease,
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
  pa6CompoundCategory: {
    sourcePath: "/products/categories/pa6-compound",
    ...chineseOnlyPublicRelease,
  },
  pa66CompoundCategory: {
    sourcePath: "/products/categories/pa66-compound",
    ...chineseOnlyPublicRelease,
  },
  ppaCompoundCategory: {
    sourcePath: "/products/categories/ppa-compound",
    ...chineseOnlyPublicRelease,
  },
  etm090ncGrade: {
    sourcePath: "/products/etm090nc-base-pom-resin",
    ...chineseOnlyPublicRelease,
  },
  etm130Grade: {
    sourcePath: "/products/etm130-base-pom-resin",
    ...chineseOnlyPublicRelease,
  },
  etm270Grade: {
    sourcePath: "/products/etm270-base-pom-resin",
    ...chineseOnlyPublicRelease,
  },
  etm450Grade: {
    sourcePath: "/products/etm450-base-pom-resin",
    ...publicRelease,
  },
  etm750Grade: {
    sourcePath: "/products/etm750-base-pom-resin",
    ...publicRelease,
  },
  etm1500Grade: {
    sourcePath: "/products/etm1500-base-pom-resin",
    ...chineseOnlyPublicRelease,
  },
  etm1800Grade: {
    sourcePath: "/products/etm1800-base-pom-resin",
    ...chineseOnlyPublicRelease,
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
  edr100Grade: {
    sourcePath: "/products/edr100-high-impact-pom",
    ...chineseOnlyPublicRelease,
  },
  ehi100stGrade: {
    sourcePath: "/products/ehi100st-high-impact-pom",
    ...chineseOnlyPublicRelease,
  },
  ehi202tGrade: {
    sourcePath: "/products/ehi202t-high-impact-pom",
    ...chineseOnlyPublicRelease,
  },
  ehi402tGrade: {
    sourcePath: "/products/ehi402t-high-impact-pom",
    ...publicRelease,
  },
  ehi602tGrade: {
    sourcePath: "/products/ehi602t-high-impact-pom",
    ...chineseOnlyPublicRelease,
  },
  edr180Grade: {
    sourcePath: "/products/edr180-high-impact-pom",
    ...publicRelease,
  },
  etm270hGrade: {
    sourcePath: "/products/etm270h-wear-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  epaf100aGrade: {
    sourcePath: "/products/epaf100a-high-wear-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  eptl402Grade: {
    sourcePath: "/products/eptl402-high-wear-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  enm1040Grade: {
    sourcePath: "/products/enm1040-high-wear-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  edm111Grade: {
    sourcePath: "/products/edm-111-high-wear-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  ems162Grade: {
    sourcePath: "/products/ems162-high-wear-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  etm090uGrade: {
    sourcePath: "/products/etm090u-uv-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  etm100puGrade: {
    sourcePath: "/products/etm100pu-uv-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  edr180uGrade: {
    sourcePath: "/products/edr180u-uv-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  edr2000zdUvGrade: {
    sourcePath: "/products/edr2000zd-uv-resistant-pom",
    ...chineseOnlyPublicRelease,
  },
  egh202hGrade: {
    sourcePath: "/products/egh202h-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh302hGrade: {
    sourcePath: "/products/egh302h-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh402hGrade: {
    sourcePath: "/products/egh402h-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh402tGrade: {
    sourcePath: "/products/egh402t-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh502tGrade: {
    sourcePath: "/products/egh502t-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh580hGrade: {
    sourcePath: "/products/egh580h-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh580tGrade: {
    sourcePath: "/products/egh580t-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh602hGrade: {
    sourcePath: "/products/egh602h-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh602tGrade: {
    sourcePath: "/products/egh602t-glass-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  ecf200Grade: {
    sourcePath: "/products/ecf200-carbon-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  ecf300Grade: {
    sourcePath: "/products/ecf300-carbon-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  ecf400Grade: {
    sourcePath: "/products/ecf400-carbon-fiber-pom",
    ...chineseOnlyPublicRelease,
  },
  egh25cnGrade: {
    sourcePath: "/products/egh25cn-conductive-antistatic-pom",
    ...chineseOnlyPublicRelease,
  },
  ecn1003bGrade: {
    sourcePath: "/products/ecn1003b-conductive-pom",
    ...chineseOnlyPublicRelease,
  },
  technicalDataSheets: {
    sourcePath: "/technical-data-sheets",
    ...publicRelease,
  },
  contact: {
    sourcePath: "/contact",
    ...publicRelease,
  },
  about: {
    sourcePath: "/about",
    ...chineseOnlyPublicRelease,
  },
  modifiedPomCompounds: {
    sourcePath: "/modified-pom-compounds",
    ...chineseOnlyPublicRelease,
  },
  wearResistantLowFrictionPom: {
    sourcePath: "/wear-resistant-low-friction-pom",
    ...chineseOnlyPublicRelease,
  },
  conductiveAntistaticPom: {
    sourcePath: "/conductive-antistatic-pom",
    ...chineseOnlyPublicRelease,
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
  components: {
    sourcePath: "/components",
    ...chineseOnlyPublicRelease,
  },
  precisionPlasticGearsComponent: {
    sourcePath: "/components/precision-plastic-gears",
    ...chineseOnlyPublicRelease,
  },
  bushingsAndSleevesComponent: {
    sourcePath: "/components/bushings-and-sleeves",
    ...chineseOnlyPublicRelease,
  },
  conveyorChainComponentsComponent: {
    sourcePath: "/components/conveyor-chain-components",
    ...chineseOnlyPublicRelease,
  },
  valveSpoolsAndCartridgesComponent: {
    sourcePath: "/components/valve-spools-and-cartridges",
    ...chineseOnlyPublicRelease,
  },
  textileGuideComponentsComponent: {
    sourcePath: "/components/textile-guide-components",
    ...chineseOnlyPublicRelease,
  },
  icHandlingTraysComponent: {
    sourcePath: "/components/ic-handling-trays",
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
  chinaplas2026News: {
    sourcePath: "/resources/news/chinaplas-2026",
    ...publicRelease,
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
  | (typeof localizedReleaseManifest)[keyof typeof localizedReleaseManifest]["sourcePath"]
  | `/products/${string}`;

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

const releaseEntries: readonly LocalizedReleaseEntry[] = [
  ...Object.values(localizedReleaseManifest),
  ...chineseEngineeringGradeReleaseEntries,
];

const releasedSourcePaths = releaseEntries.map(
  ({ sourcePath }) => sourcePath,
);

export const getSitemapReleasedSourcePaths = () =>
  releaseEntries
    .filter(
      (release) =>
        release.status === "public" &&
        release.indexable &&
        release.includeInSitemap,
    )
    .map(({ sourcePath }) => sourcePath);

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
