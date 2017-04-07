import React from 'react'
import { connect } from 'react-redux'
import { sendPostIt } from '../actions/index'

class AddField extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: ''};
 }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.dispatch(sendPostIt(this.state.value))
    event.preventDefault();
  }

  render() {
    return (
      <form className="addField" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default connect(state => state)(AddField)
