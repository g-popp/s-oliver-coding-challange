import { useThemeColors } from '@/hooks/useThemeColors';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const ColorCircle = ({
  color,
  selected,
  selectedColor,
  onPress,
}: {
  color: string;
  selected: boolean;
  selectedColor: string;
  onPress: () => void;
}) => {
  const { tabIconDefault } = useThemeColors();
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View
        style={[
          styles.outerCircle,
          { borderColor: selected ? selectedColor : tabIconDefault },
        ]}
      >
        <View style={[styles.innerCircle, { backgroundColor: color }]} />
      </View>
    </TouchableOpacity>
  );
};

export default ColorCircle;

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2, // Small distance between outer and inner circles
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
});
