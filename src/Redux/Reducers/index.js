import {
  LOAD_CITIES,
  SELECT_CITY,
  NO_HOVER,
  ON_HOVER,
} from '../Constants';

const initialState = {
  cities: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CITIES: {
      const cities = action.payload.map(city => ({
          ...city,
          selected: false,
          hovered: false,
          id: `${city.latitude} ${city.longitude}`
        })
      );
      return { ...state, cities };
    }
    case SELECT_CITY: {
      const cities = state.cities.map(city => {
        if (city.id === action.id) {
          return { ...city, selected: !city.selected };
        }
        return city;
      });
      return { ...state, cities };
    }
    case NO_HOVER: {
      const cities = state.cities.map(city => {
        if (city.id === action.id) {
          return { ...city, hovered: false };
        }
        return city;
      });
      return { ...state, cities };
    }
    case ON_HOVER: {
      const cities = state.cities.map(city => {
        if (city.id === action.id) {
          return { ...city, hovered: true };
        }
        return city;
      });
      return { ...state, cities };
    }
    default:
      return state;
  }
};
