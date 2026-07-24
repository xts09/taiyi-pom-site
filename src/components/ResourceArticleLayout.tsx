import { ResourceArticleContent } from "@/components/ResourceArticleContent";
import { ResourceArticleSidebar } from "@/components/ResourceArticleSidebar";
import { ResourceDocumentFrame } from "@/components/ResourceDocumentFrame";
import { ResourcePageActions } from "@/components/ResourcePageActions";
import type { ResourcePage } from "@/data/resources";
import {
  getResourceArticleSections,
  toResourceSectionId,
} from "@/lib/resource-page";

type ResourceArticleLayoutProps = {
  page: ResourcePage;
};

export function ResourceArticleLayout({ page }: ResourceArticleLayoutProps) {
  const articleSections = getResourceArticleSections(page);
  const sidebarSections = articleSections.map((section) => ({
    id: toResourceSectionId(section.title),
    title: section.title,
  }));

  return (
    <ResourceDocumentFrame
      sidebar={
        <ResourceArticleSidebar sections={sidebarSections} />
      }
    >
      <ResourceArticleContent
        title={page.title}
        intro={page.intro}
        sections={articleSections}
        features={page.articleFeatures}
      />
      <div id="resource-article-end" className="h-px" aria-hidden="true" />
      <ResourcePageActions relatedLinks={page.relatedLinks} variant="article" />
    </ResourceDocumentFrame>
  );
}
