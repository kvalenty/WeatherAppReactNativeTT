import {
  WEATHER_API_KEY,
  // WEATHER_API_KEY_LIST,
  GOOGLE_PLACES_API_KEY,
} from '../constants/constants';
import {Coordinates} from 'src/interfaces/interfaces';

export const getUrlForDays = (coordinates: Coordinates): string => {
  const {latitude, longitude} = coordinates;

  return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=${WEATHER_API_KEY}`;
};

// export const getCityInformation = (city: string): string => {
//   return `http://api.weatherapi.com/v1/timezone.json?key=${WEATHER_API_KEY_LIST}&q=${city}`;
// };

export const getUrlCityCoordinates = (cityId: string): string => {
  return `https://maps.googleapis.com/maps/api/place/details/json?place_id=${cityId}&fields=name,geometry&key=${GOOGLE_PLACES_API_KEY}`;
};

export const getUrlDailyWeather = (coordinates: Coordinates): string => {
  const {latitude, longitude} = coordinates;

  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`;
};

// export const getUrlPlaces = (city: string): string => {
//   return `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&types=(cities)&language=en&key=${GOOGLE_PLACES_API_KEY}`;
// };
