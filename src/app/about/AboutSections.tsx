import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { DocumentCard } from "@/components/DocumentCard";
import { MediaFigure } from "@/components/MediaFigure";
import { MetricGroup } from "@/components/MetricGroup";
import { ValueText } from "@/components/UnitText";
import { Button } from "@/components/ui/button";
import type {
  Certification,
  CompanyFigure,
  CompanyQualification,
  FactoryImage,
  FactoryProofRow,
} from "@/data/company";
import { publicPath } from "@/lib/paths";
import styles from "./AboutPage.module.css";

type AboutOverviewHeroProps = {
  heroImage: FactoryImage;
  intro?: string;
  label?: string;
  title?: string;
  summary?: string;
};

type AboutIdentityPlateProps = {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
};

type FactoryProofRowsProps = {
  rows: FactoryProofRow[];
};

type CredentialSupportProps = {
  availableDocuments: ReadonlyArray<string>;
  certifications: ReadonlyArray<Certification>;
  description?: string;
  presentation?: "card" | "section";
  qualifications: ReadonlyArray<CompanyQualification>;
  title?: string;
  tone?: "dark" | "light";
};

type AboutFacilityProps = {
  figures: CompanyFigure[];
  rows: FactoryProofRow[];
};

type AboutCompanySnapshotProps = {
  figures: CompanyFigure[];
};

export function AboutOverviewHero({
  heroImage,
  intro,
  label = "Engineering Plastic Compounds",
  title = "Modified POM, compounded for industrial production.",
  summary = "Modified POM is our core line. Selected PA6, PA66 and PPA compounds extend the range when the part requires a different material family.",
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
            <p className={styles.overviewHeroLabel}>{label}</p>
            <h1>{title}</h1>
            <p className={styles.overviewHeroSlogan}>{summary}</p>
            {intro ? <p className={styles.overviewHeroIntro}>{intro}</p> : null}
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

    </>
  );
}

export function AboutIdentityPlate({
  label,
  title,
  description,
  children,
}: AboutIdentityPlateProps) {
  return (
    <section className={styles.overviewIdentity}>
      <div className="site-container">
        <div className={styles.overviewIdentityPlate}>
          <p>{label}</p>
          <div className={styles.overviewIdentityCopy}>
            <h2>{title}</h2>
            <p className={styles.overviewIdentityDescription}>{description}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
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
            className={
              index === 0
                ? styles.overviewEvidencePrimary
                : row.supportingImages
                  ? styles.overviewTestingEvidence
                  : undefined
            }
          >
            {row.supportingImages ? (
              <div className={styles.overviewTestingMedia}>
                <MediaFigure
                  variant="captioned"
                  fit="cover"
                  className={styles.overviewTestingPrimaryMedia}
                  caption={row.imageLabel}
                  media={
                    <Image
                      src={publicPath(row.imageSrc)}
                      alt={row.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  }
                />
                <div className={styles.overviewTestingSupportMedia}>
                  {row.supportingImages.map((image) => (
                    <MediaFigure
                      key={image.src}
                      variant="captioned"
                      fit="cover"
                      caption={image.label}
                      media={
                        <Image
                          src={publicPath(image.src)}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1024px) 22vw, 50vw"
                          className="object-cover"
                        />
                      }
                    />
                  ))}
                </div>
              </div>
            ) : (
              <MediaFigure
                variant="captioned"
                fit="cover"
                caption={row.imageLabel}
                media={
                  <Image
                    src={publicPath(row.imageSrc)}
                    alt={row.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                }
              />
            )}
            <h3>{row.title}</h3>
            <p>{row.description}</p>
          </article>
        ))}
      </div>

      <Link
        href="/about#manufacturing"
        className={styles.overviewFacilityAction}
      >
        View Manufacturing Capabilities
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}

export function AboutCredentials({
  availableDocuments,
  certifications,
  description = "Company qualifications, management-system certificates and available material documents are grouped here for supplier qualification.",
  presentation = "card",
  qualifications,
  title = "Evidence for supplier qualification.",
  tone = "dark",
}: CredentialSupportProps) {
  return (
    <section
      className={`${styles.overviewCredentials} ${styles.credentialsTheme} ${
        tone === "light" ? styles.credentialsLight : ""
      } ${presentation === "section" ? styles.credentialsSection : ""}`}
      aria-labelledby="overview-credentials-title"
    >
      <header className={styles.overviewSectionHeader}>
        <h2 id="overview-credentials-title">{title}</h2>
        <p>{description}</p>
      </header>

      <div className={styles.overviewCertificateGrid}>
        <div
          className={styles.overviewQualificationRegister}
          aria-label="Company credentials"
        >
          {qualifications.map((qualification) => (
            <div key={qualification.title}>
              <span>{qualification.category}</span>
              <strong>{qualification.title}</strong>
            </div>
          ))}
        </div>

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
          <h3>Certificate scope</h3>
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
      </div>
    </section>
  );
}

export function AboutOverviewInquiry() {
  return (
    <ActionPanel
      footerAdjacent
      variant="light"
      className={styles.overviewInquiry}
      aria-labelledby="overview-inquiry-title"
      titleId="overview-inquiry-title"
      title="Start with the part."
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
        Send the part function, operating conditions and target properties.
        We&apos;ll return a practical grade shortlist and confirm the samples and
        documents available for evaluation.
      </p>
    </ActionPanel>
  );
}

export function AboutCompanySnapshot({
  figures,
}: AboutCompanySnapshotProps) {
  return (
    <section
      className={styles.manufacturingOverview}
      aria-labelledby="manufacturing-overview-title"
    >
      <div className="site-container">
        <header className={styles.manufacturingOverviewHeader}>
          <p id="manufacturing-overview-title">Manufacturing in numbers</p>
          <p>
            Factory scale for trial batches, material testing and repeat
            production.
          </p>
        </header>
        <MetricGroup
          variant="rail"
          tone="light"
          className={styles.manufacturingOverviewMetrics}
          items={figures}
          renderValue={(figure) => <ValueText value={String(figure.value)} />}
        />
      </div>
    </section>
  );
}

export function FactoryProofRows({ rows }: FactoryProofRowsProps) {
  const production = rows.find(
    (row) => !row.supportingImages && row.imageVariant !== "warehouse",
  );
  const testing = rows.find((row) => row.supportingImages);
  const supply = rows.find((row) => row.imageVariant === "warehouse");

  if (!production || !testing || !supply) return null;

  const renderFigure = (
    row: FactoryProofRow,
    className: string,
    sizes: string,
  ) => (
    <MediaFigure
      variant="captioned"
      fit="cover"
      className={className}
      caption={row.imageLabel}
      captionClassName={styles.manufacturingProofCaption}
      media={
        <Image
          src={publicPath(row.imageSrc)}
          alt={row.imageAlt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      }
    />
  );

  const renderCopy = (row: FactoryProofRow) => (
    <>
      <p className={styles.manufacturingProofLabel}>{row.eyebrow}</p>
      <h3>{row.title}</h3>
      <p>{row.description}</p>
      <ul className={styles.manufacturingProofFacts}>
        {row.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </>
  );

  return (
    <div className={styles.manufacturingProof}>
      <article className={styles.manufacturingProofLead}>
        {renderFigure(
          production,
          styles.manufacturingProofLeadMedia,
          "(min-width: 1024px) 58vw, 100vw",
        )}
        <div>{renderCopy(production)}</div>
      </article>

      <article className={styles.manufacturingProofTesting}>
        <div className={styles.manufacturingProofTestingCopy}>
          {renderCopy(testing)}
        </div>
        <div className={styles.manufacturingTestingGallery}>
          {renderFigure(
            testing,
            styles.manufacturingTestingPrimaryMedia,
            "(min-width: 1024px) 38vw, 100vw",
          )}
          <div className={styles.manufacturingTestingSupportMedia}>
            {testing.supportingImages?.map((image) => (
              <MediaFigure
                key={image.src}
                variant="captioned"
                fit="cover"
                className={styles.manufacturingTestingSupportFigure}
                caption={image.label}
                captionClassName={styles.manufacturingProofCaption}
                media={
                  <Image
                    src={publicPath(image.src)}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                }
              />
            ))}
          </div>
        </div>
      </article>

      <article className={styles.manufacturingProofSupply}>
        {renderFigure(
          supply,
          styles.manufacturingProofSupplyMedia,
          "(min-width: 1024px) 92rem, 100vw",
        )}
        <div className={styles.manufacturingProofSupplyCopy}>
          <div>
            <p className={styles.manufacturingProofLabel}>
              {supply.eyebrow}
            </p>
            <h3>{supply.title}</h3>
          </div>
          <div>
            <p>{supply.description}</p>
            <ul className={styles.manufacturingProofFacts}>
              {supply.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
