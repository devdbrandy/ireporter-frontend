import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import { Dashboard } from './index';

jest.mock('react-modal');

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    userId: 1,
    fetchRecords: jest.fn(),
    records: [],
  };

  const component = shallow(<Dashboard {...props} />);
  return { props, component };
};

describe('<Dashboard />', () => {
  it('renders without crashing given the required props', () => {
    Modal.setAppElement.mockImplementation(() => null);

    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
