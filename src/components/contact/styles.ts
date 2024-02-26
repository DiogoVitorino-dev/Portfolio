import styled from 'styled-components/native';

import { QuantumText,  View } from '../shared';
import RadialGradient from '../shared/RadialGradient';


export const Container = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: transparent;
`;

export const Root = styled(RadialGradient).attrs(() => ({
  
  radius: '30%',
}))`
  padding: 24px;
`;

export const Title = styled(QuantumText).attrs(() => ({
  fontSize: 42,
}))`
  margin-bottom: 18px;
  text-align: center;
`;
