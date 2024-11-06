export function useFilteredData(
  data: Product[] | undefined,
  searchQuery: string
) {
  return data?.filter(
    (product: { name: string; brand: string }) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

export function usePriceRange(data: Product[] | undefined) {
  return {
    min: data?.reduce(
      (acc: number, curr: { price: number }) => Math.min(acc, curr.price),
      Infinity
    ),
    max: data?.reduce(
      (acc: number, curr: { price: number }) => Math.max(acc, curr.price),
      0
    ),
  };
}

export function useBrands(data: Product[] | undefined) {
  return Array.from(
    new Set(data?.map((product: { brand: string }) => product.brand))
  );
}

export function useUniqueColorsByGroup(data: Product[] | undefined) {
  const uniqueGroups: { [key: string]: Color } = {};

  data?.forEach((product) => {
    product.colorVariants.forEach((variant) => {
      const group = variant.color.group;
      if (!uniqueGroups[group]) {
        uniqueGroups[group] = variant.color;
      }
    });
  });

  return Object.values(uniqueGroups);
}
