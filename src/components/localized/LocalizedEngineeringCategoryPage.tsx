import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import { availableDocuments } from "@/data/company";
import {
  createEngineeringTdsSlug,
  getEngineeringTdsByProductCategory,
} from "@/data/engineeringTds";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  translateExpandedContent,
  translateExpandedText,
} from "@/i18n/expandedLocaleContent";
import {
  chineseEngineeringCategoryProfiles,
  chineseEngineeringDirectionCopy,
  type ChineseEngineeringProductCategorySlug,
} from "@/i18n/messages/zh-CN-engineering-categories";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
} from "@/lib/seo";

type LocalizedEngineeringCategoryPageProps = {
  categorySlug: ChineseEngineeringProductCategorySlug;
  sourcePath: string;
  localeSegment: LocalizedUrlSegment;
  inLanguage: string;
};

export function LocalizedEngineeringCategoryContent({
  categorySlug,
  sourcePath,
  localeSegment,
  inLanguage,
}: LocalizedEngineeringCategoryPageProps) {
  const categoryProfiles = translateExpandedContent(
    chineseEngineeringCategoryProfiles,
    localeSegment,
  );
  const directionCopy = translateExpandedContent(
    chineseEngineeringDirectionCopy,
    localeSegment,
  );
  const copy = categoryProfiles[categorySlug];
  const grades = getEngineeringTdsByProductCategory(copy.sourceCategory);
  const localizedPath = (path: string) => getLocalizedHref(path, localeSegment);
  const categoryPath = localizedPath(sourcePath);
  const contactHref = localizedPath(
    createContactHref({
      material: copy.categoryLabel,
      source: translateExpandedText("中文工程塑料分类页", localeSegment),
    }),
  );
  const directions = grades
    .map((grade) => grade.category)
    .filter((direction, index, list) => list.indexOf(direction) === index)
    .map((direction) => ({
      direction,
      copy: directionCopy[direction] ?? {
        label: direction,
        summary: translateExpandedText(
          "结合零部件功能、加工条件与目标性能进行项目评估。",
          localeSegment,
        ),
      },
    }));
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: translateExpandedText("首页", localeSegment), path: localizedPath("/") },
      { name: translateExpandedText("产品", localeSegment), path: localizedPath("/products") },
      { name: copy.categoryLabel, path: categoryPath },
    ]),
    createCollectionPageJsonLd({
      title: copy.metadata.title,
      description: copy.metadata.description,
      path: categoryPath,
      inLanguage,
      items: grades.map((grade) => ({
        name: `${grade.grade} ${grade.family}`,
        path: localizedPath(`/products/${createEngineeringTdsSlug(grade)}`),
      })),
    }),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: copy.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <ProductPageMotion>
        <section className="product-category-shell mesh-surface">
          <div
            className={`product-index-hero product-category-hero products-motion-hero product-category-hero-${categorySlug}`}
          >
            <Breadcrumbs
              items={[
                { href: localizedPath("/products"), label: translateExpandedText("产品", localeSegment) },
                { label: copy.categoryLabel },
              ]}
              variant="hero"
            />

            <div className="product-hero-card">
              <p className="product-hero-eyebrow">{copy.hero.eyebrow}</p>
              <h1 className="text-4xl font-black tracking-tight">
                {copy.hero.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8">
                {copy.hero.description}
              </p>

              <div className="products-motion-data product-hero-data">
                <div className="product-hero-summary">
                  <p className="section-kicker mb-2">{copy.hero.overviewLabel}</p>
                  <p>{copy.hero.overview}</p>
                </div>
                <p className="product-hero-documents">
                  <strong>{copy.hero.documentsTitle}</strong>
                  <span>
                    {availableDocuments.map((document) => (
                      <b key={document}>{document}</b>
                    ))}
                  </span>
                </p>
              </div>

              <div className="product-hero-cta">
                <Button asChild size="productHero" variant="productHeroPrimary">
                  <Link href={contactHref}>{copy.hero.contactAction}</Link>
                </Button>
                <Button asChild size="productHero" variant="productHeroSecondary">
                  <Link href={localizedPath("/technical-data-sheets")}>
                    {copy.hero.technicalDataAction}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <SecondarySectionNav
            actions={[
              { href: contactHref, label: copy.hero.contactAction },
              {
                href: localizedPath("/technical-data-sheets"),
                label: copy.hero.technicalDataAction,
              },
            ]}
            ariaLabel={copy.navigation.aria}
            subtitle={copy.navigation.subtitle}
            tabs={[
              { href: "#material-families", label: copy.navigation.directions },
              { href: "#pom-grades", label: copy.navigation.grades },
              {
                href: "#category-applications",
                label: copy.navigation.applications,
              },
              { href: "#category-faq", label: copy.navigation.faq },
            ]}
            title={copy.navigation.title}
            variant="product"
          />

          <section
            id="material-families"
            className="product-filter-bar products-motion-filter"
          >
            <div className="product-filter-intro">
              <span className="product-filter-label">{copy.directions.kicker}</span>
              <h2>{copy.directions.title}</h2>
              <p>{copy.directions.body}</p>
            </div>
            <div
              className="product-filter-rail"
              data-direction-count={directions.length}
            >
              {directions.map((item, index) => (
                <a
                  key={item.direction}
                  href="#pom-grades"
                  className="product-filter-link"
                >
                  <span className="product-filter-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="product-filter-name">{item.copy.label}</span>
                  <span className="product-filter-use">{item.copy.summary}</span>
                </a>
              ))}
            </div>
          </section>

          <section id="pom-grades" className="product-grade-section">
            <div className="product-directory-head products-motion-head">
              <div>
                <p className="section-kicker mb-2">{copy.directory.kicker}</p>
                <h2>{copy.directory.title}</h2>
                <p>{copy.directory.body}</p>
              </div>
              <span className="product-directory-count">
                {grades.length} {copy.directory.countSuffix}
              </span>
            </div>

            <div className="product-directory">
              <div className="product-directory-labels" aria-hidden="true">
                <span>{copy.directory.grade}</span>
                <span>{copy.directory.keyData}</span>
                <span>{copy.directory.route}</span>
              </div>

              {grades.map((grade, index) => {
                const direction = directionCopy[
                  grade.category
                ] ?? { label: grade.category, summary: grade.description };

                return (
                  <Link
                    key={`${grade.family}-${grade.grade}`}
                    href={localizedPath(`/products/${createEngineeringTdsSlug(grade)}`)}
                    className="product-directory-row products-motion-row"
                    style={{ "--item-index": index } as CSSProperties}
                  >
                    <div className="product-directory-main">
                      <span className="product-directory-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="section-kicker">
                          {grade.family} · {direction.label}
                        </p>
                        <h3>{grade.grade}</h3>
                        <p>{direction.summary}</p>
                      </div>
                    </div>

                    <dl className="product-directory-specs">
                      <div>
                        <dt>{copy.directory.density}</dt>
                        <dd><ValueText value={grade.density || "-"} /></dd>
                      </div>
                      <div>
                        <dt>{copy.directory.tensile}</dt>
                        <dd>
                          <ValueText
                            value={grade.tensile ? `${grade.tensile} MPa` : "-"}
                          />
                        </dd>
                      </div>
                      <div>
                        <dt>{copy.directory.hdt}</dt>
                        <dd>
                          <ValueText value={grade.hdt ? `${grade.hdt} ℃` : "-"} />
                        </dd>
                      </div>
                      <div>
                        <dt>{copy.directory.flammability}</dt>
                        <dd><ValueText value={grade.flammability || "-"} /></dd>
                      </div>
                    </dl>

                    <span className="product-directory-action">
                      {copy.directory.detailAction}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section
            id="category-applications"
            className="product-application-directory products-motion-secondary mt-12"
          >
            <div className="product-application-directory-head">
              <p className="section-kicker mb-3">{copy.applications.kicker}</p>
              <h2>{copy.applications.title}</h2>
              <p>{copy.applications.body}</p>
            </div>
            <div className="product-application-list">
              {copy.applications.items.map((item, index) => (
                <Link
                  key={item.href}
                  href={localizedPath(item.href)}
                  className="product-application-list-item"
                >
                  <span className="product-application-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{item.label}</strong>
                </Link>
              ))}
            </div>
          </section>

          <section className="products-motion-secondary mt-12">
            <div id="category-faq" className="evaluation-note">
              <p className="section-kicker mb-3">{copy.faq.kicker}</p>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                {copy.faq.title}
              </h2>
              <div className="space-y-5">
                {copy.faq.items.map((item) => (
                  <section key={item.question}>
                    <h3 className="text-sm font-black text-slate-950">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.answer}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <ActionPanel
            footerAdjacent
            variant="recommendation"
            title={copy.inquiry.title}
            className="selection-support-band products-motion-support mt-12"
            eyebrow={copy.inquiry.eyebrow}
            eyebrowClassName="section-kicker mb-3"
            aside={
              <div className="support-line-steps">
                {copy.inquiry.steps.map((item, index) => (
                  <p key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </p>
                ))}
              </div>
            }
            action={
              <Button asChild variant="inverse" className="h-auto px-7 py-3 text-sm">
                <Link href={contactHref}>{copy.inquiry.action}</Link>
              </Button>
            }
          >
            <p>{copy.inquiry.body}</p>
          </ActionPanel>
        </section>
      </ProductPageMotion>
    </main>
  );
}
