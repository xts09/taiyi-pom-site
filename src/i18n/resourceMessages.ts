import type {
  ResourceNavigationGroup,
  ResourceNavigationLink,
} from "@/data/resourceNavigation";
import type { ResourcePage } from "@/data/resources";
import resourceNavigation from "@/i18n/messages/zh-CN-resources";
import resourceArticlesA1 from "@/i18n/messages/zh-CN-resource-articles-a1";
import resourceArticlesA2 from "@/i18n/messages/zh-CN-resource-articles-a2";
import resourceArticlesB1 from "@/i18n/messages/zh-CN-resource-articles-b1";
import resourceArticlesB2 from "@/i18n/messages/zh-CN-resource-articles-b2";
import resourceArticlesC1 from "@/i18n/messages/zh-CN-resource-articles-c1";
import resourceArticlesC2 from "@/i18n/messages/zh-CN-resource-articles-c2";
import {
  localizedResourceGroupIds,
  type LocalizedResourceArticleSlug,
  type LocalizedResourceGroupId,
  type ResourceIndexMessages,
} from "@/i18n/resourceTypes";
import { resourceNavigationGroups } from "@/data/resourceNavigation";

export type LocalizedResourceNavigationLink = Omit<
  ResourceNavigationLink,
  "type"
> & {
  type: string;
};

export type LocalizedResourceNavigationGroup = Omit<
  ResourceNavigationGroup,
  "id" | "links"
> & {
  id: LocalizedResourceGroupId;
  links: LocalizedResourceNavigationLink[];
};

export const chineseResourceIndexMessages =
  resourceNavigation satisfies ResourceIndexMessages;

export const chineseResourcePages: Record<
  LocalizedResourceArticleSlug,
  ResourcePage
> = {
  ...resourceArticlesA1,
  ...resourceArticlesA2,
  ...resourceArticlesB1,
  ...resourceArticlesB2,
  ...resourceArticlesC1,
  ...resourceArticlesC2,
};

export const getChineseResourcePage = (
  slug: LocalizedResourceArticleSlug,
) => chineseResourcePages[slug];

export const chineseResourceNavigationGroups = localizedResourceGroupIds.map(
  (id): LocalizedResourceNavigationGroup => {
    const sourceGroup = resourceNavigationGroups.find(
      (group) => group.id === id,
    );
    const groupMessages = chineseResourceIndexMessages.groups[id];

    if (!sourceGroup) {
      throw new Error(`Missing source resource group: ${id}`);
    }

    return {
      id,
      title: groupMessages.title,
      navigationLabel: groupMessages.navigationLabel,
      description: groupMessages.description,
      image: sourceGroup.image,
      imageAlt: groupMessages.imageAlt,
      links: groupMessages.entryPaths.map((href) => {
        const entry = chineseResourceIndexMessages.entries[href];

        return {
          href,
          label: entry.label,
          description: entry.description,
          type: chineseResourceIndexMessages.linkTypeLabels[entry.type],
        };
      }),
    };
  },
);

export const getChineseResourceNavigationGroup = (
  id: LocalizedResourceGroupId,
) => chineseResourceNavigationGroups.find((group) => group.id === id);
