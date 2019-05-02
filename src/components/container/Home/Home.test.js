import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    isAuthenticated: false,
    handleSignUp: jest.fn(),
  };

  const component = shallow(<Home {...props} />);
  return { props, component };
};

describe('<Home />', () => {
  it('renders without crashing given the required props', () => {

    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
