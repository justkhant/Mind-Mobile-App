import React from 'react';
import {Image, Dimensions} from 'react-native';

const ImageBanner = ({source, style}) => {
  const bannerAsset = Image.resolveAssetSource(source);
  const win = Dimensions.get('window');

  return (
    <Image
      source={source}
      style={[
        {
          width: win.width,
          height: bannerAsset.height * (win.width / bannerAsset.width),
        },
        style,
      ]}
    />
  );
};

export default ImageBanner;
