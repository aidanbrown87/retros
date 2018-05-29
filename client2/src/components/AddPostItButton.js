import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPostIt } from '../postIts/reducer';

class AddPostItButton extends Component {
  render() {
    const { addPostIt } = this.props;
    return (
      <button
        onClick={addPostIt}
        style={{ position: 'absolute', left: 20, bottom: 20 }}
      >
        +
      </button>
    )
  }
}

const mapStateToProps = state => state.user

const mapDispatchToProps = (dispatch, ownProps) => ({
  addPostIt: () => dispatch(addPostIt("test"))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPostItButton)
