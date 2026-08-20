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
} as const satisfies Record<LocalizedProductCategorySlug, string>;

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
  LocalizedProductGradeSlug,
  string
> = {
  "etm450-base-pom-resin": "/products/categories/base-pom-resin",
  "etm750-base-pom-resin": "/products/categories/base-pom-resin",
  "xt-100-base-pom-resin": "/products/categories/base-pom-resin",
  "egb25-glass-bead-pom":
    "/products/categories/glass-bead-filled-pom-compound",
  "egh502h-glass-fiber-pom":
    "/products/categories/glass-fiber-reinforced-pom-compound",
  "ehi402t-high-impact-pom": "/products/categories/high-impact-pom-compound",
  "edr180-high-impact-pom": "/products/categories/high-impact-pom-compound",
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

type LocalizedGradeProfileMessages = {
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

type LocalizedCategoryProfileMessages = {
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
      documentsBody: string;
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

export const isLocalizedProductCategorySlug = (
  slug: string,
): slug is LocalizedProductCategorySlug =>
  localizedProductCategorySlugs.includes(slug as LocalizedProductCategorySlug);

export const getLocalizedCategoryMessages = (
  messages: ProductFunnelMessages,
  slug: LocalizedProductCategorySlug,
): ProductFunnelMessages["category"] => {
  if (slug === "base-pom-resin") {
    return messages.category;
  }

  const profile = messages.categoryProfiles[slug];

  return {
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
  };
};

export const getLocalizedCategoryLabel = (
  messages: ProductFunnelMessages,
  slug: LocalizedProductCategorySlug,
) =>
  slug === "base-pom-resin"
    ? messages.common.category
    : messages.categoryProfiles[slug].categoryLabel;

export const getLocalizedCategorySourcePath = (
  slug: LocalizedProductCategorySlug,
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

export const getLocalizedGradeCategoryLabel = (
  messages: ProductFunnelMessages,
  slug: LocalizedProductGradeSlug,
) =>
  slug === "xt-100-base-pom-resin"
    ? messages.common.category
    : messages.gradeProfiles[slug].categoryLabel ?? messages.common.category;

export const getLocalizedGradeCategorySourcePath = (
  slug: LocalizedProductGradeSlug,
) => localizedGradeCategorySourcePaths[slug];
