import {StyleSheet, Switch, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local import
import EText from '../common/EText';
import {styles} from '../../themes';

export default function NotificationItem({item}) {
  const colors = useSelector(state => state.theme.theme);

  return (
    <View style={localStyles.mainContainer}>
      <EText type={'s18'}>{item.title}</EText>
      <Switch
        trackColor={{
          false: colors.grayScale3,
          true: colors.primary5,
        }}
        thumbColor={colors.white}
        onValueChange={item.onPress}
        value={item.value}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mb20,
  },
});
