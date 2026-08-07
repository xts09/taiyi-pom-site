export type MfiSearchOperator = "gte" | "gt" | "eq";

export type MfiSearch = {
  operator: MfiSearchOperator;
  target: number;
};

const MFI_SEARCH_PATTERN =
  /\bmfi\s*(>=|>|=)?\s*([0-9]+(?:\.[0-9]+)?)/i;

export const parseMfiSearch = (value: string): MfiSearch | null => {
  const match = value.match(MFI_SEARCH_PATTERN);
  const target = match?.[2] ? Number(match[2]) : null;

  if (target === null || !Number.isFinite(target)) {
    return null;
  }

  const operator: MfiSearchOperator =
    match?.[1] === ">" ? "gt" : match?.[1] === "=" ? "eq" : "gte";

  return { operator, target };
};

export const removeMfiSearch = (value: string) =>
  value.replace(new RegExp(MFI_SEARCH_PATTERN.source, "gi"), " ");

export const matchesMfiSearch = (
  value: string,
  search: MfiSearch | null,
) => {
  if (!search) {
    return true;
  }

  const match = value.match(/[0-9]+(?:\.[0-9]+)?/);
  const productMfi = match?.[0] ? Number(match[0]) : null;

  if (productMfi === null || !Number.isFinite(productMfi)) {
    return false;
  }

  if (search.operator === "gt") {
    return productMfi > search.target;
  }

  if (search.operator === "eq") {
    return productMfi === search.target;
  }

  return productMfi >= search.target;
};

type TechnicalSearchTarget = {
  fields: readonly string[];
  mfi?: string;
};

export const matchesTechnicalQuery = (
  query: string,
  target: TechnicalSearchTarget,
) => {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    return true;
  }

  const mfiSearch = parseMfiSearch(normalizedQuery);
  const searchTerms = removeMfiSearch(normalizedQuery)
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  const haystack = target.fields.join(" ").toLowerCase();
  const matchesTerms = searchTerms.every((term) => haystack.includes(term));

  if (!matchesTerms) {
    return false;
  }

  if (mfiSearch === null) {
    return true;
  }

  return target.mfi !== undefined && matchesMfiSearch(target.mfi, mfiSearch);
};
