import type { ResourceArticleSection, ResourcePage } from "@/data/resources";

export const toResourceSectionId = (value: string) =>
  value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

export const getResourceArticleSections = (
  page: ResourcePage,
): ResourceArticleSection[] => page.articleSections ?? [];
