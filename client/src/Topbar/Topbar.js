import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Topbar.scss';

export default class Topbar extends Component {
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className="appbar-title">
            Opensource App Finder
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
