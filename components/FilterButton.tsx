import { useThemeColors } from '@/hooks/useThemeColors';
import { SlidersHorizontal } from 'lucide-react-native';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const FilterButton = () => {
  const { text } = useThemeColors();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SlidersHorizontal size={18} color={text} />
        <Text style={{ ...styles.text, color: text }}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
  },
});
