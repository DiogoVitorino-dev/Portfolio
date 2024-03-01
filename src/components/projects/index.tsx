import React from 'react';

import ProjectDescription from './description';
import CataclimaPreview from './previews/cataclima';
import { Project, Root, Title } from './styles';

export default function Projects() {
  return (
    <Root>
      <Title>Projetos</Title>
      <Project>
        <ProjectDescription
          name="Cataclima"
          description="Aplicativo Mobile desenvolvido em React-native com Expo, que utiliza a sua localização para fornecer a previsão do tempo na sua cidade. ☔"
          linkGithub={process.env.EXPO_PUBLIC_CATACLIMA_GITHUB}
          linkPreview={process.env.EXPO_PUBLIC_CATACLIMA_PREVIEW}
          tags={['Expo', 'React Native', 'Async storage', 'Axios', 'Redux', 'Figma']}
        />
        <CataclimaPreview linkPreview={process.env.EXPO_PUBLIC_CATACLIMA_PREVIEW} />
      </Project>
    </Root>
  );
}
