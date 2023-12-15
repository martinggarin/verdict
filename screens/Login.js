// Library Imports
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import strings from '../i18n/strings';
import {styles} from '../themes';
import EText from '../components/common/EText';
import {ACCESS_TOKEN, getHeight, moderateScale} from '../common/constants';
import EHeader from '../components/common/EHeader';
import ESafeAreaView from '../components/common/ESafeAreaView';
import {
  Google_Icon,
  Facebook_Icon,
  Apple_Light,
  Apple_Dark,
  AppLogo,
} from '../assets/svgs/index';
import {StackNav} from '../navigation/NavigationKeys';
import EInput from '../components/common/EInput';
import {validateEmail, validatePassword} from '../utils/validators';
import KeyBoardAvoidWrapper from '../components/common/KeyBoardAvoidWrapper';
import {setAsyncStorageData} from '../utils/helpers';
import EButton from '../components/common/EButton';
import auth from '@react-native-firebase/auth';

Ionicons.loadFont()

const Login = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    backgroundColor: colors.inputBg,
  };
  const FocusedStyle = {
    backgroundColor: colors.inputFocusColor,
    borderColor: colors.primary5,
  };

  const BlurredIconStyle = colors.grayScale5;
  const FocusedIconStyle = colors.primary5;

  // const socialIcon = [
  //   {
  //     icon: <Facebook_Icon />,
  //     onPress: () => console.log('Facebook'),
  //   },
  //   {
  //     icon: <Google_Icon />,
  //     onPress: () => console.log('Google'),
  //   },
  //   {
  //     icon: colors.dark === 'dark' ? <Apple_Light /> : <Apple_Dark />,
  //     onPress: () => console.log('Apple'),
  //   },
  // ];
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailIcon, setEmailIcon] = useState(BlurredIconStyle);
  const [passwordIcon, setPasswordIcon] = useState(BlurredIconStyle);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [emailInputStyle, setEmailInputStyle] = useState(BlurredStyle);
  const [passwordInputStyle, setPasswordInputStyle] = useState(BlurredStyle);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isCheck, setIsCheck] = useState(false);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onFocusIcon = onHighlight => onHighlight(FocusedIconStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);
  const onBlurIcon = onUnHighlight => onUnHighlight(BlurredIconStyle);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  useEffect(() => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      !emailError &&
      !passwordError
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [email, password, emailError, passwordError]);

  const onChangedEmail = val => {
    const {msg} = validateEmail(val.trim());
    setEmail(val.trim());
    setEmailError(msg);
  };
  const onChangedPassword = val => {
    const {msg} = validatePassword(val.trim());
    setPassword(val.trim());
    setPasswordError(msg);
  };

  // const RenderSocialBtn = memo(({item, index}) => {
  //   return (
  //     <TouchableOpacity
  //       key={index}
  //       onPress={item.onPress}
  //       style={[
  //         localStyles.socialBtn,
  //         {
  //           backgroundColor: colors.inputBg,
  //           borderColor: colors.bColor,
  //         },
  //       ]}>
  //       {item.icon}
  //     </TouchableOpacity>
  //   );
  // });

  const EmailIcon = () => {
    return <Ionicons name="mail" size={moderateScale(20)} color={emailIcon} />;
  };

  const onFocusEmail = () => {
    onFocusInput(setEmailInputStyle);
    onFocusIcon(setEmailIcon);
  };
  const onBlurEmail = () => {
    onBlurInput(setEmailInputStyle);
    onBlurIcon(setEmailIcon);
  };

  const PasswordIcon = () => (
    <Ionicons
      name="lock-closed"
      size={moderateScale(20)}
      color={passwordIcon}
    />
  );

  const onFocusPassword = () => {
    onFocusInput(setPasswordInputStyle);
    onFocusIcon(setPasswordIcon);
  };
  const onBlurPassword = () => {
    onBlurInput(setPasswordInputStyle);
    onBlurIcon(setPasswordIcon);
  };
  const RightPasswordEyeIcon = () => (
    <TouchableOpacity
      onPress={onPressPasswordEyeIcon}
      style={localStyles.eyeIconContainer}>
      <Ionicons
        name={isPasswordVisible ? 'eye-off' : 'eye'}
        size={moderateScale(20)}
        color={passwordIcon}
      />
    </TouchableOpacity>
  );

  const onPressSignWithPassword = async () => {
    await setAsyncStorageData(ACCESS_TOKEN, 'access_token');
    if (user) {
      navigation.navigate(StackNav.TabBar);
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [
    //     {
    //       name: StackNav.TabBar,
    //     },
    //   ],
    // });
  };
  const onPressPasswordEyeIcon = () => setIsPasswordVisible(!isPasswordVisible);
  const onPressSignUp = () => navigation.navigate(StackNav.Register);
  const onPressForgotPassword = () =>
    navigation.navigate(StackNav.ForgotPassword);

  return (
    <ESafeAreaView style={localStyles.root}>
      <EHeader />
      <KeyBoardAvoidWrapper>
        <View style={localStyles.mainContainer}>
          {/* <AppLogo
            width={moderateScale(80)}
            height={moderateScale(80)}
            style={[styles.mv20, styles.selfCenter]}
          /> */}
          <EText type={'b30'} align={'center'} style={styles.mb20}>
            {strings.loginYourAccount}
          </EText>

          <EInput
            placeHolder={strings.email}
            keyBoardType={'email-address'}
            _value={email}
            _errorText={emailError}
            autoCapitalize={'none'}
            insideLeftIcon={() => <EmailIcon />}
            toGetTextFieldValue={onChangedEmail}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.inputContainerStyle,
              emailInputStyle,
            ]}
            inputBoxStyle={[localStyles.inputBoxStyle]}
            _onFocus={onFocusEmail}
            onBlur={onBlurEmail}
          />

          <EInput
            placeHolder={strings.password}
            keyBoardType={'default'}
            _value={password}
            _errorText={passwordError}
            autoCapitalize={'none'}
            insideLeftIcon={() => <PasswordIcon />}
            toGetTextFieldValue={onChangedPassword}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.inputContainerStyle,
              passwordInputStyle,
            ]}
            _isSecure={isPasswordVisible}
            inputBoxStyle={[localStyles.inputBoxStyle]}
            _onFocus={onFocusPassword}
            onBlur={onBlurPassword}
            rightAccessory={() => <RightPasswordEyeIcon />}
          />

          <TouchableOpacity
            onPress={() => setIsCheck(!isCheck)}
            style={localStyles.checkboxContainer}>
            <Ionicons
              name={isCheck ? 'square-outline' : 'checkbox'}
              size={moderateScale(26)}
              color={colors.primary5}
            />
            <EText type={'s16'} style={styles.mh10}>
              {strings.rememberMe}
            </EText>
          </TouchableOpacity>

          <EButton
            title={strings.signIn}
            type={'S16'}
            color={isSubmitDisabled && colors.white}
            containerStyle={localStyles.signBtnContainer}
            onPress={onPressSignWithPassword}
            bgColor={isSubmitDisabled && colors.primaryD}
          />
          <TouchableOpacity
            onPress={onPressForgotPassword}
            style={localStyles.forgotPasswordContainer}>
            <EText
              type={'s16'}
              align={'center'}
              color={colors.primary5}
              style={styles.mh10}>
              {strings.forgotPassword}
            </EText>
          </TouchableOpacity>
          <View style={localStyles.divider}>
            <View
              style={[
                localStyles.orContainer,
                {backgroundColor: colors.bColor},
              ]}
            />
            <EText type={'s18'} style={styles.mh10}>
              {strings.orContinueWith}
            </EText>
            <View
              style={[
                localStyles.orContainer,
                {backgroundColor: colors.bColor},
              ]}
            />
          </View>

          {/* <View style={localStyles.socialBtnContainer}>
            {socialIcon.map((item, index) => (
              <RenderSocialBtn item={item} key={index.toString()} />
            ))}
          </View> */}

          <TouchableOpacity
            onPress={onPressSignUp}
            style={localStyles.signUpContainer}>
            <EText
              type={'b16'}
              color={colors.dark ? colors.grayScale7 : colors.grayScale5}>
              {strings.dontHaveAccount}
            </EText>
            <EText type={'b16'} color={colors.primary5}>
              {' '}
              {strings.signUp}
            </EText>
          </TouchableOpacity>
        </View>
      </KeyBoardAvoidWrapper>
    </ESafeAreaView>
  );
};

export default Login;

const localStyles = StyleSheet.create({
  mainContainer: {
    ...styles.ph20,
  },
  divider: {
    ...styles.rowCenter,
    ...styles.mv30,
  },
  orContainer: {
    height: getHeight(1),
    width: '30%',
  },
  signBtnContainer: {
    ...styles.center,
    width: '100%',
    ...styles.mv20,
  },
  signUpContainer: {
    ...styles.rowCenter,
    ...styles.mv10,
  },
  inputContainerStyle: {
    height: getHeight(60),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.ph15,
  },
  inputBoxStyle: {
    ...styles.ph15,
  },
  checkboxContainer: {
    ...styles.rowCenter,
    ...styles.mb20,
  },
  socialBtnContainer: {
    ...styles.rowCenter,
    ...styles.mv20,
  },
  socialBtn: {
    ...styles.center,
    height: getHeight(60),
    width: moderateScale(90),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.mh10,
  },
});
