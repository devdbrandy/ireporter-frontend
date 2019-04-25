import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './index';

describe('<LoginForm />', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      handleLogin: jest.fn()
    };

    const enzymeWrapper = shallow(<LoginForm {...props} />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
