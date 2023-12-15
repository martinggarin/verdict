import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// Custom imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import EText from '../common/EText';
import {StackNav} from '../../navigation/NavigationKeys';

export default function DatingCardComponent({item}) {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const onPressNewMatch = () =>
    navigation.navigate(StackNav.YourProfile, {item: item});
  return (
    <TouchableOpacity onPress={onPressNewMatch} style={localStyles.root}>
      <ImageBackground style={localStyles.imageStyle} source={item?.picUrl}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0, y: 1}}
          locations={[0, 0.5, 0.6, 1]}
          colors={[
            colors.linearColor1,
            colors.linearColor2,
            colors.linearColor3,
            colors.linearColor4,
          ]}
          style={styles.flex}>
          <View style={localStyles.innerContainer}>
            <EText type={'B20'} color={colors.white}>
              {item?.name}
              {', '}
              {item?.age}
            </EText>
            <EText type={'S18'} style={styles.mv10} color={colors.white}>
              {item?.category}
            </EText>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  root: {
    height: moderateScale(270),
    borderRadius: moderateScale(35),
    overflow: 'hidden',
    ...styles.mh10,
  },
  imageStyle: {
    width: moderateScale(200),
    height: moderateScale(270),
    resizeMode: 'cover',
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    left: moderateScale(10),
    right: 0,
    ...styles.p10,
  },
});
