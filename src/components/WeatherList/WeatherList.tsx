import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View} from 'react-native';
import {DailyWeather} from 'src/interfaces/interfaces';
import {WeatherListItem} from '../WeatherListItem/WeatherListItem';

interface Props {
  daily: DailyWeather[] | undefined;
}

export const WeatherList = (props: Props): JSX.Element => {
  const {daily} = props;

  return (
    <>
      {daily && (
        <View style={styles.weatherList}>
          <ScrollView>
            {daily?.map((dayItem) => {
              return <WeatherListItem dayItem={dayItem} key={dayItem?.dt} />;
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  weatherList: {
    paddingHorizontal: 25,
    flex: 1,
  },
  weatherItem: {
    borderRadius: 10,
    marginVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'tomato',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherItemText: {
    fontSize: 24,
    paddingVertical: 10,
    color: '#7eecff',
  },
});
