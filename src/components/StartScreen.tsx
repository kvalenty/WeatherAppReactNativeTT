import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenMap} from './Map';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
  },
});

export const StartScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenMap />
    </View>
  );
};
