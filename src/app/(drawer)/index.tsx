import { useFocusEffect, useNavigation } from 'expo-router';
import { Platform, ScrollView } from 'react-native';

import Contacts from '@/components/contact';
import { HEADER_HEIGHT } from '@/components/customHeader/styles';
import Presents from '@/components/presents';
import Projects from '@/components/projects';
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
      <Projects />
      <Contacts
        email={process.env.EXPO_PUBLIC_EMAIL}
        linkGithub={process.env.EXPO_PUBLIC_GITHUB}
        linkLinkedIn={process.env.EXPO_PUBLIC_LINKEDIN}
        number={process.env.EXPO_PUBLIC_NUMBER}
      />
    </ScrollView>
  );
}
