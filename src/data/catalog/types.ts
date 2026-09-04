export type CatalogProperty = {
  label: string;
  value: string;
  unit: string;
  method: string;
  group?: string;
};

export type CatalogSeo = {
  title?: string;
  description?: string;
  image?: string;
  indexable?: boolean;
};

export type CatalogTds = {
  status: "data-only" | "pdf";
  revision?: string;
  pdfPath?: string;
  updatedAt?: string;
};

export type CatalogEngineeringScreening = {
  positioning: string;
  comparison: string;
  validation: string;
  relatedGradeSlugs: string[];
};

type CatalogBaseRecord = {
  schemaVersion: 1;
  id: string;
  grade: string;
  polymer: string;
  sortOrder: number;
  seo?: CatalogSeo;
};

export type CatalogProductRecord = CatalogBaseRecord & {
  kind: "product";
  slug: string;
  aliases?: string[];
  title: string;
  family: string;
  category: string;
  mfi?: {
    value?: number;
    display: string;
    condition?: string;
  };
  colors: string[];
  description: string;
  features: string[];
  applications: string[];
  documents: string[];
  properties: CatalogProperty[];
  tds: CatalogTds;
};

export type CatalogEngineeringTdsRecord = CatalogBaseRecord & {
  kind: "engineering-tds";
  slug: string;
  family: "PA6" | "PA66" | "PPA";
  category: string;
  description: string;
  applications: string;
  filler: string;
  density: string;
  waterAbsorption: string;
  moldShrinkage: string;
  meltingPoint: string;
  hdt045: string;
  hdt: string;
  flammability: string;
  tensileModulus: string;
  tensile: string;
  elongationAtBreak: string;
  flexuralStrength: string;
  flexuralModulus: string;
  impact: string;
  rockwellHardness: string;
  volumeResistivity: string;
  permittivity: string;
  properties: CatalogProperty[];
  screening?: CatalogEngineeringScreening;
  tds: CatalogTds;
};

export type CatalogConductiveRecord = CatalogBaseRecord & {
  kind: "conductive-entry";
  matrix: string;
  technology: "cnt" | "cf";
  range: "r35" | "r68" | "r610";
  rangeLabel: string;
};

export type CatalogRecord =
  | CatalogProductRecord
  | CatalogEngineeringTdsRecord
  | CatalogConductiveRecord;

export type CatalogProduct = CatalogProductRecord;
