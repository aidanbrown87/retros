import React from 'react';
import Board from './Board.js';
import Nav from './Nav.js';
import '../App.css'

export default React.createClass({

  render() {

    return (
      <div>
        <Nav />
        <Board />
      </div>

    );
  }
})
