import { TextProps } from 'react-native';

import { Text } from './Themed';

interface StaticFontWeight {
  fontWeight?: 'regular' | 'bold';
}

export function ComfortaaText({ style, fontWeight, ...others }: TextProps & StaticFontWeight) {
  const fontFamily = fontWeight === 'bold' ? 'ComfortaaBold' : 'ComfortaaRegular';
  return <Text {...others} style={[style, { fontFamily }]} />;
}

export function HumaneText({ style, fontWeight, ...others }: TextProps & StaticFontWeight) {
  const fontFamily = fontWeight === 'bold' ? 'HumaneBold' : 'HumaneRegular';
  return <Text {...others} style={[style, { fontFamily }]} />;
}

export function QuantumText({ style, ...others }: TextProps) {
  return <Text {...others} style={[style, { fontFamily: 'Quantum' }]} />;
}
