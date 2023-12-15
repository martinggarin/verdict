// Library import
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';

// Local import
import {styles} from '../../themes';
import EText from '../common/EText';
import strings from '../../i18n/strings';
import EButton from '../common/EButton';
import EDivider from '../common/EDivider';
import {StackNav} from '../../navigation/NavigationKeys';
import {ACCESS_TOKEN} from '../../common/constants';
import {removeUserDetail} from '../../utils/asyncstorage';

const LogOut = props => {
  const {SheetRef, navigation} = props;
  const colors = useSelector(state => state.theme.theme);

  const onPressLogOut = async () => {
    try {
      await removeUserDetail(ACCESS_TOKEN);
      SheetRef?.current?.hide();
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: StackNav.Auth}],
        });
      }, 500);
      return true;
    } catch (exception) {
      return false;
    }
  };

  const onPressCancel = () => SheetRef?.current?.hide();

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3,
        ...styles.actionSheetIndicator,
      }}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <View style={localStyles.bottomContainer}>
        <EText
          type={'B22'}
          style={styles.mt5}
          color={colors.alertColor}
          align={'center'}>
          {strings.logout}
        </EText>
        <EDivider style={styles.mv20} />
        <EText type={'b20'} align={'center'}>
          {strings.logOutDescription}
        </EText>
        <View style={localStyles.btnContainer}>
          <EButton
            title={strings.cancel}
            type={'S16'}
            containerStyle={localStyles.skipBtnContainer}
            color={colors.dark ? colors.white : colors.primary}
            bgColor={colors.dark3}
            onPress={onPressCancel}
          />
          <EButton
            title={strings.yesLogOut}
            type={'S16'}
            color={colors.white}
            containerStyle={localStyles.skipBtnContainer}
            onPress={onPressLogOut}
          />
        </View>
      </View>
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
  },
  btnContainer: {
    ...styles.pv30,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
  bottomContainer: {
    ...styles.pv10,
  },
});

export default LogOut;
