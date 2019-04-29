/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import initialState from '../../redux/store/initialState';

export { initialState as mockState };

export const createMockStore = () => {
  const mockStore = configMockStore([thunk]);
  return mockStore;
};

const setup = (component, store = initialState) => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  const connectedWrapper = mount(
    <Provider store={mockStore(store)}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
  return connectedWrapper;
};

export default setup;
