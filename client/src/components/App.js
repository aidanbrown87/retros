import React from 'react';
import Board from './Board.js';
import Nav from './Nav.js';
import AddField from './AddField'
import AddButton from './AddNewItemButton'
import '../App.css'

export default React.createClass({

  render() {

    return (
      <div>
        <Nav />
        <Board />
        <AddField />
        <AddButton />
      </div>

    );
  }
})
