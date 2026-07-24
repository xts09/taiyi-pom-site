import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { applications } from "@/data/applications";
import { availableDocuments } from "@/data/company";
import {
  createEngineeringTdsSlug,
  getEngineeringTdsByProductCategory,
} from "@/data/engineeringTds";
import { products } from "@/data/products";
import {
  findCategoryBySlug,
  getCategoryDescription,
  getCategoryFaqs,
  getCategoryNavSubtitle,
  getCategoryTitle,
  getLegacyCategoryRedirect,
  getProductsByCategory,
  legacyProductCategorySlugs,
  productCategoryOrder,
  productCategoryEntries,
} from "@/lib/productCategories";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  siteUrl,
} from "@/lib/seo";

type ProductCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const categorySocialMedia = {
  "carbon-fiber-reinforced-pom-compound": {
    image: "/generated/pom-carbon-fiber-reinforced-hero-material-v5.png",
    imageAlt:
      "Carbon fiber reinforced POM short-cut black compound pellets from Taiyi Nano",
  },
} as const;

export function generateStaticParams() {
  return [
    ...productCategoryEntries.map((entry) => ({ category: entry.slug })),
    ...legacyProductCategorySlugs.map((category) => ({ category })),
  ];
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const legacyRedirect = getLegacyCategoryRedirect(categorySlug);

  if (legacyRedirect) {
    return createPageMetadata({
      title: "Wear-Resistant & Low-Friction POM | Taiyi Nano",
      description:
        "Browse Taiyi Nano wear-resistant and low-friction POM directions for sliding parts, gears, bushings, rollers, and motion components.",
      path: `/products/categories/${legacyRedirect}`,
    });
  }

  const entry = findCategoryBySlug(categorySlug);

  if (!entry) {
    return {
      title: "Product Category Not Found | Taiyi Nano",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const socialMedia = categorySocialMedia[
    entry.slug as keyof typeof categorySocialMedia
  ];

  return createPageMetadata({
    title: `${getCategoryTitle(entry.category)} | Taiyi Nano`,
    description: getCategoryDescription(entry.category),
    path: entry.path,
    ...socialMedia,
  });
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { category: categorySlug } = await params;
  const legacyRedirect = getLegacyCategoryRedirect(categorySlug);

  if (legacyRedirect) {
    permanentRedirect(`/products/categories/${legacyRedirect}`);
  }

  const entry = findCategoryBySlug(categorySlug);

  if (!entry) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(products, entry.category);
  const engineeringGrades = getEngineeringTdsByProductCategory(entry.category);
  const categoryFaqs = getCategoryFaqs(entry.category);
  const isPomCategory = entry.category === "POM";
  const isPomSubcategory = productCategoryOrder.includes(entry.category);
  const hasEngineeringGrades = engineeringGrades.length > 0;
  const pageTitle =
    isPomCategory
      ? "POM Material Grades"
      : entry.label;
  const heroTitle = isPomCategory ? "POM Materials" : entry.label;
  const pageDescription =
    isPomCategory
      ? "A focused directory for Taiyi modified POM compounds and selected base resin data used in precision molded mechanical parts."
      : getCategoryDescription(entry.category);
  const itemListElement =
    categoryProducts.length > 0
      ? categoryProducts.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/products/${product.slug}`,
          name: product.title,
        }))
      : engineeringGrades.map((document, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/products/${createEngineeringTdsSlug(document)}`,
          name: `${document.grade} ${document.family} ${document.category}`,
        }));
  const heroClassName = [
    "product-index-hero",
    "product-category-hero",
    "products-motion-hero",
    `product-category-hero-${entry.slug}`,
  ].join(" ");
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: entry.label, path: entry.path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: getCategoryTitle(entry.category),
      description: getCategoryDescription(entry.category),
      url: `${siteUrl}${entry.path}`,
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: categoryFaqs.map((item) => ({
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
    ...(isPomCategory || hasEngineeringGrades
      ? [
          {
            href: "#material-families",
            label: isPomCategory ? "Families" : "Directions",
          },
        ]
      : []),
    ...(!isPomCategory ? [{ href: "#pom-grades", label: "Grades" }] : []),
    ...(isPomCategory ? [{ href: "#pom-grades", label: "Grades" }] : []),
    { href: "#category-applications", label: "Applications" },
    { href: "#category-faq", label: "FAQ" },
  ];

  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <ProductPageMotion>
      <section className="product-category-shell mesh-surface">
        <div className={heroClassName}>
          <Breadcrumbs
            items={[
              { href: "/products", label: "Products" },
              ...(isPomSubcategory
                ? [
                    {
                      href: "/products/categories/pom",
                      label: "POM Materials",
                    },
                  ]
                : []),
              { label: heroTitle },
            ]}
            variant="hero"
          />

          <div className="product-hero-card">
            <p className="product-hero-eyebrow">Material Directory</p>

            <h1 className="text-4xl font-black tracking-tight">{heroTitle}</h1>

            <p className="mt-4 max-w-3xl text-lg leading-8">
              {pageDescription}
            </p>

            <div className="products-motion-data product-hero-data">
              <div className="product-hero-summary">
                <p className="section-kicker mb-2">Overview</p>
                {isPomCategory ? (
                  <p>
                    Start from the material direction closest to your part, then
                    compare grade-level properties, mold behavior, color options,
                    application fit, and documents.
                  </p>
                ) : (
                  <p>
                    Compare matching grades by properties, mold stage, shrinkage
                    behavior, color, application fit, and documents.
                  </p>
                )}
              </div>
              <p className="product-hero-documents">
                <strong>Documents</strong>
                <span>
                  {availableDocuments.map((document) => (
                    <b key={document}>{document}</b>
                  ))}
                </span>
              </p>
            </div>

            <div className="product-hero-cta">
              <Link href="/contact" className="product-hero-primary-action">
                Send Requirement
              </Link>
              <Link href="/technical-data-sheets" className="product-hero-tds-link">
                Search Data / TDS
              </Link>
            </div>
          </div>
        </div>

        <SecondarySectionNav
          ariaLabel="Product section navigation"
          subtitle={getCategoryNavSubtitle(entry.category)}
          tabs={sectionTabs}
          title={pageTitle}
          variant="product"
        />

        <ProductGrid
          products={products}
          selectedCategory={entry.category}
          showFamilies={entry.category === "POM"}
        />

        <section
          id="category-applications"
          className="product-application-directory products-motion-secondary mt-12"
        >
          <div className="product-application-directory-head">
            <p className="section-kicker mb-3">Applications</p>
          </div>

          <div className="product-application-list">
            {applications.map((application, index) => (
              <Link
                key={application.slug}
                href={`/applications/${application.slug}`}
                className="product-application-list-item"
              >
                <span className="product-application-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{application.title}</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="products-motion-secondary mt-12">
          <div id="category-faq" className="evaluation-note">
            <p className="section-kicker mb-3">FAQ</p>
            <h2 className="mb-4 text-xl font-black text-slate-950">
              Buyer Questions
            </h2>
            <div className="space-y-5">
              {categoryFaqs.map((item) => (
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

        <MaterialRecommendationCta
          kicker="Inquiry Support"
          title="Request a Grade Recommendation"
          className="selection-support-band products-motion-support mt-12"
          aside={
            <div className="support-line-steps">
              {["Tooling Plan", "Shrinkage Target", "Document Needs"].map(
                (item, index) => (
                  <p key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </p>
                )
              )}
            </div>
          }
        >
          <p>
            Share your application, mold development stage, cavity count,
            operating condition, current material, shrinkage or warpage concern,
            document needs, and target volume so we can recommend a suitable
            Taiyi material direction.
          </p>
        </MaterialRecommendationCta>
      </section>
      </ProductPageMotion>
    </main>
  );
}
