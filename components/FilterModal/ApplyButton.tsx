import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const ApplyButton = () => {
  const { text, background } = useThemeColors();
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: text }]}>
      <Text
        style={[DefaultStyles.text, styles.buttonText, { color: background }]}
      >
        Apply
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
});
