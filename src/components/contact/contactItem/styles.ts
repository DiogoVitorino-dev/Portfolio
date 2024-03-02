import { Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import styled from 'styled-components/native';

import { ComfortaaText } from '@/components/shared';
import Colors from '@/constants/Colors';

export interface ItemColor {
  color: 'primary' | 'primaryComplement';
}

export const Button = styled(Pressable).attrs<ItemColor>(() => ({}))`
  margin: 8px;
  padding: 8px;
  border-radius: 20px;
  min-width: 250px;
  min-height: 230px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return Colors.primary;

      case 'primaryComplement':
        return Colors.primaryComplement;
    }
  }};
`;

export const Item = styled(Shadow).attrs(() => ({
  paintInside: true,
}))`
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextValue = styled(ComfortaaText).attrs(() => ({
  fontSize: 14,
  adjustsFontSizeToFit: true,
  numberOfLines: 2,
  allowFontScaling: true,
}))`
  color: ${Colors.background};
  margin: 10px 0;
  font-weight: bold;
`;
