import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Loaction = () => {
  return (
    <View style={styles.loaction}>
      <Text style={styles.town}>Минск</Text>
      <Text style={styles.country}>Беларусь</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaction: {
    marginTop: 70,
  },
  town: {
    color: '#fff',
    fontSize: 32,
    textAlign: 'center',
  },
  country: {
    color: '#fff',
    fontSize: 19,
    textAlign: 'center',
  },
});