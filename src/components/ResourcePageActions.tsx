import Link from "next/link";
import { ActionPanel } from "@/components/ActionPanel";
import { DirectoryRow } from "@/components/DirectoryRow";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import type { ResourcePage } from "@/data/resources";
import type { LocalizedUrlSegment } from "@/i18n/config";
import type { ResourceIndexMessages } from "@/i18n/resourceTypes";
import {
  getLocalizedHref,
  isEnglishFallbackHref,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";

type ResourcePageActionsProps = {
  pageTitle: string;
  relatedLinks: ResourcePage["relatedLinks"];
  variant?: "default" | "article";
  localeSegment?: LocalizedUrlSegment;
  messages?: ResourceIndexMessages["articleUi"];
};

const defaultMessages = {
  relatedAria: "Related resources",
  relatedEyebrow: "Continue exploring",
  relatedTitle: "Related next steps",
  relatedDescription:
    "Open the supporting resource that matches the next material, processing, or validation decision.",
  reviewEyebrow: "Technical Review",
  reviewTitle: "Need help applying this guidance to your part?",
  reviewDescription:
    "Share the part, working conditions, target properties, current material, tooling stage, and document needs. We will help identify relevant material families and the data needed for comparison.",
  reviewAction: "Discuss Your Application",
  contactSourcePrefix: "Technical resource",
  englishDestinationLabel: "English content",
};

export function ResourcePageActions({
  pageTitle,
  relatedLinks,
  variant = "default",
  localeSegment,
  messages,
}: ResourcePageActionsProps) {
  const copy = messages ?? defaultMessages;
  const contactHref = createContactHref({
    source: `${copy.contactSourcePrefix}: ${pageTitle}`,
  }, getLocalizedHref("/contact", localeSegment));
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeSegment);
  const linkLabel = (link: ResourcePage["relatedLinks"][number]) => (
    <>
      {link.label}
      {isEnglishFallbackHref(link.href, localeSegment) ? (
        <EnglishDestinationBadge label={copy.englishDestinationLabel} />
      ) : null}
    </>
  );

  if (variant === "article") {
    const supportingLinks = relatedLinks.filter((link) => link.href !== "/contact");

    return (
      <footer className="stagger-list mt-16 border-t border-slate-200 pt-10 sm:mt-20 sm:pt-12">
        {supportingLinks.length ? (
          <section aria-label={copy.relatedAria}>
            <SectionIntro
              eyebrow={copy.relatedEyebrow}
              title={copy.relatedTitle}
              description={copy.relatedDescription}
            />
            <nav className="mt-6 grid gap-x-6 sm:grid-cols-2 stagger-list">
              {supportingLinks.map((link) => (
                <DirectoryRow
                  key={link.href}
                  href={localizedHref(link.href)}
                  label={linkLabel(link)}
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
          eyebrow={copy.reviewEyebrow}
          title={copy.reviewTitle}
          action={
            <Button
              asChild
              size="resourceArticleAction"
              variant="resourceArticleInverse"
            >
              <Link href={contactHref}>{copy.reviewAction}</Link>
            </Button>
          }
        >
          <p>{copy.reviewDescription}</p>
        </ActionPanel>
      </footer>
    );
  }

  return (
    <>
      <section
        className="resource-related-links stagger-list"
        aria-label={copy.relatedAria}
      >
        <h2>{copy.relatedTitle}</h2>
        <div className="stagger-list">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={
                link.href === "/contact"
                  ? contactHref
                  : localizedHref(link.href)
              }
            >
              {linkLabel(link)}
            </Link>
          ))}
        </div>
      </section>

      <ActionPanel
        footerAdjacent
        variant="recommendation"
        title={copy.reviewTitle}
        className="selection-support-band resource-cta mt-12"
        eyebrow={copy.reviewEyebrow}
        eyebrowClassName="section-kicker mb-3"
        action={
          <Button
            asChild
            variant="inverse"
            className="h-auto px-7 py-3 text-sm"
          >
            <Link href={contactHref}>{copy.reviewAction}</Link>
          </Button>
        }
      >
        <p>{copy.reviewDescription}</p>
      </ActionPanel>
    </>
  );
}
