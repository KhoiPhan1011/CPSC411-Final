import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function EnterDestinationScreen({ navigation }) {
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    // Perform search or navigate to the next screen using entered 'destination'
    navigation.navigate('DestinationDetailsScreen', { destination });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 40 }}>
      <Text style={{ fontSize: 24 }}>Enter a Destination</Text>
      <View style={{ marginTop: 20, width: '80%', marginBottom: 20 }}>
        <TextInput
          placeholder="Enter destination"
          value={destination}
          onChangeText={(text) => setDestination(text)}
          style={{ borderWidth: 1, padding: 8, width: '100%' }}
        />
      </View>
      <Button title="Search" onPress={handleSearch} style={{ marginBottom: 20 }} />
    </View>
  );
}
