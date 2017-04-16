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
    console.log(this.props);
    return (
      <ul className="postIts">
        {this.props.postIts.map((result) => {
          return <PostIt key={result.id}
            postIt={result} editPostIt={this.handleClick}
            onEdit={this.handleEdit} finishEdit={this.handleFinishEdit}
          />
        })}
      </ul>
    );
  }

}

const mapStateToProps = (state,ownProps) => {
    console.log("mapsStateToProps", state);
    return {
        postIts: Object.values(state.postIts)
    };
};

export default connect(mapStateToProps)(Board)
