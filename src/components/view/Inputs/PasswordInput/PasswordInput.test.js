import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from './index';

describe('<PasswordInput />', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      name: '',
      placeholder: '',
      handleOnChange: jest.fn()
    };
    const enzymeWrapper = shallow(<PasswordInput {...props} />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
