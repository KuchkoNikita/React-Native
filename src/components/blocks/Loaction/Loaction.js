import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './LoactionStyles';

export const Loaction = () => {
  const city = useSelector(state => state.data.city);
  const country = useSelector(state => state.data.country);
  const coordinates = useSelector(state => state.data.coordinates);

  return (
    <View style={styles.loaction}>
      {coordinates && <Text style={styles.country}>{`latitude: ${coordinates.lat}`}</Text>}
      {coordinates && <Text style={styles.country}>{`longitude: ${coordinates.lng}`}</Text>}
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.country}>{country}</Text>
    </View>
  );
};