import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API_KEY} from '../constants/constants';
import {StyleSheet} from 'react-native';

interface Props {
  onPressFindCity: Function;
  currentCityPlaceHolder: string | null;
}

export const GooglePlacesInput = (props: Props): JSX.Element => {
  const {onPressFindCity, currentCityPlaceHolder} = props;

  return (
    <GooglePlacesAutocomplete
      textInputProps={{
        onSubmitEditing: () => {
          console.log('Edited');
        },
      }}
      placeholder={currentCityPlaceHolder || 'Type City name and chose one...'}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
      onPress={(data) => {
        onPressFindCity(data);
      }}
      onFail={(error) => console.log(error)}
      debounce={300}
      styles={{
        textInputContainer: styles.textInputContainer,
        textInput: styles.textInput,
        predefinedPlacesDescription: styles.predefinedPlacesDescription,
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: 'rgba(0,5,6,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
});
