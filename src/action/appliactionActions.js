import { SET_CITY, SET_VISABLE_MODAL } from './../constants/index';

export const setCity = text => ({
  type: SET_CITY,
  payload: text,
});
