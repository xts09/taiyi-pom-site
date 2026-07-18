import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  createEngineeringTdsSlug,
  engineeringTdsDocuments,
} from "@/data/engineeringTds";
import { products } from "@/data/products";
import { resourcePages } from "@/data/resources";
import {
  matchesMfiSearch,
  parseMfiSearch,
  removeMfiSearch,
} from "@/lib/mfiSearch";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const technicalDataSheetsTitle = "Technical Resource Search | Taiyi Nano";
const technicalDataSheetsDescription =
  "Search Taiyi Nano grade data, POM material guides, PA6, PA66, PPA engineering plastic compound references, FAQ answers, processing guidance, and application notes.";

const technicalDataSheetsMetadata: Metadata = createPageMetadata({
  title: technicalDataSheetsTitle,
  description: technicalDataSheetsDescription,
  path: "/technical-data-sheets",
});

const getSearchValue = (value: string | string[] | undefined) =>
  Array.isArray(value) ? (value[0] ?? "") : (value ?? "");

const getSearchTerms = (value: string) =>
  removeMfiSearch(value)
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

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
  categories?: readonly string[];
};

const materialDirectionFilter: {
  title: string;
  options: readonly MaterialDirectionOption[];
} = {
  title: "Material Direction",
  options: [
    { label: "All product directions", value: "" },
    {
      label: "Glass fiber reinforced",
      value: "glass-fiber",
      categories: [
        "Glass Fiber Reinforced POM Compound",
        "Glass Fiber Reinforced",
        "GF Mineral Reinforced",
      ],
    },
    {
      label: "Carbon fiber reinforced",
      value: "carbon-fiber",
      categories: [
        "Carbon Fiber Reinforced POM Compound",
        "Carbon Fiber Reinforced",
      ],
    },
    {
      label: "Wear / low friction",
      value: "wear-low-friction",
      categories: ["Wear-Resistant POM Compound", "Wear Low Friction"],
    },
    {
      label: "Impact modified",
      value: "impact-modified",
      categories: ["High-Impact POM Compound", "Impact Modified"],
    },
    {
      label: "Flame retardant",
      value: "flame-retardant",
      categories: ["Flame Retardant", "V0 Flame Retardant"],
    },
    {
      label: "Conductive / antistatic",
      value: "conductive-antistatic",
      categories: ["Conductive / Antistatic POM Compound"],
    },
    {
      label: "UV resistant",
      value: "uv-resistant",
      categories: ["UV-Resistant POM Compound"],
    },
    {
      label: "Mineral / glass bead filled",
      value: "mineral-filled",
      categories: [
        "GF Mineral Reinforced",
        "Mineral Filled",
        "Glass Bead Filled",
      ],
    },
    {
      label: "Mold release",
      value: "mold-release",
      categories: ["Mold Release"],
    },
    {
      label: "Base resin",
      value: "base-resin",
      categories: ["Base POM Resin"],
    },
  ],
};

const isProductContentType = (resource: string) =>
  !resource || resource === "grade-data" || resource === "tds";

const searchExamples = [
  { label: "ETM100", href: "/technical-data-sheets?q=ETM100" },
  { label: "MFI 100", href: "/technical-data-sheets?q=MFI+100" },
  { label: "TDS", href: "/technical-data-sheets?resource=tds" },
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
    description: "Review charge-control POM directions and project notes.",
    href: "/conductive-antistatic-pom",
  },
  {
    label: "Ultra-High Flow",
    description: "Search grades around MFI 100 and high-flow molding needs.",
    href: "/technical-data-sheets?q=MFI+100",
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
    getSearchValue(params.q).trim() ||
      getSearchValue(params.resource).trim() ||
      getSearchValue(params.family).trim() ||
      getSearchValue(params.direction).trim(),
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
  const query = getSearchValue(params.q).trim();
  const activeResource = getSearchValue(params.resource).trim();
  const requestedFamily = getSearchValue(params.family).trim();
  const requestedDirection = getSearchValue(params.direction).trim();
  const activeFamily = materialFamilyFilter.options.some(
    (option) => option.value === requestedFamily,
  )
    ? requestedFamily
    : "";
  const activeDirection = materialDirectionFilter.options.some(
    (option) => option.value === requestedDirection,
  )
    ? requestedDirection
    : "";
  const activeDirectionFilter = materialDirectionFilter.options.find(
    (option) => option.value === activeDirection,
  );
  const normalizedQuery = query.toLowerCase();
  const mfiSearch = parseMfiSearch(query);
  const searchTerms = getSearchTerms(query);
  const matchesSearchTerms = (haystack: string) =>
    searchTerms.every((term) => haystack.includes(term));
  const productResourceAllowed = isProductContentType(activeResource);
  const engineeringGradeAllowed = isProductContentType(activeResource);
  const searchableEngineeringTds = engineeringGradeAllowed
    ? engineeringTdsDocuments.filter((document) => {
        const matchesFamily =
          !activeFamily || document.family === activeFamily;
        const matchesDirection =
          !activeDirectionFilter?.categories ||
          activeDirectionFilter.categories.includes(document.category);
        const haystack = [
          document.grade,
          document.family,
          document.category,
          "grade data technical data sheet engineering plastic compound",
        ]
          .join(" ")
          .toLowerCase();

        return (
          matchesFamily &&
          matchesDirection &&
          (!normalizedQuery ||
            (mfiSearch === null && matchesSearchTerms(haystack)))
        );
      })
    : [];
  const searchableProducts = productResourceAllowed
    ? products.filter((product) => {
        const matchesFamily = !activeFamily || activeFamily === "POM";
        const matchesDirection =
          !activeDirectionFilter?.categories ||
          activeDirectionFilter.categories.includes(product.category);
        const haystack = [
          product.grade,
          product.title,
          product.category,
          product.color,
          product.description,
          `MFI ${product.mfi}`,
          product.features.join(" "),
          product.applications.join(" "),
          product.documents.join(" "),
        ]
          .join(" ")
          .toLowerCase();

        const matchesMfi = matchesMfiSearch(product.mfi, mfiSearch);
        const matchesQuery =
          !normalizedQuery || (matchesSearchTerms(haystack) && matchesMfi);

        return matchesFamily && matchesDirection && matchesQuery;
      })
    : [];
  const searchableResources =
    activeFamily || activeDirection
      ? []
      : resourcePages.filter((resource) => {
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
          const matchesQuery =
            !normalizedQuery ||
            (mfiSearch === null && matchesSearchTerms(haystack));
          const matchesResource =
            !activeResource || resourceType === activeResource;

          return matchesQuery && matchesResource;
        });
  const totalResults =
    searchableProducts.length +
    searchableResources.length +
    searchableEngineeringTds.length;

  const filterSummary = [
    activeResource &&
      contentTypeFilter.options.find((item) => item.value === activeResource)
        ?.label,
    activeFamily &&
      materialFamilyFilter.options.find((item) => item.value === activeFamily)
        ?.label,
    activeDirection && activeDirectionFilter?.label,
  ].filter(Boolean);
  const hasSearchIntent = Boolean(
    query || activeResource || activeFamily || activeDirection,
  );
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
      (family || direction) && !isProductContentType(resource) ? "" : resource;
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
            __html: JSON.stringify(technicalSearchJsonLd).replace(
              /</g,
              "\\u003c",
            ),
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
              {activeFamily ? (
                <input type="hidden" name="family" value={activeFamily} />
              ) : null}
              {activeDirection ? (
                <input
                  type="hidden"
                  name="direction"
                  value={activeDirection}
                />
              ) : null}
              <button type="submit">Search</button>
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
                        ...(isProductContentType(option.value)
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

              {searchableEngineeringTds.map((document) => (
                <article
                  className="resource-site-result"
                  key={`${document.family}-${document.grade}`}
                >
                  <p>Engineering Plastic Grade Data</p>
                  <h2>
                    <Link href={`/products/${createEngineeringTdsSlug(document)}`}>
                      {document.grade} {document.family} Compound
                    </Link>
                  </h2>
                  <span>
                    {document.category} {document.family} engineering plastic
                    compound reference for material review.
                  </span>
                  <div className="resource-site-result-meta">
                    <span>Family: {document.family}</span>
                    <span>Category: {document.category}</span>
                    <span>Documents available on request</span>
                  </div>
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
