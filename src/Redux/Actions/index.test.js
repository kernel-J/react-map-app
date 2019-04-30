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

  it('create unselect city action', () => {
    const id = '12345';
    const expectedAction = {
      type: types.UNSELECT_CITY,
      id
    };
    expect(actions.unselectCity(id)).toEqual(expectedAction);
  });
});
