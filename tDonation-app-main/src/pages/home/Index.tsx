/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// import CustomText from '../../shared/components/Text';
// import CustomText from '../../shared/components/Text';
// import CustomText from '../../shared/components/Text';
import HomePage from '../../shared/components/AppBar/HomePage';
// import AppBar from '../../shared/components/AppBar';
import AppBar from './AppBar';
import PrimaryFeatures from './PrimaryFeatures';
import FavouriteGroups from './FavouriteGroups';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// import FavoriteLocationList from './FavoriteLocationList';
// import styles from './styles';
import styles from './style';
import utils from '../../shared/navigation/utils';
// import LocationInput from '../../shared/components/Location/locationInput';
import Geolocation from 'react-native-geolocation-service';
// import {useSocket} from '../../websocket/WebSocketContext';
import {Permission, Platform, View} from 'react-native';
import {useEffect} from 'react';
// import {requestLocationPermission} from '../../services/locationPermission';
// import {sendLocationUpdate} from '../../websocket/locationUtils';
import {useSelector} from 'react-redux';
import { requestLocationPermission } from '../../services/locationPermision';
import { Text } from 'react-native-paper';
// import {selectCurrentUser} from '../../state/feature/user/authentication/authSelector';

const Home = (props: any) => {
  // const {socket, connectionState} = useSocket();
  // const user = useSelector(selectCurrentUser);
  // const userId = user?.userID;

  // useEffect(() => {
  //   let intervalId: any;

  //   const sendLocationEverySecond = () => {
  //     requestLocationPermission().then(granted => {
  //       if (granted) {
  //         // Start sending location updates every second
  //         intervalId = setInterval(() => {
  //           Geolocation.getCurrentPosition(
  //             position => {
  //               const {latitude, longitude} = position.coords;
  //               // Ensure socket is connected and userId is available before sending location update
  //               if (socket && userId) {
  //                 sendLocationUpdate(socket, {
  //                   latitude,
  //                   longitude,
  //                   userId, // Ensure this is the correct user ID
  //                   userType: 'user',
  //                   timestamp: Date.now().toString(),
  //                 });
  //               } else {
  //                 console.log(
  //                   'Either WebSocket is not connected or userId is unavailable.',
  //                 );
  //               }
  //             },
  //             error => {
  //               console.error(error);
  //             },
  //             {enableHighAccuracy: true},
  //           );
  //         }, 10000); // 1000 milliseconds = 1 second
  //       } else {
  //         console.log('Location permission denied');
  //       }
  //     });
  //   };

  //   if (connectionState === 'connected') {
  //     sendLocationEverySecond();
  //   }

    // Cleanup function to clear the interval on component unmount or when the connection state changes
  //   return () => {
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //     }
  //   };
  // }, [connectionState, socket, userId]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <AppBar 
        title="Home"
        onPress={()=>{}}
        textStyle={{fontSize: 20, textAlign: 'left'}}
      /> */}
      <HomePage
        name="Mwananyamala Center"
        onPress={() => {
          utils.navigateToMenuPage(props.navigation);
        }}
      />
      <Text style={styles.text}>
        <Text style={styles.messageText}>{'CHANGIA DAMU OKOA MAISHA '}</Text>
      </Text>
      <Text style={styles.primaryFeaturesText}>
        Here are some things you can do:
      </Text>
      <PrimaryFeatures navigation={props.navigation} />
      <Text style={styles.secondaryFeaturesText}>
        Your favorite Groups:
      </Text>
       <FavouriteGroups />
    </SafeAreaView>
  );
};
export default Home;
