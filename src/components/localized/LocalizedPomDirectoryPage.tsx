import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { PomFamilyMap } from "@/components/PomFamilyMap";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { ValueText, ValueWithUnit } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import { products, type Product } from "@/data/products";
import { pomFamilyMasterVisuals } from "@/data/pomFamilyVisuals";
import { loadApplicationProfiles } from "@/i18n/applicationMessages";
import type { LocalizedApplicationSlug } from "@/i18n/applicationTypes";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  translateExpandedContent,
  translateExpandedText,
} from "@/i18n/expandedLocaleContent";
import { chinesePomDirectoryMessages } from "@/i18n/messages/zh-CN-pom-directory";
import {
  getLocalizedHref,
  isEnglishFallbackHref,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  getCategoryApplicationSlugs,
  getCategoryPath,
  getCategorySelectionLinks,
  getProductCategoryOrderIndex,
  getProductsByCategory,
  pomProductCategoryData,
  productCategoryOrder,
} from "@/lib/productCategories";
import { createBreadcrumbJsonLd, createCollectionPageJsonLd } from "@/lib/seo";

const sourcePath = "/products/categories/pom" as const;

type PomDirectoryMessages = typeof chinesePomDirectoryMessages;
type PomFamilyKey = keyof PomDirectoryMessages["families"]["items"];
type PomCategoryKey = keyof PomDirectoryMessages["directory"]["categoryLabels"];
type PomGradeSlug = keyof PomDirectoryMessages["directory"]["summaries"];

const readProperty = (product: Product, label: string) =>
  product.properties.find((property) => property.label === label);

const getFamilyCopy = (messages: PomDirectoryMessages, category: string) => {
  const copy = messages.families.items[category as PomFamilyKey];

  if (!copy) {
    throw new Error(`Missing Chinese POM family copy: ${category}`);
  }

  return copy;
};

const getCategoryLabel = (messages: PomDirectoryMessages, category: string) =>
  messages.directory.categoryLabels[category as PomCategoryKey] ?? category;

const getGradeSummary = (messages: PomDirectoryMessages, product: Product) =>
  messages.directory.summaries[product.slug as PomGradeSlug] ??
  product.description;

type LocalizedPomDirectoryPageProps = {
  localeSegment: LocalizedUrlSegment;
  inLanguage: string;
};

export async function LocalizedPomDirectoryPage({
  localeSegment,
  inLanguage,
}: LocalizedPomDirectoryPageProps) {
  const applicationProfiles = await loadApplicationProfiles(localeSegment);
  const messages = translateExpandedContent(
    chinesePomDirectoryMessages,
    localeSegment,
  );
  const localizedPath = (path: string) => getLocalizedHref(path, localeSegment);
  const pagePath = localizedPath(sourcePath);
  const contactHref = localizedPath(
    createContactHref({
      intent: "grade-evaluation",
      material: translateExpandedText("改性 POM 复合材料", localeSegment),
      source: translateExpandedText("POM 牌号目录", localeSegment),
    }),
  );
  const technicalDataHref = localizedPath("/technical-data-sheets");
  const sortedProducts = [...getProductsByCategory(products, "POM")].sort(
    (first, second) => {
      const firstIndex = getProductCategoryOrderIndex(first.category);
      const secondIndex = getProductCategoryOrderIndex(second.category);
      const firstRank =
        firstIndex === -1 ? productCategoryOrder.length : firstIndex;
      const secondRank =
        secondIndex === -1 ? productCategoryOrder.length : secondIndex;

      return firstRank - secondRank;
    },
  );
  const familyItems = pomProductCategoryData.map((item) => ({
    ...item,
    copy: getFamilyCopy(messages, item.category),
    count: getProductsByCategory(products, item.category).length,
    sourcePath: getCategoryPath(item.category),
  }));
  const familyGroups = messages.families.groups.map((group, index) => ({
    ...group,
    items: familyItems.slice(index * 3, index * 3 + 3).map((item) => {
      const href = localizedPath(item.sourcePath);
      const isEnglishDestination = isEnglishFallbackHref(
        item.sourcePath,
        localeSegment,
      );

      return {
        id: item.category,
        href,
        title: (
          <>
            {item.copy.label}{" "}
            {isEnglishDestination ? (
              <EnglishDestinationBadge
                label={messages.families.englishDestinationLabel}
              />
            ) : null}
          </>
        ),
        description: item.copy.use,
        countLabel: `${item.count} ${messages.families.countSuffix}`,
        image: pomFamilyMasterVisuals[item.category],
        imageAlt: item.copy.label,
      };
    }),
  }));
  const selectionLinks = getCategorySelectionLinks("POM");
  const applicationSlugs = getCategoryApplicationSlugs(
    "POM",
  ) as LocalizedApplicationSlug[];
  const applicationItems = applicationSlugs.map((slug, index) => ({
    slug,
    number: String(index + 1).padStart(2, "0"),
    title: messages.applications.items[slug],
    description: applicationProfiles[slug].description,
  }));
  const jsonLd = [
    createBreadcrumbJsonLd([
      {
        name: translateExpandedText("首页", localeSegment),
        path: localizedPath("/"),
      },
      {
        name: translateExpandedText("产品", localeSegment),
        path: localizedPath("/products"),
      },
      {
        name: translateExpandedText("POM 材料家族", localeSegment),
        path: pagePath,
      },
    ]),
    createCollectionPageJsonLd({
      title: messages.metadata.title,
      description: messages.metadata.description,
      path: pagePath,
      inLanguage,
      items: sortedProducts.map((product) => ({
        name: product.grade,
        path: localizedPath(`/products/${product.slug}`),
      })),
    }),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage,
      mainEntity: messages.faq.items.map((item) => ({
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
          <div className="product-index-hero product-category-hero products-motion-hero product-category-hero-pom">
            <Breadcrumbs
              items={[
                {
                  href: localizedPath("/products"),
                  label: translateExpandedText("产品", localeSegment),
                },
                { label: translateExpandedText("POM 材料家族", localeSegment) },
              ]}
              variant="hero"
            />

            <div className="product-hero-card">
              <p className="product-hero-eyebrow">{messages.hero.eyebrow}</p>
              <h1 className="text-4xl font-black tracking-tight">
                {messages.hero.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8">
                {messages.hero.description}
              </p>

              <div className="product-hero-cta">
                <Button asChild size="productHero" variant="productHeroPrimary">
                  <Link href="#material-families">
                    {messages.hero.selectionAction}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="productHero"
                  variant="productHeroSecondary"
                >
                  <Link href={technicalDataHref}>
                    {messages.hero.technicalDataAction}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <SecondarySectionNav
            actions={[
              { href: contactHref, label: messages.hero.contactAction },
              {
                href: technicalDataHref,
                label: messages.hero.technicalDataAction,
              },
            ]}
            ariaLabel={messages.navigation.aria}
            subtitle={messages.navigation.subtitle}
            tabs={[
              {
                href: "#material-families",
                label: messages.navigation.families,
              },
              { href: "#pom-grades", label: messages.navigation.grades },
              {
                href: "#category-applications",
                label: messages.navigation.applications,
              },
              { href: "#category-faq", label: messages.navigation.faq },
            ]}
            title={messages.navigation.title}
            variant="product"
          />

          <div className="product-grade-section">
            <PomFamilyMap
              title={messages.families.label}
              description={messages.families.body}
              groups={familyGroups}
            />

            <div
              id="pom-grades"
              className="product-directory-head products-motion-head"
            >
              <div>
                <h2>{messages.directory.title}</h2>
                <p>{messages.directory.body}</p>
                <p className="product-directory-guidance">
                  {messages.directory.guidance}{" "}
                  <Link href={contactHref}>
                    {messages.directory.guidanceAction}
                  </Link>
                </p>
              </div>
              <span className="product-directory-count">
                {sortedProducts.length} {messages.directory.countSuffix}
              </span>
            </div>

            <div className="product-directory">
              <div className="product-directory-labels" aria-hidden="true">
                <span>{messages.directory.grade}</span>
                <span>{messages.directory.keyData}</span>
                <span>{messages.directory.route}</span>
              </div>

              {sortedProducts.map((product, index) => {
                const tensile = readProperty(product, "Tensile Strength");
                const hdt = readProperty(
                  product,
                  "Heat Deflection Temperature",
                );
                const specs: Array<[string, ReactNode]> = [
                  [messages.directory.mfi, product.mfi],
                  [
                    messages.directory.tensile,
                    tensile ? (
                      <ValueWithUnit value={tensile.value} unit="MPa" />
                    ) : (
                      messages.directory.projectBased
                    ),
                  ],
                  [
                    messages.directory.hdt,
                    hdt ? (
                      <ValueWithUnit value={hdt.value} unit="degC" />
                    ) : (
                      messages.directory.projectBased
                    ),
                  ],
                  [
                    messages.directory.color,
                    product.color === "Black"
                      ? messages.directory.black
                      : messages.directory.natural,
                  ],
                ];
                const productPath = `/products/${product.slug}`;
                const href = localizedPath(productPath);
                const isEnglishDestination = isEnglishFallbackHref(
                  productPath,
                  localeSegment,
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
                        <p className="section-kicker">
                          {getCategoryLabel(messages, product.category)}
                        </p>
                        <h3>{product.grade}</h3>
                        <p>{getGradeSummary(messages, product)}</p>
                      </div>
                    </div>

                    <dl className="product-directory-specs">
                      {specs.map(([label, value]) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>
                            {typeof value === "string" ? (
                              <ValueText value={value} />
                            ) : (
                              value
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <span className="product-directory-action">
                      {isEnglishDestination
                        ? messages.directory.englishDetailAction
                        : messages.directory.detailAction}{" "}
                      {isEnglishDestination ? (
                        <EnglishDestinationBadge
                          label={messages.directory.englishDestinationLabel}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <section
            id="category-applications"
            className="product-application-directory product-application-directory-rich products-motion-secondary mt-12"
          >
            <div className="product-application-directory-head">
              <div className="product-application-directory-heading">
                <p className="section-kicker mb-3">
                  {messages.applications.kicker}
                </p>
                <h2>{messages.applications.title}</h2>
              </div>
              <div className="product-application-directory-intro">
                <p>{messages.applications.body}</p>
                <Button
                  asChild
                  variant="link"
                  className="product-application-all-action h-auto justify-start p-0 text-left font-bold"
                >
                  <Link href={localizedPath("/applications")}>
                    {messages.applications.allAction} &rarr;
                  </Link>
                </Button>
              </div>
            </div>

            <div className="product-application-list">
              {applicationItems.map((item) => (
                <Link
                  key={item.slug}
                  href={localizedPath(`/applications/${item.slug}`)}
                  className="product-application-list-item"
                >
                  <span className="product-application-number">
                    {item.number}
                  </span>
                  <span className="product-application-list-copy">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </span>
                  <span
                    className="product-application-entry-arrow"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <nav
              className="product-application-support-links"
              aria-label={messages.applications.kicker}
            >
              {selectionLinks.map((link) => {
                const href = localizedPath(link.href);
                const label =
                  messages.applications.selectionLinks[
                    link.href as keyof typeof messages.applications.selectionLinks
                  ] ?? link.label;
                const isEnglishDestination = isEnglishFallbackHref(
                  link.href,
                  localeSegment,
                );

                return (
                  <Button
                    key={link.href}
                    asChild
                    variant="link"
                    className="h-auto justify-start p-0 text-left font-bold whitespace-normal"
                  >
                    <Link href={href}>
                      {label}{" "}
                      {isEnglishDestination ? (
                        <EnglishDestinationBadge
                          label={messages.directory.englishDestinationLabel}
                        />
                      ) : null}{" "}
                      &rarr;
                    </Link>
                  </Button>
                );
              })}
            </nav>
          </section>

          <section className="products-motion-secondary mt-12">
            <div id="category-faq" className="evaluation-note">
              <p className="section-kicker mb-3">{messages.faq.kicker}</p>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                {messages.faq.title}
              </h2>
              <div className="space-y-5">
                {messages.faq.items.map((item) => (
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
            title={messages.inquiry.title}
            className="selection-support-band products-motion-support mt-12"
            eyebrow={messages.inquiry.eyebrow}
            eyebrowClassName="section-kicker mb-3"
            aside={
              <div className="support-line-steps">
                {messages.inquiry.steps.map((item, index) => (
                  <p key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </p>
                ))}
              </div>
            }
            action={
              <Button
                asChild
                variant="inverse"
                className="h-auto px-7 py-3 text-sm"
              >
                <Link href={contactHref}>{messages.inquiry.action}</Link>
              </Button>
            }
          >
            <p>{messages.inquiry.body}</p>
          </ActionPanel>
        </section>
      </ProductPageMotion>
    </main>
  );
}
