import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CompanyMetrics } from "@/components/CompanyMetrics";
import { ExportRoutesSection } from "@/components/ExportRoutesSection";
import { HomeInquirySection } from "@/components/HomeInquirySection";
import { HomeMotion } from "@/components/HomeMotion";
import { HomeStageHeader } from "@/components/HomeStageHeader";
import { MaterialRangeAccordion } from "@/components/MaterialRangeAccordion";
import { QualitySystemsSection } from "@/components/QualitySystemsSection";
import { TaskFirstHomeNarrative } from "@/components/TaskFirstHomeNarrative";
import { Button } from "@/components/ui/button";
import {
  availableDocuments,
  certifications,
  companyFigures,
  companyQualifications,
} from "@/data/company";
import { exportRoutes } from "@/data/exportRoutes";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import type { HomeMessages } from "@/i18n/types";
import { serializeJsonLd } from "@/lib/jsonLd";
import { publicPath } from "@/lib/paths";
import { getCategoryPath } from "@/lib/productCategories";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const materialPaths = [
  getCategoryPath("POM"),
  getCategoryPath("PA6 Compound"),
  getCategoryPath("PA66 Compound"),
  getCategoryPath("PPA Compound"),
  getCategoryPath("Base POM Resin"),
] as const;

type HomePageProps = {
  messages: HomeMessages;
  inLanguage: string;
  localeSegment?: LocalizedUrlSegment;
};

function QualificationSteps({
  steps,
  ariaLabel,
}: {
  steps: HomeMessages["qualification"]["steps"];
  ariaLabel: string;
}) {
  return (
    <div className="qualification-flow">
      <div className="qualification-progress" aria-hidden="true">
        <span className="qualification-progress-fill" />
      </div>
      <ol className="qualification-steps" aria-label={ariaLabel}>
        {steps.map((step, index) => (
          <li key={step.title} data-step={index + 1}>
            <span className="qualification-step-node" aria-hidden="true" />
            <div className="qualification-step-content">
              <div className="qualification-step-key">
                <span className="qualification-step-index">0{index + 1}</span>
                <span className="qualification-step-stage">{step.stage}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function HomePage({
  messages,
  inLanguage,
  localeSegment,
}: HomePageProps) {
  const localizedHref = (href: string) => getLocalizedHref(href, localeSegment);
  const taskFirstMessages = messages.taskFirst;
  const localizedFigures = companyFigures.map((figure, index) => ({
    ...figure,
    ...messages.metrics[index],
  }));
  const annualCapacity = localizedFigures[0];
  const supportingFigures = localizedFigures.slice(1);
  const materialDirections = messages.materials.items.map((item, index) => ({
    ...item,
    href: localizedHref(materialPaths[index]),
    specs: item.specs.map(([label, value]) => [label, value]),
  }));
  const localizedQualifications = companyQualifications.map(
    (qualification, index) => ({
      ...qualification,
      ...messages.quality.qualifications[index],
    }),
  );
  const localizedCertifications = certifications.map((certificate, index) => ({
    ...certificate,
    ...messages.quality.certifications[index],
  }));
  const localizedExportRoutes = exportRoutes.map((route, index) => ({
    ...route,
    ...messages.exportNetwork.routes[index],
  }));

  return (
    <HomeMotion>
      <main
        className={`home-cinema home-redesign min-h-screen overflow-hidden text-white${taskFirstMessages ? " home-task-first" : ""}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd([
              organizationJsonLd,
              { ...websiteJsonLd, inLanguage },
            ]),
          }}
        />
        <section className="home-hero relative isolate overflow-hidden">
          <video
            className="hero-video absolute inset-0 -z-20 h-full w-full object-cover"
            muted
            playsInline
            preload="metadata"
            poster={publicPath("/factory-hero-95b-loop-v6-poster.webp")}
            aria-hidden="true"
            data-loop-start="3"
          >
            <source
              src={publicPath("/factory-hero-95b-loop-v6.mp4")}
              type="video/mp4"
              media="(min-width: 520px)"
            />
          </video>
          <div className="site-container home-hero-grid">
            <div className="home-hero-content relative z-10">
              <p className="hero-eyebrow hero-motion-kicker">
                <span className="hero-eyebrow-desktop">
                  {messages.hero.eyebrowDesktop}
                </span>
                <span className="hero-eyebrow-mobile">
                  {messages.hero.eyebrowMobile}
                </span>
              </p>

              <h1
                className="hero-motion-title typewriter-title text-white"
                aria-label={messages.hero.title}
              >
                <span className="typewriter-visual" aria-hidden="true">
                  {messages.hero.title}
                </span>
              </h1>

              <div className="hero-support-motion">
                <p className="hero-motion-copy hero-readable-copy">
                  {messages.hero.body}
                </p>

                <div className="hero-motion-actions">
                  <Button
                    asChild
                    size="lg"
                    className="cta-primary hero-cta-primary h-auto"
                  >
                    <Link
                      href={taskFirstMessages ? "#entry-points" : "#materials"}
                    >
                      {messages.hero.exploreAction}
                    </Link>
                  </Button>
                  <Link
                    href={localizedHref(
                      taskFirstMessages ? "/technical-data-sheets" : "/contact",
                    )}
                    className="hero-cta-secondary inline-flex min-h-11 items-center gap-2"
                  >
                    {messages.hero.contactAction}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {taskFirstMessages ? (
          <TaskFirstHomeNarrative
            certifications={localizedCertifications}
            messages={taskFirstMessages}
            localizedHref={localizedHref}
          />
        ) : (
          <>
            <CompanyMetrics
              annualCapacity={annualCapacity}
              supportingFigures={supportingFigures}
            />

            <section className="home-stage product-current">
              <span
                id="materials"
                className="home-section-anchor"
                aria-hidden="true"
              />
              <div className="site-container">
                <HomeStageHeader
                  title={messages.materials.title}
                  className="product-current-head"
                >
                  <p>{messages.materials.body}</p>
                  <div className="document-support">
                    <span className="document-support-label">
                      {messages.materials.documentSupport}
                    </span>
                    <Button
                      asChild
                      variant="link"
                      size="sm"
                      className="document-support-link h-auto"
                    >
                      <Link href={localizedHref("/technical-data-sheets")}>
                        {messages.materials.dataSheetsAction}
                        <ArrowRight aria-hidden="true" size={14} />
                      </Link>
                    </Button>
                  </div>
                </HomeStageHeader>

                <div className="product-catalogue">
                  <article className="product-core">
                    <p>{messages.materials.coreLabel}</p>
                    <h3>{materialDirections[0].title}</h3>
                    <p>{materialDirections[0].description}</p>
                    <ul aria-label={messages.materials.coreDirectionsAria}>
                      {messages.materials.coreDirections.map((direction) => (
                        <li key={direction}>{direction}</li>
                      ))}
                    </ul>
                    <div>
                      <Button
                        asChild
                        className="catalogue-primary-link h-auto rounded-sm"
                      >
                        <Link href={materialDirections[0].href}>
                          {materialDirections[0].action} &rarr;
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="link"
                        className="catalogue-secondary-link h-auto"
                      >
                        <Link href={localizedHref("/products")}>
                          {messages.materials.allFamiliesAction}
                        </Link>
                      </Button>
                    </div>
                  </article>

                  <MaterialRangeAccordion
                    directions={materialDirections.slice(1)}
                    ariaLabel={messages.materials.additionalFamiliesAria}
                  />
                </div>
              </div>
            </section>

            <div className="qualification-evidence-continuum">
              <section
                id="grade-review"
                className="home-stage qualification-sequence overflow-clip text-white"
              >
                <div className="site-container">
                  <div className="qualification-layout">
                    <div className="qualification-feature-panel flex min-w-0 flex-col">
                      <header className="qualification-heading">
                        <div className="stage-heading-main">
                          <h2>{messages.qualification.title}</h2>
                        </div>
                        <div className="qualification-heading-copy grid max-w-[44rem] gap-4">
                          <p className="qualification-intro">
                            {messages.qualification.intro}
                          </p>
                          <Link
                            href={localizedHref("/applications")}
                            className="qualification-link inline-flex min-h-11 items-center justify-self-start"
                          >
                            {messages.qualification.applicationAction} &rarr;
                          </Link>
                        </div>
                      </header>

                      <div className="qualification-path flex min-w-0 flex-1 flex-col">
                        <figure className="qualification-visual">
                          <Image
                            fill
                            src={publicPath(
                              "/generated/pom-black-pellets-lab-hero.webp",
                            )}
                            alt={messages.qualification.figureAlt}
                            sizes="(min-width: 1280px) 38vw, (min-width: 768px) 80vw, 100vw"
                          />
                          <figcaption>
                            <span>{messages.qualification.figureLabel}</span>
                            <strong>
                              {messages.qualification.figureCaption}
                            </strong>
                          </figcaption>
                        </figure>
                        <QualificationSteps
                          steps={messages.qualification.steps}
                          ariaLabel={messages.qualification.stepsAria}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <QualitySystemsSection
                availableDocuments={availableDocuments}
                certifications={localizedCertifications}
                qualifications={localizedQualifications}
                messages={messages.quality}
              />
            </div>

            <ExportRoutesSection
              routes={localizedExportRoutes}
              messages={messages.exportNetwork}
            />
          </>
        )}

        <HomeInquirySection
          messages={messages.inquiry}
          contactHref={localizedHref("/contact")}
        />
      </main>
    </HomeMotion>
  );
}
