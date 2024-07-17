import {COLORS, DEVICE} from '../../../shared/utils/constants';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLORS.brand,
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '100%',
  },
  actionButton: {
    backgroundColor: '#703434',
    borderRadius: 5,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    padding: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  view2: {
    height: DEVICE.height,
    backgroundColor: 'white',
    borderTopLeftRadius: 85,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
  title: {
    textAlign: 'center',
    fontSize: DEVICE.fontScale * 36,
    fontWeight: '400',
    marginTop: 0.05 * DEVICE.height,
    marginBottom: 0.05 * DEVICE.height,
    color: COLORS.darkGrey,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  view3: {
    backgroundColor: 'white',
    height: 0.2 * DEVICE.width,
    width: 0.9 * DEVICE.width,
    borderRadius: 9,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    height: 50,
    width: 40,
    backgroundColor: '#FF0000',
    borderRadius: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
