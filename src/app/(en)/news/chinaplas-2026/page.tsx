import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NewsArticleActions } from "@/components/NewsArticleActions";
import { getLanguageAlternates } from "@/i18n/releaseManifest";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  absoluteUrl,
  companyName,
  createBreadcrumbJsonLd,
  createPageMetadata,
  organizationLogo,
  siteUrl,
} from "@/lib/seo";

const articlePath = "/news/chinaplas-2026";
const articleTitle = "Taiyi Polymer exhibits at CHINAPLAS 2026";
const articleDescription =
  "Taiyi Polymer presented modified POM materials at booth 7.2A62 during CHINAPLAS 2026. A European gear manufacturer visited the booth to discuss glass-fiber-reinforced POM for molded gears.";
const publishedAt = "2026-04-23T17:59:21+08:00";

export const metadata: Metadata = createPageMetadata({
  title: articleTitle + " | Taiyi Polymer",
  description: articleDescription,
  path: articlePath,
  image: "/news/chinaplas-2026/modified-pom-conversation.jpg",
  imageAlt:
    "A European gear manufacturer discussing glass-fiber-reinforced POM with Taiyi Polymer at CHINAPLAS 2026",
  languageAlternates: getLanguageAlternates(articlePath),
});

const articleJsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: articleTitle, path: articlePath },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articleTitle,
    description: articleDescription,
    datePublished: publishedAt,
    dateModified: publishedAt,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(articlePath),
    image: [absoluteUrl("/news/chinaplas-2026/modified-pom-conversation.jpg")],
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

const relatedLinks = [
  {
    label: "Explore Glass-Fiber-Reinforced POM",
    href: "/products/categories/glass-fiber-reinforced-pom-compound",
  },
  {
    label: "View Precision Plastic Gear Solutions",
    href: "/components/precision-plastic-gears",
  },
  {
    label: "Discuss Your Application",
    href: "/contact",
  },
];

export default function Chinaplas2026NewsPage() {
  return (
    <main className="resource-news-page text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />

      <article className="resource-news-article">
        <header className="resource-news-hero">
          <Link href="/" className="resource-news-back">
            <ArrowLeft aria-hidden="true" size={16} />
            Back to Home
          </Link>

          <div className="resource-news-hero-copy">
            <div className="resource-news-meta" aria-label="Article details">
              <time dateTime={publishedAt}>April 23, 2026</time>
              <span aria-hidden="true">•</span>
              <span>CHINAPLAS 2026 · Booth 7.2A62</span>
            </div>
            <h1>{articleTitle}</h1>
            <p className="resource-news-deck">{articleDescription}</p>
          </div>

          <figure className="resource-news-hero-figure">
            <Image
              src="/news/chinaplas-2026/modified-pom-conversation.jpg"
              alt="A European gear manufacturer discussing glass-fiber-reinforced POM with Taiyi Polymer at CHINAPLAS 2026"
              width={800}
              height={600}
              priority
              sizes="(min-width: 82rem) 50rem, (min-width: 64rem) 58vw, 100vw"
            />
            <figcaption>
              A European gear manufacturer discusses glass-fiber-reinforced
              POM with Taiyi Polymer at booth 7.2A62.
            </figcaption>
          </figure>
        </header>

        <div className="resource-news-document">
          <div className="resource-news-prose">
            <p className="resource-news-lead">
              Taiyi Polymer presented modified POM materials at CHINAPLAS 2026
              in Shanghai from April 21-24, meeting customers at booth 7.2A62
              to discuss component and production requirements.
            </p>

            <h2>Modified POM materials on display</h2>
            <p>
              The 38th International Exhibition on Plastics and Rubber
              Industries was held at the National Exhibition and Convention
              Center in Shanghai. Taiyi Polymer displayed modified POM
              materials for wear resistance, low friction, reinforcement,
              conductivity and antistatic performance.
            </p>
            <p>
              At the booth, a European gear manufacturer asked about
              glass-fiber-reinforced POM for molded gears. The customer and the
              Taiyi Polymer team reviewed material samples and discussed the
              requirements behind the part.
            </p>

            <div
              className="resource-news-gallery"
              aria-label="CHINAPLAS 2026 photographs"
            >
              <figure>
                <div className="resource-news-gallery-media">
                  <Image
                    src="/news/chinaplas-2026/taiyi-polymer-booth-team.jpg"
                    alt="Taiyi Polymer team and visitors gathered at booth 7.2A62 during CHINAPLAS 2026"
                    fill
                    sizes="(min-width: 48rem) 26rem, 100vw"
                  />
                </div>
                <figcaption>
                  The Taiyi Polymer team met customers at booth 7.2A62 during
                  the exhibition.
                </figcaption>
              </figure>
              <figure>
                <div className="resource-news-gallery-media">
                  <Image
                    src="/news/chinaplas-2026/chinaplas-2026-venue.jpg"
                    alt="Visitors arriving at the CHINAPLAS 2026 exhibition entrance"
                    fill
                    sizes="(min-width: 48rem) 26rem, 100vw"
                  />
                </div>
                <figcaption>
                  Visitors arrive at the CHINAPLAS 2026 venue in Shanghai.
                </figcaption>
              </figure>
            </div>

            <h2>A discussion about molded gears</h2>
            <p>
              The discussion covered stiffness, tooth geometry, critical
              dimensions, shrinkage and warpage. It also addressed how gate
              position, flow direction and wall thickness affect fiber
              distribution, concentricity and dimensional stability. The
              meeting was one of the application-focused discussions Taiyi
              Polymer held during the four-day exhibition.
            </p>
          </div>

          <NewsArticleActions
            pageTitle={articleTitle}
            relatedLinks={relatedLinks}
          />
        </div>
      </article>
    </main>
  );
}
