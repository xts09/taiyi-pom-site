import { ResourceArticleContent } from "@/components/ResourceArticleContent";
import { ResourceArticleSidebar } from "@/components/ResourceArticleSidebar";
import { ResourceDocumentFrame } from "@/components/ResourceDocumentFrame";
import { ResourcePageActions } from "@/components/ResourcePageActions";
import type { ResourcePage } from "@/data/resources";
import type { LocalizedUrlSegment } from "@/i18n/config";
import type { ResourceIndexMessages } from "@/i18n/resourceTypes";
import {
  getResourceArticleSections,
  toResourceSectionId,
} from "@/lib/resource-page";

type ResourceArticleLayoutProps = {
  page: ResourcePage;
  localeSegment?: LocalizedUrlSegment;
  messages?: ResourceIndexMessages["articleUi"];
};

export function ResourceArticleLayout({
  page,
  localeSegment,
  messages,
}: ResourceArticleLayoutProps) {
  const articleSections = getResourceArticleSections(page);
  const sidebarSections = articleSections.map((section) => ({
    id: toResourceSectionId(section.title),
    title: section.navLabel ?? section.title,
  }));

  return (
    <ResourceDocumentFrame
      sidebar={
        <ResourceArticleSidebar
          sections={sidebarSections}
          label={messages?.sidebarLabel}
          sidebarAria={messages?.sidebarAria}
          tableOfContentsAria={messages?.tableOfContentsAria}
        />
      }
    >
      <ResourceArticleContent
        title={page.title}
        intro={page.intro}
        sections={articleSections}
        features={page.articleFeatures}
        articleKicker={messages?.articleKicker}
        featureAriaLabels={
          messages
            ? {
                mediaLabels: messages.mediaLabelsAria,
                comparison: messages.comparisonAria,
              }
            : undefined
        }
      />
      <div id="resource-article-end" className="h-px" aria-hidden="true" />
      <ResourcePageActions
        pageTitle={page.title}
        relatedLinks={page.relatedLinks}
        variant="article"
        localeSegment={localeSegment}
        messages={messages}
      />
    </ResourceDocumentFrame>
  );
}
