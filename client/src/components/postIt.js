import React from 'react'
import Draggable from 'react-draggable'

const PostIt = (props) =>
  <Draggable>
    <li>
      <div className="postit-toolbar"><button>edit</button></div>
      <div className="postit-text">{props.postIt.text}</div>
    </li>
  </Draggable>

export default PostIt
