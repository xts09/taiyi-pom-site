import type { Metadata } from "next";
import {
  AboutHero,
  AboutInquiryBridge,
  FactoryProofRows,
  ManufacturingOverview,
} from "@/app/about/AboutSections";
import {
  companyCapabilities,
  factoryImages,
  factoryProofRows,
} from "@/data/company";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";
import styles from "../AboutPage.module.css";

const manufacturingDescription =
  "Review Taiyi Nano's factory-based engineering plastic compounding capabilities, including twin-screw extrusion, warehouse coordination, material evaluation, and document support.";

export const metadata: Metadata = createPageMetadata({
  title: "Manufacturing & Compounding Capabilities | Taiyi Nano",
  description: manufacturingDescription,
  path: "/about/manufacturing-capabilities",
  image: "/factory-extrusion.webp",
  imageAlt: "Taiyi Nano twin-screw extrusion production line",
});

const manufacturingJsonLd = [
  createWebPageJsonLd({
    title: "Manufacturing & Compounding Capabilities | Taiyi Nano",
    description: manufacturingDescription,
    path: "/about/manufacturing-capabilities",
    image: "/factory-extrusion.webp",
  }),
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Manufacturing & Compounding",
      path: "/about/manufacturing-capabilities",
    },
  ]),
];

const heroIntro =
  "Explore Taiyi Nano's factory-based compounding setup in Yancheng, including twin-screw extrusion, production and warehouse coordination, material evaluation, and project-specific document support.";

const heroImage =
  factoryImages.find((image) => image.label === "Compounding Workshop") ??
  factoryImages[0];

export default function ManufacturingCapabilitiesPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(manufacturingJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <AboutHero
        heroImage={heroImage}
        intro={heroIntro}
        title="Manufacturing Capability"
      />

      <section className={styles.manufacturingIntroBand}>
        <div className="site-container">
          <ManufacturingOverview capabilities={companyCapabilities} />
        </div>
      </section>

      <section className={styles.storyBand}>
        <div className={`site-container ${styles.contentRail}`}>
          <FactoryProofRows rows={factoryProofRows} />
        </div>
      </section>

      <section className={styles.inquiryBand}>
        <div className={`site-container ${styles.inquiryRail}`}>
          <AboutInquiryBridge />
        </div>
      </section>
    </main>
  );
}
