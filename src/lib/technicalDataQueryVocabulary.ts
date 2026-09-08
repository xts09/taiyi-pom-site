export type TechnicalDataSearchAlias = {
  aliases: readonly string[];
  canonicalTerm: string;
};

export const normalizeTechnicalDataQuery = (
  query: string,
  vocabulary: readonly TechnicalDataSearchAlias[] = [],
) => {
  let normalized = query.trim();

  const aliases = vocabulary
    .flatMap((entry) =>
      entry.aliases.map((alias) => ({
        alias: alias.trim(),
        canonicalTerm: entry.canonicalTerm.trim(),
      })),
    )
    .filter((entry) => entry.alias && entry.canonicalTerm)
    .sort((left, right) => right.alias.length - left.alias.length);

  for (const entry of aliases) {
    const escaped = entry.alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Latin aliases are whole words/phrases; CJK search keeps substring matching.
    const pattern = /\p{Script=Latin}/u.test(entry.alias)
      ? `(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`
      : escaped;
    normalized = normalized.replace(new RegExp(pattern, "giu"), ` ${entry.canonicalTerm} `);
  }

  return normalized.replace(/\s+/g, " ").trim();
};
