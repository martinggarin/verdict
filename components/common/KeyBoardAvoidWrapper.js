// Library Imports
import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

// Local Imports
import {isIOS, moderateScale} from '../../common/constants';
import {styles} from '../../themes';

// KeyboardAvoidWrapper Component
export default KeyBoardAvoidWrapper = ({
  children,
  containerStyle,
  contentContainerStyle,
}) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={isIOS ? moderateScale(50) : null}
      style={[styles.flex, containerStyle]}
      behavior={isIOS ? 'padding' : null}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        bounces={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
