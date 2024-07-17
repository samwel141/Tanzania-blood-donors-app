/* eslint-disable prettier/prettier */
import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import utils from '../shared/navigation/utils';


// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLogedin, setIsLogedin] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    // Fetch token and user from AsyncStorage on initial load
    const loadAuthData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedUser = await AsyncStorage.getItem('user');
        const storedRefreshToken = await AsyncStorage.getItem('refreshToken');

        if (storedToken && storedUser && storedRefreshToken) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
          setRefreshToken(storedRefreshToken);
          setIsLogedin(true);
        }
      } catch (error) {
        console.error('Failed to load auth data', error);
      }
    };

    loadAuthData();
  }, []);


  const login = async ({ username, password, navigation }) => {
    try {
      const response = await fetch(
        'https://dev-api-hazel.vercel.app/api/centers/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username, password}),
        },
      );

      const responseData = await response.json();

      if (responseData.token) {
        setToken(responseData.token);
        setUser(responseData.user);
        setRefreshToken(responseData.refreshToken);
        setIsLogedin(true);

        // Save token and user data to AsyncStorage
        await AsyncStorage.setItem('token', responseData.token);
        await AsyncStorage.setItem('user', JSON.stringify(responseData.user));
        await AsyncStorage.setItem('refreshToken', responseData.refreshToken);

        Alert.alert('Success', 'Login successful!', [{text: 'OK'}]);
        utils.navigateToHomePage(navigation);
      } else {
        Alert.alert(
          'Error',
          `Login failed: ${responseData.message || 'Unknown error'}`,
          [{text: 'OK'}],
        );
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      Alert.alert(
        'Error',
        'An error occurred during login. Please try again later.',
        [{text: 'OK'}],
      );
    }
  };

  const logout = async () => {
    setToken(null);
    setUser(null);
    setRefreshToken(null);
    setIsLogedin(false);

    // Clear token and user data from AsyncStorage
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('refreshToken');
  };

  return (
    <AuthContext.Provider
      value={{isLogedin, token, user, refreshToken, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
