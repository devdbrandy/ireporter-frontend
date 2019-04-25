import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('<Footer />', () => {
  it('renders without crashing given the required props', () => {
    const enzymeWrapper = shallow(<Footer />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
