/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {
    Image,
    ImageProps,
    Text,
    TextProps,
    TouchableOpacity,
    View,
    ViewProps,
  } from 'react-native';
  
  // import CustomText from '../../../shared/components/Text';
  import React from 'react';
  // import styles from './styles';
  import styles from './style';
  
  interface CardProps {
    title: string;
    summary: string;
    icon: Readonly<ImageProps>;
    touchableOpacityStyle?: ViewProps | {};
    touchableOpacityOnSelectionStyle?: ViewProps | {};
    imageStyle?: ImageProps | {};
    textStyle?: TextProps | {};
    titleStyle?: TextProps | {};
    titleOnSelectionStyle?: TextProps | {};
    summaryStyle?: TextProps | {};
    summaryOnSelectionStyle?: TextProps | {};
    onPress?: any;
    selectSpeed?: true | false
  }
  export default function Card(props: CardProps) {
    return (
      <TouchableOpacity
        style={
          props.selectSpeed ? 
            {...styles.touchableOpacity, ...styles.touchableOpacityOnSelection, ...props.touchableOpacityOnSelectionStyle}
          :
            {...styles.touchableOpacity, ...props.touchableOpacityStyle}
          
        }
        onPress={() => { props.onPress();}}
        activeOpacity={0.7}
      >
        <View style={styles.view}>
          <Image style={[styles.image, props.imageStyle]} source={props.icon} />
        </View>
        <Text 
          style={
            props.selectSpeed ?
              {...styles.title, ...styles.titleOnSelection, ...props.titleOnSelectionStyle}
            :
              {...styles.title, ...props.titleStyle}
          }
        >
          {props.title}
        </Text>
        <Text
          style={
            props.selectSpeed ?
              {...styles.summary, ...styles.summaryOnSelection, ...props.summaryOnSelectionStyle}
            :
              {...styles.summary, ...props.summaryStyle}
          }
        >
          {props.summary}
        </Text>
      </TouchableOpacity>
    );
  }
  
