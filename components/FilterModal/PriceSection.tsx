import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import RangeSlider from '@jesster2k10/react-native-range-slider';
import { StyleSheet, Text, View } from 'react-native';

export const PriceSection = ({
  priceRange,
  onValueChange,
}: {
  priceRange: { min: number; max: number };
  onValueChange: (min: number, max: number) => void;
}) => {
  const { text, tabIconDefault, tabIconSelected } = useThemeColors();
  return (
    <View style={styles.section}>
      <Text style={[DefaultStyles.text, styles.sectionTitle, { color: text }]}>
        PRICE
      </Text>
      <RangeSlider
        onChange={(min, max) => onValueChange(min, max)}
        type='range'
        min={priceRange.min}
        max={priceRange.max}
        selectedMinimum={priceRange.min}
        selectedMaximum={priceRange.max}
        tintColor={tabIconDefault}
        handleColor={text}
        tintColorBetweenHandles={tabIconSelected}
        suffix='€'
        minLabelColor={text}
        maxLabelColor={text}
        minLabelFontSize={12}
        maxLabelFontSize={12}
        minLabelFont='Helvetica Neue'
        maxLabelFont='Helvetica Neue'
        style={styles.rangeSlider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    gap: 10,
  },
  sectionTitle: {
    paddingHorizontal: 8,
  },
  rangeSlider: {
    marginBottom: -25,
  },
});
