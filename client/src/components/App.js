import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Board from './Board.js';
import Home from './Home'
import Nav from './Nav.js';
import User from './User'
import AddButton from './AddNewItemButton'
import '../App.css'

export default React.createClass({

  render() {

    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/board' component={RetroBoard} />
          <Route path='/user' component={Home} />
        </div>
      </Router>
    );
  }
})

const RetroBoard = () => (
  <div>
    <User />
    <Board />
    <AddButton />
  </div>
)
