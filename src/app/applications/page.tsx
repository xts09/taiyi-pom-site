import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { industries } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "POM Applications | Taiyi Nano",
  description:
    "Explore Natural POM Resin and Modified POM Compound directions for gears, bushings, sliding parts, automotive functional parts, electronic components, and precision injection molded parts.",
  path: "/applications",
});

const applications = [
  {
    title: "Gears & Gear Wheels",
    description:
      "For gears and gear wheels, wear resistance, low friction, dimensional stability, and stable molding performance are usually important.",
    materialDirections: [
      "Wear-resistant POM Compound",
      "Low-friction POM Compound",
      "Glass Fiber Reinforced POM Compound where higher stiffness is required",
    ],
  },
  {
    title: "Bushings, Rollers & Sliding Parts",
    description:
      "Sliding parts often require reduced friction, wear resistance, and consistent performance under repeated movement.",
    materialDirections: [
      "Wear-resistant POM Compound",
      "Low-friction POM Compound",
      "Custom formulation based on target friction and wear requirements",
    ],
  },
  {
    title: "Automotive Functional Parts",
    description:
      "POM materials are commonly evaluated for functional molded parts where strength, stiffness, wear resistance, and dimensional stability are required.",
    materialDirections: [
      "Natural POM Resin",
      "Wear-resistant POM Compound",
      "Glass Fiber Reinforced POM Compound",
    ],
  },
  {
    title: "Electronic & Electrical Components",
    description:
      "For selected electronic or electrical molded parts, dimensional stability, processing consistency, and antistatic or conductive requirements may be considered.",
    materialDirections: [
      "Natural POM Resin",
      "Conductive / Antistatic POM Compound where relevant",
      "Custom formulation based on project requirements",
    ],
  },
  {
    title: "Precision Injection Molded Parts",
    description:
      "Precision parts generally require stable flow, dimensional consistency, and suitable mechanical properties for the target application.",
    materialDirections: [
      "Natural POM Resin",
      "High-flow POM grades",
      "Modified POM Compound based on application requirements",
    ],
  },
];

const selectionBasis = [
  "Part movement and load condition",
  "Target friction and wear requirement",
  "Dimensional stability and stiffness",
  "Molding flow and color requirement",
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="mesh-surface mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="inner-hero reveal-up mb-12 max-w-4xl">
          <p className="section-kicker mb-4">
            Applications
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            POM Compound Directions by Application
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Use this page to connect molded part types with practical POM
            material directions. The final grade recommendation still depends on
            working conditions, process requirements, and qualification needs.
          </p>
        </div>

        <section className="reveal-up reveal-delay-1 mb-10 rounded-[1.2rem] border border-cyan-100/30 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker mb-3">Application industries</p>
              <h2 className="text-2xl font-black tracking-tight">
                B2B sectors served by Taiyi POM materials
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-300">
              These sectors come from the company profile and help shape
              material recommendation priorities.
            </p>
          </div>

          <div className="stagger-list grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm font-black"
                style={{ "--item-index": index } as CSSProperties}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card reveal-up rounded-[1.1rem] p-6">
            <p className="section-kicker mb-3">Selection basis</p>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              What we check before recommending a material
            </h2>
          </div>

          <div className="stagger-list grid gap-3 sm:grid-cols-2">
            {selectionBasis.map((item, index) => (
              <div
                key={item}
                className="premium-card lift-card rounded-[1.1rem] p-5 text-sm font-black text-slate-950"
                style={{ "--item-index": index } as CSSProperties}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="stagger-list grid gap-5">
          {applications.map((application, index) => (
            <div
              key={application.title}
              className="premium-card lift-card rounded-[1.1rem] p-6"
              style={{ "--item-index": index } as CSSProperties}
            >
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h2 className="text-xl font-semibold text-slate-950">
                    {application.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {application.description}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="section-kicker mb-3">
                    Relevant Material Directions
                  </h3>

                  <ul className="space-y-3 text-sm text-slate-700">
                    {application.materialDirections.map((direction) => (
                      <li key={direction} className="flex gap-3">
                        <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                        <span>{direction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="dark-panel reveal-up reveal-delay-1 mt-12 rounded-[1.2rem] p-8 text-white md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black tracking-tight">
              Need help matching material to your application?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Share the part type, working condition, target performance,
              current material, and estimated volume. We can recommend a
              suitable POM material direction for review.
            </p>
          </div>

          <Link
            href="/contact"
            className="cta-primary mt-6 px-6 py-3 text-sm md:mt-0"
          >
            Discuss Application
          </Link>
        </section>
      </section>
    </main>
  );
}
