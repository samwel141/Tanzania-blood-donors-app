import * as React from 'react';

import {ActivityIndicator, Modal, Portal} from 'react-native-paper';

import CustomText from '../Text/Index';
import styles from './style';

interface LoadingProps {
  message: string;
  loading: true | false;
}

const Loading = (props: LoadingProps) => {
  return (
    <>
      <Portal>
        <Modal
          dismissable={!props.loading} // should not allow users to dismiss the portal while loading.
          visible={props.loading}
          contentContainerStyle={styles.containerStyle}>
          <ActivityIndicator
            animating
            size="large"
            color={styles.activityIndicator.color}
          />
          <CustomText variant="bodyLarge" style={styles.text} numberOfLines={4}>
            {
              // Should default to "Loading..." when passed message is an empty string.
              props.message || 'Loading...'
            }
          </CustomText>
        </Modal>
      </Portal>
    </>
  );
};

export default Loading;
