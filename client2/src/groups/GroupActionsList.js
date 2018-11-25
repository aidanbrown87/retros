import React, { Component } from "react";
import PropTypes from "prop-types";

class GroupActionsList extends Component {
  render() {
    const { actions } = this.props;
    return (
      <ul className="actionsList">
        {actions.map((action, id) => (
          <li key={action + id}>{action}</li>
        ))}
      </ul>
    );
  }
}

GroupActionsList.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string)
};

export default GroupActionsList;
