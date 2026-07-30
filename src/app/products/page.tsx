import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { engineeringTdsDocuments } from "@/data/engineeringTds";
import { ActionPanel } from "@/components/ActionPanel";
import { ProductAnimeMotion } from "@/components/ProductAnimeMotion";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { Button } from "@/components/ui/button";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

const productDirectoryTitle = "Engineering Plastic Product Directory | Taiyi Plastic";
const productDirectoryDescription =
  "Browse Taiyi Plastic modified POM compounds, selected base POM resin, and project-based PA6, PA66, and PPA engineering plastic compound support.";

export const metadata: Metadata = createPageMetadata({
  title: productDirectoryTitle,
  description: productDirectoryDescription,
  path: "/products",
});

const basePomGradeCount = products.filter(
  (product) => product.category === "Base POM Resin"
).length;
const modifiedPomGradeCount = products.length - basePomGradeCount;
const engineeringGradeCount = (family: "PA6" | "PA66" | "PPA") =>
  engineeringTdsDocuments.filter((document) => document.family === family)
    .length;

const productFamilies = [
  {
    number: "01",
    title: "Modified POM Compounds",
    label: "Core Product Line",
    description:
      "Wear-resistant, low-friction, reinforced, conductive, antistatic, and high-impact POM directions for precision molded parts.",
    href: "/products/categories/pom",
    metricValue: modifiedPomGradeCount,
    metricLabel: "modified grades",
  },
  {
    number: "02",
    title: "Base POM Resin",
    label: "Selected Sourcing",
    description:
      "Selected base resin options for customers who need baseline POM resin comparison, documents, and project review.",
    href: "/products/categories/base-pom-resin",
    metricValue: basePomGradeCount,
    metricLabel: "base grades",
  },
  {
    number: "03",
    title: "PA6 Compounds",
    label: "Extended Capability",
    description:
      "Selected PA6 compound directions for reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled molded parts.",
    href: "/products/categories/pa6-compound",
    metricValue: engineeringGradeCount("PA6"),
    metricLabel: "reference grades",
  },
  {
    number: "04",
    title: "PA66 Compounds",
    label: "Extended Capability",
    description:
      "Selected PA66 compound directions for reinforced, flame-retardant, wear-related, and dimensionally stable molded parts.",
    href: "/products/categories/pa66-compound",
    metricValue: engineeringGradeCount("PA66"),
    metricLabel: "reference grades",
  },
  {
    number: "05",
    title: "PPA Compounds",
    label: "High-Performance Review",
    description:
      "Project-based PPA directions for higher-temperature molded parts requiring stiffness and dimensional stability.",
    href: "/products/categories/ppa-compound",
    metricValue: engineeringGradeCount("PPA"),
    metricLabel: "reference grades",
  },
];

const productDirectoryJsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]),
  createCollectionPageJsonLd({
    title: productDirectoryTitle,
    description: productDirectoryDescription,
    path: "/products",
    items: productFamilies.map((family) => ({
      name: family.title,
      path: family.href,
    })),
  }),
];

export default function ProductsPage() {
  return (
    <main className="products-index-page min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productDirectoryJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ProductPageMotion>
      <section className="product-directory-shell mesh-surface mx-auto max-w-7xl px-5 pb-16 pt-0 sm:px-6 lg:px-8">
        <div id="products-overview" className="product-index-hero products-motion-hero mb-8">
          <div className="product-hero-card">
            <p className="product-hero-eyebrow">Product Directory</p>

            <h1 className="text-4xl font-black tracking-tight">
              Engineering Plastic Materials
            </h1>

            <p className="product-hero-subtitle">
              Modified POM as the core product line
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8">
              Browse product families first. Each category then presents the
              relevant grade data, processing considerations, document scope,
              and application fit.
            </p>

            <div className="product-hero-cta">
              <Button asChild size="productHero" variant="productHeroPrimary">
                <Link href="/products/categories/pom">
                  View POM Material Families
                </Link>
              </Button>
              <Button asChild size="productHero" variant="productHeroSecondary">
                <Link href="/technical-data-sheets">Search Data / TDS</Link>
              </Button>
            </div>
          </div>
        </div>

        <section id="product-families" className="product-family-overview products-motion-filter">
          <ProductAnimeMotion />
          <div className="product-family-overview-head">
            <p className="section-kicker">Product Families</p>
            <h2>Choose a Product Family</h2>
            <p>
              Choose the family closest to the part requirement. Its category
              page provides the related grade data, document scope, and
              application context.
            </p>
          </div>

          <div className="product-family-card-grid">
            {productFamilies.map((family) => (
              <Link
                key={family.title}
                href={family.href}
                className="product-family-card product-filter-link"
              >
                <span className="product-filter-number">{family.number}</span>
                <span className="product-family-label">{family.label}</span>
                <strong>{family.title}</strong>
                <span>{family.description}</span>
                <em>
                  {typeof family.metricValue === "number" ? (
                    <>
                      <span
                        className="anime-count"
                        data-count={family.metricValue}
                      >
                        {family.metricValue}
                      </span>{" "}
                    </>
                  ) : null}
                  {family.metricLabel}
                </em>
                <i className="anime-border-line anime-border-top" aria-hidden="true" />
                <i className="anime-border-line anime-border-right" aria-hidden="true" />
                <i className="anime-border-line anime-border-bottom" aria-hidden="true" />
                <i className="anime-border-line anime-border-left" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <ActionPanel
          id="product-inquiry"
          variant="recommendation"
          title="Prepare a Material Shortlist"
          className="selection-support-band product-recommendation-band products-motion-support mt-12"
          eyebrow="Inquiry Preparation"
          eyebrowClassName="section-kicker mb-3"
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href="/contact">Send Requirement</Link>
            </Button>
          }
        >
          <p>
            Share the application, mold stage, cavity count, shrinkage or
            warpage concern, key performance requirements, current material
            reference, color, document requirements, and estimated volume.
            These inputs identify the relevant material family and establish
            the grade data, document, and sample follow-up for the project.
          </p>
        </ActionPanel>
      </section>
      </ProductPageMotion>
    </main>
  );
}
