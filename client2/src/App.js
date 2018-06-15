import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';
import Board from './components/Board';
import reducers from './reducers';
import { loadState, saveState } from './persistance/loadState';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveState(store.getState()));

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Board />
        </div>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
