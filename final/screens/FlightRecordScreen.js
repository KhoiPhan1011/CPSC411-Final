import React from 'react';
import { View, Text } from 'react-native';

export default function FlightRecordScreen() {
  const previousFlights = ['Flight 1', 'Flight 2', 'Flight 3'];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Flight Record</Text>
      {previousFlights.map((flight, index) => (
        <Text key={index}>{flight}</Text>
      ))}
    </View>
  );
}
