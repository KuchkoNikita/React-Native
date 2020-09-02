import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 

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
      <AntDesign 
        name="search1" 
        size={24} 
        color="white"
        style={styles.button}
        title="&#10003;"
        onPress={() => dispatch(weatherRequest())}
      />
    </View>
  );
};
