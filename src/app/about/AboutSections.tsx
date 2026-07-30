import Image from "next/image";
import Link from "next/link";
import { ActionPanel } from "@/components/ActionPanel";
import { DocumentCard } from "@/components/DocumentCard";
import { MediaFigure } from "@/components/MediaFigure";
import { MetricGroup } from "@/components/MetricGroup";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { ValueText } from "@/components/UnitText";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

type AboutOverviewHeroProps = Omit<AboutHeroProps, "title">;

type AboutSnapshotProps = {
  figures: CompanyFigure[];
};

type AboutFactoryEvidenceProps = {
  rows: FactoryProofRow[];
};

type FactoryProofRowsProps = {
  rows: FactoryProofRow[];
};

type CredentialSupportProps = {
  availableDocuments: string[];
  certifications: Certification[];
  honors: string[];
};

type AboutFacilityProps = AboutSnapshotProps & AboutFactoryEvidenceProps;

type AboutProductionSupportProps = {
  images: FactoryImage[];
};

type ManufacturingOverviewProps = {
  capabilities: CompanyCapability[];
};

export function AboutHero({ heroImage, intro, title }: AboutHeroProps) {
  return (
    <PageHero
      variant="image"
      className={styles.hero}
      mediaClassName={styles.heroMedia}
      innerClassName={`site-container ${styles.heroInner}`}
      copyClassName={`${styles.heroCard} ${styles.heroLead}`}
      eyebrow="Jiangsu Taiyi Nano Technology Co., Ltd."
      eyebrowClassName={styles.heroEyebrow}
      title={title}
      description={intro}
      descriptionClassName={styles.heroIntro}
      actionsClassName={styles.heroActions}
      media={
        <Image
          src={publicPath(heroImage.src)}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      }
      actions={
        <>
          <Link href="/contact" className={styles.heroPrimaryAction}>
            Discuss Your Application
          </Link>
          <Link
            href="/products/categories/pom"
            className={styles.heroSecondaryAction}
          >
            Browse POM Compounds
          </Link>
        </>
      }
    />
  );
}

export function AboutOverviewHero({
  heroImage,
  intro,
}: AboutOverviewHeroProps) {
  return (
    <>
      <section className={styles.overviewHero}>
        <figure className={styles.overviewHeroMedia}>
          <Image
            src={publicPath(heroImage.src)}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </figure>

        <div className={`site-container ${styles.overviewHeroInner}`}>
          <div className={styles.overviewHeroCopy}>
            <p className={styles.overviewHeroLabel}>
              Modified Engineering Plastics
            </p>
            <h1>Modified POM compounds, built around the part.</h1>
            <p className={styles.overviewHeroSlogan}>
              Application-specific grades for demanding components. Compounded
              and tested for consistent production performance.
            </p>
            <p className={styles.overviewHeroIntro}>{intro}</p>
            <div className={styles.overviewHeroActions}>
              <Link href="/contact" className={styles.overviewPrimaryAction}>
                Discuss Your Application
              </Link>
              <Link
                href="/products/categories/pom"
                className={styles.overviewSecondaryAction}
              >
                Explore POM Grades
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overviewIdentity}>
        <div className="site-container">
          <div className={styles.overviewIdentityPlate}>
            <p>Made in Yancheng · Since 2003</p>
            <div>
              <strong>
                Engineering plastics developed for repeat production.
              </strong>
              <span>
                Modified POM is our core specialty, supported by PA6, PA66 and
                PPA compounds for demanding industrial applications. From grade
                selection and sampling to validation and production scale-up, we
                help customers move from the first trial to reliable series
                production.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutFacility({ figures, rows }: AboutFacilityProps) {
  return (
    <section
      className={styles.overviewFacility}
      aria-labelledby="overview-facility-title"
    >
      <header className={styles.overviewSectionHeader}>
        <h2 id="overview-facility-title">Our Yancheng Facility</h2>
        <p>
          Production, material evaluation and documentation support are
          coordinated in-house around the grade and molded part under review.
        </p>
      </header>

      <MetricGroup
        variant="grid"
        tone="dark"
        className={styles.overviewMetricGroup}
        featuredItem={figures[0]}
        items={figures.slice(1)}
        renderValue={(item) => <ValueText value={String(item.value)} />}
      />

      <div className={styles.overviewEvidenceGrid}>
        {rows.map((row, index) => (
          <article
            key={row.title}
            className={index === 0 ? styles.overviewEvidencePrimary : undefined}
          >
            <MediaFigure
              variant="captioned"
              fit="cover"
              caption={row.imageLabel}
              media={
                <Image
                src={publicPath(row.imageSrc)}
                alt={row.imageAlt}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 58vw, 100vw"
                    : "(min-width: 1024px) 30vw, 100vw"
                }
                className="object-cover"
                />
              }
            />
            <h3>{row.title}</h3>
            <p>{row.description}</p>
          </article>
        ))}
      </div>

      <Link
        href="/about/manufacturing-capabilities"
        className={styles.overviewFacilityAction}
      >
        View Manufacturing Capabilities
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}

const overviewProductionSteps = [
  {
    title: "Define the application",
    description:
      "Part function, molding conditions, target properties and document requirements.",
  },
  {
    title: "Compare candidate grades",
    description:
      "Samples, available test evidence and practical processing context.",
  },
  {
    title: "Confirm production requirements",
    description:
      "Confirmed grade, batch documentation and repeat-order requirements.",
  },
] as const;

export function AboutProductionSupport({ images }: AboutProductionSupportProps) {
  return (
    <section
      className={styles.overviewProcess}
      aria-labelledby="overview-process-title"
    >
      <div className={styles.overviewProcessLead}>
        <h2 id="overview-process-title">
          From Grade Selection to Serial Production
        </h2>
        <p>
          A practical review path built around the part, the molding process
          and the evidence needed for approval.
        </p>
      </div>

      <ol className={styles.overviewProcessSteps}>
        {overviewProductionSteps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.overviewProcessGallery}>
        {images.map((image) => (
          <figure key={image.src}>
            <Image
              src={publicPath(image.src)}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, (min-width: 768px) 46vw, 100vw"
              className="object-cover"
            />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function AboutCredentials({
  availableDocuments,
  certifications,
  honors,
}: CredentialSupportProps) {
  return (
    <section
      className={styles.overviewCredentials}
      aria-labelledby="overview-credentials-title"
    >
      <header className={styles.overviewSectionHeader}>
        <h2 id="overview-credentials-title">
          Quality Certifications &amp; Technical Documentation
        </h2>
        <p>
          Our current management-system certifications and technical documents
          commonly requested for supplier qualification and material approval.
        </p>
      </header>

      <div className={styles.overviewCertificateGrid}>
        {certifications.map((certificate) => (
          <DocumentCard
            key={certificate.standard}
            variant="certificate"
            href={publicPath(certificate.documentHref)}
            external
            previewAriaLabel={`Open ${certificate.standard} certificate PDF`}
            previewClassName={styles.overviewCertificatePreview}
            bodyClassName={styles.overviewCertificateBody}
            eyebrow={certificate.system}
            title={certificate.standard}
            actionLabel={
              <>
                View Certificate PDF <span aria-hidden="true">&rarr;</span>
              </>
            }
            preview={
              <Image
                src={publicPath(certificate.imageSrc)}
                alt={`${certificate.standard} certificate issued to Jiangsu Taiyi Nano Technology Co., Ltd.`}
                width={720}
                height={1000}
                sizes="(min-width: 1280px) 18vw, (min-width: 768px) 40vw, 34vw"
              />
            }
          />
        ))}

        <div className={styles.overviewCertificationScope}>
          <h3>Certification scope</h3>
          <div>
            {certifications.map((certificate) => (
              <p key={certificate.standard}>
                <strong>{certificate.standard}</strong>
                <span>{certificate.scope}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.overviewCredentialSupport}>
        <div>
          <h3>Material documents</h3>
          <ul className={styles.overviewDocumentList}>
            {availableDocuments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Company qualifications</h3>
          <ul className={styles.overviewQualificationList}>
            {honors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AboutOverviewInquiry() {
  return (
    <ActionPanel
      variant="light"
      className={styles.overviewInquiry}
      aria-labelledby="overview-inquiry-title"
      titleId="overview-inquiry-title"
      title="Tell us about your application"
      action={
        <Button asChild variant="primary" className={styles.overviewInquiryAction}>
          <Link href="/contact">
            Discuss Your Application
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Button>
      }
    >
      <p>
        Tell us about your part, operating conditions and performance targets.
        We&apos;ll recommend suitable grades and provide the samples and technical
        documentation needed for evaluation.
      </p>
    </ActionPanel>
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
      <SectionIntro
        className={styles.manufacturingOverviewLead}
        scale="display"
        title="In-House Compounding"
        titleId="manufacturing-overview-title"
        description="Three capabilities shape each review: modified POM expertise, in-house twin-screw compounding and project-specific document support."
      />

      <div className={styles.manufacturingOverviewList}>
        {capabilities.map((capability) => (
          <Card
            key={capability.title}
            asChild
            variant="standard"
            className={styles.manufacturingCapabilityCard}
          >
            <article>
              <CardContent className={styles.manufacturingCapabilityContent}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </CardContent>
            </article>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function AboutInquiryBridge() {
  return (
    <ActionPanel
      variant="evidence"
      layout="distributed"
      className={styles.inquiry}
      copyClassName={styles.inquiryCopy}
      aria-labelledby="about-inquiry-title"
      titleId="about-inquiry-title"
      title="Start with your application"
      action={
        <Button asChild variant="primary" className={styles.inquiryAction}>
          <Link href="/contact">
            Discuss Your Application
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Button>
      }
    >
      <p>
        Share the part function, operating conditions, performance targets and
        document needs. We&apos;ll recommend suitable grades and provide the
        samples and technical documentation needed for evaluation.
      </p>
    </ActionPanel>
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
          <MediaFigure
            variant="edge-to-edge"
            fit="cover"
            className={styles.flowMedia}
            caption={row.imageLabel}
            captionClassName={styles.caption}
            media={
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
            }
          />

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
