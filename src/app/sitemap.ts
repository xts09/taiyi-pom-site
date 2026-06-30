import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { resourcePages } from "@/data/resources";
import { productCategoryEntries } from "@/lib/productCategories";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/applications",
    "/resources",
    "/technical-data-sheets",
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

  const resourceRoutes = resourcePages.map((page) => ({
    url: `${siteUrl}/resources/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...resourceRoutes];
}
