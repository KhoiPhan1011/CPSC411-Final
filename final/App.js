import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NearestAirportScreen from './screens/NearestAirportScreen';
import EnterDestinationScreen from './screens/EnterDestinationScreen';
import FlightRecordScreen from './screens/FlightRecordScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="NearestAirport" component={NearestAirportScreen} options={{ title: 'Nearest Airport' }} />
        <Stack.Screen name="EnterDestination" component={EnterDestinationScreen} options={{ title: 'Destination' }} />
        <Stack.Screen name="FlightRecord" component={FlightRecordScreen} options={{ title: 'Flight Record' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
