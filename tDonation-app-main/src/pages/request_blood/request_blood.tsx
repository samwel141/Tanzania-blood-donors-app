/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import utils from '../../shared/navigation/utils';
// import { useNavigation } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { useScannerContext } from '../../context/scannerContext';
// import Picker from './Picker';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import RNFS from 'react-native-fs';
import { useAuth } from '../../context/AuthContext';
// import Samples from './samples';


export default function RequestBlood() {
    const defaultValues = {
        a_pos_stock_adult_whole: '',
        a_pos_stock_pediatric_whole: '',
        a_pos_requested_adult_whole: '',
        a_pos_requested_pediatric_whole: '',
        a_neg_stock_adult_whole: '',
        a_neg_stock_pediatric_whole: '',
        a_neg_requested_adult_whole: '',
        a_neg_requested_pediatric_whole: '',
        b_pos_stock_adult_whole: '',
        b_pos_stock_pediatric_whole: '',
        b_pos_requested_adult_whole: '',
        b_pos_requested_pediatric_whole: '',
        b_neg_stock_adult_whole: '',
        b_neg_stock_pediatric_whole: '',
        b_neg_requested_adult_whole: '',
        b_neg_requested_pediatric_whole: '',
        ab_pos_stock_adult_whole: '',
        ab_pos_stock_pediatric_whole: '',
        ab_pos_requested_adult_whole: '',
        ab_pos_requested_pediatric_whole: '',
        ab_neg_stock_adult_whole: '',
        ab_neg_stock_pediatric_whole: '',
        ab_neg_requested_adult_whole: '',
        ab_neg_requested_pediatric_whole: '',
        o_pos_stock_adult_whole: '',
        o_pos_stock_pediatric_whole: '',
        o_pos_requested_adult_whole: '',
        o_pos_requested_pediatric_whole: '',
        o_neg_stock_adult_whole: '',
        o_neg_stock_pediatric_whole: '',
        o_neg_requested_adult_whole: '',
        o_neg_requested_pediatric_whole: '',
        a_pos_stock_adult_prc: '',
        a_pos_stock_pediatric_prc: '',
        a_pos_requested_adult_prc: '',
        a_pos_requested_pediatric_prc: '',
        a_neg_stock_adult_prc: '',
        a_neg_stock_pediatric_prc: '',
        a_neg_requested_adult_prc: '',
        a_neg_requested_pediatric_prc: '',
        b_pos_stock_adult_prc: '',
        b_pos_stock_pediatric_prc: '',
        b_pos_requested_adult_prc: '',
        b_pos_requested_pediatric_prc: '',
        b_neg_stock_adult_prc: '',
        b_neg_stock_pediatric_prc: '',
        b_neg_requested_adult_prc: '',
        b_neg_requested_pediatric_prc: '',
        ab_pos_stock_adult_prc: '',
        ab_pos_stock_pediatric_prc: '',
        ab_pos_requested_adult_prc: '',
        ab_pos_requested_pediatric_prc: '',
        ab_neg_stock_adult_prc: '',
        ab_neg_stock_pediatric_prc: '',
        ab_neg_requested_adult_prc: '',
        ab_neg_requested_pediatric_prc: '',
        o_pos_stock_adult_prc: '',
        o_pos_stock_pediatric_prc: '',
        o_pos_requested_adult_prc: '',
        o_pos_requested_pediatric_prc: '',
        o_neg_stock_adult_prc: '',
        o_neg_stock_pediatric_prc: '',
        o_neg_requested_adult_prc: '',
        o_neg_requested_pediatric_prc: '',
        a_pos_stock_adult_ffp: '',
        a_pos_stock_pediatric_ffp: '',
        a_pos_requested_adult_ffp: '',
        a_pos_requested_pediatric_ffp: '',
        a_neg_stock_adult_ffp: '',
        a_neg_stock_pediatric_ffp: '',
        a_neg_requested_adult_ffp: '',
        a_neg_requested_pediatric_ffp: '',
        b_pos_stock_adult_ffp: '',
        b_pos_stock_pediatric_ffp: '',
        b_pos_requested_adult_ffp: '',
        b_pos_requested_pediatric_ffp: '',
        b_neg_stock_adult_ffp: '',
        b_neg_stock_pediatric_ffp: '',
        b_neg_requested_adult_ffp: '',
        b_neg_requested_pediatric_ffp: '',
        ab_pos_stock_adult_ffp: '',
        ab_pos_stock_pediatric_ffp: '',
        ab_pos_requested_adult_ffp: '',
        ab_pos_requested_pediatric_ffp: '',
        ab_neg_stock_adult_ffp: '',
        ab_neg_stock_pediatric_ffp: '',
        ab_neg_requested_adult_ffp: '',
        ab_neg_requested_pediatric_ffp: '',
        o_pos_stock_adult_ffp: '',
        o_pos_stock_pediatric_ffp: '',
        o_pos_requested_adult_ffp: '',
        o_pos_requested_pediatric_ffp: '',
        o_neg_stock_adult_ffp: '',
        o_neg_stock_pediatric_ffp: '',
        o_neg_requested_adult_ffp: '',
        o_neg_requested_pediatric_ffp: '',
        a_pos_stock_adult_plt: '',
        a_pos_stock_pediatric_plt: '',
        a_pos_requested_adult_plt: '',
        a_pos_requested_pediatric_plt: '',
        a_neg_stock_adult_plt: '',
        a_neg_stock_pediatric_plt: '',
        a_neg_requested_adult_plt: '',
        a_neg_requested_pediatric_plt: '',
        b_pos_stock_adult_plt: '',
        b_pos_stock_pediatric_plt: '',
        b_pos_requested_adult_plt: '',
        b_pos_requested_pediatric_plt: '',
        b_neg_stock_adult_plt: '',
        b_neg_stock_pediatric_plt: '',
        b_neg_requested_adult_plt: '',
        b_neg_requested_pediatric_plt: '',
        ab_pos_stock_adult_plt: '',
        ab_pos_stock_pediatric_plt: '',
        ab_pos_requested_adult_plt: '',
        ab_pos_requested_pediatric_plt: '',
        ab_neg_stock_adult_plt: '',
        ab_neg_stock_pediatric_plt: '',
        ab_neg_requested_adult_plt: '',
        ab_neg_requested_pediatric_plt: '',
        o_pos_stock_adult_plt: '',
        o_pos_stock_pediatric_plt: '',
        o_pos_requested_adult_plt: '',
        o_pos_requested_pediatric_plt: '',
        o_neg_stock_adult_plt: '',
        o_neg_stock_pediatric_plt: '',
        o_neg_requested_adult_plt: '',
        o_neg_requested_pediatric_plt: '',
        total_requested: '',
        total_expired: '',
        name_of_requester: '',
        designation_of_requester: '',
        name_of_approver: '',
        designation_of_approver: ''
      };

  const { control, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });
  const [step, setStep] = React.useState(1);



  const [date_requested, setDateRequested] = React.useState(new Date());
  const [date_received, setDateReceived] = React.useState(new Date());
  const [openRequested, setOpenRequested] = React.useState(false);
  const [openReceived, setOpenReceived] = React.useState(false);
  const navigation = useNavigation();

 const { user } = useAuth();
 console.log(user);



const transformData = (data) => {
  type StockDetails = {
    adult: number;
    pediatric: number;
  };

  type BloodProduct = {
    stock: StockDetails;
    requested: StockDetails;
    issued: StockDetails;
    total: number;
    remarks: string;
  };

  type ProductTypes = 'whole_blood' | 'prc' | 'ffp' | 'plt';

  type DefaultValues = {
    center_id: string;
    basic_info: {
      total_requested: number;
      total_expired: number;
      name_of_requester: any;
      designation_of_requester: any;
      name_of_approver: any;
      designation_of_approver: any;
    };
    whole_blood: Record<string, BloodProduct>;
    prc: Record<string, BloodProduct>;
    ffp: Record<string, BloodProduct>;
    plt: Record<string, BloodProduct>;
  };

  const bloodTypes = ['a_pos', 'a_neg', 'b_pos', 'b_neg', 'ab_pos', 'ab_neg', 'o_pos', 'o_neg'];
  const productTypes: ProductTypes[] = ['whole_blood', 'prc', 'ffp', 'plt'];

  const result: DefaultValues = {
    center_id: user._id,
    basic_info: {
      total_requested: data.total_requested ? Number(data.total_requested) : 0,
      total_expired: data.total_expired ? Number(data.total_expired) : 0,
      name_of_requester: data.name_of_requester || '',
      designation_of_requester: data.designation_of_requester || '',
      name_of_approver: data.name_of_approver || '',
      designation_of_approver: data.designation_of_approver || '',
    },
    whole_blood: {},
    prc: {},
    ffp: {},
    plt: {}
  };


  bloodTypes.forEach((bloodType) => {
    productTypes.forEach((productType) => {
      (result[productType] as Record<string, BloodProduct>)[bloodType] = {
        stock: {
          adult: data[`${bloodType}_stock_adult_${productType}`]
            ? Number(data[`${bloodType}_stock_adult_${productType}`])
            : 0,
          pediatric: data[`${bloodType}_stock_pediatric_${productType}`]
            ? Number(data[`${bloodType}_stock_pediatric_${productType}`])
            : 0,
        },
        requested: {
          adult: data[`${bloodType}_requested_adult_${productType}`]
            ? Number(data[`${bloodType}_requested_adult_${productType}`])
            : 0,
          pediatric: data[`${bloodType}_requested_pediatric_${productType}`]
            ? Number(data[`${bloodType}_requested_pediatric_${productType}`])
            : 0,
        },
        issued: {
          adult: 0,
          pediatric: 0, 
        },
        total: 0, 
        remarks: '',
      };
    });
  });

  return result;
};




const submitData = async (data) => {
  const payload = transformData(data);


  try {
    const response = await fetch('https://dev-api-hazel.vercel.app/api/request_blood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(`An error occured: Status ${response.status}`);
    }

    const responseData = await response.json();
    utils.navigateToHomePage(navigation);
    console.log('Success:', responseData);
    Alert.alert(
      'Success',
      'Request has been sent successfully!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
  } catch (error) {
    console.error('Error:', error);
  }
};


const onSubmit = async (data) => {
  submitData(data);
};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <View style={styles.container}>
      <Text style={styles.header}>Blood Request</Text>

      {step === 1 && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Step 1: Whole Blood</Text>


     <View style={styles.fixedHeightSection}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ================A-Blood Group============================= */}
          <View style={styles.container}>
          <Text style={styles.formLabel}>A-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_stock_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_stock_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_requested_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_requested_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>A-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_stock_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_stock_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_requested_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_requested_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>


 {/* ================B-Blood Group============================= */}
        <View style={styles.container}>
          <Text style={styles.formLabel}>B-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_stock_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_stock_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_requested_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_requested_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>B-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_stock_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_stock_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_requested_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_requested_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



         {/* ================AB-Blood Group============================= */}

         <View style={styles.container}>
          <Text style={styles.formLabel}>AB-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_stock_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_stock_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_requested_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_requested_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>AB-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_stock_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_stock_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_requested_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_requested_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>


       {/* ================O-Blood Group============================= */}



         <View style={styles.container}>
          <Text style={styles.formLabel}>O-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_stock_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_stock_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_requested_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_requested_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>O-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_requested_adult_whole"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_requested_pediatric_whole"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



 </ScrollView>
 </View>
 </View>
      )}




































       {/* =============================PRC=================================== */}

      {step === 2 && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Step 2: PRC</Text>
     <View style={styles.fixedHeightSection}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ================A-Blood Group============================= */}
          <View style={styles.container}>
          <Text style={styles.formLabel}>A-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_stock_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_stock_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_requested_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_requested_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>A-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_stock_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_stock_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_requested_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_requested_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>


 {/* ================B-Blood Group============================= */}
        <View style={styles.container}>
          <Text style={styles.formLabel}>B-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_stock_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_stock_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_requested_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_requested_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>B-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_stock_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_stock_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_requested_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_requested_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



         {/* ================AB-Blood Group============================= */}

         <View style={styles.container}>
          <Text style={styles.formLabel}>AB-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_stock_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_stock_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_requested_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_requested_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>AB-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_stock_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_stock_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_requested_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_requested_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>


       {/* ================O-Blood Group============================= */}



         <View style={styles.container}>
          <Text style={styles.formLabel}>O-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_stock_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_stock_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_requested_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_requested_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>O-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_requested_adult_prc"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_requested_pediatric_prc"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



 </ScrollView>
 </View>

            </View>
            )}




































       {/* =============================FFP=================================== */}

     {step === 3 && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Step 3: FFP</Text>
          <View style={styles.fixedHeightSection}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ================A-Blood Group============================= */}
          <View style={styles.container}>
          <Text style={styles.formLabel}>A-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_stock_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_stock_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_requested_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_requested_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>A-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_stock_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_stock_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_requested_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_requested_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>


 {/* ================B-Blood Group============================= */}
        <View style={styles.container}>
          <Text style={styles.formLabel}>B-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_stock_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_stock_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_requested_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_requested_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>B-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_stock_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_stock_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_requested_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_requested_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



         {/* ================AB-Blood Group============================= */}

         <View style={styles.container}>
          <Text style={styles.formLabel}>AB-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_stock_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_stock_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_requested_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_requested_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>AB-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_stock_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_stock_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_requested_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_requested_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>


       {/* ================O-Blood Group============================= */}



         <View style={styles.container}>
          <Text style={styles.formLabel}>O-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_stock_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_stock_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_requested_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_requested_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>O-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_requested_adult_ffp"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_requested_pediatric_ffp"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        </ScrollView>
        </View>
            </View>
   )}













































       {/* =============================PLT=================================== */}


     {step === 4 && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Step 4: PLT</Text>
          <View style={styles.fixedHeightSection}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ================A-Blood Group============================= */}
          <View style={styles.container}>
          <Text style={styles.formLabel}>A-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_stock_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_requested_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_pos_requested_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>A-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_stock_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_requested_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="a_neg_requested_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>


 {/* ================B-Blood Group============================= */}
        <View style={styles.container}>
          <Text style={styles.formLabel}>B-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_stock_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_requested_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_pos_requested_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>B-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_stock_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_requested_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="b_neg_requested_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



         {/* ================AB-Blood Group============================= */}

         <View style={styles.container}>
          <Text style={styles.formLabel}>AB-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_stock_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_requested_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_pos_requested_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>AB-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_stock_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_requested_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="ab_neg_requested_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>


       {/* ================O-Blood Group============================= */}



         <View style={styles.container}>
          <Text style={styles.formLabel}>O-Positive</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_stock_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_requested_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_pos_requested_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>



        <View style={styles.container}>
          <Text style={styles.formLabel}>O-Negative</Text>
          <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>In Stock:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>


        <View style={styles.rowContainer}>
          <Text style={styles.formLabel}>Requested:</Text>
          <View style={styles.unit}>
          <Text style={styles.formLabel}>Adult</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_requested_adult_plt"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit}>
          <Text style={styles.formLabel}>Pediatric</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_requested_pediatric_plt"
            rules={{ required: false }}
          />
        </View>
        </View>
        </View>
        </ScrollView>
        </View>
     </View>
 )}











































      {/* =============================BASIC INFO=================================== */}


       {step === 5 && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Step 5: Basic Info</Text>
          <View style={styles.fixedHeightSection}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Total Unit Requested</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="total_requested"
            rules={{ required: false }}
          />
        </View>


        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Total Unit Requested</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="total_expired"
            rules={{ required: false }}
          />
        </View>

        <Text style={styles.formLabel}>Requested By:</Text>
        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Name</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="name_of_requester"
            rules={{ required: false }}
          />
        </View>

          
        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Designation</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="designation_of_requester"
            rules={{ required: false }}
          />
        </View>

        <Text style={styles.formLabel}>Approved By MOI/Assigned Officer:</Text>
        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Name</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="name_of_approver"
            rules={{ required: false }}
          />
        </View>

        <Text style={styles.formLabel}>Designation</Text>
        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Name</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="designation_of_approver"
            rules={{ required: false }}
          />
        </View>


        <Text style={styles.formLabel}>COLD CHAIN MANAGEMENT</Text>
        <View style={styles.unit_info}>
        <Text style={styles.formLabel}>Date of previous blood unit requested</Text>
        <TouchableOpacity onPress={() => setOpenRequested(true)}>
        <Text style={styles.formDate}>{date_requested.toLocaleDateString().toString()}</Text>
        </TouchableOpacity>
        {/* <Button title="Open" onPress={() => setOpenRequested(true)} /> */}
        <DatePicker
            modal
            mode="date"
            open={openRequested}
            date={date_requested}
            onConfirm={(date_requested) => {
            setOpenRequested(false);
            setDateRequested(date_requested);
            }}
            onCancel={() => {
            setOpenRequested(false);
            }}
        />

      <View style={styles.separator}></View>

      <Text style={styles.formLabel}>Date previous blood unit received</Text>
       <TouchableOpacity onPress={() => setOpenReceived(true)}>
        <Text style={styles.formDate}>{date_requested.toLocaleDateString().toString()}</Text>
        </TouchableOpacity>
        {/* <Button title="Open" onPress={() => setOpenReceived(true)} /> */}
        <DatePicker
            modal
            mode="date"
            open={openReceived}
            date={date_received}
            onConfirm={(date_received) => {
            setOpenRequested(false);
            setDateRequested(date_received);
            }}
            onCancel={() => {
            setOpenReceived(false);
            }}
        />


      <View style={styles.separator}></View>
      <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Temperature when received</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
                keyboardType="numeric"
              />
            )}
            name="o_neg_stock_pediatric_plt"
            rules={{ required: false }}
          />
        </View>

     <Text style={styles.formLabel}>Time when previous unit received</Text>
     <TouchableOpacity>
     <Text style={styles.formDate}>{date_requested.toLocaleDateString().toString()}</Text>
     </TouchableOpacity>
        {/* <Button title="Open" onPress={() => setOpenReceived(true)} /> */}
        <DatePicker
            modal
            open={openReceived}
            date={date_received}
            onConfirm={(date_received) => {
            setOpenRequested(false);
            setDateRequested(date_received);
            }}
            onCancel={() => {
            setOpenReceived(false);
            }}
        />
    <View style={styles.separator}></View>
       <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Mode of Transport</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="transport"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Reporting Officer:</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="name_of_reporter"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Reporting Officer: Designation</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="designation_of_reporter"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Verified By:</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="verifier"
            rules={{ required: false }}
          />
        </View>

        <View style={styles.unit_info}>
          <Text style={styles.formLabel}>Verified By: Designation</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input_info}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="..."
              />
            )}
            name="designation_of_verifier"
            rules={{ required: false }}
          />
        </View>



        </View>

    </ScrollView>
    </View>
    </View>

 )}


      <View style={styles.buttonsContainer}>
       {
        step !== 1 ? (
          //   <Button
          //   title="Prev"
          //   onPress={() => {
          //    setStep(step - 1);
          //   }}
          // />
          <TouchableOpacity style={styles.actionButton}  onPress={() => {setStep(step - 1); }}>
          <Text style={styles.actionButtonText}>Prev</Text>
        </TouchableOpacity>
        ) : (
          //   <Button
          //   title="Reset"
          //   onPress={() => {
          //     reset({});
          //   }}
          // />
        <TouchableOpacity style={styles.actionButton}   onPress={() => {reset({});}}>
          <Text style={styles.actionButtonText}>Prev</Text>
        </TouchableOpacity>
        )
       }
        {/* <Button
          title={step !== 5 ? 'Next' : 'Submit'}
          onPress={handleSubmit(() => {
            if (step !== 5) {
              setStep(step + 1);
              console.log(step);
            } else {
              onSubmit;
            }
          })}
        /> */}
       { step !== 5 ? (
      <TouchableOpacity
         style={styles.actionButton}
         onPress={() => {
        if (step !== 5) {
          setStep(step + 1);
        } else {
          console.log('Submit');
          handleSubmit(onSubmit);
        }
       }}
      >
  <Text style={styles.actionButtonText}>{step !== 5 ? 'Next' : 'Submit'}</Text>
</TouchableOpacity>
        ) : (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleSubmit(onSubmit)}
       >
    <Text style={styles.actionButtonText}>{step !== 5 ? 'Next' : 'Submit'}</Text>
 </TouchableOpacity>
        )
        }
      </View>
    </View>
</KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
container: {
    padding: 20,
    backgroundColor: '#F8F8F8',
},
unit: {
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 10,

},
unit_info: {
  marginBottom: 2,
},
rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
},
input: {
    backgroundColor: '#F0F0F0',
    height: 40,
    width: 80,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  input_info: {
    backgroundColor: '#F0F0F0',
    height: 40,
    width: 270,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  fixedHeightSection: {
    height: 480,
    overflow: 'scroll',
  },
  separator: {
    height: 15,
    marginBottom: 2,
  },


















  viewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 17,
},
outerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#703434',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  activeStep: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  stepText: {
    marginLeft: 5,
    color: '#888888',
  },
  form: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  formLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#4D4646',
  },
  formDate: {
    fontSize: 15,
    // fontWeight: 'bold',
    marginBottom: 6,
    color: '#4D4646',
    textAlign: 'center',
  },

  other: {
    backgroundColor: '#F0F0F0',
    height: 43,
    width: 70,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginLeft: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
