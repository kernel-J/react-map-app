import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

const store = configureStore([
  thunk,
])();

describe('<App />', () => {
  it('renders without crashing', () => {
    configure({ adapter: new Adapter() });
    
    const wrapper = shallow(<App store={store}/>).dive();
  });
});
