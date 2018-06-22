import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';

import PostIt from '../postIts/PostIt';
import { ItemTypes } from '../itemTypes';
import { updatePostIt, updatePosition, updateColour } from '../postIts/reducer';
import { addPostItToGroup } from './reducer';

class Group extends Component {
    render() {
        const { connectDragSource, postIts, updateColour, updatePosition, updatePostIt, xPos, yPos, isOver, connectDropTarget } = this.props;
        return connectDropTarget(connectDragSource(
            <div style={{ position: 'absolute', left: xPos, top: yPos, display: 'flex', alignItems: 'flex-start', border: "solid red 5px" }} >
                {postIts.map(postIt => (
                    <PostIt
                    key={postIt.id}
                    {...postIt}
                    updatePostIt={updatePostIt}
                    updatePosition={updatePosition}
                    inGroup
                />
                ))}
                {isOver ? "drop" : null}
            </div>
        ));
    }
}

Group.propTypes = {

};

const groupSourceSpec = {
    beginDrag(props) {
      const { id } = props;
      return { groupId: id };
    }
}
  
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


const groupTarget = {
    drop(props, monitor) {
      const handledByChild = monitor.didDrop()
        switch (monitor.getItemType()) {
            case ItemTypes.POSTIT: {
                const { postItId } = monitor.getItem();
                props.addPostItToGroup(props.id, postItId)
            }
            case ItemTypes.GROUP: {
                console.log(monitor.getItem())
            }
        }
    }
};

const mapStateToProps = ({ postIts: allPostIts }, { postIts: groupPostIts}) => {
    const filteredPostIts = groupPostIts.map(id => (allPostIts[id]))
    return {
        postIts: filteredPostIts,
    }
}

const mapDispatchToProps = dispatch => ({
    updatePostIt: (id, text) => dispatch(updatePostIt(id, text)),
    updatePosition: (id, x, y) => dispatch(updatePosition(id, x, y)),
    updateColour: (id, colour) => dispatch(updateColour(id, colour)),
    addPostItToGroup: (groupId, id) => dispatch(addPostItToGroup(groupId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(ItemTypes.POSTIT, groupTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }),
  }))(DragSource(ItemTypes.GROUP, groupSourceSpec, collect)(Group)))