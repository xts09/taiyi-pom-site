import type { MessageLocale } from "../i18n/config.ts";
import {
  applicationIdentityRegistry,
  applicationIds,
  applicationSystemIds,
  applicationSystems,
  type ApplicationId,
  type ApplicationSystem,
  type ApplicationSystemId,
} from "./partTaxonomy.ts";
import {
  systemTopics,
  type SystemTopic,
} from "./systemTopics.ts";

export type SystemTopicLocaleReleaseStatus =
  | "preview"
  | "public"
  | "disabled";

export type SystemTopicRouteDefinition = {
  applicationSlug: string;
  topicSlug: string;
  sourcePath: string;
};

export type SystemTopicLocaleRelease = {
  locale: MessageLocale;
  status: SystemTopicLocaleReleaseStatus;
  route: SystemTopicRouteDefinition;
  indexable: boolean;
  includeInSitemap: boolean;
  includeInAlternates: boolean;
};

export type SystemTopicRelease = {
  systemId: ApplicationSystemId;
  applicationId: ApplicationId;
  localeReleases: readonly SystemTopicLocaleRelease[];
};

export type ApplicationSystemTopicPromotion = {
  systemId: ApplicationSystemId;
  applicationId: ApplicationId;
  locale: MessageLocale;
  status: "hidden" | "preview" | "visible";
  placement: "engineering-topics";
  order: number;
};

export type SystemTopicRuntimeEnvironment =
  | "development"
  | "preview"
  | "production"
  | "test";

type SystemTopicEnvironmentInput = {
  NODE_ENV?: string;
  VERCEL_ENV?: string;
};

type ApplicationRecord = {
  slug: string;
  parts: readonly {
    id: string;
    label?: string;
  }[];
};

export type ApplicationSystemTopicReference = {
  systemId: ApplicationSystemId;
  href: string;
  title: string;
  releaseStatus: SystemTopicLocaleReleaseStatus;
  partExamples: readonly {
    id: string;
    label: string;
  }[];
};

const valveFlowControlRoute = {
  applicationSlug: "water-control",
  topicSlug: "valve-flow-control",
  sourcePath: "/applications/water-control/valve-flow-control",
} as const satisfies SystemTopicRouteDefinition;

// D2f-c owns exactly one route-capable preview. Canonical System data and the
// editorial Topic cannot create a route without this explicit release record.
export const systemTopicReleases = [
  {
    systemId: applicationSystemIds.waterControlValveFlowControl,
    applicationId: applicationIds.waterControl,
    localeReleases: [
      {
        locale: "en",
        status: "preview",
        route: valveFlowControlRoute,
        indexable: false,
        includeInSitemap: false,
        includeInAlternates: false,
      },
    ],
  },
] as const satisfies readonly SystemTopicRelease[];

// Promotion is separate from route release. D2g allows this relation block in
// development or Vercel Preview only; production still fails closed.
export const applicationSystemTopicPromotions = [
  {
    systemId: applicationSystemIds.waterControlValveFlowControl,
    applicationId: applicationIds.waterControl,
    locale: "en",
    status: "preview",
    placement: "engineering-topics",
    order: 1,
  },
] as const satisfies readonly ApplicationSystemTopicPromotion[];

export const resolveSystemTopicRuntimeEnvironment = (
  environment: SystemTopicEnvironmentInput = process.env,
): SystemTopicRuntimeEnvironment => {
  if (environment.VERCEL_ENV === "production") {
    return "production";
  }

  if (environment.VERCEL_ENV === "preview") {
    return "preview";
  }

  if (environment.VERCEL_ENV === "development") {
    return "development";
  }

  if (environment.NODE_ENV === "development") {
    return "development";
  }

  if (environment.NODE_ENV === "test") {
    return "test";
  }

  // Local production builds and unknown hosting environments fail closed.
  return "production";
};

export const canResolveSystemTopicLocaleRelease = (
  release: SystemTopicLocaleRelease,
  environment: SystemTopicEnvironmentInput = process.env,
) => {
  if (release.status === "public") {
    return true;
  }

  if (release.status !== "preview") {
    return false;
  }

  const runtimeEnvironment =
    resolveSystemTopicRuntimeEnvironment(environment);

  return (
    runtimeEnvironment === "development" || runtimeEnvironment === "preview"
  );
};

export const resolveApplicationSystemTopicReferences = (
  application: ApplicationRecord,
  locale: MessageLocale,
  environment: SystemTopicEnvironmentInput = process.env,
): readonly ApplicationSystemTopicReference[] => {
  const identity = applicationIdentityRegistry.find(
    (candidate) => candidate.slug === application.slug,
  );

  if (!identity) {
    return [];
  }

  const topics = systemTopics as readonly SystemTopic[];
  const releases = systemTopicReleases as readonly SystemTopicRelease[];
  const promotions =
    applicationSystemTopicPromotions as readonly ApplicationSystemTopicPromotion[];

  return promotions
    .filter(
      (promotion) =>
        promotion.applicationId === identity.id &&
        promotion.locale === locale &&
        promotion.status !== "hidden",
    )
    .toSorted((left, right) => left.order - right.order)
    .flatMap((promotion) => {
      const topic = topics.find(
        (candidate) => candidate.systemId === promotion.systemId,
      );
      const release = releases.find(
        (candidate) => candidate.systemId === promotion.systemId,
      );
      const localeRelease = release?.localeReleases.find(
        (candidate) => candidate.locale === locale,
      );
      const validPreview =
        promotion.status === "preview" &&
        localeRelease?.status === "preview" &&
        canResolveSystemTopicLocaleRelease(localeRelease, environment);
      const validPublic =
        promotion.status === "visible" &&
        localeRelease?.status === "public" &&
        topic?.editorialStatus === "reviewed" &&
        canResolveSystemTopicLocaleRelease(localeRelease, environment);

      if (
        !topic ||
        topic.applicationId !== identity.id ||
        !release ||
        release.applicationId !== identity.id ||
        !localeRelease ||
        (!validPreview && !validPublic)
      ) {
        return [];
      }

      const partExamples = topic.representativePartIds.flatMap((partId) => {
        const part = application.parts.find(
          (candidate) => candidate.id === partId,
        );

        return part?.label ? [{ id: part.id, label: part.label }] : [];
      });

      if (partExamples.length !== topic.representativePartIds.length) {
        return [];
      }

      return [
        {
          systemId: topic.systemId,
          href: localeRelease.route.sourcePath,
          title: topic.workingTitle,
          releaseStatus: localeRelease.status,
          partExamples,
        },
      ];
    });
};

const findSystemTopic = (
  systemId: ApplicationSystemId,
  topics: readonly SystemTopic[] = systemTopics,
) => topics.find((topic) => topic.systemId === systemId);

const findEnglishTopicRelease = (
  topicSlug: string,
  releases: readonly SystemTopicRelease[] = systemTopicReleases,
) =>
  releases.flatMap((release) =>
    release.localeReleases.flatMap((localeRelease) =>
      localeRelease.locale === "en" &&
      localeRelease.route.topicSlug === topicSlug
        ? [{ release, localeRelease }]
        : [],
    ),
  )[0];

export const getEnglishSystemTopicStaticParams = (
  environment: SystemTopicEnvironmentInput = process.env,
  releases: readonly SystemTopicRelease[] = systemTopicReleases,
) =>
  releases.flatMap((release) =>
    release.localeReleases.flatMap((localeRelease) =>
      localeRelease.locale === "en" &&
      canResolveSystemTopicLocaleRelease(localeRelease, environment)
        ? [{ topic: localeRelease.route.topicSlug }]
        : [],
    ),
  );

export const resolveEnglishSystemTopicRoute = (
  topicSlug: string,
  environment: SystemTopicEnvironmentInput = process.env,
  releases: readonly SystemTopicRelease[] = systemTopicReleases,
  topics: readonly SystemTopic[] = systemTopics,
) => {
  const match = findEnglishTopicRelease(topicSlug, releases);

  if (
    !match ||
    !canResolveSystemTopicLocaleRelease(match.localeRelease, environment)
  ) {
    return undefined;
  }

  const topic = findSystemTopic(match.release.systemId, topics);

  if (
    !topic ||
    topic.applicationId !== match.release.applicationId ||
    (match.localeRelease.status === "public" &&
      topic.editorialStatus !== "reviewed")
  ) {
    return undefined;
  }

  return {
    release: match.release,
    localeRelease: match.localeRelease,
    topic,
  };
};

type SystemTopicReleaseValidationSources = {
  systems?: readonly ApplicationSystem[];
  topics?: readonly SystemTopic[];
};

const releaseKey = (systemId: string, value: string) =>
  `${systemId}::${value}`;

export const validateSystemTopicReleases = (
  releases: readonly SystemTopicRelease[] = systemTopicReleases,
  promotions: readonly ApplicationSystemTopicPromotion[] =
    applicationSystemTopicPromotions,
  sources: SystemTopicReleaseValidationSources = {},
) => {
  const systems = sources.systems ?? applicationSystems;
  const topics = sources.topics ?? systemTopics;
  const systemById = new Map(systems.map((system) => [system.id, system]));
  const topicBySystemId = new Map(
    topics.map((topic) => [topic.systemId, topic]),
  );
  const localeEntries = releases.flatMap((release) =>
    release.localeReleases.map((localeRelease) => ({
      release,
      localeRelease,
    })),
  );
  const routeKeys = localeEntries.map(
    ({ localeRelease }) =>
      `${localeRelease.locale}::${localeRelease.route.sourcePath}`,
  );

  return {
    releaseCount: releases.length,
    localeReleaseCount: localeEntries.length,
    previewLocaleReleases: localeEntries.filter(
      ({ localeRelease }) => localeRelease.status === "preview",
    ).length,
    publicLocaleReleases: localeEntries.filter(
      ({ localeRelease }) => localeRelease.status === "public",
    ).length,
    hiddenPromotions: promotions.filter(
      (promotion) => promotion.status === "hidden",
    ).length,
    previewPromotions: promotions.filter(
      (promotion) => promotion.status === "preview",
    ).length,
    visiblePromotions: promotions.filter(
      (promotion) => promotion.status === "visible",
    ).length,
    duplicateReleaseSystemIds: Array.from(
      new Set(
        releases
          .map((release) => release.systemId)
          .filter(
            (systemId, index, systemIds) =>
              systemIds.indexOf(systemId) !== index,
          ),
      ),
    ),
    duplicateLocaleRouteKeys: Array.from(
      new Set(
        routeKeys.filter(
          (key, index) => routeKeys.indexOf(key) !== index,
        ),
      ),
    ),
    brokenReleaseSystemIds: releases
      .filter((release) => !systemById.has(release.systemId))
      .map((release) => release.systemId),
    missingReleaseTopicIds: releases
      .filter((release) => !topicBySystemId.has(release.systemId))
      .map((release) => release.systemId),
    crossApplicationReleaseKeys: releases.flatMap((release) => {
      const system = systemById.get(release.systemId);
      const topic = topicBySystemId.get(release.systemId);

      return system?.applicationId === release.applicationId &&
        topic?.applicationId === release.applicationId
        ? []
        : [releaseKey(release.systemId, release.applicationId)];
    }),
    invalidRouteKeys: localeEntries.flatMap(
      ({ release, localeRelease }) => {
        const expectedPath = `/applications/${localeRelease.route.applicationSlug}/${localeRelease.route.topicSlug}`;
        const valid =
          localeRelease.route.sourcePath === expectedPath &&
          release.applicationId === localeRelease.route.applicationSlug;

        return valid
          ? []
          : [releaseKey(release.systemId, localeRelease.route.sourcePath)];
      },
    ),
    previewPublicSurfaceKeys: localeEntries.flatMap(
      ({ release, localeRelease }) =>
        localeRelease.status === "preview" &&
        (localeRelease.indexable ||
          localeRelease.includeInSitemap ||
          localeRelease.includeInAlternates)
          ? [releaseKey(release.systemId, localeRelease.locale)]
          : [],
    ),
    incompletePublicSurfaceKeys: localeEntries.flatMap(
      ({ release, localeRelease }) =>
        localeRelease.status === "public" &&
        (!localeRelease.indexable ||
          !localeRelease.includeInSitemap ||
          !localeRelease.includeInAlternates)
          ? [releaseKey(release.systemId, localeRelease.locale)]
          : [],
    ),
    unreviewedPublicTopicKeys: localeEntries.flatMap(
      ({ release, localeRelease }) =>
        localeRelease.status === "public" &&
        topicBySystemId.get(release.systemId)?.editorialStatus !== "reviewed"
          ? [releaseKey(release.systemId, localeRelease.locale)]
          : [],
    ),
    visiblePromotionWithoutPublicReleaseKeys: promotions.flatMap(
      (promotion) => {
        if (promotion.status !== "visible") {
          return [];
        }

        const matchingPublicRelease = localeEntries.some(
          ({ release, localeRelease }) =>
            release.systemId === promotion.systemId &&
            release.applicationId === promotion.applicationId &&
            localeRelease.locale === promotion.locale &&
            localeRelease.status === "public",
        );

        return matchingPublicRelease
          ? []
          : [releaseKey(promotion.systemId, promotion.locale)];
      },
    ),
    previewPromotionWithoutPreviewReleaseKeys: promotions.flatMap(
      (promotion) => {
        if (promotion.status !== "preview") {
          return [];
        }

        const matchingPreviewRelease = localeEntries.some(
          ({ release, localeRelease }) =>
            release.systemId === promotion.systemId &&
            release.applicationId === promotion.applicationId &&
            localeRelease.locale === promotion.locale &&
            localeRelease.status === "preview",
        );

        return matchingPreviewRelease
          ? []
          : [releaseKey(promotion.systemId, promotion.locale)];
      },
    ),
  };
};
