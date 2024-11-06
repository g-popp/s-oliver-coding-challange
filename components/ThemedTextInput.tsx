import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import { icons } from 'lucide-react-native';
import { TextInput, View, StyleSheet } from 'react-native';

type ThemedTextInputProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  iconName?: keyof typeof icons;
};

export const ThemedTextInput = ({
  value,
  onChangeText,
  placeholder,
  iconName,
}: ThemedTextInputProps) => {
  const { background, tabIconDefault, text } = useThemeColors();
  const LucideIcon = iconName ? icons[iconName] : null;

  return (
    <View style={DefaultStyles.textInputContainer}>
      {LucideIcon && <LucideIcon size={18} color={text} />}
      <TextInput
        style={[styles.textInput, { color: text }]}
        placeholder={placeholder}
        placeholderTextColor={tabIconDefault}
        value={value}
        onChangeText={onChangeText}
        clearButtonMode='while-editing'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
