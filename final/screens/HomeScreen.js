import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./background.jpg')} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 40 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Flight Explorer</Text>
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)', 
              borderRadius: 20, 
              width: 200, 
              padding: 10,
            }}
            onPress={() => navigation.navigate('NearestAirport')}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>Find Nearest Airport</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)', 
              borderRadius: 20,
              width: 200, 
              padding: 10,
            }}
            onPress={() => navigation.navigate('EnterDestination')}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>Enter a Destination</Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)', 
              borderRadius: 20, 
              width: 120, 
              padding: 10,
            }}
            onPress={() => navigation.navigate('About')}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>About</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)', 
              borderRadius: 20, 
              width: 150, 
              padding: 10,
            }}
            onPress={() => navigation.navigate('FlightRecord')}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>Flight Record</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
