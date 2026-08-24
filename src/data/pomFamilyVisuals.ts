export type PomFamilyMasterVisual = {
  src: string;
  objectPosition?: string;
};

export const pomFamilyMasterVisuals: Record<string, PomFamilyMasterVisual> = {
  "Wear-Resistant Low-Friction POM Compound": {
    src: "/materials/real/pom-wear-additive-real-master.webp",
  },
  "High-Impact POM Compound": {
    src: "/materials/real/pom-special-toughener-real-master.webp",
  },
  "UV-Resistant POM Compound": {
    src: "/materials/real/pom-base-flow-additive-real-master.webp",
  },
  "Glass Fiber Reinforced POM Compound": {
    src: "/materials/real/pom-glass-fiber-real-master.webp",
  },
  "Glass Bead Filled POM Compound": {
    src: "/materials/real/pom-mineral-filled-real-master.webp",
  },
  "Carbon Fiber Reinforced POM Compound": {
    src: "/materials/real/pom-carbon-fiber-real-master.webp",
  },
  "Conductive / Antistatic POM Compound": {
    src: "/materials/real/pom-carbon-nanotube-real-master.webp",
  },
  "Base POM Resin": {
    src: "/materials/real/pom-base-flow-additive-real-master.webp",
  },
  "Ultra-High Flow POM": {
    src: "/materials/real/pom-base-flow-additive-real-master.webp",
  },
};

const categoryByFamilyHref: Record<string, string> = {
  "/products/categories/wear-resistant-low-friction-pom-compound":
    "Wear-Resistant Low-Friction POM Compound",
  "/products/categories/high-impact-pom-compound": "High-Impact POM Compound",
  "/products/categories/uv-resistant-pom-compound": "UV-Resistant POM Compound",
  "/products/categories/glass-fiber-reinforced-pom-compound":
    "Glass Fiber Reinforced POM Compound",
  "/products/categories/glass-bead-filled-pom-compound":
    "Glass Bead Filled POM Compound",
  "/products/categories/carbon-fiber-reinforced-pom-compound":
    "Carbon Fiber Reinforced POM Compound",
  "/products/categories/conductive-antistatic-pom-compound":
    "Conductive / Antistatic POM Compound",
  "/products/categories/base-pom-resin": "Base POM Resin",
  "/products/categories/ultra-high-flow-pom": "Ultra-High Flow POM",
};

export function getPomFamilyMasterVisualByHref(href?: string) {
  if (!href) return undefined;

  const sourceHref = href.replace(/^\/(?:de|fr|pt-br|zh)(?=\/)/, "");
  const category = categoryByFamilyHref[sourceHref];

  return category ? pomFamilyMasterVisuals[category] : undefined;
}
