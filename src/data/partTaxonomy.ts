type Brand<Value, Name extends string> = Value & {
  readonly __brand: Name;
};

export type ApplicationId = Brand<string, "ApplicationId">;
export type ApplicationSystemId = Brand<string, "ApplicationSystemId">;
export type PartId = Brand<string, "PartId">;
export type ComponentId = Brand<string, "ComponentId">;
export type ComponentCandidateId = Brand<string, "ComponentCandidateId">;
export type EngineeringContextId = Brand<string, "EngineeringContextId">;

const applicationId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "ApplicationId">;
const applicationSystemId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "ApplicationSystemId">;
const partId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "PartId">;
const componentId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "ComponentId">;
const componentCandidateId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "ComponentCandidateId">;
const engineeringContextId = <const Value extends string>(value: Value) =>
  value as Brand<Value, "EngineeringContextId">;

// D1b explicitly adopts the current application slugs as stable semantic IDs.
// Future slug changes must update only `slug`, not these IDs.
export const applicationIds = {
  automotive: applicationId("automotive"),
  electronics: applicationId("electronics"),
  conveyorAutomation: applicationId("conveyor-automation"),
  motionComponents: applicationId("motion-components"),
  waterControl: applicationId("water-control"),
  washingMachineComponents: applicationId("washing-machine-components"),
  outdoorEquipment: applicationId("outdoor-equipment"),
  textileMachinery: applicationId("textile-machinery"),
} as const;

export const applicationIdentityRegistry = [
  { id: applicationIds.automotive, slug: "automotive" },
  { id: applicationIds.electronics, slug: "electronics" },
  {
    id: applicationIds.conveyorAutomation,
    slug: "conveyor-automation",
  },
  { id: applicationIds.motionComponents, slug: "motion-components" },
  { id: applicationIds.waterControl, slug: "water-control" },
  {
    id: applicationIds.washingMachineComponents,
    slug: "washing-machine-components",
  },
  { id: applicationIds.outdoorEquipment, slug: "outdoor-equipment" },
  { id: applicationIds.textileMachinery, slug: "textile-machinery" },
] as const;

// D1b also adopts the six current component slugs as stable semantic IDs.
export const componentIds = {
  precisionPlasticGears: componentId("precision-plastic-gears"),
  bushingsAndSleeves: componentId("bushings-and-sleeves"),
  conveyorChainComponents: componentId("conveyor-chain-components"),
  valveSpoolsAndCartridges: componentId("valve-spools-and-cartridges"),
  textileGuideComponents: componentId("textile-guide-components"),
  icHandlingTrays: componentId("ic-handling-trays"),
} as const;

export const componentFamilyIdentityRegistry = [
  {
    id: componentIds.precisionPlasticGears,
    slug: "precision-plastic-gears",
  },
  {
    id: componentIds.bushingsAndSleeves,
    slug: "bushings-and-sleeves",
  },
  {
    id: componentIds.conveyorChainComponents,
    slug: "conveyor-chain-components",
  },
  {
    id: componentIds.valveSpoolsAndCartridges,
    slug: "valve-spools-and-cartridges",
  },
  {
    id: componentIds.textileGuideComponents,
    slug: "textile-guide-components",
  },
  { id: componentIds.icHandlingTrays, slug: "ic-handling-trays" },
] as const;

export type ApplicationSystem = {
  id: ApplicationSystemId;
  applicationId: ApplicationId;
  slug: string;
  title: string;
  summary?: string;
  publicationStatus:
    | "taxonomy-only"
    | "section-only"
    | "candidate"
    | "published";
};

export const applicationSystemIds = {
  automotiveFuelManagement: applicationSystemId(
    "automotive-fuel-management",
  ),
  automotiveWindowLift: applicationSystemId("automotive-window-lift"),
  automotiveShiftControl: applicationSystemId("automotive-shift-control"),
  automotiveVisibilityEquipment: applicationSystemId(
    "automotive-visibility-equipment",
  ),
  automotiveBrakeActuation: applicationSystemId(
    "automotive-brake-actuation",
  ),
  electronicsInterconnects: applicationSystemId("electronics-interconnects"),
  electronicsImagingDrive: applicationSystemId("electronics-imaging-drive"),
  electronicsRoboticMotion: applicationSystemId(
    "electronics-robotic-motion",
  ),
  conveyorAutomationModularSurfaces: applicationSystemId(
    "conveyor-automation-modular-surfaces",
  ),
  waterControlValveFlowControl: applicationSystemId(
    "water-control-valve-flow-control",
  ),
  waterControlPumping: applicationSystemId("water-control-pumping"),
  washingMachineFillAndDistribution: applicationSystemId(
    "washing-machine-fill-and-distribution",
  ),
  washingMachineDrumDrive: applicationSystemId(
    "washing-machine-drum-drive",
  ),
  washingMachineDrainage: applicationSystemId("washing-machine-drainage"),
  outdoorEquipmentIrrigation: applicationSystemId(
    "outdoor-equipment-irrigation",
  ),
  outdoorEquipmentCuttingAndLineFeed: applicationSystemId(
    "outdoor-equipment-cutting-and-line-feed",
  ),
  outdoorEquipmentStarting: applicationSystemId(
    "outdoor-equipment-starting",
  ),
} as const;

// D1c creates taxonomy entities only. None of these records may publish UI.
export const applicationSystems = [
  {
    id: applicationSystemIds.automotiveFuelManagement,
    applicationId: applicationIds.automotive,
    slug: "fuel-management",
    title: "Fuel Management",
    summary: "Fuel storage, filtering, sealing, and delivery context.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.automotiveWindowLift,
    applicationId: applicationIds.automotive,
    slug: "window-lift",
    title: "Window Lift",
    summary: "Window glass movement, support, and controlled lift path.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.automotiveShiftControl,
    applicationId: applicationIds.automotive,
    slug: "shift-control",
    title: "Shift Control",
    summary: "Gear-selector linkage and shift-motion control.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.automotiveVisibilityEquipment,
    applicationId: applicationIds.automotive,
    slug: "visibility-equipment",
    title: "Visibility Equipment",
    summary: "Driver visibility support and cleaning equipment.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.automotiveBrakeActuation,
    applicationId: applicationIds.automotive,
    slug: "brake-actuation",
    title: "Brake Actuation",
    summary: "Electric brake actuator transmission context.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.electronicsInterconnects,
    applicationId: applicationIds.electronics,
    slug: "interconnects",
    title: "Interconnects",
    summary: "Electrical signal and terminal connection interfaces.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.electronicsImagingDrive,
    applicationId: applicationIds.electronics,
    slug: "imaging-drive",
    title: "Imaging Drive",
    summary: "Print and imaging consumable drive context.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.electronicsRoboticMotion,
    applicationId: applicationIds.electronics,
    slug: "robotic-motion",
    title: "Robotic Motion",
    summary: "Robotic joint transmission and positioning context.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.conveyorAutomationModularSurfaces,
    applicationId: applicationIds.conveyorAutomation,
    slug: "modular-surfaces",
    title: "Modular Surfaces",
    summary: "Modular conveying and load-support surfaces.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.waterControlValveFlowControl,
    applicationId: applicationIds.waterControl,
    slug: "valve-flow-control",
    title: "Valve Flow Control",
    summary: "Valve-based metering, shutoff, and responsive flow control.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.waterControlPumping,
    applicationId: applicationIds.waterControl,
    slug: "pumping",
    title: "Pumping",
    summary: "Pump energy-transfer context.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.washingMachineFillAndDistribution,
    applicationId: applicationIds.washingMachineComponents,
    slug: "fill-and-distribution",
    title: "Fill & Distribution",
    summary: "Appliance water admission and routing.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.washingMachineDrumDrive,
    applicationId: applicationIds.washingMachineComponents,
    slug: "drum-drive",
    title: "Drum Drive",
    summary: "Drum and transmission drive context.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.washingMachineDrainage,
    applicationId: applicationIds.washingMachineComponents,
    slug: "drainage",
    title: "Drainage",
    summary: "Drain path, pumping enclosure, and discharge control.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.outdoorEquipmentIrrigation,
    applicationId: applicationIds.outdoorEquipment,
    slug: "irrigation",
    title: "Irrigation",
    summary: "Outdoor water connection and distribution.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.outdoorEquipmentCuttingAndLineFeed,
    applicationId: applicationIds.outdoorEquipment,
    slug: "cutting-and-line-feed",
    title: "Cutting & Line Feed",
    summary: "Trimmer rotation, line storage, feed, and cutting-head support.",
    publicationStatus: "taxonomy-only",
  },
  {
    id: applicationSystemIds.outdoorEquipmentStarting,
    applicationId: applicationIds.outdoorEquipment,
    slug: "starting",
    title: "Starting",
    summary: "Manual recoil engine-start context.",
    publicationStatus: "taxonomy-only",
  },
] as const satisfies readonly ApplicationSystem[];

export const engineeringContextIds = {
  sliding: engineeringContextId("sliding"),
  rotating: engineeringContextId("rotating"),
  sealing: engineeringContextId("sealing"),
  loadBearing: engineeringContextId("load-bearing"),
  fluidContact: engineeringContextId("fluid-contact"),
  staticControl: engineeringContextId("static-control"),
  precisionGuiding: engineeringContextId("precision-guiding"),
  impactLoaded: engineeringContextId("impact-loaded"),
  snapFit: engineeringContextId("snap-fit"),
} as const;

export const engineeringContexts = [
  { id: engineeringContextIds.sliding, title: "Sliding" },
  { id: engineeringContextIds.rotating, title: "Rotating" },
  { id: engineeringContextIds.sealing, title: "Sealing" },
  { id: engineeringContextIds.loadBearing, title: "Load-bearing" },
  { id: engineeringContextIds.fluidContact, title: "Fluid contact" },
  { id: engineeringContextIds.staticControl, title: "Static control" },
  { id: engineeringContextIds.precisionGuiding, title: "Precision guiding" },
  { id: engineeringContextIds.impactLoaded, title: "Impact-loaded" },
  { id: engineeringContextIds.snapFit, title: "Snap-fit" },
] as const satisfies readonly {
  id: EngineeringContextId;
  title: string;
}[];

export type ComponentCandidate = {
  id: ComponentCandidateId;
  proposedTitle: string;
  rationale: string;
  status: "proposed" | "approved" | "rejected" | "merged";
};

export const componentCandidateIds = {
  clipsFastenersRetention: componentCandidateId(
    "clips-fasteners-retention-components",
  ),
  closureLatching: componentCandidateId("closure-latching-components"),
  connectorInterface: componentCandidateId("connector-interface-components"),
  rotatingDriveSupport: componentCandidateId(
    "rotating-drive-support-components",
  ),
  profiledActuation: componentCandidateId("profiled-actuation-components"),
  valveBodiesActuation: componentCandidateId(
    "valve-bodies-actuation-components",
  ),
  fluidRoutingHousing: componentCandidateId(
    "fluid-routing-housing-components",
  ),
  rotatingFluid: componentCandidateId("rotating-fluid-components"),
} as const;

export const componentCandidates = [
  {
    id: componentCandidateIds.clipsFastenersRetention,
    proposedTitle: "Clips, Fasteners & Retention Components",
    rationale:
      "Molded snap, interference, or captive geometry whose primary duty is repeatable retention and release.",
    status: "approved",
  },
  {
    id: componentCandidateIds.closureLatching,
    proposedTitle: "Closure & Latching Components",
    rationale:
      "Controlled closure through retained engagement, release geometry, thread or latch motion, and closure loads.",
    status: "approved",
  },
  {
    id: componentCandidateIds.connectorInterface,
    proposedTitle: "Connector Interface Components",
    rationale:
      "Molded electrical interface geometry for terminal alignment and retention, mating, panel mounting, and strain transfer.",
    status: "approved",
  },
  {
    id: componentCandidateIds.rotatingDriveSupport,
    proposedTitle: "Rotating Drive & Support Components",
    rationale:
      "Shaft or hub fit, concentricity, balance, rotational support, and torque transfer where gear teeth are not the defining feature.",
    status: "approved",
  },
  {
    id: componentCandidateIds.profiledActuation,
    proposedTitle: "Profiled Actuation Components",
    rationale:
      "A controlled profile converts rotation into prescribed follower displacement under contact stress.",
    status: "approved",
  },
  {
    id: componentCandidateIds.valveBodiesActuation,
    proposedTitle: "Valve Bodies & Actuation Components",
    rationale:
      "Stationary pressure and flow bodies, seal seats, ports, and external actuation structures that own and guide valve internals.",
    status: "approved",
  },
  {
    id: componentCandidateIds.fluidRoutingHousing,
    proposedTitle: "Fluid Routing & Housing Components",
    rationale:
      "Stationary molded flow paths and enclosures defined by ports, seal interfaces, chamber stiffness, and connection geometry.",
    status: "approved",
  },
  {
    id: componentCandidateIds.rotatingFluid,
    proposedTitle: "Rotating Fluid Components",
    rationale:
      "Rotating geometry that transfers energy to or from a fluid under balance, wet-wear, and hydraulic-profile requirements.",
    status: "approved",
  },
] as const satisfies readonly ComponentCandidate[];

type PartClassificationBase = {
  partId: PartId;
  applicationId: ApplicationId;
  entityKind: "part" | "assembly";
  systemId?: ApplicationSystemId;
  relatedContextIds?: readonly EngineeringContextId[];
};

export type PartClassification =
  | (PartClassificationBase & {
      classificationStatus: "mapped";
      primaryComponentId: ComponentId;
      proposedComponentId?: never;
    })
  | (PartClassificationBase & {
      classificationStatus: "new-owner";
      primaryComponentId?: never;
      proposedComponentId: ComponentCandidateId;
    })
  | (PartClassificationBase & {
      classificationStatus: "review";
      primaryComponentId?: never;
      proposedComponentId?: ComponentCandidateId;
    });

const mappedPart = (
  applicationIdValue: ApplicationId,
  partIdValue: string,
  primaryComponentId: ComponentId,
  entityKind: PartClassificationBase["entityKind"] = "part",
): PartClassification => ({
  applicationId: applicationIdValue,
  partId: partId(partIdValue),
  entityKind,
  primaryComponentId,
  classificationStatus: "mapped",
});

type AuditedPartOptions = {
  entityKind: PartClassificationBase["entityKind"];
  systemId?: ApplicationSystemId;
  relatedContextIds: readonly EngineeringContextId[];
};

const auditedPartBase = (
  applicationIdValue: ApplicationId,
  partIdValue: string,
  options: AuditedPartOptions,
): PartClassificationBase => ({
  applicationId: applicationIdValue,
  partId: partId(partIdValue),
  entityKind: options.entityKind,
  ...(options.systemId ? { systemId: options.systemId } : {}),
  relatedContextIds: options.relatedContextIds,
});

const auditedMappedPart = (
  applicationIdValue: ApplicationId,
  partIdValue: string,
  primaryComponentId: ComponentId,
  options: AuditedPartOptions,
): PartClassification => ({
  ...auditedPartBase(applicationIdValue, partIdValue, options),
  primaryComponentId,
  classificationStatus: "mapped",
});

const newOwnerPart = (
  applicationIdValue: ApplicationId,
  partIdValue: string,
  proposedComponentId: ComponentCandidateId,
  options: AuditedPartOptions,
): PartClassification => ({
  ...auditedPartBase(applicationIdValue, partIdValue, options),
  proposedComponentId,
  classificationStatus: "new-owner",
});

const reviewPart = (
  applicationIdValue: ApplicationId,
  partIdValue: string,
  options: AuditedPartOptions,
): PartClassification => ({
  ...auditedPartBase(applicationIdValue, partIdValue, options),
  classificationStatus: "review",
});

// D1b migrates only the 29 exact mappings already reviewed in the legacy
// registry. This slice remains the D1 production compatibility boundary.
const d1bMappedPartClassifications: readonly PartClassification[] = [
  mappedPart(
    applicationIds.motionComponents,
    "precision-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "worm-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.washingMachineComponents,
    "drum-drive-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.washingMachineComponents,
    "reduction-gear-assembly",
    componentIds.precisionPlasticGears,
    "assembly",
  ),
  mappedPart(
    applicationIds.automotive,
    "wiper-motor-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.electronics,
    "copier-drive-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.outdoorEquipment,
    "lawn-mower-gear",
    componentIds.precisionPlasticGears,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "bushing",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "sleeve",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "guide-ring",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.motionComponents,
    "sliding-block",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.automotive,
    "seat-guide-ring",
    componentIds.bushingsAndSleeves,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "mini-conveyor-chain-plate",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "high-load-conveyor-chain",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "conveyor-segment",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "antistatic-anti-slip-conveyor-chain-plate",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "conveyor-roller",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "conveyor-chain-plate-bracket",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.conveyorAutomation,
    "conductive-conveyor-chain-plate",
    componentIds.conveyorChainComponents,
  ),
  mappedPart(
    applicationIds.waterControl,
    "valve-spool-assembly",
    componentIds.valveSpoolsAndCartridges,
    "assembly",
  ),
  mappedPart(
    applicationIds.waterControl,
    "valve-cartridge",
    componentIds.valveSpoolsAndCartridges,
  ),
  mappedPart(
    applicationIds.waterControl,
    "valve-internal-parts",
    componentIds.valveSpoolsAndCartridges,
  ),
  mappedPart(
    applicationIds.waterControl,
    "guide-wheel",
    componentIds.valveSpoolsAndCartridges,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "yarn-guide",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "heddle-lifter",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "air-spinning-guide",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "textile-guide-wheel",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.textileMachinery,
    "textile-spindle-support",
    componentIds.textileGuideComponents,
  ),
  mappedPart(
    applicationIds.electronics,
    "ic-handling-tray",
    componentIds.icHandlingTrays,
  ),
];

// Existing page consumers must remain on the reviewed D1b output until a later
// publication batch explicitly changes their visible relationships.
export const productionCompatibilityPartClassifications =
  d1bMappedPartClassifications;

const d1cApprovedPartClassifications = [
  reviewPart(applicationIds.automotive, "fuel-pump-assembly", {
    systemId: applicationSystemIds.automotiveFuelManagement,
    entityKind: "assembly",
    relatedContextIds: [
      engineeringContextIds.rotating,
      engineeringContextIds.sealing,
      engineeringContextIds.fluidContact,
    ],
  }),
  reviewPart(applicationIds.automotive, "window-regulator", {
    systemId: applicationSystemIds.automotiveWindowLift,
    entityKind: "assembly",
    relatedContextIds: [
      engineeringContextIds.sliding,
      engineeringContextIds.rotating,
      engineeringContextIds.loadBearing,
      engineeringContextIds.precisionGuiding,
    ],
  }),
  newOwnerPart(
    applicationIds.automotive,
    "automotive-clips-and-fasteners",
    componentCandidateIds.clipsFastenersRetention,
    {
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.loadBearing,
        engineeringContextIds.snapFit,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.automotive,
    "safety-latch",
    componentCandidateIds.closureLatching,
    {
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.loadBearing,
        engineeringContextIds.impactLoaded,
      ],
    },
  ),
  auditedMappedPart(
    applicationIds.automotive,
    "gear-shift-seat",
    componentIds.bushingsAndSleeves,
    {
      systemId: applicationSystemIds.automotiveShiftControl,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sliding,
        engineeringContextIds.loadBearing,
        engineeringContextIds.precisionGuiding,
      ],
    },
  ),
  reviewPart(applicationIds.automotive, "interior-rearview-mirror-base", {
    systemId: applicationSystemIds.automotiveVisibilityEquipment,
    entityKind: "part",
    relatedContextIds: [engineeringContextIds.loadBearing],
  }),
  newOwnerPart(
    applicationIds.automotive,
    "wiper-arm-components",
    componentCandidateIds.clipsFastenersRetention,
    {
      systemId: applicationSystemIds.automotiveVisibilityEquipment,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.loadBearing,
        engineeringContextIds.snapFit,
      ],
    },
  ),
  reviewPart(applicationIds.automotive, "fuel-filter-element", {
    systemId: applicationSystemIds.automotiveFuelManagement,
    entityKind: "assembly",
    relatedContextIds: [
      engineeringContextIds.sealing,
      engineeringContextIds.fluidContact,
      engineeringContextIds.loadBearing,
    ],
  }),
  newOwnerPart(
    applicationIds.automotive,
    "fuel-cap-assembly",
    componentCandidateIds.closureLatching,
    {
      systemId: applicationSystemIds.automotiveFuelManagement,
      entityKind: "assembly",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  auditedMappedPart(
    applicationIds.automotive,
    "ev-brake-component",
    componentIds.precisionPlasticGears,
    {
      systemId: applicationSystemIds.automotiveBrakeActuation,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.electronics,
    "connector-housing",
    componentCandidateIds.connectorInterface,
    {
      systemId: applicationSystemIds.electronicsInterconnects,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.precisionGuiding,
        engineeringContextIds.snapFit,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.electronics,
    "terminal-housing",
    componentCandidateIds.connectorInterface,
    {
      systemId: applicationSystemIds.electronicsInterconnects,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.precisionGuiding,
        engineeringContextIds.snapFit,
      ],
    },
  ),
  reviewPart(applicationIds.electronics, "toner-cartridge-drive-components", {
    systemId: applicationSystemIds.electronicsImagingDrive,
    entityKind: "assembly",
    relatedContextIds: [
      engineeringContextIds.rotating,
      engineeringContextIds.loadBearing,
      engineeringContextIds.precisionGuiding,
    ],
  }),
  newOwnerPart(
    applicationIds.electronics,
    "panel-mount-signal-connector",
    componentCandidateIds.connectorInterface,
    {
      systemId: applicationSystemIds.electronicsInterconnects,
      entityKind: "assembly",
      relatedContextIds: [
        engineeringContextIds.loadBearing,
        engineeringContextIds.precisionGuiding,
        engineeringContextIds.snapFit,
      ],
    },
  ),
  auditedMappedPart(
    applicationIds.electronics,
    "robotic-joint-gearbox",
    componentIds.precisionPlasticGears,
    {
      systemId: applicationSystemIds.electronicsRoboticMotion,
      entityKind: "assembly",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.loadBearing,
        engineeringContextIds.precisionGuiding,
      ],
    },
  ),
  reviewPart(applicationIds.electronics, "antistatic-precision-component", {
    entityKind: "part",
    relatedContextIds: [engineeringContextIds.staticControl],
  }),
  auditedMappedPart(
    applicationIds.conveyorAutomation,
    "conveyor-panel",
    componentIds.conveyorChainComponents,
    {
      systemId: applicationSystemIds.conveyorAutomationModularSurfaces,
      entityKind: "part",
      relatedContextIds: [engineeringContextIds.loadBearing],
    },
  ),
  newOwnerPart(
    applicationIds.motionComponents,
    "roller",
    componentCandidateIds.rotatingDriveSupport,
    {
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.motionComponents,
    "cam",
    componentCandidateIds.profiledActuation,
    {
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  auditedMappedPart(
    applicationIds.waterControl,
    "valve-component",
    componentIds.valveSpoolsAndCartridges,
    {
      systemId: applicationSystemIds.waterControlValveFlowControl,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sliding,
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
        engineeringContextIds.precisionGuiding,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.waterControl,
    "thermostatic-valve-body",
    componentCandidateIds.valveBodiesActuation,
    {
      systemId: applicationSystemIds.waterControlValveFlowControl,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sliding,
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
        engineeringContextIds.precisionGuiding,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.waterControl,
    "valve-housing-component",
    componentCandidateIds.valveBodiesActuation,
    {
      systemId: applicationSystemIds.waterControlValveFlowControl,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
        engineeringContextIds.loadBearing,
        engineeringContextIds.precisionGuiding,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.waterControl,
    "pump-impeller",
    componentCandidateIds.rotatingFluid,
    {
      systemId: applicationSystemIds.waterControlPumping,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.fluidContact,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.washingMachineComponents,
    "water-guide-pipe",
    componentCandidateIds.fluidRoutingHousing,
    {
      systemId: applicationSystemIds.washingMachineFillAndDistribution,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.washingMachineComponents,
    "transmission-wheel",
    componentCandidateIds.rotatingDriveSupport,
    {
      systemId: applicationSystemIds.washingMachineDrumDrive,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.washingMachineComponents,
    "drain-pump-housing",
    componentCandidateIds.fluidRoutingHousing,
    {
      systemId: applicationSystemIds.washingMachineDrainage,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.washingMachineComponents,
    "inlet-valve-connecting-pipe",
    componentCandidateIds.fluidRoutingHousing,
    {
      systemId: applicationSystemIds.washingMachineFillAndDistribution,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.washingMachineComponents,
    "drain-control-valve",
    componentCandidateIds.valveBodiesActuation,
    {
      systemId: applicationSystemIds.washingMachineDrainage,
      entityKind: "assembly",
      relatedContextIds: [
        engineeringContextIds.sliding,
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
        engineeringContextIds.precisionGuiding,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.washingMachineComponents,
    "drain-valve-assembly",
    componentCandidateIds.valveBodiesActuation,
    {
      systemId: applicationSystemIds.washingMachineDrainage,
      entityKind: "assembly",
      relatedContextIds: [
        engineeringContextIds.sliding,
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.outdoorEquipment,
    "sprinkler-head",
    componentCandidateIds.rotatingFluid,
    {
      systemId: applicationSystemIds.outdoorEquipmentIrrigation,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.fluidContact,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.outdoorEquipment,
    "trimmer-spool",
    componentCandidateIds.rotatingDriveSupport,
    {
      systemId: applicationSystemIds.outdoorEquipmentCuttingAndLineFeed,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.impactLoaded,
      ],
    },
  ),
  reviewPart(applicationIds.outdoorEquipment, "recoil-starter-assembly", {
    systemId: applicationSystemIds.outdoorEquipmentStarting,
    entityKind: "assembly",
    relatedContextIds: [
      engineeringContextIds.rotating,
      engineeringContextIds.loadBearing,
      engineeringContextIds.impactLoaded,
    ],
  }),
  newOwnerPart(
    applicationIds.outdoorEquipment,
    "irrigation-connector",
    componentCandidateIds.fluidRoutingHousing,
    {
      systemId: applicationSystemIds.outdoorEquipmentIrrigation,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sealing,
        engineeringContextIds.fluidContact,
        engineeringContextIds.loadBearing,
        engineeringContextIds.snapFit,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.outdoorEquipment,
    "irrigation-pulsator-wheel",
    componentCandidateIds.rotatingFluid,
    {
      systemId: applicationSystemIds.outdoorEquipmentIrrigation,
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.fluidContact,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  reviewPart(applicationIds.outdoorEquipment, "trimmer-drive-head", {
    systemId: applicationSystemIds.outdoorEquipmentCuttingAndLineFeed,
    entityKind: "assembly",
    relatedContextIds: [
      engineeringContextIds.rotating,
      engineeringContextIds.loadBearing,
      engineeringContextIds.impactLoaded,
    ],
  }),
  newOwnerPart(
    applicationIds.outdoorEquipment,
    "weather-resistant-housing-clip",
    componentCandidateIds.clipsFastenersRetention,
    {
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.loadBearing,
        engineeringContextIds.snapFit,
      ],
    },
  ),
  auditedMappedPart(
    applicationIds.textileMachinery,
    "heddle-wire-bundle",
    componentIds.textileGuideComponents,
    {
      entityKind: "assembly",
      relatedContextIds: [
        engineeringContextIds.sliding,
        engineeringContextIds.precisionGuiding,
      ],
    },
  ),
  newOwnerPart(
    applicationIds.textileMachinery,
    "bobbin-holder",
    componentCandidateIds.rotatingDriveSupport,
    {
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.rotating,
        engineeringContextIds.loadBearing,
      ],
    },
  ),
  auditedMappedPart(
    applicationIds.textileMachinery,
    "textile-sliding-block",
    componentIds.bushingsAndSleeves,
    {
      entityKind: "part",
      relatedContextIds: [
        engineeringContextIds.sliding,
        engineeringContextIds.loadBearing,
        engineeringContextIds.precisionGuiding,
      ],
    },
  ),
] as const satisfies readonly PartClassification[];

export const partClassifications = [
  ...d1bMappedPartClassifications,
  ...d1cApprovedPartClassifications,
] as const satisfies readonly PartClassification[];

export type ApplicationComponentContextRelation = {
  applicationId: ApplicationId;
  componentId: ComponentId;
  relationType: "industry-context";
};

// Context-only facts remain independent from exact Part ownership.
export const applicationComponentContextRelations = [
  {
    applicationId: applicationIds.electronics,
    componentId: componentIds.conveyorChainComponents,
    relationType: "industry-context",
  },
  {
    applicationId: applicationIds.washingMachineComponents,
    componentId: componentIds.valveSpoolsAndCartridges,
    relationType: "industry-context",
  },
  {
    applicationId: applicationIds.motionComponents,
    componentId: componentIds.textileGuideComponents,
    relationType: "industry-context",
  },
  {
    applicationId: applicationIds.conveyorAutomation,
    componentId: componentIds.icHandlingTrays,
    relationType: "industry-context",
  },
] as const satisfies readonly ApplicationComponentContextRelation[];

export const getApplicationIdentityById = (id: ApplicationId) =>
  applicationIdentityRegistry.find((identity) => identity.id === id);

export const getComponentIdentityById = (id: ComponentId) =>
  componentFamilyIdentityRegistry.find((identity) => identity.id === id);

type ApplicationRecord = {
  slug: string;
  parts: readonly { id: string }[];
};

type ComponentRecord = {
  slug: string;
};

const relationKey = (applicationIdValue: string, partIdValue: string) =>
  `${applicationIdValue}::${partIdValue}`;

export const validatePartTaxonomy = (
  applications: readonly ApplicationRecord[],
  components: readonly ComponentRecord[],
) => {
  const knownPartKeys = applications.flatMap((application) =>
    application.parts.map((part) => relationKey(application.slug, part.id)),
  );
  const classifiedPartKeys = partClassifications.map((classification) =>
    relationKey(classification.applicationId, classification.partId),
  );
  const classifiedPartKeySet = new Set(classifiedPartKeys);
  const knownPartKeySet = new Set(knownPartKeys);
  const duplicateClassificationKeys = Array.from(
    new Set(
      classifiedPartKeys.filter(
        (key, index) => classifiedPartKeys.indexOf(key) !== index,
      ),
    ),
  );
  const intentionallyUnclassifiedPartKeys = knownPartKeys.filter(
    (key) => !classifiedPartKeySet.has(key),
  );
  const unknownClassificationKeys = classifiedPartKeys.filter(
    (key) => !knownPartKeySet.has(key),
  );
  const applicationSlugSet = new Set(
    applications.map((application) => application.slug),
  );
  const componentSlugSet = new Set(
    components.map((component) => component.slug),
  );
  const applicationIdentityIdSet = new Set<ApplicationId>(
    applicationIdentityRegistry.map((identity) => identity.id),
  );
  const componentIdentityIdSet = new Set<ComponentId>(
    componentFamilyIdentityRegistry.map((identity) => identity.id),
  );
  const systemById = new Map<ApplicationSystemId, ApplicationSystem>(
    applicationSystems.map((system) => [system.id, system]),
  );
  const contextIdSet = new Set<EngineeringContextId>(
    engineeringContexts.map((context) => context.id),
  );
  const systemIds = applicationSystems.map((system) => system.id);
  const applicationSystemSlugKeys = applicationSystems.map((system) =>
    relationKey(system.applicationId, system.slug),
  );
  const candidateIdSet = new Set<ComponentCandidateId>(
    componentCandidates.map((candidate) => candidate.id),
  );
  const candidateIds = componentCandidates.map((candidate) => candidate.id);
  const referencedCandidateIds = new Set(
    partClassifications.flatMap((classification) =>
      classification.proposedComponentId
        ? [classification.proposedComponentId]
        : [],
    ),
  );
  const referencedSystemIds = new Set(
    partClassifications.flatMap((classification) =>
      classification.systemId ? [classification.systemId] : [],
    ),
  );
  const contextRelationKeys = applicationComponentContextRelations.map(
    (relation) => `${relation.applicationId}::${relation.componentId}`,
  );

  return {
    knownParts: knownPartKeys.length,
    classifiedParts: classifiedPartKeys.length,
    mappedParts: partClassifications.filter(
      (classification) => classification.classificationStatus === "mapped",
    ).length,
    newOwnerParts: partClassifications.filter(
      (classification) => classification.classificationStatus === "new-owner",
    ).length,
    reviewParts: partClassifications.filter(
      (classification) => classification.classificationStatus === "review",
    ).length,
    intentionallyUnclassifiedParts: intentionallyUnclassifiedPartKeys.length,
    intentionallyUnclassifiedPartKeys,
    duplicateClassificationKeys,
    unknownClassificationKeys,
    classificationCoverageTotal:
      classifiedPartKeys.length + intentionallyUnclassifiedPartKeys.length,
    invalidApplicationIdentitySlugs: applicationIdentityRegistry
      .filter((identity) => !applicationSlugSet.has(identity.slug))
      .map((identity) => identity.slug),
    missingApplicationIdentitySlugs: applications
      .filter(
        (application) =>
          !applicationIdentityRegistry.some(
            (identity) => identity.slug === application.slug,
          ),
      )
      .map((application) => application.slug),
    invalidComponentIdentitySlugs: componentFamilyIdentityRegistry
      .filter((identity) => !componentSlugSet.has(identity.slug))
      .map((identity) => identity.slug),
    missingComponentIdentitySlugs: components
      .filter(
        (component) =>
          !componentFamilyIdentityRegistry.some(
            (identity) => identity.slug === component.slug,
          ),
      )
      .map((component) => component.slug),
    brokenClassificationApplicationIds: partClassifications
      .filter(
        (classification) =>
          !applicationIdentityIdSet.has(classification.applicationId),
      )
      .map((classification) => classification.applicationId),
    brokenClassificationComponentIds: partClassifications.flatMap(
      (classification) =>
        classification.classificationStatus === "mapped" &&
        !componentIdentityIdSet.has(classification.primaryComponentId)
          ? [classification.primaryComponentId]
          : [],
    ),
    brokenClassificationSystemIds: partClassifications.flatMap(
      (classification) =>
        classification.systemId && !systemById.has(classification.systemId)
          ? [classification.systemId]
          : [],
    ),
    crossApplicationSystemKeys: partClassifications.flatMap((classification) => {
      const system = classification.systemId
        ? systemById.get(classification.systemId)
        : undefined;

      return system && system.applicationId !== classification.applicationId
        ? [relationKey(classification.applicationId, classification.partId)]
        : [];
    }),
    brokenProposedComponentIds: partClassifications.flatMap(
      (classification) =>
        classification.proposedComponentId &&
        !candidateIdSet.has(classification.proposedComponentId)
          ? [classification.proposedComponentId]
          : [],
    ),
    brokenEngineeringContextIds: partClassifications.flatMap(
      (classification) =>
        (classification.relatedContextIds ?? []).filter(
          (id) => !contextIdSet.has(id),
        ),
    ),
    duplicateEngineeringContextPartKeys: partClassifications.flatMap(
      (classification) => {
        const ids = classification.relatedContextIds ?? [];
        return ids.length === new Set(ids).size
          ? []
          : [relationKey(classification.applicationId, classification.partId)];
      },
    ),
    nonTaxonomyOnlySystemIds: applicationSystems
      .filter((system) => system.publicationStatus !== "taxonomy-only")
      .map((system) => system.id),
    duplicateApplicationSystemIds: Array.from(
      new Set(
        systemIds.filter(
          (id, index) => systemIds.indexOf(id) !== index,
        ),
      ),
    ),
    duplicateApplicationSystemSlugKeys: Array.from(
      new Set(
        applicationSystemSlugKeys.filter(
          (key, index) => applicationSystemSlugKeys.indexOf(key) !== index,
        ),
      ),
    ),
    brokenSystemApplicationIds: applicationSystems
      .filter((system) => !applicationIdentityIdSet.has(system.applicationId))
      .map((system) => system.applicationId),
    unreferencedApplicationSystemIds: applicationSystems
      .filter((system) => !referencedSystemIds.has(system.id))
      .map((system) => system.id),
    duplicateComponentCandidateIds: Array.from(
      new Set(
        candidateIds.filter(
          (id, index) => candidateIds.indexOf(id) !== index,
        ),
      ),
    ),
    nonApprovedComponentCandidateIds: componentCandidates
      .filter((candidate) => candidate.status !== "approved")
      .map((candidate) => candidate.id),
    unreferencedComponentCandidateIds: componentCandidates
      .filter((candidate) => !referencedCandidateIds.has(candidate.id))
      .map((candidate) => candidate.id),
    contextOnlyRecords: applicationComponentContextRelations.length,
    duplicateContextRelationKeys: Array.from(
      new Set(
        contextRelationKeys.filter(
          (key, index) => contextRelationKeys.indexOf(key) !== index,
        ),
      ),
    ),
    brokenContextApplicationIds: applicationComponentContextRelations
      .filter(
        (relation) => !applicationIdentityIdSet.has(relation.applicationId),
      )
      .map((relation) => relation.applicationId),
    brokenContextComponentIds: applicationComponentContextRelations
      .filter((relation) => !componentIdentityIdSet.has(relation.componentId))
      .map((relation) => relation.componentId),
  };
};
