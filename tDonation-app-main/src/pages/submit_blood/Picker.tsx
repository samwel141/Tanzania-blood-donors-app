/* eslint-disable prettier/prettier */
import {Image, View, ViewProps} from 'react-native';
import React, {useState} from 'react';
import images from '../../shared/utils/images';
import {Picker} from 'react-native-form-component';
import styles from './styles';

interface PickerProps {
  id: number;
  state: string;
  setState: (userType: string) => void;
  placeholder: string;
  items?: any[]; // [{ label: '', value: '' }]
  pickerViewStyle?: ViewProps | {};
  pickerButtonStyle?: object;
  pickerIconWrapperStyle?: object;
  pickerSelectedValueStyle?: object;
}
export default (props: PickerProps) => {


  return (
    <View style={[styles.view, props.pickerViewStyle]}>
      <Picker
        key={props.id}
        items={props.items}
        placeholder={props.placeholder}
        selectedValue={props.state}
        onSelection={item => props.setState(item.value)}
        selectedValueStyle={[
          styles.selectedValueStyle,
          props.pickerSelectedValueStyle,
        ]}
        buttonStyle={[styles.buttonStyle, props.pickerButtonStyle]}
        iconWrapperStyle={[styles.iconWrapper, props.pickerIconWrapperStyle]}
        pickerIcon={<Image source={images.dropdown} style={styles.picker} />}
      />
    </View>
  );
};
