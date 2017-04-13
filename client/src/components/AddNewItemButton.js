import React from 'react'
import { connect } from 'react-redux'
import { sendPostIt } from '../actions/index'
import './fab.css';

class AddNewItemButton extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: ''};
 }

  handleClick = (event) => {
    this.props.dispatch(sendPostIt())
    event.preventDefault();
  }

  render() {
    return (
      <button className="fab" onClick={this.handleClick}>+</button>
    );
  }
}


export default connect(state => state)(AddNewItemButton)
