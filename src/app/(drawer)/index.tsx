import { useFocusEffect, useNavigation } from 'expo-router';
import { Platform, ScrollView } from 'react-native';

import { HEADER_HEIGHT } from '@/components/customHeader/styles';
import Presents from '@/components/presents';
import { View } from '@/components/shared';
import Colors from '@/constants/Colors';
import useCustomDrawerHeader from '@/hooks/customHeader/useCustomDrawerHeader';

export default function Index() {
  const nav = useNavigation();
  const { HeaderOptions, onScroll } = useCustomDrawerHeader({ position: 'bottom' });

  useFocusEffect(() => {
    nav.setOptions({ ...HeaderOptions });
  });
  return (
    <ScrollView
      style={{ backgroundColor: Colors.background, marginTop: -HEADER_HEIGHT }}
      showsVerticalScrollIndicator={Platform.OS === 'web'}
      onScroll={onScroll}
      scrollEventThrottle={1}>
      <Presents />
      <View style={{ height: 2000 }} />
    </ScrollView>
  );
}
