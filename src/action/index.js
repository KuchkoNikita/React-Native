import {
  WEATHER_RESPONSE,
  WEATHER_RESPONSE_FAIL,
  SET_CITY,
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

export const weatherRequest = () => async (dispatch, getState) => {
  try {
    const { city } = getState();
    const api_call = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=b6ce763b1e16f6f845d8d595fa0efb2c` );
    const response = await api_call.json();
    console.log('response: ', response);
    
    dispatch( weatherResponseAction( mapperForOpenWeather(response) ) );
  } catch (error) {
    console.error('Error: ', error);
    dispatch(weatherResponseFailAction(true));
  }
  console.log(getState());
};