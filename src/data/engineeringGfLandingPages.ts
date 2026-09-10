import {
  catalogEngineeringTds,
  type CatalogEngineeringTdsRecord,
} from "@/data/catalog";

export type EngineeringGfPolymer = "PA6" | "PA66" | "PPA";

export type EngineeringGfApplicationLink = {
  eyebrow: string;
  label: string;
  description: string;
  href: string;
};

export type EngineeringGfValidationStep = {
  title: string;
  description: string;
};

export type EngineeringGfLandingPageData = {
  polymer: EngineeringGfPolymer;
  slug: string;
  path: string;
  parentPath: string;
  parentLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroDescription: string;
  navSubtitle: string;
  comparisonIntro: string;
  tradeoffs: {
    improvementTitle: string;
    improvementIntro: string;
    improvements: readonly string[];
    reviewTitle: string;
    reviewIntro: string;
    reviewPoints: readonly string[];
  };
  applicationsIntro: string;
  applications: readonly EngineeringGfApplicationLink[];
  validationIntro: string;
  validationSteps: readonly EngineeringGfValidationStep[];
  contactMaterial: string;
};

export type EngineeringGfGrade = CatalogEngineeringTdsRecord;

const glassFiberGrades = catalogEngineeringTds.filter(
  (grade) => grade.category === "Glass Fiber Reinforced",
);

const landingPages: Record<
  EngineeringGfPolymer,
  EngineeringGfLandingPageData
> = {
  PA6: {
    polymer: "PA6",
    slug: "glass-fiber-reinforced-pa6-compound",
    path: "/products/categories/glass-fiber-reinforced-pa6-compound",
    parentPath: "/products/categories/pa6-compound",
    parentLabel: "PA6 Compounds",
    title: "Glass Fiber Reinforced PA6 Compounds",
    metaTitle: "Glass Fiber Reinforced PA6 Grades | Taiyi Polymer",
    metaDescription:
      "Compare PLATFORM glass-fiber-reinforced PA6 grades by GF level, tensile and flexural data, notched impact, HDT, water absorption and part requirements.",
    heroEyebrow: "PA6 Grade Selection",
    heroDescription:
      "Explore 17 PLATFORM® PA6 grades from GF8 to GF50. Compare stiffness, impact and heat-deflection data for your molded part.",
    navSubtitle: "GF8–GF50 across stiffness, impact, and heat deflection",
    comparisonIntro:
      "Grades are ordered by glass-fiber content. Compare the published properties, then open a grade or request its full TDS.",
    tradeoffs: {
      improvementTitle: "Increasing glass-fiber content can support",
      improvementIntro:
        "Across an appropriate formulation and test basis, glass-fiber reinforcement is commonly screened when these requirements control the shortlist.",
      improvements: [
        "Higher stiffness and load response",
        "Higher tensile and flexural strength",
        "Higher heat-deflection response",
        "Improved creep resistance",
        "Dimensional control under load",
      ],
      reviewTitle: "The same shortlist must also review",
      reviewIntro:
        "More fiber does not settle the material decision. The molded result remains sensitive to geometry, process, moisture state and the complete load path.",
      reviewPoints: [
        "Impact trade-offs and failure mode",
        "Fiber orientation and anisotropy",
        "Directional shrinkage and warpage",
        "Surface finish and exposed fibers",
        "Moisture conditioning and retained dimensions",
        "Weld lines, gates and local stress",
      ],
    },
    applicationsIntro:
      "Match the part's load, temperature and environment to a candidate grade before starting molding trials.",
    applications: [
      {
        eyebrow: "Structural housings",
        label: "Electrical and electronic housings",
        description:
          "Review enclosure geometry, assembly load, insulation requirements, heat and document needs before shortlisting a grade.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Brackets and supports",
        label: "Automation support components",
        description:
          "Connect the load path, fastening points, vibration and molding constraints to the reinforcement shortlist.",
        href: "/applications/conveyor-automation",
      },
      {
        eyebrow: "Automotive mechanisms",
        label: "Automotive molded components",
        description:
          "Screen temperature, load, moisture, movement, dimensional tolerance and project evidence together.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Functional housings",
        label: "Water-control components",
        description:
          "Define pressure, temperature, medium exposure, dimensions and validation scope before material selection.",
        href: "/applications/water-control",
      },
    ],
    validationIntro:
      "PA6 absorbs moisture and its molded performance depends on conditioning, geometry and process history. Treat catalog values as screening inputs and close the decision on the intended tool and part.",
    validationSteps: [
      {
        title: "Define the moisture state",
        description:
          "Record whether the comparison uses as-molded, dry or conditioned specimens. Do not mix those states in one conclusion.",
      },
      {
        title: "Control drying and material handling",
        description:
          "Use grade-specific processing guidance and prevent uncontrolled moisture pickup before molding trials.",
      },
      {
        title: "Review orientation and weld lines",
        description:
          "Relate the gate, flow path and weld-line position to the real load direction and critical dimensions.",
      },
      {
        title: "Measure shrinkage and warpage on the part",
        description:
          "Catalog shrinkage data are not complete across this range. Measure the intended geometry instead of filling the gap with assumed values.",
      },
      {
        title: "Run the intended tool and process window",
        description:
          "Confirm filling, surface, dimensions, repeatability and local defects under production-relevant molding conditions.",
      },
      {
        title: "Validate the assembled function",
        description:
          "Close load, environment, cycling, assembly and customer evidence requirements before production approval.",
      },
    ],
    contactMaterial: "Glass Fiber Reinforced PA6",
  },
  PA66: {
    polymer: "PA66",
    slug: "glass-fiber-reinforced-pa66-compound",
    path: "/products/categories/glass-fiber-reinforced-pa66-compound",
    parentPath: "/products/categories/pa66-compound",
    parentLabel: "PA66 Compounds",
    title: "Glass Fiber Reinforced PA66 Compounds",
    metaTitle: "Glass Fiber Reinforced PA66 Grades | Taiyi Polymer",
    metaDescription:
      "Compare PLATFORM glass-fiber-reinforced PA66 grades by GF level, strength, flexural modulus, notched impact, HDT, moisture data and part requirements.",
    heroEyebrow: "PA66 Grade Selection",
    heroDescription:
      "Explore 15 PLATFORM® PA66 grades from GF15 to GF50. Compare strength and heat-deflection data, then check moisture and assembly requirements.",
    navSubtitle: "GF15–GF50 across strength, heat deflection, and moisture",
    comparisonIntro:
      "Grades are ordered by glass-fiber content. Compare the published properties, then open a grade or request its full TDS.",
    tradeoffs: {
      improvementTitle: "Increasing glass-fiber content can support",
      improvementIntro:
        "Within a suitable PA66 formulation and comparable test basis, reinforcement is commonly screened for these structural and thermal requirements.",
      improvements: [
        "Higher stiffness and short-term load response",
        "Higher tensile and flexural strength",
        "Higher heat-deflection response",
        "Improved creep resistance",
        "Dimensional control under load",
      ],
      reviewTitle: "The final shortlist still depends on",
      reviewIntro:
        "Fiber percentage is only one input. Moisture state, geometry, process history and local orientation can change the molded and assembled result.",
      reviewPoints: [
        "Impact requirement and failure mode",
        "Fiber orientation and directional properties",
        "Shrinkage balance and warpage",
        "Surface appearance and exposed fibers",
        "Moisture state and dimensional conditioning",
        "Weld lines, gate position and local stress",
      ],
    },
    applicationsIntro:
      "Define the part's load, thermal exposure and assembly conditions, then confirm the evidence needed for your application.",
    applications: [
      {
        eyebrow: "Automotive mechanisms",
        label: "Automotive structural and functional parts",
        description:
          "Define load, temperature, cycling, moisture, fastening and approval requirements before comparing grades.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Electrical housings",
        label: "Electrical and electronic components",
        description:
          "Review heat, mechanical retention, dimensions, electrical evidence and the exact document requirement together.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Brackets and supports",
        label: "Automation and conveyor systems",
        description:
          "Relate static and cyclic loads, mounting geometry, vibration and process constraints to the grade shortlist.",
        href: "/applications/conveyor-automation",
      },
      {
        eyebrow: "Load-bearing housings",
        label: "Appliance molded components",
        description:
          "Screen temperature, moisture, assembly load, repeated cycles and production consistency for the actual housing or support.",
        href: "/applications/washing-machine-components",
      },
    ],
    validationIntro:
      "PA66 GF screening must keep moisture state, heat, process conditions and orientation on the same evidence chain. Use published data to narrow the range, then validate the molded part and assembly.",
    validationSteps: [
      {
        title: "Set the specimen and moisture state",
        description:
          "Identify the conditioning basis behind each value and avoid comparing dry and conditioned results as though they were interchangeable.",
      },
      {
        title: "Confirm drying and melt handling",
        description:
          "Follow grade-specific processing guidance and control residence time and moisture before interpreting a molding trial.",
      },
      {
        title: "Map fiber orientation to the load path",
        description:
          "Check gates, flow direction, weld lines, ribs and inserts against the critical structural direction.",
      },
      {
        title: "Measure dimensions and warpage",
        description:
          "Use the actual tool and conditioning sequence. Current catalog shrinkage coverage is incomplete and cannot replace part measurement.",
      },
      {
        title: "Test thermal and assembly conditions",
        description:
          "HDT is a screening measurement, not a universal continuous-use temperature. Validate load, time, cycling and assembly restraint.",
      },
      {
        title: "Close project-specific evidence",
        description:
          "Confirm repeatability, function, environment, documents and customer requirements before production release.",
      },
    ],
    contactMaterial: "Glass Fiber Reinforced PA66",
  },
  PPA: {
    polymer: "PPA",
    slug: "glass-fiber-reinforced-ppa-compound",
    path: "/products/categories/glass-fiber-reinforced-ppa-compound",
    parentPath: "/products/categories/ppa-compound",
    parentLabel: "PPA Compounds",
    title: "Glass Fiber Reinforced PPA Compounds",
    metaTitle: "Glass Fiber Reinforced PPA Grades | Taiyi Polymer",
    metaDescription:
      "Compare PLATFORM glass-fiber-reinforced PPA grades by GF level, tensile and flexural data, HDT, water absorption and molded-part requirements.",
    heroEyebrow: "PPA Grade Selection",
    heroDescription:
      "Compare two PLATFORM® PPA grades at GF30 and GF50 for high-temperature, dimensional and load-bearing molded-part screening.",
    navSubtitle: "GF30–GF50 across thermal response, stiffness, and dimensions",
    comparisonIntro:
      "The listed grades are ordered by glass-fiber content. Compare published values, then open the grade record or request its full TDS.",
    tradeoffs: {
      improvementTitle: "Glass-fiber reinforcement can support",
      improvementIntro:
        "PPA glass-fiber grades are screened where the part needs a high-temperature structural balance. The percentage alone does not establish suitability.",
      improvements: [
        "Higher stiffness and load response",
        "Higher tensile and flexural strength",
        "High heat-deflection screening values",
        "Dimensional control under load",
        "A starting point for hot structural parts",
      ],
      reviewTitle: "The same screening must still review",
      reviewIntro:
        "Temperature exposure, media, geometry, molding history and fiber orientation can change the molded and assembled result. Validate the actual duty cycle and part.",
      reviewPoints: [
        "Thermal exposure, duration and load",
        "Moisture state and environmental media",
        "Fiber orientation and anisotropy",
        "Directional shrinkage and warpage",
        "Weld lines, gates and local stress",
        "Assembly constraints and functional evidence",
      ],
    },
    applicationsIntro:
      "Use the listed data to screen a structural PPA option, then match temperature, load, environment and dimensions to the actual part before molding trials.",
    applications: [
      {
        eyebrow: "High-temperature structures",
        label: "Automotive structural and functional parts",
        description:
          "Define heat exposure, load duration, medium contact, assembly restraint and validation requirements before selecting a grade.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Electrical and electronic parts",
        label: "Thermally demanding housings and supports",
        description:
          "Review heat, mechanical retention, dimensions, electrical requirements and the exact document basis with the molded geometry.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Precision molded structures",
        label: "Industrial housings and brackets",
        description:
          "Connect the load path, fastening geometry, temperature, fiber orientation and dimensional targets to the PPA screening range.",
        href: "/applications/conveyor-automation",
      },
    ],
    validationIntro:
      "PPA GF data can narrow an initial range, but it does not replace part-level thermal, dimensional and assembly validation. Keep the test basis, material state and processing history visible throughout the decision.",
    validationSteps: [
      {
        title: "Define the duty cycle and thermal exposure",
        description:
          "Record temperature, duration, loading, cycling and environmental media. HDT is a screening value, not a universal continuous-use temperature.",
      },
      {
        title: "Confirm the test basis and material state",
        description:
          "Check the grade-specific TDS before comparing critical values. Do not treat typical web data as a complete approval basis.",
      },
      {
        title: "Control drying and melt handling",
        description:
          "Set the grade-specific drying and processing window before interpreting a molding trial, including moisture and residence-time control.",
      },
      {
        title: "Map fiber orientation to the load path",
        description:
          "Review gate position, flow direction, weld lines, ribs and inserts against the critical structural direction and local stress.",
      },
      {
        title: "Measure dimensions and warpage on the part",
        description:
          "Use the intended mold and conditioning sequence. Published shrinkage ranges guide screening but cannot replace measurements on the actual geometry.",
      },
      {
        title: "Validate the assembled function",
        description:
          "Confirm thermal, mechanical, environmental, document and repeatability requirements before production approval.",
      },
    ],
    contactMaterial: "Glass Fiber Reinforced PPA",
  },
};

export const getEngineeringGfLandingPageData = (
  polymer: EngineeringGfPolymer,
) => landingPages[polymer];

export const getEngineeringGfGrades = (
  polymer: EngineeringGfPolymer,
): readonly EngineeringGfGrade[] => {
  return glassFiberGrades
    .filter((grade) => grade.family === polymer)
    .toSorted((left, right) => {
      const fillerDifference = Number(left.filler) - Number(right.filler);
      return fillerDifference || left.sortOrder - right.sortOrder;
    });
};

