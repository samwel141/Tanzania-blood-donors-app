/* eslint-disable prettier/prettier */
import {COLORS, DEVICE} from '../../shared/utils/constants';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /* Styles for the main container: SafeAreaView */
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
  },
  /* Styles for native components: Text */
  text: {
    width: '90%',
    marginTop: 5,
    marginBottom: 15,
    fontSize: DEVICE.fontScale * 30,
    color: 'black',
  },
  primaryFeaturesText: {
    width: '90%',
    color: '#bec1c7',
    marginBottom: '4%',
  },
  secondaryFeaturesText: {
    width: '90%',
    color: '#bec1c7',
    marginBottom: '2%',
    marginTop: '4%',
  },
  messageText: {
    color: COLORS.brand,
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
  },
  /* Styles for component: PrimaryFeatures */
  parentView: {
    width: '90%',
    height: '50%',
    justifyContent: 'space-between',
  },
  childView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    height: '48%',
  },
  cardTouchableOpacity: {
    backgroundColor: '#e5e7eb',
  },
  callToActionCardTouchableOpacity: {
    backgroundColor: 'black',
  },
  title: {
    color: '#6eeb26',
  },
  summary: {
    color: 'white',
  },
  /* Styles for component: SecondaryFeatures */
  containerView: {
    width: '90%',
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: DEVICE.width * 0.26, // same height as the button component
  },
  scrollView: {
    height: DEVICE.width * 0.26, // same height as the button component
    width: DEVICE.width,
  },
  buttonAddTouchableOpacity: {
    backgroundColor: COLORS.brand,
  },
  buttonAddImage: {
    height: '50%',
    width: '50%',
  },
  buttonTouchableOpacity: {
    marginLeft: 10,
  },
  leftViewText: {
    textAlign: 'center',
    marginTop: 3,
    color: 'black',
  },
  rightViewText: {
    textAlign: 'center',
    marginTop: 3,
    marginLeft: 10,
    color: COLORS.primaryGrey,
  },
  parentViewbar: {
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
    flex: 1,
    alignItems: 'center',
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
    fontWeight: '600',
  },
  dummyView: {
    width: 32,
  },
});

export default styles;
