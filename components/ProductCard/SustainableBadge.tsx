import { StyleSheet, Text, View } from 'react-native';

export const SustainableBadge = () => (
  <View style={styles.sustainableBadge}>
    <Text style={styles.text}>NACHHALTIG</Text>
  </View>
);

const styles = StyleSheet.create({
  sustainableBadge: {
    backgroundColor: 'darkgreen',
    paddingHorizontal: 2,
    paddingVertical: 3,
    position: 'absolute',
    left: 0,
    bottom: 110,
    zIndex: 10,
  },
  text: { fontFamily: 'Helvetica Neue', fontSize: 12, color: 'white' },
});
