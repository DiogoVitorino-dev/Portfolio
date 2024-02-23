import { DrawerHeaderProps } from '@react-navigation/drawer';
import { SharedValue } from 'react-native-reanimated';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { HeaderRoot, HeaderNav, HeaderContent, HeaderDivisor } from './styles';

export interface HeaderAnimation {
  contentOpacity?: SharedValue<number>;
  translateY?: SharedValue<number>;
  divisorTopOpacity?: SharedValue<number>;
  divisorBottomOpacity?: SharedValue<number>;
}

export interface CustomHeaderProps extends DrawerHeaderProps {
  windowWidth: number;
  anim?: HeaderAnimation;
}

export default function CustomHeader({ anim, windowWidth, navigation }: CustomHeaderProps) {
  return (
    <HeaderRoot>
      <HeaderContent style={{ transform: [{ translateY: anim?.translateY || 0 }] }}>
        <HeaderDivisor style={{ opacity: anim?.divisorTopOpacity }} />
        <HeaderNav style={{ opacity: anim?.contentOpacity }}>
          <HeaderLeft navigation={navigation} />
          <HeaderRight windowWidth={windowWidth} navigation={navigation} />
        </HeaderNav>
        <HeaderDivisor style={{ opacity: anim?.divisorBottomOpacity }} />
      </HeaderContent>
    </HeaderRoot>
  );
}
