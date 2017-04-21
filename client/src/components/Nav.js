import React from 'react';
import AppBar from 'material-ui/AppBar';
import User from './User'

export default (props) => {
  return (
    <AppBar
      title={<img id="logo" src={'./images/retros-logo4.png'} alt="retro Logo" />}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    >
      <User />
    </AppBar>
  );
}
