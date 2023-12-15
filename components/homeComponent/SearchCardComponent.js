import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import EText from '../common/EText';
import {commonColor, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {FavouriteActive, HeartIcon, LocationIcon} from '../../assets/svgs';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../../navigation/NavigationKeys';

const SearchCardComponent = ({item, isLike = true, onPressCard}) => {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);
  const [isLiked, setIsLiked] = useState(true);

  const onPressLike = () => setIsLiked(!isLiked);
  const onPressDetail = () => navigation.navigate(StackNav.EventDetail, {item});
  return (
    <TouchableOpacity
      onPress={!!onPressCard ? onPressCard : onPressDetail}
      style={[
        localStyles.root,
        {backgroundColor: colors.dark ? colors.dark2 : colors.grayScale1},
      ]}>
      <ImageBackground
        source={item?.image}
        style={localStyles.imageStyle}
        imageStyle={{borderRadius: moderateScale(16)}}>
        {!!item?.isFree && (
          <View style={localStyles.freeContainer}>
            <EText type={'S12'} color={colors.white} align={'center'}>
              {'FREE'}
            </EText>
          </View>
        )}
      </ImageBackground>
      <View style={localStyles.rightContainer}>
        <EText type={'b16'} numberOfLines={1} style={localStyles.textStyle}>
          {item?.title}
        </EText>
        <EText
          type={'S14'}
          numberOfLines={1}
          color={colors.primary5}
          style={localStyles.textStyle}>
          {item?.time}
        </EText>
        <View style={localStyles.locationContainer}>
          <View style={localStyles.locationSubContainer}>
            <LocationIcon
              width={moderateScale(16)}
              height={moderateScale(16)}
            />
            <EText
              type={'S12'}
              color={colors.textColor2}
              numberOfLines={1}
              style={styles.mh5}>
              {item?.address}
            </EText>
          </View>
          {!!isLike && (
            <TouchableOpacity style={styles.ml15} onPress={onPressLike}>
              {isLiked ? (
                <HeartIcon
                  width={moderateScale(18)}
                  height={moderateScale(18)}
                />
              ) : (
                <FavouriteActive
                  width={moderateScale(18)}
                  height={moderateScale(18)}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SearchCardComponent);

const localStyles = StyleSheet.create({
  root: {
    ...styles.p10,
    ...styles.shadowStyle,
    ...styles.justifyCenter,
    ...styles.flexRow,
    width: '100%',
    ...styles.mt15,
    borderRadius: moderateScale(16),
  },
  imageStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
    resizeMode: 'cover',
  },
  textStyle: {
    ...styles.mt10,
    ...styles.flex,
  },
  locationSubContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.flex,
  },
  locationContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt10,
    ...styles.mb5,
  },
  freeContainer: {
    height: moderateScale(22),
    width: moderateScale(36),
    borderRadius: moderateScale(8),
    ...styles.selfEnd,
    ...styles.center,
    backgroundColor: commonColor.primary5,
    right: moderateScale(10),
    top: moderateScale(10),
  },
  rightContainer: {
    ...styles.flex,
    ...styles.ml10,
  },
});
