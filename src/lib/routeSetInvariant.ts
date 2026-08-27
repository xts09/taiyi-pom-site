const findDuplicates = (items: readonly string[]) => {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  items.forEach((item) => {
    if (seen.has(item)) {
      duplicates.add(item);
    }
    seen.add(item);
  });

  return [...duplicates].sort();
};

export const assertMatchingRouteSets = (
  actualRoutes: readonly string[],
  expectedRoutes: readonly string[],
  label: string,
) => {
  const actualDuplicates = findDuplicates(actualRoutes);
  const expectedDuplicates = findDuplicates(expectedRoutes);
  const actual = new Set(actualRoutes);
  const expected = new Set(expectedRoutes);
  const missing = [...expected].filter((route) => !actual.has(route)).sort();
  const unexpected = [...actual].filter((route) => !expected.has(route)).sort();

  if (
    actualDuplicates.length === 0 &&
    expectedDuplicates.length === 0 &&
    missing.length === 0 &&
    unexpected.length === 0
  ) {
    return;
  }

  throw new Error(
    `${label} mismatch: missing=[${missing.join(", ")}], unexpected=[${unexpected.join(", ")}], actualDuplicates=[${actualDuplicates.join(", ")}], expectedDuplicates=[${expectedDuplicates.join(", ")}]`,
  );
};
