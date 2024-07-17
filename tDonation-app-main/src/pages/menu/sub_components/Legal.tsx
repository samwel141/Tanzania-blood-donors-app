/* eslint-disable prettier/prettier */
import {ScrollView, View, Button, Text} from 'react-native';

// import AppBar from '../../../shared/components/AppBar';
// import AppBar from '../../../shared/components/AppBar';
// import AppBar from '../../../shared/components/AppBar';
// import AppBar from '../../../shared/components/AppBar';
// import AppBar from '../../../shared/components/AppBar';
// import AppBar from '../../../shared/components/AppBar';
// import AppBar from '../../../shared/components/AppBar';
// import Button from '../../request_delivery/components/Button';
// import Text from '../../../shared/components/Text';
import React from 'react';
// import styles from './styles';
import styles from './style';
import utils from '../../../shared/navigation/utils';

const Legal = (props: any) => {
  const LEGAL_ITEMS = [
    {
      title: 'Terms and Conditions',
      content:
        'A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability. A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability.',
    },
    {
      title: 'Privacy policy',
      content:
        'A privacy policy is a legal document that details how a website gathers, stores, shares, and sells data about its visitors. This data typically includes items such as a users name, address, birthday, marital status, medical history, and consumer behavior. A privacy policy is a legal document that details how a website gathers, stores, shares, and sells data about its visitors. This data typically includes items such as a users name, address, birthday, marital status, medical history, and consumer behavior',
    },
    {
      title: 'Return policy',
      content:
        'A refund policy is a document that outlines the rules for getting refunds for purchased goods and services. It often details the eligibility requirements for refunds, types of refunds given, the refund timeframe, and the return process. A refund policy is a document that outlines the rules for getting refunds for purchased goods and services. It often details the eligibility requirements for refunds, types of refunds given, the refund timeframe, and the return process.',
    },
  ];
  return (
    <>
      {/* <AppBar
        title="Legal"
        safeAreaViewStyle={styles.safeAreaView}
        onPress={() => {
          utils.navigateToMenuPage(props.navigation);
        }}
      /> */}
      <ScrollView
        contentContainerStyle={styles.personalDetailsContainerView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.legalContainerView}>
          {LEGAL_ITEMS.map(item => (
            <View key={item.title} style={styles.legalItemView}>
              <View style={styles.paymentDetailsHeadingView}>
                <Text style={styles.legalCustomText}>
                  {item.title}
                </Text>
              </View>
              <Text style={styles.legalItemContent}>
                {item.content}
              </Text>
              <Button
                title="Read more"
                onPress={() => {
                  console.log('first');
                }}
                // touchableOpacityStyle={styles.legalItemReadMoreButtom}
                // textStyle={styles.legalItemReadMoreButtonTitle}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Legal;
