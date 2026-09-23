import { WearBenchmarkPage } from "@/components/WearBenchmarkPage";
import { wearTestEvidence } from "@/data/wearTestEvidence";
import { getLanguageAlternates, type ReleasedSourcePath } from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const sourcePath = wearTestEvidence.benchmarkPath as ReleasedSourcePath;

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "POM Wear Test Benchmark | Taiyi Polymer",
  description: "Explore six POM wear-test results by condition, with measured values, process curves and specimen photos.",
  path: sourcePath,
  image: "/og-resources-data-validation.jpg",
  languageAlternates: getLanguageAlternates(sourcePath),
});

export default function Page() {
  return <WearBenchmarkPage />;
}
