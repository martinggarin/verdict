import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';

// Custom Imports
import EText from '../common/EText';
import {mostPopularData} from '../../api/constant';
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';

const MostPopularCategory = props => {
  const {chipsData} = props;
  const colors = useSelector(state => state.theme.theme);
  const [selectedChips, setSelectedChips] = useState([strings.all]);
  const [extraData, setExtraData] = useState(true);

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedChips, colors]);

  const onPressChips = value => {
    if (selectedChips.includes(value)) {
      setSelectedChips(selectedChips.filter(item => item !== value));
    } else {
      setSelectedChips([...selectedChips, value]);
    }
  };

  const renderChips = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressChips(item)}
        style={[
          localStyles.chipsContainer,
          {borderColor: colors.primary5},
          {
            backgroundColor: selectedChips.includes(item)
              ? colors.primary5
              : colors.tranparent,
          },
        ]}>
        <EText
          type={'S16'}
          color={selectedChips.includes(item) ? colors.white : colors.primary5}>
          {item}
        </EText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mb15}>
      <FlashList
        data={!!chipsData ? chipsData : mostPopularData}
        renderItem={renderChips}
        extraData={extraData}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={10}
      />
    </View>
  );
};

export default memo(MostPopularCategory);

const localStyles = StyleSheet.create({
  chipsContainer: {
    ...styles.ph20,
    ...styles.pv10,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(25),
    ...styles.mh5,
    ...styles.rowCenter,
  },
  starStyle: {
    width: moderateScale(16),
    height: moderateScale(16),
    resizeMode: 'contain',
    ...styles.mr10,
  },
});
