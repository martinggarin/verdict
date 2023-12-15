import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, ActivityIndicator, Modal} from 'react-native';
import {colors, styles} from '../../themes';

const ELoader = () => {
  const isFocused = useIsFocused();

  if (!isFocused) {
    return <View />;
  }

  return (
    <Modal transparent>
      <View style={localStyles.vwMainStyle}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  vwMainStyle: {
    ...styles.flex,
    ...styles.center,
    backgroundColor: colors.tranparent2,
  },
});

export default React.memo(ELoader);
