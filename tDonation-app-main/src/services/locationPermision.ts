import {PermissionsAndroid, Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const res = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    return res === RESULTS.GRANTED;
  } else {
    const res = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    return res === RESULTS.GRANTED;
  }
};
