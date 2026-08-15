import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import type { CSSProperties } from "react";
import { serializeJsonLd } from "@/lib/jsonLd";
import { createContactHref } from "@/lib/contactContext";
import { ActionPanel } from "@/components/ActionPanel";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UnitText, ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import {
  getCanonicalProductCategory,
  getCategoryPath,
  pomSubcategoryLabels,
} from "@/lib/productCategories";
import { getPublicCoreProperties } from "@/lib/productPropertyVisibility";
import { selectRelatedGrades } from "@/lib/relatedGrades";
import {
  createBreadcrumbJsonLd,
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

type GradeCampaignProfile = {
  eyebrow: string;
  positioning: string;
  mfiNote: string;
  screeningCopy: string;
};

const gradeCampaignProfiles: Record<string, GradeCampaignProfile> = {
  "etm750-base-pom-resin": {
    eyebrow: "Very High-Flow POM · Injection Molding",
    positioning:
      "Thin-wall and flow-sensitive parts, screened with published grade data and confirmed through sample molding.",
    mfiNote: "Very high-flow profile",
    screeningCopy:
      "Start with the published values, then review the part, process, and document requirements before sampling.",
  },
  "xt-100-base-pom-resin": {
    eyebrow: "Low-Density High-Impact POM · Injection Molding",
    positioning:
      "A low-density, high-impact POM screening direction for precision and general injection-molded parts.",
    mfiNote: "Low-density high-impact profile",
    screeningCopy:
      "Start with the published density and impact data, then review part geometry, process conditions, and document requirements before sampling.",
  },
  "egb25-glass-bead-pom": {
    eyebrow: "25% Glass Bead Filled POM · Injection Molding",
    positioning:
      "A glass-bead-filled POM screening direction for injection-molded parts requiring balanced longitudinal and transverse shrinkage review.",
    mfiNote: "Glass-bead-filled profile",
    screeningCopy:
      "Start with the published shrinkage data, then review part geometry, molding orientation, process conditions, and document requirements before sampling.",
  },
  "egh502h-glass-fiber-pom": {
    eyebrow: "25% Glass Fiber Reinforced POM · Injection Molding",
    positioning:
      "A glass-fiber-reinforced POM screening direction for molded parts requiring high rigidity, creep-resistance, and low-shrinkage review.",
    mfiNote: "Reinforced flow profile",
    screeningCopy:
      "Start with the published rigidity, shrinkage, and thermal data, then review part geometry, load condition, process conditions, and document requirements before sampling.",
  },
  "ehi402t-high-impact-pom": {
    eyebrow: "High-Impact POM · Injection Molding",
    positioning:
      "A high-impact POM screening direction for functional injection-molded parts requiring toughness and low-temperature performance review.",
    mfiNote: "Toughness-focused flow profile",
    screeningCopy:
      "Start with the published grade data, then review part geometry, impact target, process conditions, and document requirements before sampling.",
  },
  "edr180-high-impact-pom": {
    eyebrow: "High-Impact POM · Injection Molding",
    positioning:
      "A high-impact POM screening direction for functional injection-molded parts requiring toughness and low-temperature performance review.",
    mfiNote: "High-impact flow profile",
    screeningCopy:
      "Start with the published grade data, then review part geometry, impact target, process conditions, and document requirements before sampling.",
  },
  "ecn1003b-conductive-pom": {
    eyebrow: "Conductive POM · Injection Molding",
    positioning:
      "A conductive POM screening direction for injection-molded parts requiring resistivity and charge-control performance review.",
    mfiNote: "Conductive flow profile",
    screeningCopy:
      "Start with the published resistivity data, then review part geometry, electrical target, process conditions, and document requirements before sampling.",
  },
  "etm450-base-pom-resin": {
    eyebrow: "High-Flow POM · Injection Molding",
    positioning:
      "A high-flow POM screening direction for precision injection-molded parts requiring flow and mechanical-profile review.",
    mfiNote: "High-flow profile",
    screeningCopy:
      "Start with the published flow and mechanical data, then review part geometry, process conditions, and document requirements before sampling.",
  },
  "epaf100a-high-wear-resistant-pom": {
    eyebrow: "Wear-Resistant POM · Injection Molding",
    positioning:
      "An aramid-fiber-modified POM screening direction for injection-molded parts requiring wear, stiffness, and thermal-profile review.",
    mfiNote: "Wear-focused flow profile",
    screeningCopy:
      "Start with the published wear, stiffness, and thermal data, then review the mating surface, load, speed, process conditions, and document requirements before sampling.",
  },
  "etm090u-uv-resistant-pom": {
    eyebrow: "UV-Resistant POM · Injection Molding",
    positioning:
      "A UV-resistant POM screening direction for molded parts requiring material, color, and exposure-condition review.",
    mfiNote: "UV-resistant flow profile",
    screeningCopy:
      "Start with the published grade data, then review the exposure condition, color, part geometry, process conditions, and document requirements before sampling.",
  },
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
      title: "Page Not Found | Taiyi Polymer",
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
      title: "Page Not Found | Taiyi Polymer",
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
  const contactHref = createContactHref({
    grade: document.grade,
    material: `${document.family} Compounds`,
    source: "Product grade",
  });
  const properties = toEngineeringProperties(document);
  const coreProperties = getPublicCoreProperties(properties);
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
  const documentsToShow = selectRelatedGrades({
    items: engineeringTdsDocuments,
    current: document,
    getId: createEngineeringTdsSlug,
    isPrimaryPeer: (item, current) =>
      item.family === current.family && item.category === current.category,
    isFallbackPeer: (item, current) => item.family === current.family,
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: category, path: categoryUrl },
    { name: document.grade, path: `/products/${slug}` },
  ]);
  const productJsonLd = createProductJsonLd({
    name: title,
    grade: document.grade,
    description: document.description,
    category,
    path: `/products/${slug}`,
    properties,
  });
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
          __html: serializeJsonLd([breadcrumbJsonLd, productJsonLd]),
        }}
      />
      <section className="product-detail-shell">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category, href: categoryUrl },
            { label: document.grade },
          ]}
        />
        <div className="product-detail-hero">
          <div className="product-detail-hero-card reveal-up">
            <div className="product-detail-heading-row">
              <div className="product-detail-main-copy stagger-list">
                <p className="product-detail-eyebrow">
                  {document.family} {document.category}
                </p>

                <h1>{document.grade}</h1>

                <p className="product-detail-summary">
                  {document.description} The recorded profile for this grade
                  lists {gradeProfile}. Confirm final suitability against the
                  molded part and processing conditions.
                </p>

                <div className="product-detail-hero-bottom-row stagger-list">
                  <div
                    className="product-detail-document-strip stagger-list"
                    aria-label="Material document support"
                  >
                    <span>Document Support</span>
                    <div>
                      {availableDocuments.map((availableDocument) => (
                        <span key={availableDocument}>{availableDocument}</span>
                      ))}
                    </div>
                    <p>REACH / RoHS support available upon request.</p>
                  </div>

                  <div className="product-detail-hero-side stagger-list">
                    <div className="product-detail-hero-actions stagger-list">
                      <Button
                        asChild
                        size="productDetailHero"
                        variant="productDetailPrimary"
                      >
                        <Link href={contactHref}>Discuss Your Application</Link>
                      </Button>
                      <Button
                        asChild
                        size="productDetailHero"
                        variant="productDetailSecondary"
                      >
                        <Link href="/technical-data-sheets">
                          Find Grade Data & TDS
                        </Link>
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
            aria-label="Grade snapshot"
          >
            <div className="product-detail-resource-copy stagger-list">
              <strong>Grade Snapshot</strong>
              <p>
                Review the reference values before confirming this material for a
                molded part or document request.
              </p>
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
              <p className="section-kicker mb-2">Core Selection Data</p>
              <h2 className="text-xl font-black text-slate-950">
                Reference Values for Early Screening
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="product-detail-core-property-table w-full text-left text-sm">
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
                  {coreProperties.map((property) => (
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
              <p>
                Core comparison values are shown here. Full property,
                processing, impact, electrical, and project-specific data are
                provided through TDS or project review.
              </p>
              <Link href={contactHref}>Request Full TDS</Link>
            </div>
          </section>

          <section
            id="material-fit"
            className="detail-columns product-detail-support-section"
          >
            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                Grade Characteristics
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

          <ActionPanel
            variant="recommendation"
            title="Prepare a Grade Evaluation"
            className="detail-cta reveal-up reveal-delay-2 mt-10"
            eyebrow="Inquiry Preparation"
            eyebrowClassName="section-kicker mb-3"
            action={
              <Button
                asChild
                variant="inverse"
                className="h-auto px-5 py-3 text-sm"
              >
                <Link href={contactHref}>Discuss Your Application</Link>
              </Button>
            }
          >
            <p>
              Send the application, key performance requirements, mold stage,
              cavity count, dimensional concern, current material or reference
              grade, document needs, and estimated volume. These inputs identify
              the next grade, document, and sample steps for the project.
            </p>
          </ActionPanel>
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

  const campaignProfile = gradeCampaignProfiles[product.slug];
  const categoryUrl = getCategoryPath(product.category);
  const contactMaterial =
    pomSubcategoryLabels[getCanonicalProductCategory(product.category)] ??
    product.category;
  const productContactHref = createContactHref({
    grade: product.grade,
    material: contactMaterial,
    source: "Product grade",
  });
  const sampleRequestHref = campaignProfile
    ? createContactHref({
        grade: product.grade,
        intent: "sample",
        material: contactMaterial,
        source: "Product grade",
      })
    : productContactHref;
  const gradeEvaluationHref = campaignProfile
    ? createContactHref({
        grade: product.grade,
        intent: "grade-evaluation",
        material: contactMaterial,
        source: "Product grade",
      })
    : "/technical-data-sheets";

  const productsToShow = selectRelatedGrades({
    items: products,
    current: product,
    getId: (item) => item.slug,
    isPrimaryPeer: (item, current) => item.category === current.category,
    isFallbackPeer: () => true,
  });

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.category, path: categoryUrl },
    { name: product.grade, path: `/products/${product.slug}` },
  ]);
  const productJsonLd = createProductJsonLd({
    name: product.title,
    grade: product.grade,
    description: product.description,
    category: product.category,
    path: `/products/${product.slug}`,
    color: product.color,
    properties: product.properties,
  });
  const getProperty = (label: string) =>
    product.properties.find((property) => property.label === label);
  const coreProperties = getPublicCoreProperties(product.properties);
  const tensileProperty = getProperty("Tensile Strength");
  const hdtProperty = getProperty("Heat Deflection Temperature");
  const snapshotItems = [
    {
      label: "MFI",
      value: product.mfi,
      note: campaignProfile?.mfiNote ?? "Flow index",
    },
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
    <main
      className={`product-detail-page min-h-screen text-slate-900${
        campaignProfile ? " product-detail-page--campaign-grade" : ""
      }`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([breadcrumbJsonLd, productJsonLd]),
        }}
      />
      <section className="product-detail-shell">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.category, href: categoryUrl },
            { label: product.grade },
          ]}
        />
        <div className="product-detail-hero">
          <div className="product-detail-hero-card reveal-up">
            <div className="product-detail-heading-row">
              <div className="product-detail-main-copy stagger-list">
                <p className="product-detail-eyebrow">
                  {campaignProfile?.eyebrow ?? product.category}
                </p>

                <h1>{product.grade}</h1>

                {campaignProfile ? (
                  <p className="product-detail-positioning">
                    {campaignProfile.positioning}
                  </p>
                ) : null}

                <p className="product-detail-summary">
                  {campaignProfile ? (
                    <>
                      {product.description} The recorded profile lists{" "}
                      {gradeProfile}. Use these values for early screening, then
                      confirm suitability with the actual part, tooling, and
                      processing conditions.
                    </>
                  ) : (
                    <>
                      {product.description} The recorded profile for this grade
                      lists {gradeProfile}. Confirm final suitability against
                      the molded part and processing conditions.
                    </>
                  )}
                </p>

                <div className="product-detail-hero-bottom-row stagger-list">
                  <div
                    className="product-detail-document-strip stagger-list"
                    aria-label="Material document support"
                  >
                    <span>Document Support</span>
                    <div>
                      {availableDocuments.map((document) => (
                        <span key={document}>{document}</span>
                      ))}
                    </div>
                    <p>REACH / RoHS support available upon request.</p>
                  </div>

                  <div className="product-detail-hero-side stagger-list">
                    <div className="product-detail-hero-actions stagger-list">
                  <Button
                    asChild
                    size="productDetailHero"
                    variant="productDetailPrimary"
                  >
                    <Link href={sampleRequestHref}>
                      {campaignProfile
                        ? `Request an ${product.grade} Sample`
                        : "Discuss Your Application"}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="productDetailHero"
                    variant="productDetailSecondary"
                  >
                    <Link href={gradeEvaluationHref}>
                      {campaignProfile
                        ? "Ask for Grade Evaluation"
                        : "Find Grade Data & TDS"}
                    </Link>
                  </Button>
                </div>
                {campaignProfile ? (
                  <p className="product-detail-hero-action-note">
                    Independent Taiyi grade · Sample testing recommended
                  </p>
                ) : null}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Card asChild variant="evidence">
          <section
            className="product-detail-resource-panel reveal-up"
            aria-label="Grade snapshot"
          >
            <div className="product-detail-resource-copy stagger-list">
              <strong>
                {campaignProfile
                  ? `${product.grade} Screening Profile`
                  : "Grade Snapshot"}
              </strong>
              <p>
                {campaignProfile?.screeningCopy ??
                  "Check the core values and review sections before confirming this material for a molded part."}
              </p>
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
          aria-label="Product detail sections"
        >
          <a href="#typical-properties">Property Data</a>
          <a href="#material-fit">Material Fit</a>
          {campaignProfile ? <a href="#evaluation-path">Evaluation Path</a> : null}
          <a href="#evaluation-notes">Evaluation Notes</a>
        </nav>

        <article className="product-detail-sheet">
          {coreProperties.length > 0 ? (
            <section
              id="typical-properties"
              className="property-table-section product-detail-table-section"
            >
              <div className="property-table-head">
                <p className="section-kicker mb-2">Core Selection Data</p>
                <h2 className="text-xl font-black text-slate-950">
                  Reference Values for Early Screening
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="product-detail-core-property-table w-full text-left text-sm">
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
                    {coreProperties.map((property) => (
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
                <p>
                  Core comparison values are shown here. Full property,
                  processing, impact, electrical, and project-specific data are
                  provided through TDS or project review.
                </p>
                <Link href={productContactHref}>Request Full TDS</Link>
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

          {campaignProfile ? (
            <section
              id="evaluation-path"
              className="product-detail-evaluation-path"
              aria-labelledby="evaluation-path-title"
            >
              <div className="product-detail-evaluation-path-intro">
                <p className="section-kicker">Grade Evaluation Path</p>
                <h2 id="evaluation-path-title">
                  Move from data screening to a molding decision
                </h2>
                <p>
                  {product.grade}{" "}is offered as a candidate grade for
                  evaluation. Final approval should follow the customer&apos;s own
                  molding trial and part requirements.
                </p>
              </div>

              <ol className="product-detail-evaluation-steps">
                <li>
                  <span>01</span>
                  <strong>Share the application</strong>
                  <p>Part geometry, process, current material, and key targets.</p>
                </li>
                <li>
                  <span>02</span>
                  <strong>Review data and sample</strong>
                  <p>Confirm documents, grade direction, color, and sample needs.</p>
                </li>
                <li>
                  <span>03</span>
                  <strong>Validate in your process</strong>
                  <p>Check filling, dimensions, appearance, and end-use performance.</p>
                </li>
              </ol>
            </section>
          ) : null}

          <section
            id="evaluation-notes"
            className="evaluation-note reveal-up reveal-delay-1 mt-10"
          >
            <h2 className="mb-3 text-xl font-black text-slate-950">
              Material Evaluation Notes
            </h2>

            <p className="text-sm leading-6 text-slate-700">
              {campaignProfile
                ? `This page supports preliminary ${product.grade} screening. Suitability is not automatic: part design, mold construction, processing conditions, performance targets, and customer certification can change the result. Request the current technical documents and confirm the grade through sampling and application testing.`
                : "This product page is for preliminary material selection. For project evaluation, please confirm the application, processing method, mold development stage, cavity count, target shrinkage or dimensional requirement, target performance requirements, current reference grade, document requirements, and estimated volume."}
            </p>
          </section>

          <ActionPanel
            variant="recommendation"
            eyebrow={
              campaignProfile
                ? `${product.grade} Project Review`
                : "Inquiry Preparation"
            }
            title={
              campaignProfile
                ? `Ready to screen ${product.grade} for your molded part?`
                : "Prepare a Grade Evaluation"
            }
            className="detail-cta reveal-up reveal-delay-2 mt-10"
            eyebrowClassName="section-kicker mb-3"
            action={
              <Button
                asChild
                variant="inverse"
                className="h-auto px-5 py-3 text-sm"
              >
                <Link
                  href={campaignProfile ? gradeEvaluationHref : productContactHref}
                >
                  {campaignProfile
                    ? `Ask for ${product.grade} Evaluation`
                    : "Discuss Your Application"}
                </Link>
              </Button>
            }
          >
            <p>
              {campaignProfile
                ? "Send the application, processing method, current material, target properties, color, estimated volume, and required documents. We can prepare the grade review and sample discussion."
                : "Send the application, key performance requirements, mold stage, cavity count, shrinkage or warpage concern, current material or reference grade, document needs, and estimated volume. These inputs identify the next grade, document, and sample steps for the project."}
            </p>
          </ActionPanel>
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
