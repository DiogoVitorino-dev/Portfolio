import { Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import styled from 'styled-components/native';

import { ComfortaaText, View } from '@/components/shared';
import Colors from '@/constants/Colors';

export const Container = styled(View)`
  background-color: ${Colors.backdrop};
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
`;

export const ContainerShadow = styled(Shadow).attrs(() => ({
  distance: 20,
  containerStyle: {
    flex: 1,
  },
  sides: { end: true, bottom: true, start: false, top: false },
}))`
  height: 100%;
`;

export const DescriptionButtonShadow = styled(Shadow).attrs(() => ({
  paintInside: true,
  distance: 10,
  startColor: Colors.shadow,
}))``;

export const TitleText = styled(ComfortaaText).attrs(() => ({
  fontSize: 48,
  numberOfLines: 1,
  adjustsFontSizeToFit: true,
}))`
  font-weight: bold;
  margin: 24px 0;
  text-transform: capitalize;
  text-align: center;
`;

export const DescriptionText = styled(ComfortaaText).attrs(() => ({
  fontSize: 18,
}))`
  text-align: justify;
  margin: 8px 0;
`;

export const ContainerTags = styled(View)`
  background-color: transparent;
  justify-content: space-evenly;
  margin: 8px 0;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled(View)`
  padding: 6px 8px;
  margin: 8px;
  border-radius: 5px;
  background-color: ${Colors.primaryComplement};
`;

export const TagText = styled(ComfortaaText).attrs(() => ({
  fontSize: 12,
}))`
  font-weight: bold;
  color: ${Colors.backdrop};
`;

export const Button = styled(Pressable)`
  padding: 12px 16px;
  margin: 4px 8px;
  border-radius: 5px;
`;

export const ButtonText = styled(ComfortaaText).attrs(() => ({
  fontSize: 16,
}))`
  font-weight: bold;
  color: ${Colors.backdrop};
  text-transform: capitalize;
`;

export const ContainerButton = styled(View)`
  background-color: transparent;
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
