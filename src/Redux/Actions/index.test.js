import * as actions from './index';
import * as types from '../Constants';

describe('actions', () => {
  it('create load cities action', () => {
    const payload = [];
    const expectedAction = {
      type: types.LOAD_CITIES,
      payload
    };
    expect(actions.loadCities(payload)).toEqual(expectedAction);
  });

  it('create select city action', () => {
    const id = '12345';
    const expectedAction = {
      type: types.SELECT_CITY,
      id
    };
    expect(actions.selectCity(id)).toEqual(expectedAction);
  });

  it('create on hover action', () => {
    const id = '12345';
    const expectedAction = {
      type: types.ON_HOVER,
      id
    };
    expect(actions.onHover(id)).toEqual(expectedAction);
  });

  it('create no hover action', () => {
    const id = '12345';
    const expectedAction = {
      type: types.NO_HOVER,
      id
    };
    expect(actions.noHover(id)).toEqual(expectedAction);
  });
});
