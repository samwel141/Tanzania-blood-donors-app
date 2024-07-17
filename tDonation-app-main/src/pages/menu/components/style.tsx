/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    /* Style for common elements */
    userProfileContainerView: {
        width: '95%',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 8,
        padding: 10,
    },
    profileView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    titles: {
        fontSize: 16,
        fontWeight: '600',
    },
    colorText: {
        color: 'grey',
    },
    userProfileAddressView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    userProfileEnter: {
        height: 20,
        width: 20,
    },
    userProfileEditImage: {
        height: 20,
        width: 20,
    },
    titleTouchableOpacity: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        marginBottom: 10,
    },

    /* Style components for component: Personal Details */
    personaleDetailsTouchableOpacity: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
    },
    pesronalDetailsAddressText: {
        width: '60%',
        textAlign: 'right',
    },

    /* Style components for component: FAQ */
    faqText: {
        fontSize: 16,
        fontWeight: '600',
    },
    faqView: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        marginBottom: 10,
    },
    faqItemView: {
        borderBottomColor: '#f7f7f7',
        borderBottomWidth: 1,
    },
    faqItemText: {
        color: 'grey',
        paddingTop: 5,
        paddingBottom: 5,
    },

    /* Style components for component: Settings */
    settingsView: {
        justifyContent: 'space-between',
        marginTop: 0,
        width: '100%',
        padding: 0,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingBottom: 8,
    },
    settingsTitleView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    languageSettingsTitle: {
        marginTop: 0,
        paddingBottom: 8,
    },
    languageText: {
        color: 'grey',
        fontSize: 14,
    },

    /* Style components for component: Terms&Conditions */
    termsAndConditionTouchableOpacity: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        marginBottom: 10,
    },
    termsAndConditionText: {
        color: 'grey',
        textAlign: 'justify',
    },
});

export default styles;
