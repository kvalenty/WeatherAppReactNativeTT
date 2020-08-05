import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, MapEvent} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: '50%',
    // width: '10%',
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const initialCoordinates: Coordinates = {
  latitude: 50.45466,
  longitude: 30.5238,
};

const initialRegion: Region = {
  latitude: 50.45466,
  latitudeDelta: 0.05,
  longitude: 30.5238,
  longitudeDelta: 0.05,
};

export const ScreenMap = () => {
  const [markerCoordinates, setMarkerCoordinates] = useState<Coordinates>(initialCoordinates);
  const [currentCoordinates, setCurrentCoordinates] = useState<Region>(initialRegion);

  const onPressGetCoordinates = ({nativeEvent}: MapEvent): void => setMarkerCoordinates(nativeEvent.coordinate);
  const onPanDragGetCoordinates = (region: Region): void => setCurrentCoordinates(region);

  const {latitude, longitude} = markerCoordinates;

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={onPressGetCoordinates}
        onRegionChangeComplete={onPanDragGetCoordinates}
        region={currentCoordinates}>
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          icon={require('../images/marker-icon.png')}
        />
      </MapView>
    </View>
  );
};
