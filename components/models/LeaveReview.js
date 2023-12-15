// Library import
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';

// Local import
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import EText from '../common/EText';
import strings from '../../i18n/strings';
import EInput from '../common/EInput';
import EButton from '../common/EButton';
import EDivider from '../common/EDivider';
import images from '../../assets/images';
import {FlashList} from '@shopify/flash-list';

export default function LeaveReview(props) {
  const {SheetRef} = props;
  const colors = useSelector(state => state.theme.theme);

  const [review, setReview] = useState('');
  const [reviewStyle, setReviewStyle] = useState(BlurredStyle);
  const [rating, setRating] = useState('');

  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.bColor,
  };
  const FocusedStyle = {
    borderColor: colors.textColor,
    backgroundColor: colors.inputFocusColor,
  };

  const onFocusInput = () => setReviewStyle(FocusedStyle);

  const onBlurInput = () => setReviewStyle(BlurredStyle);

  const onChangedReview = text => setReview(text);

  const onPressCancel = () => SheetRef?.current?.hide();

  const onPressSubmit = () => SheetRef?.current?.hide();

  const onPressReview = index => setRating(index);

  const renderStar = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressReview(index)}
        style={styles.mh10}>
        <Image
          source={rating < index ? images.emptyStar : images.filStar}
          style={localStyles.starContainer}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3,
        width: moderateScale(60),
        ...styles.mv10,
      }}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <EText type={'B22'} style={localStyles.headerText} align={'center'}>
          {strings.leaveReview}
        </EText>
        <EDivider style={styles.mv10} />
        <View style={localStyles.ratingContainer}>
          <EText type={'B22'} align={'center'} style={styles.mb20}>
            {strings.reviewDesc}
          </EText>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={renderStar}
            keyExtractor={item => item.toString()}
            horizontal
            bounces={false}
          />
        </View>
        <EDivider style={styles.mv5} />
        <EInput
          label={strings.writeReview}
          placeHolder={strings.yourReviewHere}
          keyBoardType={'default'}
          _value={review}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangedReview}
          inputContainerStyle={[
            {backgroundColor: colors.inputBg},
            localStyles.inputContainerStyle,
            reviewStyle,
          ]}
          multiline={true}
          _onFocus={onFocusInput}
          onBlur={onBlurInput}
        />
        <EDivider style={styles.mv5} />
        <View style={localStyles.btnContainer}>
          <EButton
            title={strings.cancel}
            type={'S16'}
            color={colors.dark ? colors.white : colors.primary}
            containerStyle={localStyles.skipBtnContainer}
            bgColor={colors.dark3}
            onPress={onPressCancel}
          />
          <EButton
            title={strings.submit}
            type={'S16'}
            containerStyle={localStyles.skipBtnContainer}
            onPress={onPressSubmit}
          />
        </View>
      </TouchableOpacity>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
    ...styles.pb30,
  },
  headerText: {
    ...styles.mt5,
    ...styles.mb10,
  },
  ratingContainer: {
    ...styles.mv15,
    ...styles.itemsCenter,
  },
  inputContainerStyle: {
    borderRadius: moderateScale(18),
    borderWidth: moderateScale(1),
    ...styles.ph15,
    ...styles.mb5,
  },
  btnContainer: {
    ...styles.pt15,
    ...styles.pb30,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
  starContainer: {
    height: moderateScale(30),
    width: moderateScale(30),
    ...styles.mb10,
  },
});
