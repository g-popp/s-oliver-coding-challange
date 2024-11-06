import { useThemeColors } from '@/hooks/useThemeColors';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { forwardRef, useCallback, useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PriceSection } from './PriceSection';
import { BrandSection } from './BrandSection';
import { ColorSection } from './ColorSection';
import { ApplyButton } from './ApplyButton';
import { ResetButton } from './ResetButton';
import { useFilterStore } from '@/store/FilterStore';

type FilterModalProps = {
  priceRange: { min: number | undefined; max: number | undefined };
  brands: string[] | undefined;
  colors: Color[] | undefined;
};

export const FilterModal = forwardRef<BottomSheetModal, FilterModalProps>(
  (props, ref) => {
    const { text, background } = useThemeColors();
    const snapPoints = useMemo(() => ['60%'], []);
    const { dismiss } = useBottomSheetModal();
    const { bottom } = useSafeAreaInsets();

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<
      | {
          min: number;
          max: number;
        }
      | undefined
    >(undefined);

    const setFilteredBrands = useFilterStore(
      (state) => state.setFilteredBrands
    );
    const setFilteredColors = useFilterStore(
      (state) => state.setFilteredColors
    );
    const setFilteredPriceRange = useFilterStore(
      (state) => state.setFilteredPriceRange
    );

    const reset = useFilterStore((state) => state.resetFilter);

    const toggleColor = (color: string) => {
      setSelectedColors((prev) =>
        prev.includes(color)
          ? prev.filter((c) => c !== color)
          : [...prev, color]
      );
    };

    const toggleBrand = (brand: string) => {
      setSelectedBrands((prev) =>
        prev.includes(brand)
          ? prev.filter((b) => b !== brand)
          : [...prev, brand]
      );
    };

    const applyFilters = () => {
      setFilteredBrands(selectedBrands);
      setFilteredColors(selectedColors);
      if (selectedPriceRange)
        setFilteredPriceRange(selectedPriceRange.min, selectedPriceRange.max);
      dismiss();
    };

    const resetFilters = () => {
      setSelectedBrands([]);
      setSelectedColors([]);
      setSelectedPriceRange(undefined);
      reset();
    };

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          opacity={0.5}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
          onPress={dismiss}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: text }}
        backgroundStyle={{ backgroundColor: background }}
      >
        <View style={[styles.container, { marginVertical: bottom }]}>
          <PriceSection
            priceRange={{
              min: props.priceRange.min ?? 0,
              max: props.priceRange.max ?? 0,
            }}
            onValueChange={(min, max) => setSelectedPriceRange({ min, max })}
          />
          <BrandSection
            brands={props.brands}
            selectedBrands={selectedBrands}
            toggleBrand={toggleBrand}
          />
          <ColorSection
            colors={props.colors}
            selectedColors={selectedColors}
            toggleColor={toggleColor}
          />
          <View style={styles.buttonContainer}>
            <ApplyButton onPress={applyFilters} />
            <ResetButton onPress={resetFilters} />
          </View>
        </View>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: '10%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
