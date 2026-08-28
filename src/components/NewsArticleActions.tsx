import Link from "next/link";
import { ActionPanel } from "@/components/ActionPanel";
import { DirectoryRow } from "@/components/DirectoryRow";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import type { ChinaplasNewsMessages } from "@/i18n/chinaplasNewsMessages";
import type { LocalizedUrlSegment } from "@/i18n/config";
import {
  getLocalizedHref,
  isEnglishFallbackHref,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";

type NewsArticleActionsProps = {
  pageTitle: string;
  relatedLinks: ChinaplasNewsMessages["relatedLinks"];
  localeSegment?: LocalizedUrlSegment;
  messages?: ChinaplasNewsMessages["actions"];
};

const defaultMessages: ChinaplasNewsMessages["actions"] = {
  relatedAria: "Related links",
  relatedTitle: "Continue from the exhibition",
  relatedDescription:
    "Explore the material discussed at the booth, see the related gear application, or continue the conversation with our team.",
  contactTitle: "Discuss a material or exhibition follow-up",
  contactDescription:
    "Tell us the part, current material, or document you need, and mention CHINAPLAS 2026 if you spoke with us at the exhibition.",
  contactAction: "Contact Taiyi Polymer",
  contactSourcePrefix: "News",
  englishDestinationLabel: "English content",
};

export function NewsArticleActions({
  pageTitle,
  relatedLinks,
  localeSegment,
  messages = defaultMessages,
}: NewsArticleActionsProps) {
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeSegment);
  const supportingLinks = relatedLinks.filter((link) => link.href !== "/contact");
  const contactHref = createContactHref(
    { source: `${messages.contactSourcePrefix}: ${pageTitle}` },
    localizedHref("/contact"),
  );

  return (
    <footer className="stagger-list mt-16 border-t border-slate-200 pt-10 sm:mt-20 sm:pt-12">
      <section aria-label={messages.relatedAria}>
        <SectionIntro
          title={messages.relatedTitle}
          description={messages.relatedDescription}
        />
        <nav className="mt-6 grid gap-x-6 sm:grid-cols-2 stagger-list">
          {supportingLinks.map((link) => (
            <DirectoryRow
              key={link.href}
              href={localizedHref(link.href)}
              label={
                <>
                  {link.label}
                  {isEnglishFallbackHref(link.href, localeSegment) ? (
                    <EnglishDestinationBadge
                      label={messages.englishDestinationLabel}
                    />
                  ) : null}
                </>
              }
              variant="related"
            />
          ))}
        </nav>
      </section>

      <ActionPanel
        footerAdjacent
        variant="evidence"
        className="mt-10"
        title={messages.contactTitle}
        action={
          <Button
            asChild
            size="resourceArticleAction"
            variant="resourceArticleInverse"
          >
            <Link href={contactHref}>{messages.contactAction}</Link>
          </Button>
        }
      >
        <p>{messages.contactDescription}</p>
      </ActionPanel>
    </footer>
  );
}
