import React, {useState} from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  MapEvent,
  Callout,
} from 'react-native-maps';
import {View, StyleSheet, Text} from 'react-native';
import {getUrlDaily} from '../api/getUrl';
import {loadData} from '../api/weatherApi';
import {DailyWeather} from 'src/interfaces/interfaces';
import {DEGREE} from '../constants/constants';

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

const initialMarkerCoordinates: Coordinates = {
  latitude: 0,
  longitude: 0,
};

const initialRegion: Region = {
  latitude: 50.45466,
  latitudeDelta: 0.05,
  longitude: 30.5238,
  longitudeDelta: 0.05,
};

export const ScreenMap = () => {
  const [markerCoordinates, setMarkerCoordinates] = useState<Coordinates>(
    initialMarkerCoordinates,
  );

  const [dailyWeather, setDailyWeather] = useState<DailyWeather | null>(null);
  const {latitude, longitude} = markerCoordinates;
  const url = getUrlDaily(latitude, longitude);

  const onLongPressGetCoordinates = async ({nativeEvent}: MapEvent) => {
    setMarkerCoordinates(nativeEvent.coordinate);

    const loadedWeather = await loadData<DailyWeather>(url);

    setDailyWeather(loadedWeather);
  };

  const name = dailyWeather?.name;
  const temperature = Math.round(dailyWeather?.main.temp || 0);
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onLongPress={onLongPressGetCoordinates}
        initialRegion={initialRegion}>
        <Marker coordinate={markerCoordinates}>
          <Callout style={styles.calloutWidth}>
            <View style={styles.callout}>
              <View style={styles.calloutItem}>
                <Text style={styles.calloutText}>{name}</Text>
              </View>
              <View style={styles.calloutItem}>
                <Text style={styles.calloutText}>
                  {`${temperature} ${DEGREE}`}
                </Text>
              </View>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  calloutWidth: {
    height: 100,
    width: 100,
    overflow: 'scroll',
  },
  callout: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutItem: {
    paddingVertical: 5,
  },
  calloutText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
