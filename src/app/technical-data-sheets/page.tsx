import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Technical Data Sheet Finder | Taiyi Nano",
  description:
    "Search Taiyi Nano modified POM grades and request technical data sheets for material evaluation.",
  path: "/technical-data-sheets",
});

const searchableProducts = products.slice(0, 12);

export default function TechnicalDataSheetsPage() {
  return (
    <main className="tds-finder-page min-h-screen text-slate-900">
      <section className="tds-finder-shell mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <nav className="subpage-breadcrumb mb-8">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span>Technical Data Sheets</span>
        </nav>

        <section className="tds-finder-hero">
          <div className="tds-search-bar">
            <span aria-hidden="true">Search</span>
            <input
              type="search"
              defaultValue="pom"
              aria-label="Search technical data sheets"
              placeholder="Search by grade, shrinkage, property, or application"
            />
          </div>

          <div className="tds-finder-copy">
            <p className="section-kicker">Technical Data Sheet Finder</p>
            <h1>Find POM grade data for material review.</h1>
            <p>
              Search modified POM directions and shortlist grades by MFI,
              shrinkage range, key property data, TDS, document request, or
              application matching.
            </p>
          </div>

          <div className="tds-filter-pills" aria-label="Common filters">
            {[
              "Wear-resistant",
              "Low-friction",
              "Reinforced",
              "Conductive / Antistatic",
              "Base resin",
            ].map((item) => (
              <span key={item}>+ {item}</span>
            ))}
          </div>
        </section>

        <section className="tds-results-section">
          <div className="tds-results-head">
            <div>
              <p className="section-kicker">Search Results</p>
              <h2>Matching POM Grades</h2>
            </div>
            <span>{products.length} grades indexed</span>
          </div>

          <div className="tds-result-list">
            {searchableProducts.map((product) => (
              <article key={product.slug} className="tds-result-card">
                <div>
                  <p>{product.category}</p>
                  <h3>{product.grade}</h3>
                  <span>{product.color} / MFI {product.mfi}</span>
                </div>
                <div className="tds-result-actions">
                  <Link href={`/products/${product.slug}`}>Grade Details</Link>
                  <Link href="/contact">Request TDS</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
