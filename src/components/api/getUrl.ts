import {WEATHER_API_KEY} from '../constants/constants';

const daysQuantity = 7;

export const getUrlForDays = (latitude: number, longitude: number): string => {
  return `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${Math.trunc(latitude)}&lon=${Math.trunc(longitude)}&cnt=${daysQuantity}&units=metric&appid=${WEATHER_API_KEY}`;
};

export const getUrlDaily = (latitude: number, longitude: number): string => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`;
};
