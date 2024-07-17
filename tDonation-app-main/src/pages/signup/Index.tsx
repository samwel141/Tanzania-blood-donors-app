/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

import Button from '../components/Button';
import Input from '../components/Input';
import Picker from '../components/Picker';
import Prompt from '../components/Prompt';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';
import styles from './style';
import utils from '../../shared/navigation/utils';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { RadioButton } from 'react-native-paper';
import { Alert } from 'react-native';
import { TextInput } from 'react-native';
// import {registerThunk} from '../../../state/feature/user/authentication/authThunk';
// import {AppDispatch} from '../../../state/store';

const USER_TYPES = [
  {label: 'Donor', value: 'donor'},
  {label: 'Blood Center', value: 'blood center'},
];

const SignUpPage = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch<AppDispatch>();

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (newDate: any) => {
    setShowDatePicker(false);
    setDateOfBirth(newDate);
  };

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [sex, setSex] = useState('');
  const [userType, setUserType] = useState('');
  const defaultCenterData = {
    name: '',
    username: '',
    password: '',
    address: '',
    location: '',
    region: '',
    phone: '',
    whatsapp: '',
    instagram: '',
    facebook: '',
    twitter: '',
  };

  const defaultDonorData = {
    name: '',
    username: '',
    address: '',
    location: '',
    region: '',
    phone: '',
    whatsapp: '',
    instagram: '',
    facebook: '',
    twitter: '',
  };
  const [donorformData, setDonorFormData] = useState(defaultDonorData);

  const [centerformData, setCenterFormData] = useState(defaultCenterData);

  // Alert.alert(userType);

  const handleCenterSignup = async() => {
    console.log(centerformData);
    setCenterFormData(defaultCenterData);
    try {
      const response = await fetch('https://dev-api-hazel.vercel.app/api/centers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(centerformData),
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json();
       utils.navigateToHomePage(navigation);
        Alert.alert('Success', 'Center registered successfully!', [{ text: 'OK' }]);
        utils.navigateToLoginPage(navigation);


      } else {
        const errorData = await response.json();
        console.log(errorData);
        Alert.alert('Error', `Registration failed: ${JSON.stringify(errorData)}`, [{ text: 'OK' }]);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during registration. Please try again later.', [{ text: 'OK' }]);
    }
  };


  const handleDonorSignup = async () => {
    console.log(donorformData);
    setCenterFormData(defaultDonorData);
    try {
      const response = await fetch('https://dev-api-hazel.vercel.app/api/donors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donorformData),
      });

      if (response.ok) {
        const data = await response.json();
        utils.navigateToHomePage(navigation);
        Alert.alert('Success', 'Donor registered successfully!', [{ text: 'OK' }]);
      } else {
        const errorData = await response.json();
        Alert.alert('Error', `Registration failed: ${errorData.message}`, [{ text: 'OK' }]);
      }
    } catch (error) {
      Alert.alert('Error', '5. Please try again later.', [{ text: 'OK' }]);
    }
  };


  const handleLogin = () => {
    console.log('Login');
    utils.navigateToLoginPage(navigation);
  };
  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={['left', 'right', 'bottom']}>
      <View style={styles.view1} />
      <View style={styles.view2}>
      <Picker id={1} placeholder="Account Type" items={USER_TYPES} userType={userType} setUserType={setUserType}  />
        <Text style={styles.title}>Sign Up</Text>

      {
        userType === 'donor' ? (
          <FlatList
          data={[0]}
          showsVerticalScrollIndicator={true}
          renderItem={() => (
            <View style={styles.flatListView1}>
              <Input title="Firstname" onChange={(value) =>
                      setDonorFormData((prevData) => ({ ...prevData, firstname: value }))} />
              <Input title="Middlename" onChange={(value) =>
                      setDonorFormData((prevData) => ({ ...prevData, middlename: value }))} />
              <Input title="Sirname" onChange={(value) =>
                      setDonorFormData((prevData) => ({ ...prevData, sirname: value }))} />

              <Input title="Phone number" onChange={(value) =>
                      setDonorFormData((prevData) => ({ ...prevData, phone: value }))} />
              <Input title="Email" onChange={(value) =>
                      setDonorFormData((prevData) => ({ ...prevData, email: value }))} />
             <Input title="Region" onChange={(value) =>
                      setDonorFormData((prevData) => ({ ...prevData, region: value }))} />

            <View style={styles.sex}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value="male"
                status={sex === 'male' ? 'checked' : 'unchecked'}
                onPress={() =>{setSex('male'), setDonorFormData((prevData) => ({ ...prevData, sex: 'male' }));}}
              />
              <Text>Male</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value="female"
                status={sex === 'female' ? 'checked' : 'unchecked'}
                onPress={() =>{setSex('female'), setDonorFormData((prevData) => ({ ...prevData, sex: 'female' }));}}
              />
              <Text>Female</Text>
            </View>
          </View>

             <View >
              <TouchableOpacity onPress={() => setOpen(true)}>
                <TextInput
                  style={styles.input}
                  value={dateOfBirth.toDateString()}
                  editable={false}
                />
              </TouchableOpacity>
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={() => {
                    setOpen(false);
                    setDate(date);
                    setDonorFormData((prevData) => ({ ...prevData, dateOfBirth: date.toLocaleDateString() }));
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                  />
              </View>

              <Input title="Password" showSecureTextOnFocus={true} onChange={(value) =>
                     { setDonorFormData((prevData) => ({ ...prevData, password: value })), console.log(donorformData);}} />
              {/* <Input title="Confirm password" showSecureTextOnFocus={true} /> */}
              <Button title="Sign Up Donor" onPress={handleDonorSignup} />
              <Prompt
                prompt="Have an account?"
                action="Login"
                onPress={handleLogin}
              />
            </View>
          )}
        />
        ) : userType === 'blood center' ? (
          <FlatList
          data={[0]}
          showsVerticalScrollIndicator={true}
          renderItem={() => (
            <View style={styles.flatListView2}>
              <Input title="Name" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, name: value }))} />
              <Input title="Username" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, username: value }))} />
              <Input title="Address" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, address: value }))} />
              <Input title="Location" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, location: value }))} />
              <Input title="Region" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, region: value }))} />
              <Input title="Phone" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, phone: value }))} />
              <Input title="Password" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, password: value }))}
                        showSecureTextOnFocus={true}
                        />
              <Input title="Whatsap Link (optional)" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, whatsapp: value }))} />
              <Input title="Instagram Link (optional)" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, instagram: value }))} />
              <Input title="Facebook Link (optional)" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, facebook: value }))} />
              <Input title="X.com Link (optional)" onChange={(value) =>
                        setCenterFormData((prevData) => ({ ...prevData, twitter: value }))} />
             <Button title="Sign Up" onPress={handleCenterSignup} />

              <Prompt
                prompt="Have an account?"
                action="Login"
                onPress={handleLogin}
              />
            </View>
          )}
        />
        ) : (<Text style={{textAlign: 'center'}}>Choose the type of Account</Text>)
      }


      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;
