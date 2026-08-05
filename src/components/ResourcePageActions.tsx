import Link from "next/link";
import { ActionPanel } from "@/components/ActionPanel";
import { DirectoryRow } from "@/components/DirectoryRow";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
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
      <footer className="stagger-list mt-16 border-t border-slate-200 pt-10 sm:mt-20 sm:pt-12">
        {supportingLinks.length ? (
          <section aria-label="Related resources">
            <SectionIntro
              eyebrow="Continue exploring"
              title="Related next steps"
              description="Open the supporting resource that matches the next material, processing, or validation decision."
            />
            <nav className="mt-6 grid gap-x-6 sm:grid-cols-2 stagger-list">
              {supportingLinks.map((link) => (
                <DirectoryRow
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  variant="related"
                />
              ))}
            </nav>
          </section>
        ) : null}

        <ActionPanel
          footerAdjacent
          variant="evidence"
          className="mt-10"
          eyebrow="Technical Review"
          title="Need help applying this guidance to your part?"
          action={
            <Button
              asChild
              size="resourceArticleAction"
              variant="resourceArticleInverse"
            >
              <Link href="/contact">Discuss Your Application</Link>
            </Button>
          }
        >
          <p>
            Share the part, working conditions, target properties, current
            material, tooling stage, and document needs. We will help identify
            relevant material families and the data needed for comparison.
          </p>
        </ActionPanel>
      </footer>
    );
  }

  return (
    <>
      <section
        className="resource-related-links stagger-list"
        aria-label="Related resources"
      >
        <h2>Related Next Steps</h2>
        <div className="stagger-list">
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <ActionPanel
        footerAdjacent
        variant="recommendation"
        title="Need Help Applying This Guidance to Your Part?"
        className="selection-support-band resource-cta mt-12"
        eyebrow="Technical Review"
        eyebrowClassName="section-kicker mb-3"
        action={
          <Button
            asChild
            variant="inverse"
            className="h-auto px-7 py-3 text-sm"
          >
            <Link href="/contact">Discuss Your Application</Link>
          </Button>
        }
      >
        <p>
          Share the part, working conditions, target properties, current
          material, tooling stage, and document needs. We will help identify
          relevant material families and the data needed for comparison.
        </p>
      </ActionPanel>
    </>
  );
}
