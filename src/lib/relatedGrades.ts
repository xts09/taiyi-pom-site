type RelatedGradeSelectionOptions<T> = {
  items: readonly T[];
  current: T;
  getId: (item: T) => string;
  isPrimaryPeer: (item: T, current: T) => boolean;
  isFallbackPeer: (item: T, current: T) => boolean;
  limit?: number;
};

const selectCircularNeighbours = <T>(
  items: readonly T[],
  currentId: string,
  getId: (item: T) => string,
  limit: number,
) => {
  const seenIds = new Set<string>();
  const stableItems = items.filter((item) => {
    const id = getId(item);
    if (seenIds.has(id)) return false;
    seenIds.add(id);
    return true;
  });
  const currentIndex = stableItems.findIndex(
    (item) => getId(item) === currentId,
  );

  if (currentIndex < 0 || stableItems.length < 2 || limit < 1) return [];

  const selectionLimit = Math.min(Math.floor(limit), stableItems.length - 1);
  const selected: T[] = [];
  const selectedIds = new Set([currentId]);

  for (
    let distance = 1;
    selected.length < selectionLimit && distance < stableItems.length;
    distance += 1
  ) {
    for (const offset of [distance, -distance]) {
      const index =
        (currentIndex + offset + stableItems.length) % stableItems.length;
      const candidate = stableItems[index];
      const candidateId = getId(candidate);

      if (selectedIds.has(candidateId)) continue;

      selected.push(candidate);
      selectedIds.add(candidateId);

      if (selected.length === selectionLimit) break;
    }
  }

  return selected;
};

export const selectRelatedGrades = <T>({
  items,
  current,
  getId,
  isPrimaryPeer,
  isFallbackPeer,
  limit = 3,
}: RelatedGradeSelectionOptions<T>) => {
  const currentId = getId(current);
  const selectGroup = (predicate: RelatedGradeSelectionOptions<T>["isPrimaryPeer"]) =>
    selectCircularNeighbours(
      items.filter(
        (item) => getId(item) === currentId || predicate(item, current),
      ),
      currentId,
      getId,
      limit,
    );
  const primarySelection = selectGroup(isPrimaryPeer);

  return primarySelection.length > 0
    ? primarySelection
    : selectGroup(isFallbackPeer);
};
