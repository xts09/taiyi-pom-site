import { notFound } from "next/navigation";
import { MaterialCaseStudyPage, createMaterialCaseMetadata } from "@/components/MaterialCaseStudyPage";
import { getGlassFiberCaseStudy, glassFiberCaseStudies } from "@/data/glassFiberCaseStudies";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return glassFiberCaseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const study = getGlassFiberCaseStudy((await params).slug);
  if (!study) notFound();
  return createMaterialCaseMetadata({ study });
}
export default async function Page({ params }: Props) {
  const study = getGlassFiberCaseStudy((await params).slug);
  if (!study) notFound();
  return <MaterialCaseStudyPage study={study} />;
}
