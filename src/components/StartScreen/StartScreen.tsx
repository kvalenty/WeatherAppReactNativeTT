import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenMap} from '../ScreenMap/ScreenMap';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
  },
});

export const StartScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScreenMap />
    </View>
  );
};
