import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {GooglePlacesInput} from '../SearchBarAutocoplite/SearchBarAutocoplite';
import {Button, View} from 'react-native';
import {getUrlForDays, getUrlCityCoordinates} from '../api/getUrl';
import {loadData} from '../api/weatherApi';
import {GooglePlaceData} from 'react-native-google-places-autocomplete';
import {
  WeeklyWeather,
  GoogleCityInformation,
  Coordinates,
} from 'src/interfaces/interfaces';
import {WeatherList} from '../WeatherList/WeatherList';
import {DEFAULT_CITY_ID} from '../constants/constants';

export const SearchScreen = () => {
  const [searchedCity, setSearchedCity] = useState<GooglePlaceData | null>(null);

  const [
    searchedCityWeather,
    setSearchedCityWeather,
  ] = useState<WeeklyWeather | null>(null);

  const onPressFindCity = (city: GooglePlaceData) => {
    setSearchedCity(city);
  };

  const onPressGetWeather = () => {
    const urlInformation: string = getUrlCityCoordinates(
      searchedCity?.place_id || DEFAULT_CITY_ID,
    );
    const getData = async () => {
      const {result}: GoogleCityInformation = await loadData(urlInformation);
      const {
        geometry: {location},
      } = result;

      const coordinates: Coordinates = {
        latitude: location.lat,
        longitude: location.lng,
      };

      const urlWeather: string = getUrlForDays(coordinates);
      const loadedData: WeeklyWeather = await loadData(urlWeather);

      setSearchedCityWeather(loadedData);
    };

    getData();
  };

  const daily = searchedCityWeather?.daily;

  return (
    <View style={styles.screenContainer}>
      <View style={styles.searchBar}>
        <GooglePlacesInput onPressFindCity={onPressFindCity} />
        <View style={styles.buttonContainer}>
          <Button
            title="Search"
            accessibilityLabel="Search weather in choosen city"
            onPress={onPressGetWeather}
            color="tomato"
          />
        </View>
      </View>
      {searchedCityWeather && <WeatherList daily={daily} />}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    padding: 10,
  },
  buttonContainer: {
    marginLeft: 5,
  },
});
