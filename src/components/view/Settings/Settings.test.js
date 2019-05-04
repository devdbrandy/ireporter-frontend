import React from 'react';
import { shallow } from 'enzyme';
import { render, getByTestId } from 'react-testing-library';
import 'jest-dom/extend-expect'
import { Settings } from './index';
import { contextWrapper } from '../../../test/support/setup';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
const setup = () => {
  const props = {
    user: {
      firstname: 'john',
    },
    updateProfile: jest.fn(),
  };

  const component = shallow(<Settings {...props} />);
  return { props, component };
};

describe('<Settings />', () => {
  it('renders without crashing given the required props', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
  it('App loads with initial state', () => {
    const { props } = setup();
    const { container } = render(contextWrapper(<Settings {...props} />));
    const editForm = getByTestId(container, 'editForm');
    expect(editForm).toHaveFormValues({
      firstname: 'john'
    });
  });
});
