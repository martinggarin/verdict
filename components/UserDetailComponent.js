// Library import
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

// Local import
import React, {useState} from 'react';
import EText from './common/EText';
import EButton from './common/EButton';
import {getHeight, moderateScale} from '../common/constants';
import {styles} from '../themes';
import strings from '../i18n/strings';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../navigation/NavigationKeys';

export default function UserDetailComponent(props) {
  const {userName, userImage, userDescription, string1, string2} = props;
  const colors = useSelector(state => state.theme.theme);
  const [isInvite, setIsInvite] = useState(false);
  const navigation = useNavigation();

  const onPressOrganizer = () => {
    if (string1 == strings.followed) {
      navigation.navigate(StackNav.Organizer);
    }
  };

  return (
    <View style={localStyles.rootContainer}>
      <TouchableOpacity onPress={onPressOrganizer} style={localStyles.userItem}>
        <Image
          source={{
            uri: userImage,
          }}
          style={localStyles.imageStyle}
        />
        <View style={localStyles.userDescription}>
          <EText type="b18" numberOfLines={1}>
            {userName}
          </EText>
          {!!userDescription && (
            <EText
              type="m14"
              style={styles.mt5}
              color={colors.dark ? colors.grayScale3 : colors.grayScale7}
              numberOfLines={1}>
              {userDescription}
            </EText>
          )}
        </View>
      </TouchableOpacity>
      <EButton
        title={isInvite ? string1 : string2}
        color={isInvite ? colors.primary5 : colors.white}
        type="b14"
        containerStyle={[
          localStyles.buttonContainer,
          {borderColor: colors.primary5},
        ]}
        bgColor={isInvite && colors.tranparent}
        onPress={() => setIsInvite(!isInvite)}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  rootContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
    ...styles.flex,
  },
  userItem: {
    flex: 1,
    ...styles.rowCenter,
  },
  imageStyle: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    resizeMode: 'cover',
  },
  userDescription: {
    ...styles.mh10,
    ...styles.flex,
  },
  buttonContainer: {
    ...styles.ph15,
    height: getHeight(35),
    borderRadius: moderateScale(17),
    borderWidth: moderateScale(2),
  },
});
