import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConductiveCompoundsExplorer } from "@/components/ConductiveCompoundsExplorer";
import {
  conductiveCompounds,
  conductiveMatrices,
  conductiveSeries,
} from "@/data/conductiveCompounds";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  siteUrl,
} from "@/lib/seo";
import styles from "@/components/ConductiveCompounds.module.css";

const path = "/conductive-antistatic-compounds";
const heroImage =
  "/generated/landing/conductive-antistatic-pom-functional-components.png";

export const metadata: Metadata = createPageMetadata({
  title: "Conductive & Antistatic Plastic Compounds | Taiyi Nano",
  description:
    "Compare Taiyi carbon-nanotube antistatic and carbon-fiber conductive compound directions across ABS, PC, POM, PA6, PA66, PPS, TPU, and other polymer matrices.",
  path,
  image: heroImage,
});

const cntGradeCount = conductiveCompounds.filter(
  (compound) => compound.technology === "cnt",
).length;
const cfGradeCount = conductiveCompounds.filter(
  (compound) => compound.technology === "cf",
).length;

const jsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Conductive and Antistatic Compounds", path },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Conductive and Antistatic Plastic Compounds",
    description:
      "Cross-material directory of carbon-nanotube antistatic and carbon-fiber conductive compound directions.",
    url: `${siteUrl}${path}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: conductiveCompounds.length,
      itemListElement: conductiveCompounds.map((compound, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: compound.grade,
      })),
    },
  },
];

export default function ConductiveAntistaticCompoundsPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.hero}>
        <Image
          src={heroImage}
          alt="Black precision molded functional plastic components"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />

        <div className={`${styles.rail} ${styles.heroRail}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroKicker}>
              Static-Control Engineering Plastics
            </p>
            <h1>Conductive and Antistatic Plastic Compounds</h1>
            <p>
              Compare carbon-nanotube permanent antistatic and carbon-fiber
              conductive directions across multiple engineering-plastic
              matrices before requesting grade data or samples.
            </p>
            <div className={styles.heroActions}>
              <Link href="#grade-explorer" className={styles.primaryAction}>
                Explore Grades
              </Link>
              <Link href="/contact" className={styles.secondaryAction}>
                Send Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.metricsBand} aria-label="Series summary">
        <div className={`${styles.rail} ${styles.metricsGrid}`}>
          <div>
            <strong>{conductiveMatrices.length}</strong>
            <span>Material matrices</span>
          </div>
          <div>
            <strong>{cntGradeCount}</strong>
            <span>CNT directions</span>
          </div>
          <div>
            <strong>{cfGradeCount}</strong>
            <span>Carbon-fiber directions</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Modification systems</span>
          </div>
        </div>
      </section>

      <section className={styles.overviewBand}>
        <div className={styles.rail}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>Series Architecture</p>
              <h2>One directory, two material technologies</h2>
            </div>
            <p>
              Start with the electrical target and polymer matrix. Final
              selection still requires the specified test method, molded-part
              geometry, conditioning, and mechanical-property review.
            </p>
          </div>

          <div className={styles.seriesGrid}>
            <article>
              <span className={styles.seriesNumber}>01</span>
              <p className={styles.seriesTag}>CNT / Permanent Antistatic</p>
              <h3>{conductiveSeries.cnt.title}</h3>
              <p>{conductiveSeries.cnt.description}</p>
              <ul>
                <li>Non-blooming and non-migrating modification direction</li>
                <li>Low-specific-gravity catalogue positioning</li>
                <li>R35 and R610 target bands</li>
              </ul>
            </article>

            <article>
              <span className={styles.seriesNumber}>02</span>
              <p className={styles.seriesTag}>CF / Conductive</p>
              <h3>{conductiveSeries.cf.title}</h3>
              <p>{conductiveSeries.cf.description}</p>
              <ul>
                <li>Carbon-fiber conductive modification direction</li>
                <li>Thermal-conductive review path</li>
                <li>R35 and R68 target bands</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.namingBand}>
        <div className={`${styles.rail} ${styles.namingLayout}`}>
          <div>
            <p className={styles.kicker}>CNT Grade Naming</p>
            <h2>Read the new code in three parts</h2>
            <p>
              Descriptive CNT grade codes identify the polymer matrix,
              modification system, and catalogue target band.
            </p>
          </div>
          <div className={styles.codeAnatomy} aria-label="POM CNT R35 code anatomy">
            <div>
              <strong>POM</strong>
              <span>Polymer matrix</span>
            </div>
            <span aria-hidden="true">–</span>
            <div>
              <strong>CNT</strong>
              <span>Carbon nanotube</span>
            </div>
            <span aria-hidden="true">–</span>
            <div>
              <strong>R35</strong>
              <span>10³–10⁵ band</span>
            </div>
          </div>
        </div>
      </section>

      <ConductiveCompoundsExplorer />

      <section className={styles.reviewBand}>
        <div className={`${styles.rail} ${styles.reviewLayout}`}>
          <div>
            <p className={styles.kicker}>Selection Inputs</p>
            <h2>Define the electrical requirement before the grade</h2>
          </div>
          <div className={styles.reviewList}>
            <div>
              <strong>Measurement basis</strong>
              <span>Surface or volume method, units, conditioning, and limits</span>
            </div>
            <div>
              <strong>Part environment</strong>
              <span>Humidity, grounding, geometry, contact area, and service conditions</span>
            </div>
            <div>
              <strong>Property balance</strong>
              <span>Flow, impact, stiffness, color, dimensional control, and surface quality</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`${styles.rail} ${styles.ctaLayout}`}>
          <div>
            <p className={styles.kicker}>Material Review</p>
            <h2>Need a cross-material recommendation?</h2>
            <p>
              Send the current resin, electrical target, molded-part function,
              test method, mechanical requirements, and expected volume.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryAction}>
              Send Requirement
            </Link>
            <Link
              href="/conductive-antistatic-pom"
              className={styles.lightSecondaryAction}
            >
              View POM-Specific Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
