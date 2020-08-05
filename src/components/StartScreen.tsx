import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreenMap, Button} from './Map';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
