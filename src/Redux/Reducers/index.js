import {
  LOAD_CITIES,
  SELECT_CITY,
  UNSELECT_CITY
} from '../Constants';

const initialState = {
  cities: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CITIES: {
      const cities = action.payload.map(city => (
        { ...city, selected: false, id: `${city.latitude} ${city.longitude}` }
      ));
      return { ...state, cities };
    }
    case SELECT_CITY: {
      return { ...state };
    }
    case UNSELECT_CITY: {
      return { ...state };
    }
    default:
      return state;
  }
};
