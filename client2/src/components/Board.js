import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Board extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography variant="title" color="inherit" style={{ flexGrow: 1 }} >
                            Retros
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                
            </div>
        );
    }
}

Board.propTypes = {

};

export default Board;