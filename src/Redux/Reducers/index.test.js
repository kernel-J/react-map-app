import rootReducer from './index';
import * as types from '../Constants';

describe('rootReducer', () => {
  it('return initial state', () => {
    const expected = { cities: [] };
    expect(rootReducer(undefined, {})).toEqual(expected);
  });

  it('handle LOAD_CITIES', () => {
    const payload = [
    {
      city: 'New York',
      state: 'New York',
      latitude: 1,
      longitude: 1
    },
    {
      city: 'Los Angeles',
      state: 'California',
      latitude: 2,
      longitude: 2
    }
    ];
    const newState = payload.map(city => ({ 
        ...city,
        selected: false,
        hovered: false,
        id: `${city.latitude} ${city.longitude}`
      }));
    const expected = { cities: newState };
    expect(
      rootReducer([], {
        type: types.LOAD_CITIES,
        payload
      })
    ).toEqual(expected);
  });
  
  it('handle SELECT_CITY', () => {
    const payload = [
    {
      city: 'New York',
      state: 'New York',
      latitude: 1,
      longitude: 1,
      selected: false,
      id: '1 1'
    }];
    const newState = payload.map(city => ({
        ...city, 
        selected: true,
        id: `${city.latitude} ${city.longitude}`
      }));
    const expected = { cities: newState };
    expect(rootReducer({ cities: payload }, {
      type: types.SELECT_CITY,
      id: '1 1'
    })).toEqual(expected);
  });
  
  it('handle unselecting city', () => {
    const payload = [
    {
      city: 'New York',
      state: 'New York',
      latitude: 1,
      longitude: 1,
      selected: true,
      id: '1 1'
    }];
    const newState = payload.map(city => ({
        ...city,
        selected: false,
        id: `${city.latitude} ${city.longitude}`
      }));
    const expected = { cities: newState };
    expect(rootReducer({ cities: payload }, {
      type: types.SELECT_CITY,
      id: '1 1'
    })).toEqual(expected);
  });

  it('handle ON_HOVER', () => {
    const payload = [
    {
      city: 'New York',
      state: 'New York',
      latitude: 1,
      longitude: 1,
      selected: true,
      hovered: false,
      id: '1 1'
    }];
    const newState = payload.map(city => ({
        ...city,
        selected: true,
        hovered: true,
        id: `${city.latitude} ${city.longitude}`
      }));
    const expected = { cities: newState };
    expect(rootReducer({ cities: payload }, {
      type: types.ON_HOVER,
      id: '1 1'
    })).toEqual(expected);
  });

  it('handle NO_HOVER', () => {
    const payload = [
    {
      city: 'New York',
      state: 'New York',
      latitude: 1,
      longitude: 1,
      selected: false,
      hovered: true,
      id: '1 1'
    }];
    const newState = payload.map(city => ({
        ...city,
        selected: false,
        hovered: false,
        id: `${city.latitude} ${city.longitude}`
      }));
    const expected = { cities: newState };
    expect(rootReducer({ cities: payload }, {
      type: types.NO_HOVER,
      id: '1 1'
    })).toEqual(expected);
  });
});
