import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { DocumentCard } from "@/components/DocumentCard";
import { MediaFigure } from "@/components/MediaFigure";
import { MetricGroup } from "@/components/MetricGroup";
import { certifications, companyFigures } from "@/data/company";
import type { SiteMessages } from "@/i18n/types";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { publicPath } from "@/lib/paths";
import styles from "./ComponentShowcase.module.css";
import type { PreviewConfig } from "./showcase-config";

export function EvidenceShowcase({ messages, preview }: { messages: SiteMessages; preview: PreviewConfig }) {
  const proof = messages.Home.taskFirst.proof;
  const certificate = certifications[0];
  const certificateCopy = messages.Home.quality.certifications[0];

  return (
    <>
      <div className={styles.specimenGroup}>
        <header className={styles.specimenHeader}>
          <h3>工厂与实验室照片</h3>
          <p>真实影像使用共享照片组件；裁切、比例和说明由页面内容决定。</p>
        </header>
        <div className={styles.twoColumns} lang={preview.htmlLang}>
          <MediaFigure
            variant="captioned"
            caption={proof.factoryImageCaption}
            media={<Image fill src={publicPath("/factory-extrusion.webp")} alt={proof.factoryImageAlt} sizes="(min-width: 48rem) 46vw, 100vw" />}
          />
          <MediaFigure
            variant="captioned"
            caption={proof.laboratory.imageCaption}
            media={<Image fill src={publicPath("/factory-laboratory-testing-documentary-v4.webp")} alt={proof.laboratory.imageAlt} sizes="(min-width: 48rem) 46vw, 100vw" />}
          />
        </div>
      </div>
      <div className={styles.specimenGroup}>
        <header className={styles.specimenHeader}>
          <h3>事实与数字</h3>
          <p>共享数字组件使用公司现有数据；首页照片旁的紧凑事实列表在完整组合中验收。</p>
        </header>
        <MetricGroup
          lang={preview.htmlLang}
          variant="rail"
          aria-label={proof.metricsAria}
          items={[0, 2, 4].map((figureIndex, index) => ({
            key: companyFigures[figureIndex].label,
            label: proof.metricLabels[index],
            value: companyFigures[figureIndex].value,
            note: proof.metricNotes[index],
          }))}
        />
      </div>
      <div className={styles.specimenGroup}>
        <header className={styles.specimenHeader}>
          <h3>证书与资料入口</h3>
          <p>证书打开原始 PDF，技术资料入口打开现有牌号数据目录。</p>
        </header>
        <div className={styles.documentGrid} lang={preview.htmlLang}>
          <DocumentCard
            variant="certificate"
            className={styles.certificateSpecimen}
            href={publicPath(certificate.documentHref)}
            eyebrow={certificateCopy.system}
            title={certificate.standard}
            description={certificateCopy.scope}
            previewAriaLabel={`${proof.certificateOpenAction}: ${certificate.standard}`}
            preview={<Image src={publicPath(certificate.imageSrc)} width={certificate.imageWidth} height={certificate.imageHeight} alt="" sizes="160px" />}
            actionLabel={<>{proof.certificateOpenAction}<ArrowUpRight aria-hidden="true" size={16} /></>}
          />
          <DocumentCard
            variant="compact-link"
            href={getLocalizedHref("/technical-data-sheets", preview.localeSegment)}
            eyebrow="TDS"
            title={messages.Contact.form.inquiryTypeOptions.tds}
            description={<span lang="zh-CN">按材料系列和牌号查阅现有数据，进入对应资料路径。</span>}
            actionLabel={<>{messages.Home.hero.contactAction}<ArrowUpRight aria-hidden="true" size={16} /></>}
          />
        </div>
      </div>
    </>
  );
}
