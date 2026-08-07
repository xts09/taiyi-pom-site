import type { Metadata } from "next";
import {
  AboutCompanySnapshot,
  AboutCredentials,
  AboutIdentityPlate,
  AboutOverviewHero,
  AboutOverviewInquiry,
  FactoryProofRows,
} from "@/app/about/AboutSections";
import {
  availableDocuments,
  certifications,
  companyFigures,
  companyQualifications,
  factoryImages,
  factoryProofRows,
} from "@/data/company";
import {
  companyName,
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
  siteUrl,
} from "@/lib/seo";
import styles from "./AboutPage.module.css";

const aboutDescription =
  "Taiyi Polymer is the public brand of Jiangsu Taiyi Nano Technology Co., Ltd., a Yancheng manufacturer focused on modified POM and selected PA6, PA66, and PPA compounds.";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Plastic Compound Manufacturer | Taiyi Polymer",
  description: aboutDescription,
  path: "/about",
  image: "/company-profile.webp",
  imageAlt: "Jiangsu Taiyi Nano factory and engineering plastic compounding operations",
});

const aboutJsonLd = [
  {
    ...createWebPageJsonLd({
      title: "Engineering Plastic Compound Manufacturer | Taiyi Polymer",
      description: aboutDescription,
      path: "/about",
      image: "/company-profile.webp",
    }),
    "@type": "AboutPage",
    about: {
      "@type": "Organization",
      name: companyName,
      url: siteUrl,
    },
  },
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ]),
];

const heroImage =
  factoryImages.find((image) => image.placement === "hero") ?? factoryImages[0];

const manufacturingProofRows = [...factoryProofRows].sort((a, b) => {
  const order: Record<string, number> = {
    "In-House Compounding": 0,
    "Material Evaluation & Documentation": 1,
    "Production & Batch Coordination": 2,
  };

  return order[a.title] - order[b.title];
});

export default function AboutPage() {
  return (
    <main className={`${styles.page} ${styles.pageLight} ${styles.overviewPage}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <AboutOverviewHero heroImage={heroImage} />

      <AboutIdentityPlate
        label="Yancheng, Jiangsu · Manufacturing since 2003"
        title="Modified POM at industrial scale."
        description="Modified POM is our core line, with selected PA6, PA66 and PPA compounds for broader project requirements. Grade screening, sample evaluation and batch documentation are coordinated through our Yancheng operation."
      />

      <div className={styles.overviewCanvas}>
        <AboutCompanySnapshot figures={companyFigures} />

        <section
          id="manufacturing"
          className={styles.manufacturingEvidence}
          aria-labelledby="manufacturing-evidence-title"
        >
          <div className="site-container">
            <header className={styles.overviewSectionHeader}>
              <h2 id="manufacturing-evidence-title">
                From trial compound to repeat order.
              </h2>
              <p>
                Compounding, material testing and batch documentation are
                coordinated at our Yancheng site around the selected grade and
                project requirements.
              </p>
            </header>
            <FactoryProofRows rows={manufacturingProofRows} />
          </div>
        </section>

        <div className={`site-container ${styles.overviewRail}`}>
          <AboutCredentials
            availableDocuments={availableDocuments}
            certifications={certifications}
            qualifications={companyQualifications}
          />
          <AboutOverviewInquiry />
        </div>
      </div>
    </main>
  );
}
