/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import AppBar from '../../../shared/components/AppBar';
import Button from '../../request_delivery/components/Button';
import CustomText from '../../../shared/components/Text';
import Input from '../../request_delivery/components/Input';
import Loading from '../../../shared/components/Loading';
import images from '../../../shared/utils/images';
import styles from './styles';
import utils from '../../../shared/navigation/utils';

const PersonalDetails = (props: any) => {
  const [showEditButton, setShowEditButton] = useState(true);
  const [showLoadingModal, setLoadingModal] = useState(false);
  return (
    <>
      <AppBar
        title="Center Details"
        safeAreaViewStyle={styles.safeAreaView}
        onPress={() => {
          utils.navigateToMenuPage(props.navigation);
        }}
      />
      <ScrollView
        contentContainerStyle={styles.personalDetailsContainerView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.personalDetailsPrimaryView}>
          <View style={styles.personalDetailsHeadingView}>
            <CustomText style={{fontSize: 20}}>About The Center</CustomText>
            {showEditButton ? (
              <TouchableOpacity
                onPress={() => {
                  setShowEditButton(false);
                }}>
                <Image style={styles.editImage} source={images.edit} />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
          <CustomText style={styles.personalDetailsText}>Full name</CustomText>
          <Input
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
          <CustomText style={styles.personalDetailsText}>
            Phone number
          </CustomText>
          <Input
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
          <CustomText style={styles.personalDetailsText}>Email</CustomText>
          <Input
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
          <CustomText style={styles.personalDetailsText}>Address</CustomText>
          <Input
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
          {!showEditButton ? (
            <Button
              title="Save Changes"
              onPress={() => {
                setShowEditButton(true);
              }}
              touchableOpacityStyle={styles.personalDetailsSaveChangesButton}
            />
          ) : (
            <></>
          )}
        </View>

        <View style={styles.personalDetailsPrimaryView}>
          <CustomText style={{fontSize: 20}}>Password change</CustomText>
          <CustomText style={styles.personalDetailsText}>
            Current password
          </CustomText>
          <Input
            secureTextEntry
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
          <CustomText style={styles.personalDetailsText}>
            New password
          </CustomText>
          <Input
            secureTextEntry
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
          <CustomText style={styles.personalDetailsText}>
            Confirm new password
          </CustomText>
          <Input
            secureTextEntry
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
          <Button
            title="Reset Password"
            onPress={() => {
              setLoadingModal(true);
              console.log(showLoadingModal);
            }}
            touchableOpacityStyle={styles.personalDetailsSaveChangesButton}
          />
          {showLoadingModal ? (
            <Loading message="Resetting your password..." loading={true} />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default PersonalDetails;
