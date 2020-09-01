import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Weather = () => {
  return (
    <View style={styles.weather}>
      <Image 
        source={{uri: 'http://openweathermap.org/img/wn/10d@2x.png',}} 
        style={styles.iconWeather}
      /> 
      <Text style={styles.description}>Облочно</Text>
      <Text style={styles.tempreture}>20 &deg;C</Text>
      <Text style={styles.additionalParameter}>Humidity 10%</Text>
      <Text style={styles.additionalParameter}>Wind 5 km/h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWeather: {
    width: 150, 
    height: 150
  },
  weather: {
    color: '#fff',
    marginTop: 50,
  },
  description: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  tempreture: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'center',
  },
  additionalParameter: {
    color: '#fff',
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
  },
});