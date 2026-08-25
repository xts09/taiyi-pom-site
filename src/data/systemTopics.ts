import { findCategoryBySlug } from "../lib/productCategories.ts";
import {
  applicationIds,
  applicationSystemIds,
  applicationSystems,
  partClassifications,
  type ApplicationId,
  type ApplicationSystem,
  type ApplicationSystemId,
  type PartClassification,
  type PartId,
} from "./partTaxonomy.ts";

export type SystemTopicEditorialStatus = "draft" | "reviewed";

type SystemTopicContentItem = {
  id: string;
  title: string;
  summary: string;
};

type SystemTopicMaterialDirection = {
  productCategorySlug: string;
  screeningRole: string;
  caution: string;
};

type SystemTopicRepresentativePartContext = {
  partId: PartId;
  role: string;
  systemContribution: string;
  interfaceFocus: string;
};

type SystemTopicRequirementAllocation = {
  id: string;
  condition: string;
  affectedRoles: readonly string[];
  requirement: string;
  materialDecision: string;
  validationFocus: string;
};

export type SystemTopic = {
  systemId: ApplicationSystemId;
  applicationId: ApplicationId;
  editorialStatus: SystemTopicEditorialStatus;
  sourceLocale: "en";
  workingTitle: string;
  overview: string;
  scopeBoundary: string;
  systemBoundaryRoles: readonly SystemTopicContentItem[];
  representativePartIds: readonly PartId[];
  representativePartContexts: readonly SystemTopicRepresentativePartContext[];
  engineeringChallenges: readonly SystemTopicContentItem[];
  requirementAllocations: readonly SystemTopicRequirementAllocation[];
  materialRequirements: readonly SystemTopicContentItem[];
  materialDirections: readonly SystemTopicMaterialDirection[];
  validationConsiderations: readonly SystemTopicContentItem[];
};

const partIdRef = <const Value extends string>(value: Value) =>
  value as Value & PartId;

// Editorial completeness, route release, Application promotion, and the
// existing ApplicationSystem lifecycle are independent gates. D2f-c gives this
// draft an environment-gated preview release; it is not a public Topic.
export const systemTopics = [
  {
    systemId: applicationSystemIds.waterControlValveFlowControl,
    applicationId: applicationIds.waterControl,
    editorialStatus: "draft",
    sourceLocale: "en",
    workingTitle: "Valve Flow Control",
    overview:
      "Allocate valve duty across moving internals, body and housing roles, sealing interfaces, and actuation. Define the medium, pressure and temperature profile, flow or shutoff target, movement, tolerance stack, and evidence before screening materials.",
    scopeBoundary:
      "This Topic covers whole-valve architecture, interface coupling, cross-part requirements, and finished-system validation. Valve Spools & Cartridges separately covers local geometry, clearance, stick-slip, scoring, and tribology.",
    systemBoundaryRoles: [
      {
        id: "flow-path-and-pressure-duty",
        title: "Flow path and pressure duty",
        summary:
          "Define the medium, flow or shutoff target, pressure peaks, leakage limit, and wetted or pressure-supporting Parts.",
      },
      {
        id: "moving-metering-elements",
        title: "Moving metering elements",
        summary:
          "Connect actuator input to metering-element movement and the resulting flow or shutoff response.",
      },
      {
        id: "seals-and-mating-interfaces",
        title: "Seals and mating interfaces",
        summary:
          "Coordinate seals, bore geometry, medium, contamination, and contact force across the assembled valve.",
      },
      {
        id: "body-housing-and-assembly",
        title: "Body, housing, and assembly",
        summary:
          "Allocate stiffness, retained fit, fastening, warpage, and variation to Parts that hold alignment and sealing.",
      },
    ],
    representativePartIds: [
      partIdRef("valve-spool-assembly"),
      partIdRef("thermostatic-valve-body"),
      partIdRef("valve-housing-component"),
    ],
    representativePartContexts: [
      {
        partId: partIdRef("valve-spool-assembly"),
        role: "Moving metering assembly",
        systemContribution:
          "Converts actuation into metering or shutoff across the bore, ports, seals, pressure forces, and medium.",
        interfaceFocus:
          "Clearance, alignment, operating force, debris, flow response, and assembled leakage.",
      },
      {
        partId: partIdRef("thermostatic-valve-body"),
        role: "Actuation and temperature-control body",
        systemContribution:
          "Carries the mechanism and flow path through the intended temperature and assembly cycle.",
        interfaceFocus:
          "Actuator alignment, body dimensions, seal support, conditioned movement, and molded-part variation.",
      },
      {
        partId: partIdRef("valve-housing-component"),
        role: "Static structural and assembly support",
        systemContribution:
          "Locates internals, supports fastening and seals, and transfers sustained or cyclic assembly loads.",
        interfaceFocus:
          "Stiffness, creep, warpage, weld lines, retained fit, seal compression, and alignment.",
      },
    ],
    engineeringChallenges: [
      {
        id: "metering-clearance-and-sealing",
        title: "Coordinate metering clearance and sealing interfaces",
        summary:
          "Moving clearances, body geometry, seal interfaces, pressure differential, and molded variation must be evaluated together rather than as isolated part tolerances.",
      },
      {
        id: "repeated-actuation-and-contact-wear",
        title: "Control actuation force and contact wear",
        summary:
          "Breakaway force, running friction, stick-slip, wear, and debris can change movement and flow response across repeated cycles.",
      },
      {
        id: "medium-temperature-and-dimensions",
        title: "Retain dimensions in the intended medium and temperature cycle",
        summary:
          "The exact grade, medium, temperature history, pressure cycle, and exposure duration can affect fit, clearance, and structural response.",
      },
      {
        id: "assembly-and-production-variation",
        title: "Manage assembly and production variation",
        summary:
          "Gate position, shrinkage, warpage, weld lines, cavity variation, seals, and mating parts influence the finished valve system.",
      },
    ],
    requirementAllocations: [
      {
        id: "metering-response-and-shutoff",
        condition:
          "Flow, shutoff, or leakage changes with position, pressure, clearance, seals, or molded variation.",
        affectedRoles: [
          "Moving internals",
          "Body or bore",
          "Seal and port interfaces",
        ],
        requirement:
          "Allocate alignment, clearance, surface, and actuation-force limits across the tolerance stack.",
        materialDecision:
          "Use balanced POM only after geometry, pressure forces, seals, and tolerances are defined.",
        validationFocus:
          "Measure conditioned geometry, assembled clearance, operating force, flow, and leakage together.",
      },
      {
        id: "repeated-actuation-and-contact-change",
        condition:
          "Operating force, stick-slip, wear, or debris changes with repeated actuation.",
        affectedRoles: [
          "Moving internals",
          "Mating surfaces",
          "Seals and alignment supports",
        ],
        requirement:
          "Separate material friction and wear from seal load, geometry, contamination, finish, and alignment.",
        materialDecision:
          "Screen low-friction POM only when the contact system remains the measured limit.",
        validationFocus:
          "Test production mating materials, medium, seals, debris, load, motion, and cycles.",
      },
      {
        id: "retained-body-and-housing-fit",
        condition:
          "Body or housing deformation changes fastening, seal support, or internal alignment.",
        affectedRoles: [
          "Valve body",
          "Housing and fastening",
          "Seal support and internal alignment",
        ],
        requirement:
          "Allocate stiffness, creep, fit, shrinkage, warpage, weld-line, and assembly-stress limits.",
        materialDecision:
          "Consider reinforced POM only when structural retention governs more than contact behavior.",
        validationFocus:
          "Review flow orientation, cavity variation, warpage, weld lines, sealing, movement, and conditioned endurance.",
      },
      {
        id: "medium-and-temperature-exposure",
        condition:
          "Medium, cleaners, temperature, time, and stress change dimensions or retained properties.",
        affectedRoles: [
          "All wetted Parts",
          "Seals and mating materials",
          "Pressure-supporting and moving interfaces",
        ],
        requirement:
          "Review the exact formulation and color against exposure, documents, dimensions, and function.",
        materialDecision:
          "Do not infer compatibility from a POM family label; require grade and project evidence.",
        validationFocus:
          "Condition production materials and assemblies, then compare dimensions, movement, sealing, strength, and failure.",
      },
    ],
    materialRequirements: [
      {
        id: "dimensional-stability",
        title: "Dimensional stability at critical fits",
        summary:
          "Set clearance, roundness, flatness, and assembly limits against the real pressure, temperature, and exposure conditions.",
      },
      {
        id: "friction-and-wear",
        title: "Controlled friction and wear",
        summary:
          "Compare startup and running movement, wear on both mating surfaces, debris, and operating force using the production contact system.",
      },
      {
        id: "stiffness-creep-and-retention",
        title: "Stiffness, creep, and retained assembly fit",
        summary:
          "Review body support, sustained load, fastening and seal compression without assuming that the stiffest formulation is automatically suitable.",
      },
      {
        id: "medium-compatibility",
        title: "Grade-specific medium compatibility",
        summary:
          "Confirm compatibility for the exact formulation, color, medium, additives, temperature, exposure period, and required documents.",
      },
    ],
    materialDirections: [
      {
        productCategorySlug: "base-pom-resin",
        screeningRole:
          "Use balanced POM as the baseline when dimensional consistency, molding response, and repeated movement lead the comparison.",
        caution:
          "Family naming does not establish medium compatibility, leakage performance, or approval.",
      },
      {
        productCategorySlug: "wear-resistant-low-friction-pom-compound",
        screeningRole:
          "Consider when measured force, stick-slip, wear, or movement stability limits a sound valve design.",
        caution:
          "Lower friction may not reduce wear or stabilize sealing; test the actual contact system.",
      },
      {
        productCategorySlug: "glass-fiber-reinforced-pom-compound",
        screeningRole:
          "Consider when stiffness, creep, or housing retention governs more than contact behavior.",
        caution:
          "Reinforcement changes flow, shrinkage, warpage, weld lines, surface condition, and counterface wear.",
      },
    ],
    validationConsiderations: [
      {
        id: "define-system-duty",
        title: "Define the complete valve duty",
        summary:
          "Record medium, pressure and temperature, flow or shutoff target, actuation, cycles, leakage limit, and documents.",
      },
      {
        id: "measure-molded-and-assembled-parts",
        title: "Measure molded and assembled geometry",
        summary:
          "Measure cavity dimensions, warpage, clearances, seals, fastening, and movement after conditioning and assembly.",
      },
      {
        id: "run-representative-functional-tests",
        title: "Run representative functional tests",
        summary:
          "Track force, flow, leakage, wear, temperature, dimensions, and failure through representative cycles.",
      },
      {
        id: "approve-exact-project-system",
        title: "Approve the exact project system",
        summary:
          "Release the exact grade, color, process, mating Parts, seals, test method, and documents from finished-system evidence.",
      },
    ],
  },
] as const satisfies readonly SystemTopic[];

type SystemTopicValidationSources = {
  systems?: readonly ApplicationSystem[];
  classifications?: readonly PartClassification[];
};

const topicKey = (systemId: string, value: string) => `${systemId}::${value}`;

const hasCompleteContentItem = (item: SystemTopicContentItem) =>
  item.id.trim().length > 0 &&
  item.title.trim().length > 0 &&
  item.summary.trim().length > 0;

const hasCompleteRepresentativePartContext = (
  context: SystemTopicRepresentativePartContext,
) =>
  context.role.trim().length > 0 &&
  context.systemContribution.trim().length > 0 &&
  context.interfaceFocus.trim().length > 0;

const hasCompleteRequirementAllocation = (
  allocation: SystemTopicRequirementAllocation,
) =>
  allocation.id.trim().length > 0 &&
  allocation.condition.trim().length > 0 &&
  allocation.affectedRoles.length > 0 &&
  allocation.affectedRoles.every((role) => role.trim().length > 0) &&
  allocation.requirement.trim().length > 0 &&
  allocation.materialDecision.trim().length > 0 &&
  allocation.validationFocus.trim().length > 0;

export const validateSystemTopics = (
  topics: readonly SystemTopic[] = systemTopics,
  sources: SystemTopicValidationSources = {},
) => {
  const systems = sources.systems ?? applicationSystems;
  const classifications = sources.classifications ?? partClassifications;
  const systemById = new Map(systems.map((system) => [system.id, system]));
  const classificationByPartId = new Map(
    classifications.map((classification) => [
      classification.partId,
      classification,
    ]),
  );
  const topicSystemIds = topics.map((topic) => topic.systemId);

  return {
    topicCount: topics.length,
    draftTopics: topics.filter((topic) => topic.editorialStatus === "draft")
      .length,
    reviewedTopics: topics.filter(
      (topic) => topic.editorialStatus === "reviewed",
    ).length,
    duplicateTopicSystemIds: Array.from(
      new Set(
        topicSystemIds.filter(
          (systemId, index) => topicSystemIds.indexOf(systemId) !== index,
        ),
      ),
    ),
    brokenTopicSystemIds: topics
      .filter((topic) => !systemById.has(topic.systemId))
      .map((topic) => topic.systemId),
    crossApplicationTopicKeys: topics.flatMap((topic) => {
      const system = systemById.get(topic.systemId);

      return system && system.applicationId !== topic.applicationId
        ? [topicKey(topic.systemId, topic.applicationId)]
        : [];
    }),
    duplicateRepresentativePartKeys: topics.flatMap((topic) => {
      const duplicateIds = topic.representativePartIds.filter(
        (partId, index) =>
          topic.representativePartIds.indexOf(partId) !== index,
      );

      return Array.from(new Set(duplicateIds)).map((partId) =>
        topicKey(topic.systemId, partId),
      );
    }),
    duplicateRepresentativeContextKeys: topics.flatMap((topic) => {
      const contextPartIds = topic.representativePartContexts.map(
        (context) => context.partId,
      );

      return Array.from(
        new Set(
          contextPartIds.filter(
            (partId, index) => contextPartIds.indexOf(partId) !== index,
          ),
        ),
      ).map((partId) => topicKey(topic.systemId, partId));
    }),
    missingRepresentativeContextKeys: topics.flatMap((topic) =>
      topic.representativePartIds
        .filter(
          (partId) =>
            !topic.representativePartContexts.some(
              (context) => context.partId === partId,
            ),
        )
        .map((partId) => topicKey(topic.systemId, partId)),
    ),
    nonRepresentativeContextKeys: topics.flatMap((topic) =>
      topic.representativePartContexts
        .filter(
          (context) => !topic.representativePartIds.includes(context.partId),
        )
        .map((context) => topicKey(topic.systemId, context.partId)),
    ),
    unknownRepresentativePartKeys: topics.flatMap((topic) =>
      topic.representativePartIds
        .filter((partId) => !classificationByPartId.has(partId))
        .map((partId) => topicKey(topic.systemId, partId)),
    ),
    nonCanonicalRepresentativePartKeys: topics.flatMap((topic) =>
      topic.representativePartIds.flatMap((partId) => {
        const classification = classificationByPartId.get(partId);

        return classification &&
          classification.applicationId === topic.applicationId &&
          classification.systemId === topic.systemId
          ? []
          : [topicKey(topic.systemId, partId)];
      }),
    ),
    emptyEditorialContentKeys: topics.flatMap((topic) => {
      const emptyKeys = [
        ["workingTitle", topic.workingTitle.trim().length > 0],
        ["overview", topic.overview.trim().length > 0],
        ["scopeBoundary", topic.scopeBoundary.trim().length > 0],
        [
          "systemBoundaryRoles",
          topic.systemBoundaryRoles.length > 0 &&
            topic.systemBoundaryRoles.every(hasCompleteContentItem),
        ],
        ["representativePartIds", topic.representativePartIds.length > 0],
        [
          "representativePartContexts",
          topic.representativePartContexts.length > 0 &&
            topic.representativePartContexts.every(
              hasCompleteRepresentativePartContext,
            ),
        ],
        [
          "engineeringChallenges",
          topic.engineeringChallenges.length > 0 &&
            topic.engineeringChallenges.every(hasCompleteContentItem),
        ],
        [
          "requirementAllocations",
          topic.requirementAllocations.length > 0 &&
            topic.requirementAllocations.every(
              hasCompleteRequirementAllocation,
            ),
        ],
        [
          "materialRequirements",
          topic.materialRequirements.length > 0 &&
            topic.materialRequirements.every(hasCompleteContentItem),
        ],
        [
          "materialDirections",
          topic.materialDirections.length > 0 &&
            topic.materialDirections.every(
              (direction) =>
                direction.productCategorySlug.trim().length > 0 &&
                direction.screeningRole.trim().length > 0 &&
                direction.caution.trim().length > 0,
            ),
        ],
        [
          "validationConsiderations",
          topic.validationConsiderations.length > 0 &&
            topic.validationConsiderations.every(hasCompleteContentItem),
        ],
      ] as const;

      return emptyKeys
        .filter(([, complete]) => !complete)
        .map(([field]) => topicKey(topic.systemId, field));
    }),
    brokenMaterialDirectionKeys: topics.flatMap((topic) =>
      topic.materialDirections
        .filter(
          (direction) => !findCategoryBySlug(direction.productCategorySlug),
        )
        .map((direction) =>
          topicKey(topic.systemId, direction.productCategorySlug),
        ),
    ),
  };
};
