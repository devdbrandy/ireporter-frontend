import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './index';

describe('<Dashboard />', () => {
  it('renders without crashing given the required props', () => {
    const enzymeWrapper = shallow(<Dashboard />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
