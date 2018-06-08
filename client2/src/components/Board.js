import React, { Component } from "react";
import { connect } from "react-redux";
import PostIt from "../postIts/PostIt";
import AddPostItButton from "./AddPostItButton";

import "./board.css";
import { updatePostIt, updatePosition } from "../postIts/reducer";

class Board extends Component {
  render() {
    const { postIts, updatePostIt, updatePosition } = this.props;
    return (
      <div className="board">
        {postIts
          ? Object.values(postIts).map(obj => (
              <PostIt
                key={obj.id}
                {...obj}
                updatePostIt={updatePostIt}
                updatePosition={updatePosition}
              />
            ))
          : null}
        <AddPostItButton />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePostIt: (id, text) => dispatch(updatePostIt(id, text)),
  updatePosition: (id, x, y) => dispatch(updatePosition(id, x, y)),
});

export default connect(
  ({ postIts }) => ({ postIts }),
  mapDispatchToProps,
)(Board);
