import Link from "next/link";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Product } from "@/data/products";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  getLocalizedGradeMessages,
  isLocalizedBasePomGradeSlug,
  type ProductFunnelMessages,
} from "@/i18n/productFunnelTypes";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";

const sourcePath = "/technical-data-sheets";

type LocalizedTechnicalDataPageProps = {
  products: readonly Product[];
  messages: ProductFunnelMessages;
  localeSegment: LocalizedUrlSegment;
  inLanguage: string;
};

export function LocalizedTechnicalDataPage({
  products,
  messages,
  localeSegment,
  inLanguage,
}: LocalizedTechnicalDataPageProps) {
  const copy = messages.technicalData;
  const localizedPath = (path: string) => getLocalizedHref(path, localeSegment);
  const pagePath = localizedPath(sourcePath);
  const requestHref = localizedPath(
    createContactHref({
      intent: "grade-evaluation",
      material: messages.common.category,
      source: messages.common.contactSourceTechnicalData,
    }),
  );
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: messages.common.home, path: localizedPath("/") },
      { name: copy.title, path: pagePath },
    ]),
    createWebPageJsonLd({
      title: copy.metadata.title,
      description: copy.metadata.description,
      path: pagePath,
      image: "/generated/pom-workbench-hero.webp",
      inLanguage,
    }),
  ];

  return (
    <main className="products-index-page min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <ProductPageMotion>
        <section className="product-directory-shell mx-auto max-w-7xl px-5 pb-16 pt-0 sm:px-6 lg:px-8">
          <div className="product-index-hero products-motion-hero mb-8">
            <Breadcrumbs
              items={[
                { href: localizedPath("/"), label: messages.common.home },
                { label: messages.common.technicalData },
              ]}
              variant="hero"
            />
            <div className="product-hero-card stagger-list">
              <p className="product-hero-eyebrow">{copy.eyebrow}</p>
              <h1 className="text-4xl font-black tracking-tight">{copy.title}</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8">
                {copy.description}
              </p>
            </div>
          </div>

          <section className="product-workbench products-motion-filter">
            <div className="product-workbench-head">
              <p className="section-kicker">{copy.eyebrow}</p>
              <h2>{copy.evidenceTitle}</h2>
              <p>{copy.evidenceBody}</p>
            </div>

            <div className="space-y-5">
              {products.map((product) => {
                if (!isLocalizedBasePomGradeSlug(product.slug)) {
                  return null;
                }

                const gradeCopy = getLocalizedGradeMessages(
                  messages,
                  product.slug,
                );
                const gradePath = localizedPath(`/products/${product.slug}`);
                const gradeRequestHref = localizedPath(
                  createContactHref({
                    grade: product.grade,
                    intent: "grade-evaluation",
                    material: messages.common.category,
                    source: messages.common.contactSourceTechnicalData,
                  }),
                );

                return (
                  <Card key={product.slug} asChild variant="evidence">
                    <article className="product-detail-resource-panel">
                      <div className="product-detail-resource-copy">
                        <strong>{product.grade}</strong>
                        <p>{gradeCopy.positioning}</p>
                        <div className="mt-5 flex flex-wrap gap-3">
                          <Button asChild variant="default">
                            <Link href={gradePath}>{copy.viewAction}</Link>
                          </Button>
                          <Button asChild variant="outline">
                            <Link href={gradeRequestHref}>
                              {copy.requestAction}
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <dl className="product-detail-snapshot-grid">
                        <div>
                          <dt>{copy.gradeLabel}</dt>
                          <dd>{product.grade}</dd>
                        </div>
                        <div>
                          <dt>{copy.materialLabel}</dt>
                          <dd>POM</dd>
                        </div>
                        <div>
                          <dt>MFI</dt>
                          <dd>
                            <ValueText value={product.mfi} />
                          </dd>
                        </div>
                        <div>
                          <dt>{copy.statusLabel}</dt>
                          <dd>{copy.statusValue}</dd>
                        </div>
                      </dl>
                    </article>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="evaluation-note products-motion-secondary mt-12">
            <p className="section-kicker mb-3">{copy.eyebrow}</p>
            <h2 className="mb-4 text-xl font-black text-slate-950">
              {copy.scopeTitle}
            </h2>
            <ol className="space-y-4 text-sm leading-6 text-slate-700">
              {copy.scopeItems.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <strong className="text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </strong>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <ActionPanel
            footerAdjacent
            variant="recommendation"
            title={copy.inquiryTitle}
            className="selection-support-band products-motion-support mt-12"
            eyebrow={copy.inquiryEyebrow}
            eyebrowClassName="section-kicker mb-3"
            action={
              <Button asChild variant="inverse" className="h-auto px-7 py-3 text-sm">
                <Link href={requestHref}>{copy.inquiryAction}</Link>
              </Button>
            }
          >
            <p>{copy.inquiryBody}</p>
          </ActionPanel>
        </section>
      </ProductPageMotion>
    </main>
  );
}
