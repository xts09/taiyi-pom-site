import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { WearBenchmarkPage } from "@/components/WearBenchmarkPage";
import { wearTestEvidence } from "@/data/wearTestEvidence";
import {
  getLanguageAlternates,
  getLocalizedHref,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };
const sourcePath = wearTestEvidence.benchmarkPath as ReleasedSourcePath;

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "zh" }];
}

export async function generateMetadata({ params }: Props) {
  if ((await params).locale !== "zh") return { robots: { index: false, follow: true } };
  return createPageMetadata({
    title: "POM 耐磨测试 Benchmark | 台益",
    description: "按工况查看 POM 耐磨试验记录，包括测量值、过程曲线和现有试样前后照片。",
    path: getLocalizedHref(sourcePath, "zh"),
    image: "/og-resources-data-validation.jpg",
    languageAlternates: getLanguageAlternates(sourcePath),
    openGraphLocale: "zh_CN",
  });
}

export default async function Page({ params }: Props) {
  if ((await params).locale !== "zh") notFound();
  setRequestLocale("zh-CN");
  return <WearBenchmarkPage localeSegment="zh" />;
}
