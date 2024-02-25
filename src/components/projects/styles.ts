import styled from 'styled-components/native';

import { View } from '../shared';

import Colors from '@/constants/Colors';

export const Root = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const Container = styled(View)`
  background-color: ${Colors.backdrop};
  border-radius: 20px;
  overflow: hidden;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: row;
  width: 90%;
  max-width: 1280px;
  max-height: 720px;
  height: 80%;
`;
