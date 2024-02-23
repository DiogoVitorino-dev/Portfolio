import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import React from 'react';
import { DimensionValue } from 'react-native';
import Animated from 'react-native-reanimated';

import Colors from '@/constants/Colors';
import { AnimatedViewStyle } from '@/constants/CommonTypes';

type AnimatedLinearGradientProps = Omit<Partial<LinearGradientProps>, 'style'>;

interface DivisorGradientProps extends AnimatedLinearGradientProps {
  width?: DimensionValue;
  height?: DimensionValue;
  style?: AnimatedViewStyle;
}

export function DivisorGradient({ colors, start, end, style, ...others }: DivisorGradientProps) {
  return (
    <Animated.View style={[{ backgroundColor: 'transparent', flex: 1 }, style]}>
      <LinearGradient
        {...others}
        start={start ? start : { x: 0, y: 0.5 }}
        end={end ? end : { x: 1, y: 0.5 }}
        style={[{ width: '100%', height: 3 }]}
        colors={colors ? colors : [Colors.primary, Colors.compose]}
      />
    </Animated.View>
  );
}
