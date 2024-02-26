import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

export type IconProps = React.ComponentProps<typeof FontAwesome>;
export type IconNames = keyof typeof FontAwesome.glyphMap;

export function Icon(props: IconProps) {
  return <FontAwesome {...props} />;
}
