/* eslint-disable prettier/prettier */
import Card from './components/Card';
import React from 'react';
import {View} from 'react-native';
import images from '../../shared/utils/images';
// import styles from './styles';
import styles from './style';
import utils from '../../shared/navigation/utils';
import { useNavigation } from '@react-navigation/native';

const PrimaryFeatures = (props: any) => {

  const navigation = useNavigation();
  return (
    <View style={styles.parentView}>
      <View style={styles.childView}>
        <Card
          title={'Submit Blood'}
          summary={'Report blood donation to NBTS'}
          onPress={() => {
            utils.navigateToBloodSubmitPage(props.navigation);
          }}
          icon={images.submit}
          titleStyle={styles.title}
          summaryStyle={styles.summary}
          touchableOpacityStyle={styles.callToActionCardTouchableOpacity}
        />
        <Card
          title={'Request Blood'}
          summary={'Send blood request to NBTS'}
          onPress={() => {
            utils.navigateToBloodRequestPage(props.navigation);
          }}
          icon={images.request}
          touchableOpacityStyle={styles.cardTouchableOpacity}
        />
      </View>
      <View style={styles.childView}>
        <Card
          title={'Donors History'}
          summary={'Activity of Donors'}
          onPress={() => {
            navigation.navigate('DonorHistory');
           }}
          icon={images.clock}
          touchableOpacityStyle={styles.cardTouchableOpacity}
        />
        <Card
          title={'Register Donor'}
          summary={'Found Donor with no account?'}
          onPress={() => {
            utils.navigateToSignUpPage1(navigation);
          }}
          icon={images.edit}
          touchableOpacityStyle={styles.cardTouchableOpacity}
        />
      </View>
    </View>
  );
};

export default PrimaryFeatures;
