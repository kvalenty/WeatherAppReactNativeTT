import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 300,
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const ScreenMap = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 50.45466,
        longitude: 30.5238,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    />
  </View>
);
