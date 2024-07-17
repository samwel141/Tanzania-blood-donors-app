/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import utils from '../../shared/navigation/utils';
import {useNavigation} from '@react-navigation/native';
import { useScannerContext } from '../../context/scannerContext';
import Picker from './Picker';
import { useState } from 'react';
import Samples from './samples';
import { useAuth } from '../../context/AuthContext';

type SampleData = {
  sampleId: string;
  hiv: string;
  hbsAg: string;
  syphilis: string;
  bgs: string;
  hcv: string;
  [key: string]: any;
};



export default function BloodSubmit() {
    const defaultValuesMain = {
      facility_sending_sample: '',
        center: '',
        hub: '',
        sender_name: '',
      };

      const defaultValuesSample = {
        sampleId: '',
        other: '',
      };

  const VALUES = [
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
  ];

  const { control: mainControl, handleSubmit: handleMain, reset: resetMAin, formState: { errors: errorsMain } } = useForm({ defaultValues: defaultValuesMain });
  const { control: sampleControl, handleSubmit: handleSample, reset: resetSample, formState: { errors: errorsSample } } = useForm({ defaultValues: defaultValuesSample });
  const [step, setStep] = React.useState(1);

  const [hiv, setHIV] = useState('');
  const [hbsAg, setHbsAg] = useState('');
  const [syphilis, setSyphilis] = useState('');
  const [bgs, setBgs] = useState('');
  const [hcv, setHCV] = useState('');
  const [ id, setId ] = useState('');
  const [submittedSamples, setSubmittedSamples] = useState<SampleData[]>([]);

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
 const { sampleID, setSampleID } = useScannerContext();
  const navigation = useNavigation();

  const handleScanner = () => {
    utils.navigateToBarCodeScannerPage(navigation);
  };

  const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

  const { user } = useAuth();
  const onSubmit = async (data: any) => {
    console.log(data);
    const formattedDate = formatDate(new Date());
    data.center_id = user._id;
    data.dispatch_date = formattedDate;
    data.samples = submittedSamples.map(sample => ({
      sample_id: sample.sampleId,
      hiv: sample.hiv,
      hbsag: sample.hbsAg,
      syphilis: sample.syphilis,
      bgs: sample.bgs,
      hcv: sample.hcv,
      other: sample.other
  }));
    data.created_at = formatDate(new Date());
    data.updated_at = formatDate(new Date());
    console.log(data);

  try {
    const response = await fetch('https://dev-api-hazel.vercel.app/api/submit_blood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
      'Blood Samples has been submitted successfully!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
  } catch (error) {
    console.error('Error:', error);
  }

  };

  const onSubmitSample = (data: any) => {
    console.log(data);
    const { sampleId, ...restData } = data;

    const sampleData = {
        ...restData,
        sampleId: sampleID,
        hiv,
        hbsAg,
        syphilis,
        bgs,
        hcv,
    };

    setSubmittedSamples(prevSamples => [...prevSamples.filter(sample => sample.sampleId !== sampleID), sampleData]);
    setSampleID('sampleID');
    console.log('Submitted Samples:', submittedSamples);
};


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blood Submit</Text>

      {step === 1 && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Step 1: Basic Info</Text>
          <Text style={styles.formLabel}>Facility sending sample</Text>
          <Controller
            control={mainControl}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="e.g M/Nyala"
              />
            )}
            name="facility_sending_sample"
            rules={{ required: true }}
          />

        <Text style={styles.formLabel}>Site/Center</Text>
          <Controller
            control={mainControl}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="e.g Mwananyamala"
              />
            )}
            name="center"
            rules={{ required: true }}
          />

        <Text style={styles.formLabel}>Hub</Text>
          <Controller
            control={mainControl}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="e.g Mwananyamala Lab"
              />
            )}
            name="hub"
            rules={{ required: true }}
          />

       <Text style={styles.formLabel}>Sender's Name</Text>
          <Controller
            control={mainControl}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="e.g Rose Enos"
              />
            )}
            name="sender_name"
            rules={{ required: true }}
          />

     <Text style={styles.formLabel}>Dispatch Date</Text>

     <Text style={styles.formDate}>{date.toLocaleDateString().toString()}</Text>
     <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
      )}
      {step === 2 && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Step 2: Samples</Text>
          <Controller
            control={sampleControl}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={sampleID}
                placeholder="Sample ID"
              />
            )}
            name="sampleId"
          />
           <Button title="Scan Barcode" onPress={()=> handleScanner()} />
            { sampleID !== 'sampleID' &&
              (<>
           <View style={styles.outerContainer}>
           <View style={styles.rowContainer}>
           <View style={styles.viewContainer}>
           <Text style={styles.formLabel}>HIV</Text>
           <Picker
              id={1}
              placeholder="HIV"
              items={VALUES}
              state={hiv}
              setState={setHIV}
              />
            </View>

            <View style={styles.viewContainer}>
           <Text style={styles.formLabel}>HBsAg</Text>
           <Picker
               id={2}
               placeholder="HBsAg"
               items={VALUES}
               state={hbsAg}
               setState={setHbsAg}
                />
            </View>

            <View style={styles.viewContainer}>
           <Text style={styles.formLabel}>Syphilis</Text>
           <Picker
               id={3}
               placeholder="Syphilis"
               items={VALUES}
               state={syphilis}
               setState={setSyphilis}
                />
            </View>
            </View>
            </View>


           <View style={styles.outerContainer}>
           <View style={styles.rowContainer}>
           <View style={styles.viewContainer}>
           <Text style={styles.formLabel}>BGS</Text>
           <Picker
               id={4}
               placeholder="BGS"
               items={VALUES}
               state={bgs}
               setState={setBgs}
                />
            </View>

            <View style={styles.viewContainer}>
           <Text style={styles.formLabel}>HCV</Text>
           <Picker
               id={5}
               placeholder="HCV"
               items={VALUES}
               state={hcv}
               setState={setHCV}
                />
            </View>

            <View style={styles.viewContainer}>
           <Text style={styles.formLabel}>Other</Text>
           <Controller
            control={sampleControl}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.other}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Others"
              />
            )}
            name="other"
          />
            </View>
            </View>
            </View>


              </>
            )}
        </View>
      )}

      {
        submittedSamples.length > 0 && step === 2 ? (
          <View>
          <Samples data={submittedSamples}/>
        </View>
        ) : (
          <></>
        )
      }

      <View style={styles.buttonsContainer}>
       {
        step === 2 ? (
            <>
              <TouchableOpacity style={styles.actionButton} onPress={() => { setStep(1); } }>
                <Text style={styles.actionButtonText}>Prev</Text>
              </TouchableOpacity>
            {
               sampleID !== 'sampleID' ? (
              <TouchableOpacity style={styles.actionButton} onPress={() => { console.log('Clicked'); handleSample(onSubmitSample)(); }} >
                <Text style={styles.actionButtonText}>Add</Text>
             </TouchableOpacity>
              ) : (<></>)
            }
              </>
        ) : (
          <TouchableOpacity style={styles.actionButton}  onPress={() => {
                resetMAin({
                   facility_sending_sample: '',
                   center: '',
                   hub: '',
                   sender_name: '',
                });
               }}>
                <Text style={styles.actionButtonText}>Reset</Text>
              </TouchableOpacity>
        )
       }
    
         <TouchableOpacity style={styles.actionButton} onPress={() => {
            if (step === 1) {
              setStep(2);
            } else {
              // handleMain(onSubmit);
              console.log('Clicked'); handleMain(onSubmit)();
            }
        }}>
                <Text style={styles.actionButtonText}>{step === 1 ? 'Next' : 'Submit'}</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
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
rowContainer: {
  flexDirection: 'row',
},
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
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
  input: {
    backgroundColor: '#F0F0F0',
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
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
