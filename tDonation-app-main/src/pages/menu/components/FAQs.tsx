/* eslint-disable prettier/prettier */
import { Image, TouchableOpacity, View } from 'react-native';

// import CustomText from '../../../shared/components/Text';
import React from 'react';
import images from '../../../shared/utils/images';
// import styles from './styles'
import styles from './style';
import utils from '../../../shared/navigation/utils';
import { Text } from 'react-native-paper';

const FAQs = (props: any) => {
    return (
        <View
            style={styles.userProfileContainerView}
        >
            <TouchableOpacity
                style={styles.faqView}
                activeOpacity={0.5}
                onPress={() => {
                    utils.navigateFaqsPage(props.navigation);
                }}
             >
                <Text style={styles.faqText}>Frequently Asked Questions</Text>
                    <Image
                        source={images.enterColorBrand}
                        style={styles.userProfileEnter}
                    />
            </TouchableOpacity>
            {
                [
                    'What is TBDA?',
                    'How to use it?',
                    'How to find donors?',
                    'Is it safe to use it?',
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

export default FAQs;
