import React, {useEffect, useState} from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { Item } from '../../components/controls/Item/Item';
import { searchPastRequests, setCity, weatherRequest } from '../../action/index';

//import styles from './MainScreenStyles';

export const HistoryScreen = ({}) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const previousRequests = useSelector(state => state.previousRequests);

  //useEffect(() => dispatch(searchPastRequests()), []);

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