import React from 'react';
import { shallow } from 'enzyme';
import Settings from './index';

describe('<Settings />', () => {
  it('renders without crashing given the required props', () => {
    const enzymeWrapper = shallow(<Settings />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
