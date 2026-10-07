import {
  catalogEngineeringTds,
  type CatalogEngineeringTdsRecord,
} from "@/data/catalog";
import {
  getEngineeringGfLandingRegistration,
  type EngineeringGfLandingRegistration,
  type EngineeringGfPolymer,
} from "@/data/engineeringGfLandingRegistry";

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

type EngineeringGfLandingPageContent = {
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

export type EngineeringGfLandingPageData =
  EngineeringGfLandingRegistration & EngineeringGfLandingPageContent;

export type EngineeringGfGrade = CatalogEngineeringTdsRecord;

const glassFiberGrades = catalogEngineeringTds.filter(
  (grade) => grade.category === "Glass Fiber Reinforced",
);

const landingPageContent: Record<
  EngineeringGfPolymer,
  EngineeringGfLandingPageContent
> = {
  PA6: {
    parentLabel: "PA6 Compounds",
    title: "Glass Fiber Reinforced PA6 Compounds",
    metaTitle: "Glass Fiber Reinforced PA6 Grades | Taiyi Polymer",
    metaDescription:
      "Glass-fiber-reinforced PLATFORM PA6 for injection molding. Compare grade properties and request technical data for your part.",
    heroEyebrow: "PLATFORM® PA6",
    heroDescription:
      "PLATFORM® PA6 compounds with 8–50% glass fiber reinforcement for injection-molded parts.",
    navSubtitle: "Glass-fiber PA6 grades and properties",
    comparisonIntro:
      "Glass-fiber content and key properties for each grade, with links to grade data and TDS requests.",
    tradeoffs: {
      improvementTitle: "Strength and dimensional stability",
      improvementIntro:
        "Glass-fiber-reinforced PA6 is used for parts that need stiffness and strength under load. Performance varies with the grade and molding conditions.",
      improvements: [
        "Higher stiffness and load response",
        "Higher tensile and flexural strength",
        "Higher heat-deflection response",
        "Improved creep resistance",
        "Dimensional control under load",
      ],
      reviewTitle: "Moisture and molded geometry",
      reviewIntro:
        "Moisture changes PA6's mechanical properties and dimensions. Fiber direction and weld lines also affect performance in molded parts.",
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
      "Housings, brackets and functional components place different demands on strength, temperature resistance and dimensional stability.",
    applications: [
      {
        eyebrow: "Structural housings",
        label: "Electrical and electronic housings",
        description:
          "Housing stiffness, assembly loads, electrical insulation and heat exposure shape the material requirements.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Brackets and supports",
        label: "Automation support components",
        description:
          "Brackets and supports carry loads through fastening points and are often exposed to vibration.",
        href: "/applications/conveyor-automation",
      },
      {
        eyebrow: "Automotive mechanisms",
        label: "Automotive molded components",
        description:
          "Molded automotive parts combine mechanical loads with heat, moisture and close dimensional tolerances.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Functional housings",
        label: "Water-control components",
        description:
          "Pressure, temperature and contact with water or other fluids affect material choice and dimensional performance.",
        href: "/applications/water-control",
      },
    ],
    validationIntro:
      "PA6 absorbs moisture. Drying, conditioning and molding conditions influence the properties and dimensions of the finished part.",
    validationSteps: [
      {
        title: "Moisture state",
        description:
          "Dry, as-molded and conditioned specimens can have different properties. Comparable data need the same moisture state.",
      },
      {
        title: "Drying and handling",
        description:
          "Drying conditions depend on the grade. Storage and handling affect moisture pickup before molding.",
      },
      {
        title: "Fiber orientation",
        description:
          "Gate position, flow direction and weld lines influence strength along the load path.",
      },
      {
        title: "Shrinkage and warpage",
        description:
          "Shrinkage data are incomplete for this range. Part measurements establish directional shrinkage and warpage for the intended geometry.",
      },
      {
        title: "Molding conditions",
        description:
          "Tool design and the process window affect filling, surface finish, dimensions and repeatability.",
      },
      {
        title: "Part testing",
        description:
          "Tests on the assembled part assess load response, environmental exposure, cycling and fit under the intended service conditions.",
      },
    ],
    contactMaterial: "Glass Fiber Reinforced PA6",
  },
  PA66: {
    parentLabel: "PA66 Compounds",
    title: "Glass Fiber Reinforced PA66 Compounds",
    metaTitle: "Glass Fiber Reinforced PA66 Grades | Taiyi Polymer",
    metaDescription:
      "PLATFORM glass-fiber-reinforced PA66 for structural injection-molded parts. Compare strength, heat-deflection and moisture data by grade.",
    heroEyebrow: "PLATFORM® PA66",
    heroDescription:
      "PLATFORM® PA66 compounds with 15–50% glass fiber reinforcement for load-bearing injection-molded parts.",
    navSubtitle: "Glass-fiber PA66 grades and properties",
    comparisonIntro:
      "Glass-fiber content and key properties for each grade, with links to grade data and TDS requests.",
    tradeoffs: {
      improvementTitle: "Strength under load",
      improvementIntro:
        "Glass-fiber-reinforced PA66 combines stiffness and strength for housings, brackets and structural parts. Grade formulation and test conditions affect the balance of mechanical and thermal properties.",
      improvements: [
        "Higher stiffness and short-term load response",
        "Higher tensile and flexural strength",
        "Higher heat-deflection response",
        "Improved creep resistance",
        "Dimensional control under load",
      ],
      reviewTitle: "Moisture and molded geometry",
      reviewIntro:
        "PA66's moisture state influences mechanical properties and dimensions. Fiber direction, gate position and weld lines also affect the molded result.",
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
      "Housings, brackets and structural components have different requirements for stiffness, impact response and dimensional stability.",
    applications: [
      {
        eyebrow: "Automotive mechanisms",
        label: "Automotive structural and functional parts",
        description:
          "Vehicle components face load, temperature cycles, moisture and fastening stresses. Grade and part testing address the project's approval requirements.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Electrical housings",
        label: "Electrical and electronic components",
        description:
          "Heat exposure, dimensional fit and mechanical retention matter for electrical housings. Electrical properties and document requirements depend on the grade.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Brackets and supports",
        label: "Automation and conveyor systems",
        description:
          "Static and cyclic loads, vibration and mounting geometry shape the requirements for brackets and supports. Processing conditions affect the molded result.",
        href: "/applications/conveyor-automation",
      },
      {
        eyebrow: "Load-bearing housings",
        label: "Appliance molded components",
        description:
          "Temperature, moisture, assembly loads and repeated cycles affect housings and supports. Consistent molding conditions help assess repeatability.",
        href: "/applications/washing-machine-components",
      },
    ],
    validationIntro:
      "Moisture conditioning and molding conditions affect PA66 test results and part dimensions. Grade data and molded-part measurements need a clear record of those conditions.",
    validationSteps: [
      {
        title: "Specimen conditioning",
        description:
          "Dry and conditioned PA66 values describe different material states. Comparisons need the conditioning basis used for each test.",
      },
      {
        title: "Drying and melt handling",
        description:
          "Grade-specific guidance sets the drying and processing conditions for a molding trial. Moisture and residence time affect how the results are interpreted.",
      },
      {
        title: "Fiber direction and load",
        description:
          "Gate location, flow, weld lines, ribs and inserts influence fiber orientation along the part's load path.",
      },
      {
        title: "Shrinkage and warpage",
        description:
          "Catalog shrinkage data are incomplete for this range. Measurements on the molded part establish dimensions and warpage for the actual tool and conditioning sequence.",
      },
      {
        title: "Heat and assembly loads",
        description:
          "An HDT value alone does not establish continuous-use temperature. Part tests address load duration, temperature cycles and assembly restraint.",
      },
      {
        title: "Function and repeatability",
        description:
          "Part testing covers functional response, repeatability and environmental exposure. Document and customer requirements form part of production approval.",
      },
    ],
    contactMaterial: "Glass Fiber Reinforced PA66",
  },
  PPA: {
    parentLabel: "PPA Compounds",
    title: "Glass Fiber Reinforced PPA Compounds",
    metaTitle: "Glass Fiber Reinforced PPA Grades | Taiyi Polymer",
    metaDescription:
      "PLATFORM glass-fiber-reinforced PPA compounds for injection molding. Compare mechanical properties, heat deflection and water absorption by grade.",
    heroEyebrow: "PLATFORM® PPA",
    heroDescription:
      "PLATFORM® PPA compounds with 30%, 45% and 50% glass fiber reinforcement for molded parts with heat and stiffness requirements.",
    navSubtitle: "Glass-fiber PPA grades and thermal properties",
    comparisonIntro:
      "Glass-fiber content and key properties for each grade, with links to grade data and TDS requests.",
    tradeoffs: {
      improvementTitle: "Structural performance at elevated temperatures",
      improvementIntro:
        "Glass-fiber-reinforced PPA is considered for structural parts exposed to heat. Grade data includes tensile and flexural properties, heat-deflection temperature and water absorption.",
      improvements: [
        "Higher stiffness and load response",
        "Higher tensile and flexural strength",
        "High heat-deflection screening values",
        "Dimensional control under load",
        "For structural parts exposed to heat",
      ],
      reviewTitle: "Heat exposure and part geometry",
      reviewIntro:
        "Temperature, load duration and environmental media define the operating conditions. Fiber orientation, weld lines and assembly restraint also affect strength and dimensions in the molded part.",
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
      "PPA grade selection relates mechanical and thermal data to the part's temperature, load, environment and dimensional requirements.",
    applications: [
      {
        eyebrow: "High-temperature structures",
        label: "Automotive structural and functional parts",
        description:
          "Hot structural parts combine heat exposure with sustained or cyclic loads. Media contact and assembly restraint are part of the test conditions.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Electrical and electronic parts",
        label: "Thermally demanding housings and supports",
        description:
          "Heat exposure, dimensional fit and mechanical retention shape housing and support requirements. Electrical properties and supporting documents are grade-specific.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Precision molded structures",
        label: "Industrial housings and brackets",
        description:
          "Load paths, fastening points and temperature affect structural requirements. Fiber orientation and molding conditions influence the resulting dimensions.",
        href: "/applications/conveyor-automation",
      },
    ],
    validationIntro:
      "PPA comparisons depend on the test basis, material state and processing history. Molded-part trials assess thermal response, dimensions and assembled function under the intended conditions.",
    validationSteps: [
      {
        title: "Temperature and duty cycle",
        description:
          "Temperature, duration, load, cycling and environmental media define service conditions. HDT alone does not establish continuous-use temperature.",
      },
      {
        title: "Test basis and material state",
        description:
          "The grade-specific TDS supplies the basis for comparing critical properties. Published typical values support selection; production approval needs the project's full evidence.",
      },
      {
        title: "Drying and processing",
        description:
          "Grade-specific drying and processing guidance defines the trial conditions. Moisture and residence time are part of the molding record.",
      },
      {
        title: "Fiber direction and local stress",
        description:
          "Gate position, flow direction, weld lines, ribs and inserts influence the structural response along the part's load path.",
      },
      {
        title: "Dimensions and warpage",
        description:
          "Published shrinkage ranges support initial selection. Measurements with the intended mold and conditioning sequence establish dimensions and warpage for the actual geometry.",
      },
      {
        title: "Assembled function",
        description:
          "Part and assembly tests address thermal, mechanical, environmental and repeatability requirements. Supporting documents complete the production-approval record.",
      },
    ],
    contactMaterial: "Glass Fiber Reinforced PPA",
  },
};

export const getEngineeringGfLandingPageData = (
  polymer: EngineeringGfPolymer,
): EngineeringGfLandingPageData => ({
  ...getEngineeringGfLandingRegistration(polymer),
  ...landingPageContent[polymer],
});

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

