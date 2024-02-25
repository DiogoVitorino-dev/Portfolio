import { useFocusEffect, useNavigation } from 'expo-router';
import { Platform, ScrollView } from 'react-native';

import { HEADER_HEIGHT } from '@/components/customHeader/styles';
import Presents from '@/components/presents';
import Project from '@/components/projects';
import CataclimaPreview from '@/components/projects/previews/cataclima';
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
      <Project
        name="Cataclima"
        description="Aplicativo Mobile desenvolvido em React-native com Expo, que utiliza a sua localização para fornecer a previsão do tempo na sua cidade. ☔"
        linkGithub={process.env.EXPO_PUBLIC_CATACLIMA_GITHUB}
        linkPreview={process.env.EXPO_PUBLIC_CATACLIMA_PREVIEW}
        tags={['Expo', 'React Native', 'Async storage', 'Axios', 'Redux', 'Figma']}>
        <CataclimaPreview linkPreview={process.env.EXPO_PUBLIC_CATACLIMA_GITHUB} />
      </Project>
      <View style={{ height: 2000 }} />
    </ScrollView>
  );
}
