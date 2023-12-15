import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// Custom Imports
import EText from '../common/EText';
import {styles} from '../../themes';
import {EditDark, EditLight} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import EDivider from '../common/EDivider';

export default function ProfileDetailComponent(props) {
  const {isEdit = false, userName, imgUrl, event, followers, following} = props;
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const onPressEditProfile = () =>
    navigation.navigate(StackNav.SetUpProfile, {title: strings.editProfile});

  const InfoItem = ({item, title}) => {
    return (
      <View style={localStyles.infoSubContainer}>
        <EText type="b24">{item}</EText>
        <EText type="r18">{title}</EText>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={onPressEditProfile}
        style={[styles.selfCenter, styles.mb20]}>
        <Image
          source={{
            uri: imgUrl
              ? imgUrl
              : 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          }}
          style={localStyles.userImage}
        />
        {isEdit && (
          <View style={localStyles.editIcon}>
            {colors.dark ? <EditDark /> : <EditLight />}
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.mb20}>
        <EText type="b24" align={'center'}>
          {userName}
        </EText>
      </View>
      <EDivider />
      <View style={localStyles.infoContainer}>
        <InfoItem title={strings.event} item={event} />
        <View
          style={[
            localStyles.divider,
            {
              backgroundColor: colors.dark
                ? colors.grayScale8
                : colors.grayScale3,
            },
          ]}
        />
        <InfoItem title={strings.followers} item={followers} />
        <View
          style={[
            localStyles.divider,
            {
              backgroundColor: colors.dark
                ? colors.grayScale8
                : colors.grayScale3,
            },
          ]}
        />
        <InfoItem title={strings.following} item={following} />
      </View>
      <EDivider />
    </View>
  );
}

const localStyles = StyleSheet.create({
  infoSubContainer: {
    ...styles.center,
  },
  userImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  infoContainer: {
    ...styles.rowSpaceAround,
    ...styles.mv10,
  },
  divider: {
    width: moderateScale(1),
    height: moderateScale(45),
    ...styles.mv10,
  },
});
