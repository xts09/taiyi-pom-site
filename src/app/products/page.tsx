import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { serializeJsonLd } from "@/lib/jsonLd";
import { createContactHref } from "@/lib/contactContext";
import { conductiveCompounds } from "@/data/conductiveCompounds";
import { products } from "@/data/products";
import { engineeringTdsDocuments } from "@/data/engineeringTds";
import { ActionPanel } from "@/components/ActionPanel";
import { DirectoryRow } from "@/components/DirectoryRow";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { Button } from "@/components/ui/button";
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
    label: "Additional Family",
    description:
      "Selected PA6 compound options for reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled molded parts.",
    href: "/products/categories/pa6-compound",
    metricValue: engineeringGradeCount("PA6"),
    metricLabel: "listed grades",
  },
  {
    number: "04",
    title: "PA66 Compounds",
    label: "Additional Family",
    description:
      "Selected PA66 compound options for reinforced, flame-retardant, wear-related, and dimensionally stable molded parts.",
    href: "/products/categories/pa66-compound",
    metricValue: engineeringGradeCount("PA66"),
    metricLabel: "listed grades",
  },
  {
    number: "05",
    title: "PPA Compounds",
    label: "Higher Temperature",
    description:
      "PPA compound options for higher-temperature molded parts that need stiffness and dimensional stability.",
    href: "/products/categories/ppa-compound",
    metricValue: engineeringGradeCount("PPA"),
    metricLabel: "listed grades",
  },
  {
    number: "06",
    title: "Conductive & Antistatic Compounds",
    label: "Cross-Material",
    description:
      "Compare CNT antistatic and carbon-fiber conductive directions across POM, ABS, PC, PA6, PA66, PPS, TPU, and other matrices.",
    href: "/products/conductive-antistatic-compounds",
    metricValue: conductiveCompounds.length,
    metricLabel: "listed grades",
  },
];

const requirementPaths = [
  {
    number: "01",
    label: "Wear / Friction",
    title: "Moving or sliding parts",
    description:
      "Review load, speed, counterpart, lubrication, noise, and the required wear life.",
    href: "/products/categories/wear-resistant-low-friction-pom-compound",
  },
  {
    number: "02",
    label: "Stiffness / Dimension",
    title: "Precision under load",
    description:
      "Review stiffness, creep, shrinkage direction, warpage, and molded flow orientation.",
    href: "/products/categories/glass-fiber-reinforced-pom-compound",
  },
  {
    number: "03",
    label: "Impact / Assembly",
    title: "Snap fits or shock loads",
    description:
      "Review impact direction, temperature, weld lines, and assembly stress before selecting toughness.",
    href: "/products/categories/high-impact-pom-compound",
  },
  {
    number: "04",
    label: "Static Control",
    title: "Conductive or antistatic function",
    description:
      "Define the resistance target, grounding, geometry, color, and test method before choosing a matrix.",
    href: "/products/conductive-antistatic-compounds",
  },
];

const productDirectoryContactHref = createContactHref({
  source: "Product directory",
});

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
          __html: serializeJsonLd(productDirectoryJsonLd),
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
              Start with what the part must do. Review a likely material
              direction, then compare listed grades, processing considerations,
              and available documents.
            </p>

            <div
              className="product-hero-cta stagger-list"
              style={{ "--item-index": 4 } as CSSProperties}
            >
              <Button asChild size="productHero" variant="productHeroPrimary">
                <Link
                  href="#selection-start"
                  style={{ "--item-index": 0 } as CSSProperties}
                >
                  Start with Part Requirements
                </Link>
              </Button>
              <Button asChild size="productHero" variant="productHeroSecondary">
                <Link
                  href="/technical-data-sheets"
                  style={{ "--item-index": 1 } as CSSProperties}
                >
                  Find Technical Data Sheets
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <section
          id="selection-start"
          className="product-workbench products-motion-filter"
          aria-labelledby="selection-start-title"
        >
          <div className="product-workbench-head">
            <p className="section-kicker">Requirement First</p>
            <h2 id="selection-start-title">What must the part do?</h2>
            <p>
              Choose the closest screening path. Each route explains the
              tradeoffs to review before comparing an exact grade.
            </p>
            <p className="product-workbench-note">
              Need higher temperature or another polymer family? Browse the
              full material range below.
            </p>
          </div>

          <nav
            className="product-workbench-paths"
            aria-label="Material paths by part requirement"
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
                  {path.label}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </nav>
        </section>

        <section id="product-families" className="product-family-overview products-motion-filter">
          <div className="product-family-overview-head stagger-list">
            <p
              className="section-kicker"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              Full Material Range
            </p>
            <h2 style={{ "--item-index": 1 } as CSSProperties}>
              Browse Every Product Family
            </h2>
            <p style={{ "--item-index": 2 } as CSSProperties}>
              Modified POM is the core line. Base resin, selected PA6, PA66,
              PPA, and cross-material static-control options remain available
              when the application points elsewhere.
            </p>
          </div>

          <div className="product-family-directory">
            {productFamilies.map((family) => (
              <DirectoryRow
                key={family.title}
                href={family.href}
                className="product-family-row"
                emphasized={family.number === "01"}
                eyebrow={`${family.number} / ${family.label}`}
                label={family.title}
                description={`${family.metricValue} ${family.metricLabel} | ${family.description}`}
                variant="data"
              />
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
              <Link href={productDirectoryContactHref}>
                Discuss Your Application
              </Link>
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
