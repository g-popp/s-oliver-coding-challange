import { useFilterStore } from '../store/FilterStore';

export function useFilteredData(
  data: Product[] | undefined,
  searchQuery: string
) {
  const filteredBrands = useFilterStore((state) => state.filteredBrands);
  const filteredColors = useFilterStore((state) => state.filteredColors);
  const filteredPriceRange = useFilterStore(
    (state) => state.filteredPriceRange
  ) || { min: 0, max: Infinity };

  return data?.filter((product) => {
    const matchesSearchQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBrand =
      filteredBrands.length === 0 || filteredBrands.includes(product.brand);
    const matchesColor =
      filteredColors.length === 0 ||
      product.colorVariants.some((variant) =>
        filteredColors.includes(variant.color.value)
      );
    const matchesPriceRange =
      product.price >= filteredPriceRange.min &&
      product.price <= filteredPriceRange.max;

    return (
      matchesSearchQuery && matchesBrand && matchesColor && matchesPriceRange
    );
  });
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
