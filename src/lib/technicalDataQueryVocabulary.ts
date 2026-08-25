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
    normalized = normalized.replaceAll(entry.alias, ` ${entry.canonicalTerm} `);
  }

  return normalized.replace(/\s+/g, " ").trim();
};
