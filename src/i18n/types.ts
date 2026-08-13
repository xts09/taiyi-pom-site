export type ProductTaxonomyKey =
  | "pom"
  | "pa6"
  | "pa66"
  | "ppa"
  | "pomResin"
  | "conductiveAntistatic";

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
  | "material-selection"
  | "processing-troubleshooting"
  | "data-validation";

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
  menu: string;
  close: string;
  findGradeData: string;
  discussApplication: string;
};

export type FooterMessages = {
  brandRelation: string;
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

export type SiteMessages = {
  Taxonomy: TaxonomyMessages;
  Header: HeaderMessages;
  Footer: FooterMessages;
  FloatingContact: FloatingContactMessages;
  Analytics: AnalyticsMessages;
  Products: ProductsMessages;
};
