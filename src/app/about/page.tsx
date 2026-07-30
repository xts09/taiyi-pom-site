import type { Metadata } from "next";
import {
  AboutCredentials,
  AboutFacility,
  AboutOverviewHero,
  AboutOverviewInquiry,
  AboutProductionSupport,
} from "@/app/about/AboutSections";
import {
  availableDocuments,
  certifications,
  companyFigures,
  factoryImages,
  factoryProofRows,
  honors,
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
  "Learn about Jiangsu Taiyi Nano Technology Co., Ltd., a factory-based manufacturer focused on modified POM and selected engineering plastic compound solutions.";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Taiyi Plastic",
  description: aboutDescription,
  path: "/about",
  image: "/company-profile.webp",
  imageAlt: "Jiangsu Taiyi Nano factory and engineering plastic compounding operations",
});

const aboutJsonLd = [
  {
    ...createWebPageJsonLd({
      title: "About Us | Taiyi Plastic",
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

const heroIntro =
  "Developed and manufactured in Yancheng, China since 2003.";

const heroImage =
  factoryImages.find((image) => image.placement === "hero") ?? factoryImages[0];

const aboutEvidenceRows = factoryProofRows.filter(
  (row) => row.title !== "Production & Warehousing",
);

const aboutProcessImages = factoryImages.filter(
  (image) =>
    image.placement === "story" || image.label === "Production Equipment",
);

export default function AboutPage() {
  return (
    <main className={`${styles.page} ${styles.pageLight} ${styles.overviewPage}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <AboutOverviewHero
        heroImage={heroImage}
        intro={heroIntro}
      />

      <div className={styles.overviewCanvas}>
        <div className={`site-container ${styles.overviewRail}`}>
          <AboutFacility figures={companyFigures} rows={aboutEvidenceRows} />
          <AboutProductionSupport images={aboutProcessImages} />
          <AboutCredentials
            availableDocuments={availableDocuments}
            certifications={certifications}
            honors={honors}
          />
          <AboutOverviewInquiry />
        </div>
      </div>
    </main>
  );
}
