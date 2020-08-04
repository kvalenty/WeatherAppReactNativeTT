import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScreenMap} from './src/components/Map';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello 12</Text>
      <ScreenMap />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
