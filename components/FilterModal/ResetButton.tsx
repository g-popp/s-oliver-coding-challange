import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const ResetButton = ({ onPress }: { onPress: () => void }) => {
  const { text, background } = useThemeColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        styles.resetButton,
        { borderColor: text, backgroundColor: background },
      ]}
    >
      <Text style={[DefaultStyles.text, styles.buttonText, { color: text }]}>
        Reset
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 2,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
  resetButton: {
    borderWidth: 1,
  },
});
