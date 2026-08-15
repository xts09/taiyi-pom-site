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
