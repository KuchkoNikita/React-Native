import React, {useEffect, useState} from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { EditModal } from '../../components/controls/editModal/EditModal';
import { searchPastRequests, setCity, weatherRequest } from '../../action/index';

//import styles from './MainScreenStyles';

export const HistoryScreen = ({}) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const previousRequests = useSelector(state => state.previousRequests);
  console.log('previousRequests: ', previousRequests);

  //useEffect(() => dispatch(searchPastRequests()), []);

  const Item = ({ date, data }) => {
    console.log('data: ', data);
    return (
      <View style={styles.row} >
        <EditModal visible={isModal} setVisible={setIsModal} data={data}/>
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
      </View>
    )
  }

  const renderItem = ({ item }) => {
    console.log('item: ', item);
    return (
    <Item 
      date={item.date} 
      data={item.data}
    />
  )};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={previousRequests}
        renderItem={renderItem}
        keyExtractor={item => `${item.data.city + item.data.coordinates.lng + Math.random() * 101}`}
      />
    </SafeAreaView>
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
  parametrs: {
    fontSize: 20
  }
});