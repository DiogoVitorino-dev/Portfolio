import styled from 'styled-components/native';

import { HumaneText, QuantumText, View } from '../shared';
import RadialGradient from '../shared/RadialGradient';

import Colors from '@/constants/Colors';

export const PresentsMainTextBegin = styled(HumaneText).attrs(() => ({
  fontSize: 480,
  numberOfLines: 1,
}))`
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${Colors.primary};
`;

export const PresentsMainTextEnd = styled(HumaneText).attrs(() => ({
  fontSize: 420,
  numberOfLines: 1,
}))`
  letter-spacing: 5px;
  text-transform: uppercase;
  transform: translateX(-15px) translateY(4px);
`;

export const PresentsJobText = styled(QuantumText).attrs(() => ({
  fontSize: 17,
  numberOfLines: 2,
}))`
  width: 105px;
  text-transform: uppercase;
  position: absolute;
  letter-spacing: 4px;
  right: 20%;
  bottom: 20%;
`;

export const PresentsYearText = styled(QuantumText).attrs(() => ({
  fontSize: 106,
  numberOfLines: 2,
}))`
  width: 80px;
  text-align: center;
  transform: translateX(-25px) translateY(20px);
`;

export const PresentsContainer = styled(View)`
  background-color: transparent;
  margin: auto;
  flex-direction: row;
  padding-right: -10px;
`;

export const PresentsBackground = styled(RadialGradient).attrs(() => ({
  position: { start: { x: '40%', y: '50%' }, end: { x: '40%', y: '50%' } },
}))``;
