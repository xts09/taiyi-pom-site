import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { MaterialCaseStudyPage, createMaterialCaseMetadata } from "@/components/MaterialCaseStudyPage";
import { getGlassFiberCaseStudy, glassFiberCaseStudies } from "@/data/glassFiberCaseStudies";

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return glassFiberCaseStudies.map(({ slug }) => ({ locale: "zh", slug })); }
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const study = getGlassFiberCaseStudy(slug);
  if (locale !== "zh" || !study) notFound();
  return createMaterialCaseMetadata({ study, localeSegment: "zh" });
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const study = getGlassFiberCaseStudy(slug);
  if (locale !== "zh" || !study) notFound();
  setRequestLocale("zh-CN");
  return <MaterialCaseStudyPage study={study} localeSegment="zh" />;
}
