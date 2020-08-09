import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {DailyWeather} from 'src/interfaces/interfaces';
import {DAYS, DEGREE, getDate} from '../constants/constants';
import {format} from 'date-fns';

interface Props {
  dayItem: DailyWeather;
}

export const WeatherListItem = (props: Props): JSX.Element => {
  const {dayItem} = props;
  const days = [...DAYS];
  const date = getDate(dayItem?.dt);
  const dayNumber = date.getDay();
  const dayWeek = days[dayNumber];
  const temperature = Math.round(dayItem?.temp.day);

  return (
    <View key={dayItem?.dt} style={styles.weatherItem}>
      <View>
        <Text style={styles.weatherItemText}>{format(date, 'MM/dd')}</Text>
      </View>
      <View>
        <Text style={styles.weatherItemText}>{dayWeek}</Text>
      </View>
      <View>
        <Text style={styles.weatherItemText}>{`${temperature} ${DEGREE}`}</Text>
      </View>
    </View>
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
