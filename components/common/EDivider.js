import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';

const EDivider = ({style}) => {
  const colors = useSelector(state => state.theme.theme);
  return (
    <View
      style={[
        localStyles.divider,
        {backgroundColor: colors.dark ? colors.grayScale8 : colors.grayScale3},
        style,
      ]}
    />
  );
};

const localStyles = StyleSheet.create({
  divider: {
    height: moderateScale(1),
    ...styles.mv10,
  },
});

export default memo(EDivider);
