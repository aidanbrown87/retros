import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostIt from '../postIts/PostIt';
import AddPostItButton from './AddPostItButton'

import './board.css';

class Board extends Component {
  render() {
    const { postIts } = this.props;
    console.log(this.props)
    return (
      <div className='board'>

        { postIts ? Object.values(postIts).map(obj => <PostIt {...obj} />) : null}
        <AddPostItButton />
      </div>
    )
  }
}



export default connect(state => ({ postIts: state.postIts, test: 'test' }))(Board)
