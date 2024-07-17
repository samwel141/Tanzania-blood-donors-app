/* eslint-disable prettier/prettier */
import { COLORS, DEVICE } from '../../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/*
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
*/
const styles = StyleSheet.create({
    // Common styles:
    editImage: {
        height: 20,
        width: 20,
    },
    safeAreaView: {
        marginTop: DEVICE.type === 'android' ? 10 : 25,

    },
    /* Styles for component: PersonalDetails */
    personalDetailsContainerView: {
        backgroundColor: '#e5e7eb',
        alignItems: 'center',
        height: '150%',
    },
    personalDetailsPrimaryView: {
        width: '95%',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        paddingBottom: 25,
    },
    personalDetailsInput: {
        marginTop: 5,
        borderRadius: 8,
        color: 'grey',
        height: 34,
    },
    personalDetailsText: {
        color: COLORS.brand,
        fontSize: 14,
        marginTop: 10,
    },
    personalDetailsHeadingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    personalDetailsSaveChangesButton: {
        width: '100%',
        borderRadius: 8,
        marginTop: 15,
    },

    /* Styles constant for component: Settings */
    settingsPushNotificationView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
        marginBottom: 20,
    },
    settingsSwitch: DEVICE.type === 'android' ? {
        transform: [
            {
                translateX: 10,
            },
        ],
    } : {
        transform: [
            { scaleX: 0.8 }, { scaleY: 0.8 },
            {
                translateX: 10,
            },
        ],
    },
    settingsLanguageView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 0,
        marginRight: 0,
        alignItems: 'center',
        marginBottom: 20,
    },
    settingsPickerButton: {
        height: 28,
        backgroundColor: 'white',
        width: 75,
        justifyContent: 'center',
        transform: [
            {
                translateX: 15,
            },
        ],
    },
    settingsPickerIconWrapper: {
        width: 20,
        backgroundColor: 'white',
        margin: 0,
    },
    settingsPickerSelectedValue: {
        backgroundColor: 'white',
        color: COLORS.brand,
        margin: 0,
    },
    settingsPickerView: {
        paddingHorizontal: 0,
        margin: 0,
        marginRight: 20,
        height: 0,
        padding: 0,
    },
    settingsPaymentMethodTitleView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    settingsPaymentMethodView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomColor: '#f7f7f7',
        borderBottomWidth: 1,
        paddingTop: 5,
    },
    settingsPaymentItemView: {
        flexDirection: 'row',
        paddingBottom: 5,
    },
    settingsPaymentIconImage: {
        height: 20,
        width: 20,
    },
    settingsPaymentDetailsText: {
        color: 'grey',
        marginLeft: 5,
    },
    settingsPaymentSelectedIcon: {
        height: 20,
        width: 20,
    },

    settingsPaymentDetailsAddButtonTouchableOpacity: {
        height: 20,
        width: '15%',
        borderRadius: 8,
    },
    settingsPaymentDetailsAddButtonTextStyle: {
        fontSize: 10,
    },
    /* Styles for component: PaymentDetail */
    paymentDetailsModal: {
        width: '92%',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        marginLeft: DEVICE.width * 0.04,
        marginRight: DEVICE.width * 0.04,
    },
    paymentDetailsContainerView: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        paddingBottom: 25,
        width: '100%',
        marginTop: 0,
    },
    paymentDetailsHeadingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        borderBottomColor: '#f7f7f7',
        borderBottomWidth: 2,
        paddingBottom: 5,
        marginBottom: 5,
    },
    paymentDetailsHeadingText: {
        fontSize: 25,
    },
    paymentDetailsRowView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    paymentDetailsButton: {
        width: '100%',
        borderRadius: 8,
        marginTop: 25,
    },
    /* Styles constant for component: Legal */
    legalContainerView: {
        width: '95%',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 8,
        paddingBottom: 25,
    },
    legalCustomText: {
        fontSize: 20,
        color: COLORS.brand,
    },
    legalItemView: {
        marginBottom: 25,
    },
    legalItemContent: {
        textAlign: 'justify',
        fontSize: 13.5,
    },
    legalItemReadMoreButtom: {
        width: '25%',
        backgroundColor: '#e5e7eb',
        height: 25,
        borderRadius: 8,
        marginTop: 10,
    },
    legalItemReadMoreButtonTitle: {
        fontSize: 12,
    },
});

export default styles;
