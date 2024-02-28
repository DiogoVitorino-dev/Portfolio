import styled from 'styled-components/native';

import { QuantumText, View } from '../shared';

import Colors from '@/constants/Colors';

export const Root = styled(View)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled(QuantumText).attrs(() => ({
  fontSize: 42,
}))`
  margin: 84px 0;
  text-align: center;
`;

export const Project = styled(View)`
  background-color: ${Colors.backdrop};
  border-radius: 20px;
  overflow: hidden;
  flex-direction: row;
  width: 90%;
  max-width: 1280px;
  max-height: 720px;
  min-width: 540px;
  height: 80%;
`;
