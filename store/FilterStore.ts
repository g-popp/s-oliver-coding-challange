import { create } from 'zustand';

type Filter = {
  filteredBrands: string[];
  filteredColors: string[];
  filteredPriceRange: { min: number; max: number } | undefined;
};

type Action = {
  setFilteredBrands: (brands: string[]) => void;
  setFilteredColors: (colors: string[]) => void;
  setFilteredPriceRange: (min: number, max: number) => void;
  resetFilter: () => void;
};

export const useFilterStore = create<Filter & Action>((set) => ({
  filteredBrands: [],
  filteredColors: [],
  filteredPriceRange: undefined,
  setFilteredBrands: (brands) => set({ filteredBrands: brands }),
  setFilteredColors: (colors) => set({ filteredColors: colors }),
  setFilteredPriceRange: (min, max) =>
    set({ filteredPriceRange: { min, max } }),
  resetFilter: () =>
    set({
      filteredBrands: [],
      filteredColors: [],
      filteredPriceRange: undefined,
    }),
}));
