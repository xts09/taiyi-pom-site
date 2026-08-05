import Link from "next/link";
import Image from "next/image";
import { Fragment, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { CompanyMetrics } from "@/components/CompanyMetrics";
import { ExportRoutesSection } from "@/components/ExportRoutesSection";
import { HomeInquirySection } from "@/components/HomeInquirySection";
import { HomeMotion } from "@/components/HomeMotion";
import { HomeStageHeader } from "@/components/HomeStageHeader";
import { MaterialRangeAccordion } from "@/components/MaterialRangeAccordion";
import { QualitySystemsSection } from "@/components/QualitySystemsSection";
import { Button } from "@/components/ui/button";
import {
  availableDocuments,
  certifications,
  companyFigures,
} from "@/data/company";
import { exportRoutes } from "@/data/exportRoutes";
import {
  createPageMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { publicPath } from "@/lib/paths";
import { getCategoryPath } from "@/lib/productCategories";

export const metadata: Metadata = createPageMetadata({
  title: "Modified POM Compounds for Industrial Parts | Taiyi Polymer",
  description:
    "Taiyi Polymer manufactures modified POM compounds for wear-resistant, low-friction, reinforced, conductive and antistatic precision molded parts, with selected PA6, PA66 and PPA compound support.",
  path: "/",
});

const annualCapacity =
  companyFigures.find((item) => item.label === "Annual Capacity") ??
  companyFigures[1];

const supportingFigures = companyFigures.filter(
  (item) => item.label !== annualCapacity.label,
);

const materialDirections = [
  {
    title: "POM Compounds",
    description:
      "Core product line for wear-resistant, low-friction, reinforced, conductive, and antistatic molded part applications.",
    href: getCategoryPath("POM"),
    action: "Browse POM Compounds",
    specs: [
      ["Role", "Core Product Line"],
      ["Directions", "Wear / Friction / Reinforced"],
      ["Fit", "Precision Molded Parts"],
      ["Data", "Grade-Level TDS"],
    ],
  },
  {
    title: "PA6 Compounds",
    description:
      "Selected PA6 compounds for reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled molded parts.",
    href: getCategoryPath("PA6 Compound"),
    action: "Browse PA6 Compounds",
    specs: [
      ["Role", "Additional Material Family"],
      ["Material", "PA6"],
      ["Fit", "Reinforced / Impact Parts"],
      ["Scope", "Project-Based"],
    ],
  },
  {
    title: "PA66 Compounds",
    description:
      "Selected PA66 compounds for reinforced, flame-retardant, wear-related, and dimensionally stable molded parts.",
    href: getCategoryPath("PA66 Compound"),
    action: "Browse PA66 Compounds",
    specs: [
      ["Role", "Additional Material Family"],
      ["Material", "PA66"],
      ["Fit", "Stiffness / Heat Parts"],
      ["Scope", "Project-Based"],
    ],
  },
  {
    title: "PPA Compounds",
    description:
      "Project-based PPA compound support for higher-temperature molded parts requiring stiffness and dimensional stability.",
    href: getCategoryPath("PPA Compound"),
    action: "Browse PPA Compounds",
    specs: [
      ["Role", "Additional Material Family"],
      ["Material", "PPA"],
      ["Fit", "High-Temperature Parts"],
      ["Scope", "Project-Based"],
    ],
  },
  {
    title: "Base POM Resin",
    description:
      "Available as a supplementary sourcing line when customers require selected POM resin supply alongside compound support.",
    href: getCategoryPath("Base POM Resin"),
    action: "View Resin Grades",
    specs: [
      ["Role", "Supplementary Line"],
      ["Use", "Selected Sourcing"],
      ["Fit", "Base Resin Needs"],
      ["Color", "Natural"],
    ],
  },
];

const selectionFlow = [
  {
    stage: "Input",
    title: "Part and Tooling",
    description:
      "Part type, mold stage, cavity count, gate, movement mode and assembly environment.",
  },
  {
    stage: "Processing",
    title: "Processing and Shrinkage",
    description:
      "Flowability, multi-cavity filling, shrinkage, warpage, dimensional stability and color.",
  },
  {
    stage: "Performance",
    title: "Performance Targets",
    description:
      "Wear, friction, stiffness, impact, conductivity, antistatic behavior and working temperature.",
  },
  {
    stage: "Decision",
    title: "Grade Shortlist",
    description:
      "A practical shortlist with document availability and sample evaluation needs confirmed for the project.",
  },
];

function QualificationSteps({
  steps,
}: {
  steps: ReadonlyArray<(typeof selectionFlow)[number]>;
  }) {
  return (
    <div className="qualification-flow">
      <div className="qualification-progress" aria-hidden="true">
        <span className="qualification-progress-fill" />
      </div>
      <ol className="qualification-steps" aria-label="Grade qualification stages">
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

const inquiryChecklist = [
  "Part function and movement mode",
  "Mold / processing constraints",
  "Target properties or current failure point",
  "Required documents and sample timing",
];

const heroTitle = "Modified POM Compounds for Precision Molded Parts.";

const heroTitleWords = (() => {
  let letterIndex = 0;

  return heroTitle.split(" ").map((word) => ({
    word,
    letters: Array.from(word).map((letter) => ({
      letter,
      index: letterIndex++,
    })),
  }));
})();

export default function Home() {
  return (
    <HomeMotion>
      <main className="home-cinema home-redesign min-h-screen overflow-hidden text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <section className="home-hero relative isolate overflow-hidden">
          <video
            className="hero-video absolute inset-0 -z-20 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={publicPath("/factory-hero-95b-loop-v6-poster.jpg")}
            aria-hidden="true"
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
                  PLATFORM® engineering materials · Taiyi Polymer
                </span>
                <span className="hero-eyebrow-mobile">
                  PLATFORM® · Taiyi Polymer
                </span>
              </p>

              <h1
                className="hero-motion-title typewriter-title text-white"
                aria-label={heroTitle}
              >
                <span className="typewriter-visual" aria-hidden="true">
                  {heroTitleWords.map(({ word, letters }, wordIndex) => (
                    <Fragment key={`${word}-${wordIndex}`}>
                      <span className="type-word">
                        {letters.map(({ letter, index }) => (
                          <span
                            key={`${letter}-${index}`}
                            className="type-letter"
                            style={
                              { "--letter-index": index } as CSSProperties
                            }
                          >
                            {letter}
                          </span>
                        ))}
                      </span>
                      {wordIndex < heroTitleWords.length - 1 ? " " : null}
                    </Fragment>
                  ))}
                </span>
              </h1>

              <div className="hero-support-motion">
                <p className="hero-motion-copy hero-readable-copy">
                  Taiyi Polymer manufactures in Yancheng. Our modified POM
                  compounds support wear, friction,
                  reinforcement and static-control requirements. Grade review,
                  samples and technical documents are available by project.
                </p>

                <div className="hero-motion-actions">
                  <Button
                    asChild
                    size="lg"
                    className="cta-primary hero-cta-primary h-auto"
                  >
                    <Link href="/products">Explore Material Range</Link>
                  </Button>
                  <Link
                    href="/contact"
                    className="hero-cta-secondary inline-flex min-h-11 items-center gap-2"
                  >
                    Discuss Your Application
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CompanyMetrics
          annualCapacity={annualCapacity}
          supportingFigures={supportingFigures}
        />

        <section className="home-stage product-current">
          <span id="materials" className="home-section-anchor" aria-hidden="true" />
          <div className="site-container">
            <HomeStageHeader
              title="Material Range"
              className="product-current-head"
            >
              <p>
                Start with modified POM, our core product line. Selected PA6,
                PA66 and PPA compounds are reviewed when the part requires a
                different balance of stiffness, temperature or processing
                performance.
              </p>
              <div className="document-support">
                <span className="document-support-label">
                  Document support by grade and project
                </span>
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="document-support-link h-auto"
                >
                  <Link href="/technical-data-sheets">
                    Find Grade Data &amp; TDS
                    <ArrowRight aria-hidden="true" size={14} />
                  </Link>
                </Button>
                <div
                  className="document-tags"
                  aria-label="Typical material documents confirmed by grade and project"
                >
                  {availableDocuments.map((document) => (
                    <span key={document}>{document}</span>
                  ))}
                </div>
              </div>
            </HomeStageHeader>

            <div className="product-catalogue">
              <article className="product-core">
                <p>Core product line</p>
                <h3>{materialDirections[0].title}</h3>
                <p>{materialDirections[0].description}</p>
                <ul aria-label="POM compound directions">
                  <li>Wear resistance</li>
                  <li>Low friction</li>
                  <li>Reinforcement</li>
                  <li>Conductive / antistatic</li>
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
                    <Link href="/products">Complete material list</Link>
                  </Button>
                </div>
              </article>

              <MaterialRangeAccordion
                directions={materialDirections.slice(1)}
              />
            </div>
          </div>
        </section>

        <section
          id="grade-review"
          className="home-stage qualification-sequence overflow-clip text-white"
        >
          <div className="site-container">
            <div className="qualification-layout">
              <div className="qualification-feature-panel flex min-w-0 flex-col">
                <header className="qualification-heading">
                  <div className="stage-heading-main">
                    <h2>How We Shortlist a Grade</h2>
                  </div>
                  <div className="qualification-heading-copy grid max-w-[44rem] gap-4">
                    <p className="qualification-intro">
                      We start with the part, mold, operating conditions and
                      document needs. These inputs narrow candidate grades for
                      TDS review, samples and molding trials.
                    </p>
                    <Link
                      href="/applications"
                      className="qualification-link inline-flex min-h-11 items-center justify-self-start"
                    >
                      See application requirements &rarr;
                    </Link>
                  </div>
                </header>

                <div className="qualification-path flex min-w-0 flex-1 flex-col">
                  <figure className="qualification-visual">
                    <Image
                      fill
                      src={publicPath("/generated/pom-black-pellets-lab-hero.webp")}
                      alt="Black engineering-plastic pellets arranged in a laboratory dish."
                      sizes="(min-width: 1280px) 38vw, (min-width: 768px) 80vw, 100vw"
                    />
                    <figcaption>
                      <span>Material review</span>
                      <strong>
                        From molded-part requirements to a practical grade shortlist.
                      </strong>
                    </figcaption>
                  </figure>
                  <QualificationSteps steps={selectionFlow} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <QualitySystemsSection certifications={certifications} />

        <ExportRoutesSection routes={exportRoutes} />

        <HomeInquirySection checklist={inquiryChecklist} />

      </main>
    </HomeMotion>
  );
}
