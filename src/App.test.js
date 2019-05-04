import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import App from './App';

jest.mock('react-modal');

describe('<App />', () => {
  it('renders without crashing given the required props', () => {
    Modal.setAppElement.mockImplementation(() => null);
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
