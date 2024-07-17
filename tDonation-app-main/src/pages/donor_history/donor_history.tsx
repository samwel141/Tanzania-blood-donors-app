// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
// // /* eslint-disable react-native/no-inline-styles */
// // /* eslint-disable prettier/prettier */

// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const donors = [
//   { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'North America', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Samwel', lastName: 'Wilson', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Kilimanjaro', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Rose', lastName: 'Enos', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Rock City', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Ernest', lastName: 'Yusto', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Arusha', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Chamilomo', lastName: 'Ayoub', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Kigoma', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'James', lastName: 'Damian', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Dodoma', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '+255742551573', email: 'info@redbridge.com', region: 'Europe', avatar: require('../../../assets/images/avatar.png') },
//   // Add more donors as needed
// ];
// const DonorHistory = () => {
//   const navigation = useNavigation();
//   const [search, setSearch] = useState('');

//   const handleDonorPress = (donor) => {
//     navigation.navigate('DonorDetails', { donor });
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ padding: 10 }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Donors List</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5 }}
//           placeholder="Search"
//           value={search}
//           onChangeText={(text) => setSearch(text)}
//         />
//       </View>
//       <ScrollView>
//         {donors
//           .filter((donor) =>
//             donor.firstName.toLowerCase().includes(search.toLowerCase()) ||
//             donor.lastName.toLowerCase().includes(search.toLowerCase())
//           )
//           .map((donor) => (
//             <TouchableOpacity key={donor.id} onPress={() => handleDonorPress(donor)} style={{ flexDirection: 'row', backgroundColor: '#703434', marginBottom: 3, alignItems: 'center', padding: 10 }}>
//               <Image source={donor.avatar} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
//               <View>
//                 <Text style={{color: 'white', fontSize: 20, fontWeight: 'semi-bold'}}>{donor.firstName} {' '} {donor.lastName}</Text>
//                 <Text style={{color: '#D8AE7E',}}>{donor.region}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default DonorHistory;

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const DonorHistory = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const defaultAvatar = require('../../../assets/images/avatar.png');

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('https://dev-api-hazel.vercel.app/api/donors');
        console.log(response.data.donors);
        setDonors(response.data.donors);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching donors:', error);
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const handleDonorPress = (donor) => {
    navigation.navigate('DonorDetails', { donor });
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 600, marginBottom: 10, textAlign: 'center' }}>Donors List</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5 }}
          placeholder="Search"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <ScrollView>
        {donors
          .filter((donor) =>
            donor.firstname.toLowerCase().includes(search.toLowerCase()) ||
            donor.middlename.toLowerCase().includes(search.toLowerCase()) ||
            donor.sirname.toLowerCase().includes(search.toLowerCase())
          )
          .map((donor) => (
            <TouchableOpacity
              key={donor._id}
              onPress={() => handleDonorPress(donor)}
              style={{ flexDirection: 'row', backgroundColor: '#703434', marginBottom: 3, alignItems: 'center', padding: 10 }}
            >
              <Image
                source={donor.avatar ? { uri: donor.avatar } : defaultAvatar}
                style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
              />
              <View>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 400 }}>{donor.firstname} {donor.sirname}</Text>
                <Text style={{ color: '#D8AE7E' }}>{donor.region}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default DonorHistory;

