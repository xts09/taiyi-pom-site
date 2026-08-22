import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { UnitText, ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import { availableDocuments } from "@/data/company";
import { products, type Product } from "@/data/products";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  type LocalizedProductCategoryRouteSlug,
  type ProductFunnelMessages,
} from "@/i18n/productFunnelTypes";
import {
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
} from "@/lib/seo";
import {
  findCategoryBySlug,
  getProductsByCategory,
} from "@/lib/productCategories";

const readProperty = (product: Product, label: string) =>
  product.properties.find((property) => property.label === label);

type LocalizedProductCategoryPageProps = {
  categorySlug: LocalizedProductCategoryRouteSlug;
  categoryLabel: string;
  copy: ProductFunnelMessages["category"];
  sourcePath: string;
  messages: ProductFunnelMessages;
  localeSegment: LocalizedUrlSegment;
  inLanguage: string;
};

export function LocalizedProductCategoryContent({
  categorySlug,
  categoryLabel,
  copy,
  sourcePath,
  messages,
  localeSegment,
  inLanguage,
}: LocalizedProductCategoryPageProps) {
  const entry = findCategoryBySlug(categorySlug);

  if (!entry) {
    throw new Error(`Missing localized product category: ${categorySlug}`);
  }

  const categoryProducts = getProductsByCategory(products, entry.category);
  const localizedPath = (path: string) => getLocalizedHref(path, localeSegment);
  const categoryPath = localizedPath(sourcePath);
  const contactHref = localizedPath(
    createContactHref({
      material: categoryLabel,
      source: messages.common.contactSourceCategory,
    }),
  );
  const technicalDataHref = localizedPath("/technical-data-sheets");
  const releasedProducts = categoryProducts.filter((product) =>
    isLocalizedReleaseIndexable(`/products/${product.slug}`, localeSegment),
  );
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: messages.common.home, path: localizedPath("/") },
      { name: messages.common.products, path: localizedPath("/products") },
      { name: categoryLabel, path: categoryPath },
    ]),
    createCollectionPageJsonLd({
      title: copy.metadata.title,
      description: copy.metadata.description,
      path: categoryPath,
      inLanguage,
      items: releasedProducts.map((product) => ({
        name: product.grade,
        path: localizedPath(`/products/${product.slug}`),
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
  const sectionTabs = [
    { href: "#pom-grades", label: copy.navigation.grades },
    { href: "#category-faq", label: copy.navigation.faq },
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
                { href: localizedPath("/products"), label: messages.common.products },
                { label: categoryLabel },
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
                  <small>{copy.hero.documentsBody}</small>
                </p>
              </div>

              <div className="product-hero-cta">
                <Button asChild size="productHero" variant="productHeroPrimary">
                  <Link href={contactHref}>{copy.hero.contactAction}</Link>
                </Button>
                <Button asChild size="productHero" variant="productHeroSecondary">
                  <Link href={technicalDataHref}>
                    {copy.hero.technicalDataAction}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <SecondarySectionNav
            actions={[
              { href: contactHref, label: copy.hero.contactAction },
              { href: technicalDataHref, label: copy.hero.technicalDataAction },
            ]}
            ariaLabel={copy.navigation.aria}
            subtitle={copy.navigation.subtitle}
            tabs={sectionTabs}
            title={copy.navigation.title}
            variant="product"
          />

          <section id="pom-grades" className="product-grade-section">
            <div className="product-directory-head products-motion-head">
              <div>
                <p className="section-kicker mb-2">{copy.directory.kicker}</p>
                <h2>{copy.directory.title}</h2>
                <p>{copy.directory.body}</p>
              </div>
              <span className="product-directory-count">
                {categoryProducts.length} {copy.directory.countSuffix}
              </span>
            </div>

            <div className="product-directory">
              <div className="product-directory-labels" aria-hidden="true">
                <span>{copy.directory.grade}</span>
                <span>{copy.directory.keyData}</span>
                <span>{copy.directory.route}</span>
              </div>

              {categoryProducts.map((product, index) => {
                const tensile = readProperty(product, "Tensile Strength");
                const hdt = readProperty(product, "Heat Deflection Temperature");
                const productPath = `/products/${product.slug}`;
                const hasLocalizedDetail = isLocalizedReleaseIndexable(
                  productPath,
                  localeSegment,
                );
                const href = hasLocalizedDetail
                  ? localizedPath(productPath)
                  : localizedPath(
                      createContactHref({
                        grade: product.grade,
                        material: categoryLabel,
                        intent: "grade-evaluation",
                        source: messages.common.contactSourceCategory,
                      }),
                    );

                return (
                  <Link
                    key={product.slug}
                    href={href}
                    className="product-directory-row products-motion-row"
                    style={{ "--item-index": index } as CSSProperties}
                  >
                    <div className="product-directory-main">
                      <span className="product-directory-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="section-kicker">POM</p>
                        <h3>{product.grade}</h3>
                        <p>
                          {copy.directory.summaries[
                            product.slug as keyof typeof copy.directory.summaries
                          ]}
                        </p>
                      </div>
                    </div>

                    <dl className="product-directory-specs">
                      <div>
                        <dt>{copy.directory.mfi}</dt>
                        <dd>
                          <ValueText value={product.mfi} />
                        </dd>
                      </div>
                      <div>
                        <dt>{copy.directory.tensile}</dt>
                        <dd>
                          <ValueText value={tensile?.value ?? "-"} />
                          {tensile?.unit ? (
                            <>
                              {" "}
                              <UnitText unit={tensile.unit} />
                            </>
                          ) : null}
                        </dd>
                      </div>
                      <div>
                        <dt>{copy.directory.hdt}</dt>
                        <dd>
                          <ValueText value={hdt?.value ?? "-"} />
                          {hdt?.unit ? (
                            <>
                              {" "}
                              <UnitText unit={hdt.unit} />
                            </>
                          ) : null}
                        </dd>
                      </div>
                      <div>
                        <dt>{copy.directory.color}</dt>
                        <dd>
                          {product.color === "Black"
                            ? copy.directory.black ?? product.color
                            : copy.directory.natural}
                        </dd>
                      </div>
                    </dl>

                    <span className="product-directory-action">
                      {hasLocalizedDetail
                        ? copy.directory.detailAction
                        : copy.directory.reviewAction}
                    </span>
                  </Link>
                );
              })}
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
