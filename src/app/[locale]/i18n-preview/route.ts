import {
  createI18nPreviewResponse,
  getI18nPreviewLocale,
  getI18nPreviewPath,
  i18nPreviewLocales,
} from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return i18nPreviewLocales.map(({ urlSegment }) => ({
    locale: urlSegment,
  }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> },
) {
  const { locale: urlSegment } = await context.params;
  const locale = getI18nPreviewLocale(urlSegment);

  if (!locale) {
    return new Response("Not Found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  const path = getI18nPreviewPath(locale);
  return createI18nPreviewResponse(locale, `${siteUrl}${path}`);
}
