import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { productCategoryEntries } from "@/lib/productCategories";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/applications",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryRoutes = productCategoryEntries.map((entry) => ({
    url: `${siteUrl}${entry.path}`,
    changeFrequency: "monthly" as const,
    priority: entry.category === "POM" ? 0.85 : 0.75,
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
