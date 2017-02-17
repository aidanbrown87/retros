import React from 'react';
import { connect } from 'react-redux'
import io from 'socket.io-client'
import { addPostIt } from '../actions/index'
import PostIt from './postIt'

class Board extends React.Component {

  componentWillMount() {
    const socket = io()
    socket.on('postItUpdate', (postIt) => {
      console.log("received postit: ", postIt)
      this.props.dispatch(addPostIt(postIt))
    })
  }

  render() {
    return (
      <ul className="postIts">
        {this.props.postIts.map((result) => {
          return <PostIt key={result.id} postIt={result} />
        })}
      </ul>
    );
  }

}

export default connect(state => state)(Board)
