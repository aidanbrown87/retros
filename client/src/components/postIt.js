import React from 'react'
import Draggable from 'react-draggable'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import './postIt.css'

const iconStyles = {
  height: 12,
  width: 12
};

const inputStyles = {
  margin: 10,
  fontSize: 12,
  lineHeight: 1.5
}

const PostItInput = (props) => {
  const onChange = (event) => {
    props.onEdit(props.id, event.target.value)
  }

  const onBlur = (event) => {
    props.onBlur(props.id)
  }

  return (
    <TextField
      value={props.text}
      onChange={onChange}
      onBlur={onBlur}
      style={inputStyles}
      multiLine fullWidth
    />
  )
}

const PostIt = (props) => {

  return (
    <Draggable>
      <Paper zDepth={2} className="postIt">
        <div className="postit-toolbar">
          {!props.postIt.isEditing && props.postIt.author === props.username &&
            <button onClick={() => props.editPostIt(props.postIt.id)}>
              <Edit className="edit-icon" style={iconStyles} />
            </button>
          }

        </div>
        {props.postIt.isEditing ?
          <PostItInput text={props.postIt.text} onEdit={props.onEdit} onBlur={props.finishEdit} id={props.postIt.id}/> :
          <div className="postit-text">{props.postIt.text}</div>}
      </Paper>
    </Draggable>
  )

}



export default PostIt
