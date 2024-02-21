import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(drawer)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ComfortaaRegular: require('@/assets/fonts/Comfortaa-Regular.ttf'),
    ComfortaaBold: require('@/assets/fonts/Comfortaa-Bold.ttf'),
    HumaneRegular: require('@/assets/fonts/Humane-Regular.otf'),
    HumaneBold: require('@/assets/fonts/Humane-Bold.otf'),
    Quantum: require('@/assets/fonts/Quantum.otf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
