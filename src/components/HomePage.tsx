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
  const heroSubjectStart = localeSegment === "zh"
    ? messages.hero.title.indexOf("改性 POM 制造商")
    : -1;
  const localizedCertifications = certifications.map((certificate, index) => ({
    ...certificate,
    ...messages.quality.certifications[index],
  }));

  return (
    <HomeMotion>
      <main
        className="home-cinema home-redesign home-task-first min-h-screen overflow-hidden text-white"
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
          {["primary", "standby"].map((layer, index) => (
            <video
              key={layer}
              className={`hero-video absolute inset-0 -z-20 h-full w-full object-cover${
                index === 0 ? " is-active" : ""
              }`}
              muted
              playsInline
              preload="metadata"
              poster={publicPath("/factory-hero-95b-loop-v6-poster.webp")}
              aria-hidden="true"
              data-hero-video={layer}
              data-loop-start="3"
            >
              <source
                src={publicPath("/factory-hero-95b-loop-v6.mp4")}
                type="video/mp4"
                media="(min-width: 520px)"
              />
            </video>
          ))}
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
                  {heroSubjectStart > 0 ? (
                    <>
                      <span className="hero-title-phrase">
                        {messages.hero.title.slice(0, heroSubjectStart)}
                      </span>
                      <span className="hero-title-subject hero-title-phrase">
                        {messages.hero.title.slice(heroSubjectStart)}
                      </span>
                    </>
                  ) : messages.hero.title}
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
                    <Link href="#entry-points">
                      {taskFirstMessages.core.allFamiliesAction}
                    </Link>
                  </Button>
                  <Link
                    href={localizedHref("/technical-data-sheets")}
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

        <TaskFirstHomeNarrative
          certifications={localizedCertifications}
          messages={taskFirstMessages}
          localizedHref={localizedHref}
        />

        <HomeInquirySection
          messages={messages.inquiry}
          contactHref={localizedHref("/contact")}
        />
      </main>
    </HomeMotion>
  );
}
