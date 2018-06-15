import React, { Component } from "react";
import { connect } from "react-redux";
import PostIt from "../postIts/PostIt";
import AddPostItButton from "./AddPostItButton";

import "./board.css";
import { updatePostIt, updatePosition, updateColour } from "../postIts/reducer";
import { DropTarget, XYCoord } from "react-dnd";
import { ItemTypes } from "../itemTypes";

class Board extends Component {
    render() {
        const {
            postIts,
            updatePostIt,
            updatePosition,
            updateColour,
            connectDropTarget,
            isOver
        } = this.props;
        return connectDropTarget(
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
                {isOver && "Drop it!"}
            </div>
        );
    }
}

const boardTarget = {
  drop(props, monitor) {
    const handledByChild = monitor.didDrop()
    if (!handledByChild) {
      const { postItId } = monitor.getItem();
      const { x, y } = monitor.getSourceClientOffset();
      props.updatePosition(postItId, (x), (y))
    }
    
  }
};

const mapDispatchToProps = dispatch => ({
    updatePostIt: (id, text) => dispatch(updatePostIt(id, text)),
    updatePosition: (id, x, y) => dispatch(updatePosition(id, x, y)),
    updateColour: (id, colour) => dispatch(updateColour(id, colour))
});

export default connect(
    ({ postIts }) => ({ postIts }),
    mapDispatchToProps
)(
    DropTarget(ItemTypes.POSTIT, boardTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver({ shallow: true }),
    }))(Board)
);
