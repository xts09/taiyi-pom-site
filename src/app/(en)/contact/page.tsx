import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import messages from "@/i18n/messages/en";
import {
  contactLanguageAlternates,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import {
  hasContactSearchParams,
  type ContactContextSearchParams,
} from "@/lib/contactContext";
import { createPageMetadata } from "@/lib/seo";

type ContactPageRouteProps = {
  searchParams: Promise<ContactContextSearchParams>;
};

export async function generateMetadata({
  searchParams,
}: ContactPageRouteProps): Promise<Metadata> {
  const hasSearchContext = hasContactSearchParams(await searchParams);

  return createPageMetadata({
    title: messages.Contact.metadata.title,
    description: messages.Contact.metadata.description,
    path: "/contact",
    image: "/factory-extrusion.webp",
    imageAlt: messages.Contact.metadata.imageAlt,
    indexable:
      isLocalizedReleaseIndexable("/contact") && !hasSearchContext,
    languageAlternates: hasSearchContext
      ? undefined
      : contactLanguageAlternates,
  });
}

export default function ContactPageRoute({
  searchParams,
}: ContactPageRouteProps) {
  return (
    <ContactPage
      messages={messages.Contact}
      pagePath="/contact"
      inLanguage="en"
      searchParams={searchParams}
    />
  );
}
