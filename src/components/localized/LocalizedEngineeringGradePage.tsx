import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UnitText, ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { availableDocuments } from "@/data/company";
import {
  createEngineeringTdsSlug,
  engineeringTdsDocuments,
  type EngineeringTdsDocument,
} from "@/data/engineeringTds";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  createLocalizedEngineeringGradeCopy,
  getLocalizedEngineeringGradeContactSource,
} from "@/i18n/engineeringGradeMessages";
import { translateExpandedText } from "@/i18n/expandedLocaleContent";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import { selectRelatedGrades } from "@/lib/relatedGrades";
import { createBreadcrumbJsonLd } from "@/lib/seo";

type LocalizedEngineeringGradePageProps = {
  document: EngineeringTdsDocument;
  localeSegment: LocalizedUrlSegment;
  sourcePath: string;
};

export function LocalizedEngineeringGradePage({
  document,
  localeSegment,
  sourcePath,
}: LocalizedEngineeringGradePageProps) {
  const copy = createLocalizedEngineeringGradeCopy(document, localeSegment);
  const localizedPath = (path: string) => getLocalizedHref(path, localeSegment);
  const productPath = localizedPath(sourcePath);
  const categoryPath = localizedPath(copy.categorySourcePath);
  const tdsRequestHref = localizedPath(
    createContactHref({
      grade: document.grade,
      intent: "tds",
      material: copy.categoryLabel,
      source: getLocalizedEngineeringGradeContactSource(localeSegment),
    }),
  );
  const sampleRequestHref = localizedPath(
    createContactHref({
      grade: document.grade,
      intent: "sample",
      material: copy.categoryLabel,
      source: getLocalizedEngineeringGradeContactSource(localeSegment),
    }),
  );
  const gradeEvaluationHref = localizedPath(
    createContactHref({
      grade: document.grade,
      intent: "grade-evaluation",
      material: copy.categoryLabel,
      source: getLocalizedEngineeringGradeContactSource(localeSegment),
    }),
  );
  const configuredRelatedGrades = (document.screening?.relatedGradeSlugs ?? [])
    .map((relatedSlug) =>
      engineeringTdsDocuments.find(
        (item) => createEngineeringTdsSlug(item) === relatedSlug,
      ),
    )
    .filter((item): item is EngineeringTdsDocument => Boolean(item));
  const relatedGrades =
    configuredRelatedGrades.length > 0
      ? configuredRelatedGrades.slice(0, 3)
      : selectRelatedGrades({
          items: engineeringTdsDocuments,
          current: document,
          getId: createEngineeringTdsSlug,
          isPrimaryPeer: (item, current) =>
            item.family === current.family && item.category === current.category,
          isFallbackPeer: (item, current) => item.family === current.family,
        });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: translateExpandedText("首页", localeSegment), path: localizedPath("/") },
    { name: translateExpandedText("产品", localeSegment), path: localizedPath("/products") },
    { name: copy.categoryLabel, path: categoryPath },
    { name: document.grade, path: productPath },
  ]);

  return (
    <main className="product-detail-page product-detail-page--campaign-grade min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />

      <section className="product-detail-shell">
        <Breadcrumbs
          items={[
            { label: translateExpandedText("首页", localeSegment), href: localizedPath("/") },
            { label: translateExpandedText("产品", localeSegment), href: localizedPath("/products") },
            { label: copy.categoryLabel, href: categoryPath },
            { label: document.grade },
          ]}
        />

        <div className="product-detail-hero">
          <div className="product-detail-hero-card reveal-up">
            <div className="product-detail-heading-row">
              <div className="product-detail-main-copy stagger-list">
                <p className="product-detail-eyebrow">{copy.eyebrow}</p>
                <h1>{document.grade}</h1>
                <p className="product-detail-summary">{copy.summary}</p>

                <div className="product-detail-hero-bottom-row stagger-list">
                  <div
                    className="product-detail-document-strip stagger-list"
                    aria-label={copy.documentSupport}
                  >
                    <span>{copy.documentSupport}</span>
                    <div>
                      {availableDocuments.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <p>{copy.documentNote}</p>
                  </div>

                  <div className="product-detail-hero-side stagger-list">
                    <div className="product-detail-hero-actions stagger-list">
                      <Button
                        asChild
                        size="productDetailHero"
                        variant="productDetailPrimary"
                      >
                        <Link href={tdsRequestHref}>{copy.tdsAction}</Link>
                      </Button>
                      <Button
                        asChild
                        size="productDetailHero"
                        variant="productDetailSecondary"
                      >
                        <Link href={sampleRequestHref}>{copy.sampleAction}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card asChild variant="evidence">
          <section
            className="product-detail-resource-panel reveal-up"
            aria-label={copy.snapshot.aria}
          >
            <div className="product-detail-resource-copy stagger-list">
              <strong>{copy.snapshot.title}</strong>
              <p>{copy.snapshot.body}</p>
            </div>
            <dl className="product-detail-snapshot-grid stagger-list">
              {copy.snapshot.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    <ValueText value={item.value ?? ""} />
                    {item.unit ? (
                      <>
                        {" "}
                        <UnitText unit={item.unit} />
                      </>
                    ) : null}
                  </dd>
                  <span>{item.note}</span>
                </div>
              ))}
            </dl>
          </section>
        </Card>

        <nav
          className="product-detail-topic-list product-detail-section-nav"
          aria-label={copy.sectionNav.aria}
        >
          <a href="#typical-properties">{copy.sectionNav.properties}</a>
          <a href="#material-fit">{copy.sectionNav.fit}</a>
          <a href="#evaluation-path">{copy.sectionNav.evaluation}</a>
          <a href="#evaluation-notes">{copy.sectionNav.notes}</a>
        </nav>

        <article className="product-detail-sheet">
          <section
            id="typical-properties"
            className="property-table-section product-detail-table-section"
          >
            <div className="property-table-head">
              <p className="section-kicker mb-2">{copy.properties.kicker}</p>
              <h2 className="text-xl font-black text-slate-950">
                {copy.properties.title}
              </h2>
              <p>{copy.properties.body}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="product-detail-core-property-table w-full text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    {[
                      copy.properties.property,
                      copy.properties.value,
                      copy.properties.unit,
                      copy.properties.method,
                    ].map((label) => (
                      <th key={label} className="px-5 py-3 font-black">
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80">
                  {copy.properties.items.map((property) => (
                    <tr key={property.label} className="hover:bg-cyan-50/60">
                      <td
                        className="px-5 py-3 font-bold text-slate-950"
                        data-label={copy.properties.property}
                      >
                        {property.label}
                      </td>
                      <td
                        className="px-5 py-3 font-black text-blue-700"
                        data-label={copy.properties.value}
                      >
                        <ValueText value={property.value} />
                      </td>
                      <td
                        className="px-5 py-3 text-slate-700"
                        data-label={copy.properties.unit}
                      >
                        <UnitText unit={property.unit} />
                      </td>
                      <td
                        className="px-5 py-3 text-slate-600"
                        data-label={copy.properties.method}
                      >
                        {property.method}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="product-detail-core-data-note">
              <p>{copy.properties.body}</p>
              <Link href={tdsRequestHref}>{copy.properties.requestAction}</Link>
            </div>
          </section>

          <section
            id="material-fit"
            className="detail-columns product-detail-support-section"
          >
            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                {copy.featuresTitle}
              </h2>
              <ul className="space-y-3 text-slate-700">
                {copy.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                {copy.applicationsTitle}
              </h2>
              <ul className="space-y-3 text-slate-700">
                {copy.applications.map((application) => (
                  <li key={application} className="flex gap-3">
                    <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="evaluation-path"
            className="product-detail-evaluation-path"
            aria-labelledby="evaluation-path-title"
          >
            <div className="product-detail-evaluation-path-intro">
              <p className="section-kicker">{copy.evaluation.kicker}</p>
              <h2 id="evaluation-path-title">{copy.evaluation.title}</h2>
              <p>{copy.evaluation.body}</p>
            </div>
            <ol className="product-detail-evaluation-steps">
              {copy.evaluation.steps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step.title}</strong>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section
            id="evaluation-notes"
            className="evaluation-note reveal-up reveal-delay-1 mt-10"
          >
            <h2 className="mb-3 text-xl font-black text-slate-950">
              {copy.notes.title}
            </h2>
            <p className="text-sm leading-6 text-slate-700">{copy.notes.body}</p>
            <Link
              href={categoryPath}
              className="mt-4 inline-flex text-sm font-extrabold text-blue-700"
            >
              {copy.notes.categoryAction} &rarr;
            </Link>
          </section>

          <ActionPanel
            variant="recommendation"
            eyebrow={copy.inquiry.eyebrow}
            title={copy.inquiry.title}
            className="detail-cta reveal-up reveal-delay-2 mt-10"
            eyebrowClassName="section-kicker mb-3"
            action={
              <Button asChild variant="inverse" className="h-auto px-5 py-3 text-sm">
                <Link href={gradeEvaluationHref}>{copy.inquiry.action}</Link>
              </Button>
            }
          >
            <p>{copy.inquiry.body}</p>
          </ActionPanel>
        </article>

        <section className="product-detail-related mt-12">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="section-kicker mb-2">{copy.related.kicker}</p>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                {copy.related.title}
              </h2>
            </div>
            <Link
              href={categoryPath}
              className="hidden text-sm font-extrabold text-blue-700 hover:text-blue-800 md:block"
            >
              {copy.related.categoryAction} &rarr;
            </Link>
          </div>

          <div className="related-product-list stagger-list">
            {relatedGrades.map((item, index) => {
              const relatedCopy = createLocalizedEngineeringGradeCopy(
                item,
                localeSegment,
              );

              return (
                <Link
                  key={`${item.family}-${item.grade}`}
                  href={localizedPath(`/products/${createEngineeringTdsSlug(item)}`)}
                  className="related-product-row"
                  style={{ "--item-index": index } as CSSProperties}
                >
                  <span className="related-product-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="related-product-main">
                    <p className="section-kicker mb-2">
                      {item.family} · {relatedCopy.directionLabel}
                    </p>
                    <h3>{item.grade}</h3>
                  </div>
                  <dl>
                    <div>
                      <dt>{copy.related.tensile}</dt>
                      <dd><ValueText value={`${item.tensile} MPa`} /></dd>
                    </div>
                    <div>
                      <dt>{copy.related.hdt}</dt>
                      <dd><ValueText value={`${item.hdt} degC`} /></dd>
                    </div>
                  </dl>
                </Link>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
