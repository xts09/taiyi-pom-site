export const basePomGradeSlugs = [
  "etm090nc-base-pom-resin",
  "etm130-base-pom-resin",
  "etm1500-base-pom-resin",
  "etm1800-base-pom-resin",
  "etm270-base-pom-resin",
  "etm450-base-pom-resin",
  "etm750-base-pom-resin",
  "xt-100-base-pom-resin",
] as const;

export type BasePomGradeSlug = (typeof basePomGradeSlugs)[number];

export const localizedProductCategorySlugs = [
  "base-pom-resin",
  "glass-bead-filled-pom-compound",
  "glass-fiber-reinforced-pom-compound",
  "high-impact-pom-compound",
] as const;

export type LocalizedProductCategorySlug =
  (typeof localizedProductCategorySlugs)[number];

export const chineseOnlyProductCategorySlugs = [
  "wear-resistant-low-friction-pom-compound",
  "uv-resistant-pom-compound",
  "carbon-fiber-reinforced-pom-compound",
  "conductive-antistatic-pom-compound",
  "ultra-high-flow-pom",
] as const;

export type ChineseOnlyProductCategorySlug =
  (typeof chineseOnlyProductCategorySlugs)[number];

export const localizedProductCategoryRouteSlugs = [
  ...localizedProductCategorySlugs,
  ...chineseOnlyProductCategorySlugs,
  "pa6-compound",
  "pa66-compound",
  "ppa-compound",
] as const;

export type LocalizedProductCategoryRouteSlug =
  (typeof localizedProductCategoryRouteSlugs)[number];

export const localizedCategoryProfileSlugs = [
  "glass-bead-filled-pom-compound",
  "glass-fiber-reinforced-pom-compound",
  "high-impact-pom-compound",
] as const;

export type LocalizedCategoryProfileSlug =
  (typeof localizedCategoryProfileSlugs)[number];

const localizedCategorySourcePaths = {
  "base-pom-resin": "/products/categories/base-pom-resin",
  "glass-bead-filled-pom-compound":
    "/products/categories/glass-bead-filled-pom-compound",
  "glass-fiber-reinforced-pom-compound":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "high-impact-pom-compound": "/products/categories/high-impact-pom-compound",
  "wear-resistant-low-friction-pom-compound":
    "/products/categories/wear-resistant-low-friction-pom-compound",
  "uv-resistant-pom-compound":
    "/products/categories/uv-resistant-pom-compound",
  "carbon-fiber-reinforced-pom-compound":
    "/products/categories/carbon-fiber-reinforced-pom-compound",
  "conductive-antistatic-pom-compound":
    "/products/categories/conductive-antistatic-pom-compound",
  "ultra-high-flow-pom": "/products/categories/ultra-high-flow-pom",
  "pa6-compound": "/products/categories/pa6-compound",
  "pa66-compound": "/products/categories/pa66-compound",
  "ppa-compound": "/products/categories/ppa-compound",
} as const satisfies Record<LocalizedProductCategoryRouteSlug, string>;

export const localizedProductGradeSlugs = [
  "etm450-base-pom-resin",
  "etm750-base-pom-resin",
  "xt-100-base-pom-resin",
  "egb25-glass-bead-pom",
  "egh502h-glass-fiber-pom",
  "ehi402t-high-impact-pom",
  "edr180-high-impact-pom",
] as const;

export type LocalizedProductGradeSlug =
  (typeof localizedProductGradeSlugs)[number];

export const chineseOnlyProductGradeSliceASlugs = [
  "etm090nc-base-pom-resin",
  "etm130-base-pom-resin",
  "etm270-base-pom-resin",
  "etm1500-base-pom-resin",
  "etm1800-base-pom-resin",
] as const;

export type ChineseOnlyProductGradeSliceASlug =
  (typeof chineseOnlyProductGradeSliceASlugs)[number];

export const chineseOnlyProductGradeSliceBSlugs = [
  "edr100-high-impact-pom",
  "ehi100st-high-impact-pom",
  "ehi202t-high-impact-pom",
  "ehi602t-high-impact-pom",
] as const;

export type ChineseOnlyProductGradeSliceBSlug =
  (typeof chineseOnlyProductGradeSliceBSlugs)[number];

export const chineseOnlyProductGradeSliceCSlugs = [
  "etm270h-wear-resistant-pom",
  "epaf100a-high-wear-resistant-pom",
  "eptl402-high-wear-resistant-pom",
  "enm1040-high-wear-resistant-pom",
  "edm-111-high-wear-resistant-pom",
  "ems162-high-wear-resistant-pom",
] as const;

export type ChineseOnlyProductGradeSliceCSlug =
  (typeof chineseOnlyProductGradeSliceCSlugs)[number];

export const chineseOnlyProductGradeSliceDSlugs = [
  "etm090u-uv-resistant-pom",
  "etm100pu-uv-resistant-pom",
  "edr180u-uv-resistant-pom",
  "edr2000zd-uv-resistant-pom",
] as const;

export type ChineseOnlyProductGradeSliceDSlug =
  (typeof chineseOnlyProductGradeSliceDSlugs)[number];

export const chineseOnlyProductGradeSliceESlugs = [
  "egh202h-glass-fiber-pom",
  "egh302h-glass-fiber-pom",
  "egh402h-glass-fiber-pom",
  "egh402t-glass-fiber-pom",
  "egh502t-glass-fiber-pom",
  "egh580h-glass-fiber-pom",
  "egh580t-glass-fiber-pom",
  "egh602h-glass-fiber-pom",
  "egh602t-glass-fiber-pom",
  "ecf200-carbon-fiber-pom",
  "ecf300-carbon-fiber-pom",
  "ecf400-carbon-fiber-pom",
] as const;

export type ChineseOnlyProductGradeSliceESlug =
  (typeof chineseOnlyProductGradeSliceESlugs)[number];

export const chineseOnlyProductGradeSliceFSlugs = [
  "egh25cn-conductive-antistatic-pom",
  "ecn1003b-conductive-pom",
] as const;

export type ChineseOnlyProductGradeSliceFSlug =
  (typeof chineseOnlyProductGradeSliceFSlugs)[number];

export const chineseOnlyProductGradeSlugs = [
  ...chineseOnlyProductGradeSliceASlugs,
  ...chineseOnlyProductGradeSliceBSlugs,
  ...chineseOnlyProductGradeSliceCSlugs,
  ...chineseOnlyProductGradeSliceDSlugs,
  ...chineseOnlyProductGradeSliceESlugs,
  ...chineseOnlyProductGradeSliceFSlugs,
] as const;

export type ChineseOnlyProductGradeSlug =
  (typeof chineseOnlyProductGradeSlugs)[number];

export const localizedProductGradeRouteSlugs = [
  ...localizedProductGradeSlugs,
  ...chineseOnlyProductGradeSlugs,
] as const;

export type LocalizedProductGradeRouteSlug =
  (typeof localizedProductGradeRouteSlugs)[number];

export const localizedGradeProfileSlugs = [
  "etm450-base-pom-resin",
  "etm750-base-pom-resin",
  "egb25-glass-bead-pom",
  "egh502h-glass-fiber-pom",
  "ehi402t-high-impact-pom",
  "edr180-high-impact-pom",
] as const;

export type LocalizedGradeProfileSlug =
  (typeof localizedGradeProfileSlugs)[number];

const localizedGradeCategorySourcePaths: Record<
  LocalizedProductGradeRouteSlug,
  string
> = {
  "etm090nc-base-pom-resin": "/products/categories/base-pom-resin",
  "etm130-base-pom-resin": "/products/categories/base-pom-resin",
  "etm270-base-pom-resin": "/products/categories/base-pom-resin",
  "etm450-base-pom-resin": "/products/categories/base-pom-resin",
  "etm750-base-pom-resin": "/products/categories/base-pom-resin",
  "etm1500-base-pom-resin": "/products/categories/base-pom-resin",
  "etm1800-base-pom-resin": "/products/categories/base-pom-resin",
  "xt-100-base-pom-resin": "/products/categories/base-pom-resin",
  "egb25-glass-bead-pom":
    "/products/categories/glass-bead-filled-pom-compound",
  "egh502h-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "edr100-high-impact-pom": "/products/categories/high-impact-pom-compound",
  "ehi402t-high-impact-pom": "/products/categories/high-impact-pom-compound",
  "edr180-high-impact-pom": "/products/categories/high-impact-pom-compound",
  "ehi100st-high-impact-pom":
    "/products/categories/high-impact-pom-compound",
  "ehi202t-high-impact-pom":
    "/products/categories/high-impact-pom-compound",
  "ehi602t-high-impact-pom":
    "/products/categories/high-impact-pom-compound",
  "etm270h-wear-resistant-pom":
    "/products/categories/wear-resistant-low-friction-pom-compound",
  "epaf100a-high-wear-resistant-pom":
    "/products/categories/wear-resistant-low-friction-pom-compound",
  "eptl402-high-wear-resistant-pom":
    "/products/categories/wear-resistant-low-friction-pom-compound",
  "enm1040-high-wear-resistant-pom":
    "/products/categories/wear-resistant-low-friction-pom-compound",
  "edm-111-high-wear-resistant-pom":
    "/products/categories/wear-resistant-low-friction-pom-compound",
  "ems162-high-wear-resistant-pom":
    "/products/categories/wear-resistant-low-friction-pom-compound",
  "etm090u-uv-resistant-pom":
    "/products/categories/uv-resistant-pom-compound",
  "etm100pu-uv-resistant-pom":
    "/products/categories/uv-resistant-pom-compound",
  "edr180u-uv-resistant-pom":
    "/products/categories/uv-resistant-pom-compound",
  "edr2000zd-uv-resistant-pom":
    "/products/categories/uv-resistant-pom-compound",
  "egh202h-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "egh302h-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "egh402h-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "egh402t-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "egh502t-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "egh580h-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "egh580t-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "egh602h-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "egh602t-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "ecf200-carbon-fiber-pom":
    "/products/categories/carbon-fiber-reinforced-pom-compound",
  "ecf300-carbon-fiber-pom":
    "/products/categories/carbon-fiber-reinforced-pom-compound",
  "ecf400-carbon-fiber-pom":
    "/products/categories/carbon-fiber-reinforced-pom-compound",
  "egh25cn-conductive-antistatic-pom":
    "/products/categories/conductive-antistatic-pom-compound",
  "ecn1003b-conductive-pom":
    "/products/categories/conductive-antistatic-pom-compound",
};

export const xt100FeaturedPropertyLabels = [
  "Density",
  "Melt Flow Rate (MFI)",
  "Molding Shrinkage",
  "Water Absorption",
  "Tensile Strength",
  "Tensile Strain at Break",
  "Flexural Strength",
  "Flexural Modulus",
  "Charpy Notched Impact Strength",
  "Izod Notched Impact Strength",
  "Melting Temperature",
  "Heat Deflection Temperature",
  "Coefficient of Linear Thermal Expansion, CLTE",
  "Volume Resistivity",
  "Surface Resistivity",
  "Dielectric Strength",
] as const;

export type Xt100FeaturedPropertyLabel =
  (typeof xt100FeaturedPropertyLabels)[number];

type MetadataMessages = {
  title: string;
  description: string;
  imageAlt: string;
};

export type LocalizedGradeProfileMessages = {
  categoryLabel?: string;
  metadata: MetadataMessages;
  breadcrumb: string;
  eyebrow: string;
  summary: string;
  sampleAction: string;
  snapshot: {
    aria: string;
    title: string;
    body: string;
    flowNote: string;
  };
  sectionNavAria: string;
  features: readonly string[];
  applications: readonly string[];
  evaluationBody: string;
  notesBody: string;
  inquiry: {
    eyebrow: string;
    title: string;
    body: string;
    action: string;
  };
};

export type LocalizedCategoryProfileMessages = {
  categoryLabel: string;
  metadata: MetadataMessages;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    overviewLabel: string;
    overview: string;
  };
  navigation: {
    aria: string;
    title: string;
    subtitle: string;
  };
  directory: {
    kicker: string;
    title: string;
    body: string;
    summaries: Record<string, string>;
  };
  faq: {
    kicker: string;
    title: string;
    items: ReadonlyArray<{ question: string; answer: string }>;
  };
  inquiry: {
    eyebrow: string;
    title: string;
    body: string;
    steps: readonly string[];
  };
};

export type ProductFunnelMessages = {
  common: {
    home: string;
    products: string;
    category: string;
    technicalData: string;
    contact: string;
    contactSourceCategory: string;
    contactSourceGrade: string;
    contactSourceTechnicalData: string;
  };
  category: {
    metadata: MetadataMessages;
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      overviewLabel: string;
      overview: string;
      documentsTitle: string;
      contactAction: string;
      technicalDataAction: string;
    };
    navigation: {
      aria: string;
      title: string;
      subtitle: string;
      grades: string;
      faq: string;
    };
    directory: {
      kicker: string;
      title: string;
      body: string;
      countSuffix: string;
      grade: string;
      keyData: string;
      route: string;
      mfi: string;
      tensile: string;
      hdt: string;
      color: string;
      natural: string;
      black?: string;
      detailAction: string;
      reviewAction: string;
      summaries: Record<string, string>;
    };
    faq: {
      kicker: string;
      title: string;
      items: ReadonlyArray<{ question: string; answer: string }>;
    };
    inquiry: {
      eyebrow: string;
      title: string;
      body: string;
      action: string;
      steps: readonly string[];
    };
  };
  categoryProfiles: Record<
    LocalizedCategoryProfileSlug,
    LocalizedCategoryProfileMessages
  >;
  grade: {
    metadata: MetadataMessages;
    breadcrumb: string;
    eyebrow: string;
    summary: string;
    documentSupport: string;
    documentNote: string;
    sampleAction: string;
    evaluationAction: string;
    independentNote: string;
    snapshot: {
      aria: string;
      title: string;
      body: string;
      mfi: string;
      tensile: string;
      hdt: string;
      color: string;
      flowNote: string;
      colorValue: string;
    };
    sectionNav: {
      aria: string;
      properties: string;
      fit: string;
      evaluation: string;
      notes: string;
    };
    properties: {
      kicker: string;
      title: string;
      body: string;
      property: string;
      value: string;
      unit: string;
      method: string;
      requestAction: string;
      labels: Record<Xt100FeaturedPropertyLabel, string>;
      internalMethod: string;
      injectionMolding: string;
    };
    featuresTitle: string;
    features: readonly string[];
    applicationsTitle: string;
    applications: readonly string[];
    evaluation: {
      kicker: string;
      title: string;
      body: string;
      steps: ReadonlyArray<{ title: string; body: string }>;
    };
    notes: {
      title: string;
      body: string;
    };
    inquiry: {
      eyebrow: string;
      title: string;
      body: string;
      action: string;
    };
  };
  gradeProfiles: Record<
    LocalizedGradeProfileSlug,
    LocalizedGradeProfileMessages
  >;
  technicalData: {
    metadata: MetadataMessages;
    eyebrow: string;
    title: string;
    description: string;
    evidenceTitle: string;
    evidenceBody: string;
    gradeLabel: string;
    materialLabel: string;
    statusLabel: string;
    statusValue: string;
    viewAction: string;
    requestAction: string;
    scopeTitle: string;
    scopeItems: readonly string[];
    inquiryEyebrow: string;
    inquiryTitle: string;
    inquiryBody: string;
    inquiryAction: string;
  };
};

export const isLocalizedProductGradeSlug = (
  slug: string,
): slug is LocalizedProductGradeSlug =>
  localizedProductGradeSlugs.includes(slug as LocalizedProductGradeSlug);

export const isChineseOnlyProductGradeSlug = (
  slug: string,
): slug is ChineseOnlyProductGradeSlug =>
  chineseOnlyProductGradeSlugs.includes(slug as ChineseOnlyProductGradeSlug);

export const isLocalizedProductGradeRouteSlug = (
  slug: string,
): slug is LocalizedProductGradeRouteSlug =>
  localizedProductGradeRouteSlugs.includes(
    slug as LocalizedProductGradeRouteSlug,
  );

export const isLocalizedProductCategorySlug = (
  slug: string,
): slug is LocalizedProductCategorySlug =>
  localizedProductCategorySlugs.includes(slug as LocalizedProductCategorySlug);

export const isChineseOnlyProductCategorySlug = (
  slug: string,
): slug is ChineseOnlyProductCategorySlug =>
  chineseOnlyProductCategorySlugs.includes(
    slug as ChineseOnlyProductCategorySlug,
  );

export const isLocalizedProductCategoryRouteSlug = (
  slug: string,
): slug is LocalizedProductCategoryRouteSlug =>
  localizedProductCategoryRouteSlugs.includes(
    slug as LocalizedProductCategoryRouteSlug,
  );

export const mergeLocalizedCategoryProfile = (
  messages: ProductFunnelMessages,
  profile: LocalizedCategoryProfileMessages,
): ProductFunnelMessages["category"] => ({
  ...messages.category,
  ...profile,
  hero: {
    ...messages.category.hero,
    ...profile.hero,
  },
  navigation: {
    ...messages.category.navigation,
    ...profile.navigation,
  },
  directory: {
    ...messages.category.directory,
    ...profile.directory,
  },
  faq: {
    ...messages.category.faq,
    ...profile.faq,
  },
  inquiry: {
    ...messages.category.inquiry,
    ...profile.inquiry,
  },
});

export const getLocalizedCategoryMessages = (
  messages: ProductFunnelMessages,
  slug: LocalizedProductCategorySlug,
): ProductFunnelMessages["category"] => {
  if (slug === "base-pom-resin") {
    return messages.category;
  }

  const profile = messages.categoryProfiles[slug];

  return mergeLocalizedCategoryProfile(messages, profile);
};

export const getLocalizedCategoryLabel = (
  messages: ProductFunnelMessages,
  slug: LocalizedProductCategorySlug,
) =>
  slug === "base-pom-resin"
    ? messages.common.category
    : messages.categoryProfiles[slug].categoryLabel;

export const getLocalizedCategorySourcePath = (
  slug: LocalizedProductCategoryRouteSlug,
) => localizedCategorySourcePaths[slug];

export const getLocalizedGradeMessages = (
  messages: ProductFunnelMessages,
  slug: LocalizedProductGradeSlug,
): ProductFunnelMessages["grade"] => {
  if (slug === "xt-100-base-pom-resin") {
    return messages.grade;
  }

  const profile = messages.gradeProfiles[slug];

  return {
    ...messages.grade,
    ...profile,
    snapshot: {
      ...messages.grade.snapshot,
      ...profile.snapshot,
    },
    sectionNav: {
      ...messages.grade.sectionNav,
      aria: profile.sectionNavAria,
    },
    evaluation: {
      ...messages.grade.evaluation,
      body: profile.evaluationBody,
    },
    notes: {
      ...messages.grade.notes,
      body: profile.notesBody,
    },
  };
};

export const mergeLocalizedGradeProfile = (
  messages: ProductFunnelMessages,
  profile: LocalizedGradeProfileMessages,
): ProductFunnelMessages["grade"] => ({
  ...messages.grade,
  ...profile,
  snapshot: {
    ...messages.grade.snapshot,
    ...profile.snapshot,
  },
  sectionNav: {
    ...messages.grade.sectionNav,
    aria: profile.sectionNavAria,
  },
  evaluation: {
    ...messages.grade.evaluation,
    body: profile.evaluationBody,
  },
  notes: {
    ...messages.grade.notes,
    body: profile.notesBody,
  },
});

export const getLocalizedGradeCategoryLabel = (
  messages: ProductFunnelMessages,
  slug: LocalizedProductGradeRouteSlug,
) =>
  slug === "xt-100-base-pom-resin" || isChineseOnlyProductGradeSlug(slug)
    ? messages.common.category
    : messages.gradeProfiles[slug].categoryLabel ?? messages.common.category;

export const getLocalizedGradeCategorySourcePath = (
  slug: LocalizedProductGradeRouteSlug,
) => localizedGradeCategorySourcePaths[slug];
