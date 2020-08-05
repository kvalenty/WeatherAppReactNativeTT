export interface DailyWeather {
  base: string;
  clouds: {all: number};
  cod: number;
  coord: {lat: number; lon: number};
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: WeatherItem[];
  wind: {deg: number; speed: number};
}

interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface WeatherItem {
  description: string;
  icon: string;
  id: number;
  main: string;
}
