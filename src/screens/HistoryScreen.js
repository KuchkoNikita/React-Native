import React, {useEffect} from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { searchPastRequests } from './../action/index';

export const HistoryScreen = ({}) => {
  const dispatch = useDispatch();
  const previousRequests = useSelector(state => state.previousRequests);
  console.log(previousRequests);

  //useEffect(() => dispatch(searchPastRequests()), []);

const Item = ({ coordinates, city, date }) => {
  console.log('coordinates: ', coordinates);
  return (
    <View style={styles.row}>
      <Text style={styles.data}>{ `${date.getDate()}.${date.getMonth()}.${date.getFullYear() }`}</Text>
      <Text style={styles.time}>{ `${date.getHours()} : ${date.getMinutes() }`}</Text>
      <Text style={styles.position}>{ `latitude:${coordinates.lat} longitude:${ coordinates.lng }` }</Text>
      <Text style={styles.city}>{ city }</Text>
    </View>
  )
}

  const renderItem = ({ item }) => (
    <Item date={item.date} time={item.time} coordinates={item.coordinates} city={item.city} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={previousRequests}
        renderItem={renderItem}
        keyExtractor={item => `${item.lat + item.lng + Math.random() * 101}`}
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
  data: {

  },
  time: {

  },
  city: {

  }
});