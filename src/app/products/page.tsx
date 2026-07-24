import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { engineeringTdsDocuments } from "@/data/engineeringTds";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { ProductAnimeMotion } from "@/components/ProductAnimeMotion";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

const productDirectoryTitle = "Engineering Plastic Product Directory | Taiyi Nano";
const productDirectoryDescription =
  "Browse Taiyi Nano modified POM compounds, selected base POM resin, and project-based PA6, PA66, and PPA engineering plastic compound support.";

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
              Start from product families, then enter the POM material
              directions to compare grade data, shrinkage behavior, documents,
              and application matching.
            </p>

            <div className="product-hero-cta">
              <Link
                href="/products/categories/pom"
                className="product-hero-primary-action"
              >
                View POM Material Families
              </Link>
              <Link href="/technical-data-sheets" className="product-hero-tds-link">
                Search Data / TDS
              </Link>
            </div>
          </div>
        </div>

        <section id="product-families" className="product-family-overview products-motion-filter">
          <ProductAnimeMotion />
          <div className="product-family-overview-head">
            <p className="section-kicker">Product Families</p>
            <h2>Choose a Material Direction</h2>
            <p>
              Start with the family closest to the molded part requirement,
              then open the category for grade data, documents, and application
              matching.
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

        <MaterialRecommendationCta
          id="product-inquiry"
          kicker="Inquiry Preparation"
          title="Need a Material Recommendation?"
          className="selection-support-band product-recommendation-band products-motion-support mt-12"
        >
          <p>
            Share the application, mold stage, cavity count, shrinkage or
            warpage concern, key performance requirements, current material
            reference, color, document requirements, and estimated volume. We
            will recommend a suitable modified material direction for review.
          </p>
        </MaterialRecommendationCta>
      </section>
      </ProductPageMotion>
    </main>
  );
}
