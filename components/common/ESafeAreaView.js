import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from '../../themes';

export default ESafeAreaView = ({children, ...props}) => {
  const colors = useSelector(state => state.theme.theme);
  return (
    <SafeAreaView {...props} style={[localStyles(colors, props.style).root]}>
      {children}
    </SafeAreaView>
  );
};

const localStyles = (colors, style) =>
  StyleSheet.create({
    root: {
      ...styles.flex,
      backgroundColor: colors.backgroundColor,
      ...style,
    },
  });
