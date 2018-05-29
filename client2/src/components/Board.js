import React, { Component } from "react";
import { connect } from "react-redux";
import PostIt from "../postIts/PostIt";
import AddPostItButton from "./AddPostItButton";

import "./board.css";
import { updatePostIt } from "../postIts/reducer";

class Board extends Component {
  render() {
    const { postIts, updatePostIt } = this.props;
    console.log(this.props);
    return (
      <div className="board">
        {postIts
          ? Object.values(postIts).map(obj => (
              <PostIt {...obj} updatePostIt={updatePostIt} />
            ))
          : null}
        <AddPostItButton />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePostIt: (id, text) => dispatch(updatePostIt(id, text))
});

export default connect(
  state => ({ postIts: state.postIts, test: "test" }),
  mapDispatchToProps,
)(Board);