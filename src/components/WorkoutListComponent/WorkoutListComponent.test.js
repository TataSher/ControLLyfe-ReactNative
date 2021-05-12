import React from 'react';
import renderer from 'react-test-renderer';
import { WorkoutListComponent } from './WorkoutListComponent';

test('renders correctly', () => {
  const tree = renderer.create(<WorkoutListComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});