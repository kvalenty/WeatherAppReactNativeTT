import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {View} from 'react-native';
import {DailyWeather} from 'src/interfaces/interfaces';
import {DAYS, DEGREE} from '../constants/constants';
import {format} from 'date-fns';

const getDate = (milliseconds: number): Date => {
  return new Date(milliseconds * 1000);
};

interface Props {
  daily: DailyWeather[] | undefined;
}

export const WeatherList = (props: Props): JSX.Element => {
  const {daily} = props;
  const days = [...DAYS];

  return (
    <>
      {daily && (
        <View style={styles.weatherList}>
          <ScrollView>
            {daily?.map((dayItem) => {
              const date = getDate(dayItem?.dt);
              const dayNumber = date.getDay();
              const dayWeek = days[dayNumber];
              const temperature = Math.round(dayItem?.temp.day);

              return (
                <View key={dayItem?.dt} style={styles.weatherItem}>
                  <View>
                    <Text style={styles.weatherItemText}>
                      {format(date, 'MM/dd')}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.weatherItemText}>{dayWeek}</Text>
                  </View>
                  <View>
                    <Text style={styles.weatherItemText}>
                      {`${temperature} ${DEGREE}`}
                    </Text>
                  </View>
                </View>
              );
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
