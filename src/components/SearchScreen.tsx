import React, {useState} from 'react';
import {StyleSheet, Image, Text, StatusBar} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import {GOOGLE_PLACES_API_KEY} from './constants/constants';
import {GooglePlacesInput} from './SearchBarAutocoplite/SearchBarAutocoplite';
import {Button, View} from 'react-native';
import { getUrlForDays } from './api/getUrl';
import { loadData } from './api/weatherApi';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#eee',
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     width: '100%',
//     height: '100%',
//   },
// });

export const SearchScreen = () => {
  const [searchedCity, setSearchedCity] = useState<GooglePlaceData | null>(null);
  const [searchedCityWeather, setSearchedCityWeather] = useState<any[]>([]);

  const onPressFindCity = (city: GooglePlaceData) => {
    setSearchedCity(city);
  }

  const onPressGetWeather = () => {
    const url: string = getUrlForDays(searchedCity?.structured_formatting.main_text || 'kyiv');
    console.log(url);
    const getData = async () => {
      const loadedData: any[] = await loadData(url);

      setSearchedCityWeather(loadedData);
    };

    getData();
  };

  console.log(111, searchedCityWeather);

  return (
    <View style={styles.screenContainer}>
      <GooglePlacesInput onPressFindCity={onPressFindCity} />
      <View style={styles.test}>
        <Button
          title="Search"
          accessibilityLabel="Search weather in choosen city"
          onPress={() => onPressGetWeather()}
        />
        {/* <Image
          style={styles.image}
          source={require('../images/search-icon.png')}
          onPr
        /> */}
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
  test: {
    height: 80,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'tomato',
    // backgroundColor: '#499afc',
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  // },
  // item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  // title: {
  //   fontSize: 32,
  // },
});
