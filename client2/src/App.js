import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Board from './components/Board';
import reducers from './reducers'

const store = createStore(reducers)

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

export default App;
