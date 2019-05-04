/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
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
