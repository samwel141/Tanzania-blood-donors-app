
import { COLORS, DEVICE } from '../../utils/constants';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    paddingLeft: 12,
    paddingRight: 12,
  },
  userNameText: {
    width: 0.8 * DEVICE.width,
    fontSize: DEVICE.fontScale * 18,
    color: COLORS.grey,
    alignSelf: 'center',
  },
  image: {
    height: 30,
    width: 30,
  },
  touchableOpacity: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderBlockColor: 'white',
  },
  titleText: {
    fontSize: DEVICE.fontScale * 16,
    color: COLORS.darkGrey,
    alignSelf: 'center',
    height: 32,
    textAlign: 'center',
    lineHeight: 32,
    fontWeight: '600'
  },
  dummyView: {
    width: 32,
  },
});

export default styles;
