/* eslint-disable prettier/prettier */
// Constant elements/values used in the project:
import {Dimensions, Platform} from 'react-native';

export const COLORS = {
  brand: '#703434',
  background: '#e5e7eb', //'#f5f8fc', //'#f7f9fc',
  grey: '#bec1c7',
  darkGrey: '#232834',
  celadon: '#ace1af', //ace1af
  teaGreen: '#d0f0c0',
  lavender: '#E6E6FA',
  khaki: '#F0E68C',
  aliceBlue: '#F0F8FF',
  thistle: '#D8BFD8',
  secondaryGrey: '#e6e1e2',
  primaryGrey: 'grey',
  considerThisGrey: '#e5e7eb',
  // '#D8D9DA'
  // '#ace1af'
  // '#FFF6E0'
  // '#E6E6FA'
};

export const DEVICE = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  scale: Dimensions.get('window').scale,
  fontScale: Dimensions.get('window').fontScale,
  type: Platform.OS,
};

export const BUTTON_SIZES = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

export const PAGES = {
  home: 'HOME_PAGE',
  menu: 'MENU_PAGE',
  bloodSubmit: 'BLOOD_SUBMIT_PAGE',
  barCode: 'BAR_CODE_PAGE',
  scanner: 'SCANNER_PAGE',
  requestBlood: 'REQUEST_BLOOD_PAGE',
  deliverySummary: 'DELIVERY_SUMMARY_PAGE',
  duringDelivery: 'DURING_DELIVERY_PAGE',
  orderSummary: 'ORDER_SUMMARY_PAGE',
  liveTracking: 'LIVE_TRACKING_PAGE',
  login: 'LOG_IN_PAGE',
  signup: 'SIGN_UP_PAGE',
  signuppage: 'SIGN_UP_PAGE1',
  requestDelivery: 'REQUEST_DELIVERY_PAGE',
  personalDetails: 'PERSONAL_DETAILS_PAGE',
  driverMovingToPickup: 'DRIVER_MOVING_TO_PICKUP_PAGE',
  searchingForDriver: 'SEARCHING_FOR_DRIVER_PAGE',
  settings: 'SETTINGS_PAGE',
  legal: 'LEGAL_PAGE',
  faqs: 'FAQS_PAGE',
  resetPasswordRequest: 'RESET_PASSWORD_REQUEST_PAGE',
  resetPassword: 'RESET_PASSWORD_PAGE',
};

export const CUSTOM_MAP_STYLE = [
  {
    featureType: 'administrative.country',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    stylers: [
      {
        color: '#ccdbd1',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.government',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.medical',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.place_of_worship',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.school',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.sports_complex',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.station.airport',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'transit.station.bus',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.station.rail',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
];

export const CUSTOM_LIVE_TRACKING_MAP_STYLE = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];
