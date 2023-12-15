import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../themes';
import EText from './common/EText';
import {useSelector} from 'react-redux';

function SubHeader({title1, title2, onPressSeeAll, style}) {
  const colors = useSelector(state => state.theme.theme);
  return (
    <View style={[localStyles.root, {...style}]}>
      <EText type={'b18'} style={styles.flex}>
        {title1}
      </EText>
      {!!title2 && (
        <TouchableOpacity onPress={onPressSeeAll}>
          <EText type={'s16'} color={colors.primary5} style={styles.flex}>
            {title2}
          </EText>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default React.memo(SubHeader);

const localStyles = StyleSheet.create({
  root: {
    ...styles.rowSpaceBetween,
    ...styles.mv15,
  },
});
