import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductAnimeMotion } from "@/components/ProductAnimeMotion";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Plastic Product Directory | Taiyi Nano",
  description:
    "Browse Taiyi Nano modified POM compounds, selected base POM resin, and project-based PA6, PA66, PPA, and PPS engineering plastic compound support.",
  path: "/products",
});

const productFamilies = [
  {
    number: "01",
    title: "Modified POM Compounds",
    label: "Core Product Line",
    description:
      "Wear-resistant, low-friction, reinforced, conductive, antistatic, and high-impact POM directions for precision molded parts.",
    href: "/products/categories/pom",
    metricValue: products.length,
    metricLabel: "POM grades",
  },
  {
    number: "02",
    title: "Base POM Resin",
    label: "Selected Sourcing",
    description:
      "Selected base resin options for customers who need baseline POM resin comparison, documents, and project review.",
    href: "/products/categories/base-pom-resin",
    metricValue: products.filter((product) => product.category === "Base POM Resin")
      .length,
    metricLabel: "base grades",
  },
  {
    number: "03",
    title: "PA6 / PA66 Compounds",
    label: "Extended Capability",
    description:
      "Nylon compound directions for customers comparing toughness, heat resistance, and reinforced molded part requirements.",
    href: "/contact",
    metricLabel: "By requirement",
  },
  {
    number: "04",
    title: "PPA / PPS Compounds",
    label: "High-Performance Review",
    description:
      "Higher temperature engineering plastic directions for selected projects requiring dimensional and thermal performance.",
    href: "/contact",
    metricLabel: "By review",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <ProductPageMotion>
      <section className="mesh-surface mx-auto max-w-7xl px-5 pb-16 pt-0 sm:px-6 lg:px-8">
        <div id="products-overview" className="product-index-hero products-motion-hero mb-8">
          <nav className="subpage-breadcrumb mb-5">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </nav>

          <div className="product-hero-card">
            <p className="product-hero-eyebrow">Product Directory</p>

            <h1 className="text-4xl font-black tracking-tight">
              Engineering Plastic Materials
            </h1>

            <p className="product-hero-subtitle">
              Modified POM as the core product line
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8">
              Start from product families, then enter the POM grade directory
              for detailed properties, shrinkage data, documents, and
              application matching.
            </p>

            <div className="product-hero-cta">
              <Link
                href="/products/categories/pom"
                className="product-hero-primary-action"
              >
                View POM Grades
              </Link>
              <Link href="/technical-data-sheets" className="product-hero-tds-link">
                Find a Technical Data Sheet (TDS)
              </Link>
            </div>
          </div>
        </div>

        <section id="product-families" className="product-family-overview products-motion-filter">
          <ProductAnimeMotion />
          <div className="product-family-overview-head">
            <p className="section-kicker">Product Families</p>
            <h2>Choose a Material Direction</h2>
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

        <section id="product-inquiry" className="selection-support-band product-recommendation-band products-motion-support mt-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-kicker mb-3">Inquiry Preparation</p>
              <h2 className="text-2xl font-black tracking-tight text-white">
                Need a Material Recommendation?
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Share the application, mold stage, cavity count, shrinkage or
                warpage concern, key performance requirements, current material
                reference, color, document requirements, and estimated volume.
                We will recommend a suitable modified material direction for
                review.
              </p>
            </div>

            <Link href="/contact" className="cta-primary px-6 py-3 text-sm">
              Contact Sales
            </Link>
          </div>
        </section>
      </section>
      </ProductPageMotion>
    </main>
  );
}
