/* eslint-disable prettier/prettier */
import { Image, TouchableOpacity, View } from 'react-native';

// import CustomText from '../../../shared/components/Text';
import React from 'react';
import images from '../../../shared/utils/images';
// import styles from './styles';
import styles from './style';
import utils from '../../../shared/navigation/utils';
import { Text } from 'react-native-paper';

const Legal = (props: any) => {
    return (
        <View
            style={styles.userProfileContainerView}
        >
            <TouchableOpacity
                style={styles.termsAndConditionTouchableOpacity}
                activeOpacity={0.3}
                onPress={() => {
                    utils.navigateToLegalPage(props.navigation);
                }}
            >
                <Text style={styles.titles}>Legal</Text>
                <Image
                    source={images.enterColorBrand}
                    style={styles.userProfileEnter}
                />
            </TouchableOpacity>
            {
                [
                    'Terms and conditions',
                    'Privacy policy',
                    'Return policy',
                ].map((item) =>
                    <View
                        key={`${item}`}
                        style={styles.faqItemView}
                    >
                        <Text style={styles.faqItemText}>{item}</Text>
                    </View>
                )
            }
        </View>
    );
};

export default Legal;
