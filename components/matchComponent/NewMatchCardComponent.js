import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

// Custom imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import EText from '../common/EText';
import {StackNav} from '../../navigation/NavigationKeys';

export default function NewMatchCardComponent({item}) {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const onPressMatch = () => navigation.navigate(StackNav.CommonMatch);

  return (
    <TouchableOpacity onPress={onPressMatch} style={localStyles.root}>
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
            <EText type={'B16'} numberOfLines={1} color={colors.white}>
              {item?.name + ', ' + item?.age}
            </EText>
            <EText
              type={'S14'}
              numberOfLines={1}
              style={styles.mv5}
              color={colors.white}>
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
    width: '92%',
    height: moderateScale(210),
    borderRadius: moderateScale(22),
    overflow: 'hidden',
    ...styles.mh10,
    ...styles.mb20,
    marginHorizontal: '2%',
  },
  imageStyle: {
    width: '100%',
    height: moderateScale(210),
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
