import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Card from './Card';

it ('snapshot of card <Card />', () => {
  const snap = renderer.create(<Card props={[]}/>).toJSON();
  expect(snap).toMatchSnapshot();
});