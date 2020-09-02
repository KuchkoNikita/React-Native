import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const HistoryScreen = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.data}>12 сенября</Text>
        <Text style={styles.time}>12.30</Text>
        <Text style={styles.position}>12.22.33.44</Text>
        <Text style={styles.city}>Минск</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f26122',
    alignItems: 'center',
  },
  row: {
    marginTop: 20,
    backgroundColor: '#fff',
    alignSelf: 'stretch'
  },
  data: {

  },
  time: {

  },
  city: {

  }
});