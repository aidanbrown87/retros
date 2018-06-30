import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';

import PostIt from '../postIts/PostIt';
import { ItemTypes } from '../itemTypes';
import { updatePostIt, updatePosition, updateColour } from '../postIts/reducer';
import { addPostItToGroup, editGroupName } from './reducer';
import './group.css'

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditingGroupName: false };
    }

    toggleEditingGroup = () => {
        this.setState({ isEditingGroupName: !this.state.isEditingGroupName })
    }

    onBlur = (event) => {
        const value = event.target.value;
        console.log("onblur")
        console.log(value)
        this.props.editGroupName(this.props.id, value)
        this.toggleEditingGroup();
        event.preventDefault()
    }

    render() {
        const {
            connectDragSource,
            postIts,
            updateColour,
            updatePosition,
            updatePostIt,
            xPos,
            yPos,
            isOver,
            connectDropTarget,
            name,
        } = this.props;
        const { isEditingGroupName } = this.state;
        return connectDropTarget(connectDragSource(
            <div className='group' style={{ left: xPos, top: yPos }} >
                {postIts.map(postIt => (
                    <PostIt
                    key={postIt.id}
                    {...postIt}
                    updatePostIt={updatePostIt}
                    updatePosition={updatePosition}
                    updateColour={updateColour}
                    inGroup
                />
                ))}
                {isOver ? "drop" : null}
                {isEditingGroupName
                    ? <input className="group-name" defaultValue={name} onBlur={this.onBlur} />
                    : <span className="group-name" onClick={this.toggleEditingGroup} >{name || "Group Name"}</span>
                }
            </div>
            
        ));
    }
}

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
    addPostItToGroup: (groupId, id) => dispatch(addPostItToGroup(groupId, id)),
    editGroupName: (groupId, name) => dispatch(editGroupName(groupId, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(ItemTypes.POSTIT, groupTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }),
  }))(DragSource(ItemTypes.GROUP, groupSourceSpec, collect)(Group)))