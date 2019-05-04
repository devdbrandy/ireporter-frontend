import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
function setup() {
  const props = {
    user: {},
    overview: {},
  };

  const component = shallow(<Profile {...props} />);
  return { props, component };
}

describe('<Profile />', () => {
  it('renders without crashing given the required props', () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });
});
