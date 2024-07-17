/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React from 'react';
// import {View, Text, FlatList, StyleSheet} from 'react-native';

// const data = [
//   {
//     id: '667a7a87befd5a704cafc309',
//     donor_id: 'donor789',
//     center_id: 'center456',
//     date: '6/25/2024',
//     sample_id: 'sample123',
//   },
//   {
//     id: '667a7aa8befd5a704cafc30b',
//     donor_id: 'donor789',
//     center_id: 'center456',
//     date: '6/25/2024',
//     sample_id: 'sample123',
//   },
//   {
//     id: '667abfb75def373065be44cd',
//     donor_id: '6660572d5c8ead1cf73d1b61',
//     center_id: '6661394e7f14861f11ee9c9e',
//     date: '6/25/2024',
//   },
// ];

// const DataCard = ({item}) => (
//   <View style={styles.card}>
//     <Text style={styles.text}>Donor ID: {item.donor_id}</Text>
//     <Text style={styles.text}>Center ID: {item.center_id}</Text>
//     <Text style={styles.text}>Date: {item.date}</Text>
//     {item.sample_id && (
//       <Text style={styles.text}>Sample ID: {item.sample_id}</Text>
//     )}
//   </View>
// );

// const DonorUsage = ({ route }) => {
//  const { donor } = route.params;
//  console.log(donor);
//     return (
//   <View style={styles.container}>
//     <Text style={styles.textHead}>Donor's Usage</Text>
//     <FlatList
//       data={data}
//       keyExtractor={item => item.id}
//       renderItem={({item}) => <DataCard item={item} />}
//     />
//   </View>
//     );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 16,
//     marginVertical: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   text: {
//     fontSize: 16,
//     color: '#333',
//   },
//   textHead: {
//     fontSize: 27,
//     color: '#333',
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
// });

// export default DonorUsage;




/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const DataCard = ({ item }) => {
  const date1 = new Date(item.date);
  const isValidDate = !isNaN(date1.getTime());

  return (
  <View style={styles.card}>
    <Text style={styles.text}>Donor's Name: {item.firstname}  {item.surname}</Text>
    <Text style={styles.text}>Center Name: {item.center_name}</Text>
    <Text style={styles.text}>Date: {isValidDate ? date1.toLocaleString('en-US') : item.date}</Text>
    {item.sample_id && (
      <Text style={styles.text}>Sample ID: {item.sample_id}</Text>
    )}
  </View>
  )
};

const DonorDonation = ({ route }) => {
  const { donor } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dev-api-hazel.vercel.app/api/donation/donor?donor_id=${donor._id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok ', response.error);
      }
      const result = await response.json();
      console.log(response);
      setData(result);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  if (data?.length == 0) {
    return (
        <View style={styles.container}>
          <Text style={styles.textHead}>Donor's Donations</Text>
          <Text style={styles.textNoData}>No data available</Text>
        </View>
      );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHead}>Donor's Donation History</Text>
      <FlatList
        data={data}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <DataCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  textNoData: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    paddingTop: 20,
  },
  textHead: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DonorDonation;
