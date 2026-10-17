import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { HomeInquirySection } from "@/components/HomeInquirySection";
import { TaskFirstHomeNarrative } from "@/components/TaskFirstHomeNarrative";
import { ShowcaseNavigation } from "@/components/design-system/ShowcaseNavigation";
import { homePreviewSections, resolvePreviewConfig } from "@/components/design-system/showcase-config";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/company";
import { loadMessages } from "@/i18n/messages";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import styles from "@/components/design-system/ComponentShowcase.module.css";

export const metadata: Metadata = {
  title: "首页组合验收 · Taiyi Polymer",
  description: "使用实际首页组件检查材料目录、图片入口、制造证据与询盘组合。",
  alternates: { canonical: "/design-system/home" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default async function HomeComponentAcceptancePage({
  searchParams,
}: { searchParams: Promise<{ lang?: string | string[] }> }) {
  if (process.env.NODE_ENV !== "development") notFound();

  const preview = resolvePreviewConfig((await searchParams).lang);
  if (!preview) notFound();

  const messages = await loadMessages(preview.locale);
  const localizedHref = (href: string) => getLocalizedHref(href, preview.localeSegment);
  const localizedCertifications = certifications.map((certificate, index) => ({
    ...certificate,
    ...messages.Home.quality.certifications[index],
  }));

  return (
    <main className={styles.homePreview} lang={preview.htmlLang}>
        <header className={`site-container ${styles.pageIntro} ${styles.previewIntro}`} lang="zh-CN">
          <div>
            <h1>首页组合验收</h1>
            <p className={styles.lead}>检查首页实际组件的组合、语言长度、图片和目标链接。</p>
          </div>
          <Button variant="secondary" size="form" asChild>
            <Link href={`/design-system?lang=${preview.value}#home-patterns`}>返回组件验收页</Link>
          </Button>
        </header>
      <ShowcaseNavigation sections={homePreviewSections} language={preview.value} pathname="/design-system/home" />
      <TaskFirstHomeNarrative
        messages={messages.Home.taskFirst}
        certifications={localizedCertifications}
        localizedHref={localizedHref}
      />
      <HomeInquirySection
        messages={messages.Home.inquiry}
        inquiryLabels={messages.Contact.form.inquiryTypeOptions}
        localizedHref={localizedHref}
      />
    </main>
  );
}
