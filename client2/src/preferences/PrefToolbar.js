import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setPostItSize } from './prefsReducer';

class PrefToolbar extends Component {
  static propTypes = {
    postItSize: PropTypes.string,
  }

  setSize = (size) => () => this.props.setSize(size)

  render() {
    return (
      <div>
        <button onClick={this.setSize('s')}>small</button>
        <button onClick={this.setSize('m')}>medium</button>
        <button onClick={this.setSize('l')}>large</button>
      </div>
    )
  }
}

const mapStateToProps = ({ prefs }) => ({ prefs })

const mapDispatchToProps = (dispatch) => ({
  setSize: (size) => dispatch(setPostItSize(size))
})

export default connect(mapStateToProps, mapDispatchToProps)(PrefToolbar)
