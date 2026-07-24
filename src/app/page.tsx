import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Metadata } from "next";
import { CompanyMetrics } from "@/components/CompanyMetrics";
import { ExportRoutesSection } from "@/components/ExportRoutesSection";
import { FactoryProofSection } from "@/components/FactoryProofSection";
import { HomeInquirySection } from "@/components/HomeInquirySection";
import { HomeMotion } from "@/components/HomeMotion";
import { HomeReviewCard } from "@/components/HomeReviewCard";
import { HomeStageHeader } from "@/components/HomeStageHeader";
import { MaterialRangeAccordion } from "@/components/MaterialRangeAccordion";
import { QualitySystemsSection } from "@/components/QualitySystemsSection";
import { Button } from "@/components/ui/button";
import {
  availableDocuments,
  certifications,
  companyFigures,
  factoryImages,
} from "@/data/company";
import {
  createPageMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { publicPath } from "@/lib/paths";
import { getCategoryPath } from "@/lib/productCategories";

export const metadata: Metadata = createPageMetadata({
  title: "Modified POM Compounds for Industrial Parts | Taiyi Nano",
  description:
    "Taiyi Nano manufactures modified POM compounds for wear-resistant, low-friction, reinforced, conductive and antistatic precision molded parts, with selected PA6, PA66 and PPA compound support.",
  path: "/",
});

const annualCapacity =
  companyFigures.find((item) => item.label === "Annual Capacity") ??
  companyFigures[1];

const supportingFigures = companyFigures.filter(
  (item) => item.label !== annualCapacity.label,
);

const exportMarkets = [
  {
    region: "Europe",
    coverage: "Germany, Italy, Turkey and Czechia",
  },
  {
    region: "South Korea",
    coverage: "Precision molded-part projects",
  },
  {
    region: "South America",
    coverage: "Brazil and Argentina",
  },
];

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
      "Selected PA6 compound directions for reinforced, impact-modified, flame-retardant, wear-related, and mineral-filled molded parts.",
    href: getCategoryPath("PA6 Compound"),
    action: "Review PA6 Direction",
    specs: [
      ["Role", "Extended Capability"],
      ["Material", "PA6"],
      ["Fit", "Reinforced / Impact Parts"],
      ["Review", "Project-Based"],
    ],
  },
  {
    title: "PA66 Compounds",
    description:
      "Selected PA66 compound directions for reinforced, flame-retardant, wear-related, and dimensionally stable molded parts.",
    href: getCategoryPath("PA66 Compound"),
    action: "Review PA66 Direction",
    specs: [
      ["Role", "Extended Capability"],
      ["Material", "PA66"],
      ["Fit", "Stiffness / Heat Parts"],
      ["Review", "Project-Based"],
    ],
  },
  {
    title: "PPA Compounds",
    description:
      "Project-based PPA compound support for higher-temperature molded parts requiring stiffness and dimensional stability.",
    href: getCategoryPath("PPA Compound"),
    action: "Review PPA Direction",
    specs: [
      ["Role", "Extended Capability"],
      ["Material", "PPA"],
      ["Fit", "High-Temperature Parts"],
      ["Review", "Project-Based"],
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
    title: "Part and Tooling",
    description:
      "Part type, mold stage, cavity count, gate, movement mode and assembly environment.",
  },
  {
    title: "Processing and Shrinkage",
    description:
      "Flowability, multi-cavity filling, shrinkage, warpage, dimensional stability and color.",
  },
  {
    title: "Performance Targets",
    description:
      "Wear, friction, stiffness, impact, conductivity, antistatic behavior and working temperature.",
  },
  {
    title: "Grade Direction",
    description:
      "A practical shortlist with document, sample and batch follow-up.",
  },
];

function QualificationSteps({
  steps,
}: {
  steps: ReadonlyArray<(typeof selectionFlow)[number]>;
}) {
  return (
    <ol className="qualification-steps grid flex-1 xl:grid-rows-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-t border-white/15 py-5 md:grid-cols-[2.25rem_minmax(15rem,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-x-6 md:py-6"
        >
          <span>0{index + 1}</span>
          <h3>{step.title}</h3>
          <p className="col-start-2 md:col-start-auto">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

const operationItems = [
  {
    label: "Record",
    title: "Production Records",
    detail:
      "Batch and production context for repeat supply and follow-up qualification.",
  },
  {
    label: "Inspection",
    title: "Incoming & In-Process Inspection",
    detail: "Incoming checks and in-process inspection context.",
  },
  {
    label: "Batch",
    title: "Batch Review",
    detail:
      "Batch information for purchasing and engineering review before release.",
  },
  {
    label: "Documents",
    title: "Qualification Documents",
    detail:
      "TDS, SDS, COA, REACH and RoHS available with the grade review.",
  },
];

const inquiryChecklist = [
  "Part function and movement mode",
  "Mold / processing constraints",
  "Target properties or current failure point",
  "Required documents and sample timing",
];

const heroTitle = "POM Compounds for Demanding Parts.";

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

const heroTitleLines = [heroTitleWords.slice(0, 2), heroTitleWords.slice(2)];

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
                  Modified engineering plastics from Yancheng, China
                </span>
                <span className="hero-eyebrow-mobile">
                  Engineering plastics from Yancheng
                </span>
              </p>

              <h1
                className="hero-motion-title typewriter-title max-w-[20.5rem] text-[2.3rem] leading-[1.08] text-white sm:max-w-3xl sm:text-[2.9rem] sm:leading-[1.04] md:text-[3.25rem] lg:text-[3.7rem] lg:leading-[1.02]"
                aria-label={heroTitle}
              >
                <span className="typewriter-visual" aria-hidden="true">
                  {heroTitleLines.map((line, lineIndex) => (
                    <Fragment key={`hero-title-line-${lineIndex}`}>
                      <span className="hero-title-line">
                        {line.map(({ word, letters }, wordIndex) => (
                          <Fragment key={`${word}-${lineIndex}-${wordIndex}`}>
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
                            {wordIndex < line.length - 1 ? " " : null}
                          </Fragment>
                        ))}
                      </span>
                      {lineIndex < heroTitleLines.length - 1 ? " " : null}
                    </Fragment>
                  ))}
                </span>
              </h1>

              <div className="hero-support-motion">
                <p className="hero-motion-copy hero-readable-copy">
                  Taiyi Nano manufactures wear-resistant, low-friction,
                  reinforced and conductive POM compounds for precision molded
                  parts, with PA6, PA66, PPA and PPS available by project.
                </p>

                <div className="hero-motion-actions">
                  <Button
                    asChild
                    size="lg"
                    className="cta-primary hero-cta-primary h-auto"
                  >
                    <Link href="/products">Browse material range</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="hero-cta-link h-auto"
                  >
                    <Link href="/contact">Send Requirement</Link>
                  </Button>
                </div>
              </div>
            </div>

            <HomeReviewCard className="hero-review-card-desktop" />
          </div>
        </section>

        <CompanyMetrics
          annualCapacity={annualCapacity}
          supportingFigures={supportingFigures}
        />

        <div className="home-review-mobile-shell">
          <div className="site-container">
            <HomeReviewCard className="hero-review-card-mobile" />
          </div>
        </div>

        <section className="home-stage product-current">
          <span id="materials" className="home-section-anchor" aria-hidden="true" />
          <div className="site-container">
            <HomeStageHeader
              title="Material Range"
              className="product-current-head"
            >
              <p>
                POM compounds lead the range, with selected PA6, PA66 and PPA
                directions for project review. Base POM resin supports
                supplementary sourcing.
              </p>
              <div className="document-support">
                <span className="document-support-label">Document support</span>
                <div
                  className="document-tags"
                  aria-label="Available material documents"
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
            <div className="qualification-layout grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:items-stretch xl:gap-14">
              <figure className="qualification-visual relative m-0 min-h-[21rem] overflow-hidden rounded-[var(--home-radius-card)] sm:min-h-[27rem] xl:min-h-[32rem]">
                <Image
                  src={publicPath(factoryImages[1].src)}
                  alt={factoryImages[1].alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 47vw"
                  className="object-cover"
                />
                <figcaption>{factoryImages[1].label}</figcaption>
              </figure>

              <div className="qualification-feature-panel flex min-w-0 flex-col">
                <header className="qualification-heading">
                  <div className="stage-heading-main">
                    <h2>Grade Qualification</h2>
                  </div>
                  <div className="qualification-heading-copy grid max-w-[44rem] gap-4">
                    <p className="qualification-intro">
                      The review starts with the part and tooling, then narrows the
                      material direction against processing and performance targets.
                    </p>
                    <Link
                      href="/applications"
                      className="qualification-link inline-flex min-h-11 items-center justify-self-start"
                    >
                      Browse application directions &rarr;
                    </Link>
                  </div>
                </header>

                <div className="qualification-path flex min-w-0 flex-1 flex-col">
                  <QualificationSteps steps={selectionFlow} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FactoryProofSection
          images={[factoryImages[2], factoryImages[0], factoryImages[3]]}
          evidence={operationItems}
        />

        <QualitySystemsSection certifications={certifications} />

        <ExportRoutesSection markets={exportMarkets} />

        <HomeInquirySection checklist={inquiryChecklist} />

      </main>
    </HomeMotion>
  );
}
