import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'Helvetica Neue': require('../assets/fonts/HelveticaNeueMedium.otf'),
    'Helvetica Neue Bold': require('../assets/fonts/HelveticaNeueBold.otf'),
    'Helvetica Neue Black': require('../assets/fonts/HelveticaNeueBlack.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
}
