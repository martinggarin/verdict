import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import EText from '../common/EText';
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';

export default function PaymentSelect(props) {
  const {item, isSelected, onPressItem} = props;
  const colors = useSelector(state => state.theme.theme);
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={[
        localStyles.selectContainer,
        {backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1},
      ]}>
      <View style={styles.rowCenter}>
        <View style={styles.mh10}>{item.icon}</View>
        <EText type={'B18'}>{item?.title}</EText>
      </View>
      <Ionicons
        name={
          isSelected === item?.title ? 'radio-button-on' : 'radio-button-off'
        }
        size={moderateScale(22)}
        color={colors.primary5}
      />
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  selectContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph15,
    ...styles.pv20,
    ...styles.mb15,
    borderRadius: moderateScale(16),
  },
});
