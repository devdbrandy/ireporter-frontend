import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
function setup() {
  const props = {
    user: {
      username: ''
    },
    logout: jest.fn(),
  };

  const component = shallow(<NavBar {...props} />);
  return { props, component };
}

describe('<NavBar />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
