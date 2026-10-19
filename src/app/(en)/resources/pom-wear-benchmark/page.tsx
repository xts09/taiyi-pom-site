import { WearBenchmarkPage } from "@/components/WearBenchmarkPage";
import { wearTestEvidence } from "@/data/wearTestEvidence";
import { getLanguageAlternates, type ReleasedSourcePath } from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const sourcePath = wearTestEvidence.benchmarkPath as ReleasedSourcePath;

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "POM Wear-Test Records | Taiyi Polymer",
  description: "Browse internal POM wear-test records by condition, with measured values, process curves and specimen photos where available.",
  path: sourcePath,
  image: "/og-resources-data-validation.jpg",
  languageAlternates: getLanguageAlternates(sourcePath),
});

export default function Page() {
  return <WearBenchmarkPage />;
}
