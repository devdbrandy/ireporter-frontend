import React from 'react';
import { shallow } from 'enzyme';
import Record from './index';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    record: {
      images: [],
      author: {
        firstname: 'john',
        lastname: 'doe',
      },
    },
    openModal: jest.fn(),
  };

  const component = shallow(<Record {...props} />);
  return { props, component };
};

describe('<Record />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
