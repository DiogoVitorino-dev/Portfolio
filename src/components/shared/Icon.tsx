import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

interface IconProps extends React.ComponentProps<typeof MaterialIcons> {}

export function Icon(props: IconProps) {
  return <MaterialIcons {...props} />;
}
