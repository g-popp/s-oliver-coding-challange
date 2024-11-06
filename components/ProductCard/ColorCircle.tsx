import { useThemeColors } from '@/hooks/useThemeColors';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const ColorCircle = ({
  color,
  selected,
  selectedColor,
  onPress,
  circleRadius = 15,
}: {
  color: string;
  selected: boolean;
  selectedColor: string;
  onPress: () => void;
  circleRadius?: number;
}) => {
  const { background } = useThemeColors();
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View
        style={[
          styles.outerCircle,
          { borderColor: selected ? selectedColor : background },
          {
            width: circleRadius ? circleRadius + 7 : 20,
            height: circleRadius ? circleRadius + 7 : 20,
          },
        ]}
      >
        <View
          style={[
            styles.innerCircle,
            {
              backgroundColor: color,
              width: circleRadius ?? 15,
              height: circleRadius ?? 15,
            },
          ]}
        />
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
    borderRadius: 50,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  innerCircle: {
    borderRadius: 50,
  },
});
