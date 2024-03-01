import React, { useCallback, useState } from 'react';
import { LayoutChangeEvent, Linking, StyleSheet } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';

import RepeatedText from './RepeatedText';
import { Container, ContainerGradient, ImageSmartphone, ImageWeb, Open } from './style';

import Colors from '@/constants/Colors';

interface CataclimaPreviewProps {
  linkPreview?: string;
}

export default function CataclimaPreview({ linkPreview }: CataclimaPreviewProps) {
  const opacityContainer = useSharedValue(1);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const handleHoverIn = () => {
    opacityContainer.value = withTiming(0.5, { duration: 500 });
  };

  const handleHoverOut = () => {
    opacityContainer.value = withTiming(1, { duration: 500 });
  };

  const handlePressOut = () => {
    if (linkPreview) {
      Linking.openURL(linkPreview);
    }
  };

  const getContainerSize = (event: LayoutChangeEvent) => setSize({ ...event.nativeEvent.layout });

  const createRepeatedTexts = useCallback(() => {
    const line = 36 + 40;
    const overflow = 2;
    const texts = Math.floor(size.height / line) + overflow * 2;

    const views = new Array(texts).fill(0);

    return views.map((v, index) => (
      <RepeatedText
        numberOfLines={1}
        ellipsizeMode="clip"
        fontSize={36}
        copies={3}
        style={[
          styles.text,
          {
            transform: [
              { translateY: line * index - line * overflow },
              { rotate: '-25deg' },
              { scale: 1.2 },
            ],
          },
        ]}
        key={`text${index}`}>
        CREATE READ UPDATE DELETE{' '}
      </RepeatedText>
    ));
  }, [size]);

  return (
    <Open onPressOut={handlePressOut} onHoverIn={handleHoverIn} onHoverOut={handleHoverOut}>
      <Container style={{ opacity: opacityContainer }} onLayout={getContainerSize}>
        <ContainerGradient colors={[Colors.appRest.gradient.start, Colors.appRest.gradient.end]}>
          {createRepeatedTexts()}
        </ContainerGradient>
        <ImageSmartphone />
        <ImageWeb />
      </Container>
    </Open>
  );
}

const styles = StyleSheet.create({
  text: {
    //@ts-expect-error
    textOverflow: 'clip',
    position: 'absolute',
  },
});
