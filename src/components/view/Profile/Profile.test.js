import React from 'react';
import { shallow } from 'enzyme';
import Profile from './index';

describe('<Profile />', () => {
  it('renders without crashing given the required props', () => {
    const enzymeWrapper = shallow(<Profile />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
