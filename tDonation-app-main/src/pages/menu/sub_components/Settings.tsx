/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Image, Switch, TouchableOpacity, View, Button, Text} from 'react-native';
import React, {useState} from 'react';

// import AppBar from '../../../shared/components/AppBar';
// import AppBar from '../../../shared/components/AppBar';
// import Button from '../../request_delivery/components/Button';
// import Text from '../../../shared/components/Text';
// import PaymentDetail from './PaymentDetail';
import Picker from '../../auth/components/Picker';
import images from '../../../shared/utils/images';
// import styles from './styles';
import styles from './style';
import utils from '../../../shared/navigation/utils';

const Settings = (props: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showPaymentDetail, setShowPaymentDetail] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);
  const SUPPORTED_LANGUAGES = [
    {label: 'ENG', value: 'english'},
    {label: 'SWH', value: 'swahili'},
  ];
  return (
    <>
      {/* <AppBar
        title="Settings"
        safeAreaViewStyle={styles.safeAreaView}
        onPress={() => {
          utils.navigateToMenuPage(props.navigation);
        }}
      /> */}
      <View style={styles.personalDetailsContainerView}>
        <View style={{...styles.personalDetailsPrimaryView, ...{padding: 15}}}>
          <View style={styles.settingsPushNotificationView}>
            <Text>Get push-notifications</Text>
            <Switch
              trackColor={{false: 'grey', true: 'green'}}
              thumbColor={'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.settingsSwitch}
            />
          </View>
          <View style={styles.settingsLanguageView}>
            <Text>Language</Text>
            <Picker
              id={1}
              placeholder="ENG"
              items={SUPPORTED_LANGUAGES}
              pickerButtonStyle={styles.settingsPickerButton}
              pickerIconWrapperStyle={styles.settingsPickerIconWrapper}
              pickerSelectedValueStyle={styles.settingsPickerSelectedValue}
              pickerViewStyle={styles.settingsPickerView}
            />
          </View>

          <View style={styles.settingsPaymentMethodTitleView}>
            <Text>Payment method</Text>
            <Button
            //   title="Add"
            //   touchableOpacityStyle={
            //     styles.settingsPaymentDetailsAddButtonTouchableOpacity
            //   }
            //   textStyle={styles.settingsPaymentDetailsAddButtonTextStyle}
              onPress={() => {
                console.log('Pressed');
              }}
            >Add</Button>
          </View>

          {[
            {card: 'Visa', digit: 3534, selected: false},
            {card: 'Vodacom', digit: 7289, selected: true},
            {card: 'Mastercard', digit: 3425, selected: false},
          ].map(method => (
            <TouchableOpacity
              key={method.digit}
              style={styles.settingsPaymentMethodView}
              activeOpacity={0.5}
              onPress={() => {
                setShowPaymentDetail(true);
              }}>
              <View style={styles.settingsPaymentItemView}>
                <Image
                  style={styles.settingsPaymentIconImage}
                  source={images[method.card.toLocaleLowerCase()]}
                />
                <Text style={styles.settingsPaymentDetailsText}>
                  {`${method.card}     • • • ${method.digit}`}
                </Text>
              </View>
              {method.selected ? (
                <Image
                  style={styles.settingsPaymentSelectedIcon}
                  source={images.tick}
                />
              ) : (
                <></>
              )}
              {showPaymentDetail ? (
                // <PaymentDetail
                //   visible={showPaymentDetail}
                //   onPress={setShowPaymentDetail}
                // />
                <Text>Payment</Text>
              ) : (
                <></>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

export default Settings;
