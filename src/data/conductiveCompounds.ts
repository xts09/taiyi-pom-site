import { catalogConductiveEntries } from "@/data/catalog";

export type ConductiveTechnology = "cnt" | "cf";
export type ConductiveRange = "r35" | "r68" | "r610";

export type ConductiveCompound = {
  grade: string;
  matrix: string;
  technology: ConductiveTechnology;
  range: ConductiveRange;
  rangeLabel: string;
};

export const conductiveCompounds: ConductiveCompound[] =
  catalogConductiveEntries.map((record) => ({
    grade: record.grade,
    matrix: record.matrix,
    technology: record.technology,
    range: record.range,
    rangeLabel: record.rangeLabel,
  }));

export const conductiveMatrices = Array.from(
  new Set(conductiveCompounds.map((compound) => compound.matrix)),
).sort((left, right) => left.localeCompare(right));

export const conductiveSeries = {
  cnt: {
    shortLabel: "CNT Antistatic",
    title: "Carbon Nanotube Antistatic Series",
    description:
      "Permanent static-control directions designed around non-blooming, non-migrating carbon-nanotube modification and low specific gravity.",
  },
  cf: {
    shortLabel: "Carbon Fiber Conductive",
    title: "Carbon Fiber Conductive Series",
    description:
      "Carbon-fiber directions for controlled conductivity with a thermal-conductive material review path.",
  },
} as const;
