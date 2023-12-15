import {StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import strings from '../../i18n/strings';
import {moderateScale, THEME} from '../../common/constants';
import EText from '../common/EText';
import EDivider from '../common/EDivider';
import {colors, styles} from '../../themes';
import {setAsyncStorageData} from '../../utils/helpers';
import {changeThemeAction} from '../../redux/action/themeAction';

export default function CategoryComponent({item, onPressItem}) {
  const color = useSelector(state => state.theme.theme);
  const language = useSelector(state => state?.profile?.language);
  const [isEnabled, setIsEnabled] = useState(!!color.dark);
  const dispatch = useDispatch();

  const onPressLightTheme = () => {
    setAsyncStorageData(THEME, 'light');
    dispatch(changeThemeAction(colors.light));
  };

  const onPressDarkTheme = () => {
    setAsyncStorageData(THEME, 'dark');
    dispatch(changeThemeAction(colors.dark));
  };

  const toggleSwitch = val => {
    if (val) {
      onPressDarkTheme();
    } else {
      onPressLightTheme();
    }
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View>
      <TouchableOpacity
        disabled={item.title === strings.darkMode}
        onPress={() => onPressItem(item)}
        activeOpacity={item.rightIcon ? 1 : 0.5}
        style={localStyles.settingsContainer}>
        <Ionicons
          name={item.icon}
          size={moderateScale(28)}
          color={color.dark ? color.white : color.darkColor}
        />
        <EText type="s18" style={styles.ml15}>
          {item.title}
        </EText>
        <View style={localStyles.rightContainer}>
          {!!item.value && (
            <EText type="s18" style={styles.mr10}>
              {language}
            </EText>
          )}
          {!!item.rightIcon ? (
            <Switch
              trackColor={{
                false: color.grayScale3,
                true: color.primary5,
              }}
              thumbColor={color.white}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          ) : (
            <Ionicons
              name="chevron-forward-outline"
              size={moderateScale(20)}
              color={color.dark ? color.white : color.darkColor}
            />
          )}
        </View>
      </TouchableOpacity>
      {!!item?.isDivider && <EDivider style={styles.mt25} />}
    </View>
  );
}

const localStyles = StyleSheet.create({
  settingsContainer: {
    ...styles.mt15,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  rightContainer: {
    ...styles.flex,
    ...styles.rowEnd,
  },
});
