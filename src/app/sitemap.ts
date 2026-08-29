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
  getSitemapReleasedSourcePaths,
  getSitemapLanguageOptions,
  isReleasedSourcePath,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";
import { productCategoryEntries } from "@/lib/productCategories";
import { assertMatchingRouteSets } from "@/lib/routeSetInvariant";
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
      sourcePath: "/privacy",
      priority: 0.2,
      changeFrequency: "yearly" as const,
      lastModified: privacyPolicyRelease.lastModified,
    },
    {
      sourcePath: "/products/conductive-antistatic-compounds",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/about",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/wear-resistant-low-friction-pom",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/conductive-antistatic-pom",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/components",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    ...componentSolutionDetails
      .map((solution) => `/components/${solution.slug}`)
      .filter(isReleasedSourcePath)
      .map((sourcePath) => ({
        sourcePath,
        priority: 0.7,
        changeFrequency: "monthly" as const,
      })),
    {
      sourcePath: "/products/categories/pom",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath:
        "/products/categories/wear-resistant-low-friction-pom-compound",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products/categories/uv-resistant-pom-compound",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath:
        "/products/categories/carbon-fiber-reinforced-pom-compound",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products/categories/conductive-antistatic-pom-compound",
      priority: 0.75,
      changeFrequency: "weekly" as const,
    },
    {
      sourcePath: "/products/categories/ultra-high-flow-pom",
      priority: 0.75,
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
      sourcePath: "/products/etm090nc-base-pom-resin",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/etm130-base-pom-resin",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/etm270-base-pom-resin",
      priority: 0.65,
      changeFrequency: "monthly" as const,
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
      sourcePath: "/products/etm1500-base-pom-resin",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/etm1800-base-pom-resin",
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
      sourcePath: "/products/edr100-high-impact-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/ehi100st-high-impact-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/ehi202t-high-impact-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/ehi402t-high-impact-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/ehi602t-high-impact-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    {
      sourcePath: "/products/edr180-high-impact-pom",
      priority: 0.65,
      changeFrequency: "monthly" as const,
    },
    ...productCategoryEntries
      .map((entry) => entry.path)
      .filter(isReleasedSourcePath)
      .map((sourcePath) => ({
        sourcePath,
        priority: 0.75,
        changeFrequency: "weekly" as const,
      })),
    ...catalogProducts
      .filter(isCatalogRecordIndexable)
      .map((product) => `/products/${product.slug}`)
      .filter(isReleasedSourcePath)
      .map((sourcePath) => ({
        sourcePath,
        priority: 0.65,
        changeFrequency: "monthly" as const,
      })),
    ...catalogEngineeringTds
      .filter(isCatalogRecordIndexable)
      .map((document) => `/products/${document.slug}`)
      .filter(isReleasedSourcePath)
      .map((sourcePath) => ({
        sourcePath,
        priority: 0.65,
        changeFrequency: "monthly" as const,
      })),
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
    {
      sourcePath: "/news/chinaplas-2026",
      priority: 0.55,
      changeFrequency: "yearly" as const,
      lastModified: "2026-04-23",
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
    lastModified?: string;
  }>;

  const uniqueLocalizedLanguageRoutes = [
    ...new Map(
      localizedLanguageRoutes.map((route) => [route.sourcePath, route]),
    ).values(),
  ];

  assertMatchingRouteSets(
    uniqueLocalizedLanguageRoutes.map(({ sourcePath }) => sourcePath),
    getSitemapReleasedSourcePaths(),
    "Sitemap and localized release manifest",
  );

  const localizedRoutes = uniqueLocalizedLanguageRoutes.flatMap(
    (route) => {
      const { sourcePath, priority, changeFrequency } = route;
      const lastModified =
        "lastModified" in route ? route.lastModified : undefined;
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
        ...(lastModified ? { lastModified } : {}),
        alternates: {
          languages: absoluteAlternates,
        },
      }));
    },
  );

  const categoryRoutes = productCategoryEntries
    .filter((entry) => !isReleasedSourcePath(entry.path))
    .map((entry) => ({
      ...createUrlEntry(entry.path, 0.75, "weekly"),
    }));

  const componentSolutionRoutes = componentSolutionDetails
    .map((solution) => `/components/${solution.slug}`)
    .filter((path) => !isReleasedSourcePath(path))
    .map((path) => createUrlEntry(path, 0.7, "monthly"));

  const productRoutes = catalogProducts
    .filter(isCatalogRecordIndexable)
    .filter((product) => !isReleasedSourcePath(`/products/${product.slug}`))
    .map((product) =>
      createUrlEntry(`/products/${product.slug}`, 0.65, "monthly"),
    );

  const engineeringTdsRoutes = catalogEngineeringTds
    .filter(isCatalogRecordIndexable)
    .filter((document) => !isReleasedSourcePath(`/products/${document.slug}`))
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

  const technicalLandingRoutes = publicTechnicalLandingLinks
    .filter((page) => !isReleasedSourcePath(page.href))
    .map((page) => createUrlEntry(page.href, 0.75, "weekly"));

  return [
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
