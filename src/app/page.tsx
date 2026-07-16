import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Metadata } from "next";
import { CompanyMetrics } from "@/components/CompanyMetrics";
import { ExportMarketsMap } from "@/components/ExportMarketsMap";
import { HomeMotion } from "@/components/HomeMotion";
import { SelectionLogicStepper } from "@/components/SelectionLogicStepper";
import {
  availableDocuments,
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
    "Taiyi Nano manufactures modified POM compounds for wear-resistant, low-friction, reinforced, conductive and antistatic precision molded parts, with selected PA6, PA66, PPA and PPS compound support.",
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
    title: "PPS Compounds",
    description:
      "Project-based PPS compound support for heat-resistant, chemically exposed, and dimensionally controlled molded parts.",
    href: getCategoryPath("PPS Compound"),
    action: "Review PPS Direction",
    specs: [
      ["Role", "Extended Capability"],
      ["Material", "PPS"],
      ["Fit", "Heat / Chemical Exposure"],
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
    title: "Part and Tooling Review",
    description:
      "Part type, mold development stage, cavity count, gate / flow path, movement mode, and assembly environment.",
  },
  {
    title: "Processing and Shrinkage Targets",
    description:
      "Flowability, filling balance for multi-cavity tooling, molding shrinkage, warpage, dimensional stability, and color requirements.",
  },
  {
    title: "Performance Targets",
    description:
      "Wear resistance, friction, stiffness, impact resistance, conductivity, antistatic performance, and working temperature.",
  },
  {
    title: "Grade Direction",
    description:
      "Grade shortlist based on tool design, shrinkage behavior, property targets, document support, sample discussion, and batch communication.",
  },
];

const operationItems = [
  "Production Records for Repeat Supply",
  "Incoming and In-Process Inspection",
  "Batch Information for Customer Review",
  "Document Support for Qualification",
];

const heroTitle = "Modified POM Compounds for Demanding Industrial Parts";

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

const heroTitleLines = [
  heroTitleWords.slice(0, 3),
  heroTitleWords.slice(3),
];

export default function Home() {
  return (
    <HomeMotion>
      <main className="home-cinema min-h-screen overflow-hidden text-white">
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
          <div className="home-noise" />
          <div className="polymer-field" aria-hidden="true">
            {Array.from({ length: 13 }).map((_, index) => (
              <span
                key={index}
                style={{ "--particle-index": index } as CSSProperties}
              />
            ))}
          </div>

          <div className="site-container flex items-center py-14">
            <div className="home-hero-content relative z-10 w-full">
              <p className="hero-eyebrow hero-motion-kicker">
                Factory-Based Engineering Plastic Compounder
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
                <p className="hero-motion-copy hero-readable-copy mt-6 max-w-2xl text-base leading-8 sm:text-[1.05rem]">
                  Taiyi Nano manufactures wear-resistant, low-friction,
                  reinforced, conductive and antistatic POM compounds for gears,
                  bushings, sliding parts, valve components and precision molded
                  parts. Selected PA6, PA66, PPA and PPS compounds are also
                  available for project-based development.
                </p>

                <div className="hero-motion-actions mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="cta-primary hero-cta-primary px-6 py-3 text-sm"
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/contact"
                    className="hero-cta-link px-2 py-3 text-sm"
                  >
                    Discuss Your Application
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

        <section className="home-section product-current relative py-14">
          <div className="site-container product-current-inner">
            <div className="product-current-head">
              <div className="product-current-copy">
                <p className="section-kicker mb-3">Product Portfolio</p>
                <h2>Material Portfolio Structure</h2>
                <p>
                  Modified compounds are the main line. POM resin is shown as a
                  supplementary product line for selected sourcing requirements.
                </p>

                <div className="product-current-aside">
                  <div className="document-line">
                    Available Material Documents:{" "}
                    <span>{availableDocuments.join(" / ")}</span>.
                  </div>

                  <div className="product-current-actions">
                    <Link href="/products" className="text-link">
                      View Complete Material List &rarr;
                    </Link>
                    <Link href="/contact" className="text-link">
                      Send Requirement &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-stream">
              {materialDirections.map((direction, index) => (
                <details
                  key={direction.title}
                  className="product-disclosure"
                  open={index === 0}
                  style={{ "--item-index": index } as CSSProperties}
                >
                  <summary className="product-disclosure-summary">
                    <span className="product-index">0{index + 1}</span>

                    <span className="product-line-main">
                      <h3>{direction.title}</h3>
                      <span>{direction.specs[0][1]}</span>
                    </span>

                    <span className="product-disclosure-hint">
                      View Direction
                    </span>

                    <span className="product-arrow" aria-hidden="true">
                      +
                    </span>
                  </summary>

                  <div className="product-disclosure-body">
                    <div>
                      <p>{direction.description}</p>

                      <dl className="product-specs">
                        {direction.specs.slice(1).map(([label, value]) => (
                          <div key={label}>
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                          </div>
                        ))}
                      </dl>

                      <Link href={direction.href} className="text-link">
                        {direction.action} &rarr;
                      </Link>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section selection-corridor py-20">
          <div className="site-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="section-motion-copy selection-motion-copy">
              <p className="section-kicker mb-3">Selection Logic</p>
              <h2 className="text-3xl sm:text-4xl">
                Material Review Before Recommendation
              </h2>
              <p className="mt-5 max-w-xl">
                We evaluate the molded part together with mold development,
                cavity layout, shrinkage behavior, working conditions, and
                performance targets before recommending a practical grade
                direction.
              </p>

              <Link
                href="/applications"
                className="selection-corridor-link mt-6 inline-flex"
              >
                Browse Application Areas &rarr;
              </Link>
            </div>

            <SelectionLogicStepper steps={selectionFlow} />
          </div>
        </section>

        <section className="home-section factory-sequence py-20">
          <div className="site-container">
            <div className="factory-lead">
              <div className="section-motion-copy operation-motion-copy">
                <p className="section-kicker mb-3">Operations</p>
                <h2>Manufacturing and Quality Communication</h2>
                <p>
                  Production and testing information helps purchasing teams,
                  distributors, and engineering teams compare materials and
                  qualify supply routes with less friction.
                </p>
              </div>

              <div className="operation-stack">
                {operationItems.map((item, index) => (
                  <p
                    key={item}
                    style={{ "--item-index": index } as CSSProperties}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="factory-film">
              {factoryImages.map((image, index) => (
                <figure
                  key={image.src}
                  className={
                    index === 0
                      ? "factory-frame factory-frame-large"
                      : "factory-frame"
                  }
                  style={{ "--item-index": index } as CSSProperties}
                >
                  <Image
                    src={publicPath(image.src)}
                    alt={image.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 50vw, 100vw"
                        : "(min-width: 1024px) 24vw, 100vw"
                    }
                    className="object-cover"
                  />
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section global-footprint">
          <div className="site-container global-footprint-inner">
            <div className="global-footprint-copy">
              <p className="section-kicker">Global Supply Footprint</p>
              <h2>Export Markets</h2>
              <p>
                Current supply routes cover Europe, South Korea and South
                America for project-based material communication.
              </p>

              <dl className="export-market-summary">
                {exportMarkets.map((market) => (
                  <div key={market.region}>
                    <dt>{market.region}</dt>
                    <dd>{market.coverage}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ExportMarketsMap />
          </div>
        </section>

        <section className="home-inquiry">
          <div className="site-container home-inquiry-inner">
            <div>
              <p>Material Review</p>
              <h2>Have a part or material requirement?</h2>
            </div>
            <Link href="/contact" className="home-inquiry-action">
              Discuss Your Application
            </Link>
          </div>
        </section>

      </main>
    </HomeMotion>
  );
}
