import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { CountUpValue } from "@/components/CountUpValue";
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

export const metadata: Metadata = createPageMetadata({
  title: "Natural POM Resin & Modified POM Compounds Supplier | Taiyi Nano",
  description:
    "Taiyi Nano is a China-based manufacturer supplying Natural POM Resin and Modified POM Compounds for automotive, electrical, industrial, and precision molded parts.",
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
    title: "Natural POM Resin",
    description:
      "Natural injection molding resin direction for precision molded parts, automotive components, and general engineering plastic applications.",
    href: "/products?category=Natural%20POM%20Resin",
    specs: [
      ["Direction", "Injection molding"],
      ["Fit", "General molded parts"],
      ["Review focus", "Flow / strength"],
      ["Color", "Natural"],
    ],
  },
  {
    title: "Wear-resistant POM Compound",
    description:
      "Modified POM Compound direction for gears, bushings, sliding parts, and moving assemblies that require wear resistance.",
    href: "/products?category=Wear-resistant%20POM%20Compound",
    specs: [
      ["Direction", "Wear resistance"],
      ["Fit", "Sliding parts"],
      ["Review focus", "Friction / wear"],
      ["Color", "Natural"],
    ],
  },
  {
    title: "Low-friction POM Compound",
    description:
      "Project-based Modified POM Compound direction for lower friction, smoother movement, and application-specific formulation review.",
    href: "/products?category=Low-friction%20POM%20Compound",
    specs: [
      ["Direction", "Low friction"],
      ["Fit", "Moving assemblies"],
      ["Review focus", "Friction target"],
      ["Color", "Custom"],
    ],
  },
  {
    title: "Glass Fiber Reinforced POM Compound",
    description:
      "Reinforced POM Compound direction for higher stiffness, lower shrinkage, improved heat resistance, and structural molded parts.",
    href: "/products?category=Glass%20Fiber%20Reinforced%20POM%20Compound",
    specs: [
      ["Direction", "Reinforced"],
      ["Fit", "Structural parts"],
      ["Review focus", "Stiffness / HDT"],
      ["Color", "Natural"],
    ],
  },
  {
    title: "Conductive / Antistatic POM Compound",
    description:
      "Functional Modified POM Compound direction for selected electronic or industrial molded parts with resistivity requirements.",
    href: "/products?category=Conductive%20%2F%20Antistatic%20POM%20Compound",
    specs: [
      ["Direction", "Functional"],
      ["Fit", "ESD-related parts"],
      ["Review focus", "Resistivity"],
      ["Color", "Black"],
    ],
  },
];

const selectionFlow = [
  {
    title: "Application",
    description: "Part type, working condition, movement mode, and assembly environment.",
  },
  {
    title: "Performance targets",
    description: "Wear, friction, stiffness, flow, dimensional stability, and color needs.",
  },
  {
    title: "Material direction",
    description: "Natural POM Resin, Low-friction POM Compound, Wear-resistant POM Compound, Glass Fiber Reinforced POM Compound, or Conductive POM Compound.",
  },
  {
    title: "Evaluation support",
    description: "Grade review, document support, sample discussion, and batch communication.",
  },
];

const operationItems = [
  "Production records for repeat supply",
  "Incoming and in-process inspection",
  "Batch information for customer review",
  "Document support for qualification",
];

export default function Home() {
  return (
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
          preload="metadata"
          poster="/factory-hero-clean-poster.jpg"
          aria-hidden="true"
        >
          <source src="/factory-hero-clean.mp4" type="video/mp4" />
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
          <div className="reveal-up relative z-10">
            <p className="eyebrow-glass mb-6 inline-flex max-w-full px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-cyan-100 sm:text-xs sm:tracking-[0.18em]">
              <span className="sm:hidden">Taiyi Nano Materials</span>
              <span className="hidden sm:inline">
                Jiangsu Taiyi Nano Technology Co., Ltd.
              </span>
            </p>

            <h1 className="max-w-[20.5rem] text-[2.35rem] font-black leading-[1.08] tracking-tight text-white sm:max-w-4xl sm:text-5xl md:text-6xl md:leading-[1.02]">
              Natural POM Resin &amp; Modified POM Compounds Supplier
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Factory-based manufacturer of high-performance modified engineering
              plastics, focused on POM compounds and customized material
              solutions for automotive, electrical, industrial, and precision
              component applications.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className="cta-primary px-6 py-3 text-sm">
                Browse Materials
              </Link>
              <Link href="/contact" className="cta-secondary px-6 py-3 text-sm">
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="manufacturing-base relative z-10 px-5 sm:px-6 lg:px-8">
        <div className="base-shell reveal-up mx-auto max-w-7xl">
          <div className="base-figure">
            <p className="section-kicker">{annualCapacity.label}</p>
            <strong>
              <CountUpValue value={annualCapacity.value} />
            </strong>
            <span>{annualCapacity.note}</span>
          </div>

          <div className="base-metrics">
            {supportingFigures.map((item, index) => (
              <div
                key={item.label}
                className="base-metric"
                style={{ "--item-index": index } as CSSProperties}
              >
                <p>{item.label}</p>
                <strong>
                  <CountUpValue value={item.value} />
                </strong>
                <span>{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section product-current relative px-5 py-20 sm:px-6 lg:px-8">
        <div className="product-current-inner reveal-up mx-auto max-w-7xl">
          <div className="product-current-head">
            <div className="product-current-copy">
              <p className="section-kicker mb-3">Product portfolio</p>
              <h2>Main POM material directions</h2>
              <p>
                Product pages are organized around grade information, material
                direction, physical properties, and typical molding applications.
              </p>
            </div>

            <div className="product-current-aside">
              <div className="document-line">
                Available material documents:{" "}
                <span>{availableDocuments.join(" / ")}</span>.
              </div>

              <Link href="/products" className="text-link">
                View complete product list &rarr;
              </Link>
            </div>
          </div>

          <div className="product-stream reveal-up reveal-delay-1">
            {materialDirections.map((direction, index) => (
              <Link
                key={direction.title}
                href={direction.href}
                className="product-line"
                style={{ "--item-index": index } as CSSProperties}
              >
                <span className="product-index">0{index + 1}</span>

                <div className="product-line-main">
                  <h3>{direction.title}</h3>
                  <span>{direction.description}</span>
                </div>

                <dl className="product-specs">
                  {direction.specs.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>

                <span className="product-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section selection-corridor px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal-up">
            <p className="section-kicker mb-3">Selection logic</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              From part requirement to material direction
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              For B2B material evaluation, the most important work is not simply
              choosing a product name. We first clarify the molded part, then
              translate working conditions into a practical POM material
              direction.
            </p>
          </div>

          <div className="flow-path reveal-up reveal-delay-1">
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
          <div className="factory-lead reveal-up">
            <div>
              <p className="section-kicker mb-3">Operations</p>
              <h2>Manufacturing and quality communication</h2>
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

          <div className="factory-film reveal-up reveal-delay-1">
            {factoryImages.map((image, index) => (
              <figure
                key={image.src}
                className={index === 0 ? "factory-frame factory-frame-large" : "factory-frame"}
                style={{ "--item-index": index } as CSSProperties}
              >
                <Image
                  src={image.src}
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
          <div className="cta-ribbon reveal-up">
            <div>
              <p className="section-kicker mb-3">Inquiry preparation</p>
              <h2>Need a POM material recommendation?</h2>
              <p>
                Share the application, key performance requirements, current
                material reference, color, document requirements, and estimated
                volume. We will recommend a suitable material direction for review.
              </p>
            </div>

            <Link href="/contact" className="cta-primary shrink-0 px-7 py-3 text-sm">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
