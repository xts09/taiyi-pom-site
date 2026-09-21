import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeInquirySection } from "@/components/HomeInquirySection";
import { HomeMotion } from "@/components/HomeMotion";
import { TaskFirstHomeNarrative } from "@/components/TaskFirstHomeNarrative";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/company";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import type { HomeMessages } from "@/i18n/types";
import { serializeJsonLd } from "@/lib/jsonLd";
import { publicPath } from "@/lib/paths";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

type HomePageProps = {
  messages: HomeMessages;
  inLanguage: string;
  localeSegment?: LocalizedUrlSegment;
};

export function HomePage({
  messages,
  inLanguage,
  localeSegment,
}: HomePageProps) {
  const localizedHref = (href: string) => getLocalizedHref(href, localeSegment);
  const taskFirstMessages = messages.taskFirst;
  const localizedCertifications = certifications.map((certificate, index) => ({
    ...certificate,
    ...messages.quality.certifications[index],
  }));

  return (
    <HomeMotion>
      <main
        className={`home-cinema home-redesign min-h-screen overflow-hidden text-white${taskFirstMessages ? " home-task-first" : ""}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd([
              organizationJsonLd,
              { ...websiteJsonLd, inLanguage },
            ]),
          }}
        />
        <section className="home-hero relative isolate overflow-hidden">
          <video
            className="hero-video absolute inset-0 -z-20 h-full w-full object-cover"
            muted
            playsInline
            preload="metadata"
            poster={publicPath("/factory-hero-95b-loop-v6-poster.webp")}
            aria-hidden="true"
            data-loop-start="3"
          >
            <source
              src={publicPath("/factory-hero-95b-loop-v6.mp4")}
              type="video/mp4"
              media="(min-width: 520px)"
            />
          </video>
          <div className="site-container home-hero-grid">
            <div className="home-hero-content relative z-10">
              <p className="hero-eyebrow hero-motion-kicker">
                <span className="hero-eyebrow-desktop">
                  {messages.hero.eyebrowDesktop}
                </span>
                <span className="hero-eyebrow-mobile">
                  {messages.hero.eyebrowMobile}
                </span>
              </p>

              <h1 className="hero-motion-title hero-title-balance text-white">
                <span className="hero-title-line">
                  {messages.hero.title}
                </span>
              </h1>

              <div className="hero-support-motion">
                <p className="hero-motion-copy hero-readable-copy">
                  {messages.hero.body}
                </p>

                <div className="hero-motion-actions">
                  <Button
                    asChild
                    size="lg"
                    className="cta-primary hero-cta-primary h-auto"
                  >
                    <Link
                      href={taskFirstMessages ? "#entry-points" : "#materials"}
                    >
                      {taskFirstMessages
                        ? taskFirstMessages.core.allFamiliesAction
                        : messages.hero.exploreAction}
                    </Link>
                  </Button>
                  <Link
                    href={localizedHref(
                      taskFirstMessages ? "/technical-data-sheets" : "/contact",
                    )}
                    className="hero-cta-secondary inline-flex min-h-11 items-center gap-2"
                  >
                    {messages.hero.contactAction}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {taskFirstMessages ? (
          <TaskFirstHomeNarrative
            certifications={localizedCertifications}
            messages={taskFirstMessages}
            localizedHref={localizedHref}
          />
        ) : null}

        <HomeInquirySection
          messages={messages.inquiry}
          contactHref={localizedHref("/contact")}
        />
      </main>
    </HomeMotion>
  );
}
