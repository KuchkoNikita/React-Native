import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import { Header } from './src/components/blocks/Header/Header';
import { Loaction } from './src/components/blocks/Loaction/Loaction';
import { Weather } from './src/components/blocks/Weather/Weather'
import { AppNavigation } from './src/navigation/AppNavigation';


const Api = {
  openweather: {
    key: 'b6ce763b1e16f6f845d8d595fa0efb2c',
    url: 'https://api.openweathermap.org/data/2.5/',
    urlIcon: 'http://openweathermap.org/img/wn/10d@2x.png'
  }
}

export default function App() {
  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c9bbe',
    alignItems: 'center',
  },
});

