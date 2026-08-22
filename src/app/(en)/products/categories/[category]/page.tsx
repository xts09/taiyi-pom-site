import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { serializeJsonLd } from "@/lib/jsonLd";
import { createContactHref } from "@/lib/contactContext";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { SecondarySectionNav } from "@/components/SecondarySectionNav";
import { Button } from "@/components/ui/button";
import { applications } from "@/data/applications";
import { availableDocuments } from "@/data/company";
import {
  createEngineeringTdsSlug,
  getEngineeringTdsByProductCategory,
} from "@/data/engineeringTds";
import { products } from "@/data/products";
import { getLanguageAlternatesForPath } from "@/i18n/releaseManifest";
import {
  findCategoryBySlug,
  getCategoryApplicationSlugs,
  getCategoryDescription,
  getCategoryFaqs,
  getCategoryMetadataTitle,
  getCategoryNavSubtitle,
  getCategorySelectionLinks,
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
      "Carbon fiber reinforced POM short-cut black compound pellets from Taiyi Polymer",
  },
  "pa6-compound": {
    image: "/generated/landing/home-dark-satin-wave-v1.webp",
    imageAlt: "Dark satin texture background for PA6 compounds",
  },
  "pa66-compound": {
    image: "/generated/landing/home-dark-satin-wave-v1.webp",
    imageAlt: "Dark satin texture background for PA66 compounds",
  },
  "ppa-compound": {
    image: "/generated/landing/home-dark-satin-wave-v1.webp",
    imageAlt: "Dark satin texture background for PPA compounds",
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
      title: "Wear-Resistant & Low-Friction POM | Taiyi Polymer",
      description:
        "Browse Taiyi Polymer wear-resistant and low-friction POM options for sliding parts, gears, bushings, rollers, and motion components.",
      path: `/products/categories/${legacyRedirect}`,
    });
  }

  const entry = findCategoryBySlug(categorySlug);

  if (!entry) {
    return {
      title: "Product Category Not Found | Taiyi Polymer",
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
    title: `${getCategoryMetadataTitle(entry.category)} | Taiyi Polymer`,
    description: getCategoryDescription(entry.category),
    path: entry.path,
    languageAlternates: getLanguageAlternatesForPath(entry.path),
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
  const relevantApplications = getCategoryApplicationSlugs(entry.category)
    .map((slug) => applications.find((application) => application.slug === slug))
    .filter(
      (application): application is (typeof applications)[number] =>
        Boolean(application),
    );
  const categorySelectionLinks = getCategorySelectionLinks(entry.category);
  const isPomCategory = entry.category === "POM";
  const isPomSubcategory = productCategoryOrder.includes(entry.category);
  const hasEngineeringGrades = engineeringGrades.length > 0;
  const pageTitle =
    isPomCategory
      ? "POM Material Families"
      : entry.label;
  const heroTitle = isPomCategory
    ? "Modified POM Compounds by Material Family"
    : entry.label;
  const heroEyebrow = isPomCategory
    ? "POM Material Portfolio"
    : isPomSubcategory
      ? "Modified POM Family"
      : "Engineering Plastic Family";
  const primaryActionLabel = "Discuss Your Application";
  const contactHref = createContactHref({
    intent: isPomCategory ? "grade-evaluation" : undefined,
    material: isPomCategory ? "Modified POM Compounds" : entry.label,
    source: "Product category",
  });
  const pageDescription =
    isPomCategory
      ? "Explore PLATFORM POM options for wear and low friction, impact, UV resistance, reinforcement, electrical control, and base-resin applications. Start with the part requirement, then compare candidate grades and available technical data."
      : getCategoryDescription(entry.category);
  const inquirySupportCopy = ["POM", "PA6 Compound", "PA66 Compound"].includes(
    entry.category,
  )
    ? "Share the part function, current material, operating conditions, mold stage, critical dimensions, and document needs. Taiyi Polymer can use them to shortlist grades and confirm available documents or samples."
    : "Share your application, mold development stage, cavity count, operating condition, current material, shrinkage or warpage concern, document needs, and target volume. These inputs support a grade shortlist and confirmation of document availability and sample needs.";
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
          __html: serializeJsonLd(jsonLd),
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
            <p className="product-hero-eyebrow">{heroEyebrow}</p>

            <h1 className="text-4xl font-black tracking-tight">{heroTitle}</h1>

            <p className="mt-4 max-w-3xl text-lg leading-8">
              {pageDescription}
            </p>

            <div className="products-motion-data product-hero-data">
              <div className="product-hero-summary">
                <p className="section-kicker mb-2">Selection Path</p>
                {isPomCategory ? (
                  <p>
                    Choose a material family first, then open its category page
                    to compare listed grades and published data.
                  </p>
                ) : (
                  <p>
                    Shortlist from the listed grades, then open a grade page to
                    review published values, application notes, and document
                    status.
                  </p>
                )}
              </div>
              <p className="product-hero-documents">
                <strong>Documents by grade and project</strong>
                <span>
                  {availableDocuments.map((document) => (
                    <b key={document}>{document}</b>
                  ))}
                </span>
              </p>
            </div>

            <div className="product-hero-cta">
              <Button asChild size="productHero" variant="productHeroPrimary">
                <Link href={contactHref}>{primaryActionLabel}</Link>
              </Button>
              <Button asChild size="productHero" variant="productHeroSecondary">
                <Link href="/technical-data-sheets">Find Grade Data & TDS</Link>
              </Button>
            </div>
          </div>
        </div>

        <SecondarySectionNav
          actions={[
            { href: contactHref, label: primaryActionLabel },
            {
              href: "/technical-data-sheets",
              label: "Find Grade Data & TDS",
            },
          ]}
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

        {isPomCategory ? (
          <section
            id="category-applications"
            className="product-application-directory product-application-directory-rich products-motion-secondary mt-12"
          >
            <div className="product-application-directory-head">
              <div className="product-application-directory-heading">
                <p className="section-kicker mb-3">Applications</p>
                <h2>Relevant application paths</h2>
              </div>
              <div className="product-application-directory-intro">
                <p>
                  Start with the routes where this material direction is most
                  often screened. Final selection remains grade- and
                  project-specific.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="product-application-all-action h-auto justify-start p-0 text-left font-bold"
                >
                  <Link href="/applications">View all applications &rarr;</Link>
                </Button>
              </div>
            </div>

            <div className="product-application-list">
              {relevantApplications.map((application, index) => (
                <Link
                  key={application.slug}
                  href={`/applications/${application.slug}`}
                  className="product-application-list-item"
                >
                  <span className="product-application-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="product-application-list-copy">
                    <strong>{application.title}</strong>
                    <span>{application.description}</span>
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
              aria-label="Related material paths"
            >
              {categorySelectionLinks.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant="link"
                  className="h-auto justify-start p-0 text-left font-bold whitespace-normal"
                >
                  <Link href={link.href}>{link.label} &rarr;</Link>
                </Button>
              ))}
            </nav>
          </section>
        ) : (
          <section
            id="category-applications"
            className="product-application-directory products-motion-secondary mt-12"
          >
            <div className="product-application-directory-head">
              <p className="section-kicker mb-3">Applications</p>
              <h2>Relevant application paths</h2>
              <p>
                Start with the routes where this material direction is most often
                screened. Final selection remains grade- and project-specific.
              </p>
              <div className="mt-5 flex flex-col items-start gap-3">
                {categorySelectionLinks.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant="link"
                    className="h-auto justify-start p-0 text-left font-bold whitespace-normal"
                  >
                    <Link href={link.href}>{link.label} &rarr;</Link>
                  </Button>
                ))}
                <Button
                  asChild
                  variant="link"
                  className="h-auto justify-start p-0 text-left font-bold"
                >
                  <Link href="/applications">View all applications &rarr;</Link>
                </Button>
              </div>
            </div>

            <div className="product-application-list">
              {relevantApplications.map((application, index) => (
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
        )}

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

        <ActionPanel
          footerAdjacent
          variant="recommendation"
          title="Prepare a Grade Shortlist"
          className="selection-support-band products-motion-support mt-12"
          eyebrow="Inquiry Support"
          eyebrowClassName="section-kicker mb-3"
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
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href={contactHref}>Discuss Your Application</Link>
            </Button>
          }
        >
          <p>{inquirySupportCopy}</p>
        </ActionPanel>
      </section>
      </ProductPageMotion>
    </main>
  );
}
