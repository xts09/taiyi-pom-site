import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { conductiveCompounds } from "@/data/conductiveCompounds";
import { products } from "@/data/products";
import { engineeringTdsDocuments } from "@/data/engineeringTds";
import { ActionPanel } from "@/components/ActionPanel";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

const productDirectoryTitle = "Engineering Plastic Compounds | Taiyi Polymer";
const productDirectoryDescription =
  "Browse Taiyi Polymer modified POM compounds, base POM resin, selected PA6, PA66, and PPA families, plus a cross-material conductive and antistatic compound directory.";

export const metadata: Metadata = createPageMetadata({
  title: productDirectoryTitle,
  description: productDirectoryDescription,
  path: "/products",
  image: "/generated/pom-material-hero.webp",
  imageAlt: "Taiyi Polymer POM material and engineering plastic directory",
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
      "Wear-resistant, low-friction, reinforced, conductive, antistatic, and high-impact POM options for precision molded parts.",
    href: "/products/categories/pom",
    metricValue: modifiedPomGradeCount,
    metricLabel: "modified grades",
  },
  {
    number: "02",
    title: "Base POM Resin",
    label: "Selected Sourcing",
    description:
      "Selected base resin options for customers who need baseline POM comparison, technical documents, and application review.",
    href: "/products/categories/base-pom-resin",
    metricValue: basePomGradeCount,
    metricLabel: "base grades",
  },
  {
    number: "03",
    title: "PA6 Compounds",
    label: "Additional Material Family",
    description:
      "Selected PA6 compound options for reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled molded parts.",
    href: "/products/categories/pa6-compound",
    metricValue: engineeringGradeCount("PA6"),
    metricLabel: "listed grades",
  },
  {
    number: "04",
    title: "PA66 Compounds",
    label: "Additional Material Family",
    description:
      "Selected PA66 compound options for reinforced, flame-retardant, wear-related, and dimensionally stable molded parts.",
    href: "/products/categories/pa66-compound",
    metricValue: engineeringGradeCount("PA66"),
    metricLabel: "listed grades",
  },
  {
    number: "05",
    title: "PPA Compounds",
    label: "Higher-Temperature Materials",
    description:
      "PPA compound options for higher-temperature molded parts that need stiffness and dimensional stability.",
    href: "/products/categories/ppa-compound",
    metricValue: engineeringGradeCount("PPA"),
    metricLabel: "listed grades",
  },
  {
    number: "06",
    title: "Conductive & Antistatic Compounds",
    label: "Cross-Material Directory",
    description:
      "Compare CNT antistatic and carbon-fiber conductive directions across POM, ABS, PC, PA6, PA66, PPS, TPU, and other matrices.",
    href: "/products/conductive-antistatic-compounds",
    metricValue: conductiveCompounds.length,
    metricLabel: "listed grades",
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
      <section className="product-directory-shell mx-auto max-w-7xl px-5 pb-16 pt-0 sm:px-6 lg:px-8">
        <div
          id="products-overview"
          className="product-index-hero products-motion-hero mb-8"
        >
          <div className="product-hero-card stagger-list">
            <p
              className="product-hero-eyebrow"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              Product Directory
            </p>

            <h1
              className="text-4xl font-black tracking-tight"
              style={{ "--item-index": 1 } as CSSProperties}
            >
              Engineering Plastic Compounds
            </h1>

            <p
              className="product-hero-subtitle"
              style={{ "--item-index": 2 } as CSSProperties}
            >
              Modified POM as the core product line
            </p>

            <p
              className="mt-4 max-w-3xl text-lg leading-8"
              style={{ "--item-index": 3 } as CSSProperties}
            >
              Browse material families, then compare listed grades, processing
              considerations, available documents, and application fit.
            </p>

            <div
              className="product-hero-cta stagger-list"
              style={{ "--item-index": 4 } as CSSProperties}
            >
              <Button asChild size="productHero" variant="productHeroPrimary">
                <Link
                  href="/products/categories/pom"
                  style={{ "--item-index": 0 } as CSSProperties}
                >
                  View POM Material Families
                </Link>
              </Button>
              <Button asChild size="productHero" variant="productHeroSecondary">
                <Link
                  href="/technical-data-sheets"
                  style={{ "--item-index": 1 } as CSSProperties}
                >
                  Find Grade Data & TDS
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <section id="product-families" className="product-family-overview products-motion-filter">
          <div className="product-family-overview-head stagger-list">
            <p
              className="section-kicker"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              Product Families
            </p>
            <h2 style={{ "--item-index": 1 } as CSSProperties}>
              Choose a Product Family
            </h2>
            <p style={{ "--item-index": 2 } as CSSProperties}>
              Choose the family closest to the part requirement, then review
              its listed grades, documents, and application context.
            </p>
          </div>

          <div className="product-family-card-grid">
            {productFamilies.map((family) => (
              <Card key={family.title} asChild variant="interactive">
                <Link href={family.href} className="product-family-card">
                  <span className="product-filter-number">{family.number}</span>
                  <span className="product-family-label">{family.label}</span>
                  <strong>{family.title}</strong>
                  <span>{family.description}</span>
                  <em>
                    {typeof family.metricValue === "number" ? (
                      <>
                        <span>{family.metricValue}</span>{" "}
                      </>
                    ) : null}
                    {family.metricLabel}
                  </em>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <ActionPanel
          footerAdjacent
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
              <Link href="/contact">Discuss Your Application</Link>
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
