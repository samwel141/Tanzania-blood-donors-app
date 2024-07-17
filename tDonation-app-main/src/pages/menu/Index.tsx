/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import FAQs from './components/FAQs';
import Legal from './components/Legal';
import PersonalDetails from './components/PersonalDetails';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import Settings from './components/Settings';
// import styles from './styles';
import styles from './style';
import utils from '../../shared/navigation/utils';
const Menu = (props: any) => {
    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            style={styles.menuSafeAreaView}
        >
            {/* <AppBar
                title="Menu"
                onPress={() => {
                    utils.navigateToHomePage(props.navigation);
                }}
                safeAreaViewStyle={styles.menuAppBarSafeAreaView}
            /> */}
            <ScrollView
                style={styles.menuContentView}
                contentContainerStyle={styles.menuScrollViewContentContainer}
                showsVerticalScrollIndicator={false}
            >
                <PersonalDetails
                    navigation={props.navigation}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Menu;
