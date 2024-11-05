import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tab() {
  const { background, text } = useThemeColors();

  return (
    <SafeAreaView style={[DefaultStyles.safeArea, { backgroundColor: background }]}>
      <View style={DefaultStyles.container}>
        <Text style={[DefaultStyles.text, { color: text }]}>Wishlist</Text>
      </View>
    </SafeAreaView>
  );
}
