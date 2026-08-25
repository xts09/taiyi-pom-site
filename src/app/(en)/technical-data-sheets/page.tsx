import type { Metadata } from "next";
import Link from "next/link";
import { serializeJsonLd } from "@/lib/jsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DocumentCard } from "@/components/DocumentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { conductiveSeries } from "@/data/conductiveCompounds";
import { createEngineeringTdsSlug } from "@/data/engineeringTds";
import {
  getTechnicalDataSearchValue,
  isTechnicalDataProductContentType,
  selectTechnicalDataSearch,
  type TechnicalDocumentState,
} from "@/data/technicalDataSearch";
import { getLanguageAlternatesForPath } from "@/i18n/releaseManifest";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";
import "../styles/products.css";

const technicalDataSheetsTitle = "Technical Data Sheets & Grade Data | Taiyi Polymer";
const technicalDataSheetsDescription =
  "Search Taiyi Polymer grade data, POM material guides, PA6, PA66, PPA engineering plastic compound references, FAQ answers, processing guidance, and application notes.";

const technicalDataSheetsMetadata: Metadata = createPageMetadata({
  title: technicalDataSheetsTitle,
  description: technicalDataSheetsDescription,
  path: "/technical-data-sheets",
  image: "/generated/pom-workbench-hero.webp",
  imageAlt: "Taiyi Polymer technical data and grade search",
  languageAlternates: getLanguageAlternatesForPath("/technical-data-sheets"),
});

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

const technicalDocumentStateLabel = (state: TechnicalDocumentState) => {
  if (state === "registered-pdf") return "Registered TDS record available";
  if (state === "data-only") {
    return "Grade data available; request current technical documents for the project";
  }
  return "Document status requires confirmation";
};

const contentTypeFilter = {
  title: "Content Type",
  options: [
    { label: "All content", value: "" },
    { label: "Products / Grades", value: "grade-data" },
    { label: "Guides", value: "guides" },
    { label: "FAQ", value: "faq" },
    { label: "Application Notes", value: "application-notes" },
  ],
};

const materialFamilyFilter = {
  title: "Material Family",
  options: [
    { label: "All materials", value: "" },
    { label: "POM", value: "POM" },
    { label: "PA6", value: "PA6" },
    { label: "PA66", value: "PA66" },
    { label: "PPA", value: "PPA" },
  ],
};

type MaterialDirectionOption = {
  label: string;
  value: string;
};

const materialDirectionFilter: {
  title: string;
  options: readonly MaterialDirectionOption[];
} = {
  title: "Material Direction",
  options: [
    { label: "All material families", value: "" },
    {
      label: "Glass fiber reinforced",
      value: "glass-fiber",
    },
    {
      label: "Carbon fiber reinforced",
      value: "carbon-fiber",
    },
    {
      label: "Wear / low friction",
      value: "wear-low-friction",
    },
    {
      label: "Impact modified",
      value: "impact-modified",
    },
    {
      label: "Flame retardant",
      value: "flame-retardant",
    },
    {
      label: "Conductive / antistatic",
      value: "conductive-antistatic",
    },
    {
      label: "UV resistant",
      value: "uv-resistant",
    },
    {
      label: "Mineral / glass bead filled",
      value: "mineral-filled",
    },
    {
      label: "Mold release",
      value: "mold-release",
    },
    {
      label: "Base resin",
      value: "base-resin",
    },
  ],
};

const searchExamples = [
  { label: "ETM100", href: "/technical-data-sheets?q=ETM100" },
  { label: "MFI ≥ 100", href: "/technical-data-sheets?q=MFI+%3E%3D+100" },
  { label: "PA66", href: "/technical-data-sheets?family=PA66" },
  { label: "Automotive", href: "/technical-data-sheets?q=automotive" },
];

const emptyQuickLinks = [
  {
    label: "POM Grades",
    description: "Browse POM material families and grade-level TDS paths.",
    href: "/products/categories/pom",
  },
  {
    label: "Conductive / Antistatic",
    description: "Compare charge-control grades across polymer matrices.",
    href: "/products/conductive-antistatic-compounds",
  },
  {
    label: "Ultra-High Flow",
    description: "Search grades at MFI ≥ 100 and high-flow molding needs.",
    href: "/technical-data-sheets?q=MFI+%3E%3D+100",
  },
  {
    label: "Resources",
    description: "Open selection guides, processing notes, FAQ, and TDS help.",
    href: "/resources",
  },
];

type TechnicalDataSheetsPageProps = {
  searchParams?: Promise<{
    q?: string | string[];
    resource?: string | string[];
    family?: string | string[];
    direction?: string | string[];
  }>;
};

export async function generateMetadata({
  searchParams,
}: TechnicalDataSheetsPageProps): Promise<Metadata> {
  const params = searchParams ? await searchParams : {};
  const hasSearchIntent = Boolean(
    getTechnicalDataSearchValue(params.q).trim() ||
      getTechnicalDataSearchValue(params.resource).trim() ||
      getTechnicalDataSearchValue(params.family).trim() ||
      getTechnicalDataSearchValue(params.direction).trim(),
  );

  return {
    ...technicalDataSheetsMetadata,
    ...(hasSearchIntent
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };
}

export default async function TechnicalDataSheetsPage({
  searchParams,
}: TechnicalDataSheetsPageProps) {
  const params = searchParams ? await searchParams : {};
  const selection = selectTechnicalDataSearch({ params });
  const {
    query,
    activeResource,
    activeFamily,
    activeDirection,
    hasSearchIntent,
    totalResults,
    resourceResults: searchableResources,
    conductiveResults: searchableConductiveCompounds,
  } = selection;
  const searchableEngineeringTds = selection.engineeringResults;
  const suggestedProducts = selection.suggestedProductResults;
  const directProductResults = selection.productResults;
  const activeDirectionFilter = materialDirectionFilter.options.find(
    (option) => option.value === activeDirection,
  );

  const filterSummary = [
    activeResource &&
      contentTypeFilter.options.find((item) => item.value === activeResource)
        ?.label,
    activeFamily &&
      materialFamilyFilter.options.find((item) => item.value === activeFamily)
        ?.label,
    activeDirection && activeDirectionFilter?.label,
  ].filter(Boolean);
  const getFilterHref = ({
    resource = activeResource,
    family = activeFamily,
    direction = activeDirection,
  }: {
    resource?: string;
    family?: string;
    direction?: string;
  }) => {
    const nextResource =
      (family || direction) &&
      resource !== "" &&
      resource !== "grade-data" &&
      resource !== "tds"
        ? ""
        : resource;
    const nextParams = new URLSearchParams();

    if (query) {
      nextParams.set("q", query);
    }

    if (nextResource) {
      nextParams.set("resource", nextResource);
    }

    if (family) {
      nextParams.set("family", family);
    }

    if (direction) {
      nextParams.set("direction", direction);
    }

    const nextQuery = nextParams.toString();
    return nextQuery
      ? `/technical-data-sheets?${nextQuery}`
      : "/technical-data-sheets";
  };
  const resultCountLabel = `${totalResults} ${totalResults === 1 ? "result" : "results"}`;
  const resultHeading = hasSearchIntent
    ? query
      ? `Search "${query}" found ${resultCountLabel}`
      : `${resultCountLabel} for selected filters`
    : "Search technical resources";
  const technicalSearchJsonLd = hasSearchIntent
    ? null
    : [
        createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Technical Resource Search", path: "/technical-data-sheets" },
        ]),
        createWebPageJsonLd({
          title: technicalDataSheetsTitle,
          description: technicalDataSheetsDescription,
          path: "/technical-data-sheets",
        }),
      ];

  return (
    <main className="resource-search-page">
      {technicalSearchJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(technicalSearchJsonLd),
          }}
        />
      ) : null}
      <section
        className="resource-site-hero"
        aria-label="Technical resource search"
      >
        <div className="resource-site-hero-inner">
          <Breadcrumbs
            items={[
              { href: "/resources", label: "Resources" },
              { label: "Technical Search" },
            ]}
            variant="resource"
          />

          <form
            className="resource-site-searchbox"
            action="/technical-data-sheets"
          >
            <label htmlFor="resource-search" className="resource-site-label">
              Search technical resources
            </label>
            <div className="resource-site-search-row">
              <Input
                id="resource-search"
                name="q"
                type="search"
                defaultValue={query}
                aria-label="Search technical resources"
                placeholder="e.g. POM, R35…"
                className="resource-site-search-input"
              />
              <Button
                type="submit"
                variant="primary"
                size="form"
                className="resource-site-search-submit"
              >
                Search
              </Button>
            </div>
            <div className="resource-site-search-examples" aria-label="Search examples">
              <span>Try</span>
              {searchExamples.map((example) => (
                <Link key={example.label} href={example.href}>
                  {example.label}
                </Link>
              ))}
            </div>
          </form>
        </div>
      </section>

      <section className="resource-site-body" aria-label="Technical resources">
        <aside className="resource-site-filter-panel" aria-label="Filters">
          <details
            className="resource-site-filter-shell"
            open={filterSummary.length > 0 ? true : undefined}
          >
            <summary>
              <span>Filters</span>
              <strong>
                {filterSummary.length > 0
                  ? `${filterSummary.length} active`
                  : "Refine results"}
              </strong>
            </summary>
            <div className="resource-site-filter-inner">
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
                      href={getFilterHref({
                        resource: option.value,
                        ...(isTechnicalDataProductContentType(option.value)
                          ? {}
                          : { family: "", direction: "" }),
                      })}
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

              <section className="resource-site-filter-group">
                <h3>{materialFamilyFilter.title}</h3>
                <div className="resource-site-filter-options">
                  {materialFamilyFilter.options.map((option) => (
                    <Link
                      key={option.value || "all"}
                      href={getFilterHref({ family: option.value })}
                      aria-current={
                        activeFamily === option.value ? "true" : undefined
                      }
                    >
                      <span aria-hidden="true" />
                      {option.label}
                    </Link>
                  ))}
                </div>
              </section>

              <section className="resource-site-filter-group">
                <details
                  className="resource-site-filter-disclosure"
                  open={Boolean(activeDirection)}
                >
                  <summary>{materialDirectionFilter.title}</summary>
                  <div className="resource-site-filter-options">
                    {materialDirectionFilter.options.map((option) => (
                      <Link
                        key={option.value || "all"}
                        href={getFilterHref({ direction: option.value })}
                        aria-current={
                          activeDirection === option.value ? "true" : undefined
                        }
                      >
                        <span aria-hidden="true" />
                        {option.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </section>
            </div>
          </details>
        </aside>

        <section id="resource-results" className="resource-site-results">
          <div className="resource-site-results-head">
            <div>
              <h1
                id="resource-search-title"
                aria-live="polite"
                aria-atomic="true"
              >
                {resultHeading}
              </h1>
            </div>
            <span>Grouped by content type</span>
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
                Search by grade, material family, product direction, document
                path, resource type, or technical topic. Results will appear in
                this panel.
              </p>
              <div className="resource-empty-quick-links">
                {emptyQuickLinks.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </Link>
                ))}
              </div>
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

              {searchableEngineeringTds.map(({ document, documentState }) => (
                <DocumentCard
                  key={`${document.family}-${document.grade}`}
                  variant="compact-link"
                  titleLevel={2}
                  linkTitle
                  eyebrow="Engineering Plastic Grade Data"
                  title={`${document.grade} ${document.family} Compound`}
                  href={`/products/${createEngineeringTdsSlug(document)}`}
                  description={
                    <>
                    {document.category} {document.family} engineering plastic
                    compound reference for material review.
                    </>
                  }
                  meta={
                    <>
                      <span>Family: {document.family}</span>
                      <span>Category: {document.category}</span>
                      <span>{technicalDocumentStateLabel(documentState)}</span>
                    </>
                  }
                />
              ))}

              {searchableConductiveCompounds.map((compound) => {
                const series = conductiveSeries[compound.technology];

                return (
                  <DocumentCard
                    key={`${compound.technology}-${compound.grade}`}
                    variant="compact-link"
                    titleLevel={2}
                    linkTitle
                    eyebrow="Conductive / Antistatic Grade Directory"
                    title={`${compound.grade} ${compound.matrix} Compound`}
                    href="/products/conductive-antistatic-compounds#grade-explorer"
                    description={`${series.shortLabel} direction with catalogue target band ${compound.rangeLabel}. Confirm the test method, units, and molded-part result before approval.`}
                    meta={
                      <>
                        <span>Family: {compound.matrix}</span>
                        <span>Technology: {series.shortLabel}</span>
                        <span>Grade data available on request</span>
                      </>
                    }
                  />
                );
              })}

              {suggestedProducts.map(({ product, documentState }) => (
                <DocumentCard
                  key={`suggested-${product.slug}`}
                  variant="compact-link"
                  titleLevel={2}
                  linkTitle
                  eyebrow="Suggested PLATFORM grade"
                  title={`${product.grade} ${product.category}`}
                  href={`/products/${product.slug}`}
                  description={product.description}
                  meta={
                    <>
                      <span>Preliminary material screening candidate</span>
                      <span>Compare current TDS and application requirements</span>
                      <span>{technicalDocumentStateLabel(documentState)}</span>
                    </>
                  }
                />
              ))}

              {directProductResults.map(({ product, documentState }) => (
                <DocumentCard
                  key={product.slug}
                  variant="compact-link"
                  titleLevel={2}
                  linkTitle
                  eyebrow="Grade Data / TDS Path"
                  title={`${product.grade} ${product.category}`}
                  href={`/products/${product.slug}`}
                  description={product.description}
                  meta={
                    <>
                      <span>MFI: {product.mfi}</span>
                      <span>Color: {product.color}</span>
                      <span>{technicalDocumentStateLabel(documentState)}</span>
                    </>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="resource-search-empty">
              <h2>No matching resources found</h2>
              <p>
                Try a broader grade, document, or technical keyword. You can
                also reset filters and search all Taiyi Polymer resource paths.
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
