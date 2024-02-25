import { Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import styled from 'styled-components/native';

import { ComfortaaText, View } from '@/components/shared';
import Colors from '@/constants/Colors';

export const Container = styled(View)`
  background-color: ${Colors.backdrop};
  flex: 1;
  max-width: 350px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
`;

export const ContainerShadow = styled(Shadow).attrs(() => ({
  distance: 20,
  sides: { end: true, bottom: false, start: false, top: false },
}))`
  flex: 1;
`;

export const DescriptionButtonShadow = styled(Shadow).attrs(() => ({
  paintInside: true,
  distance: 10,
  startColor: Colors.shadow,
}))``;

export const TitleText = styled(ComfortaaText)`
  font-size: 42px;
  font-weight: bold;
  margin: 8px 0;
  text-transform: capitalize;
`;

export const DescriptionText = styled(ComfortaaText)`
  font-size: 16px;
  padding: 0 6px;
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

export const TagText = styled(ComfortaaText)`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.backdrop};
`;

export const Button = styled(Pressable)`
  padding: 12px 16px;
  margin: 4px;
  border-radius: 5px;
`;

export const ButtonText = styled(ComfortaaText)`
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.backdrop};
  text-transform: capitalize;
`;

export const ContainerButton = styled(View)`
  background-color: transparent;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;
