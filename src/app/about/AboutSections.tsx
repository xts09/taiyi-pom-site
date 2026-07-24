import Image from "next/image";
import Link from "next/link";
import { ValueText } from "@/components/UnitText";
import type {
  Certification,
  CompanyCapability,
  CompanyFigure,
  FactoryImage,
  FactoryProofRow,
} from "@/data/company";
import { publicPath } from "@/lib/paths";
import styles from "./AboutPage.module.css";

type AboutHeroProps = {
  heroImage: FactoryImage;
  intro: string;
  title: string;
};

type AboutSnapshotProps = {
  figures: CompanyFigure[];
};

type FactoryProofRowsProps = {
  rows: FactoryProofRow[];
};

type CredentialSupportProps = {
  availableDocuments: string[];
  certifications: Certification[];
  honors: string[];
};

type ManufacturingOverviewProps = {
  capabilities: CompanyCapability[];
};

export function AboutHero({ heroImage, intro, title }: AboutHeroProps) {
  return (
    <section className={styles.hero}>
      <figure className={styles.heroMedia}>
        <Image
          src={publicPath(heroImage.src)}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <figcaption>{heroImage.label}</figcaption>
      </figure>

      <div className={`site-container ${styles.heroInner}`}>
        <div className={styles.heroCard}>
          <div className={styles.heroLead}>
            <p className={styles.heroEyebrow}>
              Jiangsu Taiyi Nano Technology Co., Ltd.
            </p>

            <h1>{title}</h1>

            <p className={styles.heroIntro}>{intro}</p>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroPrimaryAction}>
                Discuss Requirement
              </Link>
              <Link
                href="/products/categories/pom"
                className={styles.heroSecondaryAction}
              >
                View POM Materials
              </Link>
            </div>
          </div>

          <div className={styles.heroProof} aria-label="Company profile highlights">
            <div>
              <span>Factory Base</span>
              <strong>Yancheng, Jiangsu, China</strong>
            </div>
            <div>
              <span>Main Focus</span>
              <strong>Modified POM and selected engineering plastic compounds</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutIdentity() {
  return (
    <section className={styles.identity} aria-labelledby="about-identity-title">
      <div className={styles.identityLead}>
        <p className={styles.identityLabel}>Who We Are</p>
        <h2 id="about-identity-title">Practical Compounding</h2>
      </div>

      <div className={styles.identityNarrative}>
        <p>
          Since 2003, Taiyi Nano has developed modified engineering plastic
          compounds around real molded-part requirements.
        </p>
        <p>
          We work with buyers, material engineers, and molding teams to move
          from material direction and sample evaluation toward repeat
          production and document support. Modified POM remains our core focus,
          supported by selected PA6, PA66, and PPA compound capabilities for
          project-specific evaluation.
        </p>
      </div>
    </section>
  );
}

export function AboutSnapshot({ figures }: AboutSnapshotProps) {
  return (
    <section className={styles.snapshot}>
      <div className={styles.snapshotIntro}>
        <h2>Factory Overview</h2>
        <p>
          Production scale, manufacturing experience, and in-house testing
          support for engineering plastic compounding projects.
        </p>
      </div>

      <dl className={styles.metrics}>
        {figures.map((item) => (
          <div key={item.label} className={styles.metric}>
            <dt>{item.label}</dt>
            <dd>
              <ValueText value={item.value} />
            </dd>
            <span>{item.note}</span>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function AboutManufacturingPath() {
  return (
    <section
      className={styles.manufacturingPath}
      aria-labelledby="manufacturing-path-title"
    >
      <div>
        <h2 id="manufacturing-path-title">Manufacturing Overview</h2>
      </div>

      <p>
        Review Taiyi Nano&apos;s extrusion lines, warehouse coordination,
        production equipment, and project evaluation support.
      </p>

      <Link
        href="/about/manufacturing-capabilities"
        className={styles.manufacturingPathAction}
      >
        Explore Manufacturing
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}

export function ManufacturingOverview({
  capabilities,
}: ManufacturingOverviewProps) {
  return (
    <section
      className={styles.manufacturingOverview}
      aria-labelledby="manufacturing-overview-title"
    >
      <div className={styles.manufacturingOverviewLead}>
        <h2 id="manufacturing-overview-title">In-House Compounding</h2>
        <p>
          Production, material evaluation, and document support are coordinated
          around the grade and molded-part requirement being reviewed.
        </p>
      </div>

      <div className={styles.manufacturingOverviewList}>
        {capabilities.map((capability) => (
          <article key={capability.title}>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutInquiryBridge() {
  return (
    <section className={styles.inquiry} aria-labelledby="about-inquiry-title">
      <div className={styles.inquiryCopy}>
        <h2 id="about-inquiry-title">Start with Requirements</h2>
        <p>
          Share the polymer family, part function, target properties, and
          required documents. We can help narrow the next material direction.
        </p>
      </div>

      <Link href="/contact" className={styles.inquiryAction}>
        Discuss Requirement
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

export function FactoryProofRows({ rows }: FactoryProofRowsProps) {
  return (
    <section
      aria-label="Factory proof"
      className={styles.flow}
    >
      {rows.map((row, index) => (
        <article
          key={row.title}
          className={`${styles.flowRow} ${
            row.imageSide === "right" ? styles.flowRowReverse : ""
          } ${
            index === 0
              ? styles.flowRowLead
              : index === 1
                ? styles.flowRowFeature
                : styles.flowRowClose
          }`}
        >
          <figure className={styles.flowMedia}>
            <Image
              src={publicPath(row.imageSrc)}
              alt={row.imageAlt}
              fill
              sizes={
                index === 1
                  ? "(min-width: 1024px) 100vw, 100vw"
                  : "(min-width: 1024px) 52vw, 100vw"
              }
              className={`object-cover ${
                row.imageVariant === "warehouse" ? styles.warehouse : ""
              }`}
            />
            <figcaption className={styles.caption}>
              {row.imageLabel}
            </figcaption>
          </figure>

          <div className={styles.flowCopy}>
            <h2>{row.title}</h2>
            <p>{row.description}</p>
            <ul className={styles.flowFacts}>
              {row.points.map((point) => (
                <li key={point}>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

export function CredentialSupport({
  availableDocuments,
  certifications,
  honors,
}: CredentialSupportProps) {
  return (
    <>
      <section
        className={styles.certifications}
        aria-labelledby="certifications-title"
      >
        <div className={styles.certificationHeader}>
          <h2 id="certifications-title">Certifications &amp; Compliance</h2>
          <p>
            Management-system certificates supporting quality, automotive,
            environmental, and occupational health and safety requirements.
            Open any certificate to review its bilingual document and scope.
          </p>
        </div>

        <div className={styles.certificateGrid}>
          {certifications.map((certificate) => (
            <article key={certificate.standard} className={styles.certificate}>
              <a
                href={publicPath(certificate.documentHref)}
                target="_blank"
                rel="noreferrer"
                className={styles.certificatePreview}
                aria-label={`Open ${certificate.standard} bilingual certificate PDF`}
              >
                <Image
                  src={publicPath(certificate.imageSrc)}
                  alt={`${certificate.standard} certificate issued to Jiangsu Taiyi Nano Technology Co., Ltd.`}
                  width={720}
                  height={1000}
                  sizes="(min-width: 1280px) 19vw, (min-width: 768px) 40vw, 88vw"
                />
              </a>

              <div className={styles.certificateBody}>
                <p>{certificate.system}</p>
                <h3>{certificate.standard}</h3>
                <p className={styles.certificateScope}>{certificate.scope}</p>

                <dl className={styles.certificateMeta}>
                  <div>
                    <dt>Certificate no.</dt>
                    <dd>{certificate.certificateNumber}</dd>
                  </div>
                </dl>

                <a
                  href={publicPath(certificate.documentHref)}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.certificateLink}
                >
                  View bilingual PDF <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.support}>
      <div className={styles.supportHeader}>
        <h2>Material Evaluation Support</h2>
        <Link href="/contact" className="cta-primary px-6 py-3 text-sm">
          Send Requirement
        </Link>
      </div>

      <div className={styles.supportGrid}>
        <ChipGroup items={availableDocuments} title="Available Documents" />
        <div className={styles.supportGroup}>
          <h3>Honors</h3>
          <ul className={styles.honorList}>
            {honors.map((item) => (
              <li key={item}>
                <span className={styles.signal} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </section>
    </>
  );
}

function ChipGroup({ items, title }: { items: string[]; title: string }) {
  return (
    <div className={styles.supportGroup}>
      <h3>{title}</h3>
      <div className={styles.chipList}>
        {items.map((item) => (
          <span key={item} className={styles.chip}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
