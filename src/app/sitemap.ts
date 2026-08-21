import type { MetadataRoute } from "next";
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
  getLanguageAlternates,
  getSitemapLanguageOptions,
  isReleasedSourcePath,
  type ReleasedSourcePath,
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
      sourcePath: "/",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products/categories/base-pom-resin",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products/categories/glass-bead-filled-pom-compound",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products/categories/glass-fiber-reinforced-pom-compound",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products/categories/high-impact-pom-compound",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products/etm450-base-pom-resin",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/etm750-base-pom-resin",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/xt-100-base-pom-resin",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/egb25-glass-bead-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/egh502h-glass-fiber-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/ehi402t-high-impact-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/edr180-high-impact-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/technical-data-sheets",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/contact",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/applications",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/applications/automotive",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/applications/electronics",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/applications/conveyor-automation",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/applications/motion-components",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/applications/water-control",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/applications/washing-machine-components",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/applications/outdoor-equipment",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/applications/textile-machinery",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/resources",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    ...resourceNavigationGroups.map((group) => ({
      sourcePath: getResourceNavigationGroupPath(group) as ReleasedSourcePath,
      priority: 0.75,
      changeFrequency: "weekly" as const,
    })),
    ...resourcePages.map((page) => ({
      sourcePath: `/resources/${page.slug}` as ReleasedSourcePath,
      priority: 0.65,
      changeFrequency: "monthly" as const,
    })),
  ] satisfies ReadonlyArray<{
    sourcePath: ReleasedSourcePath;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }>;

  const localizedRoutes = localizedLanguageRoutes.flatMap(
    ({ sourcePath, priority, changeFrequency }) => {
      const options = getSitemapLanguageOptions(sourcePath);
      const alternates = getLanguageAlternates(sourcePath);
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
    },
  );

  const staticRoutes = [
    createUrlEntry("/components", 0.8, "weekly"),
    createUrlEntry("/about", 0.6, "monthly"),
    {
      ...createUrlEntry("/privacy", 0.2, "yearly"),
      lastModified: privacyPolicyRelease.lastModified,
    },
  ];

  const categoryRoutes = productCategoryEntries
    .filter((entry) => !isReleasedSourcePath(entry.path))
    .map((entry) => ({
      ...createUrlEntry(entry.path, 0.75, "weekly"),
    }));

  const componentSolutionRoutes = componentSolutionDetails.map((solution) =>
    createUrlEntry(`/components/${solution.slug}`, 0.7, "monthly"),
  );

  const productRoutes = catalogProducts
    .filter(isCatalogRecordIndexable)
    .filter((product) => !isReleasedSourcePath(`/products/${product.slug}`))
    .map((product) =>
      createUrlEntry(`/products/${product.slug}`, 0.65, "monthly"),
    );

  const engineeringTdsRoutes = catalogEngineeringTds
    .filter(isCatalogRecordIndexable)
    .map((document) =>
      createUrlEntry(`/products/${document.slug}`, 0.65, "monthly"),
    );

  const resourceRoutes = resourcePages
    .filter((page) => !isReleasedSourcePath(`/resources/${page.slug}`))
    .map((page) =>
      createUrlEntry(`/resources/${page.slug}`, 0.65, "monthly"),
    );

  const resourceCategoryRoutes = resourceNavigationGroups
    .filter(
      (group) => !isReleasedSourcePath(getResourceNavigationGroupPath(group)),
    )
    .map((group) => ({
      ...createUrlEntry(getResourceNavigationGroupPath(group), 0.75, "weekly"),
    }));

  const technicalLandingRoutes = publicTechnicalLandingLinks.map((page) =>
    createUrlEntry(page.href, 0.75, "weekly"),
  );

  return [
    ...staticRoutes,
    ...localizedRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...engineeringTdsRoutes,
    ...componentSolutionRoutes,
    ...resourceCategoryRoutes,
    ...resourceRoutes,
    ...technicalLandingRoutes,
  ];
}
