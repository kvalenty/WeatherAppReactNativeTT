//import 'react-native-gesture-handler';
import React from 'react';
// import {Button} from 'react-native';
// import {ScreenMap} from './src/components/Map';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StartScreen} from './src/components/StartScreen';
import {SearchScreen} from './src/components/SearchScreen';

declare const global: {HermesInternal: null | {}};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 20,
          },
          tabStyle: {
            justifyContent: 'center',
          },
        }}>
        <Tab.Screen name="Map" component={StartScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
