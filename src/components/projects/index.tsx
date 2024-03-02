import React from 'react';
import { useWindowDimensions } from 'react-native';

import ProjectDescription from './description';
import AppRestPreview from './previews/appRest';
import CataclimaPreview from './previews/cataclima';
import { Project, Root, Title } from './styles';
import { HEADER_HEIGHT } from '../customHeader/styles';

type ProjectsProps = Pick<React.ComponentProps<typeof Root>, 'onLayout'>;

export default function Projects({ onLayout }: ProjectsProps) {
  const { height } = useWindowDimensions();
  return (
    <Root onLayout={onLayout}>
      <Title>Projetos</Title>
      <Project style={{ maxHeight: height - HEADER_HEIGHT }}>
        <ProjectDescription
          name="Cataclima"
          description="Aplicativo Mobile desenvolvido em React-native com Expo, que utiliza a sua localização para fornecer a previsão do tempo na sua cidade. ☔"
          linkGithub={process.env.EXPO_PUBLIC_CATACLIMA_GITHUB}
          linkPreview={process.env.EXPO_PUBLIC_CATACLIMA_PREVIEW}
          tags={['Expo', 'React Native', 'Async storage', 'Axios', 'React-Redux', 'Figma']}
        />
        <CataclimaPreview linkPreview={process.env.EXPO_PUBLIC_CATACLIMA_PREVIEW} />
      </Project>

      <Project style={{ maxHeight: height - HEADER_HEIGHT }}>
        <ProjectDescription
          name="App Rest"
          description={`Projeto de uma Aplicação React-Native com Expo para consumir a API do Projeto API_REST-Estudos. \n\nO projeto possui Login e Cadastro para acessar a lista de Cidades e Pessoas onde é possível realizar as operações de criação, leitura, atualização e exclusão (CRUD) nos itens das listas`}
          linkGithub={process.env.EXPO_PUBLIC_APPREST_GITHUB}
          linkPreview={process.env.EXPO_PUBLIC_APPREST_PREVIEW}
          linkExtra={{ title: 'API', link: process.env.EXPO_PUBLIC_APPREST_API }}
          tags={[
            'Expo',
            'React Native',
            'React Native Paper',
            'Redux',
            'Axios',
            'YUP validation',
            'Expo Secure Store',
          ]}
        />
        <AppRestPreview linkPreview={process.env.EXPO_PUBLIC_APPREST_PREVIEW} />
      </Project>
    </Root>
  );
}
