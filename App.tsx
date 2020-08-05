import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenMap} from './src/components/Map';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={styles.container}>
      <ScreenMap />
    </View>
  );
};

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

export default App;
