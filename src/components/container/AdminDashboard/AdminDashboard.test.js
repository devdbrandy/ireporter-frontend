import React from 'react';
import { shallow } from 'enzyme';
import { AdminDashboard } from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    isAdmin: false,
    fetchRecords: jest.fn(),
    records: [],
    deleteRecord: jest.fn(),
    updateStatus: jest.fn(),
    overview: {},
  };

  const component = shallow(<AdminDashboard {...props} />);
  return { props, component };
};

describe('<AdminDashboard />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
