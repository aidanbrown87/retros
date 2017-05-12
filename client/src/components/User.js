import React from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { addUsername } from '../actions/index'
import TextField from 'material-ui/TextField';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };


  render() {
    return (
      <div>
      {!this.props.username &&
        <Dialog
            title="Add a Username"
            actions={
              <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={() => this.props.dispatch(addUsername(this.state.username))}
              />
            }
            modal={true}
            open={true}
          >
            <TextField
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Dialog>
      }
      </div>
    );
  }

}

export default connect(state => state.user)(User)
