import React from 'react';
import { shallow } from 'enzyme';
import { Settings } from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    user: {},
    updateProfile: jest.fn(),
  };

  const component = shallow(<Settings {...props} />);
  return { props, component };
};

describe('<Settings />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
