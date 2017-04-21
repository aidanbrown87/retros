import React from 'react';
import { connect } from 'react-redux'
import PostIt from './postIt'
import { editPostIt, sendEditPostIt, sendFinishEdit } from '../actions/index'

class Board extends React.Component {

  handleClick = (id) => {
    this.props.dispatch(editPostIt(id))
  }

  handleEdit = (id, text) => {
    this.props.dispatch(sendEditPostIt(id, text))
  }

  handleFinishEdit = (id) => {
    this.props.dispatch(sendFinishEdit(id))
  }

  render() {
    return (
      <ul className="postIts">
        {this.props.postIts.map((result) => {
          return <PostIt key={result.id}
            postIt={result} editPostIt={this.handleClick}
            onEdit={this.handleEdit} finishEdit={this.handleFinishEdit}
            username={this.props.username}
          />
        })}
      </ul>
    );
  }

}

const mapStateToProps = (state,ownProps) => {
    return {
        postIts: Object.values(state.postIts),
        username: state.user.username
    };
};

export default connect(mapStateToProps)(Board)
