import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import { TextInput, View } from 'react-native';

type ThemedTextInputProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

export const ThemedTextInput = ({
  value,
  onChangeText,
  placeholder,
}: ThemedTextInputProps) => {
  const { background, tabIconDefault, text } = useThemeColors();

  return (
    <View>
      <TextInput
        style={{ ...DefaultStyles.textInput, borderColor: text, color: text }}
        placeholder={placeholder}
        placeholderTextColor={tabIconDefault}
        value={value}
        onChangeText={onChangeText}
        clearButtonMode='while-editing'
      />
    </View>
  );
};
