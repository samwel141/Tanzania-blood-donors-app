/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import FAQs from '../../pages/menu/sub_components/FAQs';
import Home from '../../pages/home/Index';
import Legal from '../../pages/menu/sub_components/Legal';
import BloodSubmit from '../../pages/submit_blood/submit_blood';
import Login from '../../pages/auth/login/Index';
import BarcodeScan from '../../pages/barcode_scanner';
import RequestBlood from '../../pages/request_blood/request_blood';
import Menu from '../../pages/menu/Index';
import {NavigationContainer} from '@react-navigation/native';
import {PAGES} from '../utils/constants';
import PersonalDetails from '../../pages/menu/sub_components/PersonalDetails';
import React from 'react';
import Settings from '../../pages/menu/sub_components/Settings';
import SignUp from '../../pages/auth/signup/Index';
import RequestPasswordReset from '../../pages/auth/reset_password_request/Index';
import RequestPassword from '../../pages/auth/reset_password/Index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DonorDetails from '../../pages/donor_history/donor_details';
import DonorHistory from '../../pages/donor_history/donor_history';

const Stack = createNativeStackNavigator();
import { useAuth } from '../../context/AuthContext';
import SignUpPage from '../../pages/signup/Index';
import DonorUsage from '../../pages/donor_history/donorUsage';
import DonorDonation from '../../pages/donor_history/donorDonation';
export default function Navigation() {
const { isLogedin } = useAuth();

  console.log('Is Authenticated: ', isLogedin);
  return (
    <NavigationContainer>
    {!isLogedin ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={PAGES.login} component={Login} />
          <Stack.Screen name={PAGES.signup} component={SignUp} />
          <Stack.Screen
            name={PAGES.resetPasswordRequest}
            component={RequestPasswordReset}
          />
          <Stack.Screen
            name={PAGES.resetPassword}
            component={RequestPassword}
          />
         </Stack.Navigator>
     ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={PAGES.home} component={Home} />
         <Stack.Screen name={PAGES.bloodSubmit} component={BloodSubmit} />
           <Stack.Screen name={PAGES.barCode} component={BarcodeScan} />
           <Stack.Screen name={PAGES.requestBlood} component={RequestBlood} />
           <Stack.Screen name={PAGES.signuppage} component={SignUpPage} />
           <Stack.Screen name="DonorHistory" component={DonorHistory} options={{ title: 'Donors' }} />
        <Stack.Screen name="DonorDetails" component={DonorDetails} options={{ title: 'Donor Details' }} />
        <Stack.Screen name="DonorUsage" component={DonorUsage} options={{ title: 'Donor Usage' }} />
        <Stack.Screen name="DonorDonation" component={DonorDonation} options={{ title: 'Donor Donation' }} />
          <Stack.Screen name={PAGES.menu} component={Menu} />
          <Stack.Screen name={PAGES.settings} component={Settings} />
          <Stack.Screen name={PAGES.legal} component={Legal} />
          <Stack.Screen name={PAGES.faqs} component={FAQs} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
