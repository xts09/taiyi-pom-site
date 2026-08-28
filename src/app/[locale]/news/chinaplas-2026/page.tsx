import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { NewsArticleActions } from "@/components/NewsArticleActions";
import { chinaplasNewsMessages } from "@/i18n/chinaplasNewsMessages";
import { getLocalizedLocale } from "@/i18n/config";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  absoluteUrl,
  companyName,
  createBreadcrumbJsonLd,
  createPageMetadata,
  organizationLogo,
  siteUrl,
} from "@/lib/seo";

type LocalizedChinaplasNewsPageProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/news/chinaplas-2026" as const;
const publishedAt = "2026-04-23T17:59:21+08:00";

const resolveLocale = async (
  params: LocalizedChinaplasNewsPageProps["params"],
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

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: LocalizedChinaplasNewsPageProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const path = getLocalizedHref(sourcePath, localeConfig.urlSegment);
  const content = chinaplasNewsMessages[localeConfig.urlSegment];

  return createPageMetadata({
    title: content.metadataTitle,
    description: content.description,
    path,
    image: "/news/chinaplas-2026/modified-pom-conversation.jpg",
    imageAlt: content.imageAlt,
    indexable: isLocalizedReleaseIndexable(sourcePath, localeConfig.urlSegment),
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedChinaplas2026NewsPage({
  params,
}: LocalizedChinaplasNewsPageProps) {
  const localeConfig = await resolveLocale(params);
  const content = chinaplasNewsMessages[localeConfig.urlSegment];
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeConfig.urlSegment);
  const articlePath = localizedHref(sourcePath);
  setRequestLocale(localeConfig.htmlLang);

  const articleJsonLd = [
    createBreadcrumbJsonLd([
      { name: content.breadcrumbHome, path: localizedHref("/") },
      { name: content.title, path: articlePath },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: content.title,
      description: content.description,
      datePublished: publishedAt,
      dateModified: publishedAt,
      inLanguage: localeConfig.htmlLang,
      mainEntityOfPage: absoluteUrl(articlePath),
      image: [
        absoluteUrl("/news/chinaplas-2026/modified-pom-conversation.jpg"),
      ],
      author: {
        "@type": "Organization",
        name: companyName,
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: companyName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(organizationLogo),
        },
      },
    },
  ];

  return (
    <main className="resource-news-page text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />

      <article className="resource-news-article">
        <header className="resource-news-hero">
          <Link
            href={localizedHref("/")}
            className="resource-news-back"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            {content.backLabel}
          </Link>

          <div className="resource-news-hero-copy">
            <div
              className="resource-news-meta"
              aria-label={content.articleDetailsAria}
            >
              <time dateTime={publishedAt}>{content.dateLabel}</time>
              <span aria-hidden="true">•</span>
              <span>{content.boothLabel}</span>
            </div>
            <h1>{content.title}</h1>
            <p className="resource-news-deck">{content.description}</p>
          </div>

          <figure className="resource-news-hero-figure">
            <Image
              src="/news/chinaplas-2026/modified-pom-conversation.jpg"
              alt={content.imageAlt}
              width={800}
              height={600}
              priority
              sizes="(min-width: 82rem) 50rem, (min-width: 64rem) 58vw, 100vw"
            />
            <figcaption>{content.heroCaption}</figcaption>
          </figure>
        </header>

        <div className="resource-news-document">
          <div className="resource-news-prose">
            <p className="resource-news-lead">
              {content.lead}
            </p>

            <h2>{content.conversationTitle}</h2>
            <p>{content.conversationParagraphs[0]}</p>
            <p>{content.conversationParagraphs[1]}</p>

            <div
              className="resource-news-gallery"
              aria-label={content.galleryAria}
            >
              <figure>
                <div className="resource-news-gallery-media">
                  <Image
                    src="/news/chinaplas-2026/taiyi-polymer-booth-team.jpg"
                    alt={content.teamImageAlt}
                    fill
                    sizes="(min-width: 48rem) 34rem, 100vw"
                  />
                </div>
                <figcaption>{content.teamCaption}</figcaption>
              </figure>
              <figure>
                <div className="resource-news-gallery-media">
                  <Image
                    src="/news/chinaplas-2026/chinaplas-2026-venue.jpg"
                    alt={content.venueImageAlt}
                    fill
                    sizes="(min-width: 48rem) 24rem, 100vw"
                  />
                </div>
                <figcaption>{content.venueCaption}</figcaption>
              </figure>
            </div>

            <h2>{content.projectTitle}</h2>
            <p>{content.projectBody}</p>
          </div>

          <NewsArticleActions
            pageTitle={content.title}
            relatedLinks={content.relatedLinks}
            localeSegment={localeConfig.urlSegment}
            messages={content.actions}
          />
        </div>
      </article>
    </main>
  );
}
