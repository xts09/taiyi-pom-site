import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
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
  title: "About Taiyi Nano | Natural POM Resin & Modified POM Compounds",
  description:
    "Learn about Jiangsu Taiyi Nano Technology Co., Ltd., a China-based supplier focused on Natural POM Resin and Modified POM Compounds for engineering plastic applications.",
  path: "/about",
  image: "/company-profile.png",
});

const capabilities = [
  {
    title: "POM Material Focus",
    description:
      "Focused on Modified POM Compounds and engineering plastic compounds for injection molding applications, including Wear-resistant POM Compound, Low-friction POM Compound, Glass Fiber Reinforced POM Compound, and Conductive / Antistatic POM Compound directions.",
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
      <section className="mesh-surface mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="inner-hero reveal-up mb-12 max-w-4xl">
          <p className="section-kicker mb-4">
            About Taiyi Nano
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Natural POM Resin &amp; Modified POM Compounds for Engineering Plastic Applications
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Jiangsu Taiyi Nano Technology Co., Ltd. is a factory-based
            manufacturer in Yancheng, Jiangsu, China, focused on modified POM
            compounds and engineering plastic compounds for industrial applications.
          </p>
        </div>

        <div className="stagger-list mb-12 grid gap-4 md:grid-cols-5">
          {companyFigures.map((item, index) => (
            <div
              key={item.label}
              className="premium-card lift-card rounded-[1.1rem] p-5"
              style={{ "--item-index": index } as CSSProperties}
            >
              <p className="section-kicker mb-3">{item.label}</p>
              <p className="text-2xl font-black text-blue-700">{item.value}</p>
              <p className="mt-1 text-xs font-bold text-slate-500">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="stagger-list grid gap-5 md:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="premium-card lift-card rounded-[1.1rem] p-6"
              style={{ "--item-index": index } as CSSProperties}
            >
              <h2 className="mb-3 text-lg font-semibold text-slate-950">
                {item.title}
              </h2>

              <p className="text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="premium-card reveal-up overflow-hidden rounded-[1.2rem]">
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

          <div className="premium-card reveal-up reveal-delay-1 rounded-[1.2rem] p-7">
            <p className="section-kicker mb-3">Company overview</p>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Factory capability for material evaluation
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

        <section className="stagger-list mt-6 grid gap-4 md:grid-cols-3">
          {factoryImages
            .filter((image) => image.src !== "/factory-warehouse.png")
            .map((image, index) => (
              <figure
                key={image.src}
                className="premium-card lift-card group overflow-hidden rounded-[1.1rem]"
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
                <figcaption className="px-4 py-3 text-sm font-black text-slate-950">
                  {image.label}
                </figcaption>
              </figure>
            ))}
        </section>

        <section className="premium-card reveal-up reveal-delay-1 mt-12 rounded-[1.2rem] p-8">
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
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-black text-blue-800"
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
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-700"
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
