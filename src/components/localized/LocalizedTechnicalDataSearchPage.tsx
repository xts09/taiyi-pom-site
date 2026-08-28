import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DocumentCard } from "@/components/DocumentCard";
import { TechnicalDataQueryLink } from "@/components/TechnicalDataQueryLink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { conductiveSeries } from "@/data/conductiveCompounds";
import { createEngineeringTdsSlug } from "@/data/engineeringTds";
import {
  isTechnicalDataProductContentType,
  selectTechnicalDataSearch,
  technicalDataGradeBrowseGroups,
  type TechnicalDataSearchParams,
  type TechnicalDocumentState,
} from "@/data/technicalDataSearch";
import type { LocalizedUrlSegment } from "@/i18n/config";
import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";
import {
  getLocalizedResourcePages,
} from "@/i18n/resourceMessages";
import type { LocalizedResourceArticleSlug } from "@/i18n/resourceTypes";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import {
  getZhTechnicalDataCategoryLabel,
  zhTechnicalDataSearchMessages as copy,
  zhTechnicalDataSearchVocabulary,
} from "@/i18n/technicalDataSearchMessages";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";

const sourcePath = "/technical-data-sheets";

const resourceLabelForSlug = (slug: string) => {
  if (slug === "faq") return "常见问题";
  if (slug === "application-notes") return "应用说明";
  if (slug === "processing-guide") return "加工指南";
  return "技术指南";
};

const documentStateLabel = (state: TechnicalDocumentState) => {
  if (state === "registered-pdf") return copy.documentStates.registeredPdf;
  if (state === "data-only") return copy.documentStates.dataOnly;
  return copy.documentStates.unknown;
};

type LocalizedTechnicalDataSearchPageProps = {
  params: TechnicalDataSearchParams;
  messages: ProductFunnelMessages;
  localeSegment: LocalizedUrlSegment;
  inLanguage: string;
};

export function LocalizedTechnicalDataSearchPage({
  params,
  messages,
  localeSegment,
  inLanguage,
}: LocalizedTechnicalDataSearchPageProps) {
  const localizedPath = (path: string) => getLocalizedHref(path, localeSegment);
  const pagePath = localizedPath(sourcePath);
  const selection = selectTechnicalDataSearch({
    params,
    vocabulary: zhTechnicalDataSearchVocabulary,
  });
  const localizedResources = getLocalizedResourcePages(localeSegment);
  const requestHref = localizedPath(
    createContactHref({
      intent: "tds",
      source: messages.common.contactSourceTechnicalData,
    }),
  );
  const {
    query,
    activeResource,
    activeFamily,
    activeDirection,
    hasSearchIntent,
    totalResults,
  } = selection;
  const activeDirectionLabel = copy.directions.find(
    (option) => option.value === activeDirection,
  )?.label;
  const filterSummary = [
    activeResource &&
      copy.contentTypes.find((item) => item.value === activeResource)?.label,
    activeFamily &&
      copy.families.find((item) => item.value === activeFamily)?.label,
    activeDirection && activeDirectionLabel,
  ].filter(Boolean) as string[];
  const resultHeading = hasSearchIntent
    ? query
      ? copy.queryHeading(query, totalResults)
      : copy.filteredHeading(totalResults)
    : copy.cleanHeading;

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
      !isTechnicalDataProductContentType(resource)
        ? ""
        : resource;
    const nextParams = new URLSearchParams();

    if (query) nextParams.set("q", query);
    if (nextResource) nextParams.set("resource", nextResource);
    if (family) nextParams.set("family", family);
    if (direction) nextParams.set("direction", direction);

    const nextQuery = nextParams.toString();
    return nextQuery ? `${pagePath}?${nextQuery}` : pagePath;
  };

  const jsonLd = hasSearchIntent
    ? null
    : [
        createBreadcrumbJsonLd([
          { name: messages.common.home, path: localizedPath("/") },
          { name: copy.breadcrumb, path: pagePath },
        ]),
        createWebPageJsonLd({
          title: messages.technicalData.metadata.title,
          description: messages.technicalData.metadata.description,
          path: pagePath,
          image: "/generated/pom-workbench-hero.webp",
          inLanguage,
        }),
      ];

  return (
    <main className="resource-search-page">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      ) : null}

      <section className="resource-site-hero" aria-label={copy.searchLabel}>
        <div className="resource-site-hero-inner">
          <Breadcrumbs
            items={[
              { href: localizedPath("/resources"), label: "资源中心" },
              { label: copy.breadcrumb },
            ]}
            variant="resource"
          />

          <form className="resource-site-searchbox" action={pagePath}>
            <label htmlFor="resource-search" className="resource-site-label">
              {copy.searchLabel}
            </label>
            <div className="resource-site-search-row">
              <Input
                id="resource-search"
                name="q"
                type="search"
                defaultValue={query}
                aria-label={copy.searchLabel}
                placeholder={copy.searchPlaceholder}
                className="resource-site-search-input"
              />
              <Button
                type="submit"
                variant="primary"
                size="form"
                className="resource-site-search-submit"
              >
                {copy.searchAction}
              </Button>
            </div>
            <div
              className="resource-site-search-examples"
              aria-label={copy.examplesLabel}
            >
              <span>{copy.examplesLabel}</span>
              {copy.examples.map((example) => (
                <TechnicalDataQueryLink
                  key={example.label}
                  cleanHref={pagePath}
                  queryHref={`${pagePath}?q=${encodeURIComponent(example.query)}`}
                >
                  {example.label}
                </TechnicalDataQueryLink>
              ))}
            </div>
          </form>
        </div>
      </section>

      <section className="resource-site-body" aria-label={copy.breadcrumb}>
        <aside className="resource-site-filter-panel" aria-label={copy.filtersLabel}>
          <details
            className="resource-site-filter-shell"
            open={filterSummary.length > 0 ? true : undefined}
          >
            <summary>
              <span>{copy.filtersSummary}</span>
              <strong>
                {filterSummary.length > 0
                  ? `${filterSummary.length} ${copy.active}`
                  : copy.refine}
              </strong>
            </summary>
            <div className="resource-site-filter-inner">
              <div className="resource-site-filter-head">
                <h2>{copy.filtersLabel}</h2>
                <Link href={pagePath}>{copy.reset}</Link>
              </div>

              <section className="resource-site-filter-group">
                <h3>{copy.contentTypeTitle}</h3>
                <div className="resource-site-filter-options">
                  {copy.contentTypes.map((option) => (
                    <TechnicalDataQueryLink
                      key={option.value || "all"}
                      queryHref={getFilterHref({
                        resource: option.value,
                        ...(isTechnicalDataProductContentType(option.value)
                          ? {}
                          : { family: "", direction: "" }),
                      })}
                      cleanHref={pagePath}
                      aria-current={
                        activeResource === option.value ? "true" : undefined
                      }
                    >
                      <span aria-hidden="true" />
                      {option.label}
                    </TechnicalDataQueryLink>
                  ))}
                </div>
              </section>

              <section className="resource-site-filter-group">
                <h3>{copy.familyTitle}</h3>
                <div className="resource-site-filter-options">
                  {copy.families.map((option) => (
                    <TechnicalDataQueryLink
                      key={option.value || "all"}
                      queryHref={getFilterHref({ family: option.value })}
                      cleanHref={pagePath}
                      aria-current={
                        activeFamily === option.value ? "true" : undefined
                      }
                    >
                      <span aria-hidden="true" />
                      {option.label}
                    </TechnicalDataQueryLink>
                  ))}
                </div>
              </section>

              <section className="resource-site-filter-group">
                <details
                  className="resource-site-filter-disclosure"
                  open={Boolean(activeDirection)}
                >
                  <summary>{copy.directionTitle}</summary>
                  <div className="resource-site-filter-options">
                    {copy.directions.map((option) => (
                      <TechnicalDataQueryLink
                        key={option.value || "all"}
                        queryHref={getFilterHref({ direction: option.value })}
                        cleanHref={pagePath}
                        aria-current={
                          activeDirection === option.value ? "true" : undefined
                        }
                      >
                        <span aria-hidden="true" />
                        {option.label}
                      </TechnicalDataQueryLink>
                    ))}
                  </div>
                </details>
              </section>
            </div>
          </details>
        </aside>

        <section id="resource-results" className="resource-site-results">
          <div className="resource-site-results-head">
            <h1 id="resource-search-title" aria-live="polite" aria-atomic="true">
              {resultHeading}
            </h1>
            <span>{copy.grouped}</span>
          </div>

          {filterSummary.length > 0 ? (
            <div className="active-resource-filters" aria-label={copy.filtersLabel}>
              {filterSummary.map((filter) => (
                <span key={filter}>{filter}</span>
              ))}
            </div>
          ) : null}

          {!hasSearchIntent ? (
            <div className="resource-search-empty">
              <h2>{copy.cleanTitle}</h2>
              <p>{copy.cleanBody}</p>
            </div>
          ) : totalResults > 0 ? (
            <div className="resource-site-result-list">
              {selection.resourceResults.map((resource) => {
                const localizedResource =
                  localizedResources[
                    resource.slug as LocalizedResourceArticleSlug
                  ] ?? resource;

                return (
                  <article className="resource-site-result" key={resource.slug}>
                    <p>{resourceLabelForSlug(resource.slug)}</p>
                    <h2>
                      <Link href={localizedPath(`/resources/${resource.slug}`)}>
                        {localizedResource.title}
                      </Link>
                    </h2>
                    <span>{localizedResource.description}</span>
                    <small>{copy.resourcePage}</small>
                  </article>
                );
              })}

              {selection.engineeringResults.map(({ document, documentState }) => (
                <DocumentCard
                  key={`${document.family}-${document.grade}`}
                  variant="compact-link"
                  titleLevel={2}
                  linkTitle
                  eyebrow={copy.engineeringEyebrow}
                  title={`${document.grade} ${document.family}`}
                  href={localizedPath(
                    `/products/${createEngineeringTdsSlug(document)}`,
                  )}
                  description={`${getZhTechnicalDataCategoryLabel(document.category)}牌号数据，用于材料初筛与项目验证。`}
                  meta={
                    <>
                      <span>{document.family}</span>
                      <span>{getZhTechnicalDataCategoryLabel(document.category)}</span>
                      <span>{documentStateLabel(documentState)}</span>
                    </>
                  }
                />
              ))}

              {selection.conductiveResults.map((compound) => {
                const series = conductiveSeries[compound.technology];

                return (
                  <DocumentCard
                    key={`${compound.technology}-${compound.grade}`}
                    variant="compact-link"
                    titleLevel={2}
                    linkTitle
                    eyebrow={copy.conductiveEyebrow}
                    title={`${compound.grade} ${compound.matrix}`}
                    href={localizedPath(
                      "/products/conductive-antistatic-compounds#grade-explorer",
                    )}
                    description={`${series.shortLabel} 目录方向，目标区间 ${compound.rangeLabel}。选材时需确认测试方法、单位和制件实测结果。`}
                    meta={
                      <>
                        <span>{compound.matrix}</span>
                        <span>{copy.documentStates.unknown}</span>
                      </>
                    }
                  />
                );
              })}

              {selection.suggestedProductResults.map(
                ({ product, documentState }) => (
                  <DocumentCard
                    key={`suggested-${product.slug}`}
                    variant="compact-link"
                    titleLevel={2}
                    linkTitle
                    eyebrow={copy.suggestedEyebrow}
                    title={`${product.grade} ${getZhTechnicalDataCategoryLabel(product.category)}`}
                    href={localizedPath(`/products/${product.slug}`)}
                    description={copy.suggestedBoundary}
                    meta={
                      <>
                        <span>{documentStateLabel(documentState)}</span>
                        <span>需对照现行牌号数据、项目要求和制件验证</span>
                      </>
                    }
                  />
                ),
              )}

              {selection.productResults.map(({ product, documentState }) => (
                <DocumentCard
                  key={product.slug}
                  variant="compact-link"
                  titleLevel={2}
                  linkTitle
                  eyebrow={copy.productEyebrow}
                  title={`${product.grade} ${getZhTechnicalDataCategoryLabel(product.category)}`}
                  href={localizedPath(`/products/${product.slug}`)}
                  description={`${getZhTechnicalDataCategoryLabel(product.category)}牌号数据，用于初步材料筛选与项目验证。`}
                  meta={
                    <>
                      <span>MFI: {product.mfi}</span>
                      <span>{documentStateLabel(documentState)}</span>
                    </>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="resource-search-empty">
              <h2>{copy.noResultsTitle}</h2>
              <p>{copy.noResultsBody}</p>
              <Link href={pagePath}>{copy.reset}</Link>
            </div>
          )}

          {!hasSearchIntent ? (
            <section className="resource-grade-browse" aria-labelledby="grade-browse-title">
              <div className="resource-grade-browse-head">
                <h2 id="grade-browse-title">{copy.browseTitle}</h2>
                <p>{copy.browseBody}</p>
              </div>
              <div className="resource-grade-browse-groups">
                {technicalDataGradeBrowseGroups.map((group) => (
                  <details key={group.family} className="resource-grade-browse-group">
                    <summary>
                      <strong>{group.family}</strong>
                      <span>{copy.browseCount(group.items.length)}</span>
                    </summary>
                    <div className="resource-grade-browse-list">
                      {group.items.map((item) => (
                        <Link
                          key={item.id}
                          href={localizedPath(`/products/${item.slug}`)}
                        >
                          <strong>{item.grade}</strong>
                          <span>{getZhTechnicalDataCategoryLabel(item.category)}</span>
                          <small>{documentStateLabel(item.documentState)}</small>
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
              <p className="resource-grade-document-note">
                需要当前项目对应的技术资料？
                <Link href={requestHref}>申请技术资料并说明应用条件</Link>
              </p>
            </section>
          ) : null}
        </section>
      </section>
    </main>
  );
}
