import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { DirectoryRow } from "@/components/DirectoryRow";
import { ResourcePageMotion } from "@/components/ResourcePageMotion";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getLocalizedLocale } from "@/i18n/config";
import {
  getLocalizedResourceIndexMessages,
  getLocalizedResourceNavigationGroups,
} from "@/i18n/resourceMessages";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

type LocalizedResourcesPageProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/resources" as const;

const resolveLocale = async (
  params: LocalizedResourcesPageProps["params"],
) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment)
  ) {
    notFound();
  }

  return localeConfig;
};

export async function generateMetadata({
  params,
}: LocalizedResourcesPageProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = getLocalizedResourceIndexMessages(
    localeConfig.urlSegment,
  );

  return createPageMetadata({
    title: messages.metadata.collectionTitle,
    description: messages.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    image: "/og-resources-material-selection.jpg",
    imageAlt: messages.metadata.imageAlt,
    indexable: isLocalizedReleaseIndexable(
      sourcePath,
      localeConfig.urlSegment,
    ),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedResourcesPage({
  params,
}: LocalizedResourcesPageProps) {
  const localeConfig = await resolveLocale(params);
  const messages = getLocalizedResourceIndexMessages(
    localeConfig.urlSegment,
  );
  const navigationGroups = getLocalizedResourceNavigationGroups(
    localeConfig.urlSegment,
  );
  setRequestLocale(localeConfig.htmlLang);
  const pagePath = getLocalizedHref(sourcePath, localeConfig.urlSegment);
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeConfig.urlSegment);
  const contactHref = createContactHref(
    { source: messages.contactSource },
    localizedHref("/contact"),
  );
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: messages.breadcrumb.home, path: localizedHref("/") },
      { name: messages.breadcrumb.resources, path: pagePath },
    ]),
    createCollectionPageJsonLd({
      title: messages.metadata.title,
      description: messages.metadata.description,
      path: pagePath,
      inLanguage: localeConfig.htmlLang,
      items: navigationGroups.map((group) => ({
        name: group.title,
        path: localizedHref(`/resources/${group.id}`),
      })),
    }),
  ];

  return (
    <main className="text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <ResourcePageMotion>
        <section className="resource-page-shell resource-index-shell mesh-surface">
          <header
            className="resource-index-hero"
            aria-labelledby="resource-index-title"
          >
            <div className="resource-index-hero-card">
              <Image
                src="/generated/applications/common/cad-overlay-transparent.webp"
                alt=""
                fill
                priority
                sizes="(min-width: 82rem) 82rem, 100vw"
                className="resource-index-hero-media"
              />
              <div className="resource-index-hero-content">
                <p className="resource-index-kicker">
                  {messages.hero.eyebrow}
                </p>
                <h1 id="resource-index-title">{messages.hero.title}</h1>
                <p className="resource-index-description">
                  {messages.hero.description}
                </p>
                <div className="resource-index-actions">
                  <Button
                    asChild
                    size="resourceIndexAction"
                    variant="resourceIndexSecondary"
                  >
                    <Link href={localizedHref("/technical-data-sheets")}>
                      {messages.hero.dataAction}
                    </Link>
                  </Button>
                </div>
              </div>
              <div
                className="resource-index-task-panel"
                aria-label={messages.hero.pathsAria}
              >
                <p className="resource-index-panel-label">
                  {messages.hero.pathsLabel}
                </p>
                <div className="resource-index-path-list">
                  {navigationGroups.map((group) => (
                    <Card key={group.id} asChild variant="interactive">
                      <Link
                        href={localizedHref(`/resources/${group.id}`)}
                        className="resource-index-path"
                      >
                        <span>{group.navigationLabel}</span>
                        <strong>{group.title}</strong>
                        <small>
                          {group.links.length} {messages.hero.resourceCountSuffix}
                        </small>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <section
            className="resource-index-directory"
            aria-labelledby="resource-directory-title"
          >
            <SectionIntro
              className="resource-index-directory-head"
              layout="split"
              title={messages.directory.title}
              titleId="resource-directory-title"
              description={messages.directory.description}
            />

            <div className="resource-index-directory-groups">
              {navigationGroups.map((group) => (
                <section
                  key={`directory-${group.id}`}
                  className="resource-index-directory-group"
                  aria-labelledby={`resource-group-${group.id}`}
                >
                  <header className="resource-index-directory-group-head">
                    <div>
                      <h3 id={`resource-group-${group.id}`}>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                    <Link href={localizedHref(`/resources/${group.id}`)}>
                      {messages.directory.viewAllPrefix} {group.links.length}
                      <ArrowRight aria-hidden="true" size={16} />
                    </Link>
                  </header>

                  <ul className="resource-index-directory-list">
                    {group.links.map((item) => (
                      <li key={`${group.id}-${item.href}`}>
                        <DirectoryRow
                          href={localizedHref(item.href)}
                          eyebrow={item.type}
                          label={item.label}
                          description={item.description}
                          variant="compact"
                        />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div
              className="resource-index-contact-row"
              data-footer-adjacent="true"
            >
              <div>
                <h2>{messages.inquiry.title}</h2>
                <p>{messages.inquiry.description}</p>
              </div>
              <Button asChild variant="primary" size="form">
                <Link href={contactHref}>
                  {messages.inquiry.action}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </Button>
            </div>
          </section>
        </section>
      </ResourcePageMotion>
    </main>
  );
}
