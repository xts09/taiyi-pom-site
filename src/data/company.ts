export type CompanyFigure = {
  label: string;
  value: string;
  note: string;
};

export type CompanyCapability = {
  title: string;
  description: string;
};

export type FactoryImage = {
  src: string;
  alt: string;
  label: string;
  placement: "hero" | "story" | "gallery" | "testing";
  fit?: "cover" | "contain";
};

export type FactoryProofRow = {
  title: string;
  eyebrow: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  manufacturingImageSrc?: string;
  manufacturingImageAlt?: string;
  manufacturingImageLabel?: string;
  supportingImages?: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  imageSide: "left" | "right";
  imageVariant?: "warehouse";
  points: string[];
};

export type Certification = {
  standard: string;
  system: string;
  scope: string;
  certificateNumber: string;
  validUntil: string;
  imageSrc: string;
  documentHref: string;
};

export const companyFigures: CompanyFigure[] = [
  {
    label: "Annual Compound Capacity",
    value: "60,000",
    note: "Metric tons per year",
  },
  {
    label: "Years in Operation",
    value: "23+",
    note: "Manufacturing since 2003",
  },
  {
    label: "Twin-Screw Lines",
    value: "15",
    note: "In-house extrusion lines",
  },
  { label: "Facility Area", value: "25,000 m2", note: "Square metres" },
  { label: "Test Equipment", value: "32", note: "In-house units" },
];

export const companyCapabilities: CompanyCapability[] = [
  {
    title: "Modified POM Focus",
    description:
      "Modified POM is the core material family, with selected PA6, PA66, and PPA compounds reviewed when the part requires them.",
  },
  {
    title: "In-House Production",
    description:
      "15 twin-screw extrusion lines support sample evaluation, controlled compounding, and repeat production.",
  },
  {
    title: "Document Support",
    description:
      "TDS, SDS, COA, REACH, RoHS, and quality-system documents are provided according to the grade and project.",
  },
];

export const companyOverview = [
  "Factory-based manufacturer located in Yancheng, Jiangsu, China",
  "Focused on modified POM and selected engineering plastic compounds",
  "In-house extrusion compounding, material testing, and quality control",
  "Support grade shortlisting, sample evaluation, and project-specific review",
  "Batch documentation and repeat industrial supply coordination",
];

export const factoryProofRows: FactoryProofRow[] = [
  {
    title: "Production & Batch Coordination",
    eyebrow: "Repeat Supply",
    description:
      "Production, warehouse handling and batch documentation are coordinated at the Yancheng site for repeat industrial orders.",
    imageSrc: "/factory-warehouse-inventory.jpg",
    imageAlt: "Taiyi Polymer packaged material inventory and warehouse handling area",
    imageLabel: "Warehouse Inventory",
    imageSide: "right",
    imageVariant: "warehouse",
    points: [
      "Production and warehousing at the Yancheng site",
      "Warehouse handling coordinated with batch documentation",
    ],
  },
  {
    title: "In-House Compounding",
    eyebrow: "Twin-Screw Production",
    description:
      "Fifteen twin-screw extrusion lines are used to prepare trial compounds and reproduce confirmed grades for repeat production.",
    imageSrc: "/factory-extrusion.png",
    imageAlt: "Taiyi Polymer twin-screw extrusion production line",
    imageLabel: "Extrusion Lines",
    imageSide: "left",
    points: [
      "15 in-house twin-screw extrusion lines",
      "Trial batches prepared before repeat production",
    ],
  },
  {
    title: "Material Evaluation & Documentation",
    eyebrow: "Project Evaluation",
    description:
      "In-house equipment is used to compare candidate materials before grade selection. Document availability is then confirmed against the selected grade and project.",
    imageSrc: "/factory-laboratory-test-chamber.jpg",
    imageAlt: "Taiyi Polymer laboratory test chamber",
    imageLabel: "Laboratory Test Chamber",
    manufacturingImageSrc: "/factory-tensile-test-specimen.jpg",
    manufacturingImageAlt:
      "Taiyi Polymer tensile-test specimen clamped in laboratory testing equipment",
    manufacturingImageLabel: "Tensile Test Specimen",
    supportingImages: [
      {
        src: "/factory-laboratory-test-equipment.jpg",
        alt: "Taiyi Polymer laboratory test equipment with three digital measuring gauges",
        label: "Test Rig",
      },
      {
        src: "/factory-tensile-test-specimen.jpg",
        alt: "Taiyi Polymer tensile-test specimen clamped in laboratory testing equipment",
        label: "Tensile Fixture",
      },
    ],
    imageSide: "right",
    points: [
      "Candidate-grade comparison using in-house test equipment",
      "TDS, SDS, COA, REACH, RoHS and quality-system documents confirmed by grade and project",
    ],
  },
];

export const certifications = [
  {
    standard: "IATF 16949:2016",
    system: "Automotive Quality Management",
    scope:
      "Manufacture of plastic granules, excluding product design under clause 8.3.",
    certificateNumber: "135347/A/0001/SM/En",
    validUntil: "October 8, 2027",
    imageSrc: "/certificates/iatf-16949-certificate.webp",
    documentHref: "/certificates/iatf-16949-certificate.pdf",
  },
  {
    standard: "ISO 9001:2015",
    system: "Quality Management",
    scope: "Production of nano-polymer materials (plastic particles).",
    certificateNumber: "30323Q21228R0S",
    validUntil: "December 7, 2026",
    imageSrc: "/certificates/iso-9001-certificate.webp",
    documentHref: "/certificates/iso-9001-certificate.pdf",
  },
  {
    standard: "ISO 14001:2015",
    system: "Environmental Management",
    scope:
      "Environmental management in sales-related areas of nano-polymer materials (plastic particles).",
    certificateNumber: "30324E20638R0S",
    validUntil: "June 20, 2027",
    imageSrc: "/certificates/iso-14001-certificate.webp",
    documentHref: "/certificates/iso-14001-certificate.pdf",
  },
  {
    standard: "ISO 45001:2018",
    system: "Occupational Health & Safety",
    scope:
      "Occupational health and safety management in sales-related areas of nano-polymer materials (plastic particles).",
    certificateNumber: "30324S20638R0S",
    validUntil: "June 20, 2027",
    imageSrc: "/certificates/iso-45001-certificate.webp",
    documentHref: "/certificates/iso-45001-certificate.pdf",
  },
] satisfies Certification[];

export const availableDocuments = ["TDS", "SDS", "COA", "REACH", "RoHS"];

export const honors = [
  "National High-Tech Enterprise",
  "Jiangsu Province High-Tech Enterprise",
  "Jiangsu Yancheng Plastic R&D Unit",
];

export const industries = [
  "Automotive Parts",
  "Electrical & Electronics",
  "Precision Components",
  "Sanitary Ware",
  "Industrial Machinery",
  "Rail Transit",
  "Medical Supplies",
  "Packaging",
  "Cable Ties",
  "Consumer Appliances",
];

export const factoryImages: FactoryImage[] = [
  {
    src: "/factory-exterior.webp",
    alt: "Taiyi Polymer factory exterior in Yancheng, Jiangsu",
    label: "Factory Exterior",
    placement: "hero",
  },
  {
    src: "/factory-warehouse.webp",
    alt: "Taiyi Polymer production and warehouse area",
    label: "Compounding Workshop",
    placement: "story",
  },
  {
    src: "/factory-extrusion.webp",
    alt: "Taiyi Polymer twin-screw extrusion production line",
    label: "Extrusion Lines",
    placement: "gallery",
  },
  {
    src: "/factory-machine.webp",
    alt: "Taiyi Polymer extruder and production equipment",
    label: "Production Equipment",
    placement: "gallery",
  },
  {
    src: "/factory-laboratory-testing-documentary-v4.webp",
    alt: "Taiyi Polymer material testing laboratory and evaluation equipment",
    label: "Material Testing Laboratory",
    placement: "testing",
  },
];
