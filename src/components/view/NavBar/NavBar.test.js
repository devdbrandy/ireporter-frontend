import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './index';

describe('<NavBar />', () => {
  it('renders without crashing given the required props', () => {
    const enzymeWrapper = shallow(<NavBar />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
