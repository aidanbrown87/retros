import React from 'react'
import Draggable from 'react-draggable'
import edit from './images/edit.svg'
import './postIt.css'

const PostIt = (props) => {
  const editPostIt = () => {

  }

  return (
    <Draggable>
      <li className="postIt">
        <div className="postit-toolbar">
          <button>
            <img src={edit} className="edit-icon" alt="edit" />
          </button>
        </div>
        {props.postIt.isEditing ? "EDITING" : <div className="postit-text">{props.postIt.text}</div>}

      </li>
    </Draggable>
  )

}

export default PostIt
