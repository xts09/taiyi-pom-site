import {
  catalogEngineeringTds,
  type CatalogEngineeringScreening,
  type CatalogSeo,
} from "@/data/catalog";

export type EngineeringTdsProperty = {
  group:
    | "Physical properties"
    | "Thermal properties"
    | "Mechanical properties"
    | "Electrical properties";
  label: string;
  value: string;
  unit: string;
  method: string;
};

export type EngineeringTdsDocument = {
  grade: string;
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
  properties: readonly EngineeringTdsProperty[];
  screening?: CatalogEngineeringScreening;
  seo?: CatalogSeo;
};

export const createEngineeringTdsSlug = (
  document: Pick<EngineeringTdsDocument, "grade" | "family" | "category">,
) =>
  `${document.grade}-${document.family}-${document.category}`
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const engineeringFamilyByCategory: Record<
  string,
  EngineeringTdsDocument["family"]
> = {
  "PA6 Compound": "PA6",
  "PA66 Compound": "PA66",
  "PPA Compound": "PPA",
};

export const engineeringTdsDocuments: readonly EngineeringTdsDocument[] =
  catalogEngineeringTds.map((record) => ({
    grade: record.grade,
    family: record.family,
    category: record.category,
    description: record.description,
    applications: record.applications,
    filler: record.filler,
    density: record.density,
    waterAbsorption: record.waterAbsorption,
    moldShrinkage: record.moldShrinkage,
    meltingPoint: record.meltingPoint,
    hdt045: record.hdt045,
    hdt: record.hdt,
    flammability: record.flammability,
    tensileModulus: record.tensileModulus,
    tensile: record.tensile,
    elongationAtBreak: record.elongationAtBreak,
    flexuralStrength: record.flexuralStrength,
    flexuralModulus: record.flexuralModulus,
    impact: record.impact,
    rockwellHardness: record.rockwellHardness,
    volumeResistivity: record.volumeResistivity,
    permittivity: record.permittivity,
    properties: record.properties.map((property) => ({
      group: property.group as EngineeringTdsProperty["group"],
      label: property.label,
      value: property.value,
      unit: property.unit,
      method: property.method,
    })),
    screening: record.screening,
    seo: record.seo,
  }));

export const getEngineeringTdsByProductCategory = (category: string) => {
  const family = engineeringFamilyByCategory[category];
  if (!family) return [];
  return engineeringTdsDocuments.filter((document) => document.family === family);
};
