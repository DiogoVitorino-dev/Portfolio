import React from 'react';

import { CustomHeaderProps } from '.';
import HeaderPressable from './HeaderPressable';
import { HeaderNavContainer, HeaderNavText } from './styles';
import { Icon } from '../shared';

import { Breakpoints } from '@/constants/Breakpoints';

interface HeaderRightProps extends Pick<CustomHeaderProps, 'navigation' | 'windowWidth'> {}

export default function HeaderRight({ windowWidth, navigation }: HeaderRightProps) {
  const handleOnPressDrawer = () => {
    navigation.toggleDrawer();
  };

  const handleOnPressItem = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <HeaderNavContainer>
      {windowWidth <= Breakpoints.header ? (
        <HeaderPressable onPressOut={handleOnPressDrawer}>
          {({ color }) => <Icon name="menu" size={32} color={color} />}
        </HeaderPressable>
      ) : (
        <>
          <HeaderPressable onPressOut={() => handleOnPressItem('index')}>
            {({ color }) => <HeaderNavText style={{ color }}>Projetos</HeaderNavText>}
          </HeaderPressable>

          <HeaderPressable onPressOut={() => handleOnPressItem('index')}>
            {({ color }) => <HeaderNavText style={{ color }}>Contatos</HeaderNavText>}
          </HeaderPressable>
        </>
      )}
    </HeaderNavContainer>
  );
}
