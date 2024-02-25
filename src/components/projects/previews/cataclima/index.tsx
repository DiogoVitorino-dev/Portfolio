import React, { useEffect } from 'react';
import { Linking, StyleSheet } from 'react-native';
import {
  Easing,
  WithTimingConfig,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Container, Filter, ImageSmartphone, ImageWeb, Open } from './style';

import Cloud1 from '@/assets/svgs/Cloud1';
import Colors from '@/constants/Colors';

const easingCloud: Pick<WithTimingConfig, 'easing'> = { easing: Easing.inOut(Easing.ease) };

interface CataclimaPreviewProps {
  linkPreview?: string;
}

export default function CataclimaPreview({ linkPreview }: CataclimaPreviewProps) {
  const topUpperCloud = useSharedValue(-500);
  const rightUpperCloud = useSharedValue(-500);
  const opacityUpperCloud = useSharedValue(0.2);

  const topLowerCloud = useSharedValue(-500);
  const rightLowerCloud = useSharedValue(-500);
  const opacityLowerCloud = useSharedValue(0.2);

  const opacityContainer = useSharedValue(1);

  const animatedUpperCloud = useAnimatedStyle(() => ({
    top: topUpperCloud.value,
    right: rightUpperCloud.value,
    opacity: opacityUpperCloud.value,
    transform: [{ scale: 1.2 }, { rotate: '180deg' }],
  }));

  const animatedLowerCloud = useAnimatedStyle(() => ({
    top: topLowerCloud.value,
    right: rightLowerCloud.value,
    opacity: opacityLowerCloud.value,
  }));

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

  const startAnimation = runOnUI(() => {
    'worklet';
    topUpperCloud.value = withSequence(
      withTiming(-150, { duration: 5000, ...easingCloud }),
      withRepeat(withTiming(-130, { duration: 6200, ...easingCloud }), -1, true),
    );

    rightUpperCloud.value = withSequence(
      withTiming(-100, { duration: 5000, ...easingCloud }),
      withRepeat(withTiming(-120, { duration: 6900, ...easingCloud }), -1, true),
    );

    opacityUpperCloud.value = withTiming(1, { duration: 5000 });

    topLowerCloud.value = withSequence(
      withTiming(-260, { duration: 5000, ...easingCloud }),
      withRepeat(withTiming(-130, { duration: 5700, ...easingCloud }), -1, true),
    );

    rightLowerCloud.value = withSequence(
      withTiming(-120, { duration: 5000, ...easingCloud }),
      withRepeat(withTiming(-120, { duration: 7200, ...easingCloud }), -1, true),
    );

    opacityLowerCloud.value = withTiming(1, { duration: 5000 });
  });

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Open onPressOut={handlePressOut} onHoverIn={handleHoverIn} onHoverOut={handleHoverOut}>
      <Container style={{ opacity: opacityContainer }}>
        <Cloud1
          color={Colors.cataClima.cloud[100]}
          stroke={Colors.shadow}
          strokeWidth={3}
          style={[styles.cloud, animatedUpperCloud]}
        />
        <Cloud1
          color={Colors.cataClima.cloud[75]}
          stroke={Colors.shadow}
          strokeWidth={3}
          style={[styles.cloud, animatedLowerCloud]}
        />
        <ImageSmartphone />
        <ImageWeb />
        <Filter />
      </Container>
    </Open>
  );
}

const styles = StyleSheet.create({
  cloud: {
    transform: [{ rotate: '180deg' }],
    position: 'absolute',
  },
});
