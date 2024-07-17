import {COLORS, DEVICE} from '../../../shared/utils/constants';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /* Styles for component: Card */
  touchableOpacity: {
    backgroundColor: '#e6e1e2',
    borderRadius: 20,
    padding: 20,
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 20,
    width: '48%',
    borderWidth: 1,
    borderColor: '#e6e1e2',
  },
  touchableOpacityOnSelection: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.brand,
  },
  image: {
    borderRadius: 12.5,
    height: 26,
    width: 26,
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    color: 'black'
  },
  titleOnSelection: {
    color: 'black',
    fontWeight: '500',
  },
  summary: {
    color: '#807c7c',
    fontSize: 11,
  },
  summaryOnSelection: {
    color: 'grey',
  },
  view: {
    height: '30%',
  },
  /* Styles for component: Button */
  touchableOpacityButton: {
    backgroundColor: '#e5e7eb',
    height: DEVICE.width * 0.17,
    width: DEVICE.width * 0.17,
    borderRadius: DEVICE.width * 0.17 * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: DEVICE.fontScale * 18,
  },
  buttonImage: {
    height: DEVICE.width * 0.2,
    width: DEVICE.width * 0.2,
    borderRadius: DEVICE.width * 0.2 * 0.5,
  },
});

export default styles;
