import React from 'react'
import { connect } from 'react-redux'
import { sendPostIt } from '../actions/index'
import './fab.css';

const AddNewItemButton = (props) => {

  const handleClick = (event) => {
    props.dispatch(sendPostIt())
    event.preventDefault();
  }

  return (
    <button className="fab" onClick={handleClick}>+</button>
  );
}


export default connect(state => state)(AddNewItemButton)
