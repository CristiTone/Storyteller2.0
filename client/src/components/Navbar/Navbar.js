import React from 'react';
// import PropTypes from 'prop-types';
import { AppBar, Toolbar, Icon, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LocalLibrary } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Icon className={classes.menuButton}>
            <LocalLibrary />
          </Icon>
          <Typography variant='h6' className={classes.title}>
            Storyteller
          </Typography>
          <Button
            variant='outlined'
            color='inherit'
            className={classes.menuButton}
          >
            Sign in
          </Button>
          <Button
            variant='contained'
            color='secondary'
            className={classes.menuButton}
          >
            Create account
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// Navbar.propTypes = {};

export default Navbar;
