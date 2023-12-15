// Library import
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';

// Local import
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import EText from '../common/EText';
import strings from '../../i18n/strings';
import EButton from '../common/EButton';
import EDivider from '../common/EDivider';
import SearchCardComponent from '../homeComponent/SearchCardComponent';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../../navigation/NavigationKeys';

export default function TrashItem(props) {
  const {SheetRef, item} = props;
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const onPressCancel = () => SheetRef?.current?.hide();

  const onPressYes = () => SheetRef?.current?.hide();

  const onPressCard = () => {
    SheetRef?.current?.hide();
    navigation.navigate(StackNav.EventDetail, {item});
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3,
        width: moderateScale(60),
        ...styles.mv10,
      }}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <View style={[styles.mb15, styles.flexGrow1]}>
        <EText type={'B22'} style={localStyles.headerText} align={'center'}>
          {strings.removeFromCart}
        </EText>
        <EDivider style={styles.mv5} />
        <SearchCardComponent
          item={item}
          isLike={false}
          onPressCard={onPressCard}
        />
      </View>
      <EDivider style={styles.mv5} />
      <View style={localStyles.btnContainer}>
        <EButton
          title={strings.cancel}
          type={'S16'}
          color={colors.dark ? colors.white : colors.primary}
          containerStyle={localStyles.skipBtnContainer}
          bgColor={colors.dark3}
          onPress={onPressCancel}
        />
        <EButton
          title={strings.yesRemove}
          type={'S16'}
          containerStyle={localStyles.skipBtnContainer}
          onPress={onPressYes}
        />
      </View>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
    ...styles.pb30,
  },
  headerText: {
    ...styles.mt5,
    ...styles.mb10,
  },
  btnContainer: {
    ...styles.pt10,
    ...styles.pb30,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
});
