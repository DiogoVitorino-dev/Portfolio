import React from 'react';

import { CustomHeaderProps } from '.';
import HeaderPressable from './HeaderPressable';
import { HeaderNavContainer, HeaderText } from './styles';

interface HeaderLeftProps extends Pick<CustomHeaderProps, 'navigation'> {}

export default function HeaderLeft({ navigation }: HeaderLeftProps) {
  return (
    <HeaderNavContainer>
      <HeaderPressable onPressOut={() => navigation.navigate('index')}>
        {({ color }) => <HeaderText style={{ color }}>DV</HeaderText>}
      </HeaderPressable>
    </HeaderNavContainer>
  );
}
