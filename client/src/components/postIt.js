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
  const { postIt, username, editPostIt, updatePosition } = props
  const { isEditing, author, xPos, yPos, id } = postIt
  const position = {x: xPos, y: yPos}

  const onControlledDrag = (e, position) => {
    const {x, y} = position;
    updatePosition(id, x, y)
  }

  return (
    <Draggable position={position} onDrag={onControlledDrag}>
      <Paper zDepth={2} className="postIt">
        <div className="postit-toolbar">
          {!isEditing &&
            author === username ?
              <button onClick={() => editPostIt(id)}>
                <Edit className="edit-icon" style={iconStyles} />
              </button>
              :
              null

          }

        </div>
        {props.postIt.isEditing && props.postIt.author === props.username ?
          <PostItInput text={props.postIt.text} onEdit={props.onEdit} onBlur={props.finishEdit} id={props.postIt.id}/> :
          <div className="postit-text">{props.postIt.text}</div>}
      </Paper>
    </Draggable>
  )

}



export default PostIt
