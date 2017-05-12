import React from 'react'
import { connect } from 'react-redux'
import { sendPostIt } from '../actions/index'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './fab.css';

const AddNewItemButton = (props) => {

  const handleClick = (event) => {
    props.dispatch(sendPostIt(props.user.username))
    event.preventDefault();
  }

  return (
    <FloatingActionButton secondary={true} className="fab" onTouchTap={handleClick} style={{position: 'fixed'}}>
      <ContentAdd />
    </FloatingActionButton>
  );
}


export default connect(state => state)(AddNewItemButton)
