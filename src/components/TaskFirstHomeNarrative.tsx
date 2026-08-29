import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  CircuitBoard,
  Cog,
  Droplets,
  Spool,
  Trees,
  WashingMachine,
  Waypoints,
} from "lucide-react";

import { DocumentCard } from "@/components/DocumentCard";
import { HomeCoreProductExplorer } from "@/components/HomeCoreProductExplorer";
import { Button } from "@/components/ui/button";
import {
  availableDocuments,
  companyFigures,
  type Certification,
} from "@/data/company";
import type { HomeTaskFirstMessages } from "@/i18n/types";
import { createContactHref } from "@/lib/contactContext";
import { publicPath } from "@/lib/paths";

const materialFamilyRoutes = [
  "/products/categories/pom",
  "/products/categories/pa6-compound",
  "/products/categories/pa66-compound",
  "/products/categories/ppa-compound",
] as const;

const componentRoutes = [
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

const applicationRoutes = [
  {
    href: "/applications/automotive",
    icon: CarFront,
  },
  {
    href: "/applications/electronics",
    icon: CircuitBoard,
  },
  {
    href: "/applications/conveyor-automation",
    icon: Waypoints,
  },
  {
    href: "/applications/motion-components",
    icon: Cog,
  },
  {
    href: "/applications/water-control",
    icon: Droplets,
  },
  {
    href: "/applications/washing-machine-components",
    icon: WashingMachine,
  },
  {
    href: "/applications/outdoor-equipment",
    icon: Trees,
  },
  {
    href: "/applications/textile-machinery",
    icon: Spool,
  },
] as const;

const proofFigures = [companyFigures[0], companyFigures[2], companyFigures[4]];

type TaskFirstHomeNarrativeProps = {
  certifications: readonly Certification[];
  messages: HomeTaskFirstMessages;
  localizedHref: (href: string) => string;
};

function HomeProofSection({
  certifications,
  messages,
  localizedHref,
}: TaskFirstHomeNarrativeProps) {
  return (
    <section className="home-proof home-task-section">
      <div className="site-container">
        <header className="home-task-intro home-proof-intro">
          <div className="home-proof-intro-copy">
            <h2>{messages.proof.eyebrow}</h2>
            <p>{messages.proof.body}</p>
          </div>
          <figure className="home-proof-factory-figure">
            <Image
              fill
              src={publicPath("/factory-extrusion.webp")}
              alt={messages.proof.factoryImageAlt}
              sizes="(min-width: 80rem) 52vw, (min-width: 64rem) 55vw, 100vw"
            />
            <figcaption>{messages.proof.factoryImageCaption}</figcaption>
          </figure>
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
          <div className="home-proof-detail-copy">
            <h3>{messages.proof.documentsTitle}</h3>
            <p>{messages.proof.documentsBody}</p>
          </div>
          <dl
            className="home-proof-documents"
            aria-label={messages.proof.documentsAria}
          >
            {availableDocuments.map((document, index) => (
              <div key={document}>
                <dt>{document}</dt>
                <dd>{messages.proof.documentTypeDescriptions[index]}</dd>
              </div>
            ))}
          </dl>
          <Link
            className="home-task-text-link home-proof-documents-action"
            href={localizedHref(
              createContactHref({ source: messages.proof.documentsTitle }),
            )}
          >
            {messages.proof.documentsAction}
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
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
  );
}

export function TaskFirstHomeNarrative({
  certifications,
  messages,
  localizedHref,
}: TaskFirstHomeNarrativeProps) {
  return (
    <>
      <HomeCoreProductExplorer
        messages={messages.core}
        familyHrefs={materialFamilyRoutes.map((href) => localizedHref(href))}
        pomHref={localizedHref("/products/categories/pom")}
        carbonFiberHref={localizedHref(
          "/products/categories/carbon-fiber-reinforced-pom-compound",
        )}
      />

      <section className="home-component-paths home-task-section">
        <div className="site-container">
          <header className="home-task-intro home-application-intro">
            <h2>{messages.components.eyebrow}</h2>
            <div>
              <p>{messages.components.title}</p>
              <Link
                className="home-task-text-link"
                href={localizedHref("/components")}
              >
                {messages.components.action}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </header>

          <div className="home-application-grid home-component-grid">
            {messages.components.items.map((item, index) => (
              <Link
                key={item.title}
                className="home-application-card"
                href={localizedHref(componentRoutes[index].href)}
              >
                <Image
                  fill
                  src={publicPath(componentRoutes[index].image)}
                  alt={item.imageAlt}
                  sizes="(min-width: 64rem) 30vw, (min-width: 48rem) 45vw, 100vw"
                />
                <span className="home-application-scrim" aria-hidden="true" />
                <span className="home-application-copy">
                  <strong>{item.title}</strong>
                  <ArrowUpRight aria-hidden="true" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-application-paths home-task-section">
        <div className="site-container">
          <header className="home-task-intro home-application-intro">
            <h2>{messages.applications.eyebrow}</h2>
            <div>
              <p>{messages.applications.title}</p>
              <Link
                className="home-task-text-link"
                href={localizedHref("/applications")}
              >
                {messages.applications.action}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </header>

          <div className="home-application-grid home-application-icon-grid">
            {messages.applications.items.map((item, index) => {
              const ApplicationIcon = applicationRoutes[index].icon;

              return (
                <Link
                  key={item.title}
                  className="home-application-card home-application-card--icon"
                  href={localizedHref(applicationRoutes[index].href)}
                >
                  <span className="home-application-icon" aria-hidden="true">
                    <ApplicationIcon size={48} strokeWidth={1.5} />
                  </span>
                  <strong className="home-application-label">
                    {item.shortTitle ?? item.title}
                  </strong>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="home-collaboration home-task-section"
        aria-labelledby="home-collaboration-title"
      >
        <div className="site-container">
          <div className="home-collaboration-main">
            <header className="home-collaboration-intro">
              <p>{messages.collaboration.eyebrow}</p>
              <h2 id="home-collaboration-title">
                {messages.collaboration.title}
              </h2>
              <p>{messages.collaboration.body}</p>
            </header>

            <ul
              className="home-collaboration-principles"
              aria-label={messages.collaboration.itemsAria}
            >
              {messages.collaboration.items.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-collaboration-process">
            <ol
              className="home-collaboration-process-steps"
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
            <div className="home-collaboration-action-wrap">
              <Button
                asChild
                className="home-collaboration-action"
                size="form"
                variant="inverse"
              >
                <Link href={localizedHref("/contact")}>
                  {messages.collaboration.action}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <HomeProofSection
        certifications={certifications}
        messages={messages}
        localizedHref={localizedHref}
      />

    </>
  );
}
