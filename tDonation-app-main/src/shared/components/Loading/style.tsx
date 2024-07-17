
import { COLORS, DEVICE } from '../../utils/constants';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.background,
    width: 0.85 * DEVICE.width,
    height: 0.6 * DEVICE.height,
  },
  text: {
    padding: 12,
    margin: 8,
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.darkGrey,
  },
  activityIndicator: {
    color: COLORS.brand,
  },
});

export default styles;
