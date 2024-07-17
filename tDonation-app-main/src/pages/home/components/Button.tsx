/* eslint-disable prettier/prettier */
import {
    Image,
    ImageProps,
    Text,
    TextProps,
    TouchableOpacity,
    ViewProps,
  } from 'react-native';

  import React from 'react';
  // import styles from './styles';
  import styles from './style';

  interface ButtonProps {
    id?: number | string;
    icon?: Readonly<ImageProps>;
    locationInitials?: string;
    touchableOpacityStyle?: ViewProps | {};
    imageStyle?: ImageProps | {};
    textStyle?: TextProps | {};
    onPress: () => void | undefined;
  }
  const Button = (props: ButtonProps) => {
    return (
      <TouchableOpacity
        style={[styles.touchableOpacityButton, props.touchableOpacityStyle]}
        onPress={props.onPress}
        key={props.id}>
        {props.icon ? (
          <Image
            source={props.icon}
            style={[styles.buttonImage, props.imageStyle]}
          />
        ) : (
          <Text style={[styles.buttonText, props.textStyle]}>
            {props.locationInitials}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  export default Button;
