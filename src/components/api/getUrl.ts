import {WEATHER_API_KEY, GOOGLE_PLACES_API_KEY} from '../constants/constants';
import {Coordinates} from 'src/interfaces/interfaces';

const getCoordinate = (coordinate: number): number => {
  return Math.trunc(coordinate * 100) / 100;
};

export const getUrlForDays = (coordinates: Coordinates): string => {
  const {latitude, longitude} = coordinates;

  return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=${WEATHER_API_KEY}`;
};

export const getUrlCityCoordinates = (cityId: string): string => {
  return `https://maps.googleapis.com/maps/api/place/details/json?place_id=${cityId}&fields=name,geometry&key=${GOOGLE_PLACES_API_KEY}`;
};

export const getUrlDailyWeather = (coordinates: Coordinates): string => {
  let {latitude, longitude} = coordinates;
  latitude = getCoordinate(latitude);
  longitude = getCoordinate(longitude);

  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`;
};
