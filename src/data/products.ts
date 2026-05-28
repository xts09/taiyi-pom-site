export type ProductProperty = {
  label: string;
  value: string;
  unit: string;
  method: string;
};

export type Product = {
  slug: string;
  title: string;
  grade: string;
  mfi: string;
  color: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  documents: string[];
  properties: ProductProperty[];
};

const standardElectrical = [
  {
    label: "Volume Resistivity",
    value: "1e14",
    unit: "ohm.cm",
    method: "Internal Method",
  },
  {
    label: "Surface Resistivity",
    value: "1e16",
    unit: "ohm",
    method: "Internal Method",
  },
];

const standardDocuments = ["TDS", "SDS", "COA", "REACH", "RoHS"];

const pomProperties = ({
  density,
  shrinkage,
  tensile,
  flexural,
  modulus,
  impact,
  hdt,
  electrical = standardElectrical,
}: {
  density: string;
  shrinkage: string;
  tensile: string;
  flexural: string;
  modulus: string;
  impact: string;
  hdt: string;
  electrical?: ProductProperty[];
}): ProductProperty[] => [
  { label: "Density", value: density, unit: "g/cm3", method: "ISO 1183" },
  {
    label: "Molding Shrinkage",
    value: shrinkage,
    unit: "%",
    method: "Internal Method",
  },
  { label: "Tensile Strength", value: tensile, unit: "MPa", method: "ISO 527" },
  { label: "Flexural Strength", value: flexural, unit: "MPa", method: "ISO 178" },
  { label: "Flexural Modulus", value: modulus, unit: "MPa", method: "ISO 178" },
  {
    label: "Charpy Notched Impact Strength",
    value: impact,
    unit: "kJ/m2",
    method: "ISO 179/1eA",
  },
  {
    label: "Heat Deflection Temperature",
    value: hdt,
    unit: "degC",
    method: "ISO 75-2, 1.8 MPa",
  },
  ...electrical,
];

export const products: Product[] = [
  {
    slug: "etm090nc-natural-pom-resin",
    title: "ETM090NC Natural POM Resin",
    grade: "ETM090NC",
    mfi: "9 g/10 min",
    color: "Natural",
    category: "Natural POM Resin",
    description:
      "Standard natural POM injection grade for automotive, electrical, sanitary, and industrial molded parts.",
    features: [
      "General injection molding",
      "Good mechanical strength",
      "Dimensional stability",
    ],
    applications: [
      "Precision engineering plastic parts",
      "Automotive components",
      "Injection molded parts",
    ],
    documents: standardDocuments,
    properties: pomProperties({
      density: "1.41",
      shrinkage: "1.8-2.0",
      tensile: "60",
      flexural: "85",
      modulus: "2500",
      impact: "7.5",
      hdt: "95",
    }),
  },
  {
    slug: "etm130-natural-pom-resin",
    title: "ETM130 Natural POM Resin",
    grade: "ETM130",
    mfi: "13 g/10 min",
    color: "Natural",
    category: "Natural POM Resin",
    description:
      "Higher-flow natural POM grade for molded parts that need stable processability and balanced mechanical properties.",
    features: [
      "High flow",
      "Injection molding",
      "Balanced mechanical properties",
    ],
    applications: [
      "Automotive parts",
      "Electronic parts",
      "Bathroom fittings",
    ],
    documents: standardDocuments,
    properties: pomProperties({
      density: "1.41",
      shrinkage: "1.8-2.0",
      tensile: "58",
      flexural: "78",
      modulus: "2300",
      impact: "12.5",
      hdt: "89",
    }),
  },
  {
    slug: "etm270-natural-pom-resin",
    title: "ETM270 Natural POM Resin",
    grade: "ETM270",
    mfi: "27 g/10 min",
    color: "Natural",
    category: "Natural POM Resin",
    description:
      "High-flow POM grade for thin-wall molded parts, precision components, and general injection applications.",
    features: [
      "Higher flow",
      "Good processability",
      "Injection molding",
    ],
    applications: [
      "Thin-wall molded parts",
      "Precision components",
      "General molded parts",
    ],
    documents: standardDocuments,
    properties: pomProperties({
      density: "1.41",
      shrinkage: "1.8-2.0",
      tensile: "62",
      flexural: "90",
      modulus: "2700",
      impact: "5.3",
      hdt: "100",
    }),
  },
  {
    slug: "etm270h-wear-resistant-pom",
    title: "ETM270H Wear-resistant POM Compound",
    grade: "ETM270H",
    mfi: "13 g/10 min",
    color: "Natural",
    category: "Wear-resistant POM Compound",
    description:
      "Wear-resistant POM direction with higher tensile and flexural performance for sliding and moving molded parts.",
    features: [
      "High flow",
      "Wear resistance",
      "Suitable for sliding applications",
    ],
    applications: [
      "Gears",
      "Sliding parts",
      "Bushings",
      "Functional molded parts",
    ],
    documents: standardDocuments,
    properties: pomProperties({
      density: "1.41",
      shrinkage: "1.8-2.0",
      tensile: "72",
      flexural: "95",
      modulus: "2900",
      impact: "5.3",
      hdt: "96",
    }),
  },
  {
    slug: "egh402h-glass-fiber-pom",
    title: "EGH402H Glass Fiber Reinforced POM Compound",
    grade: "EGH402H",
    mfi: "4 g/10 min",
    color: "Natural",
    category: "Glass Fiber Reinforced POM Compound",
    description:
      "20% glass-fiber reinforced POM for applications that need higher stiffness, lower shrinkage, and improved heat resistance.",
    features: [
      "20% glass fiber content",
      "High stiffness",
      "Lower molding shrinkage",
    ],
    applications: [
      "Automotive functional parts",
      "Precision components",
      "Structural molded parts",
    ],
    documents: standardDocuments,
    properties: pomProperties({
      density: "1.54",
      shrinkage: "0.7-1.0",
      tensile: "113",
      flexural: "152.8",
      modulus: "6200",
      impact: "6.8",
      hdt: "163",
      electrical: [
        {
          label: "Volume Resistivity",
          value: "1e7",
          unit: "ohm.cm",
          method: "Internal Method",
        },
        {
          label: "Surface Resistivity",
          value: "1e8",
          unit: "ohm",
          method: "Internal Method",
        },
      ],
    }),
  },
  {
    slug: "ecn1003b-conductive-pom",
    title: "ECN1003B Conductive POM Compound",
    grade: "ECN1003B",
    mfi: "3.5 g/10 min",
    color: "Black",
    category: "Conductive / Antistatic POM Compound",
    description:
      "Black conductive POM grade for selected molded parts that need lower surface and volume resistivity.",
    features: [
      "Conductive grade",
      "Black color",
      "Dimensional stability",
    ],
    applications: [
      "Electronic components",
      "Antistatic molded parts",
      "Functional plastic parts",
    ],
    documents: standardDocuments,
    properties: pomProperties({
      density: "1.39",
      shrinkage: "1.8-2.0",
      tensile: "56",
      flexural: "80",
      modulus: "2500",
      impact: "5.5",
      hdt: "110",
      electrical: [
        {
          label: "Volume Resistivity",
          value: "1e3",
          unit: "ohm.cm",
          method: "Internal Method",
        },
        {
          label: "Surface Resistivity",
          value: "1e4",
          unit: "ohm",
          method: "Internal Method",
        },
      ],
    }),
  },
  {
    slug: "low-friction-pom-compounds",
    title: "Custom Low-friction POM Compound",
    grade: "Custom / Project-based",
    mfi: "Based on requirement",
    color: "Natural / Custom",
    category: "Low-friction POM Compound",
    description:
      "Project-based Low-friction POM Compound direction for sliding parts, bushings, rollers, and moving assemblies.",
    features: [
      "Low-friction material direction",
      "Suitable for sliding and moving parts",
      "Formulation based on target requirements",
    ],
    applications: [
      "Sliding parts",
      "Bushings",
      "Rollers",
      "Gears",
    ],
    documents: standardDocuments,
    properties: [],
  },
];
