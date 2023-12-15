import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Custom imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import EText from '../common/EText';
import {StackNav} from '../../navigation/NavigationKeys';

export default function YourMatchComponent({item}) {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const onPressYourMatch = () =>
    navigation.navigate(StackNav.YourProfile, {item: item});

  return (
    <TouchableOpacity onPress={onPressYourMatch} style={localStyles.root}>
      <ImageBackground
        imageStyle={{borderRadius: moderateScale(25)}}
        style={localStyles.imageStyle}
        source={item?.picUrl}></ImageBackground>
      <View style={styles.p10}>
        <EText
          type={'B18'}
          align={'center'}
          numberOfLines={1}
          color={colors.textColor}>
          {item?.name}
        </EText>
        <EText
          type={'S16'}
          style={styles.mv10}
          align={'center'}
          numberOfLines={1}
          color={colors.textColor}>
          {item?.age}
        </EText>
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  root: {
    width: moderateScale(130),
    overflow: 'hidden',
    ...styles.mh10,
    ...styles.center,
  },
  imageStyle: {
    borderRadius: moderateScale(25),
    width: moderateScale(130),
    height: moderateScale(170),
    resizeMode: 'cover',
  },
});
