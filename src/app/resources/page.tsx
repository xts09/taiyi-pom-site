import type { Metadata } from "next";
import Link from "next/link";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { resourceIndexLinks } from "@/data/resources";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Technical Resources | Taiyi Nano",
  description:
    "Browse Taiyi Nano technical resources for POM material selection, processing review, application notes, FAQ topics, and technical data sheets.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="resource-page-shell mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="resource-hero rounded-[0.8rem] border border-slate-200 bg-white/90 p-6 shadow-[0_1.25rem_2.6rem_rgba(15,23,42,0.08)] sm:p-8">
          <h1 className="max-w-4xl text-4xl font-black leading-none tracking-normal text-slate-950 md:text-6xl">
            Technical Resources
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Find technical guidance for POM material selection, processing
            review, application screening, common evaluation questions, and
            technical data sheet requests.
          </p>
        </div>

        <section className="resource-index-grid" aria-label="Technical resource topics">
          {resourceIndexLinks.map((resource, index) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="resource-index-card rounded-[0.8rem] border border-blue-200 bg-white/90 p-6 shadow-[0_1.4rem_3rem_rgba(15,23,42,0.06)]"
            >
              <span className="text-xs font-extrabold tracking-wider text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="text-xl font-black leading-tight text-slate-950">
                {resource.label}
              </strong>
              <em className="not-italic leading-7 text-slate-600">
                {resource.description}
              </em>
            </Link>
          ))}
        </section>

        <MaterialRecommendationCta
          kicker="Resource Support"
          title="Need a Material Direction Before Reading?"
          className="selection-support-band resource-cta mt-12"
        >
          <p>
            Share the part, application, current material, working condition,
            target property, document requirements, and estimated volume. We
            will help screen a suitable modified material direction for review.
          </p>
        </MaterialRecommendationCta>
      </section>
    </main>
  );
}
