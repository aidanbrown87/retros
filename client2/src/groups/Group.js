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
            connectDropTarget,
            name,
            size,
            isOver,
            id
        } = this.props;
        const { isEditingGroupName } = this.state;
        const isOverStyle = isOver ? { borderColor: 'green' } : {};
        return connectDropTarget(connectDragSource(
            <div className='group' style={{ left: xPos, top: yPos, ...isOverStyle }} >
                {postIts.map(postIt => (
                    <PostIt
                    key={postIt.id}
                    {...postIt}
                    updatePostIt={updatePostIt}
                    updatePosition={updatePosition}
                    updateColour={updateColour}
                    inGroup
                    size={size}
                    groupId={id}
                />
                ))}
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
        switch (monitor.getItemType()) {
            case ItemTypes.POSTIT: {
                const { postItId } = monitor.getItem();
                props.addPostItToGroup(props.id, postItId)
                break
            }
            case ItemTypes.GROUP: {
                console.log(monitor.getItem())
                break
            }
            default: [
                console.log(monitor.getItem())
            ]
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
    isOver: monitor.isOver({ shallow: false }),
  }))(DragSource(ItemTypes.GROUP, groupSourceSpec, collect)(Group)))