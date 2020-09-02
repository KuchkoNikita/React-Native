import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Header } from '../components/blocks/Header/Header';
import { Loaction } from '../components/blocks/Loaction/Loaction';
import { Weather } from '../components/blocks/Weather/Weather';

export const MainScreen = ({}) => {
  const data = useSelector(state => state.data);
  const isError = useSelector(state => state.isError);

  return (
    <View style={styles.container}>
      <Header />
      { data && !isError && 
        <React.Fragment>
          <Loaction /> 
          <Weather />
        </React.Fragment>
      }
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
