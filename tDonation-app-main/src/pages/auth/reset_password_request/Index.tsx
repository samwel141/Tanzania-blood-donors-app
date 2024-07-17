/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Prompt from '../components/Prompt';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';
import {View, Alert} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import utils from '../../../shared/navigation/utils';
import {TouchableOpacity} from 'react-native';

const RequestPasswordReset = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleResetPasswordRequest = () => {
    console.log('Request password reset');
    utils.navigateToResetPassword(navigation);
  };

  const handleLogin = () => {
    utils.navigateToLoginPage(navigation);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view1}>
        <View style={styles.view3}>
          <View style={styles.view4} />
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.title}>Request Reset Password</Text>
        <Text style={styles.infoText}>
          Please enter your email address to request a password reset link.
        </Text>
        <Input title="Email" onChange={setEmail} />
        {/* <Button
          title="Request Reset Link"
          onPress={handleResetPasswordRequest}
        /> */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleResetPasswordRequest}>
          <Text style={styles.actionButtonText}>Request Reset Link</Text>
        </TouchableOpacity>
        <Prompt prompt="New user?" action="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default RequestPasswordReset;
