import React from 'react';
import { shallow } from 'enzyme';
import Layout from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    children: {},
  };

  const component = shallow(<Layout {...props} />);
  return { props, component };
};

describe('<Layout />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
