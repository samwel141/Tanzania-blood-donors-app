/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { Button, Dialog } from '@rneui/themed';
import styles from './style';
import { useScannerContext } from '../../context/scannerContext';
import utils from '../../shared/navigation/utils';
import { useNavigation } from '@react-navigation/native';


import {
         useCameraPermission,
         useCameraDevice,
         Camera,
         useCodeScanner,
        } from 'react-native-vision-camera';



// import { RNCamera } from 'react-native-camera';

function BarcodeScan({ }) {
    const { hasPermission, requestPermission } = useCameraPermission();
    const device = useCameraDevice('back');
    // const device: any = useCameraDevice('external');

    const navigation = useNavigation();

    const { setSampleID } = useScannerContext();

    const [barValue, setBarValue] = useState<string>('');
    // const [barType, setBarType] = useState(null);
    // const [barType, setBarType] = useState<string>('');
    // const [flash, setFlash] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    // function readBarcode(event: BarCodeReadEvent): void {
    //     throw new Error('Function not implemented.');
    // }

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes: any) => {
          console.log(`Scanned ${codes.length} codes!`);
          console.log(`Scanned ${codes[0].value} code!`);
          setSampleID(codes[0].value);
          utils.navigateToBloodSubmitPage(navigation);
        },
      });


    React.useEffect(() => {
        requestPermission();
    }, []);

    if (device === null){
        return (
            <div>
                <Text>Device not Found</Text>
            </div>
        );
    }



    return (
    <View style={styles.container}>
        {/* <RNCamera
            ref={(ref: any) => {this.camera = ref;}}
            captureAudio={false}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            // defaultTouchToFocus
            flashMode={flash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
            mirrorImage={false}
            onBarCodeRead={readBarcode}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes, barcodes.length);
                if (barcodes.length > 0){
                    setBarValue(barcodes[0].data);
                    // setBarType(barcodes[0].format);
                    setShowDialog(true);
                }
            }}
            style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
            }}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
        /> */}
        {/* <Button
            title={`Flash ${flash ? 'OFF' : 'ON'}`}
            onPress={() => setFlash(!flash)}
            icon={{ ...styles.iconButtonHome, size:25, name: 'flash' }}
            iconContainerStyle={styles.iconButtonHomeContainer}
            titleStyle={{ ...styles.titleButtonHome, fontSize: 20 }}
            buttonStyle={{...styles.buttonHome, height: 50}}
            containerStyle={{...styles.buttonHomeContainer, marginTop:20, marginBottom:10}}
        /> */}


 <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      codeScanner={codeScanner}
      resizeMode="contain"
      isActive={true}
    />


        {/* <Dialog
        isVisible={showDialog}
        onBackdropPress={() => setShowDialog(!showDialog)}>
            <Dialog.Title titleStyle={{color:'#000', fontSize:25}} title="Scanned Barcode:"/>
            <Text style={{color:'#000', fontSize: 20}}>
                {`Data: ${barValue}\nFormat: ${barType}`}
            </Text>
            <Dialog.Actions>
                <Dialog.Button title="Scan Again" onPress={() => {
                    setShowDialog(false);
                }}/>
            </Dialog.Actions>
        </Dialog> */}
    </View>
    );
}

export default BarcodeScan;
