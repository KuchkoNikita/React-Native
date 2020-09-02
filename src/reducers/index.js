import {
  SET_CITY,
  WEATHER_RESPONSE,
  WEATHER_RESPONSE_FAIL,
} from './../constants/index';

const initialState = {
  data: null,
  city: 'Minsk',
  isLoading: false,
  isOpenMenu: false,
  isError: false,
  isAutomatic: true,
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
      isLoading: false,
      isError: false,
      isAutomatic: false,
    };

    case WEATHER_RESPONSE_FAIL: return {
      ...state,
      isError: payload,
    };

    default:
      return state;
  }
}