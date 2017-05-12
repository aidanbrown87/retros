import React, { PropTypes, Component } from 'react'
import Paper from 'material-ui/Paper';
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Home.css'

const styles = {
  joinText: {
    color: '#fff',
    textAlign: 'center',
  },
  joinBtn: {
    width: 50
  },
}


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinFieldOpen: false
    }
  }

  openJoinFields = () => {
    this.setState({ joinFieldOpen: true })
  };

  render() {
    return (
      <div className='homeContent'>
        <div></div>
        <Button secondary fullWidth label="Create New Board" />
        <div className='or'>OR</div>
        <div className={this.state.joinFieldOpen ? 'joinContainer openContainer' : 'joinContainer'}>
          {!this.state.joinFieldOpen && <Button secondary fullWidth label="Join Existing Board" onTouchTap={this.openJoinFields} />}
          <div className={this.state.joinFieldOpen ? 'joinFields open' : 'joinFields'}>

            <TextField inputStyle={styles.joinText} />
            <Button style={styles.joinBtn} primary label="Join" />
          </div>
        </div>

      </div>
    )
  }

}

export default Home
