import axios from 'axios';

import {
  LOAD_CITIES,
  SELECT_CITY,
  NO_HOVER,
  ON_HOVER
} from '../Constants';
import { cities_url } from '../../config.json';

export const loadCities = payload => ({
  type: LOAD_CITIES,
  payload
});

export const selectCity = id => ({
  type: SELECT_CITY,
  id
});

export const noHover = id => ({
  type: NO_HOVER,
  id
});

export const onHover = id => ({
  type: ON_HOVER,
  id
});

export const fetchCities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(cities_url);
      return dispatch(loadCities(data));
    } catch (error) {
      console.log('error: ', error);
    }
  };
};
