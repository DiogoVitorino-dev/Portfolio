import styled from 'styled-components/native';

import Colors from '@/constants/Colors';

interface CustomPropView {
  transparent?: boolean;
}

export const View = styled.View<CustomPropView>`
  background-color: ${(props) => (props.transparent ? 'transparent' : Colors.background)};
`;
