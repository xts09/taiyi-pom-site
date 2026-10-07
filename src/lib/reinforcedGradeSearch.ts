import { matchesTechnicalQuery } from "./mfiSearch.ts";

type ReinforcedGradeTarget = {
  family: string;
  category: string;
  filler?: string | number;
  fields: readonly string[];
  mfi?: string;
};

const reinforcementPatterns = [
  /\b(GF|CF|glass\s+fib(?:er|re)|carbon\s+fib(?:er|re))\s*[-:]?\s*(\d{1,3}(?:\.\d+)?)\s*%?/i,
  /\b(\d{1,3}(?:\.\d+)?)\s*(?:%|percent)\s*(glass\s+fib(?:er|re)|carbon\s+fib(?:er|re))\b/i,
];

export function getReinforcementLabel(
  target: Pick<ReinforcedGradeTarget, "category" | "filler">,
) {
  const reinforcement = target.category.match(
    /^(Glass|Carbon) Fiber Reinforced(?: POM Compound)?$/,
  )?.[1];
  const filler = String(target.filler ?? "").trim();
  if (!reinforcement || !/^\d+(?:\.\d+)?\s*%?$/.test(filler)) {
    return "";
  }
  return `${Number(filler.replace("%", ""))}% ${reinforcement === "Glass" ? "GF" : "CF"}`;
}

export function matchesReinforcedGradeQuery(
  query: string,
  target: ReinforcedGradeTarget,
) {
  const normalized = query.replace(
    /\b(PA66|PA6|PPA|POM)\s*[-/]?\s*(GF|CF)(?=\s*[-:]?\s*\d)/gi,
    "$1 $2",
  );
  const match = reinforcementPatterns
    .map((pattern) => normalized.match(pattern))
    .find(Boolean);

  if (!match) {
    return matchesTechnicalQuery(query, target);
  }

  const percentageFirst = /^\d/.test(match[1]);
  const reinforcement = percentageFirst ? match[2] : match[1];
  const percentage = Number(percentageFirst ? match[1] : match[2]);
  const category = /^GF$|^glass/i.test(reinforcement)
    ? "Glass Fiber Reinforced"
    : "Carbon Fiber Reinforced";
  const filler = String(target.filler ?? "").trim();
  const remainingQuery = normalized.replace(match[0], " ").trim();
  const requestedFamily = remainingQuery.match(/\b(PA66|PA6|PPA|POM)\b/i)?.[1];

  if (
    (target.category !== category &&
      target.category !== `${category} POM Compound`) ||
    !/^\d+(?:\.\d+)?\s*%?$/.test(filler) ||
    Number(filler.replace("%", "")) !== percentage ||
    (requestedFamily && requestedFamily.toUpperCase() !== target.family)
  ) {
    return false;
  }

  return matchesTechnicalQuery(remainingQuery, target);
}
