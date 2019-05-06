import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import { BrowseReports } from './index';

jest.mock('react-modal');

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    records: [],
    fetchRecords: jest.fn(),
  };

  const component = shallow(<BrowseReports {...props} />);
  return { props, component };
};

describe('<BrowseReports />', () => {
  it('renders without crashing given the required props', () => {
    Modal.setAppElement.mockImplementation(() => null);

    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
