import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, MapEvent} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';
import {getUrlDailyWeather} from '../api/getUrl';
import {loadData} from '../api/weatherApi';
import {DailyWeather, Coordinates} from 'src/interfaces/interfaces';
import {initialMarkerCoordinates, initialRegion} from '../constants/constants';
import {MapMarker} from '../MapMarker/MapMarker';

export const ScreenMap = (): JSX.Element => {
  const [markerCoordinates, setMarkerCoordinates] = useState<Coordinates>(
    initialMarkerCoordinates,
  );

  const [dailyWeather, setDailyWeather] = useState<DailyWeather | null>(null);

  const onLongPressGetCoordinates = async (event: MapEvent) => {
    const {
      nativeEvent: {coordinate},
    } = event;

    setMarkerCoordinates(coordinate);
    const url = getUrlDailyWeather(coordinate);

    const loadedWeather = await loadData<DailyWeather>(url);

    setDailyWeather(loadedWeather);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onLongPress={onLongPressGetCoordinates}
        initialRegion={initialRegion}>
        <MapMarker
          coordinates={markerCoordinates}
          dailyWeather={dailyWeather}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    height: '100%',
  },
});
