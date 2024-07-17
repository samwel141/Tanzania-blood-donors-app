/* eslint-disable prettier/prettier */
import {Image, TouchableOpacity, View} from 'react-native';

// import CustomText from '../../../shared/components/Text';
import React from 'react';
import images from '../../../shared/utils/images';
// import styles from './styles';
import styles from './style';
import utils from '../../../shared/navigation/utils';
import { Text } from 'react-native-paper';

const Settings = (props: any) => {
  return (
    <View style={styles.userProfileContainerView}>
      <TouchableOpacity
        style={styles.titleTouchableOpacity}
        activeOpacity={0.7}
        onPress={() => {
          utils.navigateToSettingsPage(props.navigation);
        }}>
        <Text style={styles.titles}>Settings</Text>
        <Image
          source={images.enterColorBrand}
          style={styles.userProfileEnter}
        />
      </TouchableOpacity>
      <View style={styles.settingsView}>
        <View style={styles.settingsTitleView}>
          <Text>Payment method</Text>
          <Image style={styles.userProfileEnter} source={images.mastercard} />
        </View>
        <View style={styles.settingsTitleView}>
          <Text style={styles.colorText}>Mastercard</Text>
          <Text style={styles.colorText}>**** 1323</Text>
        </View>
      </View>
      <View style={[styles.settingsTitleView, styles.languageSettingsTitle]}>
        <Text>Language</Text>
        <Text style={styles.languageText}>English</Text>
      </View>
      <View style={[styles.settingsTitleView, styles.languageSettingsTitle]}>
        <Text>Get push-notifications</Text>
        <Text style={styles.colorText}>Yes</Text>
      </View>
    </View>
  );
};

export default Settings;
