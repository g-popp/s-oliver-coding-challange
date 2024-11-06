import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const BrandSection = ({
  brands,
  selectedBrands,
  toggleBrand,
}: {
  brands: string[] | undefined;
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
}) => {
  const { text, background } = useThemeColors();
  return (
    <View style={styles.section}>
      <Text style={[DefaultStyles.text, styles.sectionTitle, { color: text }]}>
        BRANDS
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {brands?.map((brand, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleBrand(brand)}
            style={[
              styles.brandButton,
              {
                borderColor: text,
                backgroundColor: selectedBrands.includes(brand)
                  ? text
                  : background,
              },
            ]}
          >
            <Text
              style={[
                DefaultStyles.text,
                {
                  color: selectedBrands.includes(brand) ? background : text,
                },
              ]}
            >
              {brand}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  brandButton: {
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
});
