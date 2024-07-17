/* eslint-disable prettier/prettier */


import Navigation from '../shared/navigation/Index';
import {Provider as ReactNativePaperProvider} from 'react-native-paper';
import React, {useEffect} from 'react';
import { requestLocationPermission } from '../services/locationPermision';
import {Provider} from 'react-redux';
import { store } from '../state/store';
import { ScannerContextProvider } from '../context/scannerContext';
import { AuthProvider } from '../context/AuthContext';


function App(): JSX.Element {
  useEffect(() => {
    requestLocationPermission().then(granted => {
      if (granted) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    });
  }, []);
  return (
    <ReactNativePaperProvider>
      <Provider store={store}>
        <ScannerContextProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
        </ScannerContextProvider>
      </Provider>
    </ReactNativePaperProvider>
  );
}

export default App;
