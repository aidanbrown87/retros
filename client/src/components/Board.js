import React from 'react';
import { connect } from 'react-redux'
import PostIt from './postIt'
import { editPostIt } from '../actions/index'

class Board extends React.Component {

  render() {
    return (
      <ul className="postIts">
        {this.props.postIts.map((result) => {
          return <PostIt key={result.id} postIt={result} edit={() => editPostIt} />
        })}
      </ul>
    );
  }

}

export default connect(state => state)(Board)
