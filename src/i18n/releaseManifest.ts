import type { LocalizedUrlSegment } from "@/i18n/config";
import generatedCatalog from "../generated/catalog.json" with { type: "json" };
import type { CatalogEngineeringTdsRecord } from "../data/catalog/types.ts";
import { glassFiberCaseStudies, getGlassFiberCasePath } from "../data/glassFiberCaseStudies.ts";

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

const allLocalizedSegments = ["de", "fr", "pt-br", "zh"] as const satisfies
  readonly LocalizedUrlSegment[];

const defaultNonPomGradeLocalizedSegments = ["de", "zh"] as const satisfies
  readonly LocalizedUrlSegment[];

const allLocalizedPublicRelease = {
  ...publicRelease,
  localizedSegments: allLocalizedSegments,
} as const;

export const legacyFiveLocaleNonPomGradeSlugs = [
  "eag108u-pa6-glass-fiber-reinforced",
  "eag115-pa6-glass-fiber-reinforced",
  "eag115h-pa6-glass-fiber-reinforced",
  "eag115u-pa6-glass-fiber-reinforced",
  "eag120-pa6-glass-fiber-reinforced",
  "eag120u-pa6-glass-fiber-reinforced",
  "eag130-pa6-glass-fiber-reinforced",
  "eag130a-pa6-glass-fiber-reinforced",
  "eag130h-pa6-glass-fiber-reinforced",
  "eag130u-pa6-glass-fiber-reinforced",
  "eag132h-pa6-glass-fiber-reinforced",
  "eag135-pa6-glass-fiber-reinforced",
  "eag140-pa6-glass-fiber-reinforced",
  "eag140u-pa6-glass-fiber-reinforced",
  "eag145-pa6-glass-fiber-reinforced",
  "eag145a-pa6-glass-fiber-reinforced",
  "eag150u-pa6-glass-fiber-reinforced",
  "eam120-pa6-mineral-filled",
  "eam125-pa6-mineral-filled",
  "eam130-pa6-mineral-filled",
  "eam140-pa6-mineral-filled",
  "eam140a-pa6-mineral-filled",
  "eac115c-pa6-carbon-fiber-reinforced",
  "ear110h-pa6-mold-release",
  "ear120h-pa6-mold-release",
  "eai110-pa6-impact-modified",
  "eai120-pa6-impact-modified",
  "eai130u-pa6-impact-modified",
  "eai140-pa6-impact-modified",
  "eai150-pa6-impact-modified",
  "eai160-pa6-impact-modified",
  "eag125f-pa6-flame-retardant",
  "eag125v0-pa6-v0-flame-retardant",
  "eab230-pa66-glass-bead-filled",
  "eab250-pa66-glass-bead-filled",
  "eax238-pa66-gf-mineral-reinforced",
  "eax240-pa66-gf-mineral-reinforced",
  "eax240a-pa66-gf-mineral-reinforced",
  "eag215-pa66-glass-fiber-reinforced",
  "eag215a-pa66-glass-fiber-reinforced",
  "eag220-pa66-glass-fiber-reinforced",
  "eag225-pa66-glass-fiber-reinforced",
  "eag225h-pa66-glass-fiber-reinforced",
  "eag230-pa66-glass-fiber-reinforced",
  "eag230h-pa66-glass-fiber-reinforced",
  "eag230ha-pa66-glass-fiber-reinforced",
  "eag233-pa66-glass-fiber-reinforced",
  "eag233h-pa66-glass-fiber-reinforced",
  "eag235h-pa66-glass-fiber-reinforced",
  "eag240-pa66-glass-fiber-reinforced",
  "eag245-pa66-glass-fiber-reinforced",
  "eag250-pa66-glass-fiber-reinforced",
  "eag250h-pa66-glass-fiber-reinforced",
  "eam240-pa66-mineral-filled",
  "eam240a-pa66-mineral-filled",
  "eaw210-pa66-wear-low-friction",
  "eaw220-pa66-wear-low-friction",
  "eac220c-pa66-carbon-fiber-reinforced",
  "ear210-pa66-mold-release",
  "eai210-pa66-impact-modified",
  "eai220-pa66-impact-modified",
  "eai230-pa66-impact-modified",
  "eai240u-pa66-impact-modified",
  "eai250-pa66-impact-modified",
  "eag210v0-pa66-flame-retardant",
  "eag215v0-pa66-flame-retardant",
  "eag225v0-pa66-flame-retardant",
  "eag225v0a-pa66-flame-retardant",
  "eag225v0b-pa66-flame-retardant",
  "eag230v0-pa66-flame-retardant",
  "eax645-ppa-gf-mineral-reinforced",
  "eag630h-ppa-glass-fiber-reinforced",
  "eag650h-ppa-glass-fiber-reinforced",
  "eaw610-ppa-wear-low-friction",
  "eaw620-ppa-wear-low-friction",
] as const;

const legacyFiveLocaleNonPomGradeSlugSet = new Set<string>(
  legacyFiveLocaleNonPomGradeSlugs,
);

type CatalogGradeReleaseIdentity = {
  kind: "product" | "engineering-tds";
  slug: string;
};

export const getCatalogGradeLocalizedSegments = ({
  kind,
  slug,
}: CatalogGradeReleaseIdentity): readonly LocalizedUrlSegment[] =>
  kind === "product" || legacyFiveLocaleNonPomGradeSlugSet.has(slug)
    ? allLocalizedSegments
    : defaultNonPomGradeLocalizedSegments;

const legacyRedirectRelease = {
  status: "public",
  indexable: false,
  publicNavigation: false,
  includeInSitemap: false,
  includeInAlternates: false,
  localizedSegments: allLocalizedSegments,
} as const;

export const localizedReleaseManifest = {
  caseStudies: {
    sourcePath: "/case-studies",
    ...publicRelease,
    localizedSegments: ["zh"],
  },
  gearEnduranceCase: {
    sourcePath: "/case-studies/etm-100p-armrest-gear-endurance",
    ...publicRelease,
    localizedSegments: ["zh"],
  },
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
    ...allLocalizedPublicRelease,
  },
  conductiveAntistaticCompounds: {
    sourcePath: "/products/conductive-antistatic-compounds",
    ...allLocalizedPublicRelease,
  },
  pomDirectory: {
    sourcePath: "/products/categories/pom",
    ...allLocalizedPublicRelease,
  },
  wearResistantLowFrictionPomCategory: {
    sourcePath:
      "/products/categories/wear-resistant-low-friction-pom-compound",
    ...allLocalizedPublicRelease,
  },
  uvResistantPomCategory: {
    sourcePath: "/products/categories/uv-resistant-pom-compound",
    ...allLocalizedPublicRelease,
  },
  carbonFiberReinforcedPomCategory: {
    sourcePath: "/products/categories/carbon-fiber-reinforced-pom-compound",
    ...allLocalizedPublicRelease,
  },
  conductiveAntistaticPomCategory: {
    sourcePath: "/products/categories/conductive-antistatic-pom-compound",
    ...allLocalizedPublicRelease,
  },
  ultraHighFlowPomCategory: {
    sourcePath: "/products/categories/ultra-high-flow-pom",
    ...allLocalizedPublicRelease,
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
    ...allLocalizedPublicRelease,
  },
  pa66CompoundCategory: {
    sourcePath: "/products/categories/pa66-compound",
    ...allLocalizedPublicRelease,
  },
  glassFiberReinforcedPa6Landing: {
    sourcePath: "/products/categories/glass-fiber-reinforced-pa6-compound",
    ...publicRelease,
  },
  glassFiberReinforcedPa66Landing: {
    sourcePath: "/products/categories/glass-fiber-reinforced-pa66-compound",
    ...publicRelease,
  },
  glassFiberReinforcedPpaLanding: {
    sourcePath: "/products/categories/glass-fiber-reinforced-ppa-compound",
    ...publicRelease,
  },
  ppaCompoundCategory: {
    sourcePath: "/products/categories/ppa-compound",
    ...allLocalizedPublicRelease,
  },
  etm090ncGrade: {
    sourcePath: "/products/etm090nc-base-pom-resin",
    ...allLocalizedPublicRelease,
  },
  etm130Grade: {
    sourcePath: "/products/etm130-base-pom-resin",
    ...allLocalizedPublicRelease,
  },
  etm270Grade: {
    sourcePath: "/products/etm270-base-pom-resin",
    ...allLocalizedPublicRelease,
  },
  etm450Grade: {
    sourcePath: "/products/etm450-base-pom-resin",
    ...allLocalizedPublicRelease,
  },
  etm750Grade: {
    sourcePath: "/products/etm750-base-pom-resin",
    ...allLocalizedPublicRelease,
  },
  etm1500Grade: {
    sourcePath: "/products/etm1500-base-pom-resin",
    ...allLocalizedPublicRelease,
  },
  etm1800Grade: {
    sourcePath: "/products/etm1800-base-pom-resin",
    ...allLocalizedPublicRelease,
  },
  xt100Grade: {
    sourcePath: "/products/xt-100-base-pom-resin",
    ...allLocalizedPublicRelease,
  },
  egb25Grade: {
    sourcePath: "/products/egb25-glass-bead-pom",
    ...allLocalizedPublicRelease,
  },
  egh502hGrade: {
    sourcePath: "/products/egh502h-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  edr100Grade: {
    sourcePath: "/products/edr100-high-impact-pom",
    ...allLocalizedPublicRelease,
  },
  ehi100stGrade: {
    sourcePath: "/products/ehi100st-high-impact-pom",
    ...allLocalizedPublicRelease,
  },
  ehi202tGrade: {
    sourcePath: "/products/ehi202t-high-impact-pom",
    ...allLocalizedPublicRelease,
  },
  ehi402tGrade: {
    sourcePath: "/products/ehi402t-high-impact-pom",
    ...allLocalizedPublicRelease,
  },
  ehi602tGrade: {
    sourcePath: "/products/ehi602t-high-impact-pom",
    ...allLocalizedPublicRelease,
  },
  edr180Grade: {
    sourcePath: "/products/edr180-high-impact-pom",
    ...allLocalizedPublicRelease,
  },
  etm270hGrade: {
    sourcePath: "/products/etm270h-wear-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  epaf100aGrade: {
    sourcePath: "/products/epaf100a-high-wear-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  eptl402Grade: {
    sourcePath: "/products/eptl402-high-wear-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  enm1040Grade: {
    sourcePath: "/products/enm1040-high-wear-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  edm111Grade: {
    sourcePath: "/products/edm-111-high-wear-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  ems162Grade: {
    sourcePath: "/products/ems162-high-wear-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  etm090uGrade: {
    sourcePath: "/products/etm090u-uv-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  etm100puGrade: {
    sourcePath: "/products/etm100pu-uv-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  edr180uGrade: {
    sourcePath: "/products/edr180u-uv-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  edr2000zdUvGrade: {
    sourcePath: "/products/edr2000zd-uv-resistant-pom",
    ...allLocalizedPublicRelease,
  },
  egh202hGrade: {
    sourcePath: "/products/egh202h-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh302hGrade: {
    sourcePath: "/products/egh302h-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh402hGrade: {
    sourcePath: "/products/egh402h-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh402tGrade: {
    sourcePath: "/products/egh402t-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh502tGrade: {
    sourcePath: "/products/egh502t-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh580hGrade: {
    sourcePath: "/products/egh580h-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh580tGrade: {
    sourcePath: "/products/egh580t-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh602hGrade: {
    sourcePath: "/products/egh602h-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh602tGrade: {
    sourcePath: "/products/egh602t-glass-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  ecf200Grade: {
    sourcePath: "/products/ecf200-carbon-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  ecf300Grade: {
    sourcePath: "/products/ecf300-carbon-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  ecf400Grade: {
    sourcePath: "/products/ecf400-carbon-fiber-pom",
    ...allLocalizedPublicRelease,
  },
  egh25cnGrade: {
    sourcePath: "/products/egh25cn-conductive-antistatic-pom",
    ...allLocalizedPublicRelease,
  },
  ecn1003bGrade: {
    sourcePath: "/products/ecn1003b-conductive-pom",
    ...allLocalizedPublicRelease,
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
    ...allLocalizedPublicRelease,
  },
  modifiedPomCompounds: {
    sourcePath: "/modified-pom-compounds",
    ...legacyRedirectRelease,
  },
  wearResistantLowFrictionPom: {
    sourcePath: "/wear-resistant-low-friction-pom",
    ...allLocalizedPublicRelease,
  },
  conductiveAntistaticPom: {
    sourcePath: "/conductive-antistatic-pom",
    ...allLocalizedPublicRelease,
  },
  applications: {
    sourcePath: "/applications",
    ...allLocalizedPublicRelease,
  },
  automotiveApplication: {
    sourcePath: "/applications/automotive",
    ...allLocalizedPublicRelease,
  },
  electronicsApplication: {
    sourcePath: "/applications/electronics",
    ...allLocalizedPublicRelease,
  },
  conveyorAutomationApplication: {
    sourcePath: "/applications/conveyor-automation",
    ...allLocalizedPublicRelease,
  },
  motionComponentsApplication: {
    sourcePath: "/applications/motion-components",
    ...allLocalizedPublicRelease,
  },
  waterControlApplication: {
    sourcePath: "/applications/water-control",
    ...allLocalizedPublicRelease,
  },
  washingMachineComponentsApplication: {
    sourcePath: "/applications/washing-machine-components",
    ...allLocalizedPublicRelease,
  },
  outdoorEquipmentApplication: {
    sourcePath: "/applications/outdoor-equipment",
    ...allLocalizedPublicRelease,
  },
  textileMachineryApplication: {
    sourcePath: "/applications/textile-machinery",
    ...allLocalizedPublicRelease,
  },
  components: {
    sourcePath: "/components",
    ...allLocalizedPublicRelease,
  },
  precisionPlasticGearsComponent: {
    sourcePath: "/components/precision-plastic-gears",
    ...allLocalizedPublicRelease,
  },
  bushingsAndSleevesComponent: {
    sourcePath: "/components/bushings-and-sleeves",
    ...allLocalizedPublicRelease,
  },
  conveyorChainComponentsComponent: {
    sourcePath: "/components/conveyor-chain-components",
    ...allLocalizedPublicRelease,
  },
  valveSpoolsAndCartridgesComponent: {
    sourcePath: "/components/valve-spools-and-cartridges",
    ...allLocalizedPublicRelease,
  },
  textileGuideComponentsComponent: {
    sourcePath: "/components/textile-guide-components",
    ...allLocalizedPublicRelease,
  },
  icHandlingTraysComponent: {
    sourcePath: "/components/ic-handling-trays",
    ...allLocalizedPublicRelease,
  },
  resources: {
    sourcePath: "/resources",
    ...allLocalizedPublicRelease,
  },
  materialSelectionResources: {
    sourcePath: "/resources/material-selection",
    ...allLocalizedPublicRelease,
  },
  processingTroubleshootingResources: {
    sourcePath: "/resources/processing-troubleshooting",
    ...allLocalizedPublicRelease,
  },
  dataValidationResources: {
    sourcePath: "/resources/data-validation",
    ...allLocalizedPublicRelease,
  },
  chinaplas2026News: {
    sourcePath: "/news/chinaplas-2026",
    ...publicRelease,
  },
  materialSelectionGuideResource: {
    sourcePath: "/resources/material-selection-guide",
    ...allLocalizedPublicRelease,
  },
  alternativePomGradeValidationResource: {
    sourcePath: "/resources/alternative-pom-grade-validation",
    ...allLocalizedPublicRelease,
  },
  wearResistantLowFrictionPomSelectionGuideResource: {
    sourcePath:
      "/resources/wear-resistant-low-friction-pom-selection-guide",
    ...allLocalizedPublicRelease,
  },
  pomGearMaterialSelectionResource: {
    sourcePath: "/resources/pom-gear-material-selection",
    ...allLocalizedPublicRelease,
  },
  processingGuideResource: {
    sourcePath: "/resources/processing-guide",
    ...allLocalizedPublicRelease,
  },
  pomWarpageTroubleshootingResource: {
    sourcePath: "/resources/pom-warpage-troubleshooting",
    ...allLocalizedPublicRelease,
  },
  applicationNotesResource: {
    sourcePath: "/resources/application-notes",
    ...allLocalizedPublicRelease,
  },
  faqResource: {
    sourcePath: "/resources/faq",
    ...allLocalizedPublicRelease,
  },
  reinforcementMaterialsOverviewResource: {
    sourcePath: "/resources/reinforcement-materials-overview",
    ...allLocalizedPublicRelease,
  },
  pa6VsPa66ReinforcedPartsResource: {
    sourcePath: "/resources/pa6-vs-pa66-reinforced-parts",
    ...allLocalizedPublicRelease,
  },
  glassFiberReinforcedPa6Pa66SelectionGuideResource: {
    sourcePath:
      "/resources/glass-fiber-reinforced-pa6-pa66-selection-guide",
    ...allLocalizedPublicRelease,
  },
  ppaVsPa66MaterialSelectionResource: {
    sourcePath: "/resources/ppa-vs-pa66-material-selection",
    ...allLocalizedPublicRelease,
  },
  pa6Pa66MoistureDryingConditioningGuideResource: {
    sourcePath:
      "/resources/pa6-pa66-moisture-drying-conditioning-guide",
    ...allLocalizedPublicRelease,
  },
  conductiveAntistaticPa6Pa66PpaSelectionGuideResource: {
    sourcePath:
      "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
    ...allLocalizedPublicRelease,
  },
} as const satisfies Record<string, LocalizedReleaseEntry>;

export const engineeringGradeReleaseEntries: readonly LocalizedReleaseEntry[] =
  (generatedCatalog as CatalogEngineeringTdsRecord[])
    .filter(
      (record): record is CatalogEngineeringTdsRecord =>
        record.kind === "engineering-tds" && record.seo?.indexable !== false,
    )
    .map((record) => ({
      sourcePath: `/products/${record.slug}`,
      ...publicRelease,
      localizedSegments: getCatalogGradeLocalizedSegments(record),
    }));

export type ReleasedSourcePath =
  | (typeof localizedReleaseManifest)[keyof typeof localizedReleaseManifest]["sourcePath"]
  | `/products/${string}`
  | `/case-studies/${string}`;

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
  ...engineeringGradeReleaseEntries,
  ...glassFiberCaseStudies.map((study) => ({
    sourcePath: getGlassFiberCasePath(study), ...publicRelease, localizedSegments: ["zh"] as const,
  })),
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
