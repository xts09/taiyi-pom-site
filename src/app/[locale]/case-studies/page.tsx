import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CaseStudiesPage, createCaseStudiesMetadata } from "@/components/CaseStudiesPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  if ((await params).locale !== "zh") return { robots: { index: false, follow: true } };
  return createCaseStudiesMetadata("zh");
}

export default async function Page({ params }: Props) {
  if ((await params).locale !== "zh") notFound();
  setRequestLocale("zh-CN");
  return <CaseStudiesPage localeSegment="zh" />;
}
