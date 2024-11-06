import { create } from 'zustand';

type Filter = {
  brand: string[];
  color: string[];
  priceRange: { min: number; max: number };
};

type Action = {
  setBrand: (brand: string) => void;
  removeBrand: (brand: string) => void;
  setColor: (color: string) => void;
  removeColor: (color: string) => void;
  setPriceRange: (min: number, max: number) => void;
  reset: () => void;
};

export const useFilterStore = create<Filter & Action>((set) => ({
  brand: [],
  color: [],
  priceRange: { min: 0, max: 0 },
  setBrand: (brand: string) =>
    set((state) => ({ brand: [...state.brand, brand] })),
  removeBrand: (brand: string) =>
    set((state) => ({ brand: state.brand.filter((b) => b !== brand) })),
  setColor: (color: string) =>
    set((state) => ({ color: [...state.color, color] })),
  removeColor: (color: string) =>
    set((state) => ({ color: state.color.filter((c) => c !== color) })),
  setPriceRange: (min: number, max: number) =>
    set(() => ({ priceRange: { min, max } })),
  reset: () =>
    set(() => ({ brand: [], color: [], priceRange: { min: 0, max: 0 } })),
}));
