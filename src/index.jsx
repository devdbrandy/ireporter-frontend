import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ToastContainer, Flip } from 'react-toastify';
import reduxStore from './redux/store';
import App from './App';
import './styles/style.css';
import './styles/main.css';

const { store, persistor } = reduxStore;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      <ToastContainer
        pauseOnFocusLoss={false}
        transition={Flip}
        className="toast-container"
        toastClassName="default-toast"
        autoClose={5000}
        position="top-right"
      />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
