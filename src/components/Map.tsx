import React, {useState, useEffect} from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  MapEvent,
  Callout,
} from 'react-native-maps';
import {View, StyleSheet, Text} from 'react-native';
import {getUrlDaily} from './api/getUrl';
import {loadData} from './api/weatherApi';
import {DailyWeather} from 'src/interfaces/interfaces';

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
  const [markerCoordinates, setMarkerCoordinates] = useState<Coordinates>(
    initialCoordinates,
  );
  const [currentCoordinates, setCurrentCoordinates] = useState<Region>(
    initialRegion,
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeather | null>(null);
  // const [isVisible, setIsVisible] = useState<Boolean>(false);
  const {latitude, longitude} = markerCoordinates;
  const url = getUrlDaily(latitude, longitude);

  useEffect(() => {
    const initialWeather = async () => {
      const loadedWeather = await loadData<DailyWeather>(url);

      setDailyWeather(loadedWeather);
    };

    initialWeather();
  }, []);

  const onLongPressGetCoordinates = ({nativeEvent}: MapEvent): void => {
    setMarkerCoordinates(nativeEvent.coordinate);
    // setIsVisible(false);
  };

  const onPanDragGetCoordinates = (region: Region): void => {
    setCurrentCoordinates(region);
  };

  const coordinate = {latitude, longitude};

  const onPress = async () => {
    const loadedWeather = await loadData<DailyWeather>(url);

    // setIsVisible(true);
    setDailyWeather(loadedWeather);
  };

  const name = dailyWeather?.name;
  const temp = Math.round(dailyWeather?.main.temp || 0);

  return (
    <View style={styles.container}>
      {console.log(dailyWeather?.name)}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onLongPress={onLongPressGetCoordinates}
        onRegionChangeComplete={onPanDragGetCoordinates}
        region={currentCoordinates}>
        <Marker
          coordinate={coordinate}
          onPress={onPress}
          icon={require('../images/marker-icon.png')}>
          {/* {isVisible && ( */}
          <Callout>
            <View>
              <Text>{name}</Text>
              <View>
                <Text>{temp}</Text>
              </View>
            </View>
          </Callout>
          {/* )} */}
        </Marker>
      </MapView>
    </View>
  );
};
