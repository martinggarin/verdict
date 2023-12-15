import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import images from '../assets/images';
import {moderateScale} from '../common/constants';
import {styles} from '../themes';

const Rating = ({rating, iconStyle, activeColor, inactiveColor}) => {
  return (
    <View style={localStyles.ratingContainer}>
      <Image
        style={{
          tintColor: rating >= 1 ? activeColor : inactiveColor,
          ...localStyles.rateIcon,
          ...iconStyle,
        }}
        source={rating >= 1 ? images.starFill : images.starUnFill}
      />
      <Image
        style={{
          tintColor: rating >= 2 ? activeColor : inactiveColor,
          ...localStyles.rateIcon,
          ...iconStyle,
        }}
        source={rating >= 2 ? images.starFill : images.starUnFill}
      />
      <Image
        style={{
          tintColor: rating >= 3 ? activeColor : inactiveColor,
          ...localStyles.rateIcon,
          ...iconStyle,
        }}
        source={rating >= 3 ? images.starFill : images.starUnFill}
      />
      <Image
        style={{
          tintColor: rating >= 4 ? activeColor : inactiveColor,
          ...localStyles.rateIcon,
          ...iconStyle,
        }}
        source={rating >= 4 ? images.starFill : images.starUnFill}
      />
      <Image
        style={{
          tintColor: rating >= 5 ? activeColor : inactiveColor,
          ...localStyles.rateIcon,
          ...iconStyle,
        }}
        source={rating >= 5 ? images.starFill : images.starUnFill}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  rateIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  ratingContainer: {
    ...styles.rowSpaceAround,
    ...styles.selfCenter,
    ...styles.mv15,
    width: '70%',
  },
});

export default Rating;
