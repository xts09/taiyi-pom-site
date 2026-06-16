import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Metadata } from "next";
import { CompanyMetrics } from "@/components/CompanyMetrics";
import { HomeMotion } from "@/components/HomeMotion";
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
  title: "Modified POM & Engineering Plastic Compounds | Taiyi Nano",
  description:
    "We develop and produce modified POM, PA6, PA66, PPA, and PPS compounds for wear-resistant, low-friction, reinforced, and functional molded part applications. POM resin is also available for selected sourcing requirements.",
  path: "/",
});

const annualCapacity =
  companyFigures.find((item) => item.label === "Annual Capacity") ??
  companyFigures[1];

const supportingFigures = companyFigures.filter(
  (item) => item.label !== annualCapacity.label
);

const materialDirections = [
  {
    title: "Modified POM Compounds",
    description:
      "Core product line for wear-resistant, low-friction, reinforced, conductive, and antistatic molded part applications.",
    href: getCategoryPath("POM"),
    action: "Browse POM Materials",
    specs: [
      ["Role", "Core Product Line"],
      ["Directions", "Wear / Friction / Reinforced"],
      ["Fit", "Precision Molded Parts"],
      ["Data", "Grade-Level TDS"],
    ],
  },
  {
    title: "PA6 / PA66 Compounds",
    description:
      "Selected modified nylon compound solutions for reinforced, wear-related, and application-specific molded part requirements.",
    href: "/contact",
    action: "Discuss Requirement",
    specs: [
      ["Role", "Extended Capability"],
      ["Materials", "PA6 / PA66"],
      ["Fit", "Reinforced Parts"],
      ["Review", "Project-Based"],
    ],
  },
  {
    title: "PPA / PPS Compounds",
    description:
      "Selected high-performance compound solutions for applications requiring heat resistance, stiffness, or functional performance.",
    href: "/contact",
    action: "Discuss Requirement",
    specs: [
      ["Role", "Extended Capability"],
      ["Materials", "PPA / PPS"],
      ["Fit", "Heat-Related Parts"],
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

const heroTitle = "Modified POM & Engineering Plastic Compounds";

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
      <main className="home-cinema min-h-screen overflow-hidden text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <section className="home-hero relative isolate min-h-[calc(100vh-4.25rem)] overflow-hidden">
        <video
          className="hero-video absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={publicPath("/factory-hero-no-machine-poster.jpg")}
          aria-hidden="true"
        >
          <source
            src={publicPath("/factory-hero-no-machine.mp4")}
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

        <div className="mx-auto flex min-h-[calc(100vh-4.25rem)] max-w-7xl items-center px-5 py-14 sm:px-6 lg:px-8">
          <div className="relative z-10 w-full max-w-4xl">
            <div className="hero-motion-kicker hero-identity mb-6">
              <p>Jiangsu Taiyi Nano Technology Co., Ltd.</p>
              <span>Modified POM Materials &amp; Engineering Plastic Compounds</span>
            </div>

            <h1
              className="hero-motion-title typewriter-title max-w-[20.5rem] text-[2.3rem] font-black leading-[1.08] tracking-tight text-white sm:max-w-4xl sm:text-[2.9rem] sm:leading-[1.04] md:text-[3.25rem] lg:text-6xl lg:leading-[1.02]"
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
                          style={{ "--letter-index": index } as CSSProperties}
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

            <p className="hero-motion-copy hero-readable-copy mt-6 max-w-2xl text-base leading-8 sm:text-lg">
              Modified POM compounds for wear-resistant, low-friction,
              reinforced, conductive, and antistatic molded parts. We also
              support selected PA6, PA66, PPA, PPS, and base POM resin sourcing
              for project-based material review.
            </p>

            <div className="hero-motion-actions mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="cta-primary hero-cta-primary px-6 py-3 text-sm"
              >
                Compare POM Grades
              </Link>
              <Link
                href="/contact"
                className="hero-cta-link px-2 py-3 text-sm"
              >
                Discuss My Application
              </Link>
            </div>
          </div>
        </div>
        </section>

        <CompanyMetrics
          annualCapacity={annualCapacity}
          supportingFigures={supportingFigures}
        />

        <section className="home-section product-current relative px-5 py-14 sm:px-6 lg:px-8">
        <div className="product-current-inner mx-auto max-w-7xl">
          <div className="product-current-head">
            <div className="product-current-copy">
              <p className="section-kicker mb-3">Product Portfolio</p>
              <h2>Material Portfolio Structure</h2>
              <p>
                Modified compounds are the main line. POM resin is shown as a
                supplementary product line for selected sourcing requirements.
              </p>
            </div>

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

        <section className="home-section selection-corridor px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="section-motion-copy selection-motion-copy">
            <p className="section-kicker mb-3">Selection Logic</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Application-Based Material Recommendation
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              We evaluate the molded part together with mold development,
              cavity layout, shrinkage behavior, working conditions, and
              performance targets before recommending a practical grade
              direction.
            </p>
          </div>

          <div className="flow-path">
            <span className="flow-path-line" aria-hidden="true" />
            {selectionFlow.map((item, index) => (
              <div
                key={item.title}
                className="flow-point"
                style={{ "--item-index": index } as CSSProperties}
              >
                <span>{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="home-section factory-sequence px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="factory-lead">
            <div className="section-motion-copy operation-motion-copy">
              <p className="section-kicker mb-3">Operations</p>
              <h2>Manufacturing and Quality Communication</h2>
              <p>
                Production and testing information helps purchasing teams,
                distributors, and engineering teams compare materials and qualify
                supply routes with less friction.
              </p>
            </div>

            <div className="operation-stack">
              {operationItems.map((item, index) => (
                <p key={item} style={{ "--item-index": index } as CSSProperties}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="factory-film">
            {factoryImages.map((image, index) => (
              <figure
                key={image.src}
                className={index === 0 ? "factory-frame factory-frame-large" : "factory-frame"}
                style={{ "--item-index": index } as CSSProperties}
              >
                <Image
                  src={publicPath(image.src)}
                  alt={image.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 24vw, 100vw"}
                  className="object-cover"
                />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

        <section className="home-cta px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="cta-ribbon">
            <div>
              <p className="section-kicker mb-3">Inquiry Preparation</p>
              <h2>Need a Material Recommendation?</h2>
              <p>
                Share the application, mold stage, cavity count, target
                shrinkage or dimensional concern, current material reference,
                color, document requirements, and estimated volume. We will
                recommend a suitable modified material direction for review.
              </p>
            </div>

            <Link href="/contact" className="cta-primary shrink-0 px-7 py-3 text-sm">
              Contact Sales
            </Link>
          </div>
        </div>
        </section>
      </main>
    </HomeMotion>
  );
}
