import "server-only";

import type { ApplicationItem } from "@/data/applications";
import type {
  ApplicationIndexMessages,
  LocalizedApplicationProfileMap,
  LocalizedApplicationProfileMessages,
} from "@/i18n/applicationTypes";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { translateEnglishApplicationContent } from "@/i18n/englishApplicationNarrative";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";

export const loadApplicationIndexMessages = async (
  localeSegment: LocalizedUrlSegment,
) =>
  translateExpandedContent(
    (await import("@/i18n/messages/zh-CN-applications")).default,
    localeSegment,
  );

export const loadApplicationProfiles = async (
  localeSegment: LocalizedUrlSegment,
) => {
  const [sliceA, sliceB] = await Promise.all([
    import("@/i18n/messages/zh-CN-application-details-a"),
    import("@/i18n/messages/zh-CN-application-details-b"),
  ]);

  return translateExpandedContent(
    {
      ...sliceA.default,
      ...sliceB.default,
    } satisfies LocalizedApplicationProfileMap,
    localeSegment,
  );
};

export const loadChineseApplicationIndexMessages = () =>
  loadApplicationIndexMessages("zh");

export const loadChineseApplicationProfiles = () =>
  loadApplicationProfiles("zh");

export const loadEnglishApplicationProfiles = async () => {
  const [sliceA, sliceB] = await Promise.all([
    import("@/i18n/messages/zh-CN-application-details-a"),
    import("@/i18n/messages/zh-CN-application-details-b"),
  ]);

  return translateEnglishApplicationContent({
    ...sliceA.default,
    ...sliceB.default,
  } satisfies LocalizedApplicationProfileMap);
};

export const localizeApplication = (
  source: ApplicationItem,
  profile: LocalizedApplicationProfileMessages,
): ApplicationItem => ({
  ...source,
  title: profile.title,
  description: profile.description,
  heroImage: source.heroImage
    ? {
        ...source.heroImage,
        alt: profile.heroImageAlt ?? profile.title,
      }
    : undefined,
  detailHeroImage: source.detailHeroImage
    ? {
        ...source.detailHeroImage,
        alt:
          profile.detailHeroImageAlt ?? profile.heroImageAlt ?? profile.title,
      }
    : undefined,
  materialDirections: source.materialDirections.map((direction, index) => ({
    ...direction,
    ...profile.materialDirections[index],
  })),
  images: source.images.map((image, index) => ({
    ...image,
    ...profile.images[index],
    description: profile.images[index]?.description,
  })),
  parts: source.parts.map((part, index) => ({
    ...part,
    ...profile.parts[index],
    image: part.image
      ? {
          ...part.image,
          alt: profile.parts[index]?.imageAlt ?? profile.parts[index]?.label,
        }
      : undefined,
  })),
  engineeringFit: profile.engineeringFit.map((group) => ({
    title: group.title,
    items: [...group.items],
  })),
});

export type ChineseApplicationIndexMessages = ApplicationIndexMessages;
