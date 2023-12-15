// Library Imports
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import ESafeAreaView from '../components/common/ESafeAreaView';
import EText from '../components/common/EText';
import {styles} from '../themes';
import {moderateScale} from '../common/constants';
import {
  Menu_Dark,
  Menu_Light,
  Search_Dark,
  Search_Light,
  TabLogo,
} from '../assets/svgs';
import EHeader from '../components/common/EHeader';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';
import {activeUserImage, inboxChatData} from '../api/constant';
import SubHeader from '../components/SubHeader';

export default function ChatsTab({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const onPressSearch = () => navigation.navigate(StackNav.Search);

  const onPressChat = name =>
    navigation.navigate(StackNav.CustomerService, {name: name});

  const RenderActiveUser = ({item}) => {
    return (
      <Image
        source={{uri: item}}
        resizeMode="contain"
        style={[
          localStyles.activeUserImage,
          {backgroundColor: colors.dark ? colors.white : colors.grayScale1},
        ]}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressChat(item.userName)}
        style={localStyles.renderItemContainer}>
        <View style={[styles.rowCenter, styles.flex]}>
          <Image
            source={{uri: item.image}}
            resizeMode="contain"
            style={[
              localStyles.productImage,
              {backgroundColor: colors.dark ? colors.white : colors.grayScale1},
            ]}
          />
          <View style={[styles.mh10, styles.flex]}>
            <EText numberOfLines={1} type={'b16'}>
              {item.userName}
            </EText>
            <EText
              numberOfLines={1}
              color={!colors.dark ? colors.grayScale5 : colors.grayScale7}
              style={styles.mt5}
              type={'s14'}>
              {item.message}
            </EText>
          </View>
        </View>
        <View style={[styles.itemsEnd, styles.justifyEnd]}>
          {!!item.notification && (
            <View
              style={[
                localStyles.messageContainer,
                {backgroundColor: colors.primary5},
              ]}>
              <EText type={'b12'} color={colors.white}>
                {item.notification}
              </EText>
            </View>
          )}
          <View style={[styles.rowCenter, styles.mt5]}>
            <EText
              type={'s14'}
              color={!colors.dark ? colors.grayScale5 : colors.grayScale7}
              style={styles.mr5}>
              {item?.time}
            </EText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // const RenderHeader = () => {
  //   return (
  //     <View
  //       style={[
  //         localStyles.nowActiveStyle,
  //         {
  //           borderBottomColor: colors.dark
  //             ? colors.grayScale7
  //             : colors.grayScale3,
  //         },
  //       ]}>
  //       <SubHeader title1={strings.nowActive} title2={strings.seeAll} />
  //       <FlashList
  //         data={activeUserImage}
  //         renderItem={RenderActiveUser}
  //         keyExtractor={(item, index) => index.toString()}
  //         showsHorizontalScrollIndicator={false}
  //         bounces={false}
  //         horizontal={true}
  //         estimatedItemSize={20}
  //       />
  //     </View>
  //   );
  // };

  const RightIcon = useMemo(() => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressSearch}>
          {colors.dark ? <Search_Dark /> : <Search_Light />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.ph10}>
          {colors.dark ? <Menu_Dark /> : <Menu_Light />}
        </TouchableOpacity>
      </View>
    );
  }, []);

  const LeftIcon = useMemo(() => {
    return (
      <View style={styles.pr10}>
        <TabLogo />
      </View>
    );
  }, []);

  return (
    <ESafeAreaView>
      <EHeader
        isHideBack={true}
        title={strings.chats}
        isLeftIcon={LeftIcon}
        rightIcon={RightIcon}
      />
      <FlashList
        data={inboxChatData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        bounces={false}
        //ListHeaderComponent={RenderHeader}
        contentContainerStyle={localStyles.contentContainerStyle}
        estimatedItemSize={20}
      />
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    borderBottomWidth: moderateScale(2),
    width: '33.33%',
  },
  mainContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.mt5,
    ...styles.pb10,
    width: '100%',
  },
  contentContainerStyle: {
    ...styles.pb20,
  },
  productImage: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: moderateScale(28),
    resizeMode: 'contain',
  },
  activeUserImage: {
    width: moderateScale(65),
    height: moderateScale(65),
    borderRadius: moderateScale(33),
    resizeMode: 'contain',
    ...styles.mh10,
    ...styles.mv10,
    ...styles.mb20,
  },
  renderItemContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.mt15,
  },
  messageContainer: {
    height: moderateScale(22),
    width: moderateScale(22),
    borderRadius: moderateScale(11),
    ...styles.center,
  },
  nowActiveStyle: {
    ...styles.mh20,
    borderBottomWidth: moderateScale(1),
  },
});
