/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import CustomText from '../../../shared/components/Text';
import {DEVICE, COLORS} from '../../../shared/utils/constants';
import LocationInput from '../../../shared/components/Location/locationInput';
import Button from '../../request_delivery/components/Button';
import {useDispatch} from 'react-redux';
import {addToFavorites} from '../../../state/feature/location/locationsSlice';
import {LocationDetails} from '../../../state/feature/location/locationTypes';

const AddFavoriteLocation = (props: any) => {
  const dispatch = useDispatch();

  const handleSelectLocation = (locationDetails: LocationDetails) => {
    // Dispatch action to save the location to favorites
    dispatch(addToFavorites(locationDetails));
    props.onCancel(); // Close the modal
  };

  return (
    <Modal
      visible={props.showModal}
      animationType="slide"
      transparent={true}
      onRequestClose={props.onCancel}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={props.onCancel}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <CustomText style={styles.componentTitleText}>
                  Add Favorite Location
                </CustomText>

                <View style={styles.pickuplocation}>
                  <LocationInput
                    placeholder="Favorite Location"
                    onSelect={handleSelectLocation}
                  />
                </View>

                <View style={styles.actionButtons}>
                  <Button
                    title="Cancel"
                    onPress={() => {
                      props.onCancel();
                    }}
                    touchableOpacityStyle={[{width: '30%'}]}
                  />
                  <Button
                    title="Save Location"
                    onPress={() => {
                      console.log('Selected');
                      props.onCancel();
                    }}
                    touchableOpacityStyle={[
                      {width: '63%', backgroundColor: 'green'},
                    ]}
                    textStyle={{color: 'white'}}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(000, 20, 60, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: '50%',
    width: '90%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  componentTitleText: {
    color: COLORS.darkGrey,
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: DEVICE.fontScale * 30,
  },
  cancelButton: {
    width: '30%',
  },
  saveButton: {
    width: '63%',
    backgroundColor: 'green',
  },
  saveButtonText: {},
  destinationView: {},
  pickuplocation: {
    width: '100%',
    zIndex: 5,
    marginVertical: '5%',
    marginHorizontal: '10%',
  },
  actionButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AddFavoriteLocation;
