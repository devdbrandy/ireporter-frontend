import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from './index';

describe('<SignupForm />', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      handleSignUp: jest.fn()
    };
    const enzymeWrapper = shallow(<SignupForm {...props} />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
