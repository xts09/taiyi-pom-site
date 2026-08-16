import Link from "next/link";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UnitText, ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { availableDocuments } from "@/data/company";
import type { Product } from "@/data/products";
import type { LocalizedUrlSegment } from "@/i18n/config";
import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";
import { xt100FeaturedPropertyLabels } from "@/i18n/productFunnelTypes";
import {
  getLocalizedHref,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createProductJsonLd,
} from "@/lib/seo";

type LocalizedProductGradePageProps = {
  product: Product;
  copy: ProductFunnelMessages["grade"];
  categoryLabel: string;
  categorySourcePath: string;
  messages: ProductFunnelMessages;
  localeSegment: LocalizedUrlSegment;
  sourcePath: ReleasedSourcePath;
};

export function LocalizedProductGradePage({
  product,
  copy,
  categoryLabel,
  categorySourcePath,
  messages,
  localeSegment,
  sourcePath,
}: LocalizedProductGradePageProps) {
  const localizedPath = (path: string) => getLocalizedHref(path, localeSegment);
  const productPath = localizedPath(sourcePath);
  const categoryPath = localizedPath(categorySourcePath);
  const technicalDataPath = localizedPath("/technical-data-sheets");
  const sampleHref = localizedPath(
    createContactHref({
      grade: product.grade,
      intent: "sample",
      material: categoryLabel,
      source: messages.common.contactSourceGrade,
    }),
  );
  const evaluationHref = localizedPath(
    createContactHref({
      grade: product.grade,
      intent: "grade-evaluation",
      material: categoryLabel,
      source: messages.common.contactSourceGrade,
    }),
  );
  const getProperty = (label: string) =>
    product.properties.find((property) => property.label === label);
  const tensileProperty = getProperty("Tensile Strength");
  const hdtProperty = getProperty("Heat Deflection Temperature");
  const featuredProperties = xt100FeaturedPropertyLabels
    .map((label) => {
      const property = getProperty(label);
      return property
        ? {
            ...property,
            localizedLabel: copy.properties.labels[label],
          }
        : undefined;
    })
    .filter((property): property is NonNullable<typeof property> => Boolean(property));
  const localizeMethod = (method?: string) =>
    method
      ?.replace("Internal Method", copy.properties.internalMethod)
      .replace("Injection Molding", copy.properties.injectionMolding) ?? "-";
  const localizedProperties = featuredProperties.map((property) => ({
    label: property.localizedLabel,
    value: property.value,
    unit: property.unit,
    method: localizeMethod(property.method),
  }));
  const snapshotItems = [
    {
      label: copy.snapshot.mfi,
      value: product.mfi,
      note: copy.snapshot.flowNote,
    },
    {
      label: copy.snapshot.tensile,
      value: tensileProperty?.value,
      unit: tensileProperty?.unit,
      note: tensileProperty?.method ?? "ISO 527",
    },
    {
      label: copy.snapshot.hdt,
      value: hdtProperty?.value,
      unit: hdtProperty?.unit,
      note: hdtProperty?.method ?? "ISO 75",
    },
    {
      label: copy.snapshot.color,
      value: copy.snapshot.colorValue,
      note: copy.snapshot.colorValue,
    },
  ].filter((item) => item.value);
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: messages.common.home, path: localizedPath("/") },
      { name: messages.common.products, path: localizedPath("/products") },
      { name: categoryLabel, path: categoryPath },
      { name: product.grade, path: productPath },
    ]),
    createProductJsonLd({
      name: `${product.grade} ${categoryLabel}`,
      grade: product.grade,
      description: copy.metadata.description,
      category: categoryLabel,
      path: productPath,
      color: copy.snapshot.colorValue,
      properties: localizedProperties,
    }),
  ];

  return (
    <main className="product-detail-page product-detail-page--campaign-grade min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="product-detail-shell">
        <Breadcrumbs
          items={[
            { label: messages.common.home, href: localizedPath("/") },
            { label: messages.common.products, href: localizedPath("/products") },
            { label: categoryLabel, href: categoryPath },
            { label: copy.breadcrumb },
          ]}
        />

        <div className="product-detail-hero">
          <div className="product-detail-hero-card reveal-up">
            <div className="product-detail-heading-row">
              <div className="product-detail-main-copy stagger-list">
                <p className="product-detail-eyebrow">{copy.eyebrow}</p>
                <h1>{product.grade}</h1>
                <p className="product-detail-positioning">{copy.positioning}</p>
                <p className="product-detail-summary">{copy.summary}</p>

                <div className="product-detail-hero-bottom-row stagger-list">
                  <div
                    className="product-detail-document-strip stagger-list"
                    aria-label={copy.documentSupport}
                  >
                    <span>{copy.documentSupport}</span>
                    <div>
                      {availableDocuments.map((document) => (
                        <span key={document}>{document}</span>
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
                        <Link href={sampleHref}>{copy.sampleAction}</Link>
                      </Button>
                      <Button
                        asChild
                        size="productDetailHero"
                        variant="productDetailSecondary"
                      >
                        <Link href={evaluationHref}>{copy.evaluationAction}</Link>
                      </Button>
                    </div>
                    <p className="product-detail-hero-action-note">
                      {copy.independentNote}
                    </p>
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
              {snapshotItems.map((item) => (
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
                  {localizedProperties.map((property) => (
                    <tr key={property.label} className="hover:bg-cyan-50/60">
                      <td className="px-5 py-3 font-bold text-slate-950">
                        {property.label}
                      </td>
                      <td className="px-5 py-3 font-black text-blue-700">
                        <ValueText value={property.value} />
                      </td>
                      <td className="px-5 py-3 text-slate-700">
                        <UnitText unit={property.unit} />
                      </td>
                      <td className="px-5 py-3 text-slate-600">
                        {property.method}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="product-detail-core-data-note">
              <p>{copy.properties.body}</p>
              <Link href={evaluationHref}>{copy.properties.requestAction}</Link>
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
              href={technicalDataPath}
              className="mt-4 inline-flex text-sm font-extrabold text-blue-700"
            >
              {messages.common.technicalData} &rarr;
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
                <Link href={evaluationHref}>{copy.inquiry.action}</Link>
              </Button>
            }
          >
            <p>{copy.inquiry.body}</p>
          </ActionPanel>
        </article>
      </section>
    </main>
  );
}
