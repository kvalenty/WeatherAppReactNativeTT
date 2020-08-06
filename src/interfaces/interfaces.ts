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

// const AutoCompleteCity = {
  // description: 'Talladega Superspeedway, Speedway Blvd, Lincoln, AL, USA',
  // id: 'e98cadb3ad4bd0c7715b6f51738172fe38222028',
  // matched_substrings: [
  //   {
  //     length: 4,
  //     offset: 0,
  //   },
  // ],
  // place_id: 'ChIJqdwHaL7Pi4gRW-aSKeYTJKw',
  // reference: 'ChIJqdwHaL7Pi4gRW-aSKeYTJKw',
  // structured_formatting: {
  //   main_text: 'Talladega Superspeedway',
  //   main_text_matched_substrings: [[Object]],
  //   secondary_text: 'Speedway Blvd, Lincoln, AL, USA',
  // },
  // terms: [
  //   {offset: 0, value: 'Talladega Superspeedway'},
  //   {offset: 25, value: 'Speedway Blvd'},
  //   {offset: 40, value: 'Lincoln'},
  //   {offset: 49, value: 'AL'},
  //   {offset: 53, value: 'USA'},
  // ],
  // types: ['rv_park', 'lodging', 'point_of_interest', 'establishment'],
// };

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
