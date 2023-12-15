import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

// Set Async Storage Data
const setAsyncStorageData = async (key, value) => {
  const stringData = JSON.stringify(value);
  await AsyncStorage.setItem(key, stringData);
};

// Get Async Storage Data
const getAsyncStorageData = async key => {
  const data = await AsyncStorage.getItem(key);
  return JSON.parse(data);
};

//Show Popup Alert
const showPopupWithOk = (title, message, okClicked) => {
  Alert.alert(title ? title : 'Hume', message ? message : '', [
    {text: 'OK', onPress: () => okClicked && okClicked()},
  ]);
};

//Show Popup with ok and cancel
const showPopupWithOkAndCancel = (title, message, okClicked, cancelClicked) => {
  Alert.alert(title ? title : 'Hume', message ? message : '', [
    {
      text: 'cancel',
      onPress: () => cancelClicked && cancelClicked(),
      style: 'cancel',
    },
    {
      text: 'ok',
      onPress: () => okClicked && okClicked(),
    },
  ]);
};

export {
  showPopupWithOk,
  showPopupWithOkAndCancel,
  getAsyncStorageData,
  setAsyncStorageData,
};
