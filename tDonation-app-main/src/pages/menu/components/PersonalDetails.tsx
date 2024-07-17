/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, TouchableOpacity, View } from 'react-native';

// import CustomText from '../../../shared/components/Text';
import React from 'react';
import images from '../../../shared/utils/images';
// import styles from './styles'
import styles from './style';
import utils from '../../../shared/navigation/utils';
import { Text } from 'react-native-paper';
import { useAuth } from '../../../context/AuthContext';

const PersonalDetails = (props: any) => {
    const { logout } = useAuth();
    return (
        <View style={styles.userProfileContainerView}>
            <TouchableOpacity
                style={styles.personaleDetailsTouchableOpacity}
                onPress={() => {
                    utils.navigateToPersonalDetailsPage(props.navigation);
                }}
            >
                <Text style={styles.titles}>Center details</Text>
                <Image
                    source={images.enterColorBrand}
                    style={styles.userProfileEnter}
                />
            </TouchableOpacity>
            <View style={styles.profileView}>
                <Text style={styles.colorText}>Name</Text>
                <Text>Mwananyamala Center</Text>
            </View>
            <View style={styles.profileView}>
                <Text style={styles.colorText}>Email</Text>
                <Text>mwananyamala@gmail.com</Text>
            </View>
            <View style={styles.profileView}>
                <Text style={styles.colorText}>Phone number</Text>
                <Text>+255-713-481-777</Text>
            </View>
            <View style={styles.profileView}>
                <Text style={styles.colorText}>Address</Text>
                <Text
                    style={styles.pesronalDetailsAddressText}
                    numberOfLines={1}
                >5590 Ubungo, Dar es salaam</Text>
            </View>
            <TouchableOpacity onPress={logout} style={{paddingVertical: 12}}>
                <Text style={{color: 'red', textAlign: 'center'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PersonalDetails;
