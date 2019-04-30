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
      const cities = state.cities.map(city => {
        if (city.id === action.id) {
          return { ...city, selected: true };
        }
        return city;
      });
      return { ...state, cities };
    }
    case UNSELECT_CITY: {
      const cities = state.cities.map(city => {
        if (city.id === action.id) {
          return { ...city, selected: false };
        }
        return city;
      });
      return { ...state, cities };
    }
    default:
      return state;
  }
};
