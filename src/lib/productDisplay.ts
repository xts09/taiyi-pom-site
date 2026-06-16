import type { Product } from "@/data/products";

const smallWords = new Set(["and", "or", "of", "for", "to", "with", "by"]);

export const toDisplayTitle = (value: string) =>
  value
    .split(" ")
    .map((word, index) => {
      if (!word || /\d/.test(word) || word === word.toUpperCase()) {
        return word;
      }

      const parts = word.split("-");
      const transformed = parts.map((part, partIndex) => {
        const lower = part.toLowerCase();

        if (index > 0 && partIndex === 0 && smallWords.has(lower)) {
          return lower;
        }

        return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
      });

      return transformed.join("-");
    })
    .join(" ");

export function getProductListTitle(product: Product) {
  if (product.grade.toLowerCase().includes("custom")) {
    return product.title.replace(/ Compound$/i, "");
  }

  return product.grade;
}

export function getProductListDescriptor(product: Product) {
  if (product.category === "Base POM Resin") {
    return `MFI ${product.mfi}`;
  }

  const [primaryFeature] = product.features;

  if (primaryFeature) {
    return toDisplayTitle(primaryFeature.replace(/ content$/i, ""));
  }

  return product.category;
}
