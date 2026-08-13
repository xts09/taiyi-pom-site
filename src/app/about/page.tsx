import type { Metadata } from "next";
import { serializeJsonLd } from "@/lib/jsonLd";
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
    "Material Testing & Documents": 1,
    "Repeat Production & Batch Records": 2,
  };

  return order[a.title] - order[b.title];
});

export default function AboutPage() {
  return (
    <main className={`${styles.page} ${styles.pageLight} ${styles.overviewPage}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(aboutJsonLd),
        }}
      />

      <AboutOverviewHero heroImage={heroImage} />

      <AboutIdentityPlate
        label="Yancheng, Jiangsu · Manufacturing since 2003"
        title="The manufacturer behind Taiyi Polymer."
        description="Taiyi Polymer is the public brand of Jiangsu Taiyi Nano Technology Co., Ltd., the legal entity operating the Yancheng facility."
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
                From trial batch to repeat production.
              </h2>
              <p>
                The same site prepares trial compounds, compares candidate
                materials and handles repeat production after a grade is
                confirmed.
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
