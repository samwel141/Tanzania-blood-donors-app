/* eslint-disable prettier/prettier */
import {
    KeyboardAvoidingView,
    Pressable,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import React, {useRef, useState} from 'react';

  import styles from './style';

  interface InputProps {
    title: string;
    isSecureText?: boolean; // Changed from true | false to boolean for simplicity
    showSecureTextOnFocus?: boolean; // Same here
    onChange?: (text: string) => void; // This prop allows passing a function to handle changes
  }

  const showInputValue = (
    inputValue: string,
    isSecureText?: boolean,
    showSecureTextOnFocus?: boolean,
  ): string => {
    if (isSecureText && !showSecureTextOnFocus && inputValue) {
      return '*'.repeat(inputValue.length);
    }
    return inputValue;
  };

  const Input = ({
    title,
    isSecureText,
    showSecureTextOnFocus,
    onChange,
  }: InputProps) => {
    const inputRef = useRef<TextInput | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleTextChange = (text: string) => {
      setInputValue(text);
      if (onChange) {
        onChange(text); // Call the passed onChange function with the new value
      }
    };

    return (
      <KeyboardAvoidingView style={styles.view}>
        {isFocused ? (
          <View style={styles.whenOnFocus}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
              style={styles.textInput}
              ref={inputRef}
              onLayout={() => inputRef.current?.focus()}
              onEndEditing={() => setIsFocused(false)}
              onChangeText={handleTextChange}
              value={showInputValue(
                inputValue,
                isSecureText,
                showSecureTextOnFocus,
              )}
              secureTextEntry={isSecureText && !showSecureTextOnFocus}
              selectionColor={'black'}
            />
          </View>
        ) : (
          <Pressable style={styles.whenBlur} onPress={() => setIsFocused(true)}>
            <Text style={[styles.whenBlur]}>
              {inputValue
                ? showInputValue(inputValue, isSecureText, showSecureTextOnFocus)
                : title}
            </Text>
          </Pressable>
        )}
      </KeyboardAvoidingView>
    );
  };

  export default Input;
