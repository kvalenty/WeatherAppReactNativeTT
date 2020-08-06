import {WEATHER_API_KEY, GOOGLE_PLACES_API_KEY} from '../constants/constants';

// const daysQuantity = 7;

// export const getUrlForDays = (latitude: number, longitude: number): string => {
//   return `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${Math.trunc(latitude)}&lon=${Math.trunc(longitude)}&cnt=${daysQuantity}&units=metric&appid=${WEATHER_API_KEY}`;
// };

export const getUrlForDays = (city: string): string => {
  // return `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${daysQuantity}&units=metric&appid=${WEATHER_API_KEY}`;
  return `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&appid=${WEATHER_API_KEY}`;
};

export const getUrlDaily = (latitude: number, longitude: number): string => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`;
};

export const getUrlPlaces = (city: string): string => {
  return `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&types=(cities)&language=en&key=${GOOGLE_PLACES_API_KEY}`;
};
