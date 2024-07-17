/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
// import {useSelector} from 'react-redux';
import {ScrollView, View} from 'react-native';
import { Text } from 'react-native-paper';
// import { Button } from 'react-native-paper';

// import AddFavoriteLocation from './AddFavoriteLocation/AddFavoriteLocation';
import Button from './components/Button';
// import CustomText from '../../shared/components/Text';
import images from '../../shared/utils/images';
// import styles from './styles';
import styles from './style';
// import {selectFavoriteLocations} from '../../state/feature/location/locationsSelector';

const FavouriteGroups = () => {
  const [showModal, setShowModal] = useState(false);
//   const favoriteLocations = useSelector(selectFavoriteLocations);
let favorite_groups = [
    {
        name: 'Local Church Blood Drive',
        type: 'Church',
        location: '123 Main St, Cityville',
        contact: 'Rev. John Doe',
        contactInfo: 'johndoe@example.com',
        schedule: 'Every third Saturday of the month',
    },
    {
        name: 'Community High School Blood Donors',
        type: 'School',
        location: '456 Elm St, Townville',
        contact: 'Principal Jane Smith',
        contactInfo: 'janesmith@example.com',
        schedule: 'Bi-annual blood drive events',
    },
    {
        name: 'City Central Hospital Blood Bank',
        type: 'Hospital',
        location: '789 Oak Ave, Metropolis',
        contact: 'Dr. Sarah Johnson',
        contactInfo: 'sarahjohnson@example.com',
        schedule: 'Open daily',
    },
    {
        name: 'Red Cross Mobile Blood Drive',
        type: 'Organization',
        location: 'Mobile service across various locations',
        contact: 'Red Cross Support',
        contactInfo: 'support@redcross.org',
        schedule: 'Check website for upcoming events',
    },
    {
        name: 'University Blood Donation Club',
        type: 'University',
        location: 'XYZ University Campus',
        contact: 'Student President',
        contactInfo: 'blooddonationclub@xyzuniversity.edu',
        schedule: 'Monthly donation events',
    },
    {
        name: 'Local Community Center Blood Drive',
        type: 'Community Center',
        location: '321 Oak St, Villagetown',
        contact: 'Community Center Coordinator',
        contactInfo: 'communitycenter@example.com',
        schedule: 'Quarterly blood donation drives',
    },
];


  // Function to get the first few characters of a location
  const getFirstFewChars = (groups: string): string => {
    if (groups && groups.length > 10) {
      return `${groups.substring(0, 10)}...`;
    }
    return groups || 'Tanzania';
  };

  // Function to get the first two characters of a groups
  const getFirstTwoChars = (groups: string): string => {
    if (groups) {
      return groups.substring(0, 2).toUpperCase();
    }
    return 'TZ';
  };

  return (
    <View style={styles.containerView}>
      {/* Conditionally render AddFavoriteLocation based on showModal state */}
      {/* {showModal && (
        <AddFavoriteLocation
          showModal={showModal}
          onCancel={() => {
            setShowModal(false);
          }}
        />
      )} */}
      <View>
        {/* Button to trigger showing the modal */}
        <Button
          onPress={() => {
            setShowModal(true);
          }}
          touchableOpacityStyle={styles.buttonAddTouchableOpacity}
          icon={images.plus}
          imageStyle={styles.buttonAddImage}
        />
        <Text style={styles.leftViewText}>Add</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {/* Mapping over groups and rendering buttons with groups initials */}
        {favorite_groups.map((group, index) => (
          <View key={`${group}-${index}`}>
            <Button
              id={`${group}-${index}`}
              locationInitials={getFirstTwoChars(group.name)}
              onPress={() => {
                setShowModal(true);
              }}
              touchableOpacityStyle={styles.buttonTouchableOpacity}
            />
            <Text style={styles.rightViewText} numberOfLines={1}>
              {getFirstFewChars(group.name)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FavouriteGroups;
