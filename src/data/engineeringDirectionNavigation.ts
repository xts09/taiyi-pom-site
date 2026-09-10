const landingPaths: Record<string, string> = {
  "PA6:Glass Fiber Reinforced": "/products/categories/glass-fiber-reinforced-pa6-compound",
  "PA66:Glass Fiber Reinforced": "/products/categories/glass-fiber-reinforced-pa66-compound",
  "PPA:Glass Fiber Reinforced": "/products/categories/glass-fiber-reinforced-ppa-compound",
};

export function getEngineeringDirectionHref(family: string, direction: string) {
  return landingPaths[`${family}:${direction}`] ?? "#pom-grades";
}
