import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import reducers from './reducers'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;
