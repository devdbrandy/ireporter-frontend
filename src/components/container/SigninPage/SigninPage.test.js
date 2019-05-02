import React from 'react';
import { shallow } from 'enzyme';
import { SigninPage } from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    isAuthenticated: false,
    handleLogin: jest.fn(),
    handleSignUp: jest.fn(),
  };

  const component = shallow(<SigninPage {...props} />);
  return { props, component };
};

describe('<SigninPage />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
