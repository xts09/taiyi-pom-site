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

export type LocalizedApplicationProfileMessages = {
  title: string;
  description: string;
  heroImageAlt?: string;
  detailHeroImageAlt?: string;
  materialDirections: readonly LocalizedApplicationDirectionMessages[];
  images: readonly LocalizedApplicationImageMessages[];
  parts: readonly LocalizedApplicationPartMessages[];
  engineeringFit: readonly LocalizedApplicationEngineeringGroupMessages[];
};

export type LocalizedApplicationDetailSliceAMessages = Record<
  LocalizedApplicationDetailSliceASlug,
  LocalizedApplicationProfileMessages
>;

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
    guideNote: string;
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
  cards: Record<LocalizedApplicationSlug, ApplicationDirectoryCardMessages>;
};
