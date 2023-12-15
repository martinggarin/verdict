import {StyleSheet, View} from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useSelector} from 'react-redux';

// Local import
import EText from '../common/EText';
import {deviceWidth, getHeight, moderateScale} from '../../common/constants';
import {styles} from '../../themes';

export default function SliderComponent(props) {
  const {startPoint, endPoint, maxValue, title, subTitle1, subTitle2} = props;
  const colors = useSelector(state => state.theme.theme);

  const customMarker = event => {
    return (
      <View style={localStyles.markerContainer}>
        <View
          style={[
            localStyles.sliderLength,
            {
              backgroundColor: colors.dark ? colors.white : colors.imageBg,
              borderColor: colors.primary5,
            },
          ]}
        />
        <EText
          color={colors.dark ? colors.white : colors.primary5}
          type={'r14'}
          style={styles.mt5}>
          {subTitle1 ? subTitle1 : ''}
          {event.currentValue}
          {subTitle2 ? subTitle2 : ''}
        </EText>
      </View>
    );
  };

  return (
    <View style={styles.mb30}>
      <EText type={'b18'} style={styles.mb10}>
        {title}
      </EText>
      <MultiSlider
        sliderLength={deviceWidth - moderateScale(24) * moderateScale(2)}
        values={[startPoint, endPoint]}
        min={0}
        max={maxValue}
        onValuesChange={values => console.log(values)}
        step={1}
        markerOffsetY={20}
        selectedStyle={{backgroundColor: colors.primary5}}
        trackStyle={[
          localStyles.sliderContainer,
          {backgroundColor: colors.dark ? colors.dark3 : colors.imageBg},
        ]}
        minMarkerOverlapDistance={50}
        customMarker={customMarker}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  sliderContainer: {
    height: moderateScale(6),
    borderRadius: moderateScale(6),
  },
  sliderLength: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(6),
    top: moderateScale(-3),
  },
  markerContainer: {
    height: getHeight(55),
    ...styles.center,
    ...styles.justifyStart,
  },
});
