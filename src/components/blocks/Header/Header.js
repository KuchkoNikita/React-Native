import React from 'react';
import { View, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux'

import styles from './HeaderStyles'; 
import { weatherRequest, setCity } from './../../../action/index';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.header}>
      <TextInput 
        style={styles.input}
        onChangeText={(text) => dispatch(setCity(text))}
        placeholder="Введите город"
      />
      <Button
        style={styles.button}
        title="&#10003;"
        onPress={() => dispatch(weatherRequest())}
      />
    </View>
  );
};
