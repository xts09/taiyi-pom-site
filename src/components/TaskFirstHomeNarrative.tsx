import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { DocumentCard } from "@/components/DocumentCard";
import { HomeComponentCard, HomeIndustryCard } from "@/components/HomeEntryCards";
import { HomeMaterialCatalogue } from "@/components/HomeMaterialCatalogue";
import { MediaFigure } from "@/components/MediaFigure";
import { SectionIntro } from "@/components/SectionIntro";
import { availableDocuments, companyFigures, type Certification } from "@/data/company";
import { homeComponentEntries, homeIndustryEntries } from "@/data/homeEntries";
import type { ContactFormMessages, HomeTaskFirstMessages } from "@/i18n/types";
import { createContactHref } from "@/lib/contactContext";
import { buildHomeMaterialColumns } from "@/lib/homeMaterialCatalogue";
import { publicPath } from "@/lib/paths";
import styles from "./HomeSections.module.css";

const proofFigures = [companyFigures[0], companyFigures[2], companyFigures[4]];

type TaskFirstHomeNarrativeProps = {
  certifications: readonly Certification[];
  messages: HomeTaskFirstMessages;
  materialLabels: ContactFormMessages["materialOptionLabels"];
  localizedHref: (href: string) => string;
};

function HomeProofSection({
  certifications,
  messages,
  localizedHref,
}: Omit<TaskFirstHomeNarrativeProps, "materialLabels">) {
  const proof = messages.proof;
  return (
    <section id="factory-snapshot" className={`${styles.section} ${styles.cool}`} aria-labelledby="home-proof-title">
      <div className="site-container">
        <header className={styles.sectionHeader}>
          <SectionIntro
            className={styles.intro}
            titleClassName={styles.title}
            descriptionClassName={styles.description}
            title={proof.eyebrow}
            titleId="home-proof-title"
            description={proof.title}
          />
        </header>
        <div className={styles.evidenceRows}>
          <div className={styles.evidenceRow}>
            <MediaFigure
              className={styles.evidenceImage}
              caption={proof.factoryImageCaption}
              media={<Image fill src={publicPath("/factory-extrusion.webp")} alt={proof.factoryImageAlt} sizes="(min-width: 64rem) 46vw, 100vw" />}
            />
            <div className={styles.evidenceCopy}>
              <h3>{proof.production.title}</h3>
              <p>{proof.production.body}</p>
              <dl className={styles.facts} aria-label={proof.metricsAria}>
                {[0, 1].map((index) => (
                  <div key={proof.metricLabels[index]}>
                    <dt>{proof.metricLabels[index]}</dt>
                    <dd>{proofFigures[index].value} {proof.metricNotes[index]}</dd>
                  </div>
                ))}
                <div>
                  <dt>{proof.production.sinceLabel}</dt>
                  <dd>{companyFigures[1].value}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className={`${styles.evidenceRow} ${styles.reverse}`}>
            <MediaFigure
              className={styles.evidenceImage}
              caption={proof.laboratory.imageCaption}
              media={<Image fill src={publicPath("/factory-laboratory-testing-documentary-v4.webp")} alt={proof.laboratory.imageAlt} sizes="(min-width: 64rem) 46vw, 100vw" />}
            />
            <div className={styles.evidenceCopy}>
              <h3>{proof.laboratory.title}</h3>
              <p>{proof.laboratory.body}</p>
              <dl className={styles.facts}>
                <div>
                  <dt>{proof.metricLabels[2]}</dt>
                  <dd>{proofFigures[2].value} {proof.metricNotes[2]}</dd>
                </div>
                <div>
                  <dt>{proof.documentsTitle}</dt>
                  <dd>{availableDocuments.join(" · ")}</dd>
                </div>
              </dl>
              <div className={styles.evidenceActions}>
                <Link className={styles.textLink} href={localizedHref(createContactHref({intent: "tds", source: proof.documentsTitle}))}>
                  {proof.documentsAction}<ArrowRight aria-hidden="true" size={16} />
                </Link>
                {proof.wearRecordAction ? (
                  <Link className={styles.textLink} href={localizedHref("/resources/pom-wear-benchmark")}>
                    {proof.wearRecordAction}<ArrowRight aria-hidden="true" size={16} />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <header className={styles.certificateHead}>
          <h3>{proof.certificatesTitle}</h3>
          <Link className={styles.textLink} href={localizedHref("/about#overview-credentials-title")}>
            {proof.certificateAction}<ArrowRight aria-hidden="true" size={16} />
          </Link>
        </header>
        <div className={styles.certificateGrid}>
          {certifications.map((certificate) => (
            <DocumentCard
              key={certificate.standard}
              className={styles.certificate}
              variant="certificate"
              external
              href={publicPath(certificate.documentHref)}
              eyebrow={certificate.system}
              title={certificate.standard}
              previewAriaLabel={`${proof.certificateOpenAction}: ${certificate.standard}`}
              previewClassName={styles.certificatePreview}
              preview={<Image width={certificate.imageWidth} height={certificate.imageHeight} src={publicPath(certificate.imageSrc)} alt="" />}
              actionLabel={<>{proof.certificateOpenAction}<ArrowUpRight aria-hidden="true" size={14} /></>}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TaskFirstHomeNarrative({
  certifications,
  messages,
  materialLabels,
  localizedHref,
}: TaskFirstHomeNarrativeProps) {
  const catalogue = messages.catalogue;
  const columns = buildHomeMaterialColumns({ messages, materialLabels, localizedHref });
  return (
    <>
      <section className={`${styles.section} ${styles.cool}`} aria-labelledby="home-collaboration-title">
        <div className={`site-container ${styles.whyLayout}`}>
          <div className={styles.whyCopy}>
            <SectionIntro
              className={styles.intro}
              titleClassName={styles.title}
              descriptionClassName={styles.description}
              title={messages.collaboration.title}
              titleId="home-collaboration-title"
              description={messages.collaboration.body}
            />
            <Link className={styles.textLink} href="#factory-snapshot">
              {messages.proof.eyebrow}<ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <ul className={styles.supportGrid} aria-label={messages.collaboration.itemsAria}>
            {messages.collaboration.items.map((item) => (
              <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>
            ))}
          </ul>
        </div>
      </section>
      <section id="entry-points" className={styles.section} aria-labelledby="home-catalogue-title">
        <div className="site-container">
          <header className={styles.sectionHeader}>
            <SectionIntro
              className={styles.intro}
              titleClassName={styles.title}
              descriptionClassName={styles.description}
              title={catalogue.title}
              titleId="home-catalogue-title"
              description={catalogue.body}
            />
            <Link className={styles.textLink} href={localizedHref("/products")}>
              {messages.core.allFamiliesAction}<ArrowRight aria-hidden="true" size={16} />
            </Link>
          </header>
          <HomeMaterialCatalogue columns={columns} />
        </div>
      </section>
      <section className={`${styles.section} ${styles.cool}`} aria-labelledby="home-components-title">
        <div className="site-container">
          <header className={styles.sectionHeader}>
            <SectionIntro className={styles.intro} titleClassName={styles.title} descriptionClassName={styles.description} title={messages.components.eyebrow} titleId="home-components-title" description={messages.components.title} />
            <Link className={styles.textLink} href={localizedHref("/components")}>
              {messages.components.action}<ArrowRight aria-hidden="true" size={16} />
            </Link>
          </header>
          <div className={styles.partGrid}>
            {messages.components.items.map((item, index) => (
              <HomeComponentCard
                key={item.title}
                {...homeComponentEntries[index]}
                href={localizedHref(homeComponentEntries[index].href)}
                title={item.title}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="home-applications-title">
        <div className="site-container">
          <header className={styles.sectionHeader}>
            <SectionIntro className={styles.intro} titleClassName={styles.title} descriptionClassName={styles.description} title={messages.applications.eyebrow} titleId="home-applications-title" description={messages.applications.title} />
            <Link className={styles.textLink} href={localizedHref("/applications")}>
              {messages.applications.action}<ArrowRight aria-hidden="true" size={16} />
            </Link>
          </header>
          <div className={styles.industryGrid}>
            {messages.applications.items.map((item, index) => (
              <HomeIndustryCard
                key={item.title}
                {...homeIndustryEntries[index]}
                href={localizedHref(homeIndustryEntries[index].href)}
                title={item.shortTitle ?? item.title}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>
      <HomeProofSection certifications={certifications} messages={messages} localizedHref={localizedHref} />
    </>
  );
}
