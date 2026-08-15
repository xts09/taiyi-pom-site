import Image from "next/image";

import { DocumentCard } from "@/components/DocumentCard";
import type { Certification, CompanyQualification } from "@/data/company";
import type { HomeMessages } from "@/i18n/types";
import { publicPath } from "@/lib/paths";
import styles from "./QualitySystemsSection.module.css";

type QualitySystemsSectionProps = {
  availableDocuments: ReadonlyArray<string>;
  certifications: ReadonlyArray<Certification>;
  qualifications: ReadonlyArray<CompanyQualification>;
  messages: HomeMessages["quality"];
};

export function QualitySystemsSection({
  availableDocuments,
  certifications,
  qualifications,
  messages,
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
                {messages.title}
              </h2>
              <p>{messages.body}</p>
            </div>

            <div
              className={styles.qualificationPanel}
              aria-label={messages.panelAria}
            >
              <div className={styles.qualificationRegister}>
                {qualifications.map((qualification) => {
                  const patentMatch = qualification.title.match(/^(\d+)\s+(.+)$/);

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
                  <h3>{messages.documentSupportTitle}</h3>
                  <p>{messages.documentSupportBody}</p>
                </div>
                <ul
                  className={styles.documentList}
                  aria-label={messages.documentListAria}
                >
                  {availableDocuments.map((item) => (
                    <li key={item}>
                      {messages.documentNames[item] ? (
                        <abbr title={messages.documentNames[item]}>{item}</abbr>
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
                previewAriaLabel={messages.openCertificateAria.replace(
                  "{standard}",
                  featuredCertificate.standard,
                )}
                previewClassName={styles.primaryPreview}
                bodyClassName={styles.primaryBody}
                eyebrow={featuredCertificate.system}
                eyebrowClassName={styles.primaryEyebrow}
                title={featuredCertificate.standard}
                titleClassName={styles.primaryTitle}
                description={messages.featuredDescription}
                descriptionClassName={styles.primaryDescription}
                metaClassName={styles.primaryMeta}
                meta={
                  <>
                    <p className={styles.pdfStatus}>
                      {messages.certificateAvailable}
                    </p>
                    <div className={styles.scopeFact}>
                      <h3>{messages.certifiedScope}</h3>
                      <p>{featuredCertificate.scope}</p>
                    </div>
                    <span className={styles.documentAction}>
                      {messages.openCertificate}{" "}
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
                  previewAriaLabel={messages.openCertificateAria.replace(
                    "{standard}",
                    certificate.standard,
                  )}
                  previewClassName={styles.isoPreview}
                  bodyClassName={styles.isoBody}
                  eyebrow={certificate.system}
                  eyebrowClassName={styles.isoEyebrow}
                  title={certificate.standard}
                  titleClassName={styles.isoTitle}
                  description={
                    <>
                      <span className={styles.scopePrefix}>
                        {messages.scopePrefix}
                      </span>{" "}
                      {certificate.scope}
                    </>
                  }
                  descriptionClassName={styles.isoScope}
                  metaClassName={styles.isoMeta}
                  meta={
                    <span className={styles.documentAction}>
                      {messages.openPdf} <span aria-hidden="true">&#8599;</span>
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
