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
  "Review Taiyi Polymer's factory-based engineering plastic compounding capabilities, including twin-screw extrusion, warehouse coordination, material evaluation, and document support.";

export const metadata: Metadata = createPageMetadata({
  title: "Manufacturing & Compounding Capabilities | Taiyi Polymer",
  description: manufacturingDescription,
  path: "/about/manufacturing-capabilities",
  image: "/factory-extrusion.webp",
  imageAlt: "Taiyi Polymer twin-screw extrusion production line",
});

const manufacturingJsonLd = [
  createWebPageJsonLd({
    title: "Manufacturing & Compounding Capabilities | Taiyi Polymer",
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
  "See how in-house compounding, material evaluation and document support move a grade from trial to repeat production.";

const heroImage =
  factoryImages.find((image) => image.label === "Extrusion Lines") ??
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
        title="Manufacturing Capabilities"
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
