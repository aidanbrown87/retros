import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GroupName extends Component {
  static propTypes = {
    name: PropTypes.string,
    editName: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  toggleEditingGroup = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  onBlur = event => {
    const { editName, id } = this.props;
    const value = event.target.value;
    editName(id, value);
    this.toggleEditingGroup();
    event.preventDefault();
  };

  render() {
    const { name } = this.props;
    if (this.state.isEditing) {
      return (
        <input
          className="group-name"
          defaultValue={name}
          onBlur={this.onBlur}
        />
      );
    }
    return (
      <span className="group-name" onClick={this.toggleEditingGroup}>
        {name || "Group Name"}
      </span>
    );
  }
}
