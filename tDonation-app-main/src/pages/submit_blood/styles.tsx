/* eslint-disable prettier/prettier */
// import {COLORS, DEVICE} from '../../../shared/utils/constants';
import { COLORS, DEVICE } from '../../shared/utils/constants';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
    marginBottom: 15,
    width: 77,
  },
  viewContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
    fontSize: DEVICE.fontScale * 15,
    fontWeight: '600',
    borderTopRightRadius: 0,
    overflow: 'hidden',
    // Android devices have a left padding already applied to input text
    // we add this to ensure the label and input content are aligned
    paddingLeft: DEVICE.type === 'android' ? 4 : 0,
  },
  whenBlur: {
    fontSize: DEVICE.fontScale * 15,
    backgroundColor: COLORS.background,
    paddingLeft: 12,
    fontWeight: DEVICE.type === 'android' ? '700' : '500',
    borderRadius: 10,
    borderTopRightRadius: 0,
    height: 50,
    overflow: 'hidden',
    lineHeight: 46,
  },
  textInput: {
    height: DEVICE.type === 'android' ? 35 : 25,
  },
  whenOnFocus: {
    height: 60,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderWidth: 1.5,
    borderColor: '#ff9147',
  },
  touchableOpacity: {
    backgroundColor: COLORS.brand,
    height: 50,
    borderRadius: 10,
    borderTopRightRadius: 0,
  },
  touchableOpacityText: {
    textAlign: 'center',
    lineHeight: 50,
    color: COLORS.darkGrey,
    fontSize: DEVICE.fontScale * 20,
    fontWeight: '400',
  },
  touchableOpacityPrompt: {
    paddingLeft: 4,
  },
  textPrompt: {
    color: COLORS.darkGrey,
  },
  viewPrompt: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    margin: 4,
  },
  touchableOpacityTextPrompt: {
    color: 'green',
  },
  picker: {
    width: 20,
    height: 20,
  },
  buttonStyle: {
    marginBottom: 0,
    borderRadius: 10,
    borderTopRightRadius: 0,
    paddingLeft: 10,
    backgroundColor: COLORS.background,
  },
  selectedValueStyle: {
    paddingLeft: 12,
    fontSize: DEVICE.fontScale * 15,
    fontWeight: DEVICE.type === 'android' ? '700' : '500',
    backgroundColor: COLORS.background,
  },
  iconWrapper: {
    backgroundColor: COLORS.background,
  },
  disabledTouchOpacity: {
    backgroundColor: COLORS.grey,
  },
});

export default styles;
