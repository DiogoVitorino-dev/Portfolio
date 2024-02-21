import { Text as DefaultText, View as DefaultView, TextProps, ViewProps } from 'react-native';

import Colors from '@/constants/Colors';

export function Text({ style, ...others }: TextProps) {
  return <DefaultText {...others} style={[{ color: Colors.text }, style]} />;
}

export function View({ style, ...others }: ViewProps) {
  return <DefaultView {...others} style={[{ backgroundColor: Colors.background }, style]} />;
}
