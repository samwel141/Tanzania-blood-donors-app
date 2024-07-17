import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './style';

interface PromptProps {
  prompt: string;
  action: string;
  onPress?: () => void;
}
const Prompt = (props: PromptProps) => {
  return (
    <View style={styles.viewPrompt}>
      <Text style={styles.textPrompt}>{props.prompt}</Text>
      <TouchableOpacity
        style={styles.touchableOpacityPrompt}
        onPress={props.onPress}
        activeOpacity={0.5}>
        <Text style={styles.touchableOpacityTextPrompt}>{props.action}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Prompt;
