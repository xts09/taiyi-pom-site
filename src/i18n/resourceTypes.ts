import type { ResourcePage } from "@/data/resources";

export const localizedResourceGroupIds = [
  "material-selection",
  "processing-troubleshooting",
  "data-validation",
] as const;

export type LocalizedResourceGroupId =
  (typeof localizedResourceGroupIds)[number];

export const localizedResourceArticleSlugs = [
  "material-selection-guide",
  "alternative-pom-grade-validation",
  "wear-resistant-low-friction-pom-selection-guide",
  "pom-gear-material-selection",
  "processing-guide",
  "pom-warpage-troubleshooting",
  "application-notes",
  "faq",
  "reinforcement-materials-overview",
  "pa6-vs-pa66-reinforced-parts",
  "glass-fiber-reinforced-pa6-pa66-selection-guide",
  "ppa-vs-pa66-material-selection",
  "pa6-pa66-moisture-drying-conditioning-guide",
  "conductive-antistatic-pa6-pa66-ppa-selection-guide",
] as const;

export type LocalizedResourceArticleSlug =
  (typeof localizedResourceArticleSlugs)[number];

export const localizedResourceArticleSliceA1Slugs = [
  "material-selection-guide",
  "alternative-pom-grade-validation",
] as const satisfies readonly LocalizedResourceArticleSlug[];

export type LocalizedResourceArticleSliceA1Slug =
  (typeof localizedResourceArticleSliceA1Slugs)[number];

export type LocalizedResourceArticleSliceA1Messages = Record<
  LocalizedResourceArticleSliceA1Slug,
  ResourcePage
>;

export const localizedResourceArticleSliceA2Slugs = [
  "wear-resistant-low-friction-pom-selection-guide",
  "pom-gear-material-selection",
] as const satisfies readonly LocalizedResourceArticleSlug[];

export type LocalizedResourceArticleSliceA2Slug =
  (typeof localizedResourceArticleSliceA2Slugs)[number];

export type LocalizedResourceArticleSliceA2Messages = Record<
  LocalizedResourceArticleSliceA2Slug,
  ResourcePage
>;

export const localizedResourceArticleSliceB1Slugs = [
  "processing-guide",
  "pom-warpage-troubleshooting",
] as const satisfies readonly LocalizedResourceArticleSlug[];

export type LocalizedResourceArticleSliceB1Slug =
  (typeof localizedResourceArticleSliceB1Slugs)[number];

export type LocalizedResourceArticleSliceB1Messages = Record<
  LocalizedResourceArticleSliceB1Slug,
  ResourcePage
>;

export const localizedResourceArticleSliceB2Slugs = [
  "application-notes",
  "faq",
  "reinforcement-materials-overview",
] as const satisfies readonly LocalizedResourceArticleSlug[];

export type LocalizedResourceArticleSliceB2Slug =
  (typeof localizedResourceArticleSliceB2Slugs)[number];

export type LocalizedResourceArticleSliceB2Messages = Record<
  LocalizedResourceArticleSliceB2Slug,
  ResourcePage
>;

export const localizedResourceLinkPaths = [
  "/resources/material-selection-guide",
  "/resources/wear-resistant-low-friction-pom-selection-guide",
  "/resources/pom-gear-material-selection",
  "/resources/pa6-vs-pa66-reinforced-parts",
  "/resources/glass-fiber-reinforced-pa6-pa66-selection-guide",
  "/resources/ppa-vs-pa66-material-selection",
  "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
  "/resources/application-notes",
  "/resources/reinforcement-materials-overview",
  "/resources/processing-guide",
  "/resources/pom-warpage-troubleshooting",
  "/resources/pa6-pa66-moisture-drying-conditioning-guide",
  "/resources/alternative-pom-grade-validation",
  "/technical-data-sheets",
  "/products/categories/pom",
  "/resources/faq",
] as const;

export type LocalizedResourceLinkPath =
  (typeof localizedResourceLinkPaths)[number];

export type LocalizedResourceLinkType =
  "guide" | "technicalNote" | "faq" | "dataTool" | "directory";

export type ResourceDirectoryEntryMessages = {
  label: string;
  type: LocalizedResourceLinkType;
  description: string;
};

export type ResourceDirectoryGroupMessages = {
  title: string;
  navigationLabel: string;
  description: string;
  imageAlt: string;
  entryPaths: readonly LocalizedResourceLinkPath[];
};

export type ResourceIndexMessages = {
  metadata: {
    title: string;
    collectionTitle: string;
    description: string;
    imageAlt: string;
  };
  breadcrumb: {
    home: string;
    resources: string;
  };
  contactSource: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    dataAction: string;
    pathsAria: string;
    pathsLabel: string;
    resourceCountSuffix: string;
  };
  directory: {
    title: string;
    description: string;
    viewAllPrefix: string;
  };
  inquiry: {
    title: string;
    description: string;
    action: string;
  };
  linkTypeLabels: Record<LocalizedResourceLinkType, string>;
  groups: Record<LocalizedResourceGroupId, ResourceDirectoryGroupMessages>;
  entries: Record<LocalizedResourceLinkPath, ResourceDirectoryEntryMessages>;
  category: {
    context: string;
    navigationAria: string;
    browseLabel: string;
    overview: string;
    directoryAriaSuffix: string;
    directoryTitle: string;
    directoryDescription: string;
    reviewEyebrow: string;
    reviewTitle: string;
    reviewDescription: string;
    reviewAction: string;
  };
  articleUi: {
    breadcrumbHome: string;
    breadcrumbResources: string;
    faqContext: string;
    guideContext: string;
    resourceContext: string;
    articleKicker: string;
    modulesAriaSuffix: string;
    relatedAria: string;
    relatedEyebrow: string;
    relatedTitle: string;
    relatedDescription: string;
    reviewEyebrow: string;
    reviewTitle: string;
    reviewDescription: string;
    reviewAction: string;
    contactSourcePrefix: string;
  };
  faqExplorer: {
    ariaLabel: string;
    searchTitle: string;
    searchDescription: string;
    searchLabel: string;
    searchPlaceholder: string;
    topicsAria: string;
    emptyTitle: string;
    emptyDescription: string;
    questionsAriaSuffix: string;
  };
  guideExplorer: {
    explorerAriaSuffix: string;
    searchTitlePrefix: string;
    searchDescription: string;
    searchLabel: string;
    searchPlaceholder: string;
    topicsAriaSuffix: string;
    emptyTitle: string;
    emptyDescription: string;
  };
};
