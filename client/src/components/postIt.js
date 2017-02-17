import React from 'react'
import Draggable from 'react-draggable'

const PostIt = (props) =>
  <Draggable>
    <li>{props.postIt.text}</li>
  </Draggable>

export default PostIt
