import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './style';

interface ButtonProps {
  onPress: any;
  title: string;
}
const Button = (props: ButtonProps) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        activeOpacity={0.5}
        onPress={props.onPress}>
        <Text style={styles.touchableOpacityText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
