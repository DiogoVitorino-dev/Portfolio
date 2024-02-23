import React from 'react';
import { PressableProps, Pressable, PressableStateCallbackType } from 'react-native';
import { interpolateColor } from 'react-native-reanimated';

import Colors from '@/constants/Colors';

type HeaderPressableCallbackType = { color: string } & PressableStateCallbackType;
type HeaderPressableCallback = (props: HeaderPressableCallbackType) => React.ReactNode;

interface HeaderPressableProps extends Omit<PressableProps, 'children'> {
  children: React.ReactNode | HeaderPressableCallback;
}

const pressableColors = [Colors.text, Colors.compose];

export default function HeaderPressable({
  onPressIn,
  children,
  onPressOut,
  onHoverIn,
  onHoverOut,
  ...others
}: HeaderPressableProps) {
  let color = pressableColors[0];

  const handlerColors = (state: 'none' | 'hovered' | 'pressed') => {
    switch (state) {
      case 'pressed':
        color = interpolateColor(1, [0, 1], pressableColors);
        break;

      case 'hovered':
        color = interpolateColor(0.5, [0, 1], pressableColors);
        break;

      default:
        color = interpolateColor(0, [0, 1], pressableColors);
        break;
    }
  };

  const handleChildren = (props: PressableStateCallbackType) => {
    if (typeof children === 'function') {
      return children({ color, ...props });
    }
    return children;
  };

  return (
    <Pressable
      onPressOut={(event) => {
        if (onPressOut) onPressOut(event);
        handlerColors('none');
      }}
      onPressIn={(event) => {
        if (onPressIn) onPressIn(event);
        handlerColors('pressed');
      }}
      onHoverIn={(event) => {
        if (onHoverIn) onHoverIn(event);
        handlerColors('hovered');
      }}
      onHoverOut={(event) => {
        if (onHoverOut) onHoverOut(event);
        handlerColors('none');
      }}
      {...others}>
      {handleChildren}
    </Pressable>
  );
}
