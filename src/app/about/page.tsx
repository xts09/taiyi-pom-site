import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ValueText } from "@/components/UnitText";
import {
  availableDocuments,
  certifications,
  companyFigures,
  companyOverview,
  factoryImages,
  honors,
} from "@/data/company";
import { publicPath } from "@/lib/paths";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Taiyi Nano | Modified Engineering Plastic Compounds",
  description:
    "Learn about Jiangsu Taiyi Nano Technology Co., Ltd., a factory-based manufacturer focused on modified POM and selected engineering plastic compound solutions.",
  path: "/about",
  image: "/company-profile.png",
});

const capabilities = [
  {
    title: "Modified Material Focus",
    description:
      "Focused on modified POM compounds for injection molding applications, with selected PA6, PA66, PPA, and PPS compound solutions developed around project requirements.",
  },
  {
    title: "In-house Production",
    description:
      "15 twin-screw extrusion lines support stable compounding, sample evaluation, and repeat batch communication for long-term industrial supply.",
  },
  {
    title: "Document Support",
    description:
      "For new material evaluation, we can provide TDS, SDS, COA, REACH, RoHS, and quality system documents according to grade and project needs.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="inner-hero about-hero reveal-up mb-8">
          <nav className="subpage-breadcrumb mb-5">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Taiyi Nano</span>
          </nav>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Factory-Based Modified Material Manufacturer
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Jiangsu Taiyi Nano Technology Co., Ltd. is a factory-based
            manufacturer in Yancheng, Jiangsu, China, focused on modified POM
            compounds and selected engineering plastic compounds for industrial applications.
          </p>
        </div>

        <section className="about-snapshot reveal-up reveal-delay-1 mb-10">
          <dl className="company-figure-ribbon stagger-list">
            {companyFigures.map((item, index) => (
              <div
                key={item.label}
                className="company-figure-item"
                style={{ "--item-index": index } as CSSProperties}
              >
                <dt>{item.label}</dt>
                <dd>
                  <ValueText value={item.value} />
                </dd>
                <span>
                  {item.note}
                </span>
              </div>
            ))}
          </dl>

          <div className="capability-line-list stagger-list">
            {capabilities.map((item, index) => (
              <section
                key={item.title}
                className="capability-line"
                style={{ "--item-index": index } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <h2>{item.title}</h2>

                  <p>
                    {item.description}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="factory-story mt-10">
          <div className="factory-story-media reveal-up">
            <div className="relative aspect-[16/10]">
              <Image
                src={publicPath("/factory-warehouse.png")}
                alt="Taiyi Nano production workshop"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="factory-story-copy reveal-up reveal-delay-1">
            <p className="section-kicker mb-3">Company Overview</p>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Factory Capability for Material Evaluation
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
              {companyOverview.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="factory-gallery stagger-list mt-6">
          {factoryImages
            .filter((image) => image.src !== "/factory-warehouse.png")
            .map((image, index) => (
              <figure
                key={image.src}
                className="factory-gallery-frame group"
                style={{ "--item-index": index } as CSSProperties}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={publicPath(image.src)}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption>
                  {image.label}
                </figcaption>
              </figure>
            ))}
        </section>

        <section className="credential-band about-credential-band reveal-up reveal-delay-1 mt-10">
          <h2 className="text-2xl font-black tracking-tight text-slate-950">
            How We Support Material Evaluation
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-slate-950">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((item) => (
                  <span
                    key={item}
                    className="document-chip"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-slate-950">
                Available Documents
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableDocuments.map((item) => (
                  <span
                    key={item}
                    className="document-chip"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200/80 pt-6">
            <h3 className="mb-3 font-semibold text-slate-950">Honors</h3>
            <ul className="grid gap-3 text-sm text-slate-700 md:grid-cols-3">
              {honors.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="cta-primary px-6 py-3 text-sm"
            >
              Discuss Your Application
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
