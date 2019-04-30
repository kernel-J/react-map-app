import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

test('render default Card', () => {
  const data = {
    selected: false,
    city: 'New York',
    population: 8405837,
    state: 'New York'
  };
  const component = renderer.create(
    <Card city={data} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render selected Card', () => {
  const data = {
    selected: true,
    city: 'New York',
    popuation: 8405837,
    state: 'New York'
  };
  const component = renderer.create(
    <Card city={data} />
  );
  
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
