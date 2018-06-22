import React, { Component } from "react";
import { connect } from "react-redux";
import PostIt from "../postIts/PostIt";
import AddPostItButton from "./AddPostItButton";

import "./board.css";
import { updatePostIt, updatePosition, updateColour } from "../postIts/reducer";
import { DropTarget, XYCoord } from "react-dnd";
import { ItemTypes } from "../itemTypes";
import Group from "../groups/Group";
import { addGroup, createGroup } from "../groups/reducer";

class Board extends Component {
    render() {
        const {
            postIts,
            groups,
            updatePostIt,
            updatePosition,
            updateColour,
            createGroup,
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
                              createGroup={createGroup}
                          />
                      ))
                    : null
                }
                {groups 
                    ? Object.values(groups).map(group => (
                        <Group key={group.id} {...group} />
                    ))
                    : null
                }
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
        switch (monitor.getItemType()) {
            case ItemTypes.POSTIT: {
                const { postItId } = monitor.getItem();
                const { x, y } = monitor.getSourceClientOffset();
                props.updatePosition(postItId, (x), (y))
            }
            case ItemTypes.GROUP: {
                console.log(monitor.getItem())
            }
        }
        
    }
    
  }
};

const mapDispatchToProps = dispatch => ({
    updatePostIt: (id, text) => dispatch(updatePostIt(id, text)),
    updatePosition: (id, x, y) => dispatch(updatePosition(id, x, y)),
    updateColour: (id, colour) => dispatch(updateColour(id, colour)),
    createGroup: (id1, id2, x, y) => dispatch(createGroup(id1, id2, x, y)),
});

export default connect(
    ({ postIts, groups }) => ({ postIts, groups }),
    mapDispatchToProps
)(
    DropTarget([ItemTypes.POSTIT, ItemTypes.GROUP], boardTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver({ shallow: true }),
    }))(Board)
);
