import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// custom imports
import {styles} from '../../themes';
import {FilterDark, FilterLight} from '../../assets/svgs';
import EText from '../common/EText';
import {moderateScale} from '../../common/constants';
import SortAndFilter from '../models/SortAndFilter';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

function HomeHeader({type, name}) {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);
  const sortAndFilterRef = useRef();

  const onPressFilter = () => sortAndFilterRef?.current?.show();

  return (
    <View style={localStyles.headerContainer}>
      <Ionicons
        name="restaurant-outline" size={moderateScale(30)} color={colors.textColor}
      />
      <View style={localStyles.textContainer}>
        <EText type="m14" numberOfLines={1} color={colors.textColor}>
          Searching For <EText type="m18">{type}</EText>
        </EText>
        <EText type="B20" numberOfLines={1} color={colors.textColor}>
          {name}
        </EText>
      </View>

      <TouchableOpacity onPress={onPressFilter}>
        {colors.dark ? <FilterDark /> : <FilterLight />}
      </TouchableOpacity>
      <SortAndFilter SheetRef={sortAndFilterRef} />
    </View>
  );
}

export default React.memo(HomeHeader);

const localStyles = StyleSheet.create({
  headerContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
  },
  userImageStyle: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  textContainer: {
    ...styles.mh10,
    ...styles.flexCenter,
  },
  notificationContainer: {
    ...styles.center,
    ...styles.ph10,
    ...styles.pv10,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(26),
  },
});
