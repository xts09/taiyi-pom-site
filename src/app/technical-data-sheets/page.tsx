import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { resourcePages } from "@/data/resources";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Technical Resource Search | Taiyi Nano",
  description:
    "Search Taiyi Nano grade data, technical data sheet paths, POM material guides, FAQ answers, processing guidance, and application notes.",
  path: "/technical-data-sheets",
});

const getSearchValue = (value: string | string[] | undefined) =>
  Array.isArray(value) ? (value[0] ?? "") : (value ?? "");

const resourceTypeForSlug = (slug: string) => {
  if (slug === "faq") {
    return "faq";
  }

  if (slug === "application-notes") {
    return "application-notes";
  }

  return "guides";
};

const resourceLabelForSlug = (slug: string) => {
  if (slug === "faq") {
    return "FAQ";
  }

  if (slug === "application-notes") {
    return "Application Notes";
  }

  if (slug === "processing-guide") {
    return "Processing Guide";
  }

  return "Guide";
};

const contentTypeFilter = {
  title: "Content Type",
  options: [
    { label: "All content", value: "" },
    { label: "Products / Grades", value: "grade-data" },
    { label: "Technical Data Sheets", value: "tds" },
    { label: "Guides", value: "guides" },
    { label: "FAQ", value: "faq" },
    { label: "Application Notes", value: "application-notes" },
  ],
};

type TechnicalDataSheetsPageProps = {
  searchParams?: Promise<{
    q?: string | string[];
    resource?: string | string[];
  }>;
};

export default async function TechnicalDataSheetsPage({
  searchParams,
}: TechnicalDataSheetsPageProps) {
  const params = searchParams ? await searchParams : {};
  const query = getSearchValue(params.q).trim();
  const activeResource = getSearchValue(params.resource).trim();
  const normalizedQuery = query.toLowerCase();
  const productResourceAllowed =
    !activeResource ||
    activeResource === "grade-data" ||
    activeResource === "tds";
  const searchableProducts = productResourceAllowed
    ? products.filter((product) => {
        const haystack = [
          product.grade,
          product.title,
          product.category,
          product.color,
          product.description,
          product.features.join(" "),
          product.applications.join(" "),
          product.documents.join(" "),
        ]
          .join(" ")
          .toLowerCase();

        const matchesQuery =
          !normalizedQuery || haystack.includes(normalizedQuery);

        return matchesQuery;
      })
    : [];
  const searchableResources = resourcePages.filter((resource) => {
    const resourceType = resourceTypeForSlug(resource.slug);
    const haystack = [
      resource.title,
      resource.navLabel,
      resource.description,
      resource.intro,
      resource.modules
        .map((module) =>
          [
            module.title,
            module.navLabel,
            module.description,
            ...(module.points ?? []),
            ...(module.faqItems ?? []).flatMap((item) => [
              item.question,
              item.answer,
            ]),
          ].join(" "),
        )
        .join(" "),
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
    const matchesResource =
      !activeResource ||
      resourceType === activeResource ||
      (activeResource === "tds" &&
        resource.slug === "material-selection-guide");

    return matchesQuery && matchesResource;
  });
  const totalResults = searchableProducts.length + searchableResources.length;

  const filterSummary = [
    activeResource &&
      contentTypeFilter.options.find((item) => item.value === activeResource)
        ?.label,
  ].filter(Boolean);
  const hasSearchIntent = Boolean(query || activeResource);
  const getFilterHref = (value: string) => {
    const nextParams = new URLSearchParams();

    if (query) {
      nextParams.set("q", query);
    }

    if (value) {
      nextParams.set("resource", value);
    }

    const nextQuery = nextParams.toString();
    return nextQuery
      ? `/technical-data-sheets?${nextQuery}`
      : "/technical-data-sheets";
  };
  const resultHeading = hasSearchIntent
    ? query
      ? `Search "${query}" found ${totalResults} results`
      : `${totalResults} results for selected filters`
    : "Search technical resources";

  return (
    <main className="resource-search-page">
      <section
        className="resource-site-hero"
        aria-label="Technical resource search"
      >
        <div className="resource-site-hero-inner">
          <nav className="resource-site-path" aria-label="Breadcrumb">
            <Link href="/resources">Resources</Link>
            <span>/</span>
            <span>Technical Search</span>
          </nav>

          <form
            className="resource-site-searchbox"
            action="/technical-data-sheets"
          >
            <label htmlFor="resource-search" className="resource-site-label">
              Search technical resources
            </label>
            <div className="resource-site-search-row">
              <input
                id="resource-search"
                name="q"
                type="search"
                defaultValue={query}
                aria-label="Search technical resources"
                placeholder="POM"
              />
              {activeResource ? (
                <input type="hidden" name="resource" value={activeResource} />
              ) : null}
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </section>

      <section className="resource-site-body" aria-label="Technical resources">
        <aside className="resource-site-filter-panel" aria-label="Filters">
          <div className="resource-site-filter-head">
            <h2>Filter By</h2>
            <Link href="/technical-data-sheets">Reset</Link>
          </div>

          <section className="resource-site-filter-group">
            <h3>{contentTypeFilter.title}</h3>
            <div className="resource-site-filter-options">
              {contentTypeFilter.options.map((option) => (
                <Link
                  key={option.value || "all"}
                  href={getFilterHref(option.value)}
                  aria-current={
                    activeResource === option.value ? "true" : undefined
                  }
                >
                  <span aria-hidden="true" />
                  {option.label}
                </Link>
              ))}
            </div>
          </section>
        </aside>

        <section
          id="resource-results"
          className="resource-site-results"
          aria-live="polite"
        >
          <div className="resource-site-results-head">
            <div>
              <h1 id="resource-search-title">{resultHeading}</h1>
            </div>
            <span>Sort: Relevance</span>
          </div>

          {filterSummary.length > 0 ? (
            <div
              className="active-resource-filters"
              aria-label="Active filters"
            >
              {filterSummary.map((filter) => (
                <span key={filter}>{filter}</span>
              ))}
            </div>
          ) : null}

          {!hasSearchIntent ? (
            <div className="resource-search-empty">
              <h2>Enter a keyword or choose a filter</h2>
              <p>
                Search by grade, document path, resource type, or technical
                topic. Results will appear in this panel.
              </p>
            </div>
          ) : totalResults > 0 ? (
            <div className="resource-site-result-list">
              {searchableResources.map((resource) => (
                <article className="resource-site-result" key={resource.slug}>
                  <p>{resourceLabelForSlug(resource.slug)}</p>
                  <h2>
                    <Link href={`/resources/${resource.slug}`}>
                      {resource.title}
                    </Link>
                  </h2>
                  <span>{resource.description}</span>
                  <small>Resource page</small>
                </article>
              ))}

              {searchableProducts.map((product) => (
                <article className="resource-site-result" key={product.slug}>
                  <p>Grade Data / TDS Path</p>
                  <h2>
                    <Link href={`/products/${product.slug}`}>
                      {product.grade} {product.category}
                    </Link>
                  </h2>
                  <span>{product.description}</span>
                  <div className="resource-site-result-meta">
                    <span>MFI: {product.mfi}</span>
                    <span>Color: {product.color}</span>
                    <span>
                      Documents: {product.documents.slice(0, 5).join(", ")}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="resource-search-empty">
              <h2>No matching resources found</h2>
              <p>
                Try a broader grade, document, or technical keyword. You can
                also reset filters and search all Taiyi resource paths.
              </p>
              <Link href="/technical-data-sheets" scroll={false}>
                Reset search
              </Link>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
