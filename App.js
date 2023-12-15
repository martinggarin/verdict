import {StatusBar} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import AppNavigator from './navigation/index';
import {styles} from './themes';
import ESafeAreaView from './components/common/ESafeAreaView';

const App = () => {
  const colors = useSelector(state => state.theme.theme);

  return (
    <ESafeAreaView style={styles.flex}>
      <StatusBar
        barStyle={colors.dark == 'dark' ? 'light-content' : 'dark-content'}
      />
      <AppNavigator />
    </ESafeAreaView>
  );
};

export default App;