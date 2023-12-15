import {Animated, StyleSheet} from 'react-native';
import React, {memo} from 'react';

// Custom imports
import EText from '../common/EText';
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';

const CardTextComponent = ({cardStyle}) => {
  return (
    <Animated.View
      style={[
        localStyles.root,
        {
          borderColor: cardStyle.color,
          opacity: cardStyle.opacity,
          transform: cardStyle.transform,
        },
        cardStyle.style,
      ]}>
      <EText type={'B26'} color={cardStyle.color}>
        {cardStyle.title}
      </EText>
    </Animated.View>
  );
};

const localStyles = StyleSheet.create({
  root: {
    position: 'absolute',
    ...styles.ph20,
    ...styles.pv10,
    borderWidth: moderateScale(4),
  },
});

export default memo(CardTextComponent);
