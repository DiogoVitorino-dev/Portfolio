import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import Colors from '@/constants/Colors';

const smartphoneSrc = require('@/assets/images/appRestSmartphone.png');
const webSrc = require('@/assets/images/appRestWeb.png');

export const Container = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-height: 100%;
  background-color: ${Colors.backdrop};
`;

export const Open = styled(Pressable)`
  flex: 2;
  z-index: -100;
  flex-basis: 270px;
`;

export const ImageWeb = styled(Animated.Image).attrs(() => ({
  source: webSrc,
  resizeMode: 'contain',
}))`
  max-width: 70%;
`;

export const ImageSmartphone = styled(Animated.Image).attrs(() => ({
  source: smartphoneSrc,
  resizeMode: 'contain',
}))`
  max-width: 20%;
`;

export const ContainerGradient = styled(LinearGradient).attrs(() => ({
  start: { x: 0.4, y: 0 },
  end: { x: 0.6, y: 1 },
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;
