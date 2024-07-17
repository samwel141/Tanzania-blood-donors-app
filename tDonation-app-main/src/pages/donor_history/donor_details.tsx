/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { View, Text } from 'react-native';

// const DonorDetails = ({ route }) => {
//   const { donor } = route.params;

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>{donor.firstName} {donor.lastName}</Text>
//       <Text>{donor.region}</Text>
//       {/* Add more details as needed */}
//     </View>
//   );
// };

// export default DonorDetails;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { color } from '@rneui/base';
import { useAuth } from '../../context/AuthContext';
import { Alert } from 'react-native';

const DonorDetails = ({ route }) => {
const [showPopup, setShowPopup] = useState(false);
const [showPopup1, setShowPopup1] = useState(false);
const [usageData, setUsageData] = useState({
    date: '',
    bloodCenter: '',
    });
    const { user } = useAuth();
  const defaultAvatar = require('../../../assets/images/avatar.png');
  const { donor } = route.params;

  const navigation = useNavigation();

  const handleUsagePress = () => {
    navigation.navigate('DonorUsage', { donor });
  };

  const handleDonationPress = () => {
    navigation.navigate('DonorDonation', { donor });
  };
  const handleAddUsagePress = () => {
    setShowPopup(true);
  };
  const handleAddDonationPress = () => {
    setShowPopup1(true);
  };

  const handleAddUsage = async () => {
    // Handle adding usage here
    const data = {
      donor_id: donor._id,
      center_id: user._id,
      date: new Date(),
    };

    try {
      const response = await fetch('https://dev-api-hazel.vercel.app/api/usage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      Alert.alert('Success: Data has been posted successfully!');

     console.log(result);
      setShowPopup(false);
    } catch (error) {
      Alert.alert('Error: ' + error.message);
    }
  };


  const handleAddDonation = async () => {
    // Handle adding usage here
    const data = {
      donor_id: donor._id,
      center_id: user._id,
      date: new Date(),
    };

    try {
      const response = await fetch('https://dev-api-hazel.vercel.app/api/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      Alert.alert('Success: Data has been posted successfully!');

     console.log(result);
      setShowPopup1(false);
    } catch (error) {
      Alert.alert('Error: ' + error.message);
    }
  };




//   const handleAddUsagePress = () => {
//     // Open popup for adding usage
//   };

//   const handleAddDonationPress = () => {
//     // Open popup for adding donation
//   };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{donor.firstName} {donor.lastName}</Text>
      </View>
      <View style={styles.infoSection}>
        {/* <Image source={donor.avatar} style={styles.avatar} /> */}
        <Image
          source={donor.avatar ? { uri: donor.avatar } : defaultAvatar}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
        />
        <View style={styles.info}>
          <Text style={styles.infoText}>First Name: {donor.firstname}</Text>
          <Text style={styles.infoText}>Last Name: {donor.sirname}</Text>
          <Text style={styles.infoText}>Region: {donor.region}</Text>
          <Text style={styles.infoText}>Phone Number: {donor.phoneNumber}</Text>
          <Text style={styles.infoText}>Email: {donor.email}</Text>
        </View>
      </View>
      <View style={styles.actions}>
  <View style={styles.row}>
    <TouchableOpacity style={styles.actionButton} onPress={handleUsagePress}>
      <Text style={styles.actionButtonText}>Usage</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton} onPress={handleDonationPress}>
      <Text style={styles.actionButtonText}>Donation</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.row}>
    <TouchableOpacity style={styles.actionButton} onPress={handleAddUsagePress}>
      <Text style={styles.actionButtonText}>Add Usage</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton} onPress={handleAddDonationPress}>
      <Text style={styles.actionButtonText}>Add Donation</Text>
    </TouchableOpacity>
  </View>
</View>

<Modal
        animationType="slide"
        transparent={true}
        visible={showPopup}
        onRequestClose={() => {
          setShowPopup(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add Usage</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="Date"
              value={usageData.date}
              onChangeText={(text) => setUsageData({ ...usageData, date: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Blood Center"
              value={usageData.bloodCenter}
              onChangeText={(text) => setUsageData({ ...usageData, bloodCenter: text })}
            /> */}

        <View>
         <Text>By Pressing "Add" you record that this user has donated blood today</Text>
        </View>

        <View style={styles.buttonContainer}>
        {/* <Button title="Add" style={styles.actionButton} onPress={handleAddUsage} /> */}
    <TouchableOpacity style={styles.actionButton} onPress={handleAddUsage}>
      <Text style={styles.actionButtonText}>Add </Text>
    </TouchableOpacity>
        <View style={{ width: 40 }} />
        {/* <Button title="Cancel" onPress={() => setShowPopup(false)} /> */}
        <TouchableOpacity style={styles.actionButton} onPress={() => setShowPopup(false)}>
      <Text style={styles.actionButtonText}>Cancel</Text>
    </TouchableOpacity>
      </View>
          </View>
        </View>
      </Modal>




      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup1}
        onRequestClose={() => {
          setShowPopup1(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add Donation</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="Date"
              value={usageData.date}
              onChangeText={(text) => setUsageData({ ...usageData, date: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Blood Center"
              value={usageData.bloodCenter}
              onChangeText={(text) => setUsageData({ ...usageData, bloodCenter: text })}
            /> */}

        <View>
         <Text>By Pressing "Add" you record that this user has used blood today</Text>
        </View>

      <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.actionButton} onPress={handleAddDonation}>
      <Text style={styles.actionButtonText}>Add </Text>
    </TouchableOpacity>
        <View style={{ width: 40 }} />

        <TouchableOpacity style={styles.actionButton} onPress={() => setShowPopup1(false)}>
      <Text style={styles.actionButtonText}>Cancel</Text>
    </TouchableOpacity>
      </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#703434',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '85%',
    maxHeight: '80%',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    height: 25,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default DonorDetails;
