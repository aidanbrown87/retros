import React from 'react';
import Board from './Board.js';

export default React.createClass({

  render() {
    const postIts = ["one", "two", "three"];

    return (
      <Board data={postIts} />
    );
  }
})
