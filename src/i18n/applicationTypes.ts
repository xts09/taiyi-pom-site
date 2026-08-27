import type { ApplicationTaxonomyKey } from "@/i18n/types";

export const localizedApplicationSlugs = [
  "automotive",
  "electronics",
  "conveyor-automation",
  "motion-components",
  "water-control",
  "washing-machine-components",
  "outdoor-equipment",
  "textile-machinery",
] as const satisfies readonly ApplicationTaxonomyKey[];

export type LocalizedApplicationSlug =
  (typeof localizedApplicationSlugs)[number];

export const isLocalizedApplicationSlug = (
  value: string,
): value is LocalizedApplicationSlug =>
  localizedApplicationSlugs.includes(value as LocalizedApplicationSlug);

export const applicationIndexComponentSlugs = [
  "precision-plastic-gears",
  "bushings-and-sleeves",
  "conveyor-chain-components",
  "valve-spools-and-cartridges",
  "textile-guide-components",
  "ic-handling-trays",
] as const;

export type ApplicationIndexComponentSlug =
  (typeof applicationIndexComponentSlugs)[number];

export type ApplicationDirectoryCardMessages = {
  title: string;
  description: string;
  imageAlt: string;
};

export const localizedApplicationDetailSliceASlugs = [
  "automotive",
  "electronics",
  "conveyor-automation",
  "motion-components",
] as const satisfies readonly LocalizedApplicationSlug[];

export type LocalizedApplicationDetailSliceASlug =
  (typeof localizedApplicationDetailSliceASlugs)[number];

export type LocalizedApplicationDirectionMessages = {
  label: string;
  keyUse: string;
  shortLabel: string;
};

export type LocalizedApplicationImageMessages = {
  alt: string;
  label: string;
  description?: string;
};

export type LocalizedApplicationPartMessages = {
  label: string;
  description: string;
  imageAlt?: string;
};

export type LocalizedApplicationEngineeringGroupMessages = {
  title: string;
  items: readonly string[];
};

export type LocalizedApplicationQualityEvidenceMessages = {
  standard: string;
  system: string;
  scope: string;
  action: string;
  href: string;
};

export type LocalizedApplicationDetailUiOverrides = Partial<
  Pick<
    ApplicationDetailUiMessages,
    "navigation" | "hero" | "scene" | "parts" | "materials" | "evaluation"
  >
>;

export type LocalizedApplicationProfileMessages = {
  title: string;
  shortTitle?: string;
  description: string;
  heroImageAlt?: string;
  detailHeroImageAlt?: string;
  materialDirections: readonly LocalizedApplicationDirectionMessages[];
  images: readonly LocalizedApplicationImageMessages[];
  parts: readonly LocalizedApplicationPartMessages[];
  engineeringFit: readonly LocalizedApplicationEngineeringGroupMessages[];
  detailUi?: LocalizedApplicationDetailUiOverrides;
  selectionItems?: readonly string[];
  showSelectionInputs?: boolean;
  qualityEvidence?: LocalizedApplicationQualityEvidenceMessages;
};

export type LocalizedApplicationProfileMap = Record<
  LocalizedApplicationSlug,
  LocalizedApplicationProfileMessages
>;

export type LocalizedApplicationDetailSliceAMessages = Record<
  LocalizedApplicationDetailSliceASlug,
  LocalizedApplicationProfileMessages
>;

export const localizedApplicationDetailSliceBSlugs = [
  "water-control",
  "washing-machine-components",
  "outdoor-equipment",
  "textile-machinery",
] as const satisfies readonly LocalizedApplicationSlug[];

export type LocalizedApplicationDetailSliceBSlug =
  (typeof localizedApplicationDetailSliceBSlugs)[number];

export type LocalizedApplicationDetailSliceBMessages = Record<
  LocalizedApplicationDetailSliceBSlug,
  LocalizedApplicationProfileMessages
>;

export type ApplicationDetailUiMessages = {
  metadata: {
    titleSuffix: string;
    descriptionSuffix: string;
  };
  breadcrumb: {
    home: string;
    applications: string;
  };
  contactSource: string;
  navigation: {
    ariaLabel: string;
    tabsAriaLabel: string;
    mobileMenuLabel: string;
    scene: string;
    parts: string;
    materials: string;
    evaluation: string;
  };
  hero: {
    eyebrow: string;
    primaryAction: string;
    secondaryAction: string;
  };
  scene: {
    eyebrow: string;
    title: string;
    visualDescription: string;
    basicDescription: string;
    imageAltSuffix: string;
    keywordsAria: string;
    galleryAria: string;
    reviewPointFallback: string;
    reviewTitles: readonly string[];
  };
  parts: {
    eyebrow: string;
    titleSuffix: string;
    description: string;
    cardLabel: string;
    componentEyebrow: string;
    componentTitle: string;
  };
  materials: {
    eyebrow: string;
    title: string;
    description: string;
    keyUseLabel: string;
    imageAltSuffix: string;
  };
  evaluation: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
  };
};

export type ApplicationIndexMessages = {
  metadata: {
    title: string;
    description: string;
    imageAlt: string;
  };
  breadcrumb: {
    home: string;
    applications: string;
  };
  contactSource: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    guideAria: string;
    guideKicker: string;
    industryTitle: string;
    industryCountSuffix: string;
    componentTitle: string;
    componentCountSuffix: string;
  };
  directory: {
    eyebrow: string;
    title: string;
    description: string;
    viewAction: string;
  };
  componentSolutions: {
    eyebrow: string;
    title: string;
    description: string;
    allAction: string;
    relatedTitle: string;
    relevantPartsLabel: string;
    viewAction: string;
    englishDestinationLabel: string;
    labels: Record<ApplicationIndexComponentSlug, string>;
  };
  selection: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly string[];
  };
  inquiry: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
  };
  detail: ApplicationDetailUiMessages;
  cards: Record<LocalizedApplicationSlug, ApplicationDirectoryCardMessages>;
};
