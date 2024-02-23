import React from 'react';
import {
  DimensionValue,
  Image,
  ImageBackground,
  ImageBackgroundProps,
  ImageProps,
  StyleSheet,
} from 'react-native';

import { View } from './StyledView';

export type DeviceTemplateOptions = 'smartphone' | 'tablet';

interface SmartphoneTemplateProps extends ImageProps {
  device: DeviceTemplateOptions;
  template?: ImageBackgroundProps;
  templateWidth?: DimensionValue;
  templateHeight?: DimensionValue;
}

const defaultPhone = require('@/assets/images/smartphone.png');
const defaultTablet = require('@/assets/images/tablet.png');

export function DeviceTemplate({
  device,
  template,
  templateWidth,
  templateHeight,
  width,
  height,
  style,
  ...insideImage
}: SmartphoneTemplateProps) {
  const getDefaultDevice = () => {
    switch (device) {
      case 'tablet':
        return defaultTablet;

      default:
        return defaultPhone;
    }
  };

  return (
    <View
      transparent
      style={{
        width: template?.width ? template?.width : templateWidth,
        height: template?.height ? template?.height : templateHeight,
      }}>
      <ImageBackground
        defaultSource={getDefaultDevice()}
        resizeMode="center"
        {...template}
        style={[
          {
            width: template?.width ? template?.width : templateWidth,
            height: template?.height ? template?.height : templateHeight,
          },
          styles.defaultTemplate,
          template?.style,
        ]}>
        <Image resizeMode="center" {...insideImage} style={[{ width, height }, style]} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultTemplate: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
});
