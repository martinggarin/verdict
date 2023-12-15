// Library Imports
import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import {styles} from '../themes';
import HomeHeader from '../components/homeComponent/HomeHeader'
import ESafeAreaView from '../components/common/ESafeAreaView';
import HumeCard from '../components/homeComponent/HumeCard';

export default function HomeTab() {
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = useState(true);

  useEffect(() => {
    setExtraData(!extraData);
  }, [colors]);

  return (
    <ESafeAreaView style={localStyles.root}>
      <HomeHeader name="first chats" type="food"/>
      <HumeCard />
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    width: '100%',
  },
});
