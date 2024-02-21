import React, { useCallback, useEffect, useState } from 'react';
import { ColorValue, OpaqueColorValue, StyleSheet, View, ViewStyle } from 'react-native';
import Svg, {
  Defs,
  RadialGradient as DefaultRadialGradient,
  Stop,
  Rect,
  NumberProp,
} from 'react-native-svg';

export interface RadialColor {
  color: ColorValue;
  offset?: NumberProp;
  opacity?: NumberProp;
}

export type RadialPosition = { x: NumberProp; y: NumberProp };

export type RadialPositionEdges = { start: RadialPosition; end: RadialPosition };

type RadialColorProp = (RadialColor | Exclude<ColorValue, OpaqueColorValue>)[];

type Position = Partial<RadialPosition & RadialPositionEdges>;

interface RadialGradientProps {
  /**
   * A list of colors that can receive `String` directly and/or `RadialColor`object for more options
   */
  colors: RadialColorProp;
  /**
   * Define a `radius` of the end circle of the radial gradient
   */
  radius?: NumberProp;
  /**
   * Circle position or `start` and `end` position of the initial and final circle of the radial gradient, respectively. Note: If `start` or `end` is passed it will replace `x` and `y`
   */
  position?: Position;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const getCenter = (position?: Position): RadialPositionEdges => {
  const defaultValue: RadialPosition = { x: '50%', y: '50%' };
  if (position) {
    const { start, end, x, y } = position;
    return {
      start: start || { x: x || defaultValue.x, y: y || defaultValue.y },
      end: end || { x: x || defaultValue.x, y: y || defaultValue.y },
    };
  }

  return { start: defaultValue, end: defaultValue };
};

export function RadialGradient({
  radius = '50%',
  children,
  colors,
  position,
  style,
}: RadialGradientProps) {
  const [{ start, end }] = useState<RadialPositionEdges>(getCenter(position));
  const [color, setColor] = useState<RadialColorProp>([]);

  useEffect(() => {
    if (Array.isArray(colors)) {
      if (colors.length > 1) {
        setColor(colors);
      } else {
        setColor([...colors, 'transparent']);
      }
    } else {
      setColor([colors, 'transparent']);
    }
  }, [colors]);

  const createStops = useCallback(() => {
    const colorLength = color.length;
    return color.map((value, index) => {
      let { color, offset, opacity }: RadialColor = { color: 'transparent' };

      if (typeof value === 'string' || typeof value === 'symbol') {
        color = value;
      } else {
        color = value.color;
      }

      switch (index) {
        case 0:
          offset = offset || '0%'; // First Color
          break;

        case colorLength - 1:
          offset = offset || '100%'; // Last Color
          break;

        default:
          // if not passed, distributes the value according to the index between 0 and 100
          offset = offset || `${(100 / (colorLength - 1)) * index}%`;
          break;
      }

      return <Stop offset={offset} stopColor={color} stopOpacity={opacity} key={`stop${index}`} />;
    });
  }, [color]);

  return (
    <View style={style}>
      <Svg style={styles.container}>
        <Defs>
          <DefaultRadialGradient
            id="radial"
            cx={start.x}
            cy={start.y}
            r={radius}
            fx={end.x}
            fy={end.y}>
            {createStops()}
          </DefaultRadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#radial)" />
      </Svg>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
