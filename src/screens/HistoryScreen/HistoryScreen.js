import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { Item } from '../../components/controls/Item/Item';

import styles from './HistoryScreenStyles';

export const HistoryScreen = ({}) => {
  const previousRequests = useSelector(state => state.previousRequests);
  console.log('previousRequests: ', previousRequests);

  const renderItem = ({ item }) => (
    <Item 
      date={item.date} 
      data={item.data}
    />
  );

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