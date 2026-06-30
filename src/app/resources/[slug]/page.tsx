import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { ResourceFaqExplorer } from "@/components/ResourceFaqExplorer";
import { ResourceGuideExplorer } from "@/components/ResourceGuideExplorer";
import { getResourcePage, resourcePages } from "@/data/resources";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const toSectionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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
  const usesGuideExplorer = !hasFaqItems;
  const usesFaqLayout = hasFaqItems || usesGuideExplorer;
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
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section
        className={`resource-page-shell mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8${usesFaqLayout ? " resource-faq-shell" : ""}`}
      >
        <div
          className={`resource-hero rounded-[0.8rem] border border-slate-200 bg-white/90 p-6 shadow-[0_1.25rem_2.6rem_rgba(15,23,42,0.08)] sm:p-8${usesFaqLayout ? " resource-faq-hero" : ""}`}
        >
          {usesFaqLayout ? (
            <div className="resource-faq-hero-grid">
              <div className="resource-faq-hero-copy">
                <h1 className="max-w-4xl text-4xl font-black leading-none tracking-normal text-slate-950 md:text-6xl">
                  {page.title}
                </h1>
                <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                  {page.intro}
                </p>
              </div>
            </div>
          ) : (
            <>
              <h1 className="max-w-4xl text-4xl font-black leading-none tracking-normal text-slate-950 md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                {page.intro}
              </p>
            </>
          )}
        </div>

        {hasFaqItems ? (
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
                id={toSectionId(module.title)}
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

        <section
          className="resource-related-links"
          aria-label="Related resources"
        >
          <h2>Related Next Steps</h2>
          <div>
            {page.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <MaterialRecommendationCta
          kicker="Technical Review"
          title="Need This Filled Around Your Project?"
          className="selection-support-band resource-cta mt-12"
        >
          <p>
            Send the part information, working condition, target property,
            current material, tooling stage, and document needs. We will help
            connect the right material direction with the right supporting data.
          </p>
        </MaterialRecommendationCta>
      </section>
    </main>
  );
}
