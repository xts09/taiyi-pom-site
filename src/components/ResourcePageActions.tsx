import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import type { ResourcePage } from "@/data/resources";

type ResourcePageActionsProps = {
  relatedLinks: ResourcePage["relatedLinks"];
  variant?: "default" | "article";
};

export function ResourcePageActions({
  relatedLinks,
  variant = "default",
}: ResourcePageActionsProps) {
  if (variant === "article") {
    const supportingLinks = relatedLinks.filter((link) => link.href !== "/contact");

    return (
      <footer className="mt-16 border-t border-slate-200 pt-10 sm:mt-20 sm:pt-12">
        {supportingLinks.length ? (
          <section aria-label="Related resources">
            <p className="text-sm font-semibold text-sky-700">Continue exploring</p>
            <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-[-0.025em] text-slate-950">
              Related next steps
            </h2>
            <nav className="mt-6 grid gap-3 sm:grid-cols-2">
              {supportingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-14 items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                >
                  <span>{link.label}</span>
                  <ArrowUpRightIcon
                    aria-hidden="true"
                    className="size-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-700"
                  />
                </Link>
              ))}
            </nav>
          </section>
        ) : null}

        <section className="mt-10 grid gap-6 rounded-xl bg-slate-950 px-6 py-7 text-white sm:px-8 sm:py-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <div>
            <p className="text-sm font-semibold text-sky-300">Technical review</p>
            <h2 className="mt-2 max-w-[24ch] font-[var(--font-display)] text-2xl font-bold tracking-[-0.025em] text-balance sm:text-[1.75rem]">
              Need help narrowing the material direction?
            </h2>
            <p className="mt-4 max-w-[65ch] text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Send the part information, working condition, target property,
              current material, tooling stage, and document needs. We will help
              connect the material direction with the supporting data.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-fit"
          >
            Send project requirements
          </Link>
        </section>
      </footer>
    );
  }

  return (
    <>
      <section className="resource-related-links" aria-label="Related resources">
        <h2>Related Next Steps</h2>
        <div>
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <MaterialRecommendationCta
        kicker="Technical Review"
        title="Need This Filled Around Your Project?"
        className="selection-support-band resource-cta mt-12"
      >
        <p>
          Send the part information, working condition, target property,
          current material, tooling stage, and document needs. We will help
          connect the right material direction with the right supporting data.
        </p>
      </MaterialRecommendationCta>
    </>
  );
}
