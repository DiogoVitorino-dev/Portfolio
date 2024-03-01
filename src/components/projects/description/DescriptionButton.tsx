import React from 'react';
import { ColorValue, GestureResponderEvent, MouseEvent } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { Button, ButtonText } from './styles';

interface DescriptionButtonProps extends React.ComponentProps<typeof Button> {
  title: string;
  titleColor?: ColorValue;
}

export default function DescriptionButton({
  title,
  titleColor,
  style,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
  ...props
}: DescriptionButtonProps) {
  const AnimatedButton = Animated.createAnimatedComponent(Button);
  const padding = useSharedValue(12);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    paddingLeft: padding.value,
    paddingRight: padding.value,
    transform: [{ scale: scale.value }],
  }));

  const handleHoverIn = (event: MouseEvent) => {
    scale.value = withTiming(1.1, { duration: 200, easing: Easing.out(Easing.exp) });
    padding.value = withDelay(
      200,
      withTiming(20, { duration: 200, easing: Easing.out(Easing.exp) }),
    );
    if (onHoverIn) {
      onHoverIn(event);
    }
  };

  const handleHoverOut = (event: MouseEvent) => {
    scale.value = withDelay(200, withTiming(1, { duration: 200, easing: Easing.out(Easing.ease) }));
    padding.value = withTiming(12, { duration: 200, easing: Easing.out(Easing.ease) });

    if (onHoverOut) {
      onHoverOut(event);
    }
  };

  const handlePressIn = (event: GestureResponderEvent) => {
    scale.value = withTiming(0.99, { duration: 200, easing: Easing.out(Easing.exp) });
    if (onPressIn) {
      onPressIn(event);
    }
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    scale.value = withTiming(1, { duration: 200, easing: Easing.out(Easing.exp) });
    if (onPressOut) {
      onPressOut(event);
    }
  };
  return (
    <AnimatedButton
      {...props}
      style={[animatedStyle, style]}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <ButtonText style={{ color: titleColor }}>{title}</ButtonText>
    </AnimatedButton>
  );
}
