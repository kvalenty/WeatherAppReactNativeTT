import React from 'react';
import {Marker} from 'react-native-maps';
import {Coordinates, DailyWeather} from 'src/interfaces/interfaces';
import {MapMarkerCallout} from '../MapMarkerCallout/MapMarkerCallout';
import {useNavigation} from '@react-navigation/native';

interface Props {
  coordinates: Coordinates;
  dailyWeather: DailyWeather | null;
}

export const MapMarker = (props: Props): JSX.Element => {
  const {coordinates, dailyWeather} = props;
  const navigation = useNavigation();

  const onCalloutPress = () => {
    navigation.navigate('Search', {
      coordinatesFromMap: coordinates,
    });
  };

  return (
    <Marker coordinate={coordinates} onCalloutPress={onCalloutPress}>
      <MapMarkerCallout dailyWeather={dailyWeather} />
    </Marker>
  );
};
