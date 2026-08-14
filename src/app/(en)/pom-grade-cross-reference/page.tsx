import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { catalogProducts } from "@/data/catalog";
import { crossReferenceCandidateGrades } from "@/data/gradeCrossReferences";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";
import {
  GradeCrossReferenceWorkspace,
  type WorkspaceCandidate,
  type WorkspaceFact,
  type WorkspaceFactKey,
} from "./GradeCrossReferenceWorkspace";
import styles from "./page.module.css";

const pageTitle = "POM Grade Cross-Reference Tool | Taiyi Polymer";
const pageDescription =
  "Search a current POM reference grade, review curated PLATFORM candidates, compare Taiyi catalog data, save a shortlist, and carry the context into technical evaluation.";
const pagePath = "/pom-grade-cross-reference";

export const metadata: Metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  indexable: false,
});

const propertyLabels: Record<WorkspaceFactKey, string> = {
  density: "Density",
  mfi: "Melt Flow Rate (MFI)",
  shrinkage: "Molding Shrinkage",
  tensileStrength: "Tensile Strength",
  elongation: "Tensile Strain at Break",
  flexuralModulus: "Flexural Modulus",
  charpy: "Charpy Notched Impact Strength",
  hdt: "Heat Deflection Temperature",
  volumeResistivity: "Volume Resistivity",
  surfaceResistivity: "Surface Resistivity",
};

const formatProperty = (
  product: (typeof catalogProducts)[number],
  label: string,
): WorkspaceFact | null => {
  const property = product.properties.find((item) => item.label === label);
  if (!property) return null;

  return {
    value: `${property.value}${property.unit ? ` ${property.unit}` : ""}`,
    ...(property.method ? { method: property.method } : {}),
  };
};

const workspaceCandidates: WorkspaceCandidate[] =
  crossReferenceCandidateGrades.map((grade) => {
    const product = catalogProducts.find((item) => item.grade === grade);

    if (!product) {
      throw new Error(`Missing catalog record for cross-reference grade ${grade}`);
    }

    const facts = Object.fromEntries(
      Object.entries(propertyLabels).map(([key, label]) => [
        key,
        formatProperty(product, label),
      ]),
    ) as Record<WorkspaceFactKey, WorkspaceFact | null>;

    return {
      description: product.description,
      documents: product.documents,
      documentState:
        product.tds.status === "pdf"
          ? `PDF TDS published${product.tds.revision ? ` · ${product.tds.revision}` : ""}`
          : "Web data page; no catalog PDF published",
      evidenceState: "Current Taiyi catalog data",
      facts,
      family: product.family,
      grade: product.grade,
      slug: product.slug,
    };
  });

const pageJsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "POM Grade Cross-Reference", path: pagePath },
  ]),
  createWebPageJsonLd({
    title: pageTitle,
    description: pageDescription,
    path: pagePath,
  }),
];

export default function PomGradeCrossReferencePage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageJsonLd) }}
      />
      <div className={styles.shell}>
        <PageHero
          variant="editorial"
          className={styles.hero}
          innerClassName={styles.heroInner}
          copyClassName={styles.heroCopy}
          title="Start with the grade you already know."
          description="Search a current reference, review why a PLATFORM grade may enter the shortlist, then compare the available Taiyi evidence before requesting technical evaluation."
        />

        <GradeCrossReferenceWorkspace candidates={workspaceCandidates} />
      </div>
    </main>
  );
}
