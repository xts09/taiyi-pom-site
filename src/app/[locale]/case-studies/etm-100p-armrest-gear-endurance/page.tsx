import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { createGearCaseMetadata, GearEnduranceCasePage } from "@/components/GearEnduranceCasePage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  if ((await params).locale !== "zh") return { robots: { index: false, follow: true } };
  return createGearCaseMetadata("zh");
}

export default async function Page({ params }: Props) {
  if ((await params).locale !== "zh") notFound();
  setRequestLocale("zh-CN");
  return <GearEnduranceCasePage localeSegment="zh" />;
}
