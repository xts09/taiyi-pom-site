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

export const localizedBasePomGradeSlugs = [
  "etm450-base-pom-resin",
  "etm750-base-pom-resin",
  "xt-100-base-pom-resin",
] as const;

export type LocalizedBasePomGradeSlug =
  (typeof localizedBasePomGradeSlugs)[number];

export const additionalLocalizedBasePomGradeSlugs = [
  "etm450-base-pom-resin",
  "etm750-base-pom-resin",
] as const;

export type AdditionalLocalizedBasePomGradeSlug =
  (typeof additionalLocalizedBasePomGradeSlugs)[number];

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

type AdditionalGradeProfileMessages = {
  metadata: MetadataMessages;
  breadcrumb: string;
  eyebrow: string;
  positioning: string;
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
      summaries: Record<BasePomGradeSlug, string>;
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
  grade: {
    metadata: MetadataMessages;
    breadcrumb: string;
    eyebrow: string;
    positioning: string;
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
    AdditionalLocalizedBasePomGradeSlug,
    AdditionalGradeProfileMessages
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

export const isLocalizedBasePomGradeSlug = (
  slug: string,
): slug is LocalizedBasePomGradeSlug =>
  localizedBasePomGradeSlugs.includes(slug as LocalizedBasePomGradeSlug);

export const getLocalizedGradeMessages = (
  messages: ProductFunnelMessages,
  slug: LocalizedBasePomGradeSlug,
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
