import styled from 'styled-components/native';

import { QuantumText, View } from '../shared';

import Colors from '@/constants/Colors';

export const Root = styled(View)`
  justify-content: center;
  flex-direction: column;
  padding: 0 28px;
`;

export const Title = styled(QuantumText).attrs(() => ({
  fontSize: 58,
}))`
  margin: 48px 0;
  text-align: center;
`;

export const Project = styled(View)`
  background-color: ${Colors.backdrop};
  border-radius: 20px;
  margin: 48px 0;
  overflow: hidden;
  flex-direction: row;
`;
