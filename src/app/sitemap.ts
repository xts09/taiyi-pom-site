import type { MetadataRoute } from "next";
import { applications } from "@/data/applications";
import { componentSolutionDetails } from "@/data/componentSolutionDetails";
import { privacyPolicyRelease } from "@/data/legal";
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
import {
  contactLanguageAlternates,
  contactSitemapLanguageOptions,
  homeLanguageAlternates,
  homeSitemapLanguageOptions,
  productsLanguageAlternates,
  productsSitemapLanguageOptions,
} from "@/i18n/releaseManifest";
import { productCategoryEntries } from "@/lib/productCategories";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const createUrlEntry = (
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
) => ({
  url: `${siteUrl}${path}`,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedLanguageRoutes = [
    {
      options: homeSitemapLanguageOptions,
      alternates: homeLanguageAlternates,
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      options: productsSitemapLanguageOptions,
      alternates: productsLanguageAlternates,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      options: contactSitemapLanguageOptions,
      alternates: contactLanguageAlternates,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
  ].flatMap(({ options, alternates, priority, changeFrequency }) => {
    const absoluteAlternates = Object.fromEntries(
      Object.entries(alternates).map(([language, path]) => [
        language,
        absoluteUrl(path),
      ]),
    );

    return options.map(({ href }) => ({
      ...createUrlEntry(href, priority, changeFrequency),
      alternates: {
        languages: absoluteAlternates,
      },
    }));
  });

  const staticRoutes = [
    createUrlEntry("/applications", 0.9, "weekly"),
    createUrlEntry("/components", 0.8, "weekly"),
    createUrlEntry("/resources", 0.85, "weekly"),
    createUrlEntry("/technical-data-sheets", 0.8, "weekly"),
    createUrlEntry("/about", 0.6, "monthly"),
    {
      ...createUrlEntry("/privacy", 0.2, "yearly"),
      lastModified: privacyPolicyRelease.lastModified,
    },
  ];

  const categoryRoutes = productCategoryEntries.map((entry) => ({
    ...createUrlEntry(entry.path, 0.75, "weekly"),
  }));

  const applicationRoutes = applications.map((application) => ({
    ...createUrlEntry(`/applications/${application.slug}`, 0.7, "monthly"),
  }));

  const componentSolutionRoutes = componentSolutionDetails.map((solution) =>
    createUrlEntry(`/components/${solution.slug}`, 0.7, "monthly"),
  );

  const productRoutes = catalogProducts
    .filter(isCatalogRecordIndexable)
    .map((product) => createUrlEntry(`/products/${product.slug}`, 0.65, "monthly"));

  const engineeringTdsRoutes = catalogEngineeringTds
    .filter(isCatalogRecordIndexable)
    .map((document) =>
      createUrlEntry(`/products/${document.slug}`, 0.65, "monthly"),
    );

  const resourceRoutes = resourcePages.map((page) =>
    createUrlEntry(`/resources/${page.slug}`, 0.65, "monthly"),
  );

  const resourceCategoryRoutes = resourceNavigationGroups.map((group) => ({
    ...createUrlEntry(getResourceNavigationGroupPath(group), 0.75, "weekly"),
  }));

  const technicalLandingRoutes = publicTechnicalLandingLinks.map((page) =>
    createUrlEntry(page.href, 0.75, "weekly"),
  );

  return [
    ...staticRoutes,
    ...localizedLanguageRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...engineeringTdsRoutes,
    ...applicationRoutes,
    ...componentSolutionRoutes,
    ...resourceCategoryRoutes,
    ...resourceRoutes,
    ...technicalLandingRoutes,
  ];
}
