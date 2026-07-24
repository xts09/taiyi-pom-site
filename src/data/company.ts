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
  placement: "hero" | "story" | "gallery";
};

export type FactoryProofRow = {
  title: string;
  eyebrow: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
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
  { label: "Annual Capacity", value: "60,000", note: "Tons / year" },
  {
    label: "Experience",
    value: "20+",
    note: "Years since 2003",
  },
  {
    label: "Production Lines",
    value: "15",
    note: "Twin-screw extrusion lines",
  },
  { label: "Factory Area", value: "25,000 m2", note: "Building area" },
  { label: "Testing Equipment", value: "32", note: "Sets" },
];

export const companyCapabilities: CompanyCapability[] = [
  {
    title: "Modified Material Focus",
    description:
      "Focused on modified POM compounds for injection molding applications, with selected PA6, PA66, and PPA compound solutions developed around project requirements.",
  },
  {
    title: "In-house Production",
    description:
      "15 twin-screw extrusion lines support stable compounding, sample evaluation, and repeat batch communication for long-term industrial supply.",
  },
  {
    title: "Document Support",
    description:
      "For new material evaluation, we can provide TDS, SDS, COA, REACH, RoHS, and quality system documents according to grade and project needs.",
  },
];

export const companyOverview = [
  "Factory-based manufacturer located in Yancheng, Jiangsu, China",
  "Focused on modified POM and selected engineering plastic compounds",
  "In-house extrusion compounding, material testing, and quality control",
  "Support grade recommendation, sample evaluation, and customized solutions",
  "Stable batch control for long-term industrial supply",
];

export const factoryProofRows: FactoryProofRow[] = [
  {
    title: "Production & Warehousing",
    eyebrow: "Factory Base",
    description:
      "Factory-based production and warehouse coordination support repeat industrial supply from material screening through batch communication.",
    imageSrc: "/factory-warehouse-inventory.jpg",
    imageAlt: "Taiyi Nano packaged material inventory and warehouse handling area",
    imageLabel: "Warehouse Inventory",
    imageSide: "right",
    imageVariant: "warehouse",
    points: [
      "Factory-based manufacturer located in Yancheng, Jiangsu, China",
      "Focused on modified POM and selected engineering plastic compounds",
    ],
  },
  {
    title: "Twin-Screw Compounding",
    eyebrow: "Compounding",
    description:
      "In-house twin-screw extrusion lines support modified material compounding, sample evaluation, and practical adjustment around project requirements.",
    imageSrc: "/factory-extrusion.png",
    imageAlt: "Taiyi Nano twin-screw extrusion production line",
    imageLabel: "Extrusion Lines",
    imageSide: "left",
    points: [
      "In-house extrusion compounding and material testing",
      "Support grade recommendation, sample evaluation, and customized solutions",
    ],
  },
  {
    title: "Testing & Documentation",
    eyebrow: "Project Review",
    description:
      "Testing equipment and document support help engineering teams compare candidate materials before a grade is confirmed for a specific part.",
    imageSrc: "/factory-machine.webp",
    imageAlt: "Taiyi Nano extruder and production equipment",
    imageLabel: "Production Equipment",
    imageSide: "right",
    points: [
      "Stable batch control for long-term industrial supply",
      "TDS, SDS, COA, REACH, RoHS, and quality system documents according to grade and project needs",
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
    alt: "Taiyi Nano factory exterior in Yancheng, Jiangsu",
    label: "Factory Exterior",
    placement: "hero",
  },
  {
    src: "/factory-warehouse.webp",
    alt: "Taiyi Nano production and warehouse area",
    label: "Compounding Workshop",
    placement: "story",
  },
  {
    src: "/factory-extrusion.webp",
    alt: "Taiyi Nano twin-screw extrusion production line",
    label: "Extrusion Lines",
    placement: "gallery",
  },
  {
    src: "/factory-machine.webp",
    alt: "Taiyi Nano extruder and production equipment",
    label: "Production Equipment",
    placement: "gallery",
  },
];
