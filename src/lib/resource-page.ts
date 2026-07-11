import type { ResourceArticleSection, ResourcePage } from "@/data/resources";

export const toResourceSectionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getResourceArticleSections = (
  page: ResourcePage,
): ResourceArticleSection[] => page.articleSections ?? [];
