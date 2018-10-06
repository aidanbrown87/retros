import React, { Component } from "react";
import PropTypes from "prop-types";

class GroupActions extends Component {
  render() {
    const { actions } = this.props;
    return (
      <ul>
        {actions.map(action => (
          <li>{action}</li>
        ))}
      </ul>
    );
  }
}

GroupActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string)
};

export default GroupActions;
