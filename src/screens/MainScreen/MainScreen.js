import React, { useEffect, useState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from '../../components/blocks/Header/Header';
import { Loaction } from '../../components/blocks/Loaction/Loaction';
import { Weather } from '../../components/blocks/Weather/Weather';
import { Error } from '../../components/blocks/Error/Error'
import { Coordinates } from '../../components/blocks/Coordinates/Coordinates';

import { geolocationResponseAction, reverseGeocoding } from '../../action/index';
import styles from './MainScreenStyles';

export const MainScreen = ({}) => {
  const dispatch = useDispatch();
  const [where, setWhere] = useState(); 

  const data = useSelector(state => state.data);
  const isError = useSelector(state => state.isError);

  useEffect(() => {
    const geoOptions = {
        enableHighAccuracy: true,
        timeOut: 20000,
        maximumAge: 60 * 60 * 24
    };
    navigator.geolocation.getCurrentPosition( geoSuccess, geoSuccess, geoOptions);
  }, [])

  const geoSuccess = (position) => {
    setWhere({ lat: position.coords.latitude, lng: position.coords.longitude });
    dispatch(geolocationResponseAction(where));
    dispatch(reverseGeocoding());
  }

  return (
    <View style={styles.container} >
      <Header />
      { data && <Coordinates /> }
      { isError && <Error /> }
      { data && !isError && 
        <React.Fragment>
          <Loaction /> 
          <Weather />
        </React.Fragment>
      }
      <StatusBar style="auto" />
    </View>
  )
}
