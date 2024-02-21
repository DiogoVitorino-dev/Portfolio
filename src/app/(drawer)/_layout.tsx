import { Stack } from 'expo-router';
import React from 'react';

export default function DrawerLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
