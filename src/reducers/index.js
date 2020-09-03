import {
  SET_CITY,
  WEATHER_RESPONSE,
  WEATHER_RESPONSE_FAIL,
  GEOLOCATION_RESPONSE_FAIL,
  GEOLOCATION_RESPONSE,
  GEOLOCATION_CURRENT
} from './../constants/index';

const initialState = {
  data: null,
  previousRequests: [],
  currentPosition: null,
  isError: false,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CITY: return {
      ...state,
      city: payload,
    };

    case WEATHER_RESPONSE: return {
      ...state,
      data: { ...payload },
      isError: false,
    };

    case WEATHER_RESPONSE_FAIL: return {
      ...state,
      isError: payload,
    };

    case GEOLOCATION_RESPONSE_FAIL: return {
      ...state,
      isError: payload,
    }

    case GEOLOCATION_RESPONSE: return {
      ...state,
      currentPosition: payload,
    }

    case GEOLOCATION_CURRENT: return {
      ...state,
      previousRequests: payload,
    }

    default:
      return state;
  }
}