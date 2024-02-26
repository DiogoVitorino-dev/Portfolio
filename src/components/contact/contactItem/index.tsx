import React from 'react';
import { ColorValue, Linking } from 'react-native';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import { Item, ItemColor, TextValue, Button } from './styles';

import { Icon, IconNames } from '@/components/shared';
import Colors from '@/constants/Colors';

interface ContactItemProps extends ItemColor {
  text?: string;
  link?: string;
  icon: IconNames;
  iconSize?: number;
  iconColor?: ColorValue;
}

export default function ContactItem({
  text,
  link,
  color,
  icon,
  iconColor,
  iconSize,
}: ContactItemProps) {
  const AnimatedButton = Animated.createAnimatedComponent(Button);
  const scale = useSharedValue(1);

  const handleHoverIn = () => {
    'worklet';
    scale.value = withTiming(1.1, { duration: 200, easing: Easing.out(Easing.exp) });
  };

  const handleHoverOut = () => {
    'worklet';
    scale.value = withTiming(1, { duration: 200, easing: Easing.out(Easing.exp) });
  };

  const handlePressOut = () => {
    if (link) {
      Linking.openURL(link);
    }
  };
  return (
    <Item startColor={Colors[color] + '07'} endColor={Colors[color] + '00'}>
      <AnimatedButton
        color={color}
        style={{ scale }}
        onPressOut={handlePressOut}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}>
        <Icon name={icon} color={iconColor || Colors.background} size={iconSize || 30} />
        {text ? <TextValue selectable>{text}</TextValue> : null}
      </AnimatedButton>
    </Item>
  );
}
