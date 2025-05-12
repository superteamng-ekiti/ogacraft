type Filters<T> = {
  exact?: {
    [K in keyof T]?: T[K] | T[K][];
  };
  ranges?: {
    [K in keyof T]?: {
      lt?: number;
      lte?: number;
      gt?: number;
      gte?: number;
    };
  };
};

export function filterAndSearchWithRanges<T extends Record<string, any>>(
  data: T[],
  searchTerm: string,
  searchKeys: (keyof T)[],
  filters?: Filters<T>
): T[] {
  const lowerSearch = searchTerm.toLowerCase();

  return data.filter((item) => {
    // Handle text search
    const matchesSearch =
      !searchTerm ||
      searchKeys.some((key) =>
        item[key]?.toString().toLowerCase().includes(lowerSearch)
      );

    // Handle exact match filters
    const matchesExact =
      !filters?.exact ||
      Object.entries(filters.exact).every(([key, value]) => {
        const itemValue = item[key];
        if (Array.isArray(value)) return value.includes(itemValue);
        return itemValue === value;
      });

    // Handle range filters
    const matchesRanges =
      !filters?.ranges ||
      Object.entries(filters.ranges).every(([key, range]) => {
        const itemValue = item[key];
        if (typeof itemValue !== 'number') return false;

        return (
          (range && (range.lt === undefined || itemValue < range.lt)) &&
          (range.lte === undefined || itemValue <= range.lte) &&
          (range.gt === undefined || itemValue > range.gt) &&
          (range.gte === undefined || itemValue >= range.gte)
        );
      });

    return matchesSearch && matchesExact && matchesRanges;
  });
}
