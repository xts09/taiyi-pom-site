import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { GoogleTag } from "@/components/GoogleTag";
import { Header } from "@/components/Header";
import type { LocalizedUrlSegment } from "@/i18n/config";
import type { SiteMessages } from "@/i18n/types";
import { googleTagId } from "@/lib/googleTracking";

const skipLinkLabels: Record<string, string> = {
  de: "Zum Hauptinhalt springen",
  fr: "Aller au contenu principal",
  "pt-BR": "Ir para o conteúdo principal",
  "zh-CN": "跳至主要内容",
};

type SiteDocumentProps = Readonly<{
  children: React.ReactNode;
  htmlLang: string;
  messages: SiteMessages;
  localeSegment?: LocalizedUrlSegment;
  consentDefaultScript?: React.ReactNode;
}>;

export function SiteDocument({
  children,
  htmlLang,
  messages,
  localeSegment,
  consentDefaultScript,
}: SiteDocumentProps) {
  return (
    <html lang={htmlLang} className="h-full antialiased">
      <body className="page-aura min-h-full flex flex-col text-slate-900">
        {consentDefaultScript}
        <a className="skip-link" href="#main-content">
          {skipLinkLabels[htmlLang] ?? "Skip to main content"}
        </a>
        <Header
          messages={messages.Header}
          taxonomy={messages.Taxonomy}
          localeSegment={localeSegment}
        />
        <div id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </div>
        <FloatingContact
          messages={messages.FloatingContact}
          localeSegment={localeSegment}
        />
        <Footer
          messages={messages.Footer}
          taxonomy={messages.Taxonomy}
          analyticsMessages={messages.Analytics}
          localeSegment={localeSegment}
        />
        <AnalyticsConsent
          enabled={Boolean(googleTagId)}
          messages={messages.Analytics}
          localeSegment={localeSegment}
        />
        <GoogleTag />
      </body>
    </html>
  );
}
