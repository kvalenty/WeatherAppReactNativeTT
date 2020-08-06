import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {GooglePlacesInput} from './SearchBarAutocoplite/SearchBarAutocoplite';
import {Button, View} from 'react-native';
import {getUrlForDays, getCityInformation} from './api/getUrl';
import {loadData} from './api/weatherApi';
import {GooglePlaceData} from 'react-native-google-places-autocomplete';
import {CityInformation, WeeklyWeather} from 'src/interfaces/interfaces';

export const SearchScreen = () => {
  const [searchedCity, setSearchedCity] = useState<GooglePlaceData | null>(
    null,
  );
  const [searchedCityWeather, setSearchedCityWeather] = useState<WeeklyWeather | null>(null);

  const onPressFindCity = (city: GooglePlaceData) => {
    setSearchedCity(city);
  };

  const onPressGetWeather = () => {
    const urlInformation: string = getCityInformation(
      searchedCity?.structured_formatting.main_text || 'Kiev',
    );
    const getData = async () => {
      const cityInformation: CityInformation = await loadData(urlInformation);

      const urlWeather: string = getUrlForDays(
        cityInformation.location.lat,
        cityInformation.location.lon,
      );
      const loadedData: WeeklyWeather = await loadData(urlWeather);

      setSearchedCityWeather(loadedData);
    };

    getData();
  };

  return (
    <View style={styles.screenContainer}>
      <GooglePlacesInput onPressFindCity={onPressFindCity} />
      <View style={styles.buttonContainer}>
        <Button
          title="Search"
          accessibilityLabel="Search weather in choosen city"
          onPress={() => onPressGetWeather()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#eee',
  },
  buttonContainer: {
    height: 80,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
