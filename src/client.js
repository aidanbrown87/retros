import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RetroApp from './reducers/';
import io from 'socket.io-client';

let store = createStore(RetroApp);



render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
