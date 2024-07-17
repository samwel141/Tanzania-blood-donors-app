/* eslint-disable prettier/prettier */

import { PAGES } from "../utils/constants";

const utils = {
  navigateToBarCodeScannerPage: (navigation: any) => {
    navigation.navigate(PAGES.barCode);
  },

  navigateToBloodSubmitPage: (navigation: any) => {
    navigation.navigate(PAGES.bloodSubmit);
  },

  navigateToBloodRequestPage: (navigation: any) => {
    navigation.navigate(PAGES.requestBlood);
  },

  navigateToDeliverySummaryPage: (navigation: any, fromPage: string) => {
    navigation.navigate(PAGES.deliverySummary, {
      returnTo: fromPage,
    });
  },

  navigateSeachingForDriverPage: (navigation: any, fromPage: string) => {
    navigation.navigate(PAGES.searchingForDriver, {
      returnTo: fromPage,
    });
  },

  navigateToDuringDeliveryPage: (navigation: any, fromPage: string) => {
    navigation.navigate(PAGES.duringDelivery, {
      returnTo: fromPage,
    });
  },

  navigateToQrCodePage: (navigation: any) => {
    navigation.navigate(PAGES.qrCode);
  },

  navigateToHomePage: (navigation: any) => {
    navigation.navigate(PAGES.home);
  },

  navigateToSignUpPage1: (navigation: any) => {
    navigation.navigate(PAGES.signuppage);
  },

  navigateToLiveTrackingPage: (navigation: any) => {
    navigation.navigate(PAGES.liveTracking);
  },

  navigateToMenuPage: (navigation: any) => {
    navigation.navigate(PAGES.menu);
  },

  navigateToPersonalDetailsPage: (navigation: any) => {
    navigation.navigate(PAGES.personalDetails);
  },

  navigateToSettingsPage: (navigation: any) => {
    navigation.navigate(PAGES.settings);
  },

  navigateToLegalPage: (navigation: any) => {
    navigation.navigate(PAGES.legal);
  },

  navigateFaqsPage: (navigation: any) => {
    navigation.navigate(PAGES.faqs);
  },

  navigateToDriverMovingToPickup: (navigation: any, fromPage: string) => {
    navigation.navigate(PAGES.driverMovingToPickup, {
      returnTo: fromPage,
    });
  },

  navigateToSignUpPage: (navigation: any) => {
    navigation.navigate(PAGES.signup);
  },

  navigateToLoginPage: (navigation: any) => {
    navigation.navigate(PAGES.login);
  },

  navigateToResetPasswordRequest: (navigation: any) => {
    navigation.navigate(PAGES.resetPasswordRequest);
  },

  navigateToResetPassword: (navigation: any) => {
    navigation.navigate(PAGES.resetPassword);
  },
};

export default utils;
