import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HomeComponentCard, HomeIndustryCard } from "@/components/HomeEntryCards";
import { HomeMaterialCatalogue } from "@/components/HomeMaterialCatalogue";
import { Button } from "@/components/ui/button";
import { homeComponentEntries, homeIndustryEntries } from "@/data/homeEntries";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import type { SiteMessages } from "@/i18n/types";
import { buildHomeMaterialColumns } from "@/lib/homeMaterialCatalogue";
import homeStyles from "../HomeSections.module.css";
import styles from "./ComponentShowcase.module.css";
import type { PreviewConfig } from "./showcase-config";

export function HomePatternShowcase({ messages, preview }: { messages: SiteMessages; preview: PreviewConfig }) {
  const localizedHref = (href: string) => getLocalizedHref(href, preview.localeSegment);
  const home = messages.Home.taskFirst;
  const columns = buildHomeMaterialColumns({
    messages: home,
    materialLabels: messages.Contact.form.materialOptionLabels,
    localizedHref,
  });

  return (
    <>
      <div className={styles.specimenGroup}>
        <header className={styles.specimenHeader}>
          <h3>材料目录</h3>
          <p>桌面三列并排，手机单组展开；牌号数量和分类链接与首页共用数据。</p>
        </header>
        <div lang={preview.htmlLang}><HomeMaterialCatalogue columns={columns} /></div>
      </div>
      <div className={styles.specimenGroup}>
        <header className={styles.specimenHeader}>
          <h3>零部件入口</h3>
          <p>完整展示零件，标题与操作位置固定；手机保留两列。</p>
        </header>
        <div className={homeStyles.partGrid} lang={preview.htmlLang}>
          {[0, 1, 5].map((index) => (
            <HomeComponentCard
              key={homeComponentEntries[index].part}
              {...homeComponentEntries[index]}
              href={localizedHref(homeComponentEntries[index].href)}
              title={home.components.items[index].title}
              imageAlt={home.components.items[index].imageAlt}
            />
          ))}
        </div>
      </div>
      <div className={styles.specimenGroup}>
        <header className={styles.specimenHeader}>
          <h3>行业入口</h3>
          <p>桌面使用场景照片与标题叠放，手机把标题移到照片下方。</p>
        </header>
        <div className={homeStyles.industryGrid} lang={preview.htmlLang}>
          {[0, 1, 2, 4].map((index) => (
            <HomeIndustryCard
              key={homeIndustryEntries[index].href}
              {...homeIndustryEntries[index]}
              href={localizedHref(homeIndustryEntries[index].href)}
              title={home.applications.items[index].shortTitle ?? home.applications.items[index].title}
              imageAlt={home.applications.items[index].imageAlt}
            />
          ))}
        </div>
      </div>
      <div className={styles.consumerLinks}>
        <p className={styles.specLabel}>完整组合 · 项目支持、材料、零部件、行业、制造证据与询盘</p>
        <Button variant="secondary" size="form" asChild>
          <Link href={`/design-system/home?lang=${preview.value}`}>查看完整首页组合<ArrowRight data-icon="inline-end" /></Link>
        </Button>
        <Button variant="secondary" size="form" asChild>
          <Link href={localizedHref("/")}>查看实际首页<ArrowRight data-icon="inline-end" /></Link>
        </Button>
      </div>
    </>
  );
}
