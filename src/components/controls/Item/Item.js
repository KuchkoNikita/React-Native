import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux'

import styles from './ItemStyle';
import { EditModal } from '../editModal/EditModal';
import { setCity, weatherRequest } from '../../../action/index'

export const Item = ({ date, data }) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  return (
    <View style={styles.row} >
      <Text style={styles.parametrs}>{ `Date: ${date.getDate()}.${date.getMonth()}.${date.getFullYear() }`}</Text>
      <Text style={styles.parametrs}>{ `Time: ${date.getHours()} : ${date.getMinutes() }`}</Text>
      <Text style={styles.parametrs}>{ `latitude:${ data.coordinates.lat } longitude:${ data.coordinates.lng }` }</Text>
      <Text style={styles.parametrs}>{ `City: ${data.city}` }</Text>
      <Button 
        title="Repeat this request"
        onPress={() => {
          dispatch(setCity(data.city));
          dispatch(weatherRequest());
        }}
      />
      <Button 
        title="Check this request(History)"
        onPress={() => {
          setIsModal(true)
        }}
      />
      <EditModal visible={isModal} setVisible={setIsModal} data={data}/>
    </View>
  )
}