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

type ApplicationSystemSectionPresentation = {
  applicationId: ApplicationId;
  systems: readonly {
    systemId: ApplicationSystemId;
    localizedLabels: LocalizedSystemLabels;
  }[];
};

// D2c presentation capability only. Membership continues to come exclusively
// from canonical PartClassification.systemId facts.
export const applicationSystemSectionPresentations = [
  {
    applicationId: applicationIds.washingMachineComponents,
    systems: [
      {
        systemId: applicationSystemIds.washingMachineFillAndDistribution,
        localizedLabels: {
          de: "Wasserzulauf und -verteilung",
          fr: "Remplissage et distribution",
          "pt-BR": "Entrada e distribuição de água",
          "zh-CN": "进水与分配",
        },
      },
      {
        systemId: applicationSystemIds.washingMachineDrumDrive,
        localizedLabels: {
          de: "Trommelantrieb",
          fr: "Entraînement du tambour",
          "pt-BR": "Acionamento do tambor",
          "zh-CN": "滚筒驱动",
        },
      },
      {
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
] as const satisfies readonly ApplicationSystemSectionPresentation[];

export type ApplicationSystemPartGroup = {
  id: ApplicationSystemId;
  label: string;
  partIds: readonly string[];
};

export const resolveApplicationSystemPartGroups = (
  application: ApplicationItem,
  locale: MessageLocale,
): readonly ApplicationSystemPartGroup[] | undefined => {
  const identity = applicationIdentityRegistry.find(
    (candidate) => candidate.slug === application.slug,
  );
  const presentation = identity
    ? applicationSystemSectionPresentations.find(
        (candidate) => candidate.applicationId === identity.id,
      )
    : undefined;

  if (!identity || !presentation) {
    return undefined;
  }

  const canonicalSystemById = new Map(
    applicationSystems.map((system) => [system.id, system]),
  );
  const classificationByPartId = new Map(
    partClassifications
      .filter(
        (classification) => classification.applicationId === identity.id,
      )
      .map(
        (classification) =>
          [String(classification.partId), classification] as const,
      ),
  );
  const groups = presentation.systems.flatMap((systemPresentation) => {
    const canonicalSystem = canonicalSystemById.get(
      systemPresentation.systemId,
    );

    if (
      !canonicalSystem ||
      canonicalSystem.applicationId !== presentation.applicationId ||
      canonicalSystem.publicationStatus !== "section-only"
    ) {
      return [];
    }

    const partIds = application.parts.flatMap((part) =>
      classificationByPartId.get(part.id)?.systemId === canonicalSystem.id
        ? [part.id]
        : [],
    );

    return [
      {
        id: canonicalSystem.id,
        label:
          locale === "en"
            ? canonicalSystem.title
            : systemPresentation.localizedLabels[locale],
        partIds,
      },
    ];
  });
  const groupedPartIds = groups.flatMap((group) => group.partIds);

  if (
    groups.length !== presentation.systems.length ||
    groups.some((group) => group.partIds.length === 0) ||
    groupedPartIds.length !== application.parts.length ||
    new Set(groupedPartIds).size !== application.parts.length
  ) {
    return undefined;
  }

  return groups;
};
