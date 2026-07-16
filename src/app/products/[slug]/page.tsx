import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import type { CSSProperties } from "react";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { UnitText, ValueText } from "@/components/UnitText";
import {
  createEngineeringTdsSlug,
  engineeringTdsDocuments,
  type EngineeringTdsDocument,
} from "@/data/engineeringTds";
import { products, type ProductProperty } from "@/data/products";
import { availableDocuments } from "@/data/company";
import {
  getProductListDescriptor,
  getProductListTitle,
  toDisplayTitle,
} from "@/lib/productDisplay";
import { getCategoryPath } from "@/lib/productCategories";
import {
  createBreadcrumbJsonLd,
  createEngineeringProductJsonLd,
  createEngineeringTdsPageMetadata,
  createProductJsonLd,
  createProductPageMetadata,
  getEngineeringTdsTitle,
} from "@/lib/seo";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const createGradePath = (grade: string) =>
  grade
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const getProductPathAliases = (product: (typeof products)[number]) =>
  Array.from(
    new Set([
      product.slug,
      createGradePath(product.grade),
      ...(product.aliases ?? []),
    ])
  );

export function generateStaticParams() {
  const productParams = products.flatMap((product) =>
    getProductPathAliases(product).map((slug) => ({
      slug,
    }))
  );

  const engineeringParams = engineeringTdsDocuments.map((document) => ({
    slug: createEngineeringTdsSlug(document),
  }));

  return [...productParams, ...engineeringParams];
}

const findProductBySlug = (slug: string) =>
  products.find((item) => getProductPathAliases(item).includes(slug));

const findEngineeringDocumentBySlug = (slug: string) =>
  engineeringTdsDocuments.find(
    (document) => createEngineeringTdsSlug(document) === slug
  );

const getEngineeringCategory = (document: EngineeringTdsDocument) =>
  `${document.family} Compound`;

const hasReferenceValue = (value?: string) =>
  Boolean(value && value !== "-" && value.toUpperCase() !== "N/A");

const formatReferenceFacts = (facts: string[]) => {
  if (facts.length <= 1) return facts[0] ?? "grade-specific property data";
  return `${facts.slice(0, -1).join(", ")}, and ${facts.at(-1)}`;
};

const toEngineeringProperties = (
  document: EngineeringTdsDocument
): ProductProperty[] =>
  document.properties.map((property) => ({
    label: property.label,
    value: property.value,
    unit: property.unit,
    method: property.method,
  }));

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  const engineeringDocument = product
    ? undefined
    : findEngineeringDocumentBySlug(slug);

  if (!product && !engineeringDocument) {
    return {
      title: "Page Not Found | Taiyi Nano",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  if (engineeringDocument) {
    return createEngineeringTdsPageMetadata(engineeringDocument);
  }

  if (!product) {
    return {
      title: "Page Not Found | Taiyi Nano",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createProductPageMetadata(product);
}

function EngineeringProductDetailPage({
  document,
}: {
  document: EngineeringTdsDocument;
}) {
  const category = getEngineeringCategory(document);
  const categoryUrl = getCategoryPath(category);
  const slug = createEngineeringTdsSlug(document);
  const title = getEngineeringTdsTitle(document);
  const properties = toEngineeringProperties(document);
  const applicationItems = document.applications
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const featureItems = [
    `${document.family} ${document.category} compound direction`,
    document.filler && document.filler !== "-"
      ? `${document.filler}% filler or reinforcement reference`
      : "Modified compound direction for project review",
    document.flammability && document.flammability !== "-"
      ? `${document.flammability} flammability reference`
      : "Grade-specific document support for review",
    "Final selection should be confirmed against part design and molding conditions",
  ];
  const relatedDocuments = engineeringTdsDocuments
    .filter(
      (item) =>
        item.grade !== document.grade &&
        item.family === document.family &&
        item.category === document.category
    )
    .slice(0, 3);
  const fallbackDocuments = engineeringTdsDocuments
    .filter(
      (item) => item.grade !== document.grade && item.family === document.family
    )
    .slice(0, 3);
  const documentsToShow =
    relatedDocuments.length > 0 ? relatedDocuments : fallbackDocuments;
  const productJsonLd = createEngineeringProductJsonLd(document);
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: category, path: categoryUrl },
    { name: title, path: `/products/${slug}` },
  ]);
  const snapshotItems = [
    {
      label: "Specific gravity",
      value: document.density,
      note: "ISO 1183",
    },
    {
      label: "Tensile stress",
      value: document.tensile,
      unit: "MPa",
      note: "ISO 527",
    },
    {
      label: "HDT 1.8 MPa",
      value: document.hdt,
      unit: "degC",
      note: "ISO 75",
    },
    {
      label: "Flammability",
      value: document.flammability,
      unit: "Class",
      note: "UL 94, 0.8 mm",
    },
  ].filter((item) => item.value);
  const gradeProfile = formatReferenceFacts(
    [
      hasReferenceValue(document.density)
        ? `specific gravity ${document.density}`
        : "",
      hasReferenceValue(document.tensile)
        ? `tensile stress ${document.tensile} MPa`
        : "",
      hasReferenceValue(document.hdt)
        ? `HDT ${document.hdt} degrees C`
        : "",
    ].filter(Boolean),
  );

  return (
    <main className="product-detail-page min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productJsonLd, breadcrumbJsonLd]),
        }}
      />
      <section className="product-detail-shell">
        <div className="product-detail-hero">
          <div className="product-detail-hero-card">
            <div className="product-detail-heading-row">
              <div className="product-detail-main-copy">
                <p className="product-detail-eyebrow">
                  {document.family} {document.category}
                </p>

                <h1>{document.grade}</h1>

                <p className="product-detail-summary">
                  {document.description} The recorded profile for this grade
                  lists {gradeProfile}. Confirm final suitability against the
                  molded part and processing conditions.
                </p>

                <div
                  className="product-detail-document-strip"
                  aria-label="Available material documents"
                >
                  <span>Documents</span>
                  <div>
                    {availableDocuments.map((availableDocument) => (
                      <span key={availableDocument}>{availableDocument}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="product-detail-hero-side">
                <div className="product-detail-hero-actions">
                  <Link href="/contact" className="product-hero-primary-action">
                    Discuss Requirement
                  </Link>
                  <Link
                    href="/technical-data-sheets"
                    className="product-hero-tds-link"
                  >
                    Search Data / TDS
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        <section
          className="product-detail-resource-panel"
          aria-label="Grade snapshot"
        >
          <div className="product-detail-resource-copy">
            <strong>Grade Snapshot</strong>
            <p>
              Review the reference values before confirming this material for a
              molded part or document request.
            </p>
          </div>

          <dl className="product-detail-snapshot-grid">
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

        <nav
          className="product-detail-topic-list product-detail-section-nav"
          aria-label="Product detail sections"
        >
          <a href="#typical-properties">Property Data</a>
          <a href="#material-fit">Material Fit</a>
          <a href="#evaluation-notes">Evaluation Notes</a>
        </nav>

        <article className="product-detail-sheet">
          <section
            id="typical-properties"
            className="property-table-section product-detail-table-section"
          >
            <div className="property-table-head">
              <p className="section-kicker mb-2">Typical Property Data</p>
              <h2 className="text-xl font-black text-slate-950">
                Reference Property Data
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[42rem] w-full text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    {["Property", "Value", "Unit", "Test Method"].map(
                      (label) => (
                        <th key={label} className="px-5 py-3 font-black">
                          {label}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80">
                  {properties.map((property) => (
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
          </section>

          <section
            id="material-fit"
            className="detail-columns product-detail-support-section"
          >
            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                Material Direction
              </h2>

              <ul className="space-y-3 text-slate-700">
                {featureItems.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                Typical Applications
              </h2>

              <ul className="space-y-3 text-slate-700">
                {applicationItems.map((application) => (
                  <li key={application} className="flex gap-3">
                    <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="evaluation-notes"
            className="evaluation-note reveal-up reveal-delay-1 mt-10"
          >
            <h2 className="mb-3 text-xl font-black text-slate-950">
              Material Evaluation Notes
            </h2>

            <p className="text-sm leading-6 text-slate-700">
              This grade page is for preliminary material selection. For
              project evaluation, please confirm the application, processing
              method, mold development stage, cavity count, target dimensional
              requirement, target performance requirements, current reference
              grade, document requirements, and estimated volume.
            </p>
          </section>

          <MaterialRecommendationCta
            kicker="Inquiry Preparation"
            title="Need a Recommendation for This Grade?"
            className="detail-cta reveal-up reveal-delay-2 mt-10"
            actionClassName="px-5"
          >
            <p>
              Contact us with your application, key performance requirements,
              mold stage, cavity count, dimensional concern, current material
              or reference grade, and estimated volume. We can recommend a
              suitable material direction for review.
            </p>
          </MaterialRecommendationCta>
        </article>

        <section className="product-detail-related mt-12">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="section-kicker mb-2">Grade Comparison</p>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                Compare Related {document.family} Grades
              </h2>
            </div>

            <Link
              href={categoryUrl}
              className="hidden text-sm font-extrabold text-blue-700 hover:text-blue-800 md:block"
            >
              View Category{" "}
              &rarr;
            </Link>
          </div>

          <div className="related-product-list stagger-list">
            {documentsToShow.map((item, index) => (
              <Link
                key={`${item.family}-${item.grade}`}
                href={`/products/${createEngineeringTdsSlug(item)}`}
                className="related-product-row"
                style={{ "--item-index": index } as CSSProperties}
              >
                <span className="related-product-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="related-product-main">
                  <p className="section-kicker mb-2">
                    {item.family} {item.category}
                  </p>
                  <h3>{item.grade}</h3>
                </div>

                <dl>
                  <div>
                    <dt>Tensile</dt>
                    <dd>
                      <ValueText value={`${item.tensile} MPa`} />
                    </dd>
                  </div>
                  <div>
                    <dt>HDT</dt>
                    <dd>
                      <ValueText value={`${item.hdt} degC`} />
                    </dd>
                  </div>
                </dl>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  const engineeringDocument = product
    ? undefined
    : findEngineeringDocumentBySlug(slug);

  if (product && slug !== product.slug) {
    permanentRedirect(`/products/${product.slug}`);
  }

  if (engineeringDocument) {
    return <EngineeringProductDetailPage document={engineeringDocument} />;
  }

  if (!product) {
    notFound();
  }

  const categoryUrl = getCategoryPath(product.category);

  const relatedProducts = products
    .filter(
      (item) =>
        item.slug !== product.slug && item.category === product.category
    )
    .slice(0, 3);

  const fallbackProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  const productsToShow =
    relatedProducts.length > 0 ? relatedProducts : fallbackProducts;

  const productJsonLd = createProductJsonLd(product);
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.category, path: categoryUrl },
    { name: product.title, path: `/products/${product.slug}` },
  ]);
  const getProperty = (label: string) =>
    product.properties.find((property) => property.label === label);
  const tensileProperty = getProperty("Tensile Strength");
  const hdtProperty = getProperty("Heat Deflection Temperature");
  const snapshotItems = [
    { label: "MFI", value: product.mfi, note: "Flow index" },
    {
      label: "Tensile",
      value: tensileProperty?.value,
      unit: tensileProperty?.unit,
      note: tensileProperty?.method ?? "ISO 527",
    },
    {
      label: "HDT",
      value: hdtProperty?.value,
      unit: hdtProperty?.unit,
      note: hdtProperty?.method ?? "ISO 75",
    },
    { label: "Color", value: product.color, note: "Available color" },
  ].filter((item) => item.value);
  const gradeProfile = formatReferenceFacts(
    [
      product.mfi ? `MFI ${product.mfi}` : "",
      tensileProperty
        ? `tensile strength ${tensileProperty.value} ${tensileProperty.unit}`
        : "",
      hdtProperty
        ? `HDT ${hdtProperty.value} ${
            hdtProperty.unit === "degC" ? "degrees C" : hdtProperty.unit
          }`
        : "",
    ].filter(Boolean),
  );

  return (
    <main className="product-detail-page min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productJsonLd, breadcrumbJsonLd]),
        }}
      />
      <section className="product-detail-shell">
        <div className="product-detail-hero">
          <div className="product-detail-hero-card">
            <div className="product-detail-heading-row">
              <div className="product-detail-main-copy">
                <p className="product-detail-eyebrow">{product.category}</p>

                <h1>{product.grade}</h1>

                <p className="product-detail-summary">
                  {product.description} The recorded profile for this grade
                  lists {gradeProfile}. Confirm final suitability against the
                  molded part and processing conditions.
                </p>

                <div
                  className="product-detail-document-strip"
                  aria-label="Available material documents"
                >
                  <span>Documents</span>
                  <div>
                    {availableDocuments.map((document) => (
                      <span key={document}>{document}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="product-detail-hero-side">
                <div className="product-detail-hero-actions">
                  <Link href="/contact" className="product-hero-primary-action">
                    Discuss Requirement
                  </Link>
                  <Link
                    href="/technical-data-sheets"
                    className="product-hero-tds-link"
                  >
                    Search Data / TDS
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        <section
          className="product-detail-resource-panel"
          aria-label="Grade snapshot"
        >
          <div className="product-detail-resource-copy">
            <strong>Grade Snapshot</strong>
            <p>
              Check the core values and review sections before confirming this
              material for a molded part.
            </p>
          </div>

          <dl className="product-detail-snapshot-grid">
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

        <nav
          className="product-detail-topic-list product-detail-section-nav"
          aria-label="Product detail sections"
        >
          <a href="#typical-properties">Property Data</a>
          <a href="#material-fit">Material Fit</a>
          <a href="#evaluation-notes">Evaluation Notes</a>
        </nav>

        <article className="product-detail-sheet">
          {product.properties.length > 0 ? (
            <section
              id="typical-properties"
              className="property-table-section product-detail-table-section"
            >
              <div className="property-table-head">
                <p className="section-kicker mb-2">Typical Property Data</p>
                <h2 className="text-xl font-black text-slate-950">
                  Typical Physical Properties
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[42rem] w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      {["Property", "Value", "Unit", "Test Method"].map(
                        (label) => (
                          <th key={label} className="px-5 py-3 font-black">
                            {label}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    {product.properties.map((property) => (
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
            </section>
          ) : (
            <section className="evaluation-note reveal-up reveal-delay-1 mt-10">
              <p className="section-kicker mb-2">Project-Based Property Review</p>
              <h2 className="mb-3 text-xl font-black text-slate-950">
                Property Data Confirmed by Requirement
              </h2>

              <p className="text-sm leading-6 text-slate-700">
                This material direction is prepared as a project-based compound.
                Typical property targets, friction requirements, shrinkage or
                warpage targets, color, and document support should be confirmed
                against the molded part, tooling plan, working condition, and
                current reference material.
              </p>
            </section>
          )}

          <section
            id="material-fit"
            className="detail-columns product-detail-support-section"
          >
            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                Key Features
              </h2>

              <ul className="space-y-3 text-slate-700">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{toDisplayTitle(feature)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                Typical Applications
              </h2>

              <ul className="space-y-3 text-slate-700">
                {product.applications.map((application) => (
                  <li key={application} className="flex gap-3">
                    <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{toDisplayTitle(application)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="evaluation-notes"
            className="evaluation-note reveal-up reveal-delay-1 mt-10"
          >
            <h2 className="mb-3 text-xl font-black text-slate-950">
              Material Evaluation Notes
            </h2>

            <p className="text-sm leading-6 text-slate-700">
              This product page is for preliminary material selection. For
              project evaluation, please confirm the application, processing
              method, mold development stage, cavity count, target shrinkage or
              dimensional requirement, target performance requirements, current
              reference grade, document requirements, and estimated volume.
            </p>
          </section>

          <MaterialRecommendationCta
            kicker="Inquiry Preparation"
            title="Need a Recommendation for This Grade?"
            className="detail-cta reveal-up reveal-delay-2 mt-10"
            actionClassName="px-5"
          >
            <p>
              Contact us with your application, key performance requirements,
              mold stage, cavity count, shrinkage or warpage concern, current
              material or reference grade, and estimated volume. We can
              recommend a suitable material direction for review.
            </p>
          </MaterialRecommendationCta>
        </article>

        <section className="product-detail-related mt-12">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="section-kicker mb-2">Grade Comparison</p>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                Compare Related POM Grades
              </h2>
            </div>

            <Link
              href={categoryUrl}
              className="hidden text-sm font-extrabold text-blue-700 hover:text-blue-800 md:block"
            >
              View Category{" "}
              &rarr;
            </Link>
          </div>

          <div className="related-product-list stagger-list">
            {productsToShow.map((item, index) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="related-product-row"
                style={{ "--item-index": index } as CSSProperties}
              >
                <span className="related-product-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="related-product-main">
                  <p className="section-kicker mb-2">
                    {getProductListDescriptor(item)}
                  </p>
                  <h3>{getProductListTitle(item)}</h3>
                </div>

                <dl>
                  <div>
                    <dt>MFI</dt>
                    <dd>
                      <ValueText value={item.mfi} />
                    </dd>
                  </div>
                  <div>
                    <dt>Color</dt>
                    <dd>{item.color}</dd>
                  </div>
                </dl>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
