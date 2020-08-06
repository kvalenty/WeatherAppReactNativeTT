import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API_KEY} from '../constants/constants';

interface Props {
  onPressFindCity: Function;
}

export const GooglePlacesInput = (props: Props): JSX.Element => {
  const {onPressFindCity} = props;

  return (
    <GooglePlacesAutocomplete
      textInputProps={{
        onSubmitEditing: () => {
          console.log('Edited');
        },
      }}
      placeholder="Type City name..."
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
      onPress={(data, details = null) => {
        console.log(data);
        onPressFindCity(data);
      }}
      onFail={(error) => console.log(error)}
      requestUrl={{
        url: 'https://maps.googleapis.com/maps/api',
        useOnPlatform: 'all',
      }}
      debounce={300}
      styles={{
        textInputContainer: {
          backgroundColor: 'rgba(0,0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
    />
  );
};
