import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ActionPanel } from "@/components/ActionPanel";
import { HomeMaterialCatalogue } from "@/components/HomeMaterialCatalogue";
import { PageHero } from "@/components/PageHero";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { Button } from "@/components/ui/button";
import { conductiveCompounds } from "@/data/conductiveCompounds";
import { engineeringTdsDocuments } from "@/data/engineeringTds";
import { products } from "@/data/products";
import type { ContactFormMessages, HomeTaskFirstMessages, ProductsMessages } from "@/i18n/types";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  getLocalizedHref,
  isEnglishFallbackHref,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { buildHomeMaterialColumns } from "@/lib/homeMaterialCatalogue";
import { serializeJsonLd } from "@/lib/jsonLd";
import { publicPath } from "@/lib/paths";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
} from "@/lib/seo";
import styles from "./HomeSections.module.css";
import directoryStyles from "./ProductsDirectoryPage.module.css";

const basePomGradeCount = products.filter(
  (product) => product.category === "Base POM Resin",
).length;
const modifiedPomGradeCount = products.length - basePomGradeCount;
const engineeringGradeCount = (family: "PA6" | "PA66" | "PPA") =>
  engineeringTdsDocuments.filter((document) => document.family === family)
    .length;

const familyDefinitions = [
  {
    number: "01",
    href: "/products/categories/pom",
    metricValue: modifiedPomGradeCount,
  },
  {
    number: "02",
    href: "/products/categories/base-pom-resin",
    metricValue: basePomGradeCount,
  },
  {
    number: "03",
    href: "/products/categories/pa6-compound",
    metricValue: engineeringGradeCount("PA6"),
  },
  {
    number: "04",
    href: "/products/categories/pa66-compound",
    metricValue: engineeringGradeCount("PA66"),
  },
  {
    number: "05",
    href: "/products/categories/ppa-compound",
    metricValue: engineeringGradeCount("PPA"),
  },
  {
    number: "06",
    href: "/products/conductive-antistatic-compounds",
    metricValue: conductiveCompounds.length,
  },
] as const;

const requirementDefinitions = [
  {
    number: "01",
    href: "/products/categories/wear-resistant-low-friction-pom-compound",
  },
  {
    number: "02",
    href: "/products/categories/glass-fiber-reinforced-pom-compound",
  },
  {
    number: "03",
    href: "/products/categories/high-impact-pom-compound",
  },
  {
    number: "04",
    href: "/products/conductive-antistatic-compounds",
  },
] as const;

type ProductsDirectoryPageProps = {
  messages: ProductsMessages;
  catalogueMessages: HomeTaskFirstMessages;
  materialLabels: ContactFormMessages["materialOptionLabels"];
  pagePath: string;
  inLanguage: string;
  englishDestinationLabel: string;
  localeSegment?: LocalizedUrlSegment;
};

export function ProductsDirectoryPage({
  messages,
  catalogueMessages,
  materialLabels,
  pagePath,
  inLanguage,
  englishDestinationLabel,
  localeSegment,
}: ProductsDirectoryPageProps) {
  const columns = buildHomeMaterialColumns({
    messages: catalogueMessages,
    materialLabels,
    localizedHref: (href) => getLocalizedHref(href, localeSegment),
  });
  const productFamilies = familyDefinitions.map((definition, index) => ({
    ...definition,
    href: getLocalizedHref(definition.href, localeSegment),
    isEnglishDestination: isEnglishFallbackHref(
      definition.href,
      localeSegment,
    ),
    ...messages.families.items[index],
  }));
  const requirementPaths = requirementDefinitions.map((definition, index) => ({
    ...definition,
    href: getLocalizedHref(definition.href, localeSegment),
    isEnglishDestination: isEnglishFallbackHref(
      definition.href,
      localeSegment,
    ),
    ...messages.selection.paths[index],
  }));
  const productDirectoryContactHref = getLocalizedHref(
    createContactHref({
      source: messages.inquiry.contactSource,
    }),
    localeSegment,
  );
  const productDirectoryJsonLd = [
    createBreadcrumbJsonLd([
      { name: messages.breadcrumbHome, path: getLocalizedHref("/", localeSegment) },
      { name: messages.breadcrumbProducts, path: pagePath },
    ]),
    createCollectionPageJsonLd({
      title: messages.metadata.title,
      description: messages.metadata.description,
      path: pagePath,
      inLanguage,
      items: productFamilies.map((family) => ({
        name: family.title,
        path: family.href,
      })),
    }),
  ];

  return (
    <main className="products-index-page min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(productDirectoryJsonLd),
        }}
      />
      <ProductPageMotion>
        <section className="product-directory-shell mx-auto max-w-7xl px-5 pb-16 pt-0 sm:px-6 lg:px-8">
          <PageHero
            id="products-overview"
            className={directoryStyles.intro}
            actionsClassName={directoryStyles.actions}
            title={messages.hero.title}
            description={messages.hero.body}
            variant="image"
            media={
              <Image
                fill
                src={publicPath("/materials/real/pom-natural-pellets-real-master.webp")}
                alt={messages.metadata.imageAlt}
                className={directoryStyles.materialImage}
                sizes="(min-width: 100rem) 42rem, (min-width: 48rem) 45vw, 100vw"
              />
            }
            actions={
              <Button asChild size="form" variant="primary">
                <Link href={getLocalizedHref("/technical-data-sheets", localeSegment)}>
                  {messages.hero.dataSheetsAction}
                  <ArrowRight aria-hidden="true" data-icon="inline-end" />
                </Link>
              </Button>
            }
          />

          <section
            id="product-families"
            className={`${styles.directory} products-motion-filter`}
            aria-labelledby="product-families-title"
          >
            <header className={styles.sectionHeader}>
              <h2 id="product-families-title" className={styles.title}>
                {messages.families.title}
              </h2>
            </header>
            <HomeMaterialCatalogue columns={columns} density="compact" />
          </section>

          <section
            id="selection-start"
            className="product-workbench products-motion-filter"
            aria-labelledby="selection-start-title"
          >
            <div className="product-workbench-head">
              <p className="section-kicker">{messages.selection.kicker}</p>
              <h2 id="selection-start-title">{messages.selection.title}</h2>
              <p>{messages.selection.body}</p>
            </div>

            <nav
              className="product-workbench-paths"
              aria-label={messages.selection.navigationAria}
            >
              {requirementPaths.map((path) => (
                <Link
                  key={path.title}
                  href={path.href}
                  className="product-workbench-path"
                >
                  <span className="product-workbench-index" aria-hidden="true">
                    {path.number}
                  </span>
                  <span className="product-workbench-copy">
                    <strong>{path.title}</strong>
                    <span>{path.description}</span>
                  </span>
                  <span className="product-workbench-label">
                    <span>{path.label}</span>
                    {path.isEnglishDestination ? (
                      <EnglishDestinationBadge
                        label={englishDestinationLabel}
                      />
                    ) : null}
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              ))}
            </nav>
          </section>

          <ActionPanel
            id="product-inquiry"
            variant="recommendation"
            title={messages.inquiry.title}
            className="selection-support-band product-recommendation-band products-motion-support mt-12"
            eyebrow={messages.inquiry.eyebrow}
            eyebrowClassName="section-kicker mb-3"
            action={
              <Button
                asChild
                variant="inverse"
                className="h-auto px-7 py-3 text-sm"
              >
                <Link href={productDirectoryContactHref}>
                  {messages.inquiry.action}
                </Link>
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
