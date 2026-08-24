export type ProductTaxonomyKey =
  "pom" | "pa6" | "pa66" | "ppa" | "pomResin" | "conductiveAntistatic";

export type ProductEyebrowKey =
  | "coreLine"
  | "additionalFamily"
  | "higherTemperature"
  | "supplement"
  | "crossMaterial";

export type ApplicationTaxonomyKey =
  | "automotive"
  | "electronics"
  | "conveyor-automation"
  | "motion-components"
  | "water-control"
  | "washing-machine-components"
  | "outdoor-equipment"
  | "textile-machinery";

export type ResourceTaxonomyKey =
  "material-selection" | "processing-troubleshooting" | "data-validation";

export type TaxonomyMessages = {
  products: Record<ProductTaxonomyKey, string>;
  productEyebrows: Record<ProductEyebrowKey, string>;
  applications: Record<ApplicationTaxonomyKey, string>;
  componentSolutions: string;
  resources: Record<
    ResourceTaxonomyKey,
    { title: string; navigationLabel: string }
  >;
};

export type HeaderMessages = {
  brandHomeLabel: string;
  navigationAria: string;
  products: string;
  productCategories: string;
  productDescription: string;
  allProducts: string;
  applications: string;
  applicationAreas: string;
  applicationDescription: string;
  allApplications: string;
  resources: string;
  technicalResources: string;
  allResources: string;
  aboutUs: string;
  contact: string;
  searchLabel: string;
  languageSwitcherLabel: string;
  englishDestinationLabel: string;
  menu: string;
  close: string;
  findGradeData: string;
  discussApplication: string;
};

export type FooterMessages = {
  brandRelation: string;
  logoAlt: string;
  pitchTitle: string;
  pitchCopy: string;
  discussApplication: string;
  products: string;
  applications: string;
  allApplications: string;
  resources: string;
  company: string;
  aboutUs: string;
  contactSales: string;
  qualityCompliance: string;
  manufacturing: string;
  email: string;
  call: string;
  emailAria: string;
  callAria: string;
  whatsappAria: string;
  contactActionsAria: string;
  navigationAria: string;
  location: string;
  rightsReserved: string;
  privacyPolicy: string;
};

export type FloatingContactMessages = {
  mailSubject: string;
  email: string;
  whatsapp: string;
  call: string;
  closeOptions: string;
  openOptions: string;
  salesContact: string;
  title: string;
  description: string;
  directOptionsAria: string;
  triggerLabel: string;
};

export type AnalyticsMessages = {
  title: string;
  descriptionBeforeLink: string;
  privacyPolicy: string;
  currentChoice: string;
  accepted: string;
  notAccepted: string;
  accept: string;
  continueWithout: string;
  settings: string;
};

export type RequirementPathMessage = {
  label: string;
  title: string;
  description: string;
};

export type ProductFamilyMessage = {
  title: string;
  label: string;
  description: string;
  metricLabel: string;
};

export type ProductsMessages = {
  metadata: {
    title: string;
    description: string;
    imageAlt: string;
  };
  breadcrumbHome: string;
  breadcrumbProducts: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    startAction: string;
    dataSheetsAction: string;
  };
  selection: {
    kicker: string;
    title: string;
    body: string;
    note: string;
    navigationAria: string;
    paths: readonly RequirementPathMessage[];
  };
  families: {
    kicker: string;
    title: string;
    body: string;
    items: readonly ProductFamilyMessage[];
  };
  inquiry: {
    title: string;
    eyebrow: string;
    action: string;
    body: string;
    contactSource: string;
  };
};

export type HomeMetricMessage = {
  label: string;
  note: string;
};

export type HomeMaterialDirectionMessage = {
  title: string;
  description: string;
  action: string;
  specs: ReadonlyArray<readonly [string, string]>;
};

export type HomeTaskFirstMessages = {
  entry: {
    eyebrow: string;
    title: string;
    body: string;
    ariaLabel: string;
    items: ReadonlyArray<{
      label: string;
      title: string;
      description: string;
      action: string;
    }>;
  };
  core: {
    eyebrow: string;
    title: string;
    body: string;
    action: string;
    materialImageAlt: string;
    materialImageCaption: string;
    directionsAria: string;
    panelLabel: string;
    reviewLabel: string;
    materialsLabel: string;
    groups: ReadonlyArray<{
      title: string;
      summary: string;
      panelTitle: string;
      description: string;
      reviewInputs: readonly string[];
      componentsNote: string;
      action: string;
      relatedLinks: readonly string[];
    }>;
    supportingTitle: string;
    supportingBody: string;
    supportingLinks: readonly string[];
    allFamiliesAction: string;
  };
  applications: {
    eyebrow: string;
    title: string;
    body: string;
    action: string;
    items: ReadonlyArray<{
      title: string;
      description: string;
      imageAlt: string;
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    stepsAria: string;
    steps: ReadonlyArray<{
      title: string;
      description: string;
    }>;
  };
  collaboration: {
    eyebrow: string;
    title: string;
    body: string;
    itemsAria: string;
    items: ReadonlyArray<{
      title: string;
      description: string;
    }>;
  };
  proof: {
    eyebrow: string;
    title: string;
    body: string;
    factoryImageAlt: string;
    factoryImageCaption: string;
    metricsAria: string;
    metricLabels: readonly string[];
    metricNotes: readonly string[];
    documentsTitle: string;
    documentsBody: string;
    documentsAria: string;
    certificatesTitle: string;
    certificateAction: string;
    certificateOpenAction: string;
    internationalLabel: string;
    internationalBody: string;
  };
};

export type HomeMessages = {
  metadata: {
    title: string;
    description: string;
    imageAlt: string;
  };
  hero: {
    eyebrowDesktop: string;
    eyebrowMobile: string;
    title: string;
    body: string;
    exploreAction: string;
    contactAction: string;
  };
  metrics: ReadonlyArray<HomeMetricMessage>;
  materials: {
    title: string;
    body: string;
    documentSupport: string;
    dataSheetsAction: string;
    coreLabel: string;
    coreDirectionsAria: string;
    coreDirections: readonly string[];
    allFamiliesAction: string;
    additionalFamiliesAria: string;
    items: ReadonlyArray<HomeMaterialDirectionMessage>;
  };
  qualification: {
    title: string;
    intro: string;
    applicationAction: string;
    figureAlt: string;
    figureLabel: string;
    figureCaption: string;
    stepsAria: string;
    steps: ReadonlyArray<{
      stage: string;
      title: string;
      description: string;
    }>;
  };
  quality: {
    title: string;
    body: string;
    panelAria: string;
    qualifications: ReadonlyArray<{
      category: string;
      title: string;
    }>;
    documentSupportTitle: string;
    documentSupportBody: string;
    documentListAria: string;
    documentNames: Record<string, string>;
    certifications: ReadonlyArray<{
      system: string;
      scope: string;
    }>;
    featuredDescription: string;
    certificateAvailable: string;
    certifiedScope: string;
    openCertificate: string;
    openCertificateAria: string;
    scopePrefix: string;
    openPdf: string;
  };
  exportNetwork: {
    eyebrow: string;
    title: string;
    description: string;
    mapAlt: string;
    legendAria: string;
    productionBase: string;
    exportRegion: string;
    regionsTitle: string;
    regionsBody: string;
    factsAria: string;
    productionBaseValue: string;
    listedDestinations: string;
    listedDestinationsValue: string;
    routes: ReadonlyArray<{
      region: string;
      coverage: string;
    }>;
  };
  inquiry: {
    eyebrow: string;
    title: string;
    body: string;
    checklistLabel: string;
    checklist: readonly string[];
    action: string;
  };
  taskFirst?: HomeTaskFirstMessages;
};

export type ContactFormMessages = {
  contextFrom: string;
  contextPrefilled: string;
  clearContext: string;
  inquiryTypeLabel: string;
  inquiryTypePlaceholder: string;
  inquiryTypeOptions: {
    "grade-evaluation": string;
    tds: string;
    sample: string;
    "quote-supply": string;
  };
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  materialLabel: string;
  materialPlaceholder: string;
  materialOptionLabels: Readonly<Record<string, string>>;
  applicationLabel: string;
  applicationPlaceholder: string;
  detailsLabel: string;
  detailsPlaceholder: string;
  sending: string;
  submit: string;
  fallbackNote: string;
  sentStatus: string;
  fallbackStatus: string;
  emailDraft: {
    notSpecified: string;
    greeting: string;
    intro: string;
    company: string;
    email: string;
    material: string;
    application: string;
    inquiryType: string;
    grade: string;
    source: string;
    details: string;
    closing: string;
    subjectPrefix: string;
  };
};

export type ContactMessages = {
  metadata: {
    title: string;
    description: string;
    imageAlt: string;
  };
  breadcrumbHome: string;
  breadcrumbContact: string;
  hero: {
    title: string;
    description: string;
  };
  formPanel: {
    title: string;
    body: string;
    requiredBefore: string;
    requiredAfter: string;
  };
  sales: {
    title: string;
    contactPerson: string;
    role: string;
    company: string;
    email: string;
    whatsapp: string;
    location: string;
    locationValue: string;
    reviewTitle: string;
    reviewItems: readonly string[];
    emailDirectly: string;
  };
  directEmail: {
    greeting: string;
    application: string;
    material: string;
    reference: string;
    candidates: string;
    requirement: string;
    keyRequirements: string;
    documentNeeds: string;
    closing: string;
    subject: string;
  };
  context: {
    grade: string;
    reference: string;
    candidates: string;
    requirement: string;
    intent: string;
    sampleIntent: string;
    evaluationIntent: string;
    tdsIntent: string;
    quoteSupplyIntent: string;
  };
  form: ContactFormMessages;
};

export type SiteMessages = {
  Taxonomy: TaxonomyMessages;
  Header: HeaderMessages;
  Footer: FooterMessages;
  FloatingContact: FloatingContactMessages;
  Analytics: AnalyticsMessages;
  Home: HomeMessages;
  Products: ProductsMessages;
  Contact: ContactMessages;
};
