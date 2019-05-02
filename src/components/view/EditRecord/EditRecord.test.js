import React from 'react';
import { shallow } from 'enzyme';
import { EditRecord } from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    createRecord: {},
    userRecords: [],
    updateRecord: jest.fn(),
  };

  const component = shallow(<EditRecord {...props} />);
  return { props, component };
};

describe('<EditRecord />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
