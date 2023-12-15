//Library Imports
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

//Local Imports
import {getHeight, moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import EText from './EText';

export default function EButton({
  title,
  type,
  color,
  onPress,
  containerStyle,
  style,
  icon = null,
  frontIcon = null,
  bgColor = null,
  children,
  ...props
}) {
  const colors = useSelector(state => state.theme.theme);
  return (
    <TouchableOpacity
      style={[
        localStyle.btnContainer,
        styles.rowCenter,
        containerStyle,
        bgColor
          ? {backgroundColor: bgColor}
          : {backgroundColor: colors.primary5},
      ]}
      onPress={onPress}
      {...props}>
      {frontIcon}
      <EText type={type} style={style} color={color ? color : colors.white}>
        {title}
      </EText>
      {icon}
      {children}
    </TouchableOpacity>
  );
}

const localStyle = StyleSheet.create({
  btnContainer: {
    height: getHeight(55),
    borderRadius: moderateScale(55) / 2,
  },
});
