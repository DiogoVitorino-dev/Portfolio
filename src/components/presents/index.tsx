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

type PresentsProps = Pick<React.ComponentProps<typeof PresentsBackground>, 'onLayout'>;

export default function Presents({ onLayout }: PresentsProps) {
  const { height } = useWindowDimensions();
  return (
    <PresentsBackground
      onLayout={onLayout}
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
