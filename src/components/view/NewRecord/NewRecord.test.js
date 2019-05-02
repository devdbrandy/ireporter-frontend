import React from 'react';
import { shallow } from 'enzyme';
import { NewRecord } from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    createRecord: {},
  };

  const component = shallow(<NewRecord {...props} />);
  return { props, component };
};

describe('<NewRecord />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
