import Image from "next/image";

import { DocumentCard } from "@/components/DocumentCard";
import type { Certification, CompanyQualification } from "@/data/company";
import { publicPath } from "@/lib/paths";
import styles from "./QualitySystemsSection.module.css";

const certificateHolder = "Jiangsu Taiyi Nano Technology Co., Ltd.";

const documentNames: Readonly<Record<string, string>> = {
  TDS: "Technical Data Sheet",
  SDS: "Safety Data Sheet",
  COA: "Certificate of Analysis",
  REACH:
    "Registration, Evaluation, Authorisation and Restriction of Chemicals",
  RoHS: "Restriction of Hazardous Substances",
};

type QualitySystemsSectionProps = {
  availableDocuments: ReadonlyArray<string>;
  certifications: ReadonlyArray<Certification>;
  qualifications: ReadonlyArray<CompanyQualification>;
};

export function QualitySystemsSection({
  availableDocuments,
  certifications,
  qualifications,
}: QualitySystemsSectionProps) {
  const featuredCertificate =
    certifications.find((certificate) =>
      certificate.standard.startsWith("IATF"),
    ) ?? certifications[0];
  const supportingCertificates = certifications.filter(
    (certificate) => certificate !== featuredCertificate,
  );

  return (
    <div className="quality-systems-section">
      <div className="site-container">
        <section
          className={styles.root}
          aria-labelledby="home-credentials-title"
        >
          <header className={styles.sectionHeader}>
            <div className={styles.introCopy}>
              <h2 id="home-credentials-title">
                Credentials for Supplier Qualification
              </h2>
              <p>
                Enterprise recognition and management-system certificates for{" "}
                {certificateHolder}, together with material-document support,
                give procurement teams a faster route to supplier review.
              </p>
            </div>

            <div
              className={styles.qualificationPanel}
              aria-label="Company credentials and material-document support"
            >
              <div className={styles.qualificationRegister}>
                {qualifications.map((qualification) => {
                  const patentMatch =
                    qualification.category === "Intellectual property"
                      ? qualification.title.match(/^(\d+)\s+(.+)$/)
                      : null;

                  return (
                    <div key={qualification.title}>
                      <span>{qualification.category}</span>
                      {patentMatch ? (
                        <strong className={styles.patentValue}>
                          <b>{patentMatch[1]}</b>
                          <small>{patentMatch[2]}</small>
                        </strong>
                      ) : (
                        <strong>{qualification.title}</strong>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className={styles.documentReadiness}>
                <div className={styles.documentReadinessCopy}>
                  <h3>Document support</h3>
                  <p>Availability confirmed by grade and project.</p>
                </div>
                <ul
                  className={styles.documentList}
                  aria-label="Material documents available by grade and project"
                >
                  {availableDocuments.map((item) => (
                    <li key={item}>
                      {documentNames[item] ? (
                        <abbr title={documentNames[item]}>{item}</abbr>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>

          <div className={styles.certificateLayout}>
            {featuredCertificate ? (
              <DocumentCard
                className={styles.primaryCertificate}
                variant="certificate"
                href={publicPath(featuredCertificate.documentHref)}
                external
                previewAriaLabel={`Open ${featuredCertificate.standard} certificate PDF`}
                previewClassName={styles.primaryPreview}
                bodyClassName={styles.primaryBody}
                eyebrow={featuredCertificate.system}
                eyebrowClassName={styles.primaryEyebrow}
                title={featuredCertificate.standard}
                titleClassName={styles.primaryTitle}
                description="Automotive Quality Management System"
                descriptionClassName={styles.primaryDescription}
                metaClassName={styles.primaryMeta}
                meta={
                  <>
                    <p className={styles.pdfStatus}>
                      Certificate PDF available for review
                    </p>
                    <div className={styles.scopeFact}>
                      <h3>Certified scope</h3>
                      <p>{featuredCertificate.scope}</p>
                    </div>
                    <span className={styles.documentAction}>
                      Open certificate PDF{" "}
                      <span aria-hidden="true">&#8599;</span>
                    </span>
                  </>
                }
                preview={
                  <Image
                    src={publicPath(featuredCertificate.imageSrc)}
                    alt=""
                    width={720}
                    height={1000}
                    sizes="(min-width: 1280px) 12rem, (min-width: 768px) 11rem, 9rem"
                  />
                }
              />
            ) : null}

            <div className={styles.isoStack}>
              {supportingCertificates.map((certificate) => (
                <DocumentCard
                  key={certificate.standard}
                  className={styles.isoCertificate}
                  variant="certificate"
                  href={publicPath(certificate.documentHref)}
                  external
                  previewAriaLabel={`Open ${certificate.standard} certificate PDF`}
                  previewClassName={styles.isoPreview}
                  bodyClassName={styles.isoBody}
                  eyebrow={certificate.system}
                  eyebrowClassName={styles.isoEyebrow}
                  title={certificate.standard}
                  titleClassName={styles.isoTitle}
                  description={
                    <>
                      <span className={styles.scopePrefix}>Scope:</span>{" "}
                      {certificate.scope}
                    </>
                  }
                  descriptionClassName={styles.isoScope}
                  metaClassName={styles.isoMeta}
                  meta={
                    <span className={styles.documentAction}>
                      Open PDF <span aria-hidden="true">&#8599;</span>
                    </span>
                  }
                  preview={
                    <Image
                      src={publicPath(certificate.imageSrc)}
                      alt=""
                      width={720}
                      height={1000}
                      sizes="(min-width: 1280px) 5.5rem, (min-width: 768px) 5rem, 4.5rem"
                    />
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
