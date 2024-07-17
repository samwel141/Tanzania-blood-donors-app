/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react'
import { Text } from 'react-native';
import styles from './style';
const CustomText = (props: any) => {
    return (
        <Text {...props}  style={{ ...styles.textColor, ...props.style, ...styles.textFontFamily }}>
            {
                props.children
            }
        </Text>
    )
}

export default CustomText;