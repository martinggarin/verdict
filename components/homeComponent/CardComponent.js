import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import EText from '../common/EText';
import {styles} from '../../themes';
import {deviceWidth, getHeight, moderateScale} from '../../common/constants';
import images from '../../assets/images';
import {FavouriteActive, HeartIcon, LocationIcon} from '../../assets/svgs';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../../navigation/NavigationKeys';

export default function CardComponent({item}) {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(true);

  const onPressLike = () => setIsLiked(!isLiked);
  const onPressDetail = () => navigation.navigate(StackNav.EventDetail, {item});
  return (
    <TouchableOpacity
      onPress={onPressDetail}
      style={[
        localStyles.root,
        {backgroundColor: colors.dark ? colors.dark2 : colors.grayScale1},
      ]}>
      <Image source={images.concert1} style={localStyles.imageStyle} />
      <EText type={'b18'} numberOfLines={1} style={localStyles.textStyle}>
        {'National Music Festival'}
      </EText>
      <EText
        type={'S16'}
        numberOfLines={1}
        color={colors.primary5}
        style={localStyles.textStyle}>
        {'Mon, Dec 22 • 18.00 - 23.00 PM'}
      </EText>
      <View style={[styles.rowSpaceBetween, styles.mt5]}>
        <View style={[styles.flexRow, styles.itemsCenter, styles.flex]}>
          <LocationIcon />
          <EText
            type={'S14'}
            color={colors.textColor2}
            numberOfLines={1}
            style={styles.mh5}>
            {'Grand Park, New York'}
          </EText>
        </View>
        <TouchableOpacity style={styles.ml15} onPress={onPressLike}>
          {isLiked ? (
            <HeartIcon width={moderateScale(22)} height={moderateScale(22)} />
          ) : (
            <FavouriteActive
              width={moderateScale(22)}
              height={moderateScale(22)}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.p15,
    ...styles.mv15,
    ...styles.mh10,
    ...styles.flex,
    ...styles.justifyCenter,
    ...styles.shadowStyle,
    width: deviceWidth - moderateScale(90),
    borderRadius: moderateScale(18),
  },
  imageStyle: {
    width: deviceWidth - moderateScale(120),
    height: getHeight(170),
    borderRadius: moderateScale(18),
  },
  textStyle: {
    ...styles.mt10,
    ...styles.flex,
  },
});
