import englishDictionary from "./generated/application-narrative-en.json" with { type: "json" };
import { englishApplicationNarrativeOverrides } from "./englishApplicationNarrativeOverrides.ts";

const chinesePattern = /[\u3400-\u9fff]/;
const dictionary: Record<string, string> = {
  ...englishDictionary,
  ...englishApplicationNarrativeOverrides,
};

const normalizeEngineeringTerms = (value: string) =>
  value
    .replace(/\bmaterial orientations\b/gi, "material directions")
    .replace(/\bmaterial orientation\b/gi, "material direction")
    .replace(/\bwaterway\b/gi, "water circuit")
    .replace(/\bfailure phenomena\b/gi, "failure modes")
    .replace(/\binsertion and unplug cycles\b/gi, "mating cycles")
    .replace(/\bfind the parts that are close to each other\b/gi, "find the closest part example")
    .replace(/\bburling\b/gi, "surface damage");

export const translateEnglishApplicationText = (value: string): string => {
  if (!chinesePattern.test(value)) {
    return value;
  }

  const translated = dictionary[value];

  if (!translated || chinesePattern.test(translated)) {
    throw new Error(`Missing reviewed English application copy for: ${value}`);
  }

  return normalizeEngineeringTerms(translated);
};

export const translateEnglishApplicationContent = <T>(value: T): T => {
  if (typeof value === "string") {
    return translateEnglishApplicationText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) =>
      translateEnglishApplicationContent(item),
    ) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        translateEnglishApplicationContent(item),
      ]),
    ) as T;
  }

  return value;
};
