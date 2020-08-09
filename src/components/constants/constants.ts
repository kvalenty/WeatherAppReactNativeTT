import {Coordinates} from 'src/interfaces/interfaces';
import {Region} from 'react-native-maps';

export const WEATHER_API_KEY = 'b2f45490d0d2a228b4b26a393d46f250';
export const WEATHER_API_KEY_LIST = 'bb31b54caeea48708fd202028200608';
export const GOOGLE_MAP_API_KEY = 'AIzaSyA2nOoJj-KYG5MV3DPIKB-zywV6tPmhEeI';
export const GOOGLE_PLACES_API_KEY = 'AIzaSyCN9U_gsB9rJ8W5z6gPmFmn3b5yQwh72I4';

export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getDate = (milliseconds: number): Date => {
  return new Date(milliseconds * 1000);
};

export const initialMarkerCoordinates: Coordinates = {
  latitude: 0,
  longitude: 0,
};

export const initialRegion: Region = {
  latitude: 50.45466,
  latitudeDelta: 0.05,
  longitude: 30.5238,
  longitudeDelta: 0.05,
};

export const DEGREE = 'C\u00B0';
export const DEFAULT_CITY_ID = 'ChIJBUVa4U7P1EAR_kYBF9IxSXY';
