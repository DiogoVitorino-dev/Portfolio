import React from 'react';
import { useWindowDimensions } from 'react-native';

import ProjectDescription, { ProjectDescriptionProps } from './description';
import { Container, Root } from './styles';

interface ProjectProps extends ProjectDescriptionProps {
  children?: React.ReactNode;
}

export default function Project({ children, ...props }: ProjectProps) {
  const { height, width } = useWindowDimensions();
  return (
    <Root style={{ height, width }}>
      <Container>
        <ProjectDescription {...props} />
        {children}
      </Container>
    </Root>
  );
}
