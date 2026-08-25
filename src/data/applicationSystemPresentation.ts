import type { ApplicationItem } from "./applications.ts";
import {
  applicationIdentityRegistry,
  applicationIds,
  applicationSystemIds,
  applicationSystems,
  partClassifications,
  type ApplicationId,
  type ApplicationSystemId,
} from "./partTaxonomy.ts";
import type { MessageLocale } from "../i18n/config.ts";

type LocalizedSystemLabels = Record<Exclude<MessageLocale, "en">, string>;
type LocalizedInlineGroupLabels = Record<MessageLocale, string>;

type CanonicalSystemInlineGroup = {
  source: "canonical-system";
  systemId: ApplicationSystemId;
  localizedLabels: LocalizedSystemLabels;
};

type ReviewedPartInlineGroup = {
  source: "reviewed-part-membership";
  id: string;
  labels: LocalizedInlineGroupLabels;
  partIds: readonly string[];
};

export type ApplicationInlineGroupPresentation = {
  applicationId: ApplicationId;
  groups: readonly (CanonicalSystemInlineGroup | ReviewedPartInlineGroup)[];
};

// B3C reviewed presentation capability. The seven new Applications reference
// canonical Part IDs directly without creating ApplicationSystem taxonomy.
// Washing Machine retains its approved canonical section-only System source.
export const applicationInlineGroupPresentations = [
  {
    applicationId: applicationIds.automotive,
    groups: [
      {
        source: "reviewed-part-membership",
        id: "automotive-fuel-management",
        labels: {
          en: "Fuel Management",
          de: "Kraftstoffmanagement",
          fr: "Gestion du carburant",
          "pt-BR": "Gestão de combustível",
          "zh-CN": "燃油管理",
        },
        partIds: [
          "fuel-pump-assembly",
          "fuel-filter-element",
          "fuel-cap-assembly",
        ],
      },
      {
        source: "reviewed-part-membership",
        id: "automotive-visibility-window",
        labels: {
          en: "Visibility & Window Systems",
          de: "Sicht- und Fenstersysteme",
          fr: "Systèmes de visibilité et de vitres",
          "pt-BR": "Sistemas de visibilidade e vidros",
          "zh-CN": "视野与车窗系统",
        },
        partIds: [
          "window-regulator",
          "wiper-motor-gear",
          "interior-rearview-mirror-base",
          "wiper-arm-components",
        ],
      },
      {
        source: "reviewed-part-membership",
        id: "automotive-seat-adjustment-guidance",
        labels: {
          en: "Seat Adjustment & Guidance",
          de: "Sitzverstellung und -führung",
          fr: "Réglage et guidage du siège",
          "pt-BR": "Ajuste e guia do banco",
          "zh-CN": "座椅调节与导向",
        },
        partIds: ["seat-guide-ring"],
      },
      {
        source: "reviewed-part-membership",
        id: "automotive-shift-control",
        labels: {
          en: "Shift Control",
          de: "Schaltbetätigung",
          fr: "Commande de changement de vitesse",
          "pt-BR": "Controle de seleção de marchas",
          "zh-CN": "换挡控制",
        },
        partIds: ["gear-shift-seat"],
      },
      {
        source: "reviewed-part-membership",
        id: "automotive-brake-actuation",
        labels: {
          en: "Brake Actuation",
          de: "Bremsbetätigung",
          fr: "Actionnement du frein",
          "pt-BR": "Acionamento do freio",
          "zh-CN": "制动执行",
        },
        partIds: ["ev-brake-component"],
      },
      {
        source: "reviewed-part-membership",
        id: "automotive-retention-latching",
        labels: {
          en: "Retention & Latching",
          de: "Befestigung und Verriegelung",
          fr: "Fixation et verrouillage",
          "pt-BR": "Fixação e travamento",
          "zh-CN": "固定与锁止",
        },
        partIds: ["automotive-clips-and-fasteners", "safety-latch"],
      },
    ],
  },
  {
    applicationId: applicationIds.electronics,
    groups: [
      {
        source: "reviewed-part-membership",
        id: "electronics-interconnects",
        labels: {
          en: "Interconnects",
          de: "Verbindungstechnik",
          fr: "Interconnexions",
          "pt-BR": "Interconexões",
          "zh-CN": "互连结构",
        },
        partIds: [
          "connector-housing",
          "terminal-housing",
          "panel-mount-signal-connector",
        ],
      },
      {
        source: "reviewed-part-membership",
        id: "electronics-drive-motion",
        labels: {
          en: "Drive & Motion",
          de: "Antrieb und Bewegung",
          fr: "Entraînement et mouvement",
          "pt-BR": "Acionamento e movimento",
          "zh-CN": "驱动与运动",
        },
        partIds: [
          "copier-drive-gear",
          "toner-cartridge-drive-components",
          "robotic-joint-gearbox",
        ],
      },
      {
        source: "reviewed-part-membership",
        id: "electronics-esd-handling",
        labels: {
          en: "ESD Handling",
          de: "ESD-Handhabung",
          fr: "Manipulation ESD",
          "pt-BR": "Manuseio ESD",
          "zh-CN": "防静电处理",
        },
        partIds: ["ic-handling-tray", "antistatic-precision-component"],
      },
    ],
  },
  {
    applicationId: applicationIds.conveyorAutomation,
    groups: [
      {
        source: "reviewed-part-membership",
        id: "conveyor-surface-chain-path",
        labels: {
          en: "Conveying Surface & Chain Path",
          de: "Förderfläche und Kettenlauf",
          fr: "Surface de convoyage et chemin de chaîne",
          "pt-BR": "Superfície de transporte e percurso da corrente",
          "zh-CN": "输送表面与链路",
        },
        partIds: [
          "mini-conveyor-chain-plate",
          "high-load-conveyor-chain",
          "conveyor-segment",
          "antistatic-anti-slip-conveyor-chain-plate",
          "conveyor-panel",
          "conductive-conveyor-chain-plate",
        ],
      },
      {
        source: "reviewed-part-membership",
        id: "conveyor-rolling-support",
        labels: {
          en: "Rolling & Structural Support",
          de: "Rollen- und Strukturstützung",
          fr: "Roulement et support structurel",
          "pt-BR": "Rolamento e suporte estrutural",
          "zh-CN": "滚动与结构支撑",
        },
        partIds: ["conveyor-roller", "conveyor-chain-plate-bracket"],
      },
    ],
  },
  {
    applicationId: applicationIds.motionComponents,
    groups: [
      {
        source: "reviewed-part-membership",
        id: "motion-transmission-actuation",
        labels: {
          en: "Transmission & Actuation",
          de: "Kraftübertragung und Betätigung",
          fr: "Transmission et actionnement",
          "pt-BR": "Transmissão e atuação",
          "zh-CN": "传动与执行",
        },
        partIds: ["precision-gear", "worm-gear", "cam"],
      },
      {
        source: "reviewed-part-membership",
        id: "motion-rotary-support",
        labels: {
          en: "Rotary Support",
          de: "Rotierende Lagerung",
          fr: "Support rotatif",
          "pt-BR": "Suporte rotativo",
          "zh-CN": "旋转支撑",
        },
        partIds: ["roller", "bushing", "sleeve"],
      },
      {
        source: "reviewed-part-membership",
        id: "motion-linear-guidance",
        labels: {
          en: "Linear Guidance",
          de: "Linearführung",
          fr: "Guidage linéaire",
          "pt-BR": "Guia linear",
          "zh-CN": "直线导向",
        },
        partIds: ["guide-ring", "sliding-block"],
      },
    ],
  },
  {
    applicationId: applicationIds.waterControl,
    groups: [
      {
        source: "reviewed-part-membership",
        id: "water-valve-internals-actuation",
        labels: {
          en: "Valve Internals & Actuation",
          de: "Ventilinnenteile und Betätigung",
          fr: "Internes et actionnement de vanne",
          "pt-BR": "Componentes internos e atuação da válvula",
          "zh-CN": "阀门内部件与执行",
        },
        partIds: [
          "valve-spool-assembly",
          "valve-cartridge",
          "valve-internal-parts",
          "valve-component",
          "thermostatic-valve-body",
        ],
      },
      {
        source: "reviewed-part-membership",
        id: "water-rolling-guidance",
        labels: {
          en: "Rolling Guidance",
          de: "Rollenführung",
          fr: "Guidage par roulement",
          "pt-BR": "Guia por rolagem",
          "zh-CN": "滚动导向",
        },
        partIds: ["guide-wheel"],
      },
      {
        source: "reviewed-part-membership",
        id: "water-valve-housing",
        labels: {
          en: "Valve Housing",
          de: "Ventilgehäuse",
          fr: "Corps de vanne",
          "pt-BR": "Carcaça da válvula",
          "zh-CN": "阀门壳体",
        },
        partIds: ["valve-housing-component"],
      },
      {
        source: "reviewed-part-membership",
        id: "water-pumping",
        labels: {
          en: "Pumping",
          de: "Pumpen",
          fr: "Pompage",
          "pt-BR": "Bombeamento",
          "zh-CN": "泵送",
        },
        partIds: ["pump-impeller"],
      },
    ],
  },
  {
    applicationId: applicationIds.washingMachineComponents,
    groups: [
      {
        source: "canonical-system",
        systemId: applicationSystemIds.washingMachineFillAndDistribution,
        localizedLabels: {
          de: "Wasserzulauf und -verteilung",
          fr: "Remplissage et distribution",
          "pt-BR": "Entrada e distribuição de água",
          "zh-CN": "进水与分配",
        },
      },
      {
        source: "canonical-system",
        systemId: applicationSystemIds.washingMachineDrumDrive,
        localizedLabels: {
          de: "Trommelantrieb",
          fr: "Entraînement du tambour",
          "pt-BR": "Acionamento do tambor",
          "zh-CN": "滚筒驱动",
        },
      },
      {
        source: "canonical-system",
        systemId: applicationSystemIds.washingMachineDrainage,
        localizedLabels: {
          de: "Wasserablauf",
          fr: "Vidange",
          "pt-BR": "Drenagem",
          "zh-CN": "排水",
        },
      },
    ],
  },
  {
    applicationId: applicationIds.outdoorEquipment,
    groups: [
      {
        source: "reviewed-part-membership",
        id: "outdoor-irrigation",
        labels: {
          en: "Irrigation",
          de: "Bewässerung",
          fr: "Irrigation",
          "pt-BR": "Irrigação",
          "zh-CN": "灌溉",
        },
        partIds: [
          "sprinkler-head",
          "irrigation-connector",
          "irrigation-pulsator-wheel",
        ],
      },
      {
        source: "reviewed-part-membership",
        id: "outdoor-cutting-line-feed",
        labels: {
          en: "Cutting & Line Feed",
          de: "Schneiden und Fadennachführung",
          fr: "Coupe et avance du fil",
          "pt-BR": "Corte e avanço do fio",
          "zh-CN": "切割与送线",
        },
        partIds: ["trimmer-spool", "trimmer-drive-head"],
      },
      {
        source: "reviewed-part-membership",
        id: "outdoor-drive-starting",
        labels: {
          en: "Drive & Starting",
          de: "Antrieb und Start",
          fr: "Entraînement et démarrage",
          "pt-BR": "Acionamento e partida",
          "zh-CN": "驱动与启动",
        },
        partIds: ["lawn-mower-gear", "recoil-starter-assembly"],
      },
      {
        source: "reviewed-part-membership",
        id: "outdoor-housing-retention",
        labels: {
          en: "Housing & Retention",
          de: "Gehäuse und Befestigung",
          fr: "Carter et fixation",
          "pt-BR": "Carcaça e fixação",
          "zh-CN": "壳体与固定",
        },
        partIds: ["weather-resistant-housing-clip"],
      },
    ],
  },
  {
    applicationId: applicationIds.textileMachinery,
    groups: [
      {
        source: "reviewed-part-membership",
        id: "textile-yarn-path-guidance",
        labels: {
          en: "Yarn Path & Guidance",
          de: "Garnlauf und Führung",
          fr: "Parcours du fil et guidage",
          "pt-BR": "Percurso do fio e guia",
          "zh-CN": "纱线路径与导向",
        },
        partIds: ["yarn-guide", "air-spinning-guide", "textile-guide-wheel"],
      },
      {
        source: "reviewed-part-membership",
        id: "textile-shedding-heddle-motion",
        labels: {
          en: "Shedding & Heddle Motion",
          de: "Fachbildung und Litzenbewegung",
          fr: "Formation de la foule et mouvement des lisses",
          "pt-BR": "Formação da cala e movimento dos liços",
          "zh-CN": "开口与综丝运动",
        },
        partIds: ["heddle-wire-bundle", "heddle-lifter"],
      },
      {
        source: "reviewed-part-membership",
        id: "textile-linear-guidance",
        labels: {
          en: "Linear Guidance",
          de: "Linearführung",
          fr: "Guidage linéaire",
          "pt-BR": "Guia linear",
          "zh-CN": "直线导向",
        },
        partIds: ["textile-sliding-block"],
      },
      {
        source: "reviewed-part-membership",
        id: "textile-package-spindle-support",
        labels: {
          en: "Package & Spindle Support",
          de: "Spulen- und Spindellagerung",
          fr: "Support de bobine et de broche",
          "pt-BR": "Suporte de bobina e fuso",
          "zh-CN": "筒管与锭轴支撑",
        },
        partIds: ["bobbin-holder", "textile-spindle-support"],
      },
    ],
  },
] as const satisfies readonly ApplicationInlineGroupPresentation[];

// Compatibility view retained for the D2c lifecycle contract. Only canonical
// section-only Systems appear here; reviewed inline groups are not Systems.
export const applicationSystemSectionPresentations =
  applicationInlineGroupPresentations.flatMap((presentation) => {
    const systems = presentation.groups.flatMap((group) =>
      group.source === "canonical-system"
        ? [
            {
              systemId: group.systemId,
              localizedLabels: group.localizedLabels,
            },
          ]
        : [],
    );

    return systems.length > 0
      ? [{ applicationId: presentation.applicationId, systems }]
      : [];
  });

export type ApplicationInlinePartGroup = {
  id: string;
  label: string;
  partIds: readonly string[];
};

const resolveInlineGroups = (
  application: ApplicationItem,
  locale: MessageLocale,
  presentation: ApplicationInlineGroupPresentation,
): readonly ApplicationInlinePartGroup[] | undefined => {
  const canonicalSystemById = new Map<
    ApplicationSystemId,
    (typeof applicationSystems)[number]
  >(
    applicationSystems.map(
      (system) => [system.id, system] as [ApplicationSystemId, typeof system],
    ),
  );
  const classificationByPartId = new Map(
    partClassifications
      .filter(
        (classification) =>
          classification.applicationId === presentation.applicationId,
      )
      .map(
        (classification) =>
          [String(classification.partId), classification] as const,
      ),
  );
  const canonicalPartIds = new Set(application.parts.map((part) => part.id));
  const groups = presentation.groups.flatMap(
    (group): ApplicationInlinePartGroup[] => {
      if (group.source === "reviewed-part-membership") {
        const label = group.labels[locale];

        return label.trim() && group.partIds.length > 0
          ? [{ id: group.id, label, partIds: group.partIds }]
          : [];
      }

      const canonicalSystem = canonicalSystemById.get(group.systemId);

      if (
        !canonicalSystem ||
        canonicalSystem.applicationId !== presentation.applicationId ||
        canonicalSystem.publicationStatus !== "section-only"
      ) {
        return [];
      }

      const label =
        locale === "en"
          ? canonicalSystem.title
          : group.localizedLabels[locale];
      const partIds = application.parts.flatMap((part) =>
        classificationByPartId.get(part.id)?.systemId === canonicalSystem.id
          ? [part.id]
          : [],
      );

      return label.trim() && partIds.length > 0
        ? [{ id: canonicalSystem.id, label, partIds }]
        : [];
    },
  );
  const groupedPartIds = groups.flatMap((group) => group.partIds);
  const groupIds = groups.map((group) => String(group.id));

  if (
    groups.length !== presentation.groups.length ||
    new Set(groupIds).size !== groupIds.length ||
    groupedPartIds.length !== application.parts.length ||
    new Set(groupedPartIds).size !== application.parts.length ||
    groupedPartIds.some((partId) => !canonicalPartIds.has(partId)) ||
    application.parts.some((part) => !groupedPartIds.includes(part.id))
  ) {
    return undefined;
  }

  return groups;
};

export const resolveApplicationInlinePartGroupsFromPresentation =
  resolveInlineGroups;

export const resolveApplicationInlinePartGroups = (
  application: ApplicationItem,
  locale: MessageLocale,
): readonly ApplicationInlinePartGroup[] | undefined => {
  const identity = applicationIdentityRegistry.find(
    (candidate) => candidate.slug === application.slug,
  );
  const presentation = identity
    ? applicationInlineGroupPresentations.find(
        (candidate) => candidate.applicationId === identity.id,
      )
    : undefined;

  return identity && presentation
    ? resolveInlineGroups(application, locale, presentation)
    : undefined;
};

// D2c compatibility selector: intentionally resolves only Applications whose
// visible groups are backed by canonical section-only System membership.
export const resolveApplicationSystemPartGroups = (
  application: ApplicationItem,
  locale: MessageLocale,
): readonly ApplicationInlinePartGroup[] | undefined => {
  const identity = applicationIdentityRegistry.find(
    (candidate) => candidate.slug === application.slug,
  );
  const presentation = identity
    ? applicationInlineGroupPresentations.find(
        (candidate) => candidate.applicationId === identity.id,
      )
    : undefined;

  if (
    !identity ||
    !presentation ||
    presentation.groups.some((group) => group.source !== "canonical-system")
  ) {
    return undefined;
  }

  return resolveInlineGroups(application, locale, presentation);
};
