import React, { Component } from "react";
import { connect } from "react-redux";
import { addPostIt } from "../postIts/reducer";

class AddPostItButton extends Component {
  render() {
    const { addPostIt } = this.props;
    return (
      <button
        onClick={addPostIt}
        style={{
          position: "absolute",
          left: 20,
          bottom: 20,
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "blue",
          fontSize: 20,
          color: 'white',
          outline: 'none',
        }}
      >
        +
      </button>
    );
  }
}

const mapStateToProps = state => state.user;

const mapDispatchToProps = (dispatch, ownProps) => ({
  addPostIt: () => dispatch(addPostIt("test"))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostItButton);
