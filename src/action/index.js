import { AsyncStorage } from '@react-native-community/async-storage'
import {
  WEATHER_RESPONSE,
  WEATHER_RESPONSE_FAIL,
  SET_CITY,
  PREVIOUS_REQUESTS,
  GEOLOCATION_RESPONSE_FAIL,
  GEOLOCATION_RESPONSE,
} from './../constants/index';
import {
  mapperForOpenWeather
} from './../utils/index';

export const setCity = text => ({
  type: SET_CITY,
  payload: text,
});

export const weatherResponseAction = data => ({
  type: WEATHER_RESPONSE,
  payload: data,
});

export const weatherResponseFailAction = error => ({
  type: WEATHER_RESPONSE_FAIL,
  payload: error,
});

export const searchPastRequests = () => async (dispatch, getState) => {
  const previousRequests = await AsyncStorage.getItem(PREVIOUS_REQUESTS);
};

export const weatherRequest = () => async (dispatch, getState) => {
  const { city, previousRequests } = getState();
  console.log(city);
  
  try {
    const api_call = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=b6ce763b1e16f6f845d8d595fa0efb2c` );
    const response = await api_call.json();
    dispatch( weatherResponseAction( mapperForOpenWeather(response) ) );
    
    const { data } = getState();
    previousRequests.push({date: new Date(), city, coordinates: data.coordinates})
  } catch (error) {
    console.error('Error: ', error);
    dispatch(weatherResponseFailAction(true));
  }
};

// Geolocation

export const geolocationResponseAction = (position) => ({
  type: GEOLOCATION_RESPONSE,
  payload: position
})

export const geolocationResponseFailAction = (err) => ({
  type: GEOLOCATION_RESPONSE_FAIL,
  payload: err.message
})
/*
export const getCurrentPosition = () => async (dispatch, getState) => {
  let geoOptions = {
    enableHighAccuracy: true,
    timeOut: 20000,
    maximumAge: 60 * 60 * 24
  };
  
  navigator.geolocation.getCurrentPosition( dispatch(geolocationResponseAction), dispatch(geolocationResponseFailAction), geoOptions);
}*/
