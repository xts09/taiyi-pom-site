import { GradeDirectory, GradeDirectoryRow } from "@/components/GradeDirectory";
import { products } from "@/data/products";
import { translateExpandedText } from "@/i18n/expandedLocaleContent";
import { chinesePomDirectoryMessages } from "@/i18n/messages/zh-CN-pom-directory";
import { getPomGradeDirectoryLabel, pomComparisonDataNote } from "@/i18n/pomDirectoryCopy";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import type { PreviewConfig } from "./showcase-config";

export function PomDirectoryShowcase({ preview }: { preview: PreviewConfig }) {
  const grades = ["EPTL402", "EMS102", "EMS162"].map((grade) => products.find((product) => product.grade === grade)!);
  return (
    <div className="products-motion-root">
      <div className="product-category-shell">
      <GradeDirectory enabled={false} labels={["牌号与配方", "目录典型值", "资料"]}>
        {grades.map((product, index) => (
          <GradeDirectoryRow
            key={product.slug}
            index={index}
            title={product.grade}
            descriptionVisible={product.grade === "EMS102" || product.grade === "EMS162"}
            eyebrow={preview.localeSegment ? getPomGradeDirectoryLabel(product, preview.localeSegment) : product.features[0]}
            description={preview.localeSegment
              ? translateExpandedText(chinesePomDirectoryMessages.directory.summaries[product.slug as keyof typeof chinesePomDirectoryMessages.directory.summaries], preview.localeSegment)
              : product.description}
            href={getLocalizedHref(`/products/${product.slug}`, preview.localeSegment)}
            action="查看牌号数据 →"
            specs={[
              ["MFI", product.mfi],
              ["拉伸强度", `${product.properties.find((property) => property.label === "Tensile Strength")?.value} MPa`],
            ]}
          />
        ))}
      </GradeDirectory>
      <p className="mt-4 text-sm text-[color:var(--ds-foreground-muted)]">
        {preview.localeSegment ? pomComparisonDataNote[preview.localeSegment] : "Typical catalogue values; tensile strength: ISO 527; MFI: ISO 1133, 195 °C/2.16 kg."}
      </p>
      </div>
    </div>
  );
}
