import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './postIt.css';
import bucket from './bucket.png';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from '../itemTypes';

const PostItSourceSpec = {
  beginDrag(props) {
    const { id } = props;
    return { postItId: id };
  }
}

class PostIt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dragging: false,
      dragStartX: undefined,
      dragStartY: undefined,
      editing: false,
    }
  }

  static propTypes = {
    text: PropTypes.string,
    id: PropTypes.string.isRequired,
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    updatePostIt: PropTypes.func.isRequired,
    updatePosition: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.ref.focus()
  }
  

  updateText = (event) => {
    const { updatePostIt, id } = this.props;
    updatePostIt(id, event.target.value)

  }

  onEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  onChangeColour = (colour) => {
    const { updateColour, id } = this.props;
    updateColour(id, colour);
    this.setState({ editing: false })
  }


  render() {
    const { text, xPos, yPos, colour, id, connectDragSource, isDragging, connectDropTarget, isOver, inGroup } = this.props;
    const { dragging, editing, hidden } = this.state;
    if (isDragging) return null;
    const positionStyle = inGroup ? {} : { left: xPos, top: yPos };

    const postIt = (<div
    className={ inGroup ? 'postItSimple' : 'postItContainer'}
    style={{ ...positionStyle, backgroundColor: colour }}
  >
    <div className="postIt" id={id}>
      <textarea
        ref={(comp) => this.ref = comp}
        className='postItInput'
        value={text}
        onChange={this.updateText}
        rows={4}
      />
      <img className="edit_icon" src={bucket} onClick={this.onEdit} />
    </div>
    
    <div className="postIt_colours" style={{ height: editing ? 30 : 0 }}>
      <Dot colour="#ff7a7a" updateColour={this.onChangeColour} />
      <Dot colour="#65b8ff" updateColour={this.onChangeColour} />
      <Dot colour="#f77aff" updateColour={this.onChangeColour} />
      <Dot colour="#efe014" updateColour={this.onChangeColour} />
      <Dot colour="#7aff91" updateColour={this.onChangeColour} />

    </div>
  </div>)

    return inGroup ? postIt : connectDropTarget(connectDragSource(
      postIt
    ))
  }
}
const boardTarget = {
  drop(props, monitor, component) {
    console.log("drop on POSTIT")
    const { id, xPos, yPos, inGroup } = props
    console.log(props)
    const { postItId, xPos: draggedXPos, yPos: draggedYPos, updatePosition } = monitor.getItem();
    !inGroup && props.createGroup(props.id, postItId, xPos - 5, yPos - 5)
  //   
  //   const { x, y } = monitor.getDifferenceFromInitialOffset();
  //   props.updatePosition(postItId, (xPos + x), (yPos + y))
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default DropTarget(ItemTypes.POSTIT, boardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver({ shallow: true }),
}))(DragSource(ItemTypes.POSTIT, PostItSourceSpec, collect)(PostIt))


const Dot = ({ colour, updateColour }) => {
  const onClick = () => {
    console.log("Dot on Click")
    updateColour(colour)
  }
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: colour, height: 20, width: 20, borderRadius: "50%", border: "1px solid grey", margin: "0px 2px" }}
    >
      
    </div>
  );
};

