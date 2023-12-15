// Library import
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';
import {Dropdown} from 'react-native-element-dropdown';

// Local import
import {getHeight, moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import EText from '../common/EText';
import strings from '../../i18n/strings';
import EButton from '../common/EButton';
import EDivider from '../common/EDivider';
import MostPopularCategory from '../homeComponent/MostPopularCategory';
import {CountryData} from '../../api/constant';
import SliderComponent from '../homeComponent/SliderComponent';

const SortAndFilter = props => {
  const {SheetRef} = props;
  const colors = useSelector(state => state.theme.theme);
  const [gender, setGender] = useState('');

  const onChangedGender = text => setGender(text.value.toLowerCase());

  const onPressApply = () => SheetRef?.current?.hide();
  const onPressReset = () => SheetRef?.current?.hide();

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
        <EText type={'B22'} style={styles.mt5} align={'center'}>
          {strings.filter}
        </EText>
        <EDivider style={styles.mv20} />
        <EText type={'b18'} style={localStyles.textStyles}>
          {strings.category}
        </EText>
        <View style={localStyles.categoryContainer}>
          <MostPopularCategory />
        </View>
        <EText type={'b18'} style={styles.mb5}>
          {strings.location}
        </EText>
        <Dropdown
          style={[
            localStyles.dropdownStyle,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.bColor,
              color: colors.white,
            },
          ]}
          placeholderStyle={{color: colors.textColor}}
          data={CountryData}
          maxHeight={getHeight(180)}
          labelField="label"
          valueField="value"
          placeholder={strings.selectCountry}
          value={gender}
          itemTextStyle={{
            color: colors.textColor,
            fontSize: moderateScale(16),
          }}
          onChange={onChangedGender}
          selectedTextStyle={{
            color: colors.textColor,
          }}
          itemContainerStyle={{
            backgroundColor: colors.inputBg,
          }}
          activeColor={colors.inputBg}
        />
        <SliderComponent
          startPoint={10}
          endPoint={22}
          maxValue={70}
          title={strings.age}
        />
        <EDivider style={styles.mb20} />
        <View style={localStyles.btnContainer}>
          <EButton
            title={strings.reset}
            type={'S16'}
            containerStyle={localStyles.skipBtnContainer}
            color={colors.dark ? colors.white : colors.primary5}
            bgColor={colors.dark3}
            onPress={onPressReset}
          />
          <EButton
            title={strings.apply}
            type={'S16'}
            containerStyle={localStyles.skipBtnContainer}
            onPress={onPressApply}
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
  textStyles: {
    ...styles.mb15,
  },
  categoryContainer: {
    ...styles.mb15,
  },
  btnContainer: {
    ...styles.pb30,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
  bottomContainer: {
    ...styles.pv10,
  },
  dropdownStyle: {
    height: getHeight(60),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.ph25,
    ...styles.mv10,
  },
});

export default SortAndFilter;
