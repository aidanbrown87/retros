import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './postIt.css';
import bucket from './bucket.png';


export default class PostIt extends Component {
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

  onDragStart = ({ clientX, clientY}) => {
    this.setState({
      dragging: true,
      dragStartX: clientX,
      dragStartY: clientY,
    });
  }

  onDragEnd = ({ clientX, clientY }) => {
    const { updatePosition, id, xPos, yPos } = this.props;
    const { dragStartX, dragStartY } = this.state;
    const xMovement = clientX - dragStartX;
    const yMovement = clientY - dragStartY;
    
    updatePosition(id, (xPos + xMovement), (yPos + yMovement))
    this.setState({
      dragging: false,
      dragStartX: undefined,
      dragStartY: undefined,
      hidden: false,
    })
  }

  onDragOver = (event) => {
    if (this.state.dragging) {
      this.setState({ hidden: true })
    }
  }

  onKeyUp = (event) => {
    const h = event.target;
    h.height(50).height(h[0].scrollHeight);
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
    const { text, xPos, yPos, colour, id } = this.props;
    const { dragging, editing, hidden } = this.state;
    return (
      <div
        className={dragging && hidden ? 'postItContainer dragging' : 'postItContainer'}
        style={{ left: xPos, top: yPos, backgroundColor: dragging && hidden ? undefined : colour }}
        draggable
        //onDrag={this.onDrag}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragOver={this.onDragOver}
      >
        <div className="postIt" id={id}>
          <textarea
            ref={(comp) => this.ref = comp}
            className='postItInput'
            value={text}
            onChange={this.updateText}
            rows={4}
            //onKeyUp={this.onKeyUp}
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
      </div>
    )
  }
}



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

