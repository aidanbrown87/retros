import React from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';


const styles = {
  float: 'right',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  color: 'white',
}

const Nav = (props) => {
  return (
    <AppBar
      title={<img id="logo" src={'./images/retros-logo4.png'} alt="retro Logo" />}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    >
      <div><h3 style={styles}>{props.username}</h3></div>
    </AppBar>
  );
}

export default connect(state => state.user)(Nav)
