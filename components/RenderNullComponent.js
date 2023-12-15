import {Image, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import {styles} from '../themes';
import images from '../assets/images';
import EText from './common/EText';
import {getHeight} from '../common/constants';

const RenderNullComponent = props => {
  const {title1, title2} = props;

  const colors = useSelector(state => state.theme.theme);

  return (
    <View style={localStyles.root}>
      <Image
        source={colors.dark ? images.nullImageDark : images.nullImageLight}
        style={localStyles.imageStyle}
      />
      {!!title1 && (
        <EText type={'b18'} align={'center'} style={styles.mb10}>
          {title1}
        </EText>
      )}
      {!!title2 && (
        <EText type={'r16'} align={'center'}>
          {title2}
        </EText>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.flexCenter,
    ...styles.ph30,
  },
  imageStyle: {
    height: getHeight(230),
    width: '100%',
    ...styles.selfCenter,
    ...styles.mb20,
    resizeMode: 'contain',
  },
});

export default memo(RenderNullComponent);
