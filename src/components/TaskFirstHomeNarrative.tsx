import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { DocumentCard } from "@/components/DocumentCard";
import { HomeCoreProductExplorer } from "@/components/HomeCoreProductExplorer";
import {
  availableDocuments,
  companyFigures,
  type Certification,
} from "@/data/company";
import type { HomeTaskFirstMessages } from "@/i18n/types";
import { publicPath } from "@/lib/paths";

const taskPathRoutes = [
  "/components",
  "/modified-pom-compounds#part-requirement-map",
  "/technical-data-sheets",
] as const;

const coreGroupRoutes = [
  {
    href: "/products/categories/wear-resistant-low-friction-pom-compound",
    related: [],
  },
  {
    href: "/products/categories/glass-fiber-reinforced-pom-compound",
    related: [
      "/products/categories/carbon-fiber-reinforced-pom-compound",
      "/products/categories/glass-bead-filled-pom-compound",
    ],
  },
  {
    href: "/products/categories/high-impact-pom-compound",
    related: ["/products/categories/uv-resistant-pom-compound"],
  },
  {
    href: "/products/categories/conductive-antistatic-pom-compound",
    related: ["/products/conductive-antistatic-compounds"],
  },
] as const;

const supportingMaterialRoutes = [
  "/products/categories/base-pom-resin",
  "/products/categories/pa6-compound",
  "/products/categories/pa66-compound",
  "/products/categories/ppa-compound",
] as const;

const applicationRoutes = [
  {
    href: "/components/precision-plastic-gears",
    image:
      "/applications/parts/generated/components-directory-gears-cad-transparent-v1.webp",
  },
  {
    href: "/components/bushings-and-sleeves",
    image:
      "/applications/parts/generated/components-directory-bushings-cad-transparent-v1.webp",
  },
  {
    href: "/components/conveyor-chain-components",
    image:
      "/applications/parts/generated/components-directory-conveyor-chain-cad-transparent-v1.webp",
  },
  {
    href: "/components/valve-spools-and-cartridges",
    image:
      "/applications/parts/generated/components-directory-valve-cartridges-cad-transparent-v1.webp",
  },
  {
    href: "/components/textile-guide-components",
    image:
      "/applications/parts/generated/components-directory-textile-guide-cad-transparent-v1.webp",
  },
  {
    href: "/components/ic-handling-trays",
    image:
      "/applications/parts/generated/components-directory-ic-jedec-tray-cad-transparent-v1.webp",
  },
] as const;

const proofFigures = [companyFigures[0], companyFigures[2], companyFigures[4]];

type TaskFirstHomeNarrativeProps = {
  certifications: readonly Certification[];
  messages: HomeTaskFirstMessages;
  localizedHref: (href: string) => string;
};

export function TaskFirstHomeNarrative({
  certifications,
  messages,
  localizedHref,
}: TaskFirstHomeNarrativeProps) {
  return (
    <>
      <section id="entry-points" className="home-task-entry home-task-section">
        <div className="site-container">
          <header className="home-task-intro">
            <div>
              <p className="home-task-eyebrow">{messages.entry.eyebrow}</p>
              <h2>{messages.entry.title}</h2>
            </div>
            <p>{messages.entry.body}</p>
          </header>

          <nav className="home-task-deck" aria-label={messages.entry.ariaLabel}>
            {messages.entry.items.map((item, index) => (
              <Link
                key={item.title}
                href={localizedHref(taskPathRoutes[index])}
              >
                <span className="home-task-path-label">{item.label}</span>
                <strong>{item.title}</strong>
                <span className="home-task-path-description">
                  {item.description}
                </span>
                <span className="home-task-path-action">
                  {item.action}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <HomeCoreProductExplorer
        messages={messages.core}
        pomHref={localizedHref("/products/categories/pom")}
        productsHref={localizedHref("/products")}
        groupHrefs={coreGroupRoutes.map((group) => ({
          href: localizedHref(group.href),
          related: group.related.map((href) => localizedHref(href)),
        }))}
        supportingHrefs={supportingMaterialRoutes.map((href) =>
          localizedHref(href),
        )}
      />

      <section className="home-application-paths home-task-section">
        <div className="site-container">
          <header className="home-task-intro home-application-intro">
            <div>
              <p className="home-task-eyebrow">
                {messages.applications.eyebrow}
              </p>
              <h2>{messages.applications.title}</h2>
            </div>
            <div>
              <p>{messages.applications.body}</p>
              <Link
                className="home-task-text-link"
                href={localizedHref("/components")}
              >
                {messages.applications.action}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </header>

          <div className="home-application-grid">
            {messages.applications.items.map((item, index) => (
              <Link
                key={item.title}
                className="home-application-card"
                href={localizedHref(applicationRoutes[index].href)}
              >
                <Image
                  fill
                  src={publicPath(applicationRoutes[index].image)}
                  alt={item.imageAlt}
                  sizes="(min-width: 80rem) 30vw, (min-width: 48rem) 45vw, 100vw"
                />
                <span className="home-application-scrim" aria-hidden="true" />
                <span className="home-application-copy">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                  <ArrowUpRight aria-hidden="true" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-process home-task-section">
        <div className="site-container home-process-layout">
          <header>
            <p className="home-task-eyebrow">{messages.process.eyebrow}</p>
            <h2>{messages.process.title}</h2>
            {messages.process.body ? <p>{messages.process.body}</p> : null}
          </header>
          <ol
            className="home-process-steps"
            aria-label={messages.process.stepsAria}
          >
            {messages.process.steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="home-collaboration home-task-section"
        aria-labelledby="home-collaboration-title"
      >
        <div className="site-container">
          <header className="home-task-intro home-collaboration-intro">
            <div>
              <p className="home-task-eyebrow">
                {messages.collaboration.eyebrow}
              </p>
              <h2 id="home-collaboration-title">
                {messages.collaboration.title}
              </h2>
            </div>
            {messages.collaboration.body ? (
              <p>{messages.collaboration.body}</p>
            ) : null}
          </header>

          <ul
            className="home-collaboration-principles"
            aria-label={messages.collaboration.itemsAria}
          >
            {messages.collaboration.items.map((item) => (
              <li key={item.title}>
                <span aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-proof home-task-section">
        <div className="site-container">
          <header className="home-task-intro home-proof-intro">
            <div>
              <p className="home-task-eyebrow">{messages.proof.eyebrow}</p>
              <h2>{messages.proof.title}</h2>
            </div>
            <div className="home-proof-intro-copy">
              <p>{messages.proof.body}</p>
              <figure className="home-proof-factory-figure">
                <Image
                  fill
                  src={publicPath("/factory-extrusion.webp")}
                  alt={messages.proof.factoryImageAlt}
                  sizes="(min-width: 80rem) 52vw, (min-width: 64rem) 55vw, 100vw"
                />
                <figcaption>{messages.proof.factoryImageCaption}</figcaption>
              </figure>
            </div>
          </header>

          <dl
            className="home-proof-metrics"
            aria-label={messages.proof.metricsAria}
          >
            {proofFigures.map((figure, index) => (
              <div key={figure.label}>
                <dt>{messages.proof.metricLabels[index]}</dt>
                <dd>
                  {figure.value}
                  <span>{messages.proof.metricNotes[index]}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="home-proof-detail">
            <div>
              <h3>{messages.proof.documentsTitle}</h3>
              <p>{messages.proof.documentsBody}</p>
              <div
                className="home-proof-documents"
                aria-label={messages.proof.documentsAria}
              >
                {availableDocuments.map((document) => (
                  <span key={document}>{document}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="home-proof-certificates">
            <header className="home-proof-certificates-head">
              <h3>{messages.proof.certificatesTitle}</h3>
              <Link
                className="home-proof-certificate-link"
                href={localizedHref("/about#overview-credentials-title")}
              >
                {messages.proof.certificateAction}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </header>

            <div className="home-proof-certificate-grid">
              {certifications.map((certificate) => (
                <DocumentCard
                  key={certificate.standard}
                  className="home-proof-certificate-card"
                  variant="certificate"
                  external
                  href={publicPath(certificate.documentHref)}
                  eyebrow={certificate.system}
                  title={certificate.standard}
                  previewAriaLabel={`${messages.proof.certificateOpenAction}: ${certificate.standard}`}
                  previewClassName="home-proof-certificate-preview"
                  preview={
                    <Image
                      width={64}
                      height={90}
                      src={publicPath(certificate.imageSrc)}
                      alt=""
                    />
                  }
                  actionLabel={
                    <>
                      {messages.proof.certificateOpenAction}
                      <ArrowUpRight aria-hidden="true" size={14} />
                    </>
                  }
                />
              ))}
            </div>

            <div className="home-international-support">
              <span>{messages.proof.internationalLabel}</span>
              <p>{messages.proof.internationalBody}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
