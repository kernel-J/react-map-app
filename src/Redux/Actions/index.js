import {
  LOAD_CITIES,
  SELECT_CITY,
  UNSELECT_CITY
} from '../Constants';

export const loadCities = payload => ({
  type: LOAD_CITIES,
  payload
});

export const selectCity = id => ({
  type: SELECT_CITY,
  id
});

export const unselectCity = id => ({
  type: UNSELECT_CITY,
  id
});
