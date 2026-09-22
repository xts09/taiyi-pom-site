import Link from "next/link";
import type {
  LocalizedUrlSegment,
  MessageLocale,
} from "@/i18n/config";

type NotFoundCopy = {
  title: string;
  body: string;
  browseMaterials: string;
  discussApplication: string;
};

const notFoundCopy: Record<MessageLocale, NotFoundCopy> = {
  en: {
    title: "Page Not Found",
    body: "The requested page may have moved. Browse material grades or contact us for a material recommendation.",
    browseMaterials: "Browse Materials",
    discussApplication: "Discuss Your Application",
  },
  de: {
    title: "Seite nicht gefunden",
    body: "Die angeforderte Seite wurde möglicherweise verschoben. Durchsuchen Sie unsere Werkstoffe oder kontaktieren Sie uns für eine Materialempfehlung.",
    browseMaterials: "Werkstoffe ansehen",
    discussApplication: "Anwendung besprechen",
  },
  fr: {
    title: "Page introuvable",
    body: "La page demandée a peut-être été déplacée. Parcourez nos matériaux ou contactez-nous pour une recommandation matière.",
    browseMaterials: "Voir les matériaux",
    discussApplication: "Discuter de votre application",
  },
  "pt-BR": {
    title: "Página não encontrada",
    body: "A página solicitada pode ter sido movida. Explore nossos materiais ou entre em contato para receber uma recomendação.",
    browseMaterials: "Ver materiais",
    discussApplication: "Discutir sua aplicação",
  },
  "zh-CN": {
    title: "页面未找到",
    body: "你访问的页面可能已移动。你可以浏览材料与牌号，或联系我们获取选材建议。",
    browseMaterials: "浏览材料",
    discussApplication: "讨论您的应用",
  },
};

export const getNotFoundTitle = (locale: MessageLocale = "en") =>
  notFoundCopy[locale].title;

type NotFoundContentProps = {
  locale?: MessageLocale;
  localeSegment?: LocalizedUrlSegment;
};

export function NotFoundContent({
  locale = "en",
  localeSegment,
}: NotFoundContentProps) {
  const copy = notFoundCopy[locale];
  const routePrefix = localeSegment ? `/${localeSegment}` : "";

  return (
    <main className="text-slate-900">
      <section className="mesh-surface mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="inner-hero reveal-up" data-footer-adjacent="true">
          <p className="section-kicker mb-4">404</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
            {copy.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`${routePrefix}/products`}
              className="cta-primary px-6 py-3 text-sm"
            >
              {copy.browseMaterials}
            </Link>
            <Link
              href={`${routePrefix}/contact`}
              className="cta-secondary px-6 py-3 text-sm"
            >
              {copy.discussApplication}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
