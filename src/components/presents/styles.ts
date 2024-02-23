import styled from 'styled-components/native';

import { HumaneText, QuantumText, RadialGradient, View } from '../shared';

import Colors from '@/constants/Colors';

export const PresentsMainTextBegin = styled(HumaneText)`
  font-size: 480px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${Colors.primary};
`;

export const PresentsMainTextEnd = styled(HumaneText)`
  font-size: 420px;
  letter-spacing: 5px;
  text-transform: uppercase;
  transform: translateX(-15px) translateY(4px);
`;

export const PresentsJobText = styled(QuantumText)`
  width: 105px;
  font-size: 17px;
  text-transform: uppercase;
  position: absolute;
  letter-spacing: 4px;
  right: 20%;
  bottom: 20%;
`;

export const PresentsYearText = styled(QuantumText)`
  font-size: 106px;
  width: 80px;
  text-align: center;
  transform: translateX(-25px) translateY(20px);
`;

export const PresentsContainer = styled(View)`
  background-color: transparent;
  margin: auto;
  flex-direction: row;
`;

export const PresentsBackground = styled(RadialGradient)``;
