import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './WeatherStyles';

export const Weather = () => {
  const description = useSelector(state => state.data.description);
  const tempreture = useSelector(state => state.data.tempreture);
  const humidity = useSelector(state => state.data.humidity);
  const wind = useSelector(state => state.data.wind);
  const icon = useSelector(state => state.data.icon);
  return (
    <View style={styles.weather}>
      <Image 
        source={{uri: `http://openweathermap.org/img/wn/${icon}.png`,}} 
        style={styles.iconWeather}
      /> 
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.tempreture}>{tempreture} &deg;C</Text>
      <Text style={styles.additionalParameter}>Humidity {humidity}%</Text>
      <Text style={styles.additionalParameter}>Wind {wind} km/h</Text>
    </View>
  );
};