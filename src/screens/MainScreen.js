import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/blocks/Header/Header';
import { Loaction } from '../components/blocks/Loaction/Loaction';
import { Weather } from '../components/blocks/Weather/Weather';

export const MainScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Loaction />
      <Weather />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c9bbe',
    alignItems: 'center',
  },
});
