import { useFocusEffect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { LayoutChangeEvent, ScrollView } from 'react-native';

import Contacts from '@/components/contact';
import { HEADER_HEIGHT } from '@/components/customHeader/styles';
import Presents from '@/components/presents';
import Projects from '@/components/projects';
import Colors from '@/constants/Colors';
import { SectionsNames } from '@/constants/SectionsNames';
import useCustomDrawerHeader from '@/hooks/customHeader/useCustomDrawerHeader';

export interface SearchParams {
  section?: SectionsNames;
}

type SectionsPosition = Record<SectionsNames, number>;

const initialSectionsPosition: SectionsPosition = {
  contacts: 0,
  presents: 0,
  projects: 0,
};

export default function Index() {
  const nav = useNavigation();
  const params: SearchParams = useLocalSearchParams();
  const { HeaderOptions, onScroll } = useCustomDrawerHeader({ position: 'bottom' });
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [sectionPos, setSectionPos] = useState<SectionsPosition>(initialSectionsPosition);

  useFocusEffect(() => {
    nav.setOptions({ ...HeaderOptions });
  });

  useEffect(() => {
    const { section } = params;
    if (section) {
      scrollToSection(section);
    }
  }, [params]);

  const scrollToSection = (section: SectionsNames) => {
    if (sectionPos) {
      scrollTo(sectionPos[section]);
    }
  };

  const scrollTo = (offset?: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(offset);
    }
  };

  const getSectionsPositions = (from: SectionsNames, ev: LayoutChangeEvent) => {
    const { y } = ev.nativeEvent.layout;

    setSectionPos((prev) => {
      prev[from] = y;
      return prev;
    });
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background, marginTop: -HEADER_HEIGHT }}
      onScroll={onScroll}
      ref={scrollViewRef}
      scrollEventThrottle={1}>
      <Presents onLayout={(ev) => getSectionsPositions('presents', ev)} />
      <Projects onLayout={(ev) => getSectionsPositions('projects', ev)} />
      <Contacts
        onLayout={(ev) => getSectionsPositions('contacts', ev)}
        email={process.env.EXPO_PUBLIC_EMAIL}
        linkGithub={process.env.EXPO_PUBLIC_GITHUB}
        linkLinkedIn={process.env.EXPO_PUBLIC_LINKEDIN}
        number={process.env.EXPO_PUBLIC_NUMBER}
      />
    </ScrollView>
  );
}
