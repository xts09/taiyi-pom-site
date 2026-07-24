import type { MetadataRoute } from "next";
import { applications } from "@/data/applications";
import {
  catalogEngineeringTds,
  catalogProducts,
  isCatalogRecordIndexable,
} from "@/data/catalog";
import { publicTechnicalLandingLinks } from "@/data/pomLandingPages";
import {
  getResourceNavigationGroupPath,
  resourceNavigationGroups,
} from "@/data/resourceNavigation";
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
    "/about/manufacturing-capabilities",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
  }));

  const categoryRoutes = productCategoryEntries.map((entry) => ({
    url: `${siteUrl}${entry.path}`,
  }));

  const applicationRoutes = applications.map((application) => ({
    url: `${siteUrl}/applications/${application.slug}`,
  }));

  const productRoutes = catalogProducts
    .filter(isCatalogRecordIndexable)
    .map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
    }));

  const engineeringTdsRoutes = catalogEngineeringTds
    .filter(isCatalogRecordIndexable)
    .map((document) => ({
      url: `${siteUrl}/products/${document.slug}`,
    }));

  const resourceRoutes = resourcePages.map((page) => ({
    url: `${siteUrl}/resources/${page.slug}`,
  }));

  const resourceCategoryRoutes = resourceNavigationGroups.map((group) => ({
    url: `${siteUrl}${getResourceNavigationGroupPath(group)}`,
  }));

  const technicalLandingRoutes = publicTechnicalLandingLinks.map((page) => ({
    url: `${siteUrl}${page.href}`,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...engineeringTdsRoutes,
    ...applicationRoutes,
    ...resourceCategoryRoutes,
    ...resourceRoutes,
    ...technicalLandingRoutes,
  ];
}
