/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Prompt from '../components/Prompt';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';
import {View, Alert} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../state/store';
import {loginThunk} from '../../../state/feature/user/authentication/authThunk';
import {useNavigation} from '@react-navigation/native';
import utils from '../../../shared/navigation/utils';
// import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuth } from '../../../context/AuthContext';





const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = React.useState('');

  const { login } = useAuth();

  const API_URL = 'http://localhost:4000/api';

  const handleLogin = async () => {
    setIsLoading(true);
    if (username.length === 0) {
      Alert.alert('Invalid username', 'Username can not be empty');
      return;
    }
    console.log({password, username});
    const triemedUsername = username.trim();
     login({username: triemedUsername, password, navigation});
     setIsLoading(false);

   };

  const handleSignUp = () => {
    console.log('Sign up page');
    utils.navigateToSignUpPage(navigation);
  };

  const handleResetPassword = () => {
    console.log('Reset password page');
    utils.navigateToResetPasswordRequest(navigation);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view1}>
        <View style={styles.view3}>
          <View style={styles.view4} />
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.title}>RedBridge</Text>
        <Input title="Username" onChange={text => setUsername(text)} />

        <Input
          title="Password"
          // isSecureText={true}
          onChange={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.actionButton} onPress={() => handleLogin()}>
      <Text style={styles.actionButtonText}>{'Login'}{!isLoading ? '' : <ActivityIndicator/>}</Text>
    </TouchableOpacity>

        <Prompt
          prompt="Forgot password?"
          action="Request"
          onPress={handleResetPassword}
        />
        <Prompt prompt="New user?" action="Sign Up" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
