import React from 'react';

import { CustomHeaderProps } from '.';
import HeaderPressable from './HeaderPressable';
import { HeaderNavContainer, HeaderText } from './styles';

import { SectionsNames } from '@/constants/SectionsNames';

interface HeaderLeftProps extends Pick<CustomHeaderProps, 'navigation'> {}

export default function HeaderLeft({ navigation }: HeaderLeftProps) {
  const handleOnPressItem = (section: SectionsNames) => {
    navigation.navigate('index', { section });
  };
  return (
    <HeaderNavContainer>
      <HeaderPressable onPress={() => handleOnPressItem('presents')}>
        {({ color }) => <HeaderText style={{ color }}>DV</HeaderText>}
      </HeaderPressable>
    </HeaderNavContainer>
  );
}
