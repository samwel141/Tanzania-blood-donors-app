/* eslint-disable prettier/prettier */
import * as React from 'react';

import {Image, ImageProps, TextProps, TouchableOpacity, View, ViewProps} from 'react-native';

import CustomText from '../Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../utils/images';
import styles from './style';

// To-do: Add in the interface type check for navigation:
interface AppBarProps {
  title: string;
  textStyle?: TextProps;
  imageStyle?: ImageProps;
  safeAreaViewStyle?: any;
  touchableOpacityStyle?: ViewProps;
  onPress: any;
}

const AppBar = (props: AppBarProps) => {
  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[props.safeAreaViewStyle]}
    >
      <View style={styles.parentView}>
        <TouchableOpacity
          style={[styles.touchableOpacity, props.touchableOpacityStyle]}
          onPress={() => {props.onPress();}}
          activeOpacity={0.3}
        >
          <Image
            source={images.backArrow}
            style={[styles.image, props.imageStyle]}
          />
        </TouchableOpacity>

        <CustomText style={{...styles.titleText, ...props.textStyle}}>{props.title}</CustomText>
        {/*
                    This dummy view is added to balance the children elements
                    to ensure the Text element above is properly centered.
                */}
        <View style={styles.dummyView} />
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
