import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import { BrowseRecords } from './index';

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

  const component = shallow(<BrowseRecords {...props} />);
  return { props, component };
};

describe('<BrowseRecords />', () => {
  it('renders without crashing given the required props', () => {
    Modal.setAppElement.mockImplementation(() => null);

    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
