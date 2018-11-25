import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupActionsList from './GroupActionsList';

class GroupActions extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false,
      action: "",
    }
  }
  
  toggleOpen = (event) => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onBlurAction = event => {
    const value = this.state.action;
    console.log(value)
    if (value !== "") {
      console.log(event)
      this.props.addGroupAction(this.props.id, value);
      this.setState({ action: "" })
    }
    
    event.preventDefault();
  };

  updateAction = (event) => {
    console.log("updating actions")
    const value = event.target.value;
    this.setState({ action: value })
    event.preventDefault();
  }

  render() {
    const { actions, name, id, editGroupName } = this.props;
    return [
      <div key="actionsList" className="groupActions" style={{ height: this.state.isOpen ? 'auto' : 0 }}>
      <form className="addActionForm">
          <input onChange={this.updateAction} />
          <button type='sumbit' onClick={this.onBlurAction}>Add Action</button>
        </form>
        <GroupActionsList actions={actions} />
      </div>,
      <div key="toggleActionsList" onClick={this.toggleOpen}>{this.state.isOpen ? "^" : "+"}</div>
    ];
  }
}

GroupActions.propTypes = {
  addGroupAction: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  id: PropTypes.string,
};

export default GroupActions;
