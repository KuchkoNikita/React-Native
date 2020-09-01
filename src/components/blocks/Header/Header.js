import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image 
        source={require('../../../icons/menu/open-menu.png')} 
        style={styles.menuToggle}
      /> 
      <TextInput 
        style={styles.input}
        onChangeText={text => console.log(text)}
        placeholder="Введите город"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    width: 200,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  menuToggle: {
    position: 'absolute',
    left: -80,
  },
});