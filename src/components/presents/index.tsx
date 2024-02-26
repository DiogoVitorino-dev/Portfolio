import React from 'react';
import { useWindowDimensions } from 'react-native';

import {
  PresentsBackground,
  PresentsContainer,
  PresentsJobText,
  PresentsMainTextBegin,
  PresentsMainTextEnd,
  PresentsYearText,
} from './styles';

import Colors from '@/constants/Colors';

export default function Presents() {
  const { height } = useWindowDimensions();
  return (
    <PresentsBackground
      colors={[{ color: Colors.backgroundBlueLight }, Colors.background]}
      style={{ height }}>
      <PresentsContainer>
        <PresentsMainTextBegin>fol</PresentsMainTextBegin>
        <PresentsMainTextEnd>io</PresentsMainTextEnd>
        <PresentsJobText>mobile dev</PresentsJobText>
        <PresentsYearText>24</PresentsYearText>
      </PresentsContainer>
    </PresentsBackground>
  );
}
