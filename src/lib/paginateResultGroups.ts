export function createResultPage(
  total: number,
  requestedPage: string,
  pageSize: number,
) {
  const parsedPage = /^[1-9]\d*$/.test(requestedPage)
    ? Number(requestedPage)
    : 1;
  const totalPages = Math.ceil(total / pageSize);
  const page = Math.min(
    Number.isSafeInteger(parsedPage) ? parsedPage : 1,
    Math.max(1, totalPages),
  );
  const firstIndex = (page - 1) * pageSize;
  let groupOffset = 0;

  return {
    page,
    totalPages,
    first: total ? firstIndex + 1 : 0,
    last: Math.min(firstIndex + pageSize, total),
    take<T>(items: readonly T[]): T[] {
      const groupStart = groupOffset;
      groupOffset += items.length;
      const start = Math.max(0, firstIndex - groupStart);
      const end = Math.max(start, Math.min(items.length, firstIndex + pageSize - groupStart));
      return items.slice(start, end);
    },
  };
}
