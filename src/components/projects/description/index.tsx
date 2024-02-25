import React from 'react';
import { Linking, ViewStyle } from 'react-native';

import DescriptionButton from './DescriptionButton';
import {
  Container,
  ContainerTags,
  Tag,
  TagText,
  DescriptionText,
  TitleText,
  ContainerButton,
  ContainerShadow,
  DescriptionButtonShadow,
} from './styles';

import Colors from '@/constants/Colors';

export interface ProjectDescriptionProps {
  name: string;
  description: string;
  style?: ViewStyle;
  tags?: string[];
  linkGithub?: string;
  linkPreview?: string;
}

export default function ProjectDescription({
  name,
  description,
  style,
  tags,
  linkGithub,
  linkPreview,
}: ProjectDescriptionProps) {
  const createTags = () => {
    if (tags) {
      return tags.map((value, index) => (
        <Tag key={`tag_${index}`}>
          <TagText>{value}</TagText>
        </Tag>
      ));
    }
  };

  const handleLink = (url?: string) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <ContainerShadow>
      <Container style={style}>
        <TitleText>{name}</TitleText>
        <DescriptionText>{description}</DescriptionText>

        {tags ? <ContainerTags>{createTags()}</ContainerTags> : null}

        {linkGithub || linkPreview ? (
          <ContainerButton>
            {linkGithub ? (
              <DescriptionButtonShadow>
                <DescriptionButton
                  title="Github"
                  style={{ backgroundColor: Colors.text }}
                  onPressOut={() => handleLink(linkGithub)}
                />
              </DescriptionButtonShadow>
            ) : null}

            {linkPreview ? (
              <DescriptionButtonShadow>
                <DescriptionButton
                  title="Preview"
                  style={{ backgroundColor: Colors.compose }}
                  onPressOut={() => handleLink(linkPreview)}
                />
              </DescriptionButtonShadow>
            ) : null}
          </ContainerButton>
        ) : null}
      </Container>
    </ContainerShadow>
  );
}