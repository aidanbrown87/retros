import React, { Component } from "react";
import { connect } from "react-redux";
import PostIt from "../postIts/PostIt";
import AddPostItButton from "./AddPostItButton";

import "./board.css";
import { updatePostIt, updatePosition, updateColour } from "../postIts/reducer";

class Board extends Component {
  render() {
    const { postIts, updatePostIt, updatePosition, updateColour } = this.props;
    return (
      <div className="board">
        {postIts
          ? Object.values(postIts).map(obj => (
              <PostIt
                key={obj.id}
                {...obj}
                updatePostIt={updatePostIt}
                updatePosition={updatePosition}
                updateColour={updateColour}
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
  updateColour: (id, colour) => dispatch(updateColour(id, colour)),
});

export default connect(
  ({ postIts }) => ({ postIts }),
  mapDispatchToProps,
)(Board);
