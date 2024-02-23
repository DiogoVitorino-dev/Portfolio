import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { QuantumText, View, ComfortaaText, DivisorGradient } from '@/components/shared';
import Colors from '@/constants/Colors';

export const HEADER_HEIGHT = 65;

export const HeaderRoot = styled(Animated.View)`
  width: 100%;
  background-color: transparent;
  height: ${HEADER_HEIGHT};
`;

export const HeaderContent = styled(HeaderRoot)`
  background-color: ${Colors.backdrop};
  position: absolute;
`;

export const HeaderNav = styled(Animated.View)`
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavContainer = styled(View)`
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  margin: 0 16px;
  justify-content: space-around;
`;

export const HeaderText = styled(QuantumText)`
  font-size: 30px;
`;

export const HeaderNavText = styled(ComfortaaText)`
  font-size: 24px;
  margin: 0 8px;
`;

export const HEADER_DIVISOR_HEIGHT = 3;
export const HeaderDivisor = styled(DivisorGradient)`
  height: ${HEADER_DIVISOR_HEIGHT};
`;
