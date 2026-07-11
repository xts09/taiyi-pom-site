import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceArticleLayout } from "@/components/ResourceArticleLayout";
import { ResourceFaqExplorer } from "@/components/ResourceFaqExplorer";
import { ResourceGuideExplorer } from "@/components/ResourceGuideExplorer";
import { ResourcePageActions } from "@/components/ResourcePageActions";
import { ResourceHero } from "@/components/ResourceHero";
import { getResourcePage, resourcePages } from "@/data/resources";
import { toResourceSectionId } from "@/lib/resource-page";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return resourcePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(slug);

  if (!page) {
    return {};
  }

  return createPageMetadata({
    title: `${page.title} | Taiyi Nano`,
    description: page.description,
    path: `/resources/${page.slug}`,
  });
}

export default async function ResourceDetailPage({
  params,
}: ResourcePageProps) {
  const { slug } = await params;
  const page = getResourcePage(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: page.title, path: `/resources/${page.slug}` },
  ]);
  const faqItems = page.modules.flatMap((module) => module.faqItems ?? []);
  const hasFaqItems = faqItems.length > 0;
  const usesArticleLayout = Boolean(page.articleSections?.length);
  const usesGuideExplorer = !hasFaqItems && !usesArticleLayout;
  const usesFaqLayout = hasFaqItems || usesGuideExplorer;
  const resourceContext = hasFaqItems
    ? "Technical FAQ"
    : usesGuideExplorer
      ? "Technical guide"
      : "Technical resource";
  const jsonLd = hasFaqItems
    ? [
        breadcrumbJsonLd,
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ]
    : breadcrumbJsonLd;

  return (
    <main
      className={`min-h-screen text-slate-900${usesArticleLayout ? " resource-article-page" : ""}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section
        className={`resource-page-shell${usesArticleLayout ? "" : " mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8"}${usesFaqLayout ? " resource-faq-shell" : ""}${usesArticleLayout ? " resource-article-shell" : ""}`}
      >
        {!usesArticleLayout ? (
          <ResourceHero
            context={resourceContext}
            title={page.title}
            description={page.intro}
            className={usesFaqLayout ? "resource-faq-hero" : "resource-standard-hero"}
          />
        ) : null}

        {usesArticleLayout ? (
          <ResourceArticleLayout page={page} />
        ) : hasFaqItems ? (
          <ResourceFaqExplorer modules={page.modules} />
        ) : usesGuideExplorer ? (
          <ResourceGuideExplorer
            modules={page.modules}
            pageTitle={page.title}
          />
        ) : (
          <section
            className="resource-module-grid"
            aria-label={`${page.title} modules`}
          >
            {page.modules.map((module, index) => (
              <article
                id={toResourceSectionId(module.title)}
                key={module.title}
                className="resource-module-card rounded-[0.8rem] border border-blue-200 bg-white/90 p-6 shadow-[0_1.4rem_3rem_rgba(15,23,42,0.06)]"
              >
                <span className="text-xs font-extrabold tracking-wider text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                  {module.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {module.description}
                </p>
                <ul className="mt-5 grid gap-3">
                  {(module.points ?? []).map((point) => (
                    <li key={point} className="leading-7 text-slate-800">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        {!usesArticleLayout ? (
          <ResourcePageActions relatedLinks={page.relatedLinks} />
        ) : null}
      </section>
    </main>
  );
}
