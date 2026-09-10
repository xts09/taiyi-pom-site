export const ENGINEERING_GF_DIRECTION = "Glass Fiber Reinforced" as const;

export const engineeringGfPolymers = ["PA6", "PA66", "PPA"] as const;

export type EngineeringGfPolymer = (typeof engineeringGfPolymers)[number];

export type EngineeringGfGuideId =
  | "pa6-vs-pa66-reinforced-parts"
  | "glass-fiber-reinforced-pa6-pa66-selection-guide"
  | "ppa-vs-pa66-material-selection";

type EngineeringGfLandingRegistryEntry = {
  slug: `glass-fiber-reinforced-${string}-compound`;
  parentPath: `/products/categories/${string}`;
  compareWith?: EngineeringGfPolymer;
  guideIds: readonly EngineeringGfGuideId[];
};

export const engineeringGfLandingRegistry = {
  PA6: {
    slug: "glass-fiber-reinforced-pa6-compound",
    parentPath: "/products/categories/pa6-compound",
    compareWith: "PA66",
    guideIds: [
      "pa6-vs-pa66-reinforced-parts",
      "glass-fiber-reinforced-pa6-pa66-selection-guide",
    ],
  },
  PA66: {
    slug: "glass-fiber-reinforced-pa66-compound",
    parentPath: "/products/categories/pa66-compound",
    compareWith: "PA6",
    guideIds: [
      "pa6-vs-pa66-reinforced-parts",
      "glass-fiber-reinforced-pa6-pa66-selection-guide",
    ],
  },
  PPA: {
    slug: "glass-fiber-reinforced-ppa-compound",
    parentPath: "/products/categories/ppa-compound",
    compareWith: "PA66",
    guideIds: ["ppa-vs-pa66-material-selection"],
  },
} as const satisfies Record<
  EngineeringGfPolymer,
  EngineeringGfLandingRegistryEntry
>;

export type EngineeringGfLandingSlug =
  (typeof engineeringGfLandingRegistry)[EngineeringGfPolymer]["slug"];

export type EngineeringGfLandingPath =
  `/products/categories/${EngineeringGfLandingSlug}`;

export type EngineeringGfLandingRegistration =
  (typeof engineeringGfLandingRegistry)[EngineeringGfPolymer] & {
    polymer: EngineeringGfPolymer;
    path: EngineeringGfLandingPath;
  };

export const isEngineeringGfPolymer = (
  family: string,
): family is EngineeringGfPolymer =>
  engineeringGfPolymers.includes(family as EngineeringGfPolymer);

export const getEngineeringGfLandingPath = (
  polymer: EngineeringGfPolymer,
): EngineeringGfLandingPath =>
  `/products/categories/${engineeringGfLandingRegistry[polymer].slug}`;

export const getEngineeringGfLandingRegistration = (
  polymer: EngineeringGfPolymer,
): EngineeringGfLandingRegistration => ({
  polymer,
  ...engineeringGfLandingRegistry[polymer],
  path: getEngineeringGfLandingPath(polymer),
});

export const listEngineeringGfLandingRegistrations = () =>
  engineeringGfPolymers.map(getEngineeringGfLandingRegistration);

export const findEngineeringGfLandingByDirection = (
  family: string,
  direction: string,
) =>
  direction === ENGINEERING_GF_DIRECTION && isEngineeringGfPolymer(family)
    ? getEngineeringGfLandingRegistration(family)
    : undefined;
