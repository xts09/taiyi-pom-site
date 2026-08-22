import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import styles from "@/app/(en)/privacy/PrivacyPage.module.css";
import { privacyPolicyRelease } from "@/data/legal";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import { getLocalizedLocale } from "@/i18n/config";
import {
  getLanguageAlternates,
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";
import { contactEmail, createPageMetadata } from "@/lib/seo";

type LocalizedPrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

const sourcePath = "/privacy" as const;
const chinesePrivacyMessages = {
  metadata: {
    title: "隐私政策",
    description:
      "了解江苏台益纳米科技有限公司如何收集、使用和保护通过 PLATFORM 网站提交的信息。",
  },
  hero: {
    title: "隐私政策",
    body: "本政策说明江苏台益纳米科技有限公司如何处理通过 PLATFORM 网站提交的信息，以及您使用网站时产生的信息。",
    updated: "最后更新",
  },
  intro:
    "江苏台益纳米科技有限公司负责本政策所述个人信息的处理。本通知适用于本网站、询价表单及相关沟通。",
  collection: {
    title: "我们收集的信息",
    items: [
      "询价信息，包括公司名称、电子邮箱、关注材料、应用或零部件信息，以及您选择提供的具体要求。",
      "您通过电子邮件、电话、WhatsApp 或 LinkedIn 与我们联系时提供的联系方式。",
      "用于运行和保护网站的有限技术信息。询价接口会临时使用 IP 地址进行频率限制和防止滥用。",
      "如果您接受分析，Google Analytics 可能收集浏览器与设备信息、大致位置、网站交互以及 Cookie 或类似标识符。",
    ],
  },
  usage: {
    title: "我们如何使用信息",
    items: [
      "审核并回复材料与应用询价。",
      "在评估过程中提供相关样品、技术资料和您要求的后续信息。",
      "运行、保护、诊断并改进网站。",
      "在您接受分析后衡量网站和询价表现。",
      "履行适用的法律义务。",
    ],
  },
  sections: {
    legalBasis: {
      title: "处理依据",
      body: "在适用法律要求处理依据时，我们会为响应您的请求、沟通潜在业务关系，以及基于运行和保护网站的合法利益处理询价信息。非必要分析或广告技术需要同意时，我们将以您的同意为依据。",
    },
    sharing: {
      title: "信息共享与服务提供商",
      body: "我们不会出售个人信息。我们可能与支持网站托管、邮件发送、安全、分析和广告衡量的服务提供商共享信息；法律要求时，也可能与顾问或主管机关共享。这些接收方只会为相关服务或法律目的处理信息。",
    },
    cookies: {
      title: "Cookie 与分析",
      bodyBeforeLink:
        "除非您选择接受分析，否则 Google Analytics 保持关闭。接受后，它可能使用第一方 Cookie，并收集设备、浏览器、大致位置和网站交互数据。我们会在您的浏览器中保存选择，以便网站记住该设置；广告存储和个性化保持关闭。您可以随时通过页脚中的 Cookie 设置更改或撤回选择，也可通过浏览器设置阻止和删除 Cookie。更多信息请参阅 Google 的",
      link: "隐私政策",
      bodyAfterLink: "。",
    },
    retention: {
      title: "保存期限与跨境处理",
      body: "我们只在合理必要的期限内保存询价和沟通记录，用于回复请求、支持业务关系、维护安全并满足法律或记录保存要求。服务提供商或接收方可能在您所在国家或地区以外处理信息，并遵守适用的保障措施。",
    },
    rights: {
      title: "您的选择与权利",
      body: "根据您所在地区，您可能有权请求访问、更正、删除、限制、转移信息，或反对特定处理；对于基于同意的处理，您也可以撤回同意。完成请求前，我们可能需要核实您的身份。",
    },
    contact: {
      title: "联系我们",
      bodyBeforeLink: "如有隐私问题或请求，请发送邮件至",
      bodyAfterLink:
        "您也可以联系位于中国江苏盐城的江苏台益纳米科技有限公司。",
    },
  },
} as const;

const resolveLocale = async (params: LocalizedPrivacyPageProps["params"]) => {
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
}: LocalizedPrivacyPageProps): Promise<Metadata> {
  const localeConfig = await resolveLocale(params);
  const messages = translateExpandedContent(
    chinesePrivacyMessages,
    localeConfig.urlSegment,
  );
  const publicCompanyName =
    localeConfig.urlSegment === "zh" ? "台益" : "Taiyi Polymer";

  return createPageMetadata({
    title: `${messages.metadata.title} | ${publicCompanyName}`,
    description: messages.metadata.description,
    path: getLocalizedHref(sourcePath, localeConfig.urlSegment),
    indexable: true,
    openGraphLocale: localeConfig.openGraphLocale,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function LocalizedPrivacyPolicyPage({
  params,
}: LocalizedPrivacyPageProps) {
  const localeConfig = await resolveLocale(params);
  setRequestLocale(localeConfig.htmlLang);
  const messages = translateExpandedContent(
    chinesePrivacyMessages,
    localeConfig.urlSegment,
  );
  const lastUpdated = new Intl.DateTimeFormat(localeConfig.htmlLang, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${privacyPolicyRelease.lastModified}T00:00:00Z`));
  const sentenceSeparator = localeConfig.urlSegment === "zh" ? "。" : ". ";

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`site-container ${styles.heroInner}`}>
          <h1>{messages.hero.title}</h1>
          <p>{messages.hero.body}</p>
          <span className={styles.updated}>
            {messages.hero.updated}: {lastUpdated}
          </span>
        </div>
      </section>

      <section className={styles.content}>
        <article className={`site-container ${styles.policy}`}>
          <p className={styles.intro}>
            {messages.intro}
          </p>

          <section className={styles.section}>
            <h2>{messages.collection.title}</h2>
            <ul>
              {messages.collection.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{messages.usage.title}</h2>
            <ul>
              {messages.usage.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{messages.sections.legalBasis.title}</h2>
            <p>{messages.sections.legalBasis.body}</p>
          </section>

          <section className={styles.section}>
            <h2>{messages.sections.sharing.title}</h2>
            <p>{messages.sections.sharing.body}</p>
          </section>

          <section className={styles.section}>
            <h2>{messages.sections.cookies.title}</h2>
            <p>
              {messages.sections.cookies.bodyBeforeLink}{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                {messages.sections.cookies.link}
              </a>
              {messages.sections.cookies.bodyAfterLink}
            </p>
          </section>

          <section className={styles.section}>
            <h2>{messages.sections.retention.title}</h2>
            <p>{messages.sections.retention.body}</p>
          </section>

          <section className={styles.section}>
            <h2>{messages.sections.rights.title}</h2>
            <p>{messages.sections.rights.body}</p>
          </section>

          <section className={styles.section}>
            <h2>{messages.sections.contact.title}</h2>
            <p>
              {messages.sections.contact.bodyBeforeLink}{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              {sentenceSeparator}
              {messages.sections.contact.bodyAfterLink}
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
