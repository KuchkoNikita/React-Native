import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './LoactionStyles';

export const Loaction = () => {
  const city = useSelector(state => state.data.city);
  const country = useSelector(state => state.data.country);

  return (
    <View style={styles.loaction}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.country}>{country}</Text>
    </View>
  );
};