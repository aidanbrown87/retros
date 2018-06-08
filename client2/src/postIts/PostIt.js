import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './postIt.css';


export default class PostIt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dragging: false,
      dragStartX: undefined,
      dragStartY: undefined,
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
    })
  }

  onDragOver = (event) => {
    this.setState({ dragging: true })
  }

  onKeyUp = (event) => {
    const h = event.target;
    h.height(50).height(h[0].scrollHeight);
  }


  render() {
    const { text, xPos, yPos } = this.props;
    const { dragging } = this.state;
    return (
      <div
        className={dragging ? 'postIt dragging' : 'postIt'}
        style={{ left: xPos, top: yPos }}
        draggable
        //onDrag={this.onDrag}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragOver={this.onDragOver}
      >
        <textarea
          ref={(comp) => this.ref = comp}
          className='postItInput'
          value={text}
          onChange={this.updateText}
          rows={4}
          //onKeyUp={this.onKeyUp}
        />
      </div>
    )
  }
}



