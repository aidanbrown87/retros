import React from 'react'
import Draggable from 'react-draggable'
import edit from './images/edit.svg'
import './postIt.css'

const PostItInput = (props) => {
  const onChange = (event) => {
    console.log("onChange", event);
    props.onEdit(props.id, event.target.value)
  }

  const onBlur = (event) => {
    console.log("onBlur");
    props.onBlur(props.id)
  }

  return (
    <textarea className="postIt-input" value={props.text} onChange={onChange} onBlur={onBlur}/>
  )
}

const PostIt = (props) => {

  return (
    <Draggable>
      <li className="postIt">
        <div className="postit-toolbar">
          {!props.postIt.isEditing &&
            <button onClick={() => props.editPostIt(props.postIt.id)}>
              <img src={edit} className="edit-icon" alt="edit" />
            </button>
          }

        </div>
        {props.postIt.isEditing ?
          <PostItInput text={props.postIt.text} onEdit={props.onEdit} onBlur={props.finishEdit} id={props.postIt.id}/> :
          <div className="postit-text">{props.postIt.text}</div>}
      </li>
    </Draggable>
  )

}

export default PostIt
