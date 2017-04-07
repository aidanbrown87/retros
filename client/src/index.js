import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
import RetroApp from './reducers/index';
import App from './components/App';
import './index.css';

const socket = io()
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/")

let store = createStore(RetroApp, applyMiddleware(socketIoMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
