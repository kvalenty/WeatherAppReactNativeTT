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

export interface CityPlacesAPI {
  description: string;
  id: string;
  matched_substrings: MatchedSubstrings[];
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
  terms: Term[];
  types: string[];
}

interface MatchedSubstrings {
  length: number;
  offset: number;
}

interface StructuredFormatting {
  main_text: string;
  main_text_matched_substrings: [[Object]];
  secondary_text: string;
}

interface Term {
  offset: number;
  value: string;
}

export interface CityInformation {
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
}

export interface DailyWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: DailyWeatherDescription[];
  clouds: {all: number};
  pop: number;
  rain: number;
  uvi: number;
}

export interface DailyWeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeeklyWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: DailyWeatherDescription[];
  };
  daily: DailyWeather[];
}
