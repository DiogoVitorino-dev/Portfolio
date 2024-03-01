import { PixelRatio, TextProps } from 'react-native';
import styled from 'styled-components/native';

import Colors from '@/constants/Colors';

type StaticWeight = 'normal' | 'bold';

export interface CustomTextProps extends TextProps {
  fontWeight?: StaticWeight;
  secondary?: boolean;
  fontSize?: number;
}

const scale = PixelRatio.get();

export const Text = styled.Text.attrs<CustomTextProps>(() => ({
  allowFontScaling: true,
  adjustsFontSizeToFit: true,
}))`
  color: ${(props) => (props.secondary ? Colors.textSecondary : Colors.text)};
  font-size: ${(props) => (props.fontSize ? props.fontSize * scale : 26 * scale)}px;
  font-weight: ${(props) => (props.fontWeight === 'bold' ? 'bold' : 'normal')};
`;

export const ComfortaaText = styled(Text)`
  font-family: ${(props) => (props.fontWeight === 'bold' ? 'ComfortaaBold' : 'ComfortaaRegular')};
`;

export const HumaneText = styled(Text)`
  font-family: ${(props) => (props.fontWeight === 'bold' ? 'HumaneBold' : 'HumaneRegular')};
`;

export const QuantumText = styled(Text)`
  font-family: Quantum;
`;
