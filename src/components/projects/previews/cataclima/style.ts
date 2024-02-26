import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { View } from '@/components/shared';
import Colors from '@/constants/Colors';

const smartphoneSrc = require('@/assets/images/cataclimaSmartphone.png');
const webSrc = require('@/assets/images/cataclimaWeb.png');

export const Container = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.cataClima.sky};
`;

export const Open = styled(Pressable)`
  flex: 1.5;
  z-index: -100;
  flex-basis: 270px;
`;

export const ImageWeb = styled(Animated.Image).attrs(() => ({
  source: webSrc,
  resizeMode: 'contain',
}))`
  width: 70%;
`;

export const ImageSmartphone = styled(Animated.Image).attrs(() => ({
  source: smartphoneSrc,
  resizeMode: 'contain',
}))`
  width: 20%;
`;

export const Filter = styled(View)`
  background-color: ${Colors.cataClima.cloud[50]};
  opacity: 0.2;
  position: absolute;
`;
