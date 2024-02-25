import styled from 'styled-components/native';

import Colors from '@/constants/Colors';

type StaticWeight = 'normal' | 'bold';

interface TextTags {
  fontWeight?: StaticWeight;
  secondary?: boolean;
}

export const Text = styled.Text.attrs<TextTags>(() => ({
  allowFontScaling: true,
  maxFontSizeMultiplier: 1.2,
}))`
  color: ${(props) => (props.secondary ? Colors.textSecondary : Colors.text)};
  font-size: 26px;
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
