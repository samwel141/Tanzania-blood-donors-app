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

const RequestPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = () => {
    console.log('Request password');
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
        <Text style={styles.title}>Request Password</Text>
        <Text style={styles.infoText}>
          Please enter your email address to request a password reset link.
        </Text>
        <Input title="Token" onChange={setToken} />
        <Input title="New Password" onChange={setNewPassword} />
        <Input title="Confirm New Password" onChange={setConfirmPassword} />
        {/* <Button title="Request Reset Link" onPress={handleResetPassword} /> */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleResetPassword}>
          <Text style={styles.actionButtonText}>Request Reset Link</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RequestPassword;
