import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { previewLanguages, resolvePreviewConfig } from "@/components/design-system/showcase-config";
import { loadMessages } from "@/i18n/messages";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { buildHeaderNavigation } from "@/lib/headerNavigation";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (process.env.NODE_ENV !== "development") return new Response(null, { status: 404 });
  const url = new URL(request.url);
  const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };
  if (url.searchParams.get("asset") === "font") {
    const font = await readFile(join(process.cwd(), "node_modules/@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2"));
    return new Response(new Uint8Array(font), { headers: { ...headers, "Content-Type": "font/woff2" } });
  }
  const preview = resolvePreviewConfig(url.searchParams.get("lang") ?? "zh");
  const scene = url.searchParams.get("scene") ?? "home";
  const menu = url.searchParams.get("menu") ?? "products";
  if (!preview || !["home", "inner"].includes(scene) || !["closed", "products", "applications", "resources"].includes(menu) || url.searchParams.has("asset")) return new Response(null, { status: 404 });
  const [html, messages] = await Promise.all([
    readFile(join(process.cwd(), "outputs/navigation-single-row-2026-10-17/index.html"), "utf8"),
    loadMessages(preview.locale),
  ]);
  const href = (path: string) => getLocalizedHref(path, preview.localeSegment);
  const model = {
    scene, menu, htmlLang: preview.htmlLang, header: messages.Header, tdsLabel: messages.Header.findTds,
    hero: scene === "home" ? messages.Home.hero : messages.Products.hero,
    navigation: buildHeaderNavigation(messages, preview.localeSegment),
    hrefs: { home: href("/"), products: href("/products"), news: href("/news/chinaplas-2026"), about: href("/about"), contact: href("/contact"), tds: href("/technical-data-sheets") },
    languages: previewLanguages.map(language => ({
      label: language.label, lang: resolvePreviewConfig(language.value)!.htmlLang,
      current: language.value === preview.value,
      href: `/design-system/navigation-single-row?lang=${language.value}&scene=${scene}&menu=${menu}`,
    })),
  };
  return new Response(html.replace("__NAVIGATION_MODEL__", JSON.stringify(model).replace(/</g, "\\u003c")), {
    headers: { ...headers, "Content-Type": "text/html; charset=utf-8" },
  });
}
