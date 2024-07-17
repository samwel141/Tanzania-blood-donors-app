/* eslint-disable prettier/prettier */


// import { COLORS, DEVICE } from '../../shared/utils/constants';
import { COLORS, DEVICE } from '../../shared/utils/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLORS.brand,
    paddingTop: 0.03 * DEVICE.height,
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '4%',
    width: '100%',
  },
  container: {
    marginTop: 40,
    marginBottom: 40,
  },
  sex: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '83%',
    height: 40,
   marginHorizontal: 30,
  },
  view2: {
    paddingTop: 20,
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
    fontSize: DEVICE.fontScale * 28,
    fontWeight: '600',
    color: COLORS.darkGrey,
    marginBottom: 0.04 * DEVICE.height,
  },
  view3: {
    backgroundColor: 'white',
    height: 0.25 * DEVICE.width,
    width: 0.25 * DEVICE.width,
    borderRadius: 15,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    height: 0.15 * DEVICE.width * 0.75,
    width: 0.15 * DEVICE.width * 0.75,
    backgroundColor: COLORS.darkGrey,
    borderRadius: 0.15 * DEVICE.width * 0.75 * 0.5,
    borderBottomLeftRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListView1: {
    height: DEVICE.height,
    marginBottom: 280,
  },
  flatListView2: {
    height: DEVICE.height,
    marginBottom: 410,
  },
});

export default styles;
