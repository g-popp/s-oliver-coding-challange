import { useThemeColors } from '@/hooks/useThemeColors';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ColorCircle from '../ProductCard/ColorCircle';
import { DefaultStyles } from '@/constants/DefaultStyles';

export const ColorSection = ({
  colors,
  selectedColors,
  toggleColor,
}: {
  colors: Color[] | undefined;
  selectedColors: string[];
  toggleColor: (color: string) => void;
}) => {
  const { text } = useThemeColors();
  return (
    <View style={styles.section}>
      <Text style={[DefaultStyles.text, styles.sectionTitle, { color: text }]}>
        COLORS
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.colorContainer}
      >
        {colors?.map((color, index) => (
          <ColorCircle
            key={index}
            color={color.value}
            selected={selectedColors.includes(color.value)}
            selectedColor={text}
            onPress={() => toggleColor(color.value)}
            circleRadius={32}
          />
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
  colorContainer: {
    gap: 10,
  },
});
