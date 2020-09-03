import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

import styles from './EditModalStyle';

export const EditModal = ({visible, setVisible, data}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text style={styles.parametrs}>City: {data.city}</Text>
        <Text style={styles.parametrs}>Country: {data.country}</Text>
        <Text style={styles.parametrs}>Description: {data.description}</Text>
        <Text style={styles.parametrs}>Tempreture:{data.tempreture} &deg;C</Text>
        <Text style={styles.parametrs}>Humidity: {data.humidity}</Text>
        <Text style={styles.parametrs}>Wind: {data.wind}</Text>
        <Button 
          title="Close"
          onPress={() => {
            setVisible(false);
          }}
      />
      </View>
    </Modal>
  );
};
