// Library import
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useEffect, useMemo, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

// Local import
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import {styles} from '../../../themes';
import {
  checkPlatform,
  deviceWidth,
  moderateScale,
} from '../../../common/constants';
import EText from '../../../components/common/EText';
import EInput from '../../../components/common/EInput';
import {chatData} from '../../../api/constant';
import strings from '../../../i18n/strings';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function CustomerService({navigation, route}) {
  const title = route?.params?.name;
  const colors = useSelector(state => state.theme.theme);
  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.bColor,
  };
  const FocusedStyle = {
    borderColor: colors.primary5,
    backgroundColor: colors.inputFocusColor,
  };

  const BlurredIconStyle = colors.grayScale5;
  const FocusedIconStyle = colors.primary5;

  const [addChat, setAddChat] = useState('');
  const [chatStyle, setChatStyle] = useState(BlurredStyle);
  const [chatIconStyle, setChatIconStyle] = useState(BlurredIconStyle);
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (addChat.length > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [addChat]);

  const onFocusInput = () => {
    setChatStyle(FocusedStyle);
    setChatIconStyle(FocusedIconStyle);
  };

  const onBlurInput = () => {
    setChatStyle(BlurredStyle);
    setChatIconStyle(BlurredIconStyle);
  };

  const onchangeComment = text => setAddChat(text);

  const onPressCall = () =>
    navigation.navigate(StackNav.CallingScreen, {title: title});

  const RightIcon = useMemo(() => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressCall} style={styles.pr10}>
          <Ionicons
            name="call-outline"
            size={moderateScale(26)}
            color={colors.textColor}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pr10}>
          <Ionicons
            name="videocam-outline"
            size={moderateScale(26)}
            color={colors.textColor}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="ellipsis-horizontal-circle-outline"
            size={moderateScale(26)}
            color={colors.textColor}
          />
        </TouchableOpacity>
      </View>
    );
  }, []);

  // This is show Day like today or tomorrow
  const RenderTimeList = ({title}) => {
    return (
      <View
        style={[
          localStyles.timeContainer,
          {
            backgroundColor: colors.lightGray,
          },
        ]}>
        <EText color={colors.grayScale6} type="r14">
          {title}
        </EText>
      </View>
    );
  };

  const SenderMessage = memo(({item, index}) => {
    return (
      <View
        style={[
          localStyles.senderContainer,
          {
            backgroundColor:
              item.type == 'sender'
                ? colors.primary5
                : colors.dark
                ? colors.dark3
                : colors.grayScale1,
            alignSelf: item.type == 'sender' ? 'flex-end' : 'flex-start',
          },
        ]}>
        <EText
          style={styles.flex}
          color={
            item.type == 'sender'
              ? colors.white
              : colors.dark
              ? colors.grayScale6
              : colors.textColor
          }
          type="m16">
          {item.message}
        </EText>
        <EText color={colors.grayScale4} style={styles.pl10} type="r12">
          {item.time}
        </EText>
      </View>
    );
  });

  const RenderRightIcon = () => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity>
          <Ionicons
            name="attach-outline"
            size={moderateScale(24)}
            color={chatIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ml10}>
          <Ionicons
            name="camera-outline"
            size={moderateScale(24)}
            color={chatIconStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const LeftIcon = () => {
    return (
      <TouchableOpacity>
        <MaterialIcons
          name="insert-emoticon"
          size={moderateScale(24)}
          color={chatIconStyle}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ESafeAreaView>
      <EHeader
        title={title ? title : strings.customerService}
        rightIcon={RightIcon}
      />
      <KeyboardAvoidingView
        keyboardVerticalOffset={
          checkPlatform() === 'ios' ? moderateScale(50) : null
        }
        style={styles.flex}
        behavior={checkPlatform() === 'ios' ? 'padding' : null}>
        <View style={styles.flex}>
          <FlatList
            data={chatData}
            renderItem={({item, index}) => (
              <SenderMessage item={item} index={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.mh20}
          />
        </View>
        <View style={styles.rowCenter}>
          <EInput
            placeHolder={strings.message + '...'}
            keyBoardType={'default'}
            _value={addChat}
            autoCapitalize={'none'}
            toGetTextFieldValue={onchangeComment}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.inputContainerStyle,
              chatStyle,
            ]}
            _onFocus={onFocusInput}
            onBlur={onBlurInput}
            rightAccessory={RenderRightIcon}
            insideLeftIcon={LeftIcon}
          />
          <TouchableOpacity
            disabled={isDisable}
            style={[localStyles.sendBtn, {backgroundColor: colors.primary5}]}>
            <Feather
              name={isDisable ? 'mic' : 'send'}
              size={moderateScale(24)}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    ...styles.ph20,
    ...styles.itemsCenter,
  },
  timeContainer: {
    ...styles.pv10,
    ...styles.mv15,
    ...styles.ph15,
    borderRadius: moderateScale(12),
  },
  senderContainer: {
    ...styles.p15,
    ...styles.flexRow,
    borderRadius: moderateScale(12),
    maxWidth: '80%',
    ...styles.itemsEnd,
    ...styles.mt10,
  },
  inputContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.ph10,
    ...styles.flexGrow1,
    width: deviceWidth - moderateScale(100),
  },
  sendBtn: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    ...styles.rowCenter,
    ...styles.ml10,
  },
  avatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    ...styles.mh10,
  },
});
