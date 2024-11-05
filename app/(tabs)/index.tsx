import { DefaultStyles } from '@/constants/DefaultStyles';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tab() {
  return (
    <SafeAreaView style={DefaultStyles.safeArea}>
      <View style={DefaultStyles.container}>
        <Text style={DefaultStyles.text}>Explore</Text>
      </View>
    </SafeAreaView>
  );
}
