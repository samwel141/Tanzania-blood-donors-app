import React, {useRef, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import {MAP_API_KEY} from '@env';
import { GOOGLE_MAPS_APIKEY } from '../../config/constants/Index';


import { COLORS, CUSTOM_MAP_STYLE, DEVICE } from '../../utils/constants';
import images from '../../utils/images';
import styles from './style';

interface Location {
  lat: number;
  lng: number;
}

interface DisplayProps {
  pickup: Location;
  delivery: Location;
}

const Display: React.FC<DisplayProps> = ({pickup, delivery}) => {
  const mapRef = useRef<MapView | null>(null);

  const pickup_location = {
    latitude: pickup.lat,
    longitude: pickup.lng,
  };
  const delivery_location = {
    latitude: delivery.lat,
    longitude: delivery.lng,
  };

  const onMapReady = () => {
    if (pickup_location && delivery_location && mapRef.current) {
      mapRef.current.fitToCoordinates([pickup_location, delivery_location], {
        edgePadding: {top: 75, right: 75, bottom: 75, left: 75},
        animated: true,
      });
    }
  };

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={styles.displayMapView}
      mapType="standard"
      showsBuildings={true}
      showsPointsOfInterest={false}
      customMapStyle={CUSTOM_MAP_STYLE}
      zoomEnabled={true}
      showsCompass={false}
      followsUserLocation={true}
      onMapReady={onMapReady} // Add the onMapReady prop here
    >
      {pickup_location && (
        <Marker.Animated
          coordinate={pickup_location}
          draggable
          style={styles.displayMarker}>
          <View style={styles.displayMarkerView}>
            <Image source={images.box} style={styles.displayMarkerImage} />
          </View>
          <Callout style={styles.displayCallout}>
            <Text style={styles.displayCalloutText} numberOfLines={4}>
              Pickup Location
            </Text>
          </Callout>
        </Marker.Animated>
      )}
      {delivery_location && (
        <Marker.Animated
          coordinate={delivery_location}
          draggable
          style={styles.displayMarker}>
          <View style={styles.displayMarkerView}>
            <Image source={images.sieg} style={styles.displayMarkerUserImage} />
          </View>
          <Callout style={styles.displayCallout}>
            <Text style={styles.displayCalloutText} numberOfLines={4}>
              Delivery Location
            </Text>
          </Callout>
        </Marker.Animated>
      )}
      <MapViewDirections
        origin={pickup_location}
        destination={delivery_location}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor={COLORS.brand}
      />
    </MapView>
  );
};

export default Display;
