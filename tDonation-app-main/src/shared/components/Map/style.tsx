import {COLORS, DEVICE} from '../../utils/constants';

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    /* Style components for component: Display */
    displayMapView: {
        width: '100%',
        height: '32%'
    },
    displayMarker: {
        borderRadius: 8 
    },
    displayMarkerView: {
        backgroundColor: COLORS.brand,
        height: 40,
        width: 40,
        borderRadius: 20,
        borderBottomRightRadius: 0,
        transform: [
            {
                rotate: '45deg'
            }
        ],
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
        paddingVertical: 8,
        display: 'flex',
        marginBottom: DEVICE.type === 'android' ? 8 : 0,
        borderWidth: 1.5,
        borderColor: 'black',
    },
    displayMarkerImage: {
        height: 20,
        width: 20,
        transform: [
            {
                rotate: '315deg'
            }
        ],
    },
    displayCallout: {
        width: 100,
        backgroundColor: COLORS.brand,
        borderRadius: 8
    },
    displayCalloutText: {
        textAlign: 'center',
        color: 'black'
    },
    displayMarkerUserImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
        transform: [
            {
                rotate: '315deg'
            }
        ],
    },
    
    /* Style components for component: Tracking */
    trackingSafeAreaView:{
        zIndex: 10,
        backgroundColor: COLORS.brand,
        position: 'absolute',
        height: 45,
        width: 45,
        top: DEVICE.type === 'android' ? 8 : 28,
        left: 20
    },
    trackingRoundButton: {
        height: 25,
        width: 25,
    },
    trackingMapView: {
        alignItems: 'center',
        flex: 1,
        zIndex: -12
    },
    trackingInputTextView: {
        position: 'absolute',
        top: DEVICE.type === 'android' ? 10 : 30,
        backgroundColor: 'white',
        width: '73%',
        height: 40,
        marginLeft: DEVICE.width * .22,
        borderRadius: 8
    },
    trackingInputText: {
        height: 40,
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'white'
    },
    trackingInputTextOnFocus: {
        height: 40,
        width: '100%',
        borderRadius: 8,
        borderWidth: 1.5,
    },
    trackingRectangularButton: {
        height: 40,
        borderRadius: 8,
        position: 'absolute',
        width: DEVICE.width * .9,
        bottom: 75,
        left: DEVICE.width * .05,
    },
    trackingRectangularButtonText: { 
        fontWeight: '600' 
    },
    
    /* Style components for component: TrackedDeliveryDetails */
    trackedDeliveryContainerView: {
        backgroundColor: 'white',
        width: '90%',
        position: 'absolute',
        zIndex: 2,
        bottom: 50,
        borderRadius: 8,
        left: 20,
        padding: 10
    },
    trackedDeliveryShipperView: {
        flexDirection: 'row',
        width: '97%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    trackedDeliveryShipperInfoView: {
        flexDirection: 'row',
        width: '75%',
        padding: 5,
        justifyContent: 'space-between',
    },
    trackedDeliveryShipperTitleText: { 
        fontSize: 16.5, 
        color: 'grey' 
    },
    trackedDeliveryRating: {
        marginLeft: 5,
        backgroundColor: 'red',
        width: 62,
    },
    trackedDeliveryShipperImageView: {
        alignItems: "center",
        height: 60,
        width: 60,
        borderColor: COLORS.grey,
        borderWidth: 1.5,
        justifyContent: 'center',
        borderRadius: 30
    },
    trackedDeliveryShipperImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    trackedDeliveryETAView: {
        marginTop: 0,
        width: '77%',
        padding: 5
    },
    trackedDeliveryETATitleText: {
        fontSize: 16.5,
        color: 'grey'
    },
    trackedDeliveryButton: {
        width: 70,
        height: 30,
        marginTop: 4,
        borderRadius: 8
    },
    trackedDeliveryButtonTitle: { 
        fontSize: 12 
    }
    
    
    
});

export default styles;