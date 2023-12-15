import {
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';

// custom imports
import {homeData, itemData} from '../../api/constant';
import {
  LikeIcon,
  NopeIcon,
  RefreshIcon,
  SuperLikeIcon,
} from '../../assets/svgs';
import {deviceHeight, moderateScale} from '../../common/constants';
import {commonColor, styles} from '../../themes';
import HomeCard from './HomeCard';

const RenderBtn = ({icon, isSideBtn, onPress}) => {
  const colors = useSelector(state => state.theme.theme);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        localStyles.btnStyle,
        {
          backgroundColor: colors.backgroundColor,
          height: !isSideBtn ? moderateScale(70) : moderateScale(60),
          width: !isSideBtn ? moderateScale(70) : moderateScale(60),
          borderRadius: !isSideBtn ? moderateScale(35) : moderateScale(30),
        },
      ]}>
      {icon}
    </TouchableOpacity>
  );
};

const HumeCard = () => {
  const colors = useSelector(state => state.theme.theme);
  const [data, setData] = useState(itemData);
  const [extraData, setExtraData] = useState(true);
  const swipe = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    setExtraData(!extraData);
  }, [colors]);

  useEffect(() => {
    if (!data.length) {
      setData(itemData);
    }
    swipe.setValue({x: 0, y: 0});
  }, [data]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      swipe.setValue({x: dx, y: dy});
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      let isActionActive = Math.abs(dx) > 200;
      let isSuperLike = Math.abs(dy) > 300;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: {x: dx * 500, y: dy},
          duration: 500,
          useNativeDriver: true,
        }).start(removeCard);
      } else if (dy < 100 && isSuperLike) {
        Animated.timing(swipe, {
          toValue: {x: dx * 500, y: dy * 500},
          duration: 500,
          useNativeDriver: true,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: {x: 0, y: 0},
          friction: 4,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const removeCard = () => {
    setData(data => data.slice(1));
  };

  const onPressSelection = useCallback(
    direction => {
      Animated.timing(swipe, {
        toValue: {x: direction * 500, y: 0},
        duration: 700,
        useNativeDriver: true,
      }).start(removeCard);
    },
    [swipe],
  );

  const onPressSuperLike = useCallback(() => {
    Animated.timing(swipe, {
      toValue: {x: 0, y: -1 * 700},
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      setData(data => data.slice(1));
    });
  }, [swipe]);

  const onPressLike = () => onPressSelection(-1);

  const onPressNope = () => onPressSelection(1);
  console.log(data);
  const renderItem = (item, index) => {
    let isFirst = index === 0;
    let dragHandlers = isFirst ? panResponder.panHandlers : {};
    console.log(item);
    return (
      <HomeCard item={item} isFirst={isFirst} swipe={swipe} {...dragHandlers} />
    );
  };

  return (
    <View>
      <View>
        {data.map((item, index) => renderItem(item, index)).reverse()}
      </View>
      <View style={localStyles.bottomContainer}>
        <RenderBtn icon={<RefreshIcon />} isSideBtn={true} />
        <RenderBtn icon={<NopeIcon />} onPress={onPressNope} />
        <RenderBtn icon={<LikeIcon />} onPress={onPressLike} />
        <RenderBtn
          icon={<SuperLikeIcon />}
          onPress={onPressSuperLike}
          isSideBtn={true}
        />
      </View>
    </View>
  );
};

export default memo(HumeCard);

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    width: '100%',
  },
  bottomContainer: {
    top: deviceHeight / 1.4 - moderateScale(45),
    ...styles.rowSpaceAround,
  },
  btnStyle: {
    ...styles.center,
    shadowColor: commonColor.primary5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
