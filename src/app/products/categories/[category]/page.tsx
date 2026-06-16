import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductPageMotion } from "@/components/ProductPageMotion";
import { applications } from "@/data/applications";
import { availableDocuments } from "@/data/company";
import { products } from "@/data/products";
import {
  findCategoryBySlug,
  getCategoryApplications,
  getCategoryDescription,
  getCategoryFaqs,
  getCategoryTitle,
  getProductsByCategory,
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

export function generateStaticParams() {
  return productCategoryEntries.map((entry) => ({
    category: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
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

  return createPageMetadata({
    title: `${getCategoryTitle(entry.category)} | Taiyi Nano`,
    description: getCategoryDescription(entry.category),
    path: entry.path,
  });
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { category: categorySlug } = await params;
  const entry = findCategoryBySlug(categorySlug);

  if (!entry) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(products, entry.category);
  const categoryApplications = getCategoryApplications(entry.category);
  const categoryFaqs = getCategoryFaqs(entry.category);
  const pageTitle =
    entry.category === "POM"
      ? "POM Material Grades"
      : getCategoryTitle(entry.category);
  const pageDescription =
    entry.category === "POM"
      ? "Modified compound data for wear-resistant, low-friction, reinforced, conductive, antistatic, and base resin sourcing requirements."
      : getCategoryDescription(entry.category);
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
      numberOfItems: categoryProducts.length,
      itemListElement: categoryProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/products/${product.slug}`,
        name: product.title,
      })),
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
          <nav className="subpage-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{entry.label}</span>
          </nav>

          <div className="product-hero-card">
            <p className="product-hero-eyebrow">Material Directory</p>

            <h1 className="text-4xl font-black tracking-tight">{pageTitle}</h1>

            <p className="mt-4 max-w-3xl text-lg leading-8">
              {pageDescription}
            </p>

            <div className="products-motion-data product-hero-data">
              <div className="product-hero-summary">
                <p className="section-kicker mb-2">Overview</p>
                <p>
                  Compare matching grades by properties, mold stage, shrinkage
                  behavior, color, application fit, and documents.
                </p>
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
                Discuss Requirement
              </Link>
              <Link href="/technical-data-sheets" className="product-hero-tds-link">
                Find a Technical Data Sheet (TDS)
              </Link>
            </div>
          </div>
        </div>

        <section
          className="product-section-nav"
          aria-label="Product section navigation"
          style={{
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            boxShadow: "none",
            filter: "none",
          }}
        >
          <div className="product-section-nav-top">
            <div className="product-section-identity">
              <p>{pageTitle}</p>
              <span className="product-section-subtitle">
                {entry.category === "POM"
                  ? "Modified POM Compounds | Base POM Resin"
                  : entry.label}
              </span>
            </div>

            <div className="product-section-actions">
              <Link href="/contact">Discuss Requirement</Link>
              <Link href="/technical-data-sheets">Find a TDS</Link>
            </div>
          </div>

          <nav className="product-section-tabs" aria-label="Product sections">
            <a href="#category-overview">Overview</a>
            <a href="#material-families">Families</a>
            <a href="#pom-grades">Grades</a>
            <a href="#category-applications">Applications</a>
            <a href="#category-faq">FAQ</a>
          </nav>
        </section>

        <section
          id="category-overview"
          className="product-overview-screen products-motion-secondary"
        >
          <div className="product-overview-screen-head">
            <p className="section-kicker mb-3">Overview</p>
            <h2>{pageTitle}</h2>
            <p>
              Compare matching grades by material family, grade data,
              mold-development fit, shrinkage behavior, application fit, and
              document requirements.
            </p>
          </div>

          <div className="product-overview-screen-grid">
            <div>
              <span>01</span>
              <strong>Material Families</strong>
              <p>Start from wear, friction, impact, reinforcement, or base resin needs.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Grade Comparison</strong>
              <p>
                Review MFI, shrinkage range, color, key properties, documents,
                and typical usage.
              </p>
            </div>
            <div>
              <span>03</span>
              <strong>Application Fit</strong>
              <p>
                Map part design, cavity count, flow path, and shrinkage targets
                to a practical POM material direction.
              </p>
            </div>
          </div>
        </section>

        <ProductGrid products={products} selectedCategory={entry.category} />

        <section
          id="category-applications"
          className="product-application-directory products-motion-secondary mt-12"
        >
          <div className="product-application-directory-head">
            <p className="section-kicker mb-3">Applications</p>
            <h2>Application Fields We Support</h2>
            <p>
              Simple application directions covered by Taiyi modified POM and
              selected engineering plastic compounds.
            </p>
          </div>

          <div className="product-application-list">
            {applications.map((application, index) => (
              <Link
                key={application.slug}
                href={`/applications/${application.slug}`}
                className="product-application-list-item"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {application.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="products-motion-secondary mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="evaluation-note">
            <p className="section-kicker mb-3">Application Fit</p>
            <h2 className="mb-4 text-xl font-black text-slate-950">
              Common Application Scenarios
            </h2>
            <ul className="space-y-3 text-sm leading-6 text-slate-700">
              {categoryApplications.map((application) => (
                <li key={application} className="flex gap-3">
                  <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </div>

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

        <section className="selection-support-band products-motion-support mt-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="section-kicker mb-3">Inquiry Support</p>
              <h2 className="text-2xl font-black tracking-tight text-white">
                Request a Grade Recommendation
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Share your application, mold development stage, cavity count,
                operating condition, current material, shrinkage or warpage
                concern, document needs, and target volume so we can recommend a
                suitable Taiyi material direction.
              </p>
            </div>

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
          </div>

          <Link href="/contact" className="cta-primary mt-7 px-6 py-3 text-sm">
            Contact Sales
          </Link>
        </section>
      </section>
      </ProductPageMotion>
    </main>
  );
}
