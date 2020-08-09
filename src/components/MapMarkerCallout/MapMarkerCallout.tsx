import React from 'react';
import {Callout} from 'react-native-maps';
import {View, StyleSheet, Text} from 'react-native';
import {DEGREE} from '../constants/constants';
import {DailyWeather} from 'src/interfaces/interfaces';

interface Props {
  dailyWeather: DailyWeather | null;
}

export const MapMarkerCallout = (props: Props): JSX.Element => {
  const {dailyWeather} = props;
  const name = dailyWeather?.name;
  const temperature = Math.round(dailyWeather?.main.temp || 0);

  return (
    <Callout tooltip>
      <View>
        <View style={styles.bubble}>
          <Text style={styles.calloutText}>{name}</Text>
          <Text style={styles.calloutText}>{`${temperature} ${DEGREE}`}</Text>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    </Callout>
  );
};

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 10,
    width: 150,
    alignItems: 'center',
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  calloutText: {
    fontWeight: 'bold',
  },
});
