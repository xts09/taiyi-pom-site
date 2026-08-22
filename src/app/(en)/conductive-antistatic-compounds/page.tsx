import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serializeJsonLd } from "@/lib/jsonLd";
import { createContactHref } from "@/lib/contactContext";
import {
  ConductiveCompoundsExplorer,
  defaultConductiveCompoundsExplorerMessages,
  type ConductiveCompoundsExplorerMessages,
} from "@/components/ConductiveCompoundsExplorer";
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
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import styles from "@/components/ConductiveCompounds.module.css";

const path = "/conductive-antistatic-compounds";
export const conductiveAntistaticCompoundsTitle =
  "Conductive & Antistatic Plastic Compounds | Taiyi Polymer";
export const conductiveAntistaticCompoundsDescription =
  "Compare Taiyi Polymer carbon-nanotube antistatic and carbon-fiber conductive compound options across ABS, PC, POM, PA6, PA66, PPS, TPU, and other polymer matrices.";
export const conductiveAntistaticCompoundsHeroImage =
  "/generated/landing/conductive-antistatic-pom-functional-components.png";

export const metadata: Metadata = createPageMetadata({
  title: conductiveAntistaticCompoundsTitle,
  description: conductiveAntistaticCompoundsDescription,
  path,
  image: conductiveAntistaticCompoundsHeroImage,
});

const cntGradeCount = conductiveCompounds.filter(
  (compound) => compound.technology === "cnt",
).length;
const cfGradeCount = conductiveCompounds.filter(
  (compound) => compound.technology === "cf",
).length;

export type ConductiveAntistaticCompoundsMessages = {
  home: string;
  products: string;
  breadcrumb: string;
  schemaName: string;
  schemaDescription: string;
  contactMaterial: string;
  contactSource: string;
  heroAlt: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  exploreAction: string;
  contactAction: string;
  metricsAria: string;
  materialMatrices: string;
  cntDirections: string;
  cfDirections: string;
  modificationSystems: string;
  overviewKicker: string;
  overviewTitle: string;
  overviewBody: string;
  cntTag: string;
  cntTitle: string;
  cntDescription: string;
  cntBullets: readonly string[];
  cfTag: string;
  cfTitle: string;
  cfDescription: string;
  cfBullets: readonly string[];
  namingKicker: string;
  namingTitle: string;
  namingBody: string;
  namingAria: string;
  polymerMatrix: string;
  carbonNanotube: string;
  targetBand: string;
  explorer: ConductiveCompoundsExplorerMessages;
  reviewKicker: string;
  reviewTitle: string;
  reviewItems: ReadonlyArray<{ title: string; body: string }>;
  ctaKicker: string;
  ctaTitle: string;
  ctaBody: string;
  pomAction: string;
};

const defaultMessages: ConductiveAntistaticCompoundsMessages = {
  home: "Home",
  products: "Products",
  breadcrumb: "Conductive and Antistatic Compounds",
  schemaName: "Conductive and Antistatic Plastic Compounds",
  schemaDescription:
    "Cross-material directory of carbon-nanotube antistatic and carbon-fiber conductive compound options.",
  contactMaterial: "Conductive & Antistatic Compounds",
  contactSource: "Conductive and antistatic directory",
  heroAlt: "Black precision molded functional plastic components",
  heroKicker: "Static-Control Engineering Plastics",
  heroTitle: "Conductive and Antistatic Plastic Compounds",
  heroDescription:
    "Compare carbon-nanotube permanent antistatic and carbon-fiber conductive directions across multiple engineering-plastic matrices before requesting grade data or samples.",
  exploreAction: "Explore Grades",
  contactAction: "Discuss Your Application",
  metricsAria: "Series summary",
  materialMatrices: "Material matrices",
  cntDirections: "CNT directions",
  cfDirections: "Carbon-fiber directions",
  modificationSystems: "Modification systems",
  overviewKicker: "Series Architecture",
  overviewTitle: "One directory, two material technologies",
  overviewBody:
    "Start with the electrical target and polymer matrix. Final selection still requires the specified test method, molded-part geometry, conditioning, and mechanical-property review.",
  cntTag: "CNT / Permanent Antistatic",
  cntTitle: conductiveSeries.cnt.title,
  cntDescription: conductiveSeries.cnt.description,
  cntBullets: [
    "Non-blooming and non-migrating modification direction",
    "Low-specific-gravity catalogue positioning",
    "R35 and R610 target bands",
  ],
  cfTag: "CF / Conductive",
  cfTitle: conductiveSeries.cf.title,
  cfDescription: conductiveSeries.cf.description,
  cfBullets: [
    "Carbon-fiber conductive modification direction",
    "Thermal-conductive review path",
    "R35 and R68 target bands",
  ],
  namingKicker: "CNT Grade Naming",
  namingTitle: "Read the new code in three parts",
  namingBody:
    "Descriptive CNT grade codes identify the polymer matrix, modification system, and catalogue target band.",
  namingAria: "POM CNT R35 code anatomy",
  polymerMatrix: "Polymer matrix",
  carbonNanotube: "Carbon nanotube",
  targetBand: "10^3-10^5 band",
  explorer: defaultConductiveCompoundsExplorerMessages,
  reviewKicker: "Selection Inputs",
  reviewTitle: "Define the electrical requirement before the grade",
  reviewItems: [
    {
      title: "Measurement basis",
      body: "Surface or volume method, units, conditioning, and limits",
    },
    {
      title: "Part environment",
      body: "Humidity, grounding, geometry, contact area, and service conditions",
    },
    {
      title: "Property balance",
      body: "Flow, impact, stiffness, color, dimensional control, and surface quality",
    },
  ],
  ctaKicker: "Material Review",
  ctaTitle: "Need a cross-material recommendation?",
  ctaBody:
    "Send the current resin, electrical target, molded-part function, test method, mechanical requirements, and expected volume.",
  pomAction: "View Conductive & Antistatic POM",
};

const createJsonLd = (
  pagePath: string,
  messages: ConductiveAntistaticCompoundsMessages,
  inLanguage?: string,
) => [
  createBreadcrumbJsonLd([
    { name: messages.home, path: pagePath.startsWith("/zh/") ? "/zh" : "/" },
    {
      name: messages.products,
      path: pagePath.startsWith("/zh/") ? "/zh/products" : "/products",
    },
    { name: messages.breadcrumb, path: pagePath },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: messages.schemaName,
    description: messages.schemaDescription,
    url: `${siteUrl}${pagePath}`,
    ...(inLanguage ? { inLanguage } : {}),
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

type ConductiveAntistaticCompoundsContentProps = {
  groupByMatrix?: boolean;
  pagePath?: string;
  showAllByDefault?: boolean;
  localeSegment?: LocalizedUrlSegment;
  inLanguage?: string;
  messages?: ConductiveAntistaticCompoundsMessages;
};

export function ConductiveAntistaticCompoundsContent({
  groupByMatrix = false,
  pagePath = path,
  showAllByDefault = false,
  localeSegment,
  inLanguage,
  messages = defaultMessages,
}: ConductiveAntistaticCompoundsContentProps) {
  const jsonLd = createJsonLd(pagePath, messages, inLanguage);
  const contactHref = getLocalizedHref(
    createContactHref({
      material: messages.contactMaterial,
      source: messages.contactSource,
    }),
    localeSegment,
  );

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />

      <section className={styles.hero}>
        <Image
          src={conductiveAntistaticCompoundsHeroImage}
          alt={messages.heroAlt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />

        <div className={`${styles.rail} ${styles.heroRail}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroKicker}>
              {messages.heroKicker}
            </p>
            <h1>{messages.heroTitle}</h1>
            <p>{messages.heroDescription}</p>
            <div className={styles.heroActions}>
              <Link href="#grade-explorer" className={styles.primaryAction}>
                {messages.exploreAction}
              </Link>
              <Link href={contactHref} className={styles.secondaryAction}>
                {messages.contactAction}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.metricsBand} aria-label={messages.metricsAria}>
        <div className={`${styles.rail} ${styles.metricsGrid}`}>
          <div>
            <strong>{conductiveMatrices.length}</strong>
            <span>{messages.materialMatrices}</span>
          </div>
          <div>
            <strong>{cntGradeCount}</strong>
            <span>{messages.cntDirections}</span>
          </div>
          <div>
            <strong>{cfGradeCount}</strong>
            <span>{messages.cfDirections}</span>
          </div>
          <div>
            <strong>2</strong>
            <span>{messages.modificationSystems}</span>
          </div>
        </div>
      </section>

      <section className={styles.overviewBand}>
        <div className={styles.rail}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>{messages.overviewKicker}</p>
              <h2>{messages.overviewTitle}</h2>
            </div>
            <p>{messages.overviewBody}</p>
          </div>

          <div className={styles.seriesGrid}>
            <article>
              <span className={styles.seriesNumber}>01</span>
              <p className={styles.seriesTag}>{messages.cntTag}</p>
              <h3>{messages.cntTitle}</h3>
              <p>{messages.cntDescription}</p>
              <ul>
                {messages.cntBullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>

            <article>
              <span className={styles.seriesNumber}>02</span>
              <p className={styles.seriesTag}>{messages.cfTag}</p>
              <h3>{messages.cfTitle}</h3>
              <p>{messages.cfDescription}</p>
              <ul>
                {messages.cfBullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.namingBand}>
        <div className={`${styles.rail} ${styles.namingLayout}`}>
          <div>
            <p className={styles.kicker}>{messages.namingKicker}</p>
            <h2>{messages.namingTitle}</h2>
            <p>{messages.namingBody}</p>
          </div>
          <div className={styles.codeAnatomy} aria-label={messages.namingAria}>
            <div>
              <strong>POM</strong>
              <span>{messages.polymerMatrix}</span>
            </div>
            <span aria-hidden="true">-&gt;</span>
            <div>
              <strong>CNT</strong>
              <span>{messages.carbonNanotube}</span>
            </div>
            <span aria-hidden="true">-&gt;</span>
            <div>
              <strong>R35</strong>
              <span>{messages.targetBand}</span>
            </div>
          </div>
        </div>
      </section>

      <ConductiveCompoundsExplorer
        defaultTechnology={showAllByDefault ? "all" : "cnt"}
        groupByMatrix={groupByMatrix}
        localeSegment={localeSegment}
        messages={messages.explorer}
      />

      <section className={styles.reviewBand}>
        <div className={`${styles.rail} ${styles.reviewLayout}`}>
          <div>
            <p className={styles.kicker}>{messages.reviewKicker}</p>
            <h2>{messages.reviewTitle}</h2>
          </div>
          <div className={styles.reviewList}>
            {messages.reviewItems.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} data-footer-adjacent="true">
        <div className={`${styles.rail} ${styles.ctaLayout}`}>
          <div>
            <p className={styles.kicker}>{messages.ctaKicker}</p>
            <h2>{messages.ctaTitle}</h2>
            <p>{messages.ctaBody}</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href={contactHref} className={styles.primaryAction}>
              {messages.contactAction}
            </Link>
            <Link
              href={getLocalizedHref("/conductive-antistatic-pom", localeSegment)}
              className={styles.lightSecondaryAction}
            >
              {messages.pomAction}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ConductiveAntistaticCompoundsPage() {
  return <ConductiveAntistaticCompoundsContent />;
}
