import type { Metadata } from "next";
import {
  AboutHero,
  AboutIdentity,
  AboutInquiryBridge,
  AboutManufacturingPath,
  AboutSnapshot,
  CredentialSupport,
} from "@/app/about/AboutSections";
import {
  availableDocuments,
  certifications,
  companyFigures,
  factoryImages,
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
  title: "About Us | Taiyi Nano",
  description: aboutDescription,
  path: "/about",
  image: "/company-profile.webp",
  imageAlt: "Jiangsu Taiyi Nano factory and engineering plastic compounding operations",
});

const aboutJsonLd = [
  {
    ...createWebPageJsonLd({
      title: "About Us | Taiyi Nano",
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
  "Jiangsu Taiyi Nano Technology Co., Ltd. operates factory-based compounding production in Yancheng, Jiangsu, China, focused on modified POM compounds with selected PA6, PA66, and PPA support for industrial molded parts.";

const heroImage =
  factoryImages.find((image) => image.placement === "hero") ?? factoryImages[0];

export default function AboutPage() {
  return (
    <main className={`${styles.page} ${styles.pageLight}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <AboutHero
        heroImage={heroImage}
        intro={heroIntro}
        title="About Us"
      />

      <section className={styles.identityBand}>
        <div className="site-container">
          <AboutIdentity />
        </div>
      </section>

      <section className={styles.snapshotBand}>
        <div className={`site-container ${styles.snapshotRail}`}>
          <AboutSnapshot figures={companyFigures} />
          <AboutManufacturingPath />
        </div>
      </section>

      <section className={styles.inquiryBand}>
        <div className={`site-container ${styles.inquiryRail}`}>
          <AboutInquiryBridge />
        </div>
      </section>

      <section className={styles.storyBand}>
        <div className={`site-container ${styles.contentRail}`}>
          <CredentialSupport
            availableDocuments={availableDocuments}
            certifications={certifications}
            honors={honors}
          />
        </div>
      </section>
    </main>
  );
}
