import React from 'react';
import Board from './Board.js';
import Nav from './Nav.js';

export default React.createClass({

  render() {
    const postIts = ["one", "two", "three"];

    return (
      <div>
        <Nav />
        <Board data={postIts} />
      </div>

    );
  }
})
