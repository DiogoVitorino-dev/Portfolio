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
      style={{ height }}
      colors={[{ color: Colors.backgroundBlueLight }, Colors.background]}
      position={{ start: { x: '40%', y: '50%' }, end: { x: '40%', y: '50%' } }}>
        
      <PresentsContainer>
        <PresentsMainTextBegin>fol</PresentsMainTextBegin>
        <PresentsMainTextEnd>io</PresentsMainTextEnd>
        <PresentsJobText>mobile dev</PresentsJobText>
        <PresentsYearText>24</PresentsYearText>
      </PresentsContainer>
    </PresentsBackground>
  );
}
