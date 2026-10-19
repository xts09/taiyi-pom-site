import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { resolvePreviewConfig, previewLanguages } from "@/components/design-system/showcase-config";
import { applicationNavigationEntries } from "@/data/applicationNavigation";
import { getCaseStudyNavigation } from "@/data/caseStudyNavigation";
import { homeComponentEntries } from "@/data/homeEntries";
import { getResourceNavigationGroupPath, resourceNavigationGroups } from "@/data/resourceNavigation";
import { loadMessages } from "@/i18n/messages";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import type { ResourceTaxonomyKey } from "@/i18n/types";
import { buildHomeMaterialColumns } from "@/lib/homeMaterialCatalogue";

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
  if (!preview || !["home", "inner"].includes(scene) || url.searchParams.has("asset")) return new Response(null, { status: 404 });
  const [html, messages] = await Promise.all([
    readFile(join(process.cwd(), "outputs/navigation-concept-20261015/index.html"), "utf8"),
    loadMessages(preview.locale),
  ]);
  const href = (path: string) => getLocalizedHref(path, preview.localeSegment);
  const columns = buildHomeMaterialColumns({
    messages: messages.Home.taskFirst,
    materialLabels: messages.Contact.form.materialOptionLabels,
    localizedHref: href,
  });
  const componentItems = homeComponentEntries.map((entry, index) => ({
    title: messages.Home.taskFirst.components.items[index].title,
    href: href(entry.href),
  }));
  const caseStudies = getCaseStudyNavigation(preview.localeSegment);
  const backLabels = { zh: "返回", en: "Back", de: "Zurück", fr: "Retour", "pt-br": "Voltar" };
  const model = {
    scene,
    htmlLang: preview.htmlLang,
    languageLabel: preview.label,
    header: messages.Header,
    hero: { title: messages.Home.hero.title, body: messages.Home.hero.body },
    hrefs: {
      home: href("/"), products: href("/products"), applications: href("/applications"),
      resources: href("/resources"), news: href("/news/chinaplas-2026"),
      about: href("/about"), contact: href("/contact"), tds: href("/technical-data-sheets"),
    },
    ui: { back: backLabels[preview.value], skip: preview.value === "zh" ? "跳至主要内容" : "Skip to main content" },
    products: columns.map(column => ({
      title: column.title, href: column.href,
      items: column.items.map(item => ({ title: item.title, href: item.href })),
    })),
    applications: [
      { title: messages.Header.applicationAreas, items: applicationNavigationEntries.map(entry => ({ title: messages.Taxonomy.applications[entry.slug], href: href(`/applications/${entry.slug}`) })) },
      { title: messages.Taxonomy.componentSolutions, items: componentItems },
    ],
    resources: [
      { title: messages.Header.technicalResources, items: resourceNavigationGroups.map(group => ({ title: messages.Taxonomy.resources[group.id as ResourceTaxonomyKey].title, href: href(getResourceNavigationGroupPath(group)) })) },
      { title: messages.Header.applications, items: [
        ...(caseStudies ? [{ title: caseStudies.label, href: href(caseStudies.href) }] : []),
        componentItems[0],
        { title: messages.Header.discussApplication, href: href("/contact") },
      ] },
    ],
    feature: componentItems[0],
    languages: previewLanguages.map(language => ({
      label: language.label, htmlLang: resolvePreviewConfig(language.value)!.htmlLang,
      current: language.value === preview.value,
      href: `/design-system/navigation-concept?lang=${language.value}&scene=${scene}`,
    })),
  };
  const json = JSON.stringify(model).replace(/</g, "\\u003c");
  return new Response(html.replace("__NAVIGATION_MODEL__", json), {
    headers: { ...headers, "Content-Type": "text/html; charset=utf-8" },
  });
}
