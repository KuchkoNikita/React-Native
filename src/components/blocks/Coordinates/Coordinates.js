import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './CoordinatesStyles';

export const Coordinates = () => {
  const coordinates = useSelector(state => state.data.coordinates);

  return (
    <React.Fragment>
      {coordinates && <Text style={styles.coordinates}>{`latitude: ${coordinates.lat}`}</Text>}
      {coordinates && <Text style={styles.coordinates}>{`longitude: ${coordinates.lng}`}</Text>}
    </React.Fragment>
  );
};