
import {
  GEOLOCATION_RESPONSE_FAIL,
  GEOLOCATION_RESPONSE,
  GEOLOCATION_CURRENT
} from './../constants/index';
import { mapperForYandexGeolocation1, mapperForYandexGeolocation2 } from './../utils/index';
import { 
  weatherResponseFailAction,
  weatherRequest
} from './weather'

export const setCurrentGeolocation = (position) => ({
  type: GEOLOCATION_CURRENT,
  payload: position
});

export const geolocationResponseAction = (position) => ({
  type: GEOLOCATION_RESPONSE,
  payload: position
});

export const geolocationResponseFailAction = (err) => ({
  type: GEOLOCATION_RESPONSE_FAIL,
  payload: err.message
});
/*
const cityСheck = () => {
  const api_call = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=b6ce763b1e16f6f845d8d595fa0efb2c` );
  const response = await api_call.json();
  return response.cod
};

export const findingSuitableMapper = (city) => {
  
};*/

export const reverseGeocoding = () => async (dispatch, getState) => {
  const { currentPosition } = getState();
  console.log('currentPosition: ', currentPosition);
  
  try {
    const api_call = await fetch( `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=500e65e6-b4fb-4dbc-8abf-318ac1e1cf61&geocode=${currentPosition.lat},${currentPosition.lng}&lang=en_US` );
    const response = await api_call.json();
    
    dispatch(setCity(mapperForYandexGeolocation1(response)))
    dispatch(weatherRequest())
  } catch (error) {
    dispatch(weatherResponseFailAction(true));
  }
};
