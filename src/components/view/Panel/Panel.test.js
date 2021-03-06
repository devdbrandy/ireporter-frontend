import React from 'react';
import { shallow } from 'enzyme';
import Panel from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    title: '',
    history: {},
    children: {},
  };

  const component = shallow(<Panel {...props} />);
  return { props, component };
};

describe('<Panel />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
