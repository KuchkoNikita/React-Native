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
  mapperForOpenWeather,
  mapperForYandexGeolocation
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
  
  try {
    const api_call = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=b6ce763b1e16f6f845d8d595fa0efb2c` );
    const response = await api_call.json();
    dispatch( weatherResponseAction( mapperForOpenWeather(response) ) );
    
    const { data } = getState();
    previousRequests.push({ date: new Date(), data })
  } catch (error) {
    console.error('Error: ', error);
    dispatch(weatherResponseFailAction(true));
  }
};

// Geolocation
export const reverseGeocoding = () => async (dispatch, getState) => {
  const currentPosition = {
    lat: -118.24,
    lng: 34.05,
  };
  
  try {
    const api_call = await fetch( `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=500e65e6-b4fb-4dbc-8abf-318ac1e1cf61&geocode=${currentPosition.lat},${currentPosition.lng}&lang=en_US` );
    const response = await api_call.json();
    
    dispatch(setCity(mapperForYandexGeolocation(response)))
    dispatch(weatherRequest())
  } catch (error) {
    console.error('Error: ', error);
    dispatch(weatherResponseFailAction(true));
  }
};

export const geolocationResponseAction = (position) => ({
  type: GEOLOCATION_RESPONSE,
  payload: position
})

export const geolocationResponseFailAction = (err) => ({
  type: GEOLOCATION_RESPONSE_FAIL,
  payload: err.message
})