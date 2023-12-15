import {
  Animated,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// Custom imports
import {deviceHeight, deviceWidth, moderateScale} from '../../common/constants';
import {commonColor, styles} from '../../themes';
import EText from '../common/EText';
import CardTextComponent from './CardTextComponent';
import strings from '../../i18n/strings';
import {StackNav} from '../../navigation/NavigationKeys';

function HomeCard(props) {
  const navigation = useNavigation();
  const {item, isFirst, swipe, ...rest} = props;
  const colors = useSelector(state => state.theme.theme);

  const onPressDetail = () =>
    navigation.navigate(StackNav.YourProfile, {item: item});

  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-10deg', '0deg', '10deg'],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const onSuperLike = swipe.y.interpolate({
    inputRange: [-200, -40],
    outputRange: [1, -2],
    extrapolate: 'clamp',
  });

  const likeData = useMemo(() => {
    return {
      opacity: likeOpacity,
      transform: [{rotate: '-30deg'}],
      title: strings.like,
      color: colors.greenColor,
      style: {
        left: moderateScale(30),
        top: moderateScale(50),
      },
    };
  }, []);

  const nopeData = useMemo(() => {
    return {
      opacity: nopeOpacity,
      transform: [{rotate: '30deg'}],
      title: strings.nope,
      color: colors.redColor,
      style: {
        right: moderateScale(30),
        top: moderateScale(50),
      },
    };
  }, []);

  const superLikeData = useMemo(() => {
    return {
      opacity: onSuperLike,
      transform: [{rotate: '0deg'}],
      title: strings.superLike,
      color: colors.yellow,
      style: {
        bottom: moderateScale(150),
        ...styles.selfCenter,
      },
    };
  }, []);

  return (
    <Animated.View
      style={[
        localStyles.root,
        isFirst && {transform: [...swipe.getTranslateTransform(), {rotate}]},
      ]}
      {...rest}>
      <ImageBackground
        source={{uri:item.frontPic}}
        resizeMode="cover"
        imageStyle={{borderRadius: moderateScale(40)}}
        style={localStyles.imageStyle}>
        {/* <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0, y: 1}}
          locations={[0.5, 0.5, 0.8, 1]}
          colors={[
            colors.linearColor1,
            colors.linearColor2,
            colors.linearColor3,
            colors.linearColor4,
          ]}
          style={localStyles.linearStyle}> */}
          <View style={localStyles.innerContainer}>
            <View style={localStyles.nameContainer}>
              <EText type={'B24'} numberOfLines={1} color={colors.white}>
                {item.name.length > 10
                  ? item.name.slice(0, 10) + '..., ' + item.price
                  : item.name + ', ' + item.price}
              </EText>
              <EText type={'S18'} style={styles.mv10} color={colors.white}>
                {item.type}
              </EText>
            </View>
            <View style={localStyles.location}>
              <TouchableOpacity style={localStyles.locationContainer}>
                <Ionicons
                  name={'location-sharp'}
                  size={moderateScale(16)}
                  color={colors.white}
                />
                <EText type={'M14'} style={styles.ml5} color={colors.white}>
                  {"2km"}
                </EText>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressDetail}>
                <Ionicons
                  name={'ellipsis-vertical-outline'}
                  size={moderateScale(22)}
                  color={colors.white}
                  style={styles.mh5}
                />
              </TouchableOpacity>
            </View>
          </View>
        {/* </LinearGradient> */}
        {isFirst && <CardTextComponent cardStyle={likeData} />}
        {isFirst && <CardTextComponent cardStyle={nopeData} />}
        {isFirst && <CardTextComponent cardStyle={superLikeData} />}
      </ImageBackground>
    </Animated.View>
  );
}

export default React.memo(HomeCard);

const localStyles = StyleSheet.create({
  root: {
    width: deviceWidth - moderateScale(40),
    height: deviceHeight / 1.4,
    borderRadius: moderateScale(40),
    position: 'absolute',
    ...styles.pt20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  innerContainer: {
    width: '100%',
    position: 'absolute',
    bottom: moderateScale(50),
    ...styles.ph10,
    ...styles.rowSpaceBetween,
  },
  locationContainer: {
    ...styles.rowCenter,
    height: moderateScale(32),
    width: moderateScale(90),
    borderRadius: moderateScale(16),
    backgroundColor: commonColor.tranparent2,
  },
  linearStyle: {
    height: '100%',
    width: '100%',
    borderRadius: moderateScale(40),
  },
  nameContainer: {width: '70%', ...styles.ph10},
  location: {...styles.rowCenter, width: '30%'},
});
